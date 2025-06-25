'use strict';

const axios = require('axios');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::asaas-integration.asaas-integration', ({ strapi }) => ({
  async createPayment(ctx) {
    const { sellerId, affiliateId, orderId, amount, splitPercentages } = ctx.request.body;

    try {
      // Buscar credenciais do seller
      const credentials = await strapi.db.query('api::seller.seller').findOne({
        where: { id: sellerId },
        select: ['api_key', 'wallet_id'],
      });

      if (!credentials) {
        return ctx.badRequest('Credenciais do seller não encontradas');
      }

      // Construir payload para API Asaas
      const payload = {
        customer: sellerId,
        billingType: 'CREDIT_CARD',
        value: amount,
        split: [
          { walletId: credentials.wallet_id, percentage: splitPercentages.seller },
          { walletId: 'admin-wallet-id', percentage: splitPercentages.admin },
          { walletId: 'developer-wallet-id', percentage: splitPercentages.developer },
        ],
        // Outros campos necessários
      };

      // Chamar API Asaas
      const response = await axios.post('https://www.asaas.com/api/v3/payments', payload, {
        headers: {
          'access_token': credentials.api_key,
          'Content-Type': 'application/json',
        },
      });

      // Salvar log da transação no Supabase (via Strapi)
      await strapi.db.query('api::payment-log.payment-log').create({
        data: {
          order_id: orderId,
          transaction_id: response.data.id,
          status: response.data.status,
        },
      });

      ctx.send({ success: true, data: response.data });
    } catch (error) {
      ctx.send({ success: false, error: error.message });
    }
  },
}));