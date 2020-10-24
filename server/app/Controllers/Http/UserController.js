'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Persona = use('Persona');

class UserController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async login({ request, auth }) {
    const { email, password } = request.all();
    const credentials = await auth.attempt(email, password);

    return credentials;
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async requestPasswordRecover({ request, response }) {
    await Persona.forgotPassword(request.input('email')).then(response.ok());
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async recoverPassword({ params, request, response }) {
    const { token } = request.all();
    const payload = request.only(['password', 'password_confirmation']);

    await Persona.updatePasswordByToken(token, payload)
      .then(response.ok())
      .catch(() => {
        response.badRequest();
      });
  }
}

module.exports = UserController;
