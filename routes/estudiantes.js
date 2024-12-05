const express = require('express');
const databaseHandler = require('../sql/databaseHandler');
const router = express.Router();

let estudiantes = [];

router.get('/', (req, res) => {
    const estudiantes = databaseHandler.getEstudiantes();
    res.status(200).json(estudiantes);
});

router.post('/addEstudiante', (req, res) => {
    const nuevoEstudiante = req.body;
    databaseHandler.insertEstudiante(nuevoEstudiante);
    res.status(201).json({ mensaje: 'Estudiante creado', estudiante: nuevoEstudiante });
});

module.exports = router;
