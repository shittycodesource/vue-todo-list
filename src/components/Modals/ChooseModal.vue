<template>
    <transition name="modal-transition">
        <modal-wrapper v-if="isOpen" @click.native.self="$emit('closeModal')">
            <modal class="modal--choose" @closeModal="$emit('closeModal')">
                <template #modal-title>
                    <slot name="title"></slot>
                </template>
                <template #modal-content>
                    <slot name="options"></slot>
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

        @media (max-width: $mobileBP) {
            max-width: calc(100% - 100px);
        }
    }

</style>