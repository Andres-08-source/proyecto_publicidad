const express = require("express");
const router = express.Router();     // Creamos un enrutador
const pool = require("/home/andres/Documentos/andres/proyecto_publicidad/backend/config/bd.js"); // Importamos la conexión a la base de datos

// Ruta para obtener todos los usuarios
router.get("/usuarios", async (req, res) => {
  try {
    // Consulta a la base de datos
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows); // Enviamos los datos como respuesta en formato JSON
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Ruta para agregar un nuevo usuario
router.post("/usuarios", async (req, res) => {
    try {
      const { nombre, correo } = req.body; // Extraemos los datos del cuerpo de la petición
  
      // Verificamos que se envíen ambos datos
      if (!nombre || !correo) {
        return res.status(400).json({ error: "Nombre y correo son obligatorios" });
      }
  
      // Insertamos el usuario en la base de datos
      const result = await pool.query(
        "INSERT INTO usuarios (nombre, correo) VALUES ($1, $2) RETURNING *",
        [nombre, correo]
      );
  
      res.status(201).json(result.rows[0]); // Enviamos el usuario creado como respuesta
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  

module.exports = router; // Exportamos las rutas para usarlas en el servidor
