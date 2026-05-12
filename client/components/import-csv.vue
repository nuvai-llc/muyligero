<style lang="scss">

#importValidate {
    height: 500px;
    overflow-y: scroll;
    width: 650px;

    .lpButton {
        margin-bottom: 30px;
    }
}

</style>

<template>
    <div id="importCSV">
        <modal id="importValidate" :shown="shown" @hide="shown = false">
            <h2>{{ $t('importCsv.title') }}</h2>
            <div id="importData">
                <ul class="lpTable lpDataTable">
                    <li class="lpRow lpHeader">
                        <span class="lpCell">{{ $t('importCsv.item') }}</span>
                        <span class="lpCell">{{ $t('importCsv.category') }}</span>
                        <span class="lpCell">{{ $t('importCsv.description') }}</span>
                        <span class="lpCell">{{ $t('importCsv.qty') }}</span>
                        <span class="lpCell">{{ $t('importCsv.weight') }}</span>
                        <span class="lpCell">{{ $t('importCsv.unit') }}</span>
                    </li>
                    <li v-for="row in importData.data" class="lpRow">
                        <span class="lpCell">{{ row.name }}</span>
                        <span class="lpCell">{{ row.category }}</span>
                        <span class="lpCell">{{ row.description }}</span>
                        <span class="lpCell">{{ row.qty }}</span>
                        <span class="lpCell">{{ row.weight }}</span>
                        <span class="lpCell">{{ row.unit }}</span>
                    </li>
                </ul>
            </div>
            <a id="importConfirm" class="lpButton" @click="importList">{{ $t('importCsv.importList') }}</a>
            <a class="lpButton close" @click="shown = false">{{ $t('importCsv.cancelImport') }}</a>
        </modal>
        <form id="csvUpload">
            <input id="csv" type="file" name="csv">
        </form>
    </div>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'ImportCsv',
    components: {
        modal,
    },
    data() {
        return {
            csvInput: false,
            listId: false,
            importData: {},
            fullUnitToUnit: {
                gram: 'g', grams: 'g', g: 'g', kilogram: 'kg', kilograms: 'kg', kg: 'kg', kgs: 'kg',
            },
            shown: false,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
    },
    mounted() {
        this.csvInput = document.getElementById('csv');
        this.csvInput.onchange = this.importCSV;

        bus.$on('importCSV', () => {
            this.csvInput.click();
        });
    },
    methods: {
        importCSV(evt) {
            const file = evt.target.files[0];
            const name = file.name;
            const size = file.size;
            const type = file.type;

            if (file.name.length < 1) {
                return;
            }
            if (file.size > 1000000) {
                alert(this.$t('importCsv.tooLarge'));
                return;
            }
            if (name.substring(name.length - 4).toLowerCase() != '.csv') {
                alert(this.$t('importCsv.selectCsv'));
                return;
            }
            const reader = new FileReader();

            reader.onload = ((theFile) => {
                this.validateImport(theFile.target.result, file.name.substring(0, file.name.length - 4).replace(/\_/g, ' '));
            });

            reader.readAsText(file);
        },
        CSVToArray(strData) {
            const strDelimiter = ',';
            const arrData = [[]];
            let arrMatches = null;


            const objPattern = new RegExp(
                (
                    `(\\${strDelimiter}|\\r?\\n|\\r|^)`
                    + '(?:"([^"]*(?:""[^"]*)*)"|'
                    + `([^"\\${strDelimiter}\\r\\n]*))`
                ), 'gi',
            );

            while (arrMatches = objPattern.exec(strData)) {
                const strMatchedDelimiter = arrMatches[1];
                if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                    arrData.push([]);
                }

                if (arrMatches[2]) {
                    var strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
                } else {
                    var strMatchedValue = arrMatches[3];
                }

                arrData[arrData.length - 1].push(strMatchedValue);
            }

            return arrData;
        },
        validateImport(input, name) {
            const csv = this.CSVToArray(input);
            this.importData = { data: [], name };

            for (const i in csv) {
                const row = csv[i];
                if (row.length < 6) continue;
                if (row[0].toLowerCase() == 'item name') continue;
                if (isNaN(parseInt(row[3]))) continue;
                if (isNaN(parseInt(row[4]))) continue;
                if (typeof this.fullUnitToUnit[row[5]] === 'undefined') continue;

                this.importData.data.push({
                    name: row[0],
                    category: row[1],
                    description: row[2],
                    qty: parseFloat(row[3]),
                    weight: parseFloat(row[4]),
                    unit: this.fullUnitToUnit[row[5]],
                });
            }

            if (!this.importData.data.length) {
                alert(this.$t('importCsv.invalidFormat'));
            } else {
                this.shown = true;
            }
        },
        importList() {
            this.$store.commit('importCSV', this.importData);
            this.shown = false;
        },

    },
};
</script>
