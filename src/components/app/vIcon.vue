<template>
	<svg>
		<use :xlink:href="name"></use>
	</svg>
</template>

<script>
	export default {
		name: 'vIcon',
		props: {
			name: {
				type: String,
				required: true,
			}
		}
	}
</script>