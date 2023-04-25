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

        background: var(--button-background-color);
        border-radius: 5px;
        border: none;
        box-shadow: var(--block-box-shadow);
        cursor: pointer;

        font-family: inherit;
        font-size: 16px  ;
        color: var(--buttonTextColor);
        text-decoration: none;

        transition: background .2s linear, color .2s linear, border-color .2s linear, box-shadow .2s linear;

        &:hover,
        &:focus {
            outline: none;
            background: var(--blue);
            color: var(--main-text-alt);
        }

        &:focus {
            background: var(--blue-focus);
        }
        
        &.active {
            background: var(--blue-active);
        }

        &--flat {
            border: 1px solid var(--button-flat-color);
            color: var(--button-flat-color);

            &:hover,
            &:focus {
                border-color: var(--button-flat-color-hover);
                color: var(--button-flat-color-hover);
                background: transparent;
            }
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