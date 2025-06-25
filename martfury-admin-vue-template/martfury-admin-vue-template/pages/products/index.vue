<template lang="html">
    <section class="ps-page">
        <header-dashboard title="Products" description="Martfury Products listing" />
        <section class="ps-items-listing">
            <div class="ps-section__actions">
                <nuxt-link to="/products/create-new" class="ps-btn success">
                    <i class="icon icon-plus mr-2" />
                    New Product
                </nuxt-link>
            </div>
            <div class="ps-section__header">
                <form-search-simple />
            </div>
            <div class="ps-section__content">
                <table-product-items />
            </div>
            <div class="ps-section__footer">
                <p>Show 10 in 30 items.</p>
                <pagination />
            </div>
        </section>
    </section>
</template>

<script>
import TableProductItems from "~/components/shared/tables/TableProductItems";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import Pagination from "~/components/basic/Pagination";
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";
export default {
    components: { FormSearchSimple, Pagination, HeaderDashboard, TableProductItems }
};
</script>

<style lang="scss" scoped></style>
