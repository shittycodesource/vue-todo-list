<template>
    <v-input-wrapper class="picker-wrapper">
        <template #label>Pick a color</template>
        <template #input>
            <div
                class="picker"
                :class="{ 'disabled': disabled }"
                @mousedown.prevent="rotateStart"
                @mousemove.prevent="rotating"
                @mouseup.prevent="rotateEnd"
                @mousewheel.prevent="increaseAngle"
                @touchstart.prevent="rotateStart"
                @touchmove.prevent="rotating"
                @touchend.prevent="rotateEnd"
                ref="picker"
            >
                <div class="picker__wheel" :style="{ background: backgroundGradient }"></div>
                <div class="picker__rotator" :style="{transform: `rotate(${angle}deg)`}">
                    <div class="picker__icon" v-if="angle"></div>
                </div>
                <div class="picker__inner">
                    <div class="picker__color" :style="{ background: cssColor }"></div>
                </div>
            </div>
        </template>
    </v-input-wrapper>
</template>

<script>
    import vInputWrapper from './vInputWrapper.vue';

    export default {
        name: 'vColorPicker',
        components: { vInputWrapper },
        data() {
            return {
                isActive: false,
                angle: 0,
                backgroundGradient: `background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red)`,
                cssColor: 'hsla(0, 100%, 100%, 1)',
                color: this.hue
            }
        },
        props: {
            hue: {
                type: Number,
                default: 0
            },
            saturation: {
                type: Number,
                default: 100
            },
            light: {
                type: Number,
                default: 50
            },
            defaultIsWhite: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            rotateStart() {
                if (!this.disabled) {
                    this.isActive = true;
                }
            },
            rotating(event) {
                if (this.isActive) {
                    const rectangleData = this.$refs.picker.getBoundingClientRect(); // contains element position and info
                    const cordX = rectangleData.left + rectangleData.width / 2;
			        const cordY = rectangleData.top + rectangleData.height / 2;

                    const clientY = event.clientY || event.touches[0].clientY;
                    const clientX = event.clientX || event.touches[0].clientX;

                    const radAngle = Math.atan2(clientY - cordY, clientX - cordX);
                    const normalizedAngle = (radAngle * (180 / Math.PI) + 90);

                    this.angle = normalizedAngle;
                    this.getColor(this.angle);
                    this.emitColor();
                }
            },
            rotateEnd() {
                if (!this.isDisabled) {
                    this.isActive = false;
                }
            },
            increaseAngle(event) {
                if (!this.disabled) {
                    if (event.deltaY > 0) {
                        this.angle += 5;
                    } else {
                        this.angle -= 5;
                    }

                    this.getColor(this.angle);
                    this.emitColor();
                }
            },
            getColor(angle, saturation, light) {
                const _angle = angle           || this.angle;
                const _saturation = saturation || this.saturation;
                const _light = light           || this.light;

                this.color = _angle
                this.cssColor = `hsla(${_angle}, ${_saturation}%, ${_light}%, 1)`;
            },
            resetColor() {
                this.angle = 0;

                this.getColor(0, 100, 100);
                
                this.$nextTick(() => {
                    this.$emit('input', {
                        angle: this.angle,
                        color: this.cssColor
                    })
                })
            },
            generateWheelGradient() {
                const hslCodes = [ 0, 60, 120, 180, 240, 300, 0 ];
                const colorsArray = [];

                for (let i = 0; i <= hslCodes.length - 1; i++) {
                    colorsArray.push(`hsla(${hslCodes[i]}, ${this.saturation}%, ${this.light}%, 1)`);
                }

                this.backgroundGradient = `conic-gradient(${colorsArray.join(',')})`;
            },
            emitColor() {
                this.$emit('input', {
                    angle: this.angle,
                    color: this.cssColor
                });
            }
        },
        mounted() {
            this.generateWheelGradient(this.hue);

            if (this.defaultIsWhite && this.hue == 0) {
                this.getColor(0, 100, 100);
                return;
            }

            this.angle = this.hue;
            this.getColor(this.hue);
        }
    }
</script>

<style lang="scss">

    .picker {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;

        &__wheel {
            width: 250px;
            height: 250px;

            border-radius: 500px;
            background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
            -webkit-mask-image: radial-gradient(circle at 50% 50%, transparent 53.5%, black 54%);

            position: relative;
        }

        &__inner {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            width: calc(100% - 50px);
            height: calc(100% - 50px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            border-radius: 100px;
        }

        &__rotator {
            display: flex;
            justify-content: center;
            
            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;
            left: 0;

            // transition: transform .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: transform;
        }

        &__icon {
            width: 15px;
            height: 15px;
            border-radius: 100px;
            
            background-color: #fff;
            
            position: absolute;
            top: 2.5%;
            left: 50%;
            transform: translateX(-50%)
        }

        &__color {
            width: 80px;
            height: 80px;
            border-radius: 100px;
        }

        &.disabled {
            opacity: .6;
        }
    }
</style>