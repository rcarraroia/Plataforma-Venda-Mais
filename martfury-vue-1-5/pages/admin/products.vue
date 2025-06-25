<template>
  <div>
    <h1>Gestão de Produtos</h1>
    <button @click="showCreateForm = true">Novo Produto</button>

    <div v-if="showCreateForm">
      <h2>Cadastrar Produto</h2>
      <form @submit.prevent="createProduct">
        <div>
          <label>Nome</label>
          <input v-model="newProduct.name" required />
        </div>
        <div>
          <label>Descrição</label>
          <textarea v-model="newProduct.description"></textarea>
        </div>
        <div>
          <label>Preço</label>
          <input type="number" v-model="newProduct.price" required />
        </div>
        <div>
          <label>Estoque</label>
          <input type="number" v-model="newProduct.stock" required />
        </div>
        <div>
          <label>Status</label>
          <select v-model="newProduct.status" required>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <div>
          <label>URL da Imagem</label>
          <input v-model="newProduct.image_url" />
        </div>
        <button type="submit">Salvar</button>
        <button type="button" @click="showCreateForm = false">Cancelar</button>
      </form>
    </div>

    <div>
      <h2>Lista de Produtos</h2>
      <input type="text" v-model="filterName" placeholder="Filtrar por nome" />
      <select v-model="filterStatus">
        <option value="">Todos</option>
        <option value="active">Ativo</option>
        <option value="inactive">Inativo</option>
      </select>
      <input type="number" v-model.number="filterMinPrice" placeholder="Preço mínimo" />
      <input type="number" v-model.number="filterMaxPrice" placeholder="Preço máximo" />

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button @click="editProduct(product)">Editar</button>
              <button @click="deleteProduct(product.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showEditForm">
      <h2>Editar Produto</h2>
      <form @submit.prevent="updateProduct">
        <div>
          <label>Nome</label>
          <input v-model="currentProduct.name" required />
        </div>
        <div>
          <label>Descrição</label>
          <textarea v-model="currentProduct.description"></textarea>
        </div>
        <div>
          <label>Preço</label>
          <input type="number" v-model="currentProduct.price" required />
        </div>
        <div>
          <label>Estoque</label>
          <input type="number" v-model="currentProduct.stock" required />
        </div>
        <div>
          <label>Status</label>
          <select v-model="currentProduct.status" required>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <div>
          <label>URL da Imagem</label>
          <input v-model="currentProduct.image_url" />
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
      products: [],
      showCreateForm: false,
      showEditForm: false,
      newProduct: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        status: 'active',
        image_url: '',
      },
      currentProduct: null,
      filterName: '',
      filterStatus: '',
      filterMinPrice: null,
      filterMaxPrice: null,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return (
          (!this.filterName || product.name.toLowerCase().includes(this.filterName.toLowerCase())) &&
          (!this.filterStatus || product.status === this.filterStatus) &&
          (this.filterMinPrice === null || product.price >= this.filterMinPrice) &&
          (this.filterMaxPrice === null || product.price <= this.filterMaxPrice)
        );
      });
    },
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        alert('Erro ao buscar produtos: ' + error.message);
      } else {
        this.products = data;
      }
    },
    async createProduct() {
      if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.stock) {
        alert('Nome, preço e estoque são obrigatórios.');
        return;
      }
      const { error } = await supabase.from('products').insert([this.newProduct]);
      if (error) {
        alert('Erro ao criar produto: ' + error.message);
      } else {
        this.showCreateForm = false;
        this.newProduct = {
          name: '',
          description: '',
          price: 0,
          stock: 0,
          status: 'active',
          image_url: '',
        };
        await this.fetchProducts();
      }
    },
    editProduct(product) {
      this.currentProduct = { ...product };
      this.showEditForm = true;
    },
    async updateProduct() {
      if (!this.currentProduct.name || !this.currentProduct.price || !this.currentProduct.stock) {
        alert('Nome, preço e estoque são obrigatórios.');
        return;
      }
      const { error } = await supabase
        .from('products')
        .update(this.currentProduct)
        .eq('id', this.currentProduct.id);
      if (error) {
        alert('Erro ao atualizar produto: ' + error.message);
      } else {
        this.showEditForm = false;
        this.currentProduct = null;
        await this.fetchProducts();
      }
    },
    cancelEdit() {
      this.showEditForm = false;
      this.currentProduct = null;
    },
    async deleteProduct(id) {
      if (!confirm('Tem certeza que deseja excluir este produto?')) return;
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) {
        alert('Erro ao excluir produto: ' + error.message);
      } else {
        await this.fetchProducts();
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