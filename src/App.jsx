import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Experience1 } from "./components/Experience";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// Content Section Components
const ContentSection = ({ title, description, children }) => (
  <div className="content-section py-8 px-10">
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    <p className="text-white text-lg mt-4">{description}</p>
    <div className="content-details mt-8">{children}</div>
  </div>
);

// Scroll Section Component
const ScrollSection = () => (
  <div className="flex-1 overflow-auto bg-red-500 p-4 flex flex-col">
    {/* Content Scroll Section */}
    <ContentSection
      title="Get Expert Picks Built Off Analytics"
      description="Our research-based parlays provide you with the most up-to-date information on what to play and when to play it. Join us today and experience the Pats Picks advantage."
    >
      <p className="text-white">Picks for the sports you love:</p>
      <div className="mt-4 flex flex-wrap justify-start gap-4">
        <div className="bg-white text-red-500 px-6 py-3 rounded-full">
          Football
        </div>
        <div className="bg-white text-red-500 px-6 py-3 rounded-full">
          Basketball
        </div>
        <div className="bg-white text-red-500 px-6 py-3 rounded-full">
          Baseball
        </div>
        <div className="bg-white text-red-500 px-6 py-3 rounded-full">
          Ice Hockey
        </div>
        <div className="bg-white text-red-500 px-6 py-3 rounded-full">
          Soccer
        </div>
      </div>
    </ContentSection>
    <div style={{ height: "1500px" }}></div> {/* Example content */}
  </div>
);

function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Canvas for 3D Experience */}
      <Canvas
        camera={{
          fov: 75,
          position: [1, 2, 2.3],
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <Experience1 />
      </Canvas>

      {/* Main content */}
      <div className="relative z-10 w-full h-screen flex flex-col">
        <Hero />
        <div className="flex-1 overflow-auto bg-red-500 p-4 z-10">
          <ScrollSection />
        </div>

        {/* Pay Now Section */}
        <div className="bg-yellow-500 z-10">
          <div className="paywall-container flex justify-center items-center py-4">
            <button className="pay-now-button bg-red-600 text-white px-6 py-2">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
