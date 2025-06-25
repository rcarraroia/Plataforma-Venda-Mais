<template lang="html">
    <nuxt-link v-if="color === 'white'" to="/" class="ps-logo ps-logo--white">
        <img src="~/static/img/logo-white.svg" alt="Pantera blog" />
    </nuxt-link>
    <nuxt-link v-else to="/" class="ps-logo">
        <img src="~/static/img/logo-dark.svg" alt="Pantera blog" />
    </nuxt-link>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        color: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped></style>
