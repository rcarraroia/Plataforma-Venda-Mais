<template lang="html">
    <img v-if="wide === false" :src="`${baseURL}${post.thumbnail.url}`" :alt="post.title" />
    <img v-else :src="`${baseURL}${post.wide_thumbnail.url}`" :alt="post.title" />
</template>

<script>
import { baseUrl } from '~/repositories/Repository';

export default {
    name: 'ModulePostThumbnailImage',
    computed: {
        baseURL() {
            return baseUrl;
        }
    },
    props: {
        post: {
            type: Object,
            default: {}
        },
        wide: {
            type: Boolean,
            default: () => false
        }
    }
};
</script>

<style lang="scss" scoped></style>
