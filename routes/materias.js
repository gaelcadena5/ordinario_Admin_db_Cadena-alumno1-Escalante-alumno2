const express = require('express');
const router = express.Router();

let materias = [];

router.get('/', (req, res) => {
    res.status(200).json(materias);
});

router.post('/', (req, res) => {
    const { nombre, profesor_id } = req.body;
    const nuevaMateria = { id: materias.length + 1, nombre, profesor_id };
    materias.push(nuevaMateria);
    res.status(201).json({ mensaje: 'Materia creada', materia: nuevaMateria });
});

module.exports = router;
