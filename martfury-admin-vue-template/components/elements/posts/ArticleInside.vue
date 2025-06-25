<template lang="html">
    <article class="ps-post ps-post--inside">
        <div class="ps-post__thumbnail">
            <nuxt-link :to="`/post/${post.slug}`" class="ps-post__overlay" />
            <module-post-thumbnail-image :post="post" />
        </div>
        <div class="ps-post__content">
            <div class="ps-post__meta">
                <span class="ps-post__posted">Jul 12, 2020</span>
            </div>
            <h4 class="ps-post__title">
                <nuxt-link :to="`/post/${post.slug}`">
                    {{ post.title }}
                </nuxt-link>
            </h4>
        </div>
    </article>
</template>

<script>
import ModulePostThumbnailImage from '~/components/elements/posts/modules/ModulePostThumbnailImage';
import ModulePostAuthorSmall from '~/components/elements/posts/modules/ModulePostAuthorSmall';

export default {
    name: 'ArticleInside',
    components: { ModulePostAuthorSmall, ModulePostThumbnailImage },
    computed: {
        postShortDesc() {
            if (this.post && this.post.description) {
                return this.post.description.slice(0, 100) + '...';
            } else {
                return 'No description found...';
            }
        }
    },
    props: {
        post: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
