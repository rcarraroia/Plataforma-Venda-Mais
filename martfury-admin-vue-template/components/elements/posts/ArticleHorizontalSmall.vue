<template lang="html">
    <article class="ps-post ps-post--horizontal small">
        <div class="ps-post__thumbnail">
            <nuxt-link :to="`/post/${post.slug}`" class="ps-post__overlay" />
            <module-post-thumbnail-image :post="post" />
        </div>
        <div class="ps-post__wrapper">
            <div class="ps-post__content">
                <h4 class="ps-post__title">
                    <nuxt-link :to="`/post/${post.slug}`">
                        {{ post.title }}
                    </nuxt-link>
                </h4>
                <div class="ps-post__meta">
                    <span class="ps-post__posted">Jul 12, 2020</span>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import ModulePostThumbnailImage from '~/components/elements/posts/modules/ModulePostThumbnailImage';
export default {
    name: 'ArticleHorizontalSmall',
    components: { ModulePostThumbnailImage },
    props: {
        post: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
