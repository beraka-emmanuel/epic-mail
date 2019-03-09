const express = require('express');
const controller = require('../controllers/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: 'true' }));

app.get('/', (req, res) => {
  res.send('<h1 style="text-align: center">Welcome to my app<h1><h4 style="text-align: center">Safe Journey</h4>');
});
app.post('/api/v1/auth/signup', controller.create);

app.listen(process.env.PORT);
