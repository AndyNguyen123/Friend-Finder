const express = require('express');
const router = express.Router();
const players = require('../data/players.js');

router.get('/players', (req, res) => {
    res.json(players);
});


router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;