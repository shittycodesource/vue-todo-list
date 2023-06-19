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

        padding: 8px 20px;

        background: var(--button-background-color);
        border-radius: 5px;
        border: none;
        box-shadow: var(--button-box-shadow);
        cursor: pointer;

        font-family: inherit;
        font-size: 16px  ;
        color: var(--main-text);
        text-decoration: none;

        transition: background .2s linear, color .2s linear, border-color .2s linear, box-shadow .2s linear;

        &:hover,
        &:focus {
            outline: none;
            background: var(--blue);
            box-shadow: var(--button-box-shadow-hover);
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
            box-shadow: none;
            color: var(--button-flat-color);

            &:hover,
            &:focus {
                border-color: var(--button-flat-color-hover);
                color: var(--button-flat-color-hover);
                background: transparent;
                box-shadow: none;

                svg {
                    fill: var(--button-flat-color-hover);
                }
            }

            &.active {
                border-color: var(--button-flat-color-active);
                color: var(--button-flat-color-active);
                background: transparent;
                box-shadow: none;

                svg {
                    fill: var(--button-flat-color-active);
                }
            }
        }

        &--choose {
            width: 100%;
            padding: 15px;

            color: var(--button-choose-color);
            text-align: left;
            
            border: none;
            border-radius: 0;
            background: var(--button-choose-background-color);

            &:hover {
                background: var(--button-choose-background-color-hover);
                color: var(--button-choose-color-hover)
            }
        }

        &--with-icon {
            display: flex;
            align-items: center;

            svg {
                margin-right: 5px;
                width: 16px;
                height: 16px;
                fill: var(--secondary-text);

                transition: fill .2s linear;
            }
        }

        &--big {
            padding: 12px;
            width: 100%;
            text-align: center;
            justify-content: center;
        }

    }
</style>