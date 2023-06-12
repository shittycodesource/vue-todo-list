<template>
    <label class="input-block">
        <div class="input-label">
            <slot name="label"></slot>
        </div>
        <span class="input-wrapper">
            <slot name="input"></slot>
        </span>
        <slot name="after-input"></slot>
    </label>
</template>

<script>
export default {
    name: "vInputWrapper",
};
</script>

<style lang="scss">
    .input-block {
        display: block;
        width: 100%;

        & > span {
            display: block;
            color: var(--secondary-text);
            margin-bottom: 10px;
        }

        .input-label {
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: 300;
            color: var(--secondary-text);
        }

        &--tags {
            .input-wrapper {
                display: flex;
                align-items: center;
            }
        }

        &.focus {
            .input-wrapper {
                border-color: var(--input-border-color-active);
                color: var(--input-text-color-active);
            }
        }
    }

    .input-wrapper {
        display: block;

        width: 100%;

        padding: 15px 15px;

        background: var(--block-background-color);
        border: none;
        border: 1px solid var(--input-border-color);
        border-radius: 9px;
        box-shadow: var(--block-box-shadow);

        color: var(--light-text);

        .input {
            font-size: 14px;
            font-weight: 300;
            color: inherit;
        }

        &.focus {
            opacity: .5;
        }
    }
</style>