<template lang="html">
    <ul class="menu">
        <li v-for="item in menuItems" :key="item.text">
            <nuxt-link :to="item.url" class="menu__text">
                <i :class="item.icon"> </i>
                <span>{{ item.text }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MenuSidebar',
    data() {
        return {
            menuItems: [
                {
                    text: 'Dashboard',
                    url: '/',
                    icon: 'icon-home'
                },
                {
                    text: 'Products',
                    url: '/products',
                    icon: 'icon-database'
                },
                {
                    text: 'Orders',
                    url: '/orders',
                    icon: 'icon-bag2'
                },
                {
                    text: 'Customers',
                    url: '/customers',
                    icon: 'icon-users2'
                },
                {
                    text: 'Categories',
                    url: '/categories',
                    icon: 'icon-users2'
                },
                {
                    text: 'Settings',
                    url: '/settings',
                    icon: 'icon-cog'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
