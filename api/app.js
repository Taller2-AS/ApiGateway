const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const loadClients = require("./grpcClient");

const videoRoutes = require("./src/routes/videoRoutes");
const invoiceRoutes = require("./src/routes/invoiceRoutes");
const monitoringRoutes = require("./src/routes/monitoringRoutes");
const socialRoutes = require("./src/routes/socialRoutes");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const playlistRoutes = require("./src/routes/playlistRoutes");

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Cargar clientes gRPC
loadClients(app);

// Rutas API
app.use("/api/videos", videoRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/monitoring", monitoringRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/playlists", playlistRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
  res.send("🚀 API Gateway funcionando");
});

// Middleware de error
app.use((err, req, res, next) => {
  console.error("❌", err.message);
  // Validar que el código sea un HTTP válido (100–599)
  const statusCode = Number.isInteger(err.code) && err.code >= 100 && err.code <= 599
    ? err.code
    : 500;

  res.status(statusCode).json({ error: err.message || "Error interno" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API Gateway corriendo en http://localhost:${PORT}`);
});
