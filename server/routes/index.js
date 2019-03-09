require('dotenv').config();

const controller = require('../controllers/user');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: 'true' }));

app.post('/api/v1/auth/signup', controller.create);

app.listen(process.env.PORT, console.log('hello'));
