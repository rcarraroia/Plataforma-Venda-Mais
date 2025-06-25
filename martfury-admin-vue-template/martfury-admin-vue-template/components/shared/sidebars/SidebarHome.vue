<template lang="html">
    <div className="ps-sidebar ps-sidebar--home">
        <widget-search/>
        <widget-recent-posts collection-slug="home-featured-posts"/>
        <widget-categories/>
        <widget-follow-me/>
    </div>
</template>

<script>
import WidgetSearch from '~/components/shared/widgets/WidgetSearch';
import WidgetCategories from '~/components/shared/widgets/WidgetCategories';
import WidgetFollowMe from '~/components/shared/widgets/WidgetFollowMe';
import WidgetRecentPosts from '~/components/shared/widgets/WidgetRecentPosts';
import { SPGetPostItemOfCollectionBySlug } from '~/repositories/CollectionRepository';
export default {
name: "SidebarHome",
    components: { WidgetRecentPosts, WidgetFollowMe, WidgetCategories, WidgetSearch },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            postItems: null
        };
    },
    async fetch() {
        const query = {
            slug_in: this.collectionSlug
        };
        const SPPosts = await SPGetPostItemOfCollectionBySlug(
            query
        );
        if (SPPosts) {
            this.postItems = SPPosts;
        }
        setTimeout(
            function() {
                this.loading = false;
            }.bind(this),
            250
        );
    }
}
</script>

<style lang="scss" scoped>

</style>
