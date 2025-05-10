import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-white dark:bg-zinc-900 text-black dark:text-white border-t border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo + descripción */}
            <div>
              <h2 className="text-xl font-bold">print(“punkydev”)</h2>
            </div>
  
            {/* Secciones de enlaces */}
            <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <p className="text-sm font-semibold mb-4">Categorias</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><Link  href="/">Home</Link ></li>
                  <li><Link  href="/proyectos">Proyectos</Link ></li>
                  <li><Link  href="/#">Acerca de mi</Link ></li>
                  <li><Link  href="/#">Habilidades</Link ></li>
                  <li><Link  href="/#">Contacto</Link ></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold mb-4">Social</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><Link  href="https://github.com/punkyDeveloper">Github</Link ></li>
                  <li><Link  href="#">Instagram</Link ></li>
                  <li><Link  href="https://www.linkedin.com/in/santiago-hernandez-developer/">LinkedIn</Link ></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Pie inferior */}
          <div className="mt-12 border-t border-gray-200 dark:border-zinc-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <p>© 2025 Copyright. punkydeveloper</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">punkydeveloper</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  