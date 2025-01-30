import { Canvas } from "@react-three/fiber";
import { Experience1 } from "./components/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen">
      {/* ✅ Navbar should be OUTSIDE the Canvas */}
      <Navbar />

      <Canvas
        camera={{
          fov: 75,
          position: [1, 2, 2.3],
        }}
      >
        <Experience1 />
      </Canvas>
    </div>
  );
}

export default App;
