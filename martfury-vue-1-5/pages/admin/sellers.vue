<template>
  <div>
    <h1>Gestão de Sellers</h1>
    <button @click="showCreateForm = true">Novo Seller</button>

    <div v-if="showCreateForm">
      <h2>Cadastrar Seller</h2>
      <form @submit.prevent="createSeller">
        <div>
          <label>Nome da Loja</label>
          <input v-model="newSeller.store_name" required />
        </div>
        <div>
          <label>Nome do Responsável</label>
          <input v-model="newSeller.responsible_name" required />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" v-model="newSeller.email" required />
        </div>
        <div>
          <label>Telefone</label>
          <input v-model="newSeller.phone" />
        </div>
        <div>
          <label>Documento Fiscal (CPF/CNPJ)</label>
          <input v-model="newSeller.tax_document" />
        </div>
        <div>
          <label>Chave de Integração</label>
          <input v-model="newSeller.gateway_key" required />
        </div>
        <div>
          <label>Percentual de Comissão Total (%)</label>
          <input type="number" v-model.number="newSeller.total_commission" required />
        </div>
        <div>
          <label>Percentual para Afiliados (%)</label>
          <input type="number" v-model.number="newSeller.affiliate_commission" required />
        </div>
        <div>
          <label>API Key do Asaas</label>
          <input v-model="newSeller.asaas_api_key" required />
        </div>
        <div>
          <label>Wallet ID do Asaas (opcional)</label>
          <input v-model="newSeller.asaas_wallet_id" />
        </div>
        <div>
          <a href="/asaas-instrucoes" target="_blank">👉 Precisa de ajuda para criar sua conta no Asaas? Clique aqui.</a>
        </div>
        <div>
          <label>Status</label>
          <select v-model="newSeller.status" required>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
        <button type="button" @click="showCreateForm = false">Cancelar</button>
      </form>
    </div>

    <div>
      <h2>Lista de Sellers</h2>
      <table>
        <thead>
          <tr>
            <th>Nome da Loja</th>
            <th>E-mail</th>
            <th>Percentual Total (%)</th>
            <th>Percentual Afiliados (%)</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="seller in sellers" :key="seller.id">
            <td>{{ seller.store_name }}</td>
            <td>{{ seller.email }}</td>
            <td>{{ seller.total_commission }}</td>
            <td>{{ seller.affiliate_commission }}</td>
            <td>{{ seller.status }}</td>
            <td>
              <button @click="editSeller(seller)">Editar</button>
              <button @click="deleteSeller(seller.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showEditForm">
      <h2>Editar Seller</h2>
      <form @submit.prevent="updateSeller">
        <div>
          <label>Nome da Loja</label>
          <input v-model="currentSeller.store_name" required />
        </div>
        <div>
          <label>Nome do Responsável</label>
          <input v-model="currentSeller.responsible_name" required />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" v-model="currentSeller.email" required />
        </div>
        <div>
          <label>Telefone</label>
          <input v-model="currentSeller.phone" />
        </div>
        <div>
          <label>Documento Fiscal (CPF/CNPJ)</label>
          <input v-model="currentSeller.tax_document" />
        </div>
        <div>
          <label>Chave de Integração</label>
          <input v-model="currentSeller.gateway_key" required />
        </div>
        <div>
          <label>Percentual de Comissão Total (%)</label>
          <input type="number" v-model.number="currentSeller.total_commission" required />
        </div>
        <div>
          <label>Percentual para Afiliados (%)</label>
          <input type="number" v-model.number="currentSeller.affiliate_commission" required />
        </div>
        <div>
          <label>API Key do Asaas</label>
          <input v-model="currentSeller.asaas_api_key" required />
        </div>
        <div>
          <label>Wallet ID do Asaas (opcional)</label>
          <input v-model="currentSeller.asaas_wallet_id" />
        </div>
        <div>
          <a href="/asaas-instrucoes" target="_blank">👉 Precisa de ajuda para criar sua conta no Asaas? Clique aqui.</a>
        </div>
        <div>
          <label>Status</label>
          <select v-model="currentSeller.status" required>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
        <button type="button" @click="cancelEdit">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import supabase from '~/plugins/supabase';

export default {
  data() {
    return {
      sellers: [],
      showCreateForm: false,
      showEditForm: false,
      newSeller: {
        store_name: '',
        responsible_name: '',
        email: '',
        phone: '',
        tax_document: '',
        gateway_key: '',
        total_commission: 0,
        affiliate_commission: 0,
        asaas_api_key: '',
        asaas_wallet_id: '',
        status: 'active',
      },
      currentSeller: null,
    };
  },
  async mounted() {
    await this.fetchSellers();
  },
  methods: {
    async fetchSellers() {
      const { data, error } = await supabase.from('sellers').select('*');
      if (error) {
        alert('Erro ao buscar sellers: ' + error.message);
      } else {
        this.sellers = data;
      }
    },
    async createSeller() {
      if (!this.newSeller.gateway_key || !this.newSeller.total_commission || !this.newSeller.affiliate_commission || !this.newSeller.asaas_api_key) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      if (this.newSeller.total_commission < this.newSeller.affiliate_commission) {
        alert('O percentual total de comissão deve ser maior ou igual ao percentual para afiliados.');
        return;
      }
      const { error } = await supabase.from('sellers').insert([this.newSeller]);
      if (error) {
        alert('Erro ao criar seller: ' + error.message);
      } else {
        this.showCreateForm = false;
        this.newSeller = {
          store_name: '',
          responsible_name: '',
          email: '',
          phone: '',
          tax_document: '',
          gateway_key: '',
          total_commission: 0,
          affiliate_commission: 0,
          asaas_api_key: '',
          asaas_wallet_id: '',
          status: 'active',
        };
        await this.fetchSellers();
      }
    },
    editSeller(seller) {
      this.currentSeller = { ...seller };
      this.showEditForm = true;
    },
    async updateSeller() {
      if (!this.currentSeller.gateway_key || !this.currentSeller.total_commission || !this.currentSeller.affiliate_commission || !this.currentSeller.asaas_api_key) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      if (this.currentSeller.total_commission < this.currentSeller.affiliate_commission) {
        alert('O percentual total de comissão deve ser maior ou igual ao percentual para afiliados.');
        return;
      }
      const { error } = await supabase
        .from('sellers')
        .update(this.currentSeller)
        .eq('id', this.currentSeller.id);
      if (error) {
        alert('Erro ao atualizar seller: ' + error.message);
      } else {
        this.showEditForm = false;
        this.currentSeller = null;
        await this.fetchSellers();
      }
    },
    cancelEdit() {
      this.showEditForm = false;
      this.currentSeller = null;
    },
    async deleteSeller(id) {
      if (!confirm('Tem certeza que deseja excluir este seller?')) return;
      const { error } = await supabase.from('sellers').delete().eq('id', id);
      if (error) {
        alert('Erro ao excluir seller: ' + error.message);
      } else {
        await this.fetchSellers();
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
.auth-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>