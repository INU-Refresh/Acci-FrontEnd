"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
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

export function CarModelViewer({ modelName, className = "" }: CarModelViewerProps) {
  const modelPath = `/models/${modelName}.glb`;

  return (
    <div className={`w-full h-[400px] ${className}`}>
      <Canvas shadows camera={{ position: [0.5, 5, 3], fov: 10 }} className="h-[400px]" style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <CarModel modelPath={modelPath} />
          </Stage>
          <OrbitControls enablePan={false} enableZoom={true} minDistance={0.8} maxDistance={4} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// 모델 프리로드 함수
export function preloadCarModel(modelName: string) {
  useGLTF.preload(`/models/${modelName}.glb`);
}
