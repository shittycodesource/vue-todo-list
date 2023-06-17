<template>
    <div class="modal">
        <header class="modal__header">
            <h3 class="modal__title">
                <slot name="modal-title"></slot>
            </h3>

            <v-icon class="modal__close" name="#close" @click.native="$emit('closeModal')"></v-icon>
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

        border-radius: 10px;    
        background: var(--blockBackgroundColor);
        border: 1px solid var(--blockBorderColor);

        overflow: hidden;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 15px 15px;

            box-shadow: 0 0 0px 1px var(--blockBorderColor);
            position: relative;
        }

        &__title {
            font-size: 15px;
            font-weight: 400;
            line-height: 1;
            color: var(--main-text);
        }

        &__close {
            width: 13px;
            height: 13px;
            fill: var(--main-text);
            cursor: pointer;
        }

    }
</style>