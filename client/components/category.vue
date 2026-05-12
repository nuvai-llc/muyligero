<style lang="scss">

.lpQtySubtotal {
    padding-right: 25px; /* Accommodates delete column */
}

.lpPriceSubtotal { /* unused? */
    padding-right: 4px;
}

</style>

<template>
    <li :id="category.id" class="lpCategory">
        <ul class="lpItems lpDataTable">
            <li class="lpHeader lpItemsHeader">
                <span class="lpHandleCell">
                    <div class="lpHandle lpCategoryHandle" :title="$t('list.reorderCategory')" />
                </span>
                <input v-focus-on-create="category._isNew" type="text" :value="category.name" :placeholder="$t('list.categoryNamePlaceholder')" class="lpCategoryName lpSilent" @input="updateCategoryName">
                <span v-if="library.optionalFields['price']" class="lpPriceCell">{{ $t('summary.price') }}</span>
                <span class="lpWeightCell">{{ $t('summary.weight') }}</span>
                <span class="lpQtyCell">{{ $t('summary.qty') }}</span>
                <span class="lpRemoveCell"><a class="lpRemove lpRemoveCategory" :title="$t('list.removeCategory')" @click="removeCategory(category)"><i class="lpSprite lpSpriteRemove" /></a></span>
            </li>
            <item v-for="itemContainer in itemContainers" :key="itemContainer.item.id" :item-container="itemContainer" :category="category" />
            <li class="lpFooter lpItemsFooter">
                <span class="lpAddItemCell">
                    <a class="lpAdd lpAddItem" @click="newItem"><i class="lpSprite lpSpriteAdd" />{{ $t('list.newItem') }}</a>
                </span>
                <span v-if="library.optionalFields['price']" class="lpPriceCell lpNumber lpSubtotal">
                    {{ category.subtotalPrice | displayPrice(library.currencySymbol) }}
                </span>
                <span class="lpWeightCell lpNumber lpSubtotal">
                    <span class="lpDisplaySubtotal">{{ category.subtotalWeight | displayWeight(library.totalUnit) }}</span>
                    <span class="lpSubtotalUnit">{{ library.totalUnit }}</span>
                </span>
                <span class="lpQtyCell lpSubtotal">
                    <span class="lpQtySubtotal">{{ category.subtotalQty }}</span>
                </span>
                <span class="lpRemoveCell" />
            </li>
        </ul>
    </li>
</template>

<script>
import item from './item.vue';

const utilsMixin = require('../mixins/utils-mixin.js');

export default {
    name: 'Category',
    components: {
        item,
    },
    mixins: [utilsMixin],
    props: ['category'],
    computed: {
        library() {
            return this.$store.state.library;
        },
        itemContainers() {
            return this.category.categoryItems.map(categoryItem => ({ categoryItem, item: this.library.getItemById(categoryItem.itemId) }));
        },
    },
    methods: {
        newItem() {
            this.$store.commit('newItem', { category: this.category, _isNew: true });
        },
        updateCategoryName(evt) {
            this.$store.commit('updateCategoryName', { id: this.category.id, name: evt.target.value });
        },
        removeCategory(category) {
            const callback = function () {
                this.$store.commit('removeCategory', category);
            };
            const speedbumpOptions = {
                body: this.$t('list.removeCategoryConfirm'),
            };
            bus.$emit('initSpeedbump', callback, speedbumpOptions);
        },
    },
};
</script>
