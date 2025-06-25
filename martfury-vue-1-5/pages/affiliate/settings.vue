<template>
  <div class="affiliate-settings">
    <h1>Configurações do Afiliado</h1>
    <form @submit.prevent="saveSettings">
      <div>
        <label for="walletId">Wallet ID do Asaas</label>
        <input id="walletId" v-model="walletId" type="text" />
      </div>
      <div class="financial-info">
        <p><strong>Saldo Bloqueado:</strong> {{ saldoBloqueado | currency }}</p>
        <p><strong>Data Prevista de Liberação:</strong></p>
        <ul>
          <li v-for="item in saldoBloqueadoDetalhes" :key="item.id">
            Venda: {{ item.sale_id }}, Liberação: {{ item.release_date }}, Status: {{ item.status }}, Motivo: {{ item.cancel_reason || 'N/A' }}
          </li>
        </ul>
        <p><strong>Saldo Disponível:</strong> {{ saldoDisponivel | currency }}</p>
        <p><strong>Histórico de Comissões:</strong></p>
        <ul>
          <li v-for="item in historicoComissoes" :key="item.id">
            Venda: {{ item.sale_id }}, Valor: {{ item.amount | currency }}, Status: {{ item.status }}, Data Liberação: {{ item.release_date }}, Motivo: {{ item.cancel_reason || 'N/A' }}
          </li>
        </ul>
      </div>
      <div>
        <a href="/asaas-instrucoes" target="_blank">👉 Precisa de ajuda para criar sua conta no Asaas? Clique aqui.</a>
      </div>
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      walletId: '',
      saldoBloqueado: 0,
      saldoBloqueadoDetalhes: [],
      saldoDisponivel: 0,
      historicoComissoes: [],
    };
  },
  async mounted() {
    await this.loadSettings();
  },
  methods: {
    async loadSettings() {
      const user = this.$store.state.auth.user;
      if (!user) return;

      // Buscar Wallet ID do afiliado
      const { data: sellerData } = await supabase
        .from('sellers')
        .select('asaas_wallet_id')
        .eq('user_id', user.id)
        .single();
      this.walletId = sellerData ? sellerData.asaas_wallet_id : '';

      // Buscar saldo bloqueado e detalhes
      const { data: bloqueado } = await supabase
        .from('affiliate_commissions_pending')
        .select('*')
        .eq('affiliate_id', user.id)
        .eq('status', 'Pending');
      this.saldoBloqueado = bloqueado.reduce((sum, item) => sum + item.amount, 0);
      this.saldoBloqueadoDetalhes = bloqueado;

      // Buscar saldo disponível e histórico
      const { data: disponivel } = await supabase
        .from('affiliate_commissions_pending')
        .select('*')
        .eq('affiliate_id', user.id)
        .eq('status', 'Released');
      this.saldoDisponivel = disponivel.reduce((sum, item) => sum + item.amount, 0);
      this.historicoComissoes = [...bloqueado, ...disponivel];
    },
    async saveSettings() {
      const user = this.$store.state.auth.user;
      if (!user) return;

      const { error } = await supabase
        .from('sellers')
        .update({ asaas_wallet_id: this.walletId })
        .eq('user_id', user.id);
      if (error) {
        alert('Erro ao salvar Wallet ID: ' + error.message);
      } else {
        alert('Configurações salvas com sucesso.');
      }
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },
  },
};
</script>

<style scoped>
.affiliate-settings {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.financial-info p {
  margin: 10px 0;
}
</style>