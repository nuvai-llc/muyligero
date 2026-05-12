<style lang="scss">
#deleteAccount {
    width: 400px;
}
</style>

<template>
    <modal id="deleteAccount" :shown="shown" @hide="shown = false">
        <h2>{{ $t('accountDelete.title') }}</h2>

        <form id="accountForm" @submit.prevent="deleteAccount()">
            <p class="lpWarning">
                <strong>{{ $t('accountDelete.warning') }}</strong>
            </p>
            <p>{{ $t('accountDelete.instructions', { phrase: $t('accountDelete.phrase') }) }}</p>
            <div class="lpFields">
                <input v-model="currentPassword" type="password" :placeholder="$t('forms.currentPassword')" name="currentPassword" class="currentPassword">

                <input v-model="confirmationText" type="text" name="confirmationText" :placeholder="$t('forms.confirmationText')">
            </div>

            <errors :errors="errors" />

            <div class="lpButtons">
                <input type="submit" :value="$t('accountDelete.button')" :class="{'lpButton': true, 'lpButtonDisabled': !isConfirmationComplete}">
                <a class="lpHref" @click="shown = false">{{ $t('common.cancel') }}</a>
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
            return this.confirmationText.toLocaleLowerCase() === this.$t('accountDelete.phrase');
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
                this.errors.push({ field: 'currentPassword', message: this.$t('validation.enterCurrentPassword') });
            }

            if (!this.isConfirmationComplete) {
                this.errors.push({ field: 'confirmationText', message: this.$t('validation.enterConfirmationText') });
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
