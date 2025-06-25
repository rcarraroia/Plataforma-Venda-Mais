<template lang="html">
    <div class="ps-page">
        <header-dashboard title="Order Detail" />
        <section class="ps-dashboard">
            <div class="ps-section__left">
                <div class="row">
                    <div class="col-md-6">
                        <card-order-shipping-information />
                    </div>
                    <div class="col-md-6">
                        <card-order-billing-information />
                    </div>
                </div>
                <div class="ps-card ps-card--track-order">
                    <div class="ps-card__header">
                        <h4>#ABD-235711</h4>
                    </div>
                    <div class="ps-card__content">
                        <table-order-detail />
                    </div>
                </div>
            </div>
            <div class="ps-section__right">
                <div class="ps-card ps-card--track-order">
                    <div class="ps-card__header">
                        <h4>Track Your Order</h4>
                    </div>
                    <div class="ps-card__content">
                        <div class="ps-block--track-order">
                            <div class="ps-block__header">
                                <div class="row">
                                    <div class="col-6">
                                        <figure>
                                            <figcaption>
                                                Order ID:
                                            </figcaption>
                                            <p>#ABD-235711</p>
                                        </figure>
                                    </div>
                                    <div class="col-6">
                                        <figure>
                                            <figcaption>
                                                Tracking ID:
                                            </figcaption>
                                            <p>21191818abs1</p>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-block__content">
                                <div class="ps-block__timeline">
                                    <figure class="active">
                                        <figcaption>
                                            Order Placed
                                        </figcaption>
                                        <p>
                                            Sep 19, 2020{' '}
                                            <small>7:00am</small>
                                        </p>
                                    </figure>
                                    <figure class="active">
                                        <figcaption>Packed</figcaption>
                                        <p>
                                            Sep 19, 2020{' '}
                                            <small>10:00am</small>
                                        </p>
                                    </figure>
                                    <figure class="active">
                                        <figcaption>Shipped</figcaption>
                                        <p>
                                            Sep 19, 2020{' '}
                                            <small>4:00pm</small>
                                        </p>
                                    </figure>
                                    <figure>
                                        <figcaption>Delivered</figcaption>
                                        <p>
                                            Estimated delivery within 1 day
                                        </p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import TableOrderDetail from "~/components/shared/tables/TableOrderDetail";
import CardOrderShippingInformation from "~/components/shared/cards/CardOrderShippingInformation";
import CardOrderBillingInformation from "~/components/shared/cards/CardOrderBillingInformation";

export default {
    name: "OrderDetailScreen",
    components: {
        CardOrderBillingInformation,
        CardOrderShippingInformation,
        TableOrderDetail,
        HeaderDashboard
    }
};
</script>

<style lang="scss" scoped></style>
