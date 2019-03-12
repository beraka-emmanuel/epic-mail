const uuid = require('uuid');

class User {
  constructor() {
    this.users = [];
  }

  create(req) {
    const user = {
      id: uuid.v4(),
      firstName: req.firstName || '',
      lastName: req.lastName || '',
      password: req.password || '',
    };
    this.users.push(user);
    return user;
  }
}

module.exports = new User();
