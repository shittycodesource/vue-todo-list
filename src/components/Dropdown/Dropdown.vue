<template>
    <div class="dropdown-wrapper" ref="wrapper">
        <slot></slot>
        <transition name="dropdown-transition">
            <div class="dropdown" v-if="isOpen" v-click-outside="emitClick">
                <slot name="dropdown-items"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        data() {
            return {
                isOpen: this.isOpened,
            }
        },
        props: {
            isOpened: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            emitClick(event) {
                if (this.$refs.wrapper.contains(event.target)) {
                    return;
                }
                    
                this.$emit('clickOutside');
            }
        },
        watch: {
            isOpened() {
                this.isOpen = this.isOpened;
            }
        }
    }
</script>

<style lang="scss">
    .dropdown {
        &-wrapper {
            display: inline-flex;
            position: relative;
        }

        display: flex;
        flex-direction: column;

        position: absolute;
        bottom: calc(0% - 20%);
        left: 50%;
        transform: translate(-50%, 100%);

        z-index: 100;

        background: var(--blockBackgroundColor);
        border: 1px solid var(--blockBorderColor);
        box-shadow: $baseBoxShadow;

        button, span, a {
            display: block;

            width: 100%;
            min-width: 100px;

            padding: 10px 20px;

            border: none;
            background: var(--blockBackgroundColor);
            cursor: pointer;
            box-shadow: none;

            font-family: inherit;
            font-size: inherit;
            color: var(--textColor);
            text-align: center;
            text-decoration: none;

            &:hover {
                background: var(--dropdownItemColorHover);
                color: var(--dropdownItemTextColorHover);
            }

            &.active {
                background: var(--dropdownItemColorActive);
                color: var(--dropdownItemTextColorHover);
            }
        }
    }

    .dropdown-wrapper--full-width {
        width: 100%;
        
        .dropdown {
            width: 100%;
            align-items: start;
        
            button, span {
                text-align: start;
            }
        }
    }

</style>