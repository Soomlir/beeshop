<template>
  <section class="discount">
    <h2 class="discount__title">Новейшие акции</h2>
    <a class="discount__link" href="#!">Смотреть все акции</a>
    <ul class="discount__list">
      <li class="discount__item" v-for="{id, title, description} in discounts" :key="id">
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
	}

	.discount__title {
		margin: 0;
		margin-bottom: 22px;
		font-weight: 400;
		font-size: 16px;
		color: #5b636b;
	}

	.discount__link {
		font-weight: 500;
		font-size: 14px;
		color: #db4e66;
		text-transform: uppercase;
		text-decoration: none;
	}

	.discount__list {
		margin: 0;
		margin-top: 37px;
		padding: 0;
		list-style: none;
	}

	.discount__item {
		margin-bottom: 23px;
		padding: 23px 22px;
		border-radius: 14px;
		box-shadow: 0 4px 9px 0 #d3d3d3;
	}

	.discount__heading {
		margin: 0;
		margin-bottom: 16px;
		font-weight: 500;
		font-size: 20px;
		color: #db4e66;
	}

	.discount__text {
		margin: 0;
		font-weight: 400;
		font-size: 16px;
		color: #222528;
	}
</style>
