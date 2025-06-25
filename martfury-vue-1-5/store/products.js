import Vue from 'vue';

export const state = () => ({
  products: [],
  currentProduct: null,
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCurrentProduct(state, product) {
    state.currentProduct = product;
  },
  clearCurrentProduct(state) {
    state.currentProduct = null;
  },
};

export const actions = {
  async fetchProducts({ commit }, { supabase, sellerId }) {
    let query = supabase.from('products').select('*');
    if (sellerId) {
      query = query.eq('seller_id', sellerId);
    }
    const { data, error } = await query;
    if (error) throw error;
    commit('setProducts', data);
  },
  async fetchProduct({ commit }, { supabase, id }) {
    const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
    if (error) throw error;
    commit('setCurrentProduct', data);
  },
  async createProduct({ dispatch }, { supabase, product }) {
    const { error } = await supabase.from('products').insert([product]);
    if (error) throw error;
    dispatch('fetchProducts', { supabase, sellerId: product.seller_id });
  },
  async updateProduct({ dispatch }, { supabase, id, updates }) {
    const { error } = await supabase.from('products').update(updates).eq('id', id);
    if (error) throw error;
    dispatch('fetchProducts', { supabase, sellerId: updates.seller_id });
  },
  async deleteProduct({ dispatch }, { supabase, id, sellerId }) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) throw error;
    dispatch('fetchProducts', { supabase, sellerId });
  },
};