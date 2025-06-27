<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Categories</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in productItems" :key="item.sku">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <a href="#">
                            <strong>{{ item.name }}</strong>
                        </a>
                    </td>
                    <td>{{ item.sku }}</td>

                    <td>
                        <span v-if="item.stock" class="ps-badge success">Stock</span>
                        <span v-else class="ps-badge gray">Out-of-stock</span>
                    </td>
                    <td>
                        <strong>{{ item.price }}</strong>
                    </td>
                    <td>
                        <p class="ps-item-categories">
                            <a v-for="cat in item.categories" href="#" :key="cat.name">
                                {{ cat.name }}
                            </a>
                        </p>
                    </td>
                    <td>{{ item.date }}</td>
                    <td>
                        <a href="#">
                            <i class="icon-pencil mr-2"></i>
                        </a>
                        <a href="#">
                            <i class="icon-trash2 mr-2"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableProductItems',
    data() {
        return {
            productItems: []
        };
    },
    async created() {
        try {
            const response = await this.$axios.get('/products');
            this.productItems = response.data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }
};
</script>

<style lang="scss" scoped></style>
