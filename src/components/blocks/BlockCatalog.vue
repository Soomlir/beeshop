<template>
	<section class="catalog">
		<h2 class="catalog__title">Каталог игр</h2>
		<p class="catalog__text">Популярные игры</p>
		<a class="catalog__link" href="#!">Смотреть все игры</a>
		<ul class="catalog__list game-list">
			<li
				class="catalog__item game-list__item"
				v-for="({ title, image, params, price }, i) in games"
				:key="i"
			>
				<app-picture class="catalog__picture" v-bind="image" />
				<h3 class="game-list__heading">{{ title }}</h3>
				<dl class="game-list__options">
					<div
						:class="{
							[`game-list__wrapper game-list__wrapper--${j + 1}`]:
								termin !== 'age',
							'game-list__label': termin === 'age',
						}"
						v-for="(value, termin, j) in termins"
						:key="value"
					>
						<dt class="game-list__termin">{{ value }}:</dt>
						<dd class="game-list__data">{{ params[termin] }}</dd>
					</div>
				</dl>
				<p class="game-list__price">{{ price }}₽</p>
				<button class="game-list__add button">добавить в корзину</button>
			</li>
		</ul>
	</section>
</template>

<script setup>
import AppPicture from '@/components/blocks/AppPicture.vue';

const termins = {
	time: 'Время игры',
	players: 'Кол-во игроков',
	prepare: 'Подготовка',
	places: 'Места',
	complexity: 'Сложность',
	age: 'Возраст',
};

const games = Array.from({ length: 3 }, () => ({
	title: 'Настольная игра “Сказочное королевство” с дополненной реальностью',
	image: {
		name: 'game-card-1',
		sizes: [375],
		tabletSizes: [768],
		desktopSizes: [1440],
	},
	params: {
		time: ' 60-90 мин',
		players: ' 2-6',
		prepare: ' 0 мин',
		places: ' любые',
		complexity: ' простая',
		age: '6+',
	},
	price: 3600,
}));
</script>

<style lang="scss" scoped>
.catalog {
	padding: 0 20px;
	padding-top: 64px;
	padding-bottom: 38px;
	border-bottom: 1px solid #a5aaaf;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		box-sizing: border-box;
		padding: 56px 55px 62px;
	}

	@media (min-width: 1440px) {
		grid-template-rows: 50px 50px;
		padding: 81px 138px 39px;
		padding-right: 137px;
	}
}

.catalog__title {
	margin: 0;
	margin-bottom: 8px;
	font-weight: 500;
	font-size: 32px;
	line-height: auto;
	color: #222528;

	@media (min-width: 768px) {
		grid-column: span 2;
		margin-bottom: 51px;
	}

	@media (min-width: 1440px) {
		grid-column: 1/2;
		font-size: 44px;
	}
}

.catalog__text {
	margin: 0;
	margin-bottom: 56px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 0;
		padding-bottom: 42px;
		padding-left: 15px;
	}

	@media (min-width: 1440px) {
		grid-column: 1/ -1;
		grid-row: 2 /-1;
		padding: 0;
		padding-top: 20px;
	}
}

.catalog__link {
	display: table;
	margin-bottom: 27px;
	font-weight: 500;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;

	@media (min-width: 768px) {
		justify-self: end;
		padding-right: 10px;
		font-size: 16px;
	}

	@media (min-width: 1440px) {
		grid-column: 2/-1;
		grid-row: 1 /-1;
		margin-bottom: 0;
		padding-top: 32px;
	}
}

.catalog__list {
	margin: 0;
	padding: 0;
	list-style: none;

	@media (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		grid-column: span 2;
	}

	@media (min-width: 1440px) {
		padding-top: 82px;
	}
}

.catalog__item {
	position: relative;
	margin-bottom: 15px;
	padding: 29px 23px 31px;
	border-radius: 12px;
	box-shadow: 0 4px 9px 0 #d3d3d3;

	@media (min-width: 768px) {
		box-sizing: border-box;
		width: 314px;
		margin-right: 30px;
		margin-bottom: 30px;
		padding: 29px 22px 24px;

		&:nth-child(2) {
			margin-right: 0;
		}
	}

	@media (min-width: 1440px) {
		width: 365px;
		margin-right: 35px;
		padding: 24px 25px 29px;

		&:nth-child(2) {
			margin-right: 35px;
		}

		&:nth-child(3) {
			margin-right: 0;
		}
	}
}

.game-list__img {
	margin-bottom: 21px;

	@media (min-width: 768px) {
		width: 272px;
		height: 324px;
		margin-bottom: 16px;
	}
}

.game-list__heading {
	margin: 0;
	margin-bottom: 25px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;

	@media (min-width: 768px) {
		font-size: 18px;
	}

	@media (min-width: 1440px) {
		margin-top: 21px;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
}

.game-list__wrapper {
	position: relative;
	padding-bottom: 7px;
	padding-left: 34px;
	font-size: 16px;
	color: #5b636b;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 22px;
		background-repeat: no-repeat;
	}

	&--1::before {
		top: 2px;
		left: 4px;
		background-image: url('/images/icons/game-card-icon-1.svg');
	}

	&--2::before {
		background-image: url('/images/icons/game-card-icon-2.svg');
	}

	&--3::before {
		top: -1px;
		background-image: url('/images/icons/game-card-icon-3.svg');
	}

	&--4::before {
		top: -2px;
		background-image: url('/images/icons/game-card-icon-4.svg');
	}

	&--5::before {
		top: -3px;
		background-image: url('/images/icons/game-card-icon-5.svg');
	}

	@media (min-width: 768px) {
		padding-bottom: 9px;
	}
}

.game-list__termin,
.game-list__data {
	display: inline;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 18px;
	}
}

.game-list__label {
	content: '';
	position: absolute;
	top: 30px;
	right: 23px;
	box-sizing: border-box;
	width: 122px;
	padding: 3px 16px 2px;
	font-size: 14px;
	line-height: 22px;
	text-align: center;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #90c1bf;
	border-radius: 6px;

	@media (min-width: 768px) {
		top: 24px;
		right: 25px;
		width: 134px;
		padding: 5px 16px 3px;
		font-size: 16px;
		line-height: 22px;
		text-align: center;
		color: #fafaf9;
		text-transform: uppercase;
		background-color: #90c1bf;
		border-radius: 6px;
	}

	@media (min-width: 1440px) {
		top: 25px;
		right: 28px;
		width: 134px;
		padding: 3px 15px;
		font-size: 12px;
	}
}

.game-list__price {
	margin: 0;
	margin-top: 31px;
	margin-bottom: 26px;
	font-weight: 500;
	font-size: 24px;
	text-align: center;
	color: #db4e66;

	@media (min-width: 768px) {
		margin-top: 12px;
		margin-bottom: 16px;
	}
}

.game-list__add {
	width: 276px;
	margin: 0;
	margin-left: 4px;
	padding: 15px 28px 17px;
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	color: $darken-white-color;
	text-transform: uppercase;
	background-color: #f2b236;
	border: none;
	border-radius: 12px;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 264px;
		margin-left: 2px;
		padding: 17px 28px 20px;
		font-weight: 500;
		font-size: 16px;
	}

	@media (min-width: 1440px) {
		width: 308px;
	}
}
</style>
