const Joi = require('joi');

const helper = {
  schema: {
    email: Joi.string().email().required(),
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    password: Joi.string().min(7).required(),
  },
  validate(data) {
    return Joi.validate(data, this.schema);
  },
};

module.exports = helper;
