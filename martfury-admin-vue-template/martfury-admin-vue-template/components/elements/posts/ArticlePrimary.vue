<template lang="html">
    <article
        :class="`ps-post ps-post--fullscreen bg--cover ${boxed === true ? 'boxed' : ''}`"
        :style="{
            backgroundImage: `url(${baseURL}${post.wide_thumbnail.url})`
        }"
    >
        <nuxt-link :to="`/post/${post.slug}`" class="ps-post__overlay" />
        <div class="ps-post__content">
            <div class="ps-post__categories">
                <nuxt-link to="/blog" v-for="item in post.categories" :key="item.id">
                    {{ item.name }}
                </nuxt-link>
            </div>
            <h4 class="ps-post__title">
                {{ post.title }}
            </h4>
            <div class="ps-post__meta">
                <module-post-author-small />
                <span>Aug 29, 2020</span>
            </div>
            <nuxt-link :to="`/post/${post.slug}`" class="ps-post__morelink ">
                Continue Reading
            </nuxt-link>
        </div>
    </article>
</template>

<script>
import ModulePostThumbnailImage from '~/components/elements/posts/modules/ModulePostThumbnailImage';
import ModulePostAuthorSmall from '~/components/elements/posts/modules/ModulePostAuthorSmall';
import { baseUrl } from '~/repositories/Repository';

export default {
    name: 'ArticlePrimary',
    components: { ModulePostAuthorSmall, ModulePostThumbnailImage },
    computed: {
        baseURL() {
            return baseUrl;
        },
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
        },
        boxed: {
            type: Boolean,
            default: () => false
        }
    }
};
</script>

<style lang="scss" scoped></style>
