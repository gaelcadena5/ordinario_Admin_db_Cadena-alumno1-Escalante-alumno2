const express = require('express');
const bodyParser = require('body-parser');

// Importar rutas
const estudiantesRoutes = require('./routes/estudiantes');
const maestrosRoutes = require('./routes/maestros');
const materiasRoutes = require('./routes/materias');
const calificacionesRoutes = require('./routes/calificaciones');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/maestros', maestrosRoutes);
app.use('/api/asignaturas', materiasRoutes);
app.use('/api/calificaciones', calificacionesRoutes);

// Servidor escuchando
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
