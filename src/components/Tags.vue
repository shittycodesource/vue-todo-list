<template>
	<div class="tags">
		<button 
			class="tag" 
			type="button"
			v-for="tag, index in tags.slice(0, show)"
			:key="index"
			@click="$emit('tagClick', tag)"
		>
			<span class="tag__text">{{ tag }}</span>
			<v-icon class="tag__icon" name="#close" @click.native="$emit('deleteTag', index)" v-if="isEditable"/>
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
			},
			isEditable: {
				type: Boolean,
				default: false
			},
			show: {
				type: Number,
				default: 6,
			}
		}
	}
</script>

<style lang="scss">
	.tags {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.tag {
		display: flex;
		align-items: center;

	    // max-width: 140px;
    	width: max-content;

		padding: 10px 20px;

		border: 1px solid var(--secondary-text);
		background: transparent;
		border-radius: 8px;
		cursor: pointer;

		font-family: inherit;
		font-size: 14px;
		line-height: 1.1;
		color: var(--secondary-text);
		text-align: center;

		&__text {
			overflow: hidden;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            word-break: break-word;
            white-space: pre-line;
            display: -webkit-box;
            -webkit-box-orient: vertical;
		}

		&__icon {
			margin-left: 5px;
			margin-right: -5px;
			width: 10px;
			height: 10px;
			fill: var(--secondary-text);

			&:hover {
				fill: var(--main-text);
			}
		}

		&:hover {
			border-color: var(--main-text);
			color: var(--main-text);
		}
	}
</style>