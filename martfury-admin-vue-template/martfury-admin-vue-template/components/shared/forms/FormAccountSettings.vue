<template lang="html">
    <form class="ps-form--account-settings" action="index.html" method="get">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Full Name</label>
                    <input class="form-control" type="text" placeholder="" />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Display Name</label>
                    <input class="form-control" type="text" placeholder="" />
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" placeholder="" />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Role</label>
                    <input class="form-control" type="text" placeholder="" />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Address</label>
                    <input class="form-control" type="text" placeholder="" />
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <label>Bio</label>
                    <textarea class="form-control" rows="6" placeholder=""></textarea>
                </div>
            </div>
        </div>
        <div class="ps-form__submit text-center">
            <button class="ps-btn ps-btn--gray mr-3">Cancel</button>
            <button class="ps-btn success">Update Profile</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "FormAccountSettings"
};
</script>

<style lang="scss" scoped></style>
