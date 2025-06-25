<template>
  <div class="auth-container">
    <h2>Registrar Nova Conta</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Nome</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p>
      <nuxt-link to="/login">Já tenho uma conta</nuxt-link>
    </p>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        await this.$store.dispatch('auth/signUp', {
          supabase,
          email: this.email,
          password: this.password,
          name: this.name,
        });
        alert('Registro realizado com sucesso! Verifique seu e-mail para confirmação.');
        this.$router.push('/login');
      } catch (error) {
        alert('Erro ao registrar: ' + error.message);
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