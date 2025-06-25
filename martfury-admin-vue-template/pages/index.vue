<template lang="html">
    <section class="ps-dashboard" id="homepage">
        <div class="ps-section__left">
            <div class="row">
                <div class="col-xl-8 col-12">
                    <card-sale-report />
                </div>
                <div class="col-xl-4 col-12">
                    <card-earning />
                </div>
            </div>
            <card-recent-orders />
        </div>
        <div class="ps-section__right">
            <card-statics />
            <card-top-countries />
        </div>
    </section>
</template>
<script>
import CardTopCountries from "~/components/shared/cards/CardTopCountries";
import CardStatics from "~/components/shared/cards/CardStatics";
import CardRecentOrders from "~/components/shared/cards/CardRecentOrders";
import CardSaleReport from "~/components/shared/cards/CardSaleReport";
import CardEarning from "~/components/shared/cards/CardEarning";

export default {
    components: { CardEarning, CardSaleReport, CardRecentOrders, CardStatics, CardTopCountries },
    layout: "dashboard",
    async created() {
        this.$store.commit("app/toggleDrawer", false);
    }
};
</script>
