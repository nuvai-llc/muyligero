<style lang="scss">
#deleteAccount {
    width: 400px;
}
</style>

<template>
    <modal id="deleteAccount" :shown="shown" @hide="shown = false">
        <h2>Eliminar cuenta?</h2>

        <form id="accountForm" @submit.prevent="deleteAccount()">
            <p class="lpWarning">
                <strong>Esta accion es permanente y no se puede deshacer.</strong>
            </p>
            <p>Si quieres eliminar tu cuenta, introduce tu contrasena actual y el texto <strong>eliminar mi cuenta</strong>:</p>
            <div class="lpFields">
                <input v-model="currentPassword" type="password" placeholder="Contrasena actual" name="currentPassword" class="currentPassword">

                <input v-model="confirmationText" type="text" name="confirmationText" placeholder="Texto de confirmacion">
            </div>

            <errors :errors="errors" />

            <div class="lpButtons">
                <input type="submit" value="Eliminar cuenta permanentemente" :class="{'lpButton': true, 'lpButtonDisabled': !isConfirmationComplete}">
                <a class="lpHref" @click="shown = false">Cancelar</a>
            </div>
        </form>
    </modal>
</template>

<script>
import errors from './errors.vue';
import modal from './modal.vue';

export default {
    name: 'Account',
    components: {
        errors,
        modal,
    },
    data() {
        return {
            deleting: false,
            errors: [],
            confirmationText: '',
            currentPassword: '',
            shown: false,
        };
    },
    computed: {
        isConfirmationComplete() {
            return this.confirmationText.toLocaleLowerCase() === 'eliminar mi cuenta';
        },
    },
    beforeMount() {
        bus.$on('showDeleteAccount', () => {
            this.shown = true;
        });
    },
    methods: {
        deleteAccount() {
            this.errors = [];

            if (!this.currentPassword) {
                this.errors.push({ field: 'currentPassword', message: 'Introduce tu contrasena actual.' });
            }

            if (!this.isConfirmationComplete) {
                this.errors.push({ field: 'confirmationText', message: 'Introduce el texto de confirmacion.' });
            }

            if (this.errors.length) {
                return;
            }

            fetchJson('/delete-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
                body: JSON.stringify({ username: this.$store.state.loggedIn, password: this.currentPassword }),
            })
                .then((response) => {
                    this.deleting = false;
                    this.$store.commit('signout');
                    this.$router.push('/signin');
                })
                .catch((err) => {
                    this.errors = err;
                    this.deleting = false;
                });
        },
    },
};
</script>
