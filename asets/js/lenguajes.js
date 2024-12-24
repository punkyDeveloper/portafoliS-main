fetch('./asets/json/skist.json')
.then(response => response.json())
.then(datos => {
          let cad = '';
          for (let leguajesDev of datos) {
            cad += `<div class="flex flex-col items-center">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <img src="${leguajesDev.img}" alt="Error al cargar la img">
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">${leguajesDev.nombre}</h3>
                </div>`;
          }
          document.getElementById("lenguajes").innerHTML = cad;

      })
.catch(err => console.log('Solicitud fallida', err)); 
