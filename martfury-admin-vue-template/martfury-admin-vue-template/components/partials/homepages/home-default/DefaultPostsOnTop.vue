<template lang="html">
    <section v-if="!loading" class="ps-default-posts-on-top">
        <template v-if="postItems && postItems.length > 0">
            <swiper ref="mySwiper" :options="swiperOptions">
                <template v-for="item in postItems">
                    <swiper-slide :key="item.id">
                        <article-primary :post="item" />
                    </swiper-slide>
                </template>
            </swiper>
        </template>
    </section>
    <section v-else class="ps-section--loading-fullscreen" />
</template>

<script>
import { SPGetPostItemOfCollectionBySlug } from '~/repositories/CollectionRepository';
import ArticlePrimary from '~/components/elements/posts/ArticlePrimary';
import SkeletonPostPrimary from '~/components/elements/skeletons/SkeletonPostPrimary';

export default {
    name: 'DefaultPostsOnTop',
    components: { SkeletonPostPrimary, ArticlePrimary },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            postItems: null,
            loading: true,
            swiperOptions: {
                slidesPerView: 1,
                fadeEffect: true
            }
        };
    },
    async fetch() {
        const query = {
            slug_in: this.collectionSlug
        };
        const SPPosts = await SPGetPostItemOfCollectionBySlug(query);
        if (SPPosts) {
            this.postItems = SPPosts;
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
