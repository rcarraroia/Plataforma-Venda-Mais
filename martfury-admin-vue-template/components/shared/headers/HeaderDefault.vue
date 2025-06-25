<template lang="html">
    <header :class="`header header--default ${classes}`" id="header-sticky">
        <div class="container">
            <div class="header__left">
                <logo color="white" />
                <logo />
            </div>
            <div class="header__center">
                <menu-default :menu-items="menuItems" class-name="menu" />
            </div>
            <div class="header__right">
                <div class="header__search">
                    <a href="#" class="header__search-btn" @click.prevent="handleOpenSearchBox">
                        <i class="feather icon icon-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { handleStickyHeader } from '~/utilities/helpers';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import { primaryMenu } from '~/static/data/menu.json';
import Logo from '~/components/elements/Logo';
import { mapState } from 'vuex';

export default {
    name: 'HeaderDefault',
    components: { Logo, MenuDefault },
    props: {
        classes: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        ...mapState({
            isSearch: state => state.app.isSearch
        }),
        menuItems() {
            return primaryMenu;
        }
    },
    methods: {
        handleOpenSearchBox() {
            console.log(this.isSearch);
            this.$store.commit('app/toggleSearch', true);
            console.log(this.isSearch);
        }
    },
    mounted() {
        window.addEventListener('scroll', handleStickyHeader);
    }
};
</script>

<style lang="scss" scoped></style>
