import { useGLTF, Environment } from "@react-three/drei";

export function Scene() {
  const { scene } = useGLTF("/assets/models/scene.glb");

  return (
    <>
      <primitive object={scene} scale={1.5} />
      <Environment preset="city" />
    </>
  );
}

useGLTF.preload("/assets/models/scene.glb");
