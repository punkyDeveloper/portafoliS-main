fetch('./asets/json/proyecs.json')
  .then(response => {
    console.log("hola");
    return response.json();
  })
  .then(datos => {
    let cad = '';
    for (let usuario of datos) {
      cad += `<div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="${usuario.img}" loading="lazy" alt="No se encuentra foto" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>
        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">${usuario.proyectos}</a>
          </h2>
          <p class="mb-8 text-gray-500">${usuario.descripcion}</p>
          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="./asets/img/foto.jpeg" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="${usuario.botones.ruta_git}">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Github</button>
                </a>
              </div>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="${usuario.botones.ruta_ver}">
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Proyecto</button>
            </a>
          </div>
        </div>
      </div>`;
    }
    document.getElementById("p").innerHTML = cad;
  })
  .catch(err => console.log('Solicitud fallida', err));
