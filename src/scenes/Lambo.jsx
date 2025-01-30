import React from "react";
import { useGLTF } from "@react-three/drei";

export function Lambo() {
  const { scene } = useGLTF("./assets/models/lambo.glb");
  return <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />;
}
