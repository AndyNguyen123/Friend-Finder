const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/routing/htmlRoutes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))