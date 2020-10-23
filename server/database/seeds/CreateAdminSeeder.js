'use strict';

/*
|--------------------------------------------------------------------------
| CreateAdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Env = use('Env');
const User = use('App/Models/User');

class CreateAdminSeeder {
  async run() {
    const newAdmin = new User();

    newAdmin.email = Env.get('ADMIN_EMAIL');
    newAdmin.password = Env.get('ADMIN_PASSWORD');

    await newAdmin
      .save()
      .then(
        console.log(
          'Default admin created ',
          Env.get('ADMIN_EMAIL'),
          Env.get('ADMIN_PASSWORD')
        )
      );
  }
}

module.exports = CreateAdminSeeder;
