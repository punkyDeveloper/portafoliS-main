"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensaje enviado:", formData);
    // Aquí podrías integrar EmailJS, Formspree o backend propio
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo sobrio con animación */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black animate-gradient bg-[length:400%_400%]"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      ></div>

      {/* Contenedor del formulario */}
      <div className="relative z-10 max-w-3xl mx-auto bg-black/70 dark:bg-zinc-900/90 backdrop-blur-md p-8 rounded-xl shadow-xl border border-zinc-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-white tracking-tight">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@domain.com"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              onChange={handleChange}
              value={formData.message}
              className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me how I can help you..."
            />
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Animación para fondo */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
