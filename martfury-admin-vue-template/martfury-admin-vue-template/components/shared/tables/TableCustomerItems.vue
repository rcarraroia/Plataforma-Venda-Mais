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
            customers: [
                {
                    name: "Jenny Simmonds",
                    phone: "(+921) 211-32-1145",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                },
                {
                    name: "Ammara Molloy",
                    phone: "(+921) 916-971-217",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                },
                {
                    name: "Anisa Forster",
                    phone: "(+921) 319-176-113",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                },
                {
                    name: "Hashir Wilson",
                    phone: "(+921) 393-112-298",
                    balance: "$211.00",
                    orders: "10",
                    status: "false"
                },
                {
                    name: "Grover Sampson",
                    phone: "(+921) 393-872-137",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                },
                {
                    name: "Nelson Mckeown",
                    phone: "(+921) 393-872-998",
                    balance: "$211.00",
                    orders: "10",
                    status: "false"
                },
                {
                    name: "Zunaira Akhtar",
                    phone: "(+921) 393-872-145",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                },
                {
                    name: "Natan Kramer",
                    phone: "(+921) 293-872-145",
                    balance: "$211.00",
                    orders: "10",
                    status: "false"
                },
                {
                    name: "Jesse Pollard",
                    phone: "(+921) 291-32-145",
                    balance: "$211.00",
                    orders: "10",
                    status: "true"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
