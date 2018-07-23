const express = require('express');
const bodyParser = require('body-parser');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(htmlRoutes);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))