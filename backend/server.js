// Importamos módulos
const pool = require("/home/andres/Documentos/andres/proyecto_publicidad/backend/config/bd.js");
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configuramos variables de entorno
dotenv.config();

// Inicializamos la app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API del Proyecto Publicitario!');
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciamos servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const usuariosRoutes = require("./src/routes/usuarios.routes"); // Importamos las rutas
app.use("/api", usuariosRoutes); // Usamos las rutas en la app con prefijo "/api"
