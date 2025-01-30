import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Urus(props) {
  const { scene } = useGLTF("./models/Urus.glb");
  const ref = useRef();
  const pivotRef = useRef();
  const scroll = useScroll();

  useLayoutEffect(() => {
    if (ref.current) {
      // Center the model
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.set(-center.x, -center.y, -center.z);
    }
  }, []);

  useFrame(() => {
    if (pivotRef.current) {
      pivotRef.current.position.y = -scroll.offset * 10; // Moves down as user scrolls
      pivotRef.current.rotation.y = scroll.offset * Math.PI; // Rotates as it moves
    }
  });

  return (
    <group {...props} dispose={null}>
      {/* Lights for visibility */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0} />

      {/* Shift slightly right */}
      <group
        ref={pivotRef}
        position={[0.3, -1, 0]}
        rotation={[-Math.PI / 8, 10, 0]}
      >
        <group ref={ref} scale={[0.4, 0.4, 0.4]}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/Urus.glb");
