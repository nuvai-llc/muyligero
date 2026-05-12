<style lang="scss">
@import "../css/_globals";

#listDescriptionContainer {
    margin: 25px 0;

    h3,
    p {
        display: inline-block;
        margin: 0 0 5px;
    }

    h3 {
        margin-right: 10px;
    }

    textarea {
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-text);
        height: 65px;
        padding: $spacingSmall;
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

#getStarted {
    background: var(--app-surface-muted);
    color: var(--app-text);
    border: 1px solid var(--app-border);
    display: flex;
    flex-direction: column;
    height: 220px;
    justify-content: center;
    line-height: 1.6;
    padding: $spacingLarge;

    h2 {
        font-size: 24px;
        line-height: 1;
    }

    h2,
    p,
    ol {
        margin: 0 0 $spacingMedium;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

</style>

<template>
    <div class="lpListBody">
        <div v-if="isListNew" id="getStarted">
            <h2>{{ $t('list.welcomeTitle', { appName: $t('common.appName') }) }}</h2>
            <p>{{ $t('list.welcomeIntro') }}</p>
            <ol>
                <li>{{ $t('list.step1') }}</li>
                <li>{{ $t('list.step2') }}</li>
                <li v-if="!isLocalSaving">
                    {{ $t('list.step3') }}
                </li>
            </ol>
            <p v-if="isLocalSaving" class="lpWarning">
                <strong>Nota:</strong> {{ $t('list.localNotice') }}
            </p>
        </div>
        <list-summary v-if="!isListNew" :list="list" />


        <div style="clear: both;" />

        <div v-if="library.optionalFields['listDescription']" id="listDescriptionContainer">
            <h3>{{ $t('list.description') }}</h3> <p>(<a href="https://guides.github.com/features/mastering-markdown/" target="_blank" class="lpHref">Markdown</a> {{ $t('list.markdownCompatible') }})</p>
            <textarea id="listDescription" v-model="list.description" @input="updateListDescription" />
        </div>

        <ul class="lpCategories">
            <category v-for="category in categories" :key="category.id" :category="category" />
        </ul>

        <hr>

        <a class="lpAdd addCategory" @click="newCategory"><i class="lpSprite lpSpriteAdd" />{{ $t('list.addCategory') }}</a>
    </div>
</template>

<script>
import category from './category.vue';
import listSummary from './list-summary.vue';

const dragula = require('dragula');

export default {
    name: 'List',
    components: {
        listSummary,
        category,
        categoryDragStartIndex: false,
        itemDragId: false,
    },
    mixins: [],
    data() {
        return {
            onboardingCompleted: false,
            itemDrake: null,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
        list() {
            return this.$store.getters.activeList;
        },
        categories() {
            return this.list.categoryIds.map(id => this.library.getCategoryById(id));
        },
        isListNew() {
            return this.list.totalWeight === 0;
        },
        isLocalSaving() {
            return this.$store.state.saveType === 'local';
        },
    },
    watch: {
        categories() {
            Vue.nextTick(() => {
                this.handleItemReorder();
            });
        },
    },
    mounted() {
        this.handleCategoryReorder();
        this.handleItemReorder();
    },
    methods: {
        newCategory() {
            this.$store.commit('newCategory', this.list);
        },
        updateListDescription() {
            this.$store.commit('updateListDescription', this.list);
        },
        handleItemReorder() {
            if (this.itemDrake) {
                this.itemDrake.destroy();
            }
            const $categoryItems = Array.prototype.slice.call(document.getElementsByClassName('lpItems'));
            const drake = dragula($categoryItems, {
                moves($el, $source, $handle, $sibling) {
                    return $handle.classList.contains('lpItemHandle');
                },
                accepts($el, $target, $source, $sibling) {
                    if (!$sibling || $sibling.classList.contains('lpItemsHeader')) {
                        return false; // header and footer are technically part of this list - exclude them both.
                    }
                    return true;
                },
            });
            drake.on('drag', ($el, $target, $source, $sibling) => {
                this.itemDragId = parseInt($el.id); // fragile
            });
            drake.on('drop', ($el, $target, $source, $sibling) => {
                const categoryId = parseInt($target.parentElement.id); // fragile
                this.$store.commit('reorderItem', {
                    list: this.list, itemId: this.itemDragId, categoryId, dropIndex: getElementIndex($el) - 1,
                });
                drake.cancel(true);
            });
            this.itemDrake = drake;
        },
        handleCategoryReorder() {
            const $categories = document.getElementsByClassName('lpCategories')[0];
            const drake = dragula([$categories], {
                moves(el, $source, $handle, $sibling) {
                    return $handle.classList.contains('lpCategoryHandle');
                },
            });
            drake.on('drag', ($el, $target, $source, $sibling) => {
                this.categoryDragStartIndex = getElementIndex($el);
            });
            drake.on('drop', ($el, $target, $source, $sibling) => {
                this.$store.commit('reorderCategory', { list: this.list, before: this.categoryDragStartIndex, after: getElementIndex($el) });
                drake.cancel(true);
            });
        },
    },
};
</script>
