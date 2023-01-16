<template>
    <button class="burger" type="button" :class="{'active': isActive}">
        <span></span>
    </button>
</template>

<script>
    export default {
        name: 'vBurgerMenu',
		props: {
			isActive: {
				type: Boolean,
				default: false
			}
		}
    }
</script>

<style lang="scss">
    .burger {
        width: 25px;
        height: 12px;

        position: relative;

        background: none;
        border: none;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
        }

        span,
        &::before,
        &::after {
            width: 100%;
            height: 2px;

            background: #000;

            position: absolute;
            left: 0;
            transform: translateY(-50%);
			
			transition: transform .2s linear, opacity .2s linear;
        }

        &::before {
            top: 0px;
        }

        &::after {
            top: 12px;
        }
		
		&.active {
			span {
				opacity: 0;
			}
			
			&::before {
				transform: translateY(5px) rotate(45deg);
			}
			
			&::after {
				transform: translateY(-7px) rotate(-45deg);
			}
		}
    }
</style>