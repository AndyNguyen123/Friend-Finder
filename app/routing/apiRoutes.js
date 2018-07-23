const express = require('express');
const router = express.Router();

router.get('/friends', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.post('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;