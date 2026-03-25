# Herramientas del ecosistema backend

## Axios

Axios es una librería de JavaScript para hacer peticiones HTTP desde el navegador o desde Node.js. Es una alternativa a fetch() nativa con ventajas como manejo automático de errores HTTP, transformación automática de JSON y mejor compatibilidad con navegadores antiguos.

**¿Por qué se usa?**
- Convierte automáticamente las respuestas a JSON sin necesidad de llamar a .json()
- Lanza errores automáticamente cuando el servidor devuelve un 4xx o 5xx
- Permite cancelar peticiones y configurar timeouts fácilmente

## Postman

Postman es una herramienta visual para probar APIs REST. Permite hacer peticiones HTTP de cualquier tipo (GET, POST, PUT, DELETE), guardar colecciones de peticiones, compartirlas con el equipo y automatizar pruebas.

**¿Por qué se usa?**
- Permite probar endpoints sin necesidad de tener el frontend listo
- Guarda el historial de peticiones para reutilizarlas
- Permite documentar la API visualmente

## Sentry

Sentry es una plataforma de monitorización de errores en producción. Captura automáticamente los errores que ocurren en el servidor o en el navegador y los envía a un panel donde puedes ver la traza completa, el usuario afectado y el contexto del error.

**¿Por qué se usa?**
- En producción no tienes acceso a la terminal del servidor para ver console.error()
- Alerta automáticamente cuando algo falla
- Guarda el historial de errores para analizarlos

## Swagger

Swagger es una herramienta para documentar APIs REST de forma automática y visual. Genera una página web interactiva donde cualquier desarrollador puede ver todos los endpoints disponibles, sus parámetros y probarlos directamente desde el navegador.

**¿Por qué se usa?**
- Facilita que otros desarrolladores entiendan y usen tu API
- La documentación se mantiene siempre actualizada con el código
- Permite probar la API sin necesidad de Postman