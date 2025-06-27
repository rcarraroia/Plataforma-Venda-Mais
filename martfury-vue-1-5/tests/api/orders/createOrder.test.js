import request from 'supertest';
import app from '../../../server'; // Ajuste o caminho conforme a estrutura do projeto

describe('POST /orders', () => {
  it('should create an order and calculate commission', async () => {
    const orderData = {
      order: {
        customer_id: 'uuid-do-cliente-teste',
        seller_id: 'uuid-do-vendedor-teste',
        total: 100.00,
        status: 'Pending'
      },
      orderItems: [
        {
          product_id: 'uuid-do-produto-teste',
          quantity: 2,
          price: 50.00
        }
      ]
    };

    const response = await request(app)
      .post('/orders')
      .send(orderData)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.total).toBe(orderData.order.total);
    // Adicione mais asserts conforme a estrutura da resposta e lógica de comissão
  });
});