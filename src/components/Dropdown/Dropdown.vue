<template>
    <div class="dropdown-wrapper">
        <slot></slot>
        <transition name="dropdown-transition">
            <div class="dropdown" v-if="isOpen">
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

        background: #fff;
        box-shadow: $baseBoxShadow;

        button, div, span {
            display: block;

            width: 100%;
            min-width: 100px;

            padding: 10px 20px;

            border: none;
            background: #fff;
            cursor: pointer;
            box-shadow: none;

            font-family: inherit;
            font-size: inherit;
            color: inherit;

            &:hover {
                background: lighten($mainColor, 10%);
                color: #fff;
            }

            &.active {
                background: $mainColor;
                color: #fff;
            }
        }
    }

    .dropdown-transition {
        &-leave-active {
            animation: dropdownAnimation .2s ease reverse;
        }

        &-enter-active {
            animation: dropdownAnimation .2s ease;
        }
    }
    
    @keyframes dropdownAnimation {
        0% {
            opacity: 0;
            transform: translate(-50%, calc(100% - 10px));
        }    

        100% {
            opacity: 1;
            transform: translate(-50%, 100%);
        }
    }
</style>