// CORREGIDO: DETECTA SI ESTAS LOCAL O EN VERCEL
const API_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api/v1/tasks"
    : "https://taskflow-project-git-master-rub3n-gits-projects.vercel.app/api/v1/tasks";
/// CORREGIDO: Las funciones obtenerTareas y crearTarea no verifican si la respuesta HTTP fue exitosa (respuesta.ok). Si el servidor devuelve un 400 o 500, el código intentará hacer .json() del error igualmente. PARA ESO EL IF AÑADIDO
async function obtenerTareas() {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
}
/// CORREGIDO: AÑADIDO PRIORIDAD PARA QUE PROCESE E IF
async function crearTarea(titulo, prioridad) {
    const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ titulo, prioridad })
    });
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
}

      async function eliminarTarea_API(id) {
        await fetch(`${API_URL}/${id}`,{
            method: 'DELETE'
        });
    }

    /// CORREGIDO: AÑADIDO PARA GUARDAR CAMBIOS
async function actualizarTarea(id, datos) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(datos)
    });
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
}