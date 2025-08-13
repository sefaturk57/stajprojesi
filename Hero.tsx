"use client"; // Parallax komponenti client-side çalışır

import Link from 'next/link';
import React from 'react';
import { Parallax } from 'react-parallax';

const Hero: React.FC = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/pamukkale.jpg" // public klasöründeki ana karşılama resmin
      bgImageAlt="Perla Paradise Turizm"
      strength={400} // Efektin gücü
    >
      <div className="h-screen flex items-center justify-center text-center">
        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl">
            Unutulmaz Anılar Biriktirin
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white px-4 max-w-4xl mx-auto">
            Hayallerinizdeki tatili Perla Paradise ile keşfedin.
          </p>
          <Link 
            href="#turlar-bolumu"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Turları Keşfet
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;