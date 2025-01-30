import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export function Crosses(props) {
  const { scene } = useGLTF("./models/3crosses.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const ref = useRef();
  const pivotRef = useRef();
  const scroll = useScroll();

  useLayoutEffect(() => {
    if (ref.current) {
      // Compute the bounding box and re-center the model
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center); // Get the model's center
      ref.current.position.set(-center.x, -center.y, -center.z); // Re-center the model
      ref.current.rotation.set(0, 0, 0); // Reset baked-in rotations
    }
  }, []);

  useFrame(() => {
    if (pivotRef.current) {
      pivotRef.current.rotation.y = scroll.offset * Math.PI * 2; // Rotate smoothly with scroll
    }
  });

  return (
    <group {...props} dispose={null}>
      {/* Pivot point ensures rotation is around the center */}
      <group
        ref={pivotRef}
        position={[0, -4.5, 0]} // Keep it lower in the footer
        rotation={[-0.75, -0.1, -0.05]} // More uniform backward tilt, slight correction on y and z
      >
        <group ref={ref} scale={[0.25, 0.25, 0.25]}>
          <primitive object={clone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/3crosses.glb");
