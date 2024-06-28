<script setup>
import { ref } from 'vue';

const openMenu = ref(false);
</script>

<template>
	<div class="menu" :class="{ 'menu--active': openMenu }">

	</div>
</template>

<style lang="scss" scoped>
.menu {
	display: none;
	width: 375px;
	height: 1131px;

	&--active {
		display: flex;
	}
}
</style>
