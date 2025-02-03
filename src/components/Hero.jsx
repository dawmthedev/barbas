import React from "react";

const Hero = () => (
  <div className="relative w-full h-screen">
    {/* Video Background */}
    <video
      src="/assets/barbas.mov"
      autoPlay
      loop
      muted
      className="object-cover w-full h-full"
      style={{ objectPosition: "center 20%" }} // Adjust this value to shift the video content down
    />

    {/* Video Overlay (Gradient) */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

    {/* Content Section on top of video */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 py-6">
      <h1 className="text-4xl font-bold mb-4">#1 SPORTS BETTING COMMUNITY</h1>
      <p className="text-lg mb-8">
        Get a 75% win rate or your money back guaranteed!
      </p>
    </div>
  </div>
);

export default Hero;
