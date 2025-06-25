<template lang="html">
    <header class="header--mobile">
        <div class="header__left">
            <button class="ps-drawer-toggle" @click.prevent="handleOpenMenuDrawer">
                <i class="icon icon-menu"></i>
            </button>
        </div>
        <div class="header__center">
            <a class="ps-logo" href="#">
                <img src="~/static/img/logo.png" alt="" />
            </a>
        </div>
        <div class="header__right">
            <a class="header__site-link" href="#">
                <i class="icon-exit-right"></i>
            </a>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";
import { handleStickyHeader } from "~/utilities/helpers";
export default {
    name: "HeaderMobile",
    computed: {
        ...mapState({
            isDrawer: state => state.app.isDrawer
        })
    },

    methods: {
        handleOpenMenuDrawer() {
            this.$store.commit("app/toggleDrawer", !this.isDrawer);
        }
    },
    mounted() {
        window.addEventListener("scroll", handleStickyHeader);
    }
};
</script>

<style lang="scss" scoped></style>
