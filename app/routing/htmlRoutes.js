const express = require('express');
const router = express.Router();
const path = require('path');
const players = require('../data/players.js');

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

function compareTwoArray(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        resultArray.push(Math.abs(array1[i] - array2[i]));
    }
    return resultArray.reduce((a, b) => a + b);
}

router.post('/survey', (req, res) => {
    const answer = req.body["data[]"].map(ele => Number(ele));
    const playerObjArray = [];
    let index = 0;
    players.map(player => player.scores).forEach(scoreArray => {
        playerObjArray.push({
            playerIndex: index,
            score: compareTwoArray(scoreArray, answer)
        });
        index++;
    })
    const result = players[playerObjArray.findIndex(ele => {
        return ele.score == Math.min(...playerObjArray.map(ele => ele.score))
    })];
    res.send(result);
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;