<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style lang="scss">
    .container {
        max-width: 1030px;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>