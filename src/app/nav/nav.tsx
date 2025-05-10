'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <Link href="/">print(“punkydev”)
            </Link>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-gray-300 transition duration-300">Inicio</Link>
            <Link href="/proyectos" className="hover:text-gray-300 transition duration-300">Proyectos</Link>
            <Link href="/#yo" className="hover:text-gray-300 transition duration-300">Hacerca de mi</Link>
            <Link href="/#skill" className="hover:text-gray-300 transition duration-300">Abilidades</Link>
            <Link href="/#contacto" className="hover:text-gray-300 transition duration-300">Contacto</Link>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 text-lg font-medium bg-black px-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Inicio</Link>
            <Link href="/proyectos" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Proyectos</Link>
            <Link href="/#yo" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Hacerca de mi</Link>
            <Link href="/#skill" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Abilidades</Link>
            <Link href="/#contacto" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
