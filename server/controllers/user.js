const model = require('../models/user');
const helper = require('../helpers/user');

const user = {
  create(req, res) {
    return helper.validate(req.body).error
      ? res.status(400)
        .send({ status: 400, error: helper.validate(req.body).error.details[0].message })
      : res.status(200)
        .send({ status: 200, data: model.create(req.body) });
  },
};

module.exports = user;
