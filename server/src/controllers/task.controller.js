const taskService = require ('../services/task.service');

const obtenerTareas = (req, res) =>{
    const tasks = taskService.obtenerTodas();
    res.status (200).json(tasks);
};

const crearTarea = (req, res) =>{
    const { titulo } = req.body;
    if (!titulo ||typeof titulo!== 'string'||titulo.trim().length <3) {
        return res.status(400).json({error: 'El titulo es obligatorio y debe tener al menos 3 caracteres'});
    }
const nuevaTarea = taskService.crearTarea({titulo});
res.status(201).json(nuevaTarea);
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
    

    module.exports ={obtenerTareas, crearTarea, eliminarTarea};