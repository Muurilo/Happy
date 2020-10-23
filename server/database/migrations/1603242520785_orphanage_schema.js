'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class OrphanageSchema extends Schema {
  up() {
    this.create('orphanages', (table) => {
      table.increments();
      table.string('location').notNullable();
      table.string('name').notNullable();
      table.string('about').notNullable();
      table.string('whatsapp').notNullable();
      table.string('photos').notNullable();
      table.string('instructions').notNullable();
      table.string('visit_hour').notNullable();
      table.boolean('open_weekend').notNullable();
      table.boolean('admin_accepted').notNullable().defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('orphanages');
  }
}

module.exports = OrphanageSchema;
