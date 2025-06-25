<template>
  <div class="auth-container">
    <h2>Recuperar Senha</h2>
    <form @submit.prevent="handleReset">
      <div>
        <label for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <button type="submit">Enviar link de recuperação</button>
    </form>
    <p>
      <nuxt-link to="/login">Voltar ao login</nuxt-link>
    </p>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async handleReset() {
      try {
        await this.$store.dispatch('auth/resetPassword', {
          supabase,
          email: this.email,
        });
        alert('Link de recuperação enviado para seu e-mail.');
        this.$router.push('/login');
      } catch (error) {
        alert('Erro ao enviar link: ' + error.message);
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