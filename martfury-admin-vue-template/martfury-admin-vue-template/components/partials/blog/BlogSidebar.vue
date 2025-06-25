<template lang="html">
    <section :class="`ps-blog--sidebar ${layout === 'left' && 'left'}`">
        <div class="ps-section__left">
            <div class="ps-section__items">
                <module-blog-post-grids collection-slug="home-featured-posts" :column="2" />
            </div>
        </div>
        <div class="ps-section__right">
            <sidebar-home />
        </div>
    </section>
</template>

<script>
import SidebarHome from '~/components/shared/sidebars/SidebarHome';
import ModuleBlogPostGrids from '~/components/partials/blog/modules/ModuleBlogPostGrids';
export default {
    name: 'BlogSidebar',
    components: { ModuleBlogPostGrids, SidebarHome },
    props: {
        layout: {
            type: String,
            default: () => 'left'
        }
    }
};
</script>
