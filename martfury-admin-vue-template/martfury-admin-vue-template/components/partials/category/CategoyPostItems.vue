<template lang="html">
    <div class="ps-blog--post-items">
        <template v-if="postItems">
            <div class="row">
                <template v-if="column === 4">
                    <div
                        class="col-lg-3 col-md-4 col-sm-6 col-12"
                        v-for="item in postItems"
                        :key="item.id"
                    >
                        <article-grid :post="item" />
                    </div>
                </template>
                <template v-else-if="column === 2">
                    <div class="col-2 col-sm-6 col-12" v-for="item in postItems" :key="item.id">
                        <article-grid :post="item" />
                    </div>
                </template>
                <template v-else>
                    <div class="col-md-4 col-sm-6 col-12" v-for="item in postItems" :key="item.id">
                        <article-grid :post="item" />
                    </div>
                </template>
            </div>
            <view-all-post-link />
        </template>
        <p>No post found.</p>
    </div>
</template>

<script>
import ViewAllPostLink from '~/components/basic/ViewAllPostLink';
import { SPGetPostItemOfCollectionBySlug } from '~/repositories/CollectionRepository';
import ArticleGrid from '~/components/elements/posts/ArticleGrid';
import { SPGetPosts } from '~/repositories/PostCollection';

export default {
    name: 'CategoryPostItems',
    components: { ArticleGrid, ViewAllPostLink },
    props: {
        slug: {
            type: String,
            default: ''
        },
        column: {
            type: Number,
            default: () => 3
        }
    },
    data() {
        return {
            postItems: null
        };
    },
    async fetch() {
        if (this.collectionSlug) {
            const query = {
                slug_in: this.slug
            };
            const SPPosts = await SPGetPostItemOfCollectionBySlug(query);
            if (SPPosts) {
                this.postItems = SPPosts;
            }
        } else {
            const query = {
                _limit: 20
            };
            const SPPosts = await SPGetPosts(query);
            if (SPPosts) {
                this.postItems = SPPosts;
            }
        }
    }
};
</script>
