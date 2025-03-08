// Importamos dotenv para cargar las variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos Pool desde la librería pg (PostgreSQL para Node.js)
const { Pool } = require("pg");

// Creamos un nuevo Pool de conexiones con los datos de PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,   // Usuario de la base de datos (definido en .env)
  host: process.env.DB_HOST,   // Dirección del servidor de PostgreSQL (localhost si está en tu PC)
  database: process.env.DB_NAME, // Nombre de la base de datos
  password: process.env.DB_PASS, // Contraseña del usuario de la BD
  port: process.env.DB_PORT,   // Puerto donde corre PostgreSQL (5432 por defecto)
});

// Intentamos conectar con la base de datos
pool.connect()
  .then(() => console.log("🟢 Conectado a PostgreSQL")) // Si se conecta bien, mostramos este mensaje
  .catch(err => console.error("🔴 Error al conectar a PostgreSQL", err)); // Si hay error, lo mostramos

// Exportamos la conexión para usarla en otros archivos del backend
module.exports = pool;
