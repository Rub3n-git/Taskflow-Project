const API_URL = 'http://localhost:3000/api/v1/tasks';

async function obtenerTareas() {
    const respuesta = await fetch(API_URL);
    return await respuesta.json();
}
async function crearTarea (titulo){
    const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ titulo })
    });
    return await respuesta.json();
}
      async function eliminarTarea_API(id) {
        await fetch(`${API_URL}/${id}`,{
            method: 'DELETE'
        });
    }