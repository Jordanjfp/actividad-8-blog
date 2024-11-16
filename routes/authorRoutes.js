const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// Ruta para crear un nuevo autor
router.post('/api/authors', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los autores
router.get('/api/authors', async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
 
