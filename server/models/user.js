const uuid = require('uuid');

class User {
  constructor() {
    this.users = [];
  }

  create(info) {
    const user = {
      id: uuid.v4(),
      firstName: info.firstName || '',
      lastName: info.lastName || '',
      password: info.password || '',
    };
    this.users.push(user);
    return user;
  }
}

module.exports = new User();
