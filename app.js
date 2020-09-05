const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json()); // application/json

app.use(userRoutes);

app.listen(5000);
