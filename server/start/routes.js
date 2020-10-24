'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// Login
Route.post('login', 'UserController.login');

// Password Recover
Route.post('recover', 'UserController.requestPasswordRecover')
Route.post('confirm_recover', 'UserController.recoverPassword')

// Orphanages Routes
Route.get('orphanages', 'OrphanageController.index');
Route.get('orphanages/:id', 'OrphanageController.show');
Route.post('orphanages', 'OrphanageController.store');
