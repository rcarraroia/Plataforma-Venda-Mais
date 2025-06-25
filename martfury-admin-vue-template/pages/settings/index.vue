<template lang="html">
    <div class="ps-page">
        <header-dashboard title="Settings" description="Martfury settings page" />
        <section class="ps-dashboard ps-items-listing">
            <div class="ps-section__left">
                <section class="ps-card">
                    <div class="ps-card__header">
                        <h4>Account Settings</h4>
                    </div>
                    <div class="ps-card__content">
                        <form-account-settings />
                    </div>
                </section>
            </div>
            <div class="ps-section__right"></div>
        </section>
    </div>
</template>

<script>
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import FormAccountSettings from "~/components/shared/forms/FormAccountSettings";
export default {
    name: "SettingScreen",
    components: { FormAccountSettings, HeaderDashboard }
};
</script>

<style lang="scss" scoped></style>
