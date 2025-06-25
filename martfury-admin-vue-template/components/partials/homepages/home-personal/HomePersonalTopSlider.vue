<template lang="html">
    <section class="ps-posts-in-carousel">
        <div class="ps-section__header text-center">
            <h1>Pantera Blog</h1>
        </div>
        <div class="ps-section__content">
            <template v-if="postItems && postItems.length > 0">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in postItems" :key="item.id">
                        <article-inside :post="item" />
                    </swiper-slide>
                </swiper>
            </template>
            <p v-else>No post found.</p>
        </div>
    </section>
</template>

<script>
import ArticlePrimary from '~/components/elements/posts/ArticlePrimary';
import { SPGetPosts } from '~/repositories/PostCollection';
import ArticleInside from '~/components/elements/posts/ArticleInside';

export default {
    name: 'HomePersonalTopSlider',
    components: { ArticleInside, ArticlePrimary },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            postItems: null,
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 30,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    960: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
                // Some Swiper option/callback...
            }
        };
    },
    async fetch() {
        const query = {
            _limit: 5
        };
        const SPPosts = await SPGetPosts(query);
        if (SPPosts) {
            this.postItems = SPPosts;
        }
    }
};
</script>

<style lang="scss" scoped></style>
