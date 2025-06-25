<template>
  <div>
    <h1>Gestão de Pedidos</h1>

    <div>
      <h2>Lista de Pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>ID do Pedido</th>
            <th>Usuário</th>
            <th>Status do Pagamento</th>
            <th>Status do Pedido</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.user_id }}</td>
            <td>{{ order.payment_status }}</td>
            <td>{{ order.order_status }}</td>
            <td>{{ order.total_amount }}</td>
            <td>
              <button @click="viewOrder(order)">Visualizar</button>
              <button @click="cancelOrder(order.id)" v-if="order.order_status !== 'Cancelled'">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showOrderDetails">
      <h2>Detalhes do Pedido</h2>
      <p>ID: {{ currentOrder.id }}</p>
      <p>Status do Pagamento: {{ currentOrder.payment_status }}</p>
      <p>Status do Pedido: {{ currentOrder.order_status }}</p>
      <p>Valor Total: {{ currentOrder.total_amount }}</p>
      <h3>Itens do Pedido</h3>
      <ul>
        <li v-for="item in orderItems" :key="item.id">
          Produto: {{ item.product_id }}, Quantidade: {{ item.quantity }}, Preço Unitário: {{ item.unit_price }}
        </li>
      </ul>
      <button @click="closeOrderDetails">Fechar</button>
    </div>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      orders: [],
      currentOrder: null,
      orderItems: [],
      showOrderDetails: false,
    };
  },
  async mounted() {
    await this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      const { data, error } = await supabase.from('orders').select('*');
      if (error) {
        alert('Erro ao buscar pedidos: ' + error.message);
      } else {
        this.orders = data;
      }
    },
    async viewOrder(order) {
      this.currentOrder = order;
      const { data, error } = await supabase.from('order_items').select('*').eq('order_id', order.id);
      if (error) {
        alert('Erro ao buscar itens do pedido: ' + error.message);
      } else {
        this.orderItems = data;
        this.showOrderDetails = true;
      }
    },
    closeOrderDetails() {
      this.showOrderDetails = false;
      this.currentOrder = null;
      this.orderItems = [];
    },
    async cancelOrder(id) {
      if (!confirm('Tem certeza que deseja cancelar este pedido?')) return;
      const { error } = await supabase.from('orders').update({ order_status: 'Cancelled' }).eq('id', id);
      if (error) {
        alert('Erro ao cancelar pedido: ' + error.message);
      } else {
        await this.fetchOrders();
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
button {
  margin-right: 5px;
}
</style>