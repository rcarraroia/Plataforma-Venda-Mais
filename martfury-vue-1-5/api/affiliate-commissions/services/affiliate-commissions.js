'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::affiliate-commissions.affiliate-commissions', ({ strapi }) => ({
  async calculateCommission(order) {
    // Exemplo básico de cálculo de comissão
    const affiliateId = order.affiliate_id;
    const total = order.total;
    const commissionRate = 0.10; // 10% de comissão
    const commissionAmount = total * commissionRate;

    // Salvar comissão no banco
    await strapi.entityService.create('api::affiliate-commissions.affiliate-commissions', {
      data: {
        order_id: order.id,
        affiliate_id: affiliateId,
        amount: commissionAmount,
        status: 'Pending'
      }
    });

    return commissionAmount;
  }
}));