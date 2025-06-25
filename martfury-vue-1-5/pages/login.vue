<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p>
      <nuxt-link to="/register">Criar nova conta</nuxt-link> |
      <nuxt-link to="/forgot-password">Esqueci a senha</nuxt-link>
    </p>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch('auth/signIn', {
          supabase,
          email: this.email,
          password: this.password,
        });
        this.$router.push('/dashboard');
      } catch (error) {
        alert('Erro ao fazer login: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>