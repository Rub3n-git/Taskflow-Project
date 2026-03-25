# TaskFlow — API REST

Backend construido con Node.js y Express para gestionar tareas.

## Requisitos

- Node.js v18 o superior
- npm

## Instalación
```bash
cd server
npm install
```

## Configuración

Crea un archivo `.env` en la carpeta `server` con:
```
PORT=3000
```

## Arrancar el servidor
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Arquitectura de carpetas
```
server/
  src/
  ├── config/
  │   └── env.js          → Lee .env y valida variables de entorno
  ├── controllers/
  │   └── task.controller.js  → Valida datos y gestiona respuestas HTTP
  ├── services/
  │   └── task.service.js     → Lógica pura de negocio
  ├── routes/
  │   └── task.routes.js      → Conecta URLs con controladores
  └── index.js                → Punto de entrada del servidor
```

## Middlewares

- **cors()**: Permite que el frontend (puerto 5500) se comunique con el servidor (puerto 3000).
- **express.json()**: Parsea el cuerpo de las peticiones HTTP de texto crudo a objetos JavaScript utilizables en req.body.
- **Middleware de errores**: Captura todos los errores no controlados. Si el error es NOT_FOUND devuelve 404, para cualquier otro devuelve 500.

## Endpoints de la API

### Obtener todas las tareas
`GET /api/v1/tasks`

### Crear una tarea
`POST /api/v1/tasks`

Body:
```json
{
  "titulo": "Mi tarea"
}
```

### Eliminar una tarea
`DELETE /api/v1/tasks/:id`