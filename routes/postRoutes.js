const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Author = require('../models/author');

// Ruta para crear un nuevo post
router.post('/api/posts', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los posts junto con los datos del autor
router.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: Author });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener los posts de un autor específico
router.get('/api/posts/author/:authorId', async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { author_id: req.params.authorId },
            include: Author
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
 
