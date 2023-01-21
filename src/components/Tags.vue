<template>
	<div class="tags">
		<button 
			class="tag" 
			type="button"
			v-for="tag, index in tags.slice(0, show)"
			:key="index"
		>
			<span class="tag__text">{{ tag }}</span>
			<v-icon class="tag__icon" name="#cancel" @click.native="$emit('deleteTag', index)" v-if="isEditable"/>
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
		gap: 15px;
	}

	.tag {
		display: flex;
		align-items: center;

	    max-width: 140px;
    	width: max-content;

		padding: 6px 20px;

		border: 1px solid $tagColor;
		background: transparent;
		border-radius: 4px;
		cursor: pointer;

		font-family: inherit;
		font-size: 14px;
		line-height: 1;
		color: $textColor;
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