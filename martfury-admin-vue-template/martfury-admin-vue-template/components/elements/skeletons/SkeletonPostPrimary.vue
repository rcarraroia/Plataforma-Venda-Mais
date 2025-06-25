<template lang="html">
    <article class="ps-skeleton--post-primary">
        <div class="ske ske--label mb-5" />
        <div class="ske ske--heading mb-2" />
        <div class="ske ske--heading half mb-5" />
        <div class="ske ske--button ske--btn-rounded mb-5" />
    </article>
</template>

<script>
export default {
    name: 'SkeletonPostPrimary'
};
</script>

<style lang="scss" scoped>
.ps-skeleton--post-primary {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>
