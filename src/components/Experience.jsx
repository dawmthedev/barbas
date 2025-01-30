import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Urus } from "./Urus";
import { Crosses } from "./3DCross";
import { Overlay } from "./Overlay";

export const Experience1 = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Urus />
        <Crosses />
      </ScrollControls>
    </>
  );
};
