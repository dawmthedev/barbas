import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Hat(props) {
  const { nodes, materials } = useGLTF("/models/cap.glb"); // Ensure the correct model path
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Vertical Animation
    tl.current.to(ref.current.position, {
      duration: 2,
      y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
    });

    // Cross Rotation Animation (example)
    tl.current.to(ref.current.rotation, {
      duration: 1,
      x: 0,
      y: Math.PI / 6,
      z: 0,
    });
    tl.current.to(ref.current.rotation, {
      duration: 1,
      x: 0,
      y: -Math.PI / 6,
      z: 0,
    });

    // Cross Movement Animation
    tl.current.to(ref.current.position, {
      duration: 1,
      x: -1,
      z: 2,
    });
    tl.current.to(ref.current.position, {
      duration: 1,
      x: 1,
      z: 2,
    });

    // Library Floor Animation
    tl.current.from(libraryRef.current.position, {
      duration: 0.5,
      x: -2,
    });
    tl.current.from(libraryRef.current.rotation, {
      duration: 0.5,
      y: -Math.PI / 2,
    });

    // Attic Animation
    tl.current.from(atticRef.current.position, {
      duration: 1.5,
      y: 2,
    });

    tl.current.from(atticRef.current.rotation, {
      duration: 0.5,
      y: Math.PI / 2,
    });

    tl.current.from(atticRef.current.position, {
      duration: 0.5,
      z: -2,
    });
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh
        geometry={nodes["Shape_0"].geometry}
        material={materials["Material_0"]}
      />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh
            geometry={nodes["Shape_1"].geometry}
            material={materials["Material_1"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["Shape_2"].geometry}
            material={materials["Material_2"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cap.glb");
