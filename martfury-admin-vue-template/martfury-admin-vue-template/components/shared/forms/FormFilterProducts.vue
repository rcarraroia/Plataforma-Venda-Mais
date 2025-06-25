<template lang="html">
    <form class="ps-form--filter" @submit.prevent>
        <div class="ps-form__left">
            <div class="form-group">
                <v-select placeholder="Select Categories"> </v-select>
            </div>
            <div class="form-group">
                <v-select placeholder="Select Type" />
            </div>
            <div class="form-group">
                <v-select placeholder="Select status" />
            </div>
        </div>
        <div class="ps-form__right">
            <button class="ps-btn ps-btn--gray">
                <i class="icon icon-funnel mr-2"></i>
                Filter
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'FormFilterProducts'
};
</script>

<style lang="scss" scoped></style>
