<template>
    <list-edit-form
        ref="editForm"
        :notFound="notFound"
        :name="name" 
        :description="description"
        :colorData="colorData"

        @emitInput="(newName) => name = newName"
        @emitTextarea="(newDescription) => description = newDescription"
        @emitColorData="(newColorData) => colorData = newColorData"
    >   
        <template #form-title>
            {{ 'EditListFormTitle' | localizeFilter }}
        </template>
        <template #button>
            <v-button @click.native="updateList">{{ 'Edit' | localizeFilter }}</v-button>
        </template>
    </list-edit-form>
</template>

<script>
    import ListEditForm from '../../components/Lists/ListEditForm.vue';
    import vButton from '../../components/Inputs/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'EditListPage',
        components: { ListEditForm, vButton },
        data() {
            return {
                name: '',
                description: '',
                colorData: { angle: 0, hue: 0 },
                notFound: false,
            }
        },
        computed: {
            ...mapGetters([
                'getList'
            ]),
            theList() {
                return this.getList(this.$route.query.listId);
            }
        },
        methods: {
            ...mapActions([
                'editList'
            ]),
            updateList() {
                const _name  = this.name;
                const _description = this.description;

                if (_name.trim().length && _description.trim().length) {
                    const data = {
                        name: this.name,
                        description: this.description,
                        colorData: this.colorData,
                        id: this.theList.id
                    };

                    console.log('dfsdfkiljghsdkfhsdk')

                    this.editList(data);
                }
            }
        },
        created() {
            if (this.theList) {
                this.name = this.theList.name;
                this.description = this.theList.description;
                this.colorData = this.theList.colorData;
            } else {
                this.notFound = true;
            }
        }
    }
</script>