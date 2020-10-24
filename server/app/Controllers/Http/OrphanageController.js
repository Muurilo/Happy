'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Orphanage = use('App/Models/Orphanage');
const UploadService = require('../../Services/UploadService');

/**
 * Resourceful controller for interacting with orphanages
 */
class OrphanageController {
  /**
   * Show a list of all orphanages.
   * GET orphanages
   *
   */
  async index() {
    return await Orphanage.query().where('admin_accepted', true).fetch();
  }

  /**
   * Create/save a new orphanage.
   * POST orphanages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const photos = request.file('photos', {
      types: ['image'],
      size: '4mb',
    });

    let uploadedPhotos = await UploadService.upload(photos);

    const {
      location,
      name,
      about,
      whatsapp,
      instructions,
      visit_hour,
      open_weekend,
    } = request.all();

    const isOpenWeekend = open_weekend === 'true';

    const newOrphanage = new Orphanage();

    newOrphanage.location = location;
    newOrphanage.name = name;
    newOrphanage.about = about;
    newOrphanage.whatsapp = whatsapp;
    newOrphanage.photos = JSON.stringify(uploadedPhotos);
    newOrphanage.instructions = instructions;
    newOrphanage.visit_hour = visit_hour;
    newOrphanage.open_weekend = isOpenWeekend;

    await newOrphanage.save();

    return await Orphanage.all();
  }

  /**
   * Display a single orphanage.
   * GET orphanages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const query = await Orphanage.query().where('id', params.id).fetch();
    const data = query.toJSON();

    Object.keys(data).length > 0
      ? response.status(200).send(data)
      : response.notFound();
  }

  /**
   * Update orphanage details.
   * PUT or PATCH orphanages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a orphanage with id.
   * DELETE orphanages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = OrphanageController;
