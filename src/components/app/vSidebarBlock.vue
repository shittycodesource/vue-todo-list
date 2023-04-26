<template>
    <div class="sidebar-block">
        <h5 class="sidebar-block__title">
            <slot name="title"></slot>
        </h5>
        <div class="sidebar-block__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vSidebarBlock'
    }
</script>

<style lang="scss">
    .sidebar-block {
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


    }
</style>