"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Frontend",
    features: [
      "Figma", "Next.js", "ReactJS", "JavaScript", "CSS", "HTML",
      "EJS", "jQuery", "Astro.js", "Tailwind CSS", "Bootstrap",
    ],
    button: {
      label: "Ver Proyectos",
      icon: <ArrowRight className="ml-2 h-4 w-4" />,
    },
    buttonStyle: "bg-white text-black hover:bg-gray-200",
  },
  {
    title: "Backend",
    features: [
      "Node.js", "Express.js", "MongoDB", "API REST", "SQL", "MySQL",
      "Mongoose", "GraphQL", "REST", "RESTful", "API", "API RESTful",
    ],
    button: {
      label: "Ver Proyectos",
      icon: <ArrowRight className="ml-2 h-4 w-4" />,
    },
    buttonStyle: "bg-white text-black hover:bg-gray-200",
  },
  {
    title: "QA",
    features: [
      "Cypress", "Postman", "Pruebas manuales", "JMeter", "Pruebas de integración",
      "Cucumber", "Pruebas de humo", "Pruebas de sanidad", "Pruebas de regresión",
      "Pruebas de carga", "Pruebas de estrés", "Pruebas de rendimiento",
      "Pruebas de seguridad", "Pruebas de usabilidad", "Pruebas de compatibilidad",
      "Pruebas de aceptación", "Pruebas de interfaz de usuario", "Pruebas de API",
      "Pruebas de base de datos",
    ],
    button: {
      label: "Ver Proyectos",
      icon: <ArrowRight className="ml-2 h-4 w-4" />,
    },
    buttonStyle: "bg-white text-black hover:bg-gray-200",
  },
];

export default function PricingCards() {
  return (
    // <section
    //   className="relative py-20 lg:py-40 text-black dark:text-white transition-colors duration-300"
    //   style={{
    //     background: "linear-gradient(to bottom, #ffffff, #f1f1f1, #b1b1b1,#4e536e, #161f31)",
    //   }}
    // >
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" >
    {/* Fondo sobrio con animación */}
    <div
      className="absolute inset-0 z-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black animate-gradient bg-[length:400%_400%]"
      style={{
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite"
      }}
    ></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white dark:text-white">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between bg-white/80 dark:bg-zinc-900/90 backdrop-blur-sm shadow-lg transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Check className="text-green-500 w-5 h-5 mt-1" />
                      <p className="font-medium">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-4 flex items-center justify-center w-full py-2 px-4 rounded-md font-semibold text-sm transition ${plan.buttonStyle}`}
              >
                {plan.button.label}
                {plan.button.icon}
              </button>
            </div>
          ))}
        </div>
      </div>
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
