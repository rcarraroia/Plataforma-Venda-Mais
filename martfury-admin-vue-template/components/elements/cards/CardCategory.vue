<template lang="html">
    <article class="ps-block--topic">
        <img :src="img" alt="" />
        <nuxt-link to="/blog" class="ps-block__overlay"> </nuxt-link>
        <div class="ps-block__content">
            <nuxt-link to="/blog" class="ps-block__title">
                {{ title }}
            </nuxt-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'CardCategory',
    props: {
        img: {
            type: String,
            default: () => ''
        },
        title: {
            type: String,
            default: () => ''
        }
    }
};
</script>

<style lang="scss" scoped></style>
