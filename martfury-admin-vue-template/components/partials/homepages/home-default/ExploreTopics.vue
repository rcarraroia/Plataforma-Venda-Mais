<template lang="html">
    <section class="ps-section--classic ps-explore-topics">
        <div class="ps-section__header">
            <h3>Explore Topics</h3>
        </div>
        <div class="ps-section__content">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>
                    <card-category img="/img/topics/1.jpg" title="All" />
                </swiper-slide>
                <swiper-slide><card-category img="/img/topics/2.jpg" title="Travel"/></swiper-slide>
                <swiper-slide>
                    <card-category img="/img/topics/3.jpg" title="Technology" />
                </swiper-slide>
                <swiper-slide>
                    <card-category img="/img/topics/4.jpg" title="LifeStyle" />
                </swiper-slide>
                <swiper-slide> <card-category img="/img/topics/5.jpg" title="Work"/></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
import CardCategory from '~/components/elements/cards/CardCategory';
export default {
    name: 'ExploreTopics',
    components: { CardCategory },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 4,
                spaceBetween: 30,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        }
    },
    mounted() {
        this.swiper.slideTo(3, 1000, false);
    }
};
</script>

<style lang="scss" scoped></style>
