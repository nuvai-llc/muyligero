<style lang="scss">

</style>

<template>
    <modal id="itemLinkDialog" :shown="shown" @hide="shown = false">
        <h2>Anadir un enlace a este articulo</h2>
        <form id="itemLinkForm" @submit.prevent="addLink">
            <input v-model="url" type="text" d="itemLink" placeholder="Enlace del articulo">
            <input type="submit" class="lpButton" value="Guardar">
            <a class="lpHref close" @click="shown = false">Cancelar</a>
        </form>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'ItemLink',
    components: {
        modal,
    },
    data() {
        return {
            url: '',
            item: false,
            shown: false,
        };
    },
    beforeMount() {
        bus.$on('updateItemLink', (item) => {
            this.shown = true;
            this.item = item;
            this.url = item.url;
        });
    },
    methods: {
        addLink() {
            this.$store.commit('updateItemLink', { url: this.url, item: this.item });
            this.shown = false;
        },
    },
};
</script>
