<style lang="scss">
#headerPopover .lpContent {
    min-width: 9em;
}
</style>

<template>
    <span class="headerItem hasPopover">
        <PopoverHover id="headerPopover">
            <span slot="target">{{ $t('account.signedInAs', { username }) }} <i class="lpSprite lpExpand" /></span>
            <div slot="content">
                <a class="lpHref accountSettings" @click="showAccount">{{ $t('common.accountSettings') }}</a><br>
                <a class="lpHref" @click="showHelp">{{ $t('common.help') }}</a><br>
                <a class="lpHref signout" @click="signout">{{ $t('common.signOut') }}</a>
            </div>
        </PopoverHover>
    </span>
</template>

<script>
import PopoverHover from './popover-hover.vue';

export default {
    name: 'AccountDropdown',
    components: {
        PopoverHover,
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
        username() {
            return this.$store.state.loggedIn;
        },
    },
    methods: {
        showAccount() {
            bus.$emit('showAccount');
        },
        showHelp() {
            bus.$emit('showHelp');
        },
        signout() {
            this.$store.commit('signout');
            router.push('/signin');
        },
    },
};
</script>
