'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::orders.orders', ({ strapi }) => ({
  async createOrderWithCommission(data) {
    // Criar pedido
    const order = await strapi.entityService.create('api::orders.orders', {
      data: data.order,
    });

    // Criar itens do pedido
    for (const item of data.orderItems) {
      item.order_id = order.id;
      await strapi.entityService.create('api::order-items.order-items', {
        data: item,
      });
    }

    // Calcular comissão
    await strapi.service('api::affiliate-commissions.affiliate-commissions').calculateCommission(order);

    return order;
  }
}));