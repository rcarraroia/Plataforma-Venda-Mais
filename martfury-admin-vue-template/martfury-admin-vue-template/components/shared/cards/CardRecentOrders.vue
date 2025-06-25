<template lang="html">
    <div class="ps-card">
        <div class="ps-card__header">
            <h4>Recent Orders</h4>
        </div>

        <div class="ps-card__content">
            <table-order-summary />
        </div>

        <div class="ps-card__footer">
            <a class="ps-card__morelink" href="orders.htmls">
                View Full Orders
                <i class="icon icon-chevron-right"></i>
            </a>
        </div>
    </div>
</template>

<script>
import TableOrderSummary from '~/components/shared/tables/TableOrderSummary';
export default {
    name: 'CardRecentOrders',
    components: { TableOrderSummary }
};
</script>

<style lang="scss" scoped></style>
