const model = require('../models/message.js');

const messages = {
    welcome: (req, res) => res.send(model.welcome())
}

module.exports = messages
