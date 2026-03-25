const express = require('express');
const cors = require('cors');
const {PORT} = require('./config/env');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors({
    origin:'http://taskflow-project-tau-mauve.vercel.app'

}));

//MIDDLEWARES GLOBALES


app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

//RUTA DE PRUEBA

app.get('/', (req, res) => {
    res.json({message: 'Servidor funcionando correctamente'});
});


app.use((err, req, res, next) => {
    if (err.message ==='NOT_FOUND') {
        return res.status (404).json({error:'Tarea no encontrada'});
    }
    console.error(err);
    res.status(500).json({error:'Error interno del servidor'});

    });

//ARRANQUE DEL SERVIDOR

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

