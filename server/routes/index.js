const user = require('../controllers/user');
const message = require('../controllers/message'); 
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: 'true' }));

app.get('/', message.welcome);
app.post('/api/v1/auth/signup', user.create);

app.listen(process.env.PORT || 3000);
