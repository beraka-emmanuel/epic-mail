const Joi = require('joi');

const helper = {
  schema: {
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
  },
  validate(data) {
    return Joi.validate(data, this.schema);
  },
};

module.exports = helper;
