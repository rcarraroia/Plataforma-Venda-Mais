'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::affiliate-commissions.affiliate-commissions', ({ strapi }) => ({
  async approveCommission(ctx) {
    const { id } = ctx.params;
    try {
      await strapi.entityService.update('api::affiliate-commissions.affiliate-commissions', id, {
        data: { status: 'Approved' },
      });
      ctx.send({ message: 'Commission approved' });
    } catch (error) {
      ctx.badRequest('Error approving commission', { error });
    }
  },

  async rejectCommission(ctx) {
    const { id } = ctx.params;
    const { reason } = ctx.request.body;
    try {
      await strapi.entityService.update('api::affiliate-commissions.affiliate-commissions', id, {
        data: { status: 'Rejected', cancel_reason: reason },
      });
      ctx.send({ message: 'Commission rejected' });
    } catch (error) {
      ctx.badRequest('Error rejecting commission', { error });
    }
  }
}));