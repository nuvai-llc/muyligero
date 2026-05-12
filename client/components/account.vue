<style lang="scss">

</style>

<template>
    <modal id="accountSettings" :shown="shown" @hide="shown = false">
        <h2>{{ $t('account.title') }}</h2>

        <form id="accountForm" @submit.prevent="updateAccount()">
            <div class="lpFields">
                <input type="text" name="username" class="username" disabled :value="username">
                <input v-model="currentPassword" type="password" :placeholder="$t('forms.currentPassword')" name="currentPassword" class="currentPassword">
                <hr>
                <input v-model="newEmail" type="email" :placeholder="$t('forms.newEmail')" name="newEmail" class="newEmail">
                <hr>
                <input v-model="newPassword" type="password" :placeholder="$t('forms.newPassword')" name="newPassword" class="newPassword">
                <input v-model="confirmNewPassword" type="password" :placeholder="$t('forms.confirmNewPassword')" name="confirmNewPassword" class="confirmNewPassword">
            </div>

            <errors :errors="errors" />

            <div class="lpButtons">
                <button class="lpButton">
                    {{ $t('common.save') }}
                    <spinner v-if="saving" />
                </button>
                <a class="lpHref" @click="shown = false">{{ $t('common.cancel') }}</a>
                <a class="lpHref" @click="showDeleteAccount">{{ $t('account.deleteAccount') }}</a>
            </div>
        </form>
    </modal>
</template>

<script>
import errors from './errors.vue';
import modal from './modal.vue';
import spinner from './spinner.vue';

export default {
    name: 'Account',
    components: {
        errors,
        modal,
        spinner,
    },
    data() {
        return {
            saving: false,
            errors: [],
            currentPassword: '',
            newEmail: '',
            newPassword: '',
            confirmNewPassword: '',
            shown: false,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
        username() {
            return this.$store.state.loggedIn;
        },
    },
    beforeMount() {
        bus.$on('showAccount', () => {
            this.shown = true;
        });
    },
    methods: {
        updateAccount() {
            this.errors = [];

            if (!this.currentPassword) {
                this.errors.push({ field: 'currentPassword', message: this.$t('validation.enterCurrentPassword') });
            }

            if (this.newPassword && this.newPassword != this.confirmNewPassword) {
                this.errors.push({ field: 'newPassword', message: this.$t('validation.passwordsMismatch') });
            }

            if (this.newPassword && (this.newPassword.length < 5 || this.newPassword.length > 60)) {
                this.errors.push({ field: 'newPassword', message: this.$t('validation.passwordLength') });
            }

            if (this.errors.length) {
                return;
            }

            const data = { username: this.username, currentPassword: this.currentPassword };

            let dirty = false;

            if (this.newPassword) {
                dirty = true;
                data.newPassword = this.newPassword;
            }
            if (this.newEmail) {
                dirty = true;
                data.newEmail = this.newEmail;
            }

            if (!dirty) return;

            this.currentPassword = '';
            this.saving = true;

            fetchJson('/account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
                body: JSON.stringify(data),
            })
                .then((response) => {
                    this.saving = false;
                    this.shown = false;
                })
                .catch((err) => {
                    this.errors = err;
                    this.saving = false;
                });
        },
        showDeleteAccount() {
            this.shown = false;
            bus.$emit('showDeleteAccount');
        },
    },
};
</script>
