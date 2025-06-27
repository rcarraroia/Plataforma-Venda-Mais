import Vue from 'vue';

export const state = () => ({
  orders: [],
  currentOrder: null,
});

export const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setCurrentOrder(state, order) {
    state.currentOrder = order;
  },
  clearCurrentOrder(state) {
    state.currentOrder = null;
  },
};

export const actions = {
  async fetchOrdersByUser({ commit }, { supabase, userId }) {
    const { data, error } = await supabase.from('orders').select('*').eq('user_id', userId);
    if (error) throw error;
    commit('setOrders', data);
  },
  async fetchOrdersBySeller({ commit }, { supabase, sellerId }) {
    const { data, error } = await supabase.from('order_items').select('*, orders(*)').eq('seller_id', sellerId);
    if (error) throw error;
    commit('setOrders', data);
  },
  async fetchOrder({ commit }, { supabase, id }) {
    const { data, error } = await supabase.from('orders').select('*').eq('id', id).single();
    if (error) throw error;
    commit('setCurrentOrder', data);
  },
  async createOrder({ dispatch }, { supabase, order, orderItems }) {
    try {
      const response = await this.$axios.post('/orders', { order, orderItems });
      dispatch('fetchOrdersByUser', { supabase, userId: order.user_id });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateOrderStatus({ dispatch }, { supabase, id, status }) {
    const { error } = await supabase.from('orders').update({ order_status: status }).eq('id', id);
    if (error) throw error;
    dispatch('fetchOrder', { supabase, id });
  },
  async cancelOrder({ dispatch }, { supabase, id }) {
    const { error } = await supabase.from('orders').update({ order_status: 'Cancelled' }).eq('id', id);
    if (error) throw error;
    dispatch('fetchOrder', { supabase, id });
  },
};