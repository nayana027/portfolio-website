const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.json({ message: "About Me: I am a software developer!" });
});

router.get('/projects', (req, res) => {
    res.json([
        { name: "Project 1", description: "AI-based recommendation system" },
        { name: "Project 2", description: "Machine Learning model for prediction" }
    ]);
});

module.exports = router;
