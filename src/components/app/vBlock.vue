<template>
    <div class="block">
        <h5 class="block__title">
            <slot name="title"></slot>
        </h5>
        <div class="block__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vBlock'
    }
</script>

<style lang="scss">
    .block {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--sidebar-borders-color);

        &__title {
            margin: 0 0 10px 15px;
            padding: 0;

            font-size: 12px;
            font-weight: 400;
            color: var(--secondary-text);
            text-transform: uppercase;

        }

        &:last-child {
            border-bottom: none;
        }
    }
</style>