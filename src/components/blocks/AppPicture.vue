<template>
  <picture>
    <source
      v-if="desktopSizes"
      media="(min-width: 1280px)"
      :srcset="`/images/${name}-desktop.${ext}`"
      :width="desktopSizes[0]"
      :height="desktopSizes[1]"
    >
    <source
      v-if="tabletSizes"
      media="(min-width: 768px)"
      :srcset="`/images/${name}-tablet.${ext}`"
      :width="tabletSizes[0]"
      :height="tabletSizes[1]"
    >
    <img
			class="game-list__img"
      :src="`/images/${name}.${ext}`"
      :width="sizes[0]"
      :height="sizes[1]"
      :alt
      :loading="lazyload ? 'lazy' : null"
    >
  </picture>
</template>

<script setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
	sizes: {
		type: Array,
		required: true,
	},
	tabletSizes: {
		type: [Array, null],
		default: null,
	},
	desktopSizes: {
		type: [Array, null],
		default: null,
	},
	ext: {
		type: String,
		default: 'jpg',
	},
	alt: {
		type: String,
		default: '',
	},
	lazyload: {
		type: Boolean,
		default: true, // Передаём false для первого экрана
	},
	class: {
		type: [String, null],
		edfault: null,
	},
});
</script>

<style lang="scss" scope>
picture,
source {
	display: contents;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}
</style>
