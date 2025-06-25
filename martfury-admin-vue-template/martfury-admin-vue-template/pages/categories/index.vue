<template lang="html">
    <div class="ps-page">
        <header-dashboard title="Categories" description="Martfury Category Listing" />
        <section class="ps-dashboard ps-items-listing">
            <div class="ps-section__left">
                <div class="ps-section__header">
                    <form-search-simple />
                </div>
                <div class="ps-section__content">
                    <table-category-items />
                    <div class="ps-section__footer">
                        <p>Show 5 in 30 items.</p>
                    </div>
                </div>
            </div>
            <div class="ps-section__right">
                <form-create-category />
            </div>
        </section>
    </div>
</template>

<script>
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";
import TableCategoryItems from "~/components/shared/tables/TableCategoryItems";
import FormProductCreateNew from "~/components/shared/forms/FormProductCreateNew";
import FormCreateCategory from "~/components/shared/forms/FormCreateCategory";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
export default {
    name: "CategoriesScreen",
    components: {
        HeaderDashboard,
        FormCreateCategory,
        FormProductCreateNew,
        TableCategoryItems,
        FormSearchSimple
    }
};
</script>

<style lang="scss" scoped></style>
