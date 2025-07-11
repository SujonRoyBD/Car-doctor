'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Slideimg() {
  const [width, setWidth] = useState(50);

  // Handle Mouse Move for resizing
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newWidth = (x / rect.width) * 100;
    setWidth(newWidth);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}  // Only width is changed, height stays fixed
    >
      {/* Right Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
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
        style={{ width: `${width}%`, height: '100%' }}  // Ensure height stays fixed
      >
        <Image
          src="/aseats/our-service2.png"
          alt="Left"
          width={1920}
          height={1080}
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
