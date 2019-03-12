const model = require('../models/user');
const signup = require('../helpers/signup');
const login = require('../helpers/login');
const middleware = require('../middlewares/auth');

const user = {
  authenticate(req, res) {
   if(login.validate(req.body).error) {
      return  res.status(400)
              .send({ status: 400, error: login.validate(req.body).error.details[0].message })
   }
      return middleware.authenticate(re)

      : res.status(200)
        .send({});
  },
  create(req, res) {
    return signup.validate(req.body).error
      ? res.status(400)
        .send({ status: 400, error: signup.validate(req.body).error.details[0].message })
      : res.status(200)
        .send({ status: 200, data: model.create(req.body) });
  },
};

module.exports = user;
