<template lang="html">
    <ul class="ps-list--social ps-social-links">
        <li v-for="item in links" :key="item.id">
            <a href="#"><i :class="item.icon"></i></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SocialLinks',
    data() {
        return {
            links: [
                {
                    id: '1',
                    icon: 'fa fa-facebook',
                    href: '#'
                },
                {
                    id: '2',
                    icon: 'fa fa-twitter',
                    href: '#'
                },
                {
                    id: '3',
                    icon: 'fa fa-youtube-play',
                    href: '#'
                },
                {
                    id: '4',
                    icon: 'fa fa-linkedin',
                    href: '#'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
