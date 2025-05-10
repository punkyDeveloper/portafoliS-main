"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Demo from "./my/page"; 
import Skis from "./skis/page";
import Footer from "./footer/footer";
import Contacto from "./contacto/contacto";
import Nav from "./nav/nav";

export default function LampDemo() {
  return (
    <>
      {/* Navbar fijo */}
      <Nav />

      {/* Contenido con padding para evitar que quede oculto por el navbar */}
      <div className="pt-14">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-center"
          >
            <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Códigos que diseñan el futuro
            </h1>
            <p className="text-slate-200 text-lg md:text-2xl mt-4 px-4">
              ¡Atrévete a convertir tus ideas en código y da vida a tus proyectos más ambiciosos!
              <br />La programación es tu herramienta para crear el mundo que deseas.
            </p>
          </motion.div>
        </LampContainer>
        <div id="yo">

          <Demo  />
        </div>
        <div id="skill">
          <Skis />

        </div>
        <div id="contacto">
          <Contacto />
        </div>
          <Footer />
      </div>
    </>
  );
}
