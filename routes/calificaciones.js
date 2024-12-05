const express = require('express');
const databaseHandler = require('../sql/databaseHandler');
const router = express.Router();

const handler = new databaseHandler()

router.get('/', async (req, res) => {
    try {
        const response = await handler.getCalificaciones();
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener calificaciones:', error);
        return res.status(500).json({ error: 'Error al obtener las calificaciones' });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await handler.getCalificacionById(id);
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener calificaciones:', error);
        return res.status(500).json({ error: 'Error al obtener las calificaciones' });
    }
});
router.post('/addCalificacion', async (req, res) => {
    const nuevaCalificacion = req.body;
    try {
        const response = await handler.insertCalificacion(nuevaCalificacion);
        return res.status(201).json({ message: 'Calificación insertada correctamente', calificacion: nuevaCalificacion, response: response });
    } catch (error) {
        console.error('Error al insertar la calificación:', error);
        return res.status(500).json({ error: 'Error al insertar la calificación' });
    }
});

module.exports = router;
