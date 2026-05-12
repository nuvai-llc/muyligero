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
        display: inline-block;
        margin-left: 10px;
        width: 50px;
    }
}

#lpLanguageSettings {
    margin-top: 12px;

    label {
        display: block;
    }

    select {
        margin-top: 8px;
        width: 100%;
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
            <span slot="target"><i class="lpSprite lpSettings" /> Ajustes</span>
            <div slot="content">
                <ul id="lpOptionalFields">
                    <li v-for="optionalField in optionalFieldsLookup" :key="optionalField.name" class="lpOptionalField">
                        <label>
                            <input v-model="optionalField.value" type="checkbox" @change="toggleOptionalField($event, optionalField.name)">
                            {{ optionalField.displayName }}
                        </label>
                    </li>
                </ul>
                <div v-if="library.optionalFields['price']" id="lpPriceSettings">
                    <hr>
                    <label>
                        Moneda:
                        <input id="currencySymbol" type="text" maxlength="4" :value="library.currencySymbol" @input="updateCurrencySymbol($event)">
                    </label>
                </div>
                <div id="lpLanguageSettings">
                    <hr>
                    <label for="languageSelect">
                        Idioma:
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

export default {
    name: 'ListSettings',
    components: {
        PopoverHover,
    },
    data() {
        return {
            optionalFieldsLookup: [{
                name: 'images',
                displayName: 'Imagenes de articulos',
                cssClass: 'lpShowImages',
                value: false,
            }, {
                name: 'price',
                displayName: 'Precios de articulos',
                cssClass: 'lpShowPrices',
                value: false,
            }, {
                name: 'worn',
                displayName: 'Articulos puestos',
                cssClass: 'lpShowWorn',
                value: false,
            }, {
                name: 'consumable',
                displayName: 'Articulos consumibles',
                cssClass: 'lpShowConsumable',
                value: false,
            }, {
                name: 'listDescription',
                displayName: 'Descripciones de listas',
                cssClass: 'lpShowListDescription',
                value: false,
            }],
            languageOptions: [
                { value: 'es', label: 'Español' },
                { value: 'ca', label: 'Català' },
                { value: 'eu', label: 'Euskera' },
                { value: 'gl', label: 'Galego' },
                { value: 'en', label: 'English' },
            ],
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
