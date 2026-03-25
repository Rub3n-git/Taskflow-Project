let task = [];
let nextId = 1;

const obtenerTodas = () => {
    return task;
}

const crearTarea = (data) => {
    const nuevaTarea = {
        id: nextId++,
        titulo: data.titulo,
        completada : false
    };
    task.push (nuevaTarea);
    return nuevaTarea;
};
    
const eliminarTarea = (id) => {
    const index = task.findIndex(t =>t.id=== id);
    if  ( index === -1) {
        throw new Error ('NOT_FOUND');
    }
    task.splice(index, 1);
};
module.exports ={ obtenerTodas, crearTarea, eliminarTarea }