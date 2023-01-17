<template>
	<div class="tags">
		<button 
			class="tag" 
			type="button"
			v-for="tag, index in tags"
			:key="index"
		>
			{{ tag }}
			<v-icon class="tag__icon" name="#cancel" @click.native="$emit('deleteTag', index)"/>
		</button>
	</div>
</template>

<script>
	import vIcon from './app/vIcon.vue';

	export default {
		name: 'Tags',
		components: {
			vIcon
		},
		props: {
			tags: {
				type: Array,
				default: [],
				required: true,
			}
		}
	}
</script>

<style lang="scss">
	.tags {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.tag {
		display: flex;
		align-items: center;

		padding: 2px 20px;

		border: 1px solid $tagColor;
		background: transparent;
		border-radius: 4px;
		cursor: pointer;

		font-family: inherit;
		font-size: 12px;
		line-height: 1.8;
		color: $textColor;
		text-align: center;

		&__icon {
			margin-left: 5px;
			margin-right: -5px;
			width: 12px;
			height: 12px;
			fill: $textColor;

			&:hover {
				fill: darken($textColor, 10%);
			}
		}

		&:hover {
			border-color: darken($tagColor, 10%);
		}
	}
</style>