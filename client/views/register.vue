<style lang="scss">

</style>

<template>
    <div id="registerContainer">
        <modal id="register" :shown="true" :blackout="true">
            <div class="lpModalHeader">
                <h2>
                    {{ $t('auth.registerTitle') }}
                </h2>
                <router-link to="/signin" class="lpHref">
                    {{ $t('auth.alreadyRegistered') }}
                </router-link>
            </div>

            <p v-if="isLocalSaving" class="lpWarning">
                <strong>Nota:</strong> {{ $t('auth.localDataNotice') }}
            </p>

            <registerForm />
        </modal>

        <globalAlerts />
    </div>
</template>

<script>
import globalAlerts from '../components/global-alerts.vue';
import modal from '../components/modal.vue';
import registerForm from '../components/register-form.vue';

export default {
    name: 'Register',
    components: {
        globalAlerts,
        modal,
        registerForm,
    },

    computed: {
        isLocalSaving() {
            return this.$store.state.saveType === 'local';
        },
    },
};
</script>
