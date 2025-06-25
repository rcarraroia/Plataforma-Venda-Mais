<template lang="html">
    <main class="ps-main">
        <header-mobile />
        <drawer-menu />
        <div class="ps-main__sidebar">
            <div class="ps-sidebar">
                <div class="ps-sidebar__top">
                    <widget-user-welcome />
                    <widget-earning-sidebar />
                </div>
                <div class="ps-sidebar__content">
                    <div class="ps-sidebar__center">
                        <menu-sidebar />
                    </div>
                </div>
                <div class="ps-sidebar__footer">
                    <footer-copyright />
                </div>
            </div>
        </div>
        <div class="ps-main__wrapper">
            <nuxt />
        </div>
    </main>
</template>

<script>
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import WidgetUserWelcome from "~/components/shared/widgets/WidgetUserWelcome";
import WidgetEarningSidebar from "~/components/shared/widgets/WidgetEarningSidebar";
import FooterCopyright from "~/components/shared/footers/FooterCopyright";
import MenuSidebar from "~/components/shared/menu/MenuSidebar";
import HeaderMobile from "~/components/shared/mobile/HeaderMobile";
import DrawerMenu from "~/components/shared/drawers/DrawerMenu";

export default {
    name: "dashboard",
    components: {
        DrawerMenu,
        HeaderMobile,
        MenuSidebar,
        FooterCopyright,
        WidgetEarningSidebar,
        WidgetUserWelcome,
        HeaderDashboard
    }
};
</script>

<style lang="scss" scoped></style>
