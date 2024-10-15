
<script setup>
import BlockDocs from '@/components/blocks/BlockDocs.vue';
</script>

<template>
	<main>
	<div class="breadcrumbs">
		<ul>
			<li><a href="#!">Главная</a></li>
			<li><a href="#!">Документы</a></li>
		</ul>
	</div>
	<BlockDocs />
</main>
</template>

<style lang="scss">
.breadcrumbs {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		padding: 36px 138px;
		padding-bottom: 23px;
		border-bottom: 1px solid #a5aaaf;

		& ul {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		& li {
			position: relative;
			padding-right: 28px;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 7px;
				width: 9px;
				height: 15px;
				background-image: url('/public/images/icons/arrow-breadcrumb.svg');
			}

			&:last-child::after {
				display: none;
			}
		}

		& a {
			color: #a5aaaf;
			text-decoration: none;
		}
	}
}
</style>
