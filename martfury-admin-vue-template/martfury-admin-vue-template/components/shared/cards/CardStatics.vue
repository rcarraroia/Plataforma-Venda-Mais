<template lang="html">
    <section class="ps-card ps-card--statics">
        <div class="ps-card__header">
            <h4>Statics</h4>
            <div class="ps-card__sortby">
                <i class="icon-calendar-empty"></i>
                <div class="form-group--select">
                    <select class="form-control">
                        <option value="1">Last 30 days</option>
                        <option value="2">Last 90 days</option>
                        <option value="3">Last 180 days</option>
                    </select>
                    <i class="icon-chevron-down"></i>
                </div>
            </div>
        </div>
        <div class="ps-card__content">
            <div class="ps-block--stat yellow">
                <div class="ps-block__left">
                    <span>
                        <i class="icon-cart"></i>
                    </span>
                </div>
                <div class="ps-block__content">
                    <p>Orders</p>
                    <h4>
                        254
                        <small class="asc">
                            <i class="icon-arrow-up"></i>
                            <span>12,5%</span>
                        </small>
                    </h4>
                </div>
            </div>
            <div class="ps-block--stat pink">
                <div class="ps-block__left">
                    <span>
                        <i class="icon-cart"></i>
                    </span>
                </div>
                <div class="ps-block__content">
                    <p>Revenue</p>
                    <h4>
                        $6,260
                        <small class="asc">
                            <i class="icon-arrow-up"></i>
                            <span>7.1%</span>
                        </small>
                    </h4>
                </div>
            </div>
            <div class="ps-block--stat green">
                <div class="ps-block__left">
                    <span>
                        <i class="icon-cart"></i>
                    </span>
                </div>
                <div class="ps-block__content">
                    <p>Earning</p>
                    <h4>
                        $2,567
                        <small class="desc">
                            <i class="icon-arrow-down"></i>
                            <span>0.5%</span>
                        </small>
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CardStatics'
};
</script>

<style lang="scss" scoped></style>
