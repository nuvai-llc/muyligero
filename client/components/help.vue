<style lang="scss">

#help {
    width: 800px;
}

</style>

<template>
    <modal id="help" :shown="shown" @hide="shown = false">
        <h2>{{ $t('help.title') }}</h2>

        <p>{{ $t('help.gettingStarted') }}</p>
        <ol>
            <li>{{ $t('help.step1') }}</li>
            <li>{{ $t('help.step2') }}</li>
            <li>{{ $t('help.step3') }}</li>
        </ol>
        <hr>
        <strong>{{ $t('help.wornTitle') }}</strong>
        <p>{{ $t('help.wornBody') }}</p>
        <hr>
        <strong>{{ $t('help.linkedTitle') }}</strong>
        <p>{{ $t('help.linkedBody') }}</p>
        <hr>
        <p><a class="lpHref" href="mailto:info@lighterpack.com">{{ $t('help.contact') }}</a></p>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'Help',
    components: {
        modal,
    },
    data() {
        return {
            shown: false,
        };
    },
    beforeMount() {
        bus.$on('showHelp', () => {
            this.shown = true;
        });
    },
};
</script>
