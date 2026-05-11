<style lang="scss">

#help {
    width: 800px;
}

</style>

<template>
    <modal id="help" :shown="shown" @hide="shown = false">
        <h2>Ayuda</h2>

        <p>Primeros pasos:</p>
        <ol>
            <li>Haz clic en los elementos para editarlos. Pon nombre a tu lista y a cada categoria.</li>
            <li>Anade categorias y articulos a tu lista.</li>
            <li>Cuando termines, comparte tu lista con otras personas.</li>
        </ol>
        <hr>
        <strong>Cantidades y articulos puestos</strong>
        <p>Si tienes varias unidades de un articulo y lo marcas como puesto, solo la primera unidad contara como peso puesto. El resto contara como peso de mochila. Esto se hace porque la mayoria de articulos de los que llevas varias unidades solo llevas una puesta al mismo tiempo. Por eso no conviene listar zapatos o bastones con peso individual y cantidad dos; es mejor usar el peso combinado con cantidad uno.</p>
        <hr>
        <strong>Articulos en varias listas</strong>
        <p>Si copias tu lista o arrastras un articulo desde la biblioteca a una segunda lista, esos articulos quedan <strong>vinculados</strong>. Eso significa que cualquier cambio en un articulo se actualizara en todas las listas donde aparezca. Si quieres copiar una lista sin enlaces, por ahora puedes exportarla a CSV e importarla de nuevo.</p>
        <hr>
        <p><a class="lpHref" href="mailto:info@lighterpack.com">Si necesitas mas ayuda, escribenos por email.</a></p>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'Help',
    components: {
        modal,
    },
    data() {
        return {
            shown: false,
        };
    },
    beforeMount() {
        bus.$on('showHelp', () => {
            this.shown = true;
        });
    },
};
</script>
