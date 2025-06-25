import Vue from 'vue';

export const state = () => ({
  user: null,
  session: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setSession(state, session) {
    state.session = session;
  },
  clearAuth(state) {
    state.user = null;
    state.session = null;
  },
};

export const actions = {
  async fetchUser({ commit }, supabase) {
    const { data: { session } } = await supabase.auth.getSession();
    commit('setSession', session);
    commit('setUser', session ? session.user : null);
  },
  async signUp({ commit }, { supabase, email, password, name }) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    if (error) throw error;
    commit('setUser', user);
  },
  async signIn({ commit }, { supabase, email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    commit('setSession', data.session);
    commit('setUser', data.user);
  },
  async signOut({ commit }, supabase) {
    await supabase.auth.signOut();
    commit('clearAuth');
  },
  async resetPassword(_, { supabase, email }) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  },
};
