<template>
  <div>
    <h1>Teste de conexão com Supabase</h1>
    <button @click="fetchData">Buscar dados</button>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const { data, error } = await supabase.from('users').select('*').limit(5);
      if (error) {
        alert('Erro ao buscar dados: ' + error.message);
      } else {
        this.data = data;
      }
    },
  },
};
</script>
