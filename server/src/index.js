const express = require('express');
const cors = require('cors');
const {PORT} = require('./config/env');
const taskRoutes = require('./routes/task.routes');

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    next();
});

app.use(cors());
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

