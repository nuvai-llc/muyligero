<style lang="scss">

</style>

<template>
    <form class="lpRegister lpFields" @submit.prevent="submit">
        <div class="lpFields">
            <input v-model="username" v-focus-on-create type="text" :placeholder="$t('forms.username')" name="username">
            <input v-model="email" type="email" :placeholder="$t('forms.email')" name="email">
            <input v-model="password" type="password" :placeholder="$t('forms.password')" name="password">
            <input v-model="passwordConfirm" type="password" :placeholder="$t('forms.confirmPassword')" name="passwordConfirm">
        </div>
        <errors :errors="errors" />
        <div class="lpButtons">
            <button class="lpButton">
                {{ $t('common.createAccount') }}
                <spinner v-if="saving" />
            </button>
            <a class="lpHref lpGetStarted" @click="loadLocal">{{ $t('forms.continueWithoutAccount') }}</a>
        </div>
    </form>
</template>

<script>
import errors from './errors.vue';
import spinner from './spinner.vue';

const dataTypes = require('../dataTypes.js');

const Library = dataTypes.Library;

export default {
    name: 'RegisterForm',
    components: {
        errors,
        spinner,
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            saving: false,
            errors: [],
        };
    },
    computed: {
        isLocalSaving() {
            return this.$store.state.saveType === 'local';
        },
    },
    methods: {
        loadLocal() {
            if (this.isLocalSaving) {
                router.push('/');
                return;
            }
            const library = new Library();
            this.$store.commit('loadLibraryData', JSON.stringify(library.save()));
            this.$store.commit('setSaveType', 'local');
            this.$store.commit('setLoggedIn', false);
            router.push('/');
        },
        submit() {
            this.errors = [];

            if (!this.username) {
                this.errors.push({ field: 'username', message: this.$t('validation.enterUsername') });
            }

            if (this.username && (this.username.length < 3 || this.username.length > 32)) {
                this.errors.push({ field: 'username', message: this.$t('validation.usernameLength') });
            }

            if (!this.email) {
                this.errors.push({ field: 'email', message: this.$t('validation.enterEmail') });
            }

            if (!this.password) {
                this.errors.push({ field: 'password', message: this.$t('validation.enterPassword') });
            }

            if (!this.passwordConfirm) {
                this.errors.push({ field: 'passwordConfirm', message: this.$t('validation.confirmPassword') });
            }

            if (this.password && this.passwordConfirm && this.password !== this.passwordConfirm) {
                this.errors.push({ field: 'password', message: this.$t('validation.passwordsMismatch') });
            }

            if (this.password && (this.password.length < 5 || this.password.length > 60)) {
                this.errors.push({ field: 'password', message: this.$t('validation.passwordLength') });
            }

            if (this.errors.length) {
                return;
            }

            const registerData = { username: this.username, email: this.email, password: this.password };

            if (localStorage.library) {
                registerData.library = localStorage.library;
            }

            this.saving = true;
            return fetchJson('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
                body: JSON.stringify(registerData),
            })
                .then((response) => {
                    this.$store.commit('setSyncToken', response.syncToken);
                    this.$store.commit('loadLibraryData', response.library);
                    this.$store.commit('setSaveType', 'remote');
                    this.$store.commit('setLoggedIn', response.username);

                    if (registerData.library) {
                        localStorage.registeredLibrary = localStorage.library;
                        delete localStorage.library;
                    }
                    this.saving = false;
                    router.push('/');
                })
                .catch((err) => {
                    this.saving = false;
                    this.errors = err;
                });
        },
    },
};
</script>
