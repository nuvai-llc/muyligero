<style lang="scss">
@import "../css/_globals";

</style>

<template>
    <modal id="copyListDialog" :shown="shown" @hide="shown = false">
        <h2>Elige la lista que quieres copiar</h2>
        <select id="listToCopy" v-model="listId">
            <option v-for="list in library.lists" :value="list.id">
                {{ list.name }}
            </option>
        </select>
        <br><br>
        <p class="lpWarning">
            <b>Nota:</b> Al copiar una lista, los articulos quedaran vinculados entre tus listas. Si actualizas un articulo en una lista, ese cambio tambien se aplicara en todas las listas donde aparezca.
        </p>
        <a id="copyConfirm" class="lpButton" @click="copyList">Copiar lista</a>
        <a class="lpButton close" @click="shown = false">Cancelar</a>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'CopyList',
    components: {
        modal,
    },
    data() {
        return {
            listId: false,
            shown: false,
        };
    },
    computed: {
        library() {
            return this.$store.state.library;
        },
    },
    beforeMount() {
        bus.$on('copyList', () => {
            this.shown = true;
        });
    },
    methods: {
        copyList() {
            if (!this.listId) {
                return; // TODO: errors
            }
            this.$store.commit('copyList', this.listId);
            this.shown = false;
        },
    },
};
</script>
