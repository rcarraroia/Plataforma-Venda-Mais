'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sellers.sellers', ({ strapi }) => ({
  async createSeller(data) {
    const seller = await strapi.entityService.create('api::sellers.sellers', {
      data,
    });
    return seller;
  },

  async updateSeller(id, data) {
    const seller = await strapi.entityService.update('api::sellers.sellers', id, {
      data,
    });
    return seller;
  },

  async deleteSeller(id) {
    await strapi.entityService.delete('api::sellers.sellers', id);
  },

  async getSeller(id) {
    const seller = await strapi.entityService.findOne('api::sellers.sellers', id);
    return seller;
  },

  async listSellers(params) {
    const sellers = await strapi.entityService.findMany('api::sellers.sellers', params);
    return sellers;
  }
}));