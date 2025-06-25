<template lang="html">
    <div class="ps-page">
        <header-dashboard title="Customers" description="Customer Listing Page" />
        <section class="ps-items-listing">
            <div class="ps-section__header simple">
                <div class="ps-section__filter">
                    <form-search-simple />
                </div>
                <!--                <div class="ps-section__actions">
                    <a class="ps-btn success" href="#">
                        <i class="icon icon-plus mr-2"></i>Add Customer
                    </a>
                </div>-->
            </div>
            <div class="ps-section__content">
                <table-customer-items />
            </div>
            <div class="ps-section__footer">
                <p>Show 10 in 30 items.</p>
                <Pagination />
            </div>
        </section>
    </div>
</template>

<script>
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import TableCustomerItems from "~/components/shared/tables/TableCustomerItems";
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";
import Pagination from "~/components/basic/Pagination";
export default {
    name: "CustomersScreen",
    components: { Pagination, FormSearchSimple, TableCustomerItems, HeaderDashboard }
};
</script>

<style lang="scss" scoped></style>
