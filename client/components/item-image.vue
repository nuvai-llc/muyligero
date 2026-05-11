<style lang="scss">

</style>

<template>
    <div>
        <modal id="itemImageDialog" :shown="shown" @hide="shown = false">
            <div class="columns">
                <div class="lpHalf">
                    <h2>Anadir imagen por URL</h2>
                    <form id="itemImageUrlForm" @submit.prevent="saveImageUrl()">
                        <input id="itemImageUrl" v-model="imageUrl" type="text" placeholder="URL de la imagen">
                        <input type="submit" class="lpButton" value="Guardar">
                        <a class="lpHref close" @click="shown = false">Cancelar</a>
                    </form>
                </div>
                <div class="lpHalf">
                    <h2>Subir imagen desde el ordenador</h2>
                    <template v-if="!item.image">
                        <p class="imageUploadDescription">
                            Tu imagen se alojara en imgur.
                        </p>
                        <button id="itemImageUpload" class="lpButton" @click="triggerImageUpload">
                            Subir imagen
                        </button>
                        <a class="lpHref close" @click="shown = false">Cancelar</a>
                        <p v-if="uploading">
                            Subiendo imagen...
                        </p>
                    </template>
                    <template v-if="item.image">
                        <button id="itemImageUpload" class="lpButton" @click="removeItemImage">
                            Eliminar imagen
                        </button>
                    </template>
                </div>
            </div>
        </modal>
        <form id="imageUpload" ref="imageUploadForm">
            <input id="image" type="file" name="image" ref="imageInput" @change="uploadImage">
        </form>
    </div>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'ItemImage',
    components: {
        modal,
    },
    data() {
        return {
            imageUrl: null,
            item: false,
            uploading: false,
            shown: false,
        };
    },
    mounted() {
        bus.$on('updateItemImage', (item) => {
            this.shown = true;
            this.item = item;
            this.imageUrl = item.imageUrl;
        });
    },
    methods: {
        saveImageUrl() {
            this.$store.commit('updateItemImageUrl', { imageUrl: this.imageUrl, item: this.item });
            this.shown = false;
        },
        triggerImageUpload() {
            this.$refs.imageInput.click();
        },
        uploadImage(evt) {
            if (!FormData) {
                alert('Tu navegador no es compatible con la subida de archivos. Actualizalo e intentalo de nuevo.');
                return;
            }
            const file = evt.target.files[0];
            const name = file.name;
            const size = file.size;
            const type = file.type;

            if (name.length < 1) {
                return;
            }
            if (size > 2500000) {
                alert('Sube un archivo de menos de 2.5 MB.');
                return;
            }
            if (type != 'image/png' && type != 'image/jpg' && !type != 'image/gif' && type != 'image/jpeg') {
                alert('El archivo debe ser PNG, JPG o GIF.');
                return;
            }
            const formData = new FormData(this.$refs.imageUploadForm);

            this.uploading = true;

            return fetchJson('/imageUpload', {
                method: 'POST',
                body: formData,
                credentials: 'same-origin',
            })
                .then((response) => {
                    this.uploading = false;
                    this.$store.commit('updateItemImage', { image: response.data.id, item: this.item });
                    this.shown = false;
                }).catch((response) => {
                    this.uploading = false;
                    alert('La subida ha fallado. Si el problema continua, avisanos.');
                });
        },
        removeItemImage() {
            this.$store.commit('removeItemImage', this.item);
            this.item.image = '';
        },
    },
};
</script>
