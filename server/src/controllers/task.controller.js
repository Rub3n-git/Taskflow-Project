const taskService = require ('../services/task.service');

const obtenerTareas = (req, res) =>{
    const tasks = taskService.obtenerTodas();
    res.status (200).json(tasks);
};
/// CORREGIDO: AÑADIDO PRIORIDAD PARA QUE PROCESE

const crearTarea = (req, res) =>{
    const { titulo, prioridad } = req.body;
    if (!titulo ||typeof titulo!== 'string'||titulo.trim().length <3) {
        return res.status(400).json({error: 'El titulo es obligatorio y debe tener al menos 3 caracteres'});
    }
/// CORREGIDO: AÑADIDO PRIORIDAD PARA QUE PROCESE
    
const nuevaTarea = taskService.crearTarea({titulo, prioridad});
res.status(201).json(nuevaTarea);
};

// CORREGIDO: TE FALTAVA ESTE CAMINO PARA ACTUALIZAR TAREAS
const actualizarTarea = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

        const tareaActualizada = taskService.actualizarTarea(id, req.body);
        res.status(200).json(tareaActualizada);
    } catch (err) {
        next(err);
    }
};


const eliminarTarea = (req, res, next) => {
   
   try {
    const  id= parseInt(req.params.id);

        taskService.eliminarTarea(id);
        res.status(204).send();
        
    } catch (err){
    next(err);
    }
};
    
// CORREGIDO: AÑADIDO PARA EXPORTAR ACTUALIZAR TAREAS
    module.exports ={obtenerTareas, crearTarea, eliminarTarea, actualizarTarea };