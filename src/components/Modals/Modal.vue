<template>
    <div class="modal">
        <header class="modal__header">
            <h3 class="modal__title">
                <slot name="modal-title"></slot>
            </h3>

            <v-icon class="modal__close" name="#cancel" @click.native="$emit('closeModal')"></v-icon>
        </header>
        <div class="modal__content">
            <slot name="modal-content"></slot>
        </div>

        <slot name="modal-footer"></slot>
    </div>
</template>

<script>
    import vIcon from '../app/vIcon.vue';

    export default {
        name: 'Modal',
        components: { vIcon },
    }
</script>

<style lang="scss">
    .modal {
        max-width: 800px;
        max-height: 600px;
        width: 100%;

        margin-top: 80px;

        border-radius: 15px;    
        background: white;
        border: 1px solid $blockBorderColor;

        overflow: hidden;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 5px 15px;

            box-shadow: 0px 1px 0px 0px $textColor;
        }

        &__title {
            font-size: 15px;
            font-weight: 400;
            line-height: 1;
        }

        &__close {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

    }
</style>