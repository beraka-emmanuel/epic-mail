const user = require('../controllers/user');
const message = require('../controllers/message');
const authenticate = require('../controllers/authenticate');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: 'true' }));

app.get('/', message.welcome);
app.post('/api/v1/auth/signup', user.create);
app.post('/api/v1/auth/login', authenticate.user);

app.listen(process.env.PORT || 3000);
