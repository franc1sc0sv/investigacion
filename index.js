import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware para leer datos JSON
app.use(express.json());

// Usar las rutas de usuarios
app.use("/api/users", userRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor y dejarlo a la espera de solicitudes
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
