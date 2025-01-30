import { useState } from "react";
import "./styles/App.css";
import { Canvas } from "@react-three/fiber";
import { Experience1 } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [1, 2, 2.3],
      }}
    >
      <Experience1 />
    </Canvas>
  );
}

export default App;
