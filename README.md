# 📌 Proyecto Publicidad Web

Aplicación web para la gestión y venta de espacios publicitarios digitales.

## 📌 Tecnologías
- Backend: Node.js + Express
- Base de Datos: PostgreSQL
- Frontend: JavaScript, HTML, CSS (más adelante Astro)


### 📌 Configuración de la Base de Datos

#### 1️⃣ Crear la base de datos en PostgreSQL  
Ejecuta los siguientes comandos en la terminal para configurar PostgreSQL:  

```sh
# Acceder a PostgreSQL como usuario administrador
sudo -u postgres psql

# Crear un usuario para la base de datos
CREATE USER admin_prueba WITH PASSWORD 'clave_segura';

# Darle permisos de administrador (opcional, dependiendo del proyecto)
ALTER ROLE admin_prueba WITH SUPERUSER;

# Crear la base de datos y asignarle el usuario como propietario
CREATE DATABASE proyecto_publicidad OWNER admin_prueba;

# Verificar que la base de datos se creó correctamente
\l

# Salir de PostgreSQL
\q
