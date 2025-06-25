import Vue from 'vue';

export const state = () => ({
  sellers: [],
  currentSeller: null,
});

export const mutations = {
  setSellers(state, sellers) {
    state.sellers = sellers;
  },
  setCurrentSeller(state, seller) {
    state.currentSeller = seller;
  },
  clearCurrentSeller(state) {
    state.currentSeller = null;
  },
};

export const actions = {
  async fetchSellers({ commit }, supabase) {
    const { data, error } = await supabase.from('sellers').select('*');
    if (error) throw error;
    commit('setSellers', data);
  },
  async fetchSeller({ commit }, { supabase, id }) {
    const { data, error } = await supabase.from('sellers').select('*').eq('id', id).single();
    if (error) throw error;
    commit('setCurrentSeller', data);
  },
  async createSeller({ dispatch }, { supabase, seller }) {
    const { error } = await supabase.from('sellers').insert([seller]);
    if (error) throw error;
    dispatch('fetchSellers', supabase);
  },
  async updateSeller({ dispatch }, { supabase, id, updates }) {
    const { error } = await supabase.from('sellers').update(updates).eq('id', id);
    if (error) throw error;
    dispatch('fetchSellers', supabase);
  },
  async deleteSeller({ dispatch }, { supabase, id }) {
    const { error } = await supabase.from('sellers').delete().eq('id', id);
    if (error) throw error;
    dispatch('fetchSellers', supabase);
  },
};