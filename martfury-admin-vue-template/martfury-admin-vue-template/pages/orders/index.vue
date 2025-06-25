<template lang="html">
    <div class="ps-page">
        <header-dashboard title="Orders" description="Order Listing" />
        <section class="ps-items-listing">
            <div class="ps-section__header">
                <form-search-simple />
            </div>
            <div class="ps-section__content">
                <table-order-items />
            </div>
            <div class="ps-section__footer">
                <p>Show 10 in 30 items.</p>
                <Pagination />
            </div>
        </section>
    </div>
</template>

<script>
import TableOrderItems from "~/components/shared/tables/TableOrderItems";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import Pagination from "~/components/basic/Pagination";
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";

export default {
    name: "index",
    components: { FormSearchSimple, Pagination, HeaderDashboard, TableOrderItems }
};
</script>

<style lang="scss" scoped></style>
