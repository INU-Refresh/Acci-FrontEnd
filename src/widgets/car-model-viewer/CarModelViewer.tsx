"use client";

import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, useCursor, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

interface CarModelProps {
  modelPath: string;
}

type ClickState = 0 | 1 | 2 | 3; // 0: 클릭 안함, 1: 노랑, 2: 주황, 3: 빨강

function CarModel({ modelPath }: CarModelProps) {
  const { scene } = useGLTF(modelPath);
  const [hoveredMesh, setHoveredMesh] = useState<THREE.Mesh | null>(null);
  const [clickStateMaps] = useState(() => new Map<THREE.Mesh, ClickState>());
  const originalColors = useMemo(() => new Map<THREE.Mesh, THREE.Color>(), []);

  useEffect(() => {
    // 독립적인 색상 변경을 위해 재질을 클론하고 기본 색상을 저장
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
        }
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        if (material?.color) {
          originalColors.set(mesh, material.color.clone());
        }
      }
    });
  }, [scene, originalColors]);

  useCursor(!!hoveredMesh);

  const getColorByClickState = (state: ClickState): string => {
    const colorMap: Record<ClickState, string> = {
      0: "#0000ff", // 호버: 파랑
      1: "#ffff00", // 1번 클릭: 노랑
      2: "#ffa500", // 2번 클릭: 주황
      3: "#ff0000", // 3번 클릭: 빨강
    };
    return colorMap[state];
  };

  const updateMeshColor = (mesh: THREE.Mesh, state: ClickState) => {
    const material = mesh.material as THREE.MeshStandardMaterial;
    if (material?.color) {
      material.color.set(getColorByClickState(state));
    }
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const mesh = event.object as THREE.Mesh;
    // Body 메쉬는 호버 무시
    if (mesh.name === "Body") return;
    const currentState = clickStateMaps.get(mesh) || 0;
    // 클릭된 상태가 없으면 호버 색상(파랑) 적용
    if (currentState === 0) {
      setHoveredMesh(mesh);
      updateMeshColor(mesh, 0);
    }
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const mesh = event.object as THREE.Mesh;
    // Body 메쉬는 포인터 아웃 무시
    if (mesh.name === "Body") return;
    const currentState = clickStateMaps.get(mesh) || 0;

    // 클릭된 상태가 없으면 원래 색상으로 복원
    if (currentState === 0) {
      const originalColor = originalColors.get(mesh);
      if (originalColor) {
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.color.copy(originalColor);
      }
      setHoveredMesh(null);
    }
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const mesh = event.object as THREE.Mesh;
    // Body 메쉬는 클릭 무시
    if (mesh.name === "Body") return;

    // 클릭 상태 순환: 0 -> 1 -> 2 -> 3 -> 0
    const currentState = clickStateMaps.get(mesh) || 0;
    const nextState: ClickState = ((currentState + 1) % 4) as ClickState;

    clickStateMaps.set(mesh, nextState);
    updateMeshColor(mesh, nextState);
  };

  return <primitive object={scene} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick} />;
}

interface CarModelViewerProps {
  modelName: string;
  className?: string;
}

// 3D 자동차 모델 뷰어 컴포넌트
/*
 * <Canvas shadows camera={{ position: [3, 1.5, 4], fov: 45 }} style={{ background: "transparent" }>
 * shadows : 그림자 활성화
 * camera : 카메라 위치 및 시야각 설정
 * style : 캔버스 스타일 설정 (배경 투명)
 *
 * <Stage environment="city" intensity={0.5}/>
 * environment : 환경맵 프리셋
 * intensity : 조명의 밝기
 *
 * <OrbitControls />
 * enablePan : 마우스 드래그로 카메라 이동 가능 여부
 * enableZoom : 마우스 휠로 줌인/줌아웃 가능 여부
 * minDistance : 최소 카메라 거리
 * maxDistance : 최대 카메라 거리
 * minPolarAngle : 카메라의 최소 세로 각도 (라디안)
 * maxPolarAngle : 카메라의 최대 세로 각도 (라디안)
 */
export function CarModelViewer({ modelName, className = "" }: CarModelViewerProps) {
  const modelPath = `/models/${modelName}.glb`;

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows camera={{ position: [200, 30, -150], fov: 10 }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <CarModel modelPath={modelPath} />
          </Stage>
          <OrbitControls enablePan={false} enableZoom={true} minDistance={3} maxDistance={8} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.9} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// 모델 프리로드 함수
export function preloadCarModel(modelName: string) {
  useGLTF.preload(`/models/${modelName}.glb`);
}
