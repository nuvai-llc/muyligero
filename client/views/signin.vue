<style lang="scss">

</style>

<template>
    <div id="signinContainer">
        <modal id="signin" :shown="true" :blackout="true">
            <div class="lpModalHeader">
                <h2>
                    Iniciar sesion
                </h2>
                <router-link to="/register" class="lpHref">
                    Necesitas registrarte?
                </router-link>
            </div>
            <SigninForm :message="message" />
        </modal>

        <globalAlerts />
    </div>
</template>

<script>
import globalAlerts from '../components/global-alerts.vue';
import modal from '../components/modal.vue';
import SigninForm from '../components/signin-form.vue';

export default {
    name: 'Signin',
    components: {
        globalAlerts,
        modal,
        SigninForm,
    },
    computed: {
        message() {
            if (this.$route.path.indexOf('/reset-password') > -1 || this.$route.path.indexOf('/forgot-username') > -1) {
                return 'Hemos enviado un email a la direccion asociada a tu cuenta de MuyLigero. Nota: los correos a direcciones yahoo.com pueden fallar. Escribe a info@lighterpack.com si no recibes el mensaje.';
            }
            return '';
        },
    },
};
</script>
