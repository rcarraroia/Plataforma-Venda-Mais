<template lang="html">
    <ul :class="classes">
        <template v-for="item in menuItems">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="localePath(item.url)">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDropdown from './MenuDropdown';
import MenuMega from './MenuMega';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown },
    props: {
        classes: {
            type: String,
            default: 'menu'
        },
        menuItems: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped></style>
