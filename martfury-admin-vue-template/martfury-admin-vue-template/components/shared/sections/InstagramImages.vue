<template lang="html">
    <div class="ps-section--instagram">
        <div class="ps-section__header">
            <p>Follow me on Instagram</p>
            <h3><i class="fa fa-instagram"></i>diaryforlife</h3>
        </div>
        <div class="ps-section__content">
            <swiper ref="instagramSwiperRef" :options="swiperOptions">
                <swiper-slide v-for="item in instagramItems" :key="item.id">
                    <instagram-item :instagram="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { SPGetInstagram } from '~/repositories/MediaCollection';
import InstagramItem from '~/components/elements/InstagramItem';

export default {
    name: 'InstagramImages',
    components: { InstagramItem },
    computed: {
        swiper() {
            return this.$refs.instagramSwiperRef.$swiper;
        }
    },
    data() {
        return {
            instagramItems: null,
            swiperOptions: {
                slidesPerView: 7,
                breakpoints: {
                    320: {
                        slidesPerView: 4
                    },
                    480: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    1366: {
                        slidesPerView: 5
                    },

                    1680: {
                        slidesPerView: 7
                    }
                }
            }
        };
    },

    async fetch() {
        const query = {
            slug_in: this.collectionSlug
        };
        const SPInstagramImages = await SPGetInstagram();
        if (SPInstagramImages) {
            this.instagramItems = SPInstagramImages;
        }
        setTimeout(
            function() {
                this.loading = false;
            }.bind(this),
            250
        );
    }
};
</script>

<style lang="scss" scoped></style>
