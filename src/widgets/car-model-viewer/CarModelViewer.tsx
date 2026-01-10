"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

interface CarModelProps {
  modelPath: string;
}

function CarModel({ modelPath }: CarModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
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
