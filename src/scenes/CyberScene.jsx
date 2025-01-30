import React from "react";
import { useGLTF } from "@react-three/drei";

export function CyberScene() {
  const { scene } = useGLTF("./assets/models/cybercity.glb");
  return <primitive object={scene} scale={[0.3, 0.3, 0.3]} />;
}
