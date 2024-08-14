React + Vite
PTKCRM

Prueba Técnica PTKCRM Frontend


Este repositorio contiene el proyecto frontend de la prueba técnica realizada en React y Vite.

Aquí se encuentran las vistas y funcionalidades correspondientes a las peticiones que contiene la API Backend, maquetadas y organizadas para una mejor visualización.

La aplicación es de una sola página y maneja el estado del login y el usuario autenticado a través del Context API.

La aplicación consta de un login, desde donde se toma la información de autenticación. No se implementó un registro, ya que los administradores pueden crear usuarios desde la vista de usuarios.

Vistas Principales:

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


Seguridad

En el frontend, aunque se identificaron áreas para mejorar en las validaciones, se aplicaron varias prácticas para reforzar la seguridad. Se organizó el proyecto en vistas y componentes principales, creando hooks para manejar la lógica de manera eficiente. Las peticiones se gestionan en una carpeta de servicios, y se definieron variables globales para permitir la autenticación y garantizar un flujo adecuado en la interfaz, como el usuario, el token y las vistas.

Buenas Prácticas

Para seguir buenas prácticas, se organizó el repositorio separando la lógica en los hooks correspondientes y el renderizado de las vistas. Además, se manejó la lógica de servicios de manera independiente, lo que facilita la mantenibilidad y escalabilidad del proyecto.

Pendientes de Trabajo

- Implementar cargadores.
- Añadir validaciones en el paginador.
- Ocultar los botones de editar y crear solicitud para usuarios con rol de empleado (aunque estas acciones ya están restringidas por la capa de seguridad del backend).
- Integrar notificaciones y alertas.
- Implementar funcionalidad para refrescar la página.
- Mejorar los estilos.
