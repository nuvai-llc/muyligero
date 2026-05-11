<style lang="scss">

</style>

<template>
    <form class="lpRegister lpFields" @submit.prevent="submit">
        <div class="lpFields">
            <input v-model="username" v-focus-on-create type="text" placeholder="Usuario" name="username">
            <input v-model="email" type="email" placeholder="Correo electronico" name="email">
            <input v-model="password" type="password" placeholder="Contrasena" name="password">
            <input v-model="passwordConfirm" type="password" placeholder="Confirmar contrasena" name="passwordConfirm">
        </div>
        <errors :errors="errors" />
        <div class="lpButtons">
            <button class="lpButton">
                Crear cuenta
                <spinner v-if="saving" />
            </button>
            <a class="lpHref lpGetStarted" @click="loadLocal">Continuar sin registrarme</a>
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
                this.errors.push({ field: 'username', message: 'Introduce un nombre de usuario.' });
            }

            if (this.username && (this.username.length < 3 || this.username.length > 32)) {
                this.errors.push({ field: 'username', message: 'Introduce un nombre de usuario de entre 3 y 32 caracteres.' });
            }

            if (!this.email) {
                this.errors.push({ field: 'email', message: 'Introduce un email.' });
            }

            if (!this.password) {
                this.errors.push({ field: 'password', message: 'Introduce una contrasena.' });
            }

            if (!this.passwordConfirm) {
                this.errors.push({ field: 'passwordConfirm', message: 'Confirma la contrasena.' });
            }

            if (this.password && this.passwordConfirm && this.password !== this.passwordConfirm) {
                this.errors.push({ field: 'password', message: 'Las contrasenas no coinciden.' });
            }

            if (this.password && (this.password.length < 5 || this.password.length > 60)) {
                this.errors.push({ field: 'password', message: 'Introduce una contrasena de entre 5 y 60 caracteres.' });
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
