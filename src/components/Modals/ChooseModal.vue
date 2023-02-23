<template>
    <transition name="modal-transition">
        <modal-wrapper v-if="isOpen" @click.native.self="$emit('closeModal')">
            <modal class="modal--choose" @closeModal="$emit('closeModal')">
                <template #modal-title>What do you want to do?</template>
                <template #modal-content>
                    <router-link 
                        to="/create-list" 
                        class="btn btn--no-border btn--full-width btn--text-left p15px"
                        @click.native="$emit('closeModal')"
                    >
                        New List
                    </router-link>
                    <router-link 
                        to="/create-task" 
                        class="btn btn--no-border btn--full-width btn--text-left p15px" 
                        @click.native="$emit('closeModal')"
                    >
                        New Task
                    </router-link>
                </template>
            </modal>
        </modal-wrapper>
    </transition>
</template>

<script>
    import ModalWrapper from './ModalWrapper';
    import Modal from './Modal';

    export default {
        name: 'CreateChooseModal',
        components: { ModalWrapper, Modal },
        props: {
            isOpen: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    .modal--choose {
        max-width: 600px;
    }

</style>