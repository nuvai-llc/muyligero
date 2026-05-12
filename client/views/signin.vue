<style lang="scss">

</style>

<template>
    <div id="signinContainer">
        <modal id="signin" :shown="true" :blackout="true">
            <div class="lpModalHeader">
                <h2>
                    {{ $t('auth.signInTitle') }}
                </h2>
                <router-link to="/register" class="lpHref">
                    {{ $t('auth.needAccount') }}
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
                return this.$t('auth.resetSentMessage', { appName: this.$t('common.appName') });
            }
            return '';
        },
    },
};
</script>
