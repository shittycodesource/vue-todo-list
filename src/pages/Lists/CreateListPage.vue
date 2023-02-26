<template>
    <list-edit-form
        ref="editForm"
        :name="name" 
        :description="description"

        @emitInput="(newName) => name = newName"
        @emitTextarea="(newDescription) => description = newDescription"
    >
        <template #button>
            <v-button @click.native="createNewList">Create</v-button>
        </template>
    </list-edit-form>
</template>

<script>
    import ListEditForm from '../../components/Lists/ListEditForm.vue';
    import vButton from '../../components/app/vButton.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'CreateListPage',
        components: { ListEditForm, vButton },
        data() {
            return {
                name: '',
                description: '',
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
                        tasks: []
                    };

                    this.addList(data);
                    this.name = '';
                    this.description = '';
                    this.$refs.editForm.reset();
                }
            }
        }
    }
</script>