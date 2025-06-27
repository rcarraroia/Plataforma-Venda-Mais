'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asaas-integration.asaas-integration', ({ strapi }) => ({
  async processPayment(paymentData) {
    // Lógica para processar pagamento com split via Asaas
    const { sellerId, affiliateId, orderId, amount, splitPercentages } = paymentData;

    // Buscar credenciais do seller
    const credentials = await strapi.db.query('api::seller.seller').findOne({
      where: { id: sellerId },
      select: ['api_key', 'wallet_id'],
    });

    if (!credentials) {
      throw new Error('Credenciais do seller não encontradas');
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
    const axios = require('axios');
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

    return response.data;
  }
}));