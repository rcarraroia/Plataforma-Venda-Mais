<template lang="html">
    <div class="ps-card ps-card--earning">
        <div class="ps-card__header">
            <h4>Earnings</h4>
        </div>
        <div class="ps-card__content">
            <div class="ps-card__chart">
                <apexchart type="donut" :options="state.options" :series="state.series" />

                <div class="ps-card__information">
                    <i class="icon icon-wallet"></i>
                    <strong>$12,560</strong>
                    <small>Balance</small>
                </div>
            </div>
            <div class="ps-card__status">
                <p class="yellow">
                    <strong> $20,199</strong>
                    <span>Income</span>
                </p>
                <p class="red">
                    <strong> $1,021</strong>
                    <span>Taxes</span>
                </p>
                <p class="green">
                    <strong> $992.00</strong>
                    <span>Fees</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardEarning",
    data() {
        return {
            state: {
                series: [44, 55, 41],
                options: {
                    chart: {
                        height: 500,
                        type: "donut"
                    },
                    dataLabels: {
                        enabled: false
                    },

                    legend: {
                        show: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: "100%"
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
