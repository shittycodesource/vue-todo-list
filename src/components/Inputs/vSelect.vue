<template>
    <v-input-wrapper class="select-wrapper" :class="{'focus': isFocused}">
        <template #label>
            <span v-if="label">{{ label }}</span>
        </template>
        
        <template #input>
            <div class="select">
                <div class="select__active" :class="{'withOption': selectedOption.name}" @click="focusSelect" v-click-outside="blurSelect">
                    <template v-if="selectedOption.name">
                        {{ selectedOption.name }}
                    </template> 
                    <template v-else>
                        {{ defaultTitle }}
                    </template>
                </div>
            </div>
        </template>

        <template #after-input>
            <transition name="select-options-transition">
                <div class="select__options" v-if="isOpen">
                    <div 
                        v-for="option in options"
                        :key="option.name"
                        class="select__option" 
                        :class="{'active': selectedOption == option}"
                        @click="selectOption(option)"
                    >
                        {{ option.name }}
                    </div>
                </div>
            </transition>
        </template>

    </v-input-wrapper>
</template>

<script>
    import vInputWrapper from './vInputWrapper.vue';

    export default {
        name: 'vSelect',
        data() {
            return {
                isOpen: false,
                isFocused: false
            }
        },
        components: { vInputWrapper },
        props: {
            selectedOption: {
                type: [Object, Boolean], // if prop is boolean then sets default title. Made for reset after click on the same option
                default: () => {
                    return {
                        name: 'Default option'
                    }
                }
            },
            label: {
                type: String,
                default: '',
            },
            options: {
                type: Array,
                default: () => [ 
                    { name: 'first option' }, 
                    { name: 'second option' }, 
                    { name: 'third option' } 
                ]
            },
            defaultTitle: {
                type: String,
                default: 'Select one of the options'
            },
            preventOptionReset: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            selectOption(option) {
                this.isOpen = false;

                if (option == this.selectedOption && !this.preventOptionReset) {
                    this.$emit('selectOption', false);
                    return;
                }

                this.$emit('selectOption', option);
            },
            focusSelect() {
                this.isOpen = !this.isOpen;
                this.isFocused = !this.isFocused;
            },
            blurSelect() {
                this.isOpen = false;
                this.isFocused = false;
            }
        },
    }
</script>

<style lang="scss">
    .select-wrapper {
        position: relative;
    }
    
    .select {
        // position: relative;

        &__active {
            font-size: 14px;
            font-weight: 300;
            color: var(--light-text);
            
            cursor: pointer;

            &.withOption {
                color: var(--main-text);
            }
        }

        &__options {
            display: flex;
            flex-direction: column;    

            max-width: 300px;
            width: 100%;

            position: absolute;
            top: calc(100% + 5px);
            left: 0;

            background: var(--blockBackgroundColor);
            box-shadow: $baseBoxShadow;
            border: 1px solid var(--blockBorderColor);
            border-radius: 15px;

            overflow: hidden;
        }

        &__option {
            padding: 15px;

            border: none;
            background: none;
            cursor: pointer;

            font-family: inherit;
            font-size: 14px;
            font-weight: 300;
            color: var(--secondary-text);
            text-align: left;

            transition: background .2s ease-in-out, color .2s ease-in-out;

            &.active {
                background: var(--main-text);
                color: var(--main-text-alt);
            }

            &:hover {
                background: var(--input-select-option-hover);
                color: var(--main-text);
            }
        }
    }
</style>