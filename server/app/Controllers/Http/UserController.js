'use strict';

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    const credentials = await auth.attempt(email, password);

    return credentials;
  }
}

module.exports = UserController;
