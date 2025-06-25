<template lang="html">
    <form class="ps-form ps-form--new" action="index.html" method="get">
        <div class="ps-form__content">
            <div class="form-group">
                <label> Name<sup>*</sup> </label>
                <input class="form-control" type="text" placeholder="Enter category name" />
            </div>
            <div class="form-group">
                <label> Slug<sup>*</sup> </label>
                <input class="form-control" type="text" placeholder="Enter category slug" />
            </div>
            <div class="form-group form-group--select">
                <label>Parent</label>
                <div class="form-group__content">
                    <select class="ps-select" title="Parent">
                        <option value="1">Parent 1</option>
                        <option value="2">Parent 2</option>
                        <option value="3">Parent 3</option>
                        <option value="4">Parent 4</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea
                    class="form-control"
                    rows="6"
                    placeholder="Enter category description"
                ></textarea>
            </div>
        </div>
        <div class="ps-form__bottom">
            <button class="ps-btn ps-btn--gray">Reset</button>
            <button class="ps-btn ps-btn--sumbit success">
                Add new
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: "FormCreateCategory"
};
</script>

<style lang="scss" scoped></style>
