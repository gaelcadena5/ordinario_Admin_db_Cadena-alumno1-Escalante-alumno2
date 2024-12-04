const express = require('express');
const router = express.Router();

let estudiantes = [];

router.get('/', (req, res) => {
    res.status(200).json(estudiantes);
});

router.post('/', (req, res) => {
    const { nombre, apellidos, email, matricula, edad, semestre } = req.body;
    const nuevoEstudiante = { id: estudiantes.length + 1, nombre, apellidos, email, matricula, edad, semestre };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json({ mensaje: 'Estudiante creado', estudiante: nuevoEstudiante });
});

module.exports = router;
