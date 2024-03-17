<template>
  <main class="main">
		<h1 class="visually-hidden">ПчёлоШоп - магазин</h1>
		<block-promo class="main__promo" />
		<block-discount :discounts="discounts" />
		<section class="main__catalog catalog">
			<h2 class="catalog__title">Каталог игр</h2>
			<p class="catalog__text">Популярные игры</p>
			<a class="catalog__link" href="#!">Смотреть все игры</a>
			<ul class="catalog__list">
				<li class="catalog__item">

				</li>
				<li class="catalog__item">

				</li>
				<li class="catalog__item">

				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import BlockPromo from '@/components/blocks/BlockPromo.vue';
import BlockDiscount from '@/components/blocks/BlockDiscount.vue';
import discounts from '@/data/discounts';
</script>
