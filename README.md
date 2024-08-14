React + Vite
PTKCRM

Prueba Técnica PTKCRM Frontend


Este repositorio contiene el proyecto frontend de la prueba técnica realizada en React y Vite.

Aquí se encuentran las vistas y funcionalidades correspondientes a las peticiones que contiene la API Backend, maquetadas y organizadas para una mejor visualización.

La aplicación es de una sola página y maneja el estado del login y el usuario autenticado a través del Context API.

La aplicación consta de un login, desde donde se toma la información de autenticación. No se implementó un registro, ya que los administradores pueden crear usuarios desde la vista de usuarios.

Vistas Principales
Usuarios: Esta vista muestra todos los usuarios registrados. Utiliza un componente de tabla y permite las acciones de editar, crear y borrar. Esta vista está accesible solo para los administradores.

Solicitudes: El usuario con rol de empleado puede ver las solicitudes asignadas a sí mismo, mientras que el rol de administrador puede ver todas las solicitudes, así como crearlas, editarlas y borrarlas.

Perfil: En esta vista se muestra la información del usuario logueado. Esta vista se presenta como la vista predeterminada al ingresar a la aplicación.

La aplicación también incluye otros componentes que alimentan las diferentes vistas y les proporcionan funcionalidad.

Instalación y Ejecución
Instalar los módulos:

bash
Copiar código
npm install
Configurar el puerto del backend:

Asegúrate de que el puerto del backend coincida con el puerto configurado en la aplicación frontend para poder realizar las peticiones adecuadamente.