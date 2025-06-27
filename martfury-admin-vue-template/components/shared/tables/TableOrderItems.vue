<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Payment</th>
                    <th>Fullfillment</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orderItems" key="{item.id}">
                    <td>{{ item.id }}</td>
                    <td>
                        <nuxt-link to="/orders/detail">
                            <strong>{{ item.product }}</strong>
                        </nuxt-link>
                    </td>
                    <td>
                        <strong> Aug 15, 2020</strong>
                    </td>
                    <td>
                        <span v-if="item.payment" class="ps-badge success">Paid</span>
                        <span v-else class="ps-badge gray">Unpaid</span>
                    </td>
                    <td>
                        <span
                            v-if="item.fullfillment === 'In Progress'"
                            class="ps-fullfillment warning"
                        >
                            In Progress
                        </span>
                        <span
                            v-else-if="item.fullfillment === 'Cancel'"
                            class="ps-fullfillment danger"
                        >
                            In Progress
                        </span>
                        <span class="ps-fullfillment success">Delivered</span>
                    </td>
                    <td>
                        <strong>{{ item.total }}</strong>
                    </td>
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
    name: "TableOrderItems",
    data() {
        return {
            orderItems: []
        };
    },
    async created() {
        try {
            const response = await this.$axios.get('/orders');
            this.orderItems = response.data;
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    }
};
</script>

<style lang="scss" scoped></style>
