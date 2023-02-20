<template>
    <div class="modal-wrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ModalWrapper'
    }
</script>

<style lang="scss">
    .modal-wrapper {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        position: fixed;
        top: 0;
        left: 0;

        background-color: rgba(0, 0, 0, .2);

        z-index: 1000;
    }
</style>