<style lang="scss">

#csvUrl {
    display: block;
    margin-top: 15px;
}

#lpOptionalFields {
    margin: 0;
    padding: 0;
}

.lpOptionalField {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#lpPriceSettings {
    input {
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-text);
        display: inline-block;
        margin-left: 10px;
        width: 50px;

        &:hover {
            background: var(--app-surface);
            border-color: var(--app-border);
        }

        &:focus {
            background: var(--app-surface);
            border-color: var(--app-button-start);
            outline: none;
        }
    }
}

#lpLanguageSettings {
    margin-top: 12px;

    label {
        display: block;
    }

    select {
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-text);
        margin-top: 8px;
        width: 100%;

        &:hover {
            background: var(--app-surface);
            border-color: var(--app-border);
        }

        &:focus {
            background: var(--app-surface);
            border-color: var(--app-button-start);
            outline: none;
        }
    }
}

#share .lpContent {
    width: 330px;
}

#settings .lpContent {
    width: 200px;
}
</style>

<template>
    <span id="settings" class="headerItem hasPopover">
        <PopoverHover>
            <span slot="target"><i class="lpSprite lpSettings" /> {{ $t('common.settings') }}</span>
            <div slot="content">
                <ul id="lpOptionalFields">
                    <li v-for="optionalField in optionalFieldsLookup" :key="optionalField.name" class="lpOptionalField">
                        <label>
                            <input v-model="optionalField.value" type="checkbox" @change="toggleOptionalField($event, optionalField.name)">
                            {{ $t(optionalField.displayKey) }}
                        </label>
                    </li>
                </ul>
                <div v-if="library.optionalFields['price']" id="lpPriceSettings">
                    <hr>
                    <label>
                        {{ $t('common.currency') }}:
                        <input id="currencySymbol" type="text" maxlength="4" :value="library.currencySymbol" @input="updateCurrencySymbol($event)">
                    </label>
                </div>
                <div id="lpLanguageSettings">
                    <hr>
                    <label for="languageSelect">
                        {{ $t('common.language') }}:
                    </label>
                    <select id="languageSelect" :value="language" @change="updateLanguage($event)">
                        <option v-for="option in languageOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
            </div>
        </PopoverHover>
    </span>
</template>

<script>
import PopoverHover from './popover-hover.vue';
import i18n from '../i18n';

export default {
    name: 'ListSettings',
    components: {
        PopoverHover,
    },
    data() {
        return {
            optionalFieldsLookup: [{
                name: 'images',
                displayKey: 'settings.images',
                cssClass: 'lpShowImages',
                value: false,
            }, {
                name: 'price',
                displayKey: 'settings.prices',
                cssClass: 'lpShowPrices',
                value: false,
            }, {
                name: 'worn',
                displayKey: 'settings.worn',
                cssClass: 'lpShowWorn',
                value: false,
            }, {
                name: 'consumable',
                displayKey: 'settings.consumable',
                cssClass: 'lpShowConsumable',
                value: false,
            }, {
                name: 'listDescription',
                displayKey: 'settings.listDescription',
                cssClass: 'lpShowListDescription',
                value: false,
            }],
            languageOptions: i18n.languageOptions,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
        language() {
            return this.$store.state.language;
        },
    },
    beforeMount() {
        this.updateOptionalFieldValues();
    },
    mounted() {
        bus.$on('optionalFieldChanged', () => {
            this.updateOptionalFieldValues();
        });
    },
    methods: {
        toggleOptionalField(evt, optionalField) {
            this.$store.commit('toggleOptionalField', optionalField);
        },
        updateCurrencySymbol(evt) {
            this.$store.commit('updateCurrencySymbol', evt.target.value);
        },
        updateLanguage(evt) {
            this.$store.commit('setLanguage', evt.target.value);
        },
        updateOptionalFieldValues() {
            let i;
            let fieldLookup;

            for (i = 0; i < this.optionalFieldsLookup.length; i++) {
                fieldLookup = this.optionalFieldsLookup[i];
                fieldLookup.value = this.library.optionalFields[fieldLookup.name];
            }
        },
    },
};
</script>
