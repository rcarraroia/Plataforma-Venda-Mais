<template lang="html">
    <div class="ps-blog--sidebar">
        <div class="ps-section__left">
            <div v-if="postItems && postItems.length > 0" class="ps-post-group--primary">
                <div class="ps-section__post-primary">
                    <article-classic :post="postItems[0]" />
                </div>
                <div class="ps-section__post-items">
                    <div class="row">
                        <template v-for="(item, index) in postItems">
                            <div v-if="index > 0" class="col-sm-6 col-12" :key="item.id">
                                <article-grid :post="item" />
                            </div>
                        </template>
                    </div>
                </div>
                <view-all-post-link />
            </div>
            <p v-else>No post found.</p>
        </div>
        <div class="ps-section__right">
            <sidebar-home />
        </div>
    </div>
</template>

<script>
import { SPGetPosts } from '~/repositories/PostCollection';
import ViewAllPostLink from '~/components/basic/ViewAllPostLink';
import ArticleClassic from '~/components/elements/posts/ArticleClassic';
import ArticleGrid from '~/components/elements/posts/ArticleGrid';
import SidebarHome from '~/components/shared/sidebars/SidebarHome';

export default {
    name: 'PostGroupWithPrimary',
    components: { SidebarHome, ArticleGrid, ArticleClassic, ViewAllPostLink },
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
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0
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
