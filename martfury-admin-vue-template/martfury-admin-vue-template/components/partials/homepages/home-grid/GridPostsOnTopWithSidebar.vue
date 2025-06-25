<template lang="html">
    <section class="ps-default-posts-on-top sidebar">
        <template v-if="postItems && postItems.length > 0">
            <swiper ref="mySwiper" :options="swiperOptions">
                <template v-for="item in postItems">
                    <swiper-slide :key="item.id">
                        <article-primary :post="item" :boxed="true" />
                    </swiper-slide>
                </template>
            </swiper>
        </template>
        <p v-else>No post found.</p>
    </section>
</template>

<script>
import { SPGetPostItemOfCollectionBySlug } from '~/repositories/CollectionRepository';
import ArticlePrimary from '~/components/elements/posts/ArticlePrimary';

export default {
    name: 'GridPostsOnTopWithSidebar',
    components: { ArticlePrimary },
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
