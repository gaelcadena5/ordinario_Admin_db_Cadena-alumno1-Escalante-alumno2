const express = require('express');
const databaseHandler = require('../sql/databaseHandler');
const router = express.Router();

const handler = new databaseHandler()

router.get('/', async (req, res) => {
    try {
        const response = await handler.getMaterias();
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener materias:', error);
        return res.status(500).json({ error: 'Error al obtener las materias' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await handler.getMateriaById(id);
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener materias:', error);
        return res.status(500).json({ error: 'Error al obtener las materias' });
    }
});
router.post('/addMateria', (req, res) => {
    const nuevaMateria = req.body;
    try {
        const response = handler.insertMateria(nuevaMateria);
        return res.status(201).json({ message: 'Materia insertada correctamente', materia: nuevaMateria, response: response });
    } catch (error) {
        return res.status(500).json({ error: 'Error al insertar la materia' });
    }
});

module.exports = router;
