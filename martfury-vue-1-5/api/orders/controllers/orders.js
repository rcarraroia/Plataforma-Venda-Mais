'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::orders.orders', ({ strapi }) => ({
  async create(ctx) {
    const { order, orderItems } = ctx.request.body;

    try {
      const newOrder = await strapi.service('api::orders.orders').createOrderWithCommission({
        order,
        orderItems,
      });
      ctx.send(newOrder);
    } catch (error) {
      ctx.badRequest('Erro ao criar pedido', { error });
    }
  }
}));