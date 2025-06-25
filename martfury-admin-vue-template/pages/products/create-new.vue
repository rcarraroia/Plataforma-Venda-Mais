<template lang='html'>
    <section class="ps-page">
        <form-product-create-new/>
    </section>
</template>

<script>
import FormProductCreateNew from '~/components/shared/forms/FormProductCreateNew';
export default {
    name: 'new-product',
    components: { FormProductCreateNew }
};
</script>

<style lang="scss" scoped>

</style>
