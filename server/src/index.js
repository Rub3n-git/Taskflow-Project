const express = require('express');
const cors = require('cors');
const {PORT} = require('./config/env');
const taskRoutes = require('./routes/task.routes');

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    next();
});

//MIDDLEWARES GLOBALES


app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

//RUTA DE PRUEBA

app.get('/', (req, res) => {
    res.json({message: 'Servidor funcionando correctamente'});
});

//// CORREGIDO CONFLICTOO

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));


//ARRANQUE DEL SERVIDOR //// CORREGIDO

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Puerto ${PORT}`));
}
module.exports = app; 
