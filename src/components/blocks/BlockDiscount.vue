<template>
	<section class="discount">
		<h2 class="discount__title">Новейшие акции</h2>
		<a class="discount__link" href="#!">Смотреть все акции</a>
		<ul class="discount__list">
			<li
				class="discount__item"
				:style="{ '--background': `url('/images/${background}')` }"
				v-for="{ id, title, description, background } in discounts"
				:key="id"
			>
				<h3 class="discount__heading">{{ title }}</h3>
				<p class="discount__text">{{ description }}</p>
			</li>
		</ul>
	</section>
</template>

<script setup>
defineProps({
	discounts: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.discount {
	padding: 48px 20px;
	border-bottom: 1px solid #a5aaaf;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 64px 54px 82px;
	}

	@media (min-width: 1440px) {
		padding: 30px 0 66px 138px;
	}
}

.discount__title {
	margin: 0;
	margin-bottom: 22px;
	font-weight: 400;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-top: 3px;
		margin-bottom: 0;
		margin-left: 16px;
	}

	@media (min-width: 1440px) {
		margin-top: 21px;
	}
}

.discount__link {
	font-weight: 500;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;

	@media (min-width: 768px) {
		justify-self: end;
		margin-top: 7px;
		margin-right: 11px;
		font-size: 16px;
	}

	@media (min-width: 1440px) {
		margin-top: 21px;
		margin-right: 149px;
	}
}

.discount__list {
	margin: 0;
	margin-top: 37px;
	padding: 0;
	list-style: none;

	@media (min-width: 768px) {
		grid-column: span 2;
		margin-top: 42px;
	}

	@media (min-width: 1440px) {
		display: flex;
	}
}

.discount__item {
	margin-bottom: 16px;
	padding: 23px 22px;
	padding-bottom: 30px;
	border-radius: 14px;
	box-shadow: 0 4px 9px 0 #d3d3d3;

	@media (min-width: 768px) {
		position: relative;
		padding-right: 34px;
		padding-bottom: 60px;
		padding-left: 168px;

		&::before {
			content: '';
			position: absolute;
			top: 36px;
			left: 35px;
			width: 118px;
			height: 118px;
			background-image: var(--background, none);
		}
	}

	@media (min-width: 1440px) {
		flex-shrink: 0;
		box-sizing: border-box;
		width: 546px;
		margin-right: 16px;
		padding-bottom: 34px;
	}
}

.discount__heading {
	margin: 0;
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #db4e66;

	@media (min-width: 768px) {
		margin-top: 14px;
		margin-bottom: 21px;
		font-size: 24px;
	}

	@media (min-width: 1440px) {
		margin-top: 11px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

.discount__text {
	margin: 0;
	font-weight: 400;
	font-size: 16px;
	color: #222528;

	@media (min-width: 768px) {
		line-height: 26px;
	}
}
</style>
