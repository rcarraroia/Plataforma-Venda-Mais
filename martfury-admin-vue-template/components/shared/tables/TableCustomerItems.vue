<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Balances</th>
                    <th>Total orders</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in customers" :key="item.name">
                    <td>{{ index }}</td>
                    <td>
                        <strong>{{ item.name }}</strong>
                    </td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.balance }}</td>
                    <td>{{ item.orders }}</td>
                    <td>
                        <span v-if="item.status" class="ps-badge success">active</span>
                        <span v-else class="ps-badge gray">deactive</span>
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
    name: "TableCustomerItems",
    data() {
        return {
            customers: []
        };
    },
    async created() {
        try {
            const response = await this.$axios.get('/sellers');
            this.customers = response.data;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    }
};
</script>

<style lang="scss" scoped></style>
