<template>
    <list-edit-form
        ref="editForm"
        :name="name" 
        :description="description"
        :colorData="colorData"

        @emitInput="(newName) => name = newName"
        @emitTextarea="(newDescription) => description = newDescription"
        @emitColorData="(newColorData) => colorData = newColorData"
    >   
        <template #form-title>
            {{ 'CreateListFormTitle' | localizeFilter }}
        </template>
        <template #button>
            <v-button @click.native="createNewList">{{ 'Create' | localizeFilter }}</v-button>
        </template>
    </list-edit-form>
</template>

<script>
    import ListEditForm from '../../components/Lists/ListEditForm.vue';
    import vButton from '../../components/Inputs/vButton.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'CreateListPage',
        components: { ListEditForm, vButton },
        data() {
            return {
                name: '',
                description: '',
                colorData: { angle: 0, hue: 0 }
            }
        },
        methods: {
            ...mapActions([
                'addList'
            ]),
            createNewList() {
                const _name  = this.name;
                const _description = this.description;

                if (_name.trim().length && _description.trim().length) {
                    const data = {
                        name: this.name,
                        description: this.description,
                        tasks: [],
                        colorData: this.colorData,
                    };

                    this.addList(data);
                    this.name = '';
                    this.description = '';
                    this.colorData = { angle: 0, hue: 0 }
                    this.$refs.editForm.reset();
                }
            }
        }
    }
</script>