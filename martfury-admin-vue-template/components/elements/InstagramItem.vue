<template lang="html">
    <div class=" slick-slide">
        <div class="ps-block--instagram">
            <img :src="`${baseURL}${instagram.url}`" alt="" />
            <a href="https://www.instagram.com/">
                <i class="feather icon icon-instagram"></i>
            </a>
        </div>
    </div>
</template>

<script>
import ModulePostThumbnailImage from '~/components/elements/posts/modules/ModulePostThumbnailImage';
import { baseUrl } from '~/repositories/Repository';
export default {
    name: 'InstagramItem',
    components: { ModulePostThumbnailImage },
    props: {
        instagram: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        baseURL() {
            return baseUrl;
        }
    }
};
</script>

<style lang="scss" scoped></style>
