import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Urus } from "./Urus";
import { Crosses } from "./3DCross";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Moves up on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // Fade out effect

  return (
    <motion.section
      ref={ref}
      className="hero-section"
      style={{
        y,
        opacity,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ fov: 75, position: [1, 2, 2.3] }}>
        <Urus />
        <Crosses />
      </Canvas>
      <motion.div className="hero-content">
        <h1>Welcome to the Streets</h1>
        <p>Where style meets power</p>
      </motion.div>
    </motion.section>
  );
};

export const ScrollableSections = ({ sections }) => {
  return (
    <div className="scroll-container">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="scroll-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={section.image}
            alt={section.title}
            className="scroll-image"
          />
          <h2>{section.title}</h2>
        </motion.div>
      ))}
    </div>
  );
};
