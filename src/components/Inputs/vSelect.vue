<template>
    <v-input-wrapper class="select-wrapper">
        <template #label>
            <span v-if="label">{{ label }}</span>
        </template>
        
        <template #input>
            <div class="select">
                <div class="select__active" @click="isOpen = !isOpen">
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
                        class="select__option" 
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
            }
        },
        props: {
            selectedOption: {
                type: Object, 
            },
            label: {
                type: String,
                default: '',
            },
            options: {
                type: Array,
                required: true,
                default: () => [ 
                    { name: 'first option' }, 
                    { name: 'second option' }, 
                    { name: 'third option' } 
                ]
            },
            defaultTitle: {
                type: String,
                default: 'Select one of the options'
            }
        },
        methods: {
            selectOption(option) {
                this.isOpen = false;
                this.$emit('selectOption', option);
            }
        },
        components: {
            vInputWrapper,
        },
    }
</script>

<style lang="scss">
    .select-wrapper {
        position: relative;
    }
    
    .select {
        // position: relative;

        &__options {
            display: flex;
            flex-direction: column;    

            max-width: 300px;
            width: 100%;

            position: absolute;
            top: calc(100% + 5px);
            left: 0;

            background: $blockBackgroundColor;
            box-shadow: $baseBoxShadow;
            border: 1px solid $blockBorderColor;
            border-radius: 15px;

            overflow: hidden;
        }

        &__option {
            padding: 15px;

            border: none;
            background: none;
            cursor: pointer;

            font-family: inherit;
            font-size: 12px;
            color: $textColor;
            text-align: left;

            transition: background .2s ease-in-out, color .2s ease-in-out;

            &:hover {
                background: #000;
                color: #fff;
            }
        }
    }
</style>