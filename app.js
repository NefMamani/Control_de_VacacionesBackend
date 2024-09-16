require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');  // Configuración de Sequelize

// Importar las rutas
const empleadosRoutes = require('./routes/empleadoRoutes');
const estadoVacacionesRoutes = require('./routes/estadoVacacionesRoutes');
const vacacionesRoutes = require('./routes/vacacionesRoutes');
const escalaVacacionesRoutes = require('./routes/escalaVacionesRoutes');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/empleados',empleadosRoutes);
app.use('/vacaciones', vacacionesRoutes);
app.use('/estado', estadoVacacionesRoutes);
app.use('/escalaVacaciones', escalaVacacionesRoutes);
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
}).catch(err => {
  console.error('Error al sincronizar la base de datos:', err);
});
