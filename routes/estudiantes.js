const express = require('express');
const databaseHandler = require('../sql/databaseHandler');
const router = express.Router();

const handler = new databaseHandler()

router.get('/',  async (req, res) => {
    try {
        const response = await handler.getEstudiantes();
        return res.status(200).json(response);
    }
    catch (error) {
        console.error('Error al obtener estudiantes:', error);
        return res.status(500).json({ error: 'Error al obtener los estudiantes'});
    }
});

router.post('/addEstudiante', (req, res) => {
    const nuevoEstudiante = req.body;
    try {
        const response = handler.insertEstudiante(nuevoEstudiante);
        return res.status(201).json({ message: 'Estudiante insertado correctamente',  estudiante: nuevoEstudiante, response: response });
    } catch (error) {
        return res.status(500).json({ error: 'Error al insertar el estudiante' });
    }
});

module.exports = router;
