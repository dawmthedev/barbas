import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useState } from "react";

const Section = (props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: props.opacity, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full  rounded-lg px-8 py-12">
          {props.children}
        </div>
      </div>
    </motion.section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-bold text-4xl text-gray-800">El Barbas Hats</h1>
          <p className="text-gray-600 mt-4">
            The finest handcrafted Mexican hats in the nation.
          </p>
          <ul className="leading-9 mt-6">
            <li>🇲🇽 Authentic Mexican Design</li>
            <li>🧵 Premium Handwoven Materials</li>
            <li>🕶️ Iconic Styles for Every Occasion</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-bold text-4xl text-gray-800">
            Signature Collections
          </h1>
          <p className="text-gray-600 mt-4">
            Timeless and modern designs for true hat lovers.
          </p>
          <ul className="leading-9 mt-6">
            <li>🔥 Corridos Tumbados Edition</li>
            <li>👑 Charro & Ranchero Classics</li>
            <li>🌵 Vaquero Lifestyle Series</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-bold text-4xl text-gray-800">
            Join the El Barbas Community
          </h1>
          <p className="text-gray-600 mt-4">
            Stay ahead with exclusive drops and collaborations.
          </p>
          <p className="mt-6 p-3 bg-gray-200 rounded-lg">
            📞{" "}
            <a
              href="https://wa.me/+525555555555"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us on Whop
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
