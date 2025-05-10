'use client';

import React from 'react';
import Image from 'next/image';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const proyectos = [
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación CRUD con autenticación, JWT, MongoDB y más.",
    imagen: "/img/tareas.png",
    github: "https://github.com/tuusuario/tareas",
    demo: "https://tareas.vercel.app",
  },
  {
    id: 2,
    titulo: "Tienda Virtual",
    descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
    imagen: "/img/tienda.png",
    github: "https://github.com/tuusuario/tienda",
    demo: "https://tienda.vercel.app",
  },
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación CRUD con autenticación, JWT, MongoDB y más.",
    imagen: "/img/tareas.png",
    github: "https://github.com/tuusuario/tareas",
    demo: "https://tareas.vercel.app",
  },
  {
    id: 2,
    titulo: "Tienda Virtual",
    descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
    imagen: "/img/tienda.png",
    github: "https://github.com/tuusuario/tienda",
    demo: "https://tienda.vercel.app",
  },
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación CRUD con autenticación, JWT, MongoDB y más.",
    imagen: "/img/tareas.png",
    github: "https://github.com/tuusuario/tareas",
    demo: "https://tareas.vercel.app",
  },
  {
    id: 2,
    titulo: "Tienda Virtual",
    descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
    imagen: "/img/tienda.png",
    github: "https://github.com/tuusuario/tienda",
    demo: "https://tienda.vercel.app",
  },
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación CRUD con autenticación, JWT, MongoDB y más.",
    imagen: "/img/tareas.png",
    github: "https://github.com/tuusuario/tareas",
    demo: "https://tareas.vercel.app",
  },
  {
    id: 2,
    titulo: "Tienda Virtual",
    descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
    imagen: "/img/tienda.png",
    github: "https://github.com/tuusuario/tienda",
    demo: "https://tienda.vercel.app",
  },
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación CRUD con autenticación, JWT, MongoDB y más.",
    imagen: "/img/tareas.png",
    github: "https://github.com/tuusuario/tareas",
    demo: "https://tareas.vercel.app",
  },
  {
    id: 2,
    titulo: "Tienda Virtual",
    descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
    imagen: "/img/tienda.png",
    github: "https://github.com/tuusuario/tienda",
    demo: "https://tienda.vercel.app",
  },

  // Puedes agregar más proyectos aquí
];

const Proyectos = () => {
  return (
    <>
      <Nav />
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        Proyectos
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {proyectos.map(({ id, titulo, descripcion, imagen, github, demo }) => (
          <div key={id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full w-full max-w-sm">
            <Image
              src={imagen}
              alt={titulo}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col justify-between flex-grow p-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{titulo}</h2>
                <p className="text-gray-600 mt-2 text-sm">{descripcion}</p>
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Proyectos;
