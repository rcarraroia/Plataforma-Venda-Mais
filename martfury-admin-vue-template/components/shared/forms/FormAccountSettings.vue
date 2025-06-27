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
    name: "FormAccountSettings",
    data() {
        return {
            formData: {
                fullName: '',
                displayName: '',
                email: '',
                role: '',
                address: '',
                bio: ''
            }
        };
    },
    async created() {
        try {
            const response = await this.$axios.get('/users/me');
            const user = response.data;
            this.formData.fullName = user.name || '';
            this.formData.displayName = user.displayName || '';
            this.formData.email = user.email || '';
            this.formData.role = user.role || '';
            this.formData.address = user.address || '';
            this.formData.bio = user.bio || '';
        } catch (error) {
            console.error('Erro ao carregar dados do usuário:', error);
        }
    },
    methods: {
        async updateProfile() {
            try {
                await this.$axios.put('/users/me', this.formData);
                alert('Perfil atualizado com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar perfil: ' + error.message);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
