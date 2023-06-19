<template>
	<div class="progress">
		<div 
			class="progress__fill"
			:style="{ width: fill + '%' }"
		></div>
	</div>
</template>

<script>
	export default {
		name: 'vProgress',
		props: {
			fill: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss">
	.progress {
		width: 100%;
		height: 18px;

		background: var(--progress-bar-background-color);
		border-radius: 10px;

		position: relative;
		overflow: hidden;

		&__fill {
			max-width: 100%;
			// width: 0%;
			height: 100%;

			position: absolute;
			top: 0;
			left: 0;

			background: var(--progress-bar-color);

			transition: width .5s ease-in-out;
		}
	}
</style>