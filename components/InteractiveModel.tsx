// components/InteractiveModel.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { nodes } = useGLTF('/models/airfryer.glb');
  return (
    <mesh 
      onPointerOver={(e) => e.stopPropagation()}
      geometry={nodes.airfryer.geometry}
      material={nodes.airfryer.material}
    />
  )
}

export default function Scene() {
  return (
    <Canvas className="h-[400px]">
      <ambientLight intensity={0.5} />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
