<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'vButton'
    }
</script>

<style lang="scss">
    .btn {
        display: block;

        padding: 5px 20px;

        border: 1px solid var(--buttonBorderColor);
        background: transparent;
        border-radius: 8px;
        cursor: pointer;

        font-family: inherit;
        font-size: 16px  ;
        color: var(--buttonTextColor);
        text-decoration: none;

        transition: background .2s linear, color .2s linear;

        &:hover,
        &:focus {
            outline: none;
            background: var(--buttonBackgroundColorHover);
            color: var(--buttonTextColorHover);
        }
        
        &.active {
            background: var(--buttonBackgroundColorActive);
        }

        &--choose {
            padding: 15px;
            border: none;
            border-radius: 0;
            text-align: left;
            width: 100%;
            background: var(--blockBackgroundColor);

            &:hover {
                background: var(--dropdownItemColorHover);
                color: var(--dropdownItemTextColorHover)
            }
        }
    }
</style>