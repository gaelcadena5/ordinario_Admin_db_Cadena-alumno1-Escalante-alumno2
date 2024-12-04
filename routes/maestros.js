const express = require('express');
const router = express.Router();

let maestros = [];

router.get('/', (req, res) => {
    res.status(200).json(maestros);
});

router.post('/', (req, res) => {
    const { nombre, edad, telefono, correo } = req.body;
    const nuevoMaestro = { id: maestros.length + 1, nombre, edad, telefono, correo };
    maestros.push(nuevoMaestro);
    res.status(201).json({ mensaje: 'Maestro creado', maestro: nuevoMaestro });
});

module.exports = router;
