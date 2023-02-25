<template>
    <list-edit-form
        ref="editForm"
        :title="title" 
        :text="text"

        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
    >
        <template #button>
            <v-button>Create</v-button>
        </template>
    </list-edit-form>
</template>

<script>
    import ListEditForm from '../../components/Lists/ListEditForm.vue';
    import vButton from '../../components/app/vButton.vue';

    export default {
        name: 'CreateListPage',
        components: { ListEditForm, vButton },
        data() {
            return {
                title: '',
                text: '',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>