<template>
    <div class="lists__grid">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ListsGrid'
    }
</script>

<style lang="scss">
    .lists__grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin: 0 auto;
    }
</style>