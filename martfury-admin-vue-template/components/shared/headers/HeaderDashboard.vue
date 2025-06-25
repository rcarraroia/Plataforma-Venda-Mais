<template lang="html">
    <header class="header--dashboard">
        <div class="header__left">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
        <div class="header__center">
            <form-header-search />
        </div>
        <div class="header__right">
            <a class="header__site-link" target="_blank" href="http://vuestorefronts.com/">
                <span>View your store</span>
                <i class="icon-exit-right"></i>
            </a>
        </div>
    </header>
</template>

<script>
import FormHeaderSearch from "~/components/shared/forms/FormHeaderSearch";
export default {
    name: "HeaderDashboard",
    components: { FormHeaderSearch },
    props: {
        title: {
            type: String,
            default: () => "Dashboard"
        },
        description: {
            type: String,
            default: () => "Everything here"
        }
    }
};
</script>

<style lang="scss" scoped></style>
