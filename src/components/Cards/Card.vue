<template>
	<div class="card">
		<header class="card__header">
			<div class="card__left">
				<div class="card__title">
					<slot name="title"></slot>
				</div>
			</div>
			<div class="card__right">
				<slot name="header-right"></slot>
			</div>
		</header>
		<div class="card__content">
			<slot name="content"></slot>
		</div>
		<footer class="card__footer">
			<div class="card__left">
				<slot name="footer-left"></slot>
			</div>
			<div class="card__right">
				<slot name="footer-right"></slot>
			</div>
		</footer>
	</div>
</template>

<script>
	import vIcon from '../app/vIcon.vue';

	export default {
		name: 'Card',
		components: { vIcon }
	}
</script>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;

		width: fit-content;
		min-width: 300px;
		min-height: 200px;

		padding: 15px;

		background: var(--block-background-color);
		border: 1px solid var(--block-border-color);
		box-shadow: var(--block-box-shadow);
		border-radius: 5px;

		transition: border-color .2s linear, box-shadow .2s linear;

		.card-dropdown-icon {
			height: 6px;
			width: 28px;

			cursor: pointer;
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;
		}

		&__title {
			color: #000;
			font-size: 18px;
			font-weight: 400;
		}

		&__content {
			display: flex;
			flex-direction: column;
			flex-grow: 1;

			margin-bottom: 10px;

			color: #525252;
			font-weight: 300;
		}

		&__footer {
			display: flex;
			align-items: center;
			justify-content: space-between;

			color: #000;
		}

		&__link {
			color: var(--main-text);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		&:hover {
			border-color: var(--block-border-color-hover);
			box-shadow: var(--block-box-shadow-hover);
		}
	}
</style>