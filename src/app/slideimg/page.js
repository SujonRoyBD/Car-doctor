'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Slideimg() {
  const [width, setWidth] = useState(50);

  // Handle Wheel for Scroll
  const handleWheel = (e) => {
    e.preventDefault();  // Prevent page scroll
    const delta = e.deltaY > 0 ? 5 : -5; // Adjust scroll speed
    setWidth((prevWidth) => {
      const newWidth = prevWidth + delta;
      // Ensure width stays between 0 and 100
      return Math.min(Math.max(newWidth, 0), 100);
    });
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-ew-resize"
      onWheel={handleWheel}  // Scroll event for adjusting width
    >
      {/* Right Image */}
      <div
        className="absolute top-0 left-0 h-full z-0"
        style={{ width: `${100 - width}%` }}  // Right image width changes based on left image width
      >
        <Image
          src="/aseats/our-service3.png"
          alt="Right"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Left Image */}
      <div
        className="absolute top-0 left-0 h-full z-0 transition-all duration-300 ease-in-out"
        style={{ width: `${width}%` }}  // Left image width changes with scroll
      >
        <Image
          src="/aseats/our-service2.png"
          alt="Left"
          width={1920}
          height={1070}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Slider Handle Line */}
      <div
        className="absolute top-0 h-full z-0 bg-white opacity-70"
        style={{
          left: `${width}%`,
          width: '2px',
          transform: 'translateX(-1px)',
        }}
      ></div>
    </div>
  );
}
