import '@babel/polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from './store/store';
import i18n from './i18n';

const focusDirectives = require('./utils/focus.js');
const dataTypes = require('./dataTypes.js');

const Item = dataTypes.Item;
const Category = dataTypes.Category;
const List = dataTypes.List;
const Library = dataTypes.Library;

Vue.use(VueRouter);
i18n.installI18n(Vue);

const utils = require('./utils/utils.js');

const applyTheme = function (theme) {
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${normalizedTheme}`);
    const root = document.getElementById('lp');
    if (root) {
        root.classList.remove('theme-light', 'theme-dark');
        root.classList.add(`theme-${normalizedTheme}`);
    }
    localStorage.uiTheme = normalizedTheme;
};

const applyLanguage = function (language) {
    const normalizedLanguage = i18n.setLanguage(language);
    document.documentElement.lang = normalizedLanguage;
    localStorage.uiLanguage = normalizedLanguage;
};

window.Vue = Vue; // surfacing Vue globally for utils methods
window.bus = new Vue(); // global event bus
window.router = new VueRouter({
    mode: 'history',
    routes,
});

bus.$on('unauthorized', (error) => {
    window.location = '/signin';
});

const savedTheme = localStorage.uiTheme || 'light';
const savedLanguage = localStorage.uiLanguage || 'es';
store.commit('setTheme', savedTheme);
store.commit('setLanguage', savedLanguage);
applyTheme(savedTheme);
applyLanguage(savedLanguage);

store.dispatch('init')
    .then(() => {
        initLighterPack();
    })
    .catch((error) => {
        if (!store.state.library) {
            router.push('/welcome');
        }
        initLighterPack();
    });

var initLighterPack = function () {
    window.LighterPack = new Vue({
        router,
        store,
        data: {
            path: '',
            fatal: '',
        },
        watch: {
            $route(to, from) {
                this.path = to.path;
            },
            '$store.state.theme'(theme) {
                applyTheme(theme);
            },
            '$store.state.language'(language) {
                applyLanguage(language);
            },
        },
        mounted() {
            this.path = router.currentRoute.path;
            applyTheme(this.$store.state.theme);
            applyLanguage(this.$store.state.language);
        },
    }).$mount('#lp');
};
