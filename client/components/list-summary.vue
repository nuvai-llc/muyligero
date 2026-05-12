<style lang="scss">

.lpLegend {
    &:hover {
        border-color: #666;
        cursor: pointer;
    }
}
</style>

<template>
    <div class="lpListSummary">
        <div class="lpChartContainer">
            <canvas class="lpChart" height="260" width="260" />
        </div>
        <div class="lpTotalsContainer">
            <ul class="lpTotals lpTable lpDataTable">
                <li class="lpRow lpHeader">
                    <span class="lpCell">&nbsp;</span>
                    <span class="lpCell">
                        {{ $t('summary.category') }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell">
                        {{ $t('summary.price') }}
                    </span>
                    <span class="lpCell">
                        {{ $t('summary.weight') }}
                    </span>
                </li>
                <li v-for="category in categories" :key="category.id" :class="{'hover': category.activeHover, 'lpTotalCategory lpRow': true}">
                    <span class="lpCell lpLegendCell">
                        <colorPicker v-if="category.displayColor" :color="colorToHex(category.displayColor)" @colorChange="updateColor(category, $event)" />
                    </span>
                    <span class="lpCell">
                        {{ category.name }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell lpNumber">
                        {{ category.subtotalPrice | displayPrice(library.currencySymbol) }}
                    </span>
                    <span class="lpCell lpNumber">
                        <span class="lpDisplaySubtotal" :mg="category.subtotalWeight">{{ category.subtotalWeight | displayWeight(library.totalUnit) }}</span> <span class="lpSubtotalUnit">{{ library.totalUnit }}</span>
                    </span>
                </li>
                <li class="lpRow lpFooter lpTotal">
                    <span class="lpCell" />
                    <span class="lpCell lpSubtotal" :title="$t('summary.itemsCount', { count: list.totalQty })">
                        {{ $t('summary.total') }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell lpNumber lpSubtotal" :title="$t('summary.itemsCount', { count: list.totalQty })">
                        {{ list.totalPrice | displayPrice(library.currencySymbol) }}
                    </span>
                    <span class="lpCell lpNumber lpSubtotal">
                        <span class="lpTotalValue" :title="$t('summary.itemsCount', { count: list.totalQty })">
                            {{ list.totalWeight | displayWeight(library.totalUnit) }}
                        </span>
                        <span class="lpTotalUnit"><unitSelect :unit="library.totalUnit" :on-change="setTotalUnit" /></span>
                    </span>
                </li>
                <li v-if="list.totalConsumableWeight" data-weight-type="consumable" class="lpRow lpFooter lpBreakdown lpConsumableWeight">
                    <span class="lpCell" />
                    <span class="lpCell lpSubtotal">
                        {{ $t('summary.consumable') }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell lpNumber lpSubtotal">
                        {{ list.totalConsumablePrice | displayPrice(library.currencySymbol) }}
                    </span>
                    <span class="lpCell lpNumber lpSubtotal">
                        <span class="lpDisplaySubtotal" :mg="list.totalConsumableWeight">{{ list.totalConsumableWeight | displayWeight(library.totalUnit) }}</span>
                        <span class="lpSubtotalUnit">{{ library.totalUnit }}</span>
                    </span>
                </li>
                <li v-if="list.totalWornWeight" data-weight-type="worn" class="lpRow lpFooter lpBreakdown lpWornWeight">
                    <span class="lpCell" />
                    <span class="lpCell lpSubtotal">
                        {{ $t('summary.worn') }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell lpNumber" />
                    <span class="lpCell lpNumber lpSubtotal">
                        <span class="lpDisplaySubtotal" :mg="list.totalWornWeight">{{ list.totalWornWeight | displayWeight(library.totalUnit) }}</span>
                        <span class="lpSubtotalUnit">{{ library.totalUnit }}</span>
                    </span>
                </li>
                <li v-if="list.totalWornWeight || list.totalConsumableWeight" data-weight-type="base" class="lpRow lpFooter lpBreakdown lpBaseWeight">
                    <span class="lpCell" />
                    <span class="lpCell lpSubtotal" :title="packWeightTitle">
                        {{ $t('summary.baseWeight') }}
                    </span>
                    <span v-if="library.optionalFields['price']" class="lpCell lpNumber" />
                    <span class="lpCell lpNumber lpSubtotal">
                        <span class="lpDisplaySubtotal" :mg="list.totalBaseWeight" :title="packWeightTitle">
                            {{ list.totalBaseWeight | displayWeight(library.totalUnit) }}
                        </span>
                        <span class="lpSubtotalUnit">{{ library.totalUnit }}</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import colorPicker from './colorpicker.vue';
import unitSelect from './unit-select.vue';

const pies = require('../pies.js');
const utilsMixin = require('../mixins/utils-mixin.js');
const colorUtils = require('../utils/color.js');

export default {
    name: 'ListSummary',
    components: {
        colorPicker,
        unitSelect,
    },
    mixins: [utilsMixin],
    props: ['list'],
    data() {
        return {
            chart: null,
            hoveredCategoryId: null,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
        categories() {
            return this.list.categoryIds.map((id) => {
                const category = this.library.getCategoryById(id);
                category.activeHover = (this.hoveredCategoryId === category.id);
                return category;
            });
        },
    },
    watch: {
        '$store.state.library.defaultListId': 'updateChart',
        'list.totalWeight': 'updateChart',
        'list.categoryIds': 'updateChart',
    },
    mounted() {
        this.updateChart();
    },
    methods: {
        updateChart(type) {
            const chartData = this.library.renderChart(type);

            if (chartData) {
                if (this.chart) {
                    this.chart.update({ processedData: chartData });
                } else {
                    this.chart = pies({ processedData: chartData, container: document.getElementsByClassName('lpChart')[0], hoverCallback: this.chartHover });
                }
            }
            return chartData;
        },
        chartHover(chartItem) {
            if (chartItem && chartItem.id) {
                this.hoveredCategoryId = chartItem.id;
            } else {
                this.hoveredCategoryId = null;
            }
        },
        setTotalUnit(unit) {
            this.$store.commit('setTotalUnit', unit);
        },
        updateColor(category, color) {
            category.color = colorUtils.hexToRgb(color);
            category.displayColor = colorUtils.rgbToString(colorUtils.hexToRgb(color));
            this.$store.commit('updateCategoryColor', category);
            this.updateChart();
        },
        colorToHex(color) {
            return colorUtils.rgbToHex(colorUtils.stringToRgb(color));
        },
    },
};

</script>
