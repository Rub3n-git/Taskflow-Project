let task = [];
let nextId = 1;

const obtenerTodas = () => {
    return task;
}
/// CORREGIDO: AÑADIDO PRIORIDAD PARA QUE PROCESE - va a ser "media" si el usuario no elige una

const crearTarea = (data) => {
    const nuevaTarea = {
        id: nextId++,
        titulo: data.titulo,
        prioridad: data.prioridad || 'media',
        completada : false
    };
    task.push (nuevaTarea);
    return nuevaTarea;
};
    
// CORREGIDO: TE FALTAVA PARA ACTUALIZAR TAREAS
const actualizarTarea = (id, datos) => {
    const index = task.findIndex(t => t.id === id);
    if (index === -1) return null;
    task[index] = { ...task[index], ...datos };
    return task[index];
};


const eliminarTarea = (id) => {
    const index = task.findIndex(t =>t.id=== id);
    if  ( index === -1) {
        throw new Error ('NOT_FOUND');
    }
    task.splice(index, 1);
};

// CORREGIDO: AÑADIDO PARA EXPORTAR ACTUALIZAR TAREAS

module.exports ={ obtenerTodas, crearTarea, eliminarTarea, actualizarTarea };