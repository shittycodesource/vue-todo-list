<template>
    <header class="header">
        <div class="header-inner">
            header
        </div>
    </header>
</template>

<script>
    export default {
        name: 'vHeader'
    }
</script>

<style lang="scss">
    .header {
        width: calc(100% - $sidebarWidth);
        height: $headerHeight;

        position: absolute;
        top: 0;
        left: $sidebarWidth; 
        right: 0;

        background: #fff;
        border-bottom: 1px solid var(--lite);
    }
</style>