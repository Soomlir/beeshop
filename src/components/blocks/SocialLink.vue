<script>
</script>

<template>
		<a class="social" href="#!">
			<slot></slot>
		</a>
</template>

<style scoped lang="scss">
.social {
	display: block;
	width: 42px;
	height: 42px;
	background-color: #90c1bf;
	border-radius: 4px;

	@media (min-width: 768px) {
		width: 53px;
		height: 53px;
	}
}
</style>
