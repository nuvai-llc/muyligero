<style lang="scss">
@import "../css/_globals";

.lpThemeToggle {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    gap: 10px;
    user-select: none;

    .lpThemeLabel {
        color: var(--app-text);
        font-weight: 600;
    }

    .lpThemeTrack {
        background: var(--app-border);
        border-radius: 999px;
        display: inline-flex;
        height: 24px;
        padding: 3px;
        transition: background $transitionDuration;
        width: 46px;
    }

    .lpThemeThumb {
        background: var(--app-button-text);
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
        display: block;
        height: 18px;
        transform: translateX(0);
        transition: transform $transitionDuration;
        width: 18px;
    }

    &.is-dark {
        .lpThemeTrack {
            background: var(--app-accent);
        }

        .lpThemeThumb {
            transform: translateX(22px);
        }
    }
}
</style>

<template>
    <span class="headerItem">
        <span class="lpThemeToggle" :class="{ 'is-dark': isDark }" @click="toggleTheme">
            <span class="lpThemeLabel">{{ isDark ? 'Dark' : 'Light' }}</span>
            <span class="lpThemeTrack">
                <span class="lpThemeThumb" />
            </span>
        </span>
    </span>
</template>

<script>
export default {
    name: 'ThemeToggle',
    computed: {
        isDark() {
            return this.$store.state.theme === 'dark';
        },
    },
    methods: {
        toggleTheme() {
            this.$store.commit('setTheme', this.isDark ? 'light' : 'dark');
        },
    },
};
</script>
