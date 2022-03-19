# Sistema de Cartelería digital
_Desarrollo e implementación de un sistema de difusión de contenidos con actualización remota. El sistema corre en un local host y se actualiza mediante G-drive._
## Tareas realizadas en este proyecto

* Idea
* Gestión y comercialización de los espacios
* Diseño y construcción de los dispositivos
* Desarrollo del sistema, actualización y mantenimiento
* Creación y edición en _Adobe After Effects_ de todos los contenidos en video.


## Construido con 🛠️

* JavaScript
* HTML
* CSS

### Librerías y frameworks
* [Bootstrap](https://getbootstrap.com/)
* [Jquery](https://jquery.com/)

## Método de actualización
* Upload de los contenidos multimedia via G-drive
* Edición de un Json con los URL y la meta-data

### Datos
* data/videosCarousel01.json
* data/videosCarousel02.json
* data/videosCarousel03.json
* data/videosPopUp.json
#### Fragmento de Json
```
"videos": [
      {
        "id": "00",
        "cliente": "HSM",
        "nombreVideo": "Veliocidades maximas",
        "fecha": "25/02/21",
        "url": "./img/velMax.mp4"
      },
```
### js
* js/entrada.js
* js/salida.js

### Inicio desde 
* entradaHSM.html
* SalidaHSM.html