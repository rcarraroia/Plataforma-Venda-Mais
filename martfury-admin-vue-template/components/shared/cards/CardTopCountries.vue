<template lang="html">
    <section class="ps-card ps-card--top-country">
        <div class="ps-card__header">
            <h4>Top Countries</h4>
        </div>
        <div class="ps-card__content">
            <div class="row">
                <div class="col-6">
                    <figure class="organge">
                        <figcaption>United States</figcaption>
                        <strong>80%</strong>
                    </figure>
                </div>
                <div class="col-6">
                    <figure class="red">
                        <figcaption>United Kingdom</figcaption>
                        <strong>65%</strong>
                    </figure>
                </div>
                <div class="col-6">
                    <figure class="green">
                        <figcaption>Germany</figcaption>
                        <strong>65%</strong>
                    </figure>
                </div>
                <div class="col-6">
                    <figure class="cyan">
                        <figcaption>Russia</figcaption>
                        <strong>35%</strong>
                    </figure>
                </div>
            </div>
            <img src="~/static/img/map-and-bundle.png" alt="" />
            <p>We only started collecting region data from January 2015</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CardTopCountries'
};
</script>

<style lang="scss" scoped></style>
