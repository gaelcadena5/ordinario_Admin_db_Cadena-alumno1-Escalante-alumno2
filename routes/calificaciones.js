const express = require('express');
const router = express.Router();

let calificaciones = [];

router.get('/', (req, res) => {
    res.status(200).json(calificaciones);
});

router.post('/', (req, res) => {
    const { estudiante_id, maestro_id, materia_id } = req.body;
    const nuevaCalificacion = { id: calificaciones.length + 1, estudiante_id, maestro_id, materia_id };
    calificaciones.push(nuevaCalificacion);
    res.status(201).json({ mensaje: 'Calificación creada', calificacion: nuevaCalificacion });
});

module.exports = router;
