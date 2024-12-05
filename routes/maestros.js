const express = require('express');
const databaseHandler = require('../sql/databaseHandler');
const router = express.Router();

const handler = new databaseHandler()

router.get('/', async (req, res) => {
    try {
        const response = await handler.getMaestros();
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener maestros:', error);
        return res.status(500).json({ error: 'Error al obtener los maestros' });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await handler.getMaestroById(id);
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener maestros:', error);
        return res.status(500).json({ error: 'Error al obtener los maestros' });
    }
});

router.post('/addMaestro', async (req, res) => {
    const nuevoMaestro = req.body;
    try {
        const response = await handler.insertMaestro(nuevoMaestro);
        return res.status(201).json({ message: 'Maestro insertado correctamente', maestro: nuevoMaestro, response: response });
    } catch (error) {
        return res.status(500).json({ error: 'Error al insertar el maestro' });
    }
});

module.exports = router;
