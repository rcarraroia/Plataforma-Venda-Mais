<template lang="html">
    <v-navigation-drawer v-model="drawer" width="100%" absolute temporary>
        <div class="ps-panel--menu-sidebar">
            <div class="ps-panel__header">
                <a class="ps-drawer__close" @click="handleCloseDrawer">
                    <i class="feather icon icon-x"></i>
                </a>
            </div>
            <div class="ps-panel__content">
                <ul class="menu">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <nuxt-link :to="item.url">
                            <a>
                                <i class="item.icon"></i>
                                {{ item.text }}
                            </a>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="ps-panel__footer"></div>
        </div>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import SocialLinks from "~/components/elements/SocialLinks";
import MenuDefault from "~/components/shared/menu/MenuDefault";
import MobileSubmenu from "~/components/shared/mobile/modules/MobileSubmenu";

export default {
    name: "DrawerMenu",
    components: { MobileSubmenu, MenuDefault, SocialLinks },
    computed: {
        ...mapState({
            isDrawer: state => state.app.isDrawer
        }),
        drawer: {
            get() {
                return this.isDrawer;
            },
            set(newValue) {
                return newValue;
            }
        }
    },
    data() {
        return {
            menuItems: [
                {
                    text: "Dashboard",
                    url: "/",
                    icon: "icon-home"
                },
                {
                    text: "Products",
                    url: "/products",
                    icon: "icon-database"
                },
                {
                    text: "Orders",
                    url: "/orders",
                    icon: "icon-bag2"
                },
                {
                    text: "Customers",
                    url: "/customers",
                    icon: "icon-users2"
                },
                {
                    text: "Categories",
                    url: "/categories",
                    icon: "icon-users2"
                },
                {
                    text: "Settings",
                    url: "/settings",
                    icon: "icon-cog"
                }
            ]
        };
    },
    methods: {
        handleCloseDrawer() {
            this.$store.commit("app/toggleDrawer", false);
        }
    }
};
</script>

<style lang="scss" scoped></style>
