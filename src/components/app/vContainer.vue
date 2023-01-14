<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vContainer'
    }
</script>

<style lang="scss">
    .container {
        max-width: $containerWidth;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>