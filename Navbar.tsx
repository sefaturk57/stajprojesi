"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Sayfa kaydırılmışsa hafif koyu arka plan, değilse şeffaf
        isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Yazısı */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-extrabold tracking-wider text-white drop-shadow-md"
        >
          PERLA PARADISE
        </Link>

        {/* Menü Linkleri - Sadece sayfa kaydırılınca görünür olacak */}
        <nav>
          <ul 
            className={`flex items-center space-x-6 transition-opacity duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <li>
              <Link href="/hakkimizda" className="text-lg font-medium text-white hover:text-blue-300">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link 
                href="/iletisim" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-full"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;