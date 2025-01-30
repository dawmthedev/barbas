import React, { useState, useEffect } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-[100px] flex justify-center items-center transition-all z-[999]"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isHovered
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isMobile && (
        <button
          className="btn absolute left-4 top-4"
          onClick={() => setToggle(!isToggled)}
        >
          =
        </button>
      )}

      {!isMobile && (
        <div className="flex gap-5 font-semibold">
          <p>STUDIOS</p>
          <p>SPORTS</p>
          <p>CAPSULE</p>
          <div>
            <img
              src="/assets/barbaslogo.png"
              alt="Logo"
              className="w-[50px] h-[50px]"
            />
          </div>
          <span className="cursor-pointer">👤</span>
          <span className="cursor-pointer">🛍️</span>
        </div>
      )}

      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
