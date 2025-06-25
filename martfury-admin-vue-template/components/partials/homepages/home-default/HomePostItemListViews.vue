<template lang="html">
    <div class="ps-post-items">
        <article-list v-for="item in postItems" :post="item" :key="item.id" />
    </div>
</template>

<script>
import { SPGetPostItemOfCollectionBySlug } from '~/repositories/CollectionRepository';
import ArticleList from '~/components/elements/posts/ArticleList';

export default {
    name: 'HomePostItemListViews',
    components: { ArticleList },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            postItems: null
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
