<template>
	<section class="catalog">
		<h2 class="catalog__title">Каталог игр</h2>
		<p class="catalog__text">Популярные игры</p>
		<a class="catalog__link" href="#!">Смотреть все игры</a>
		<ul class="catalog__list game-list">
			<li class="catalog__item game-list__item">
				<img class="game-list__img" src="/images/game-card-1.jpg" alt="Настольная игра Сказочное королевство.">
				<h3 class="game-list__heading">Настольная игра “Сказочное королевство” с дополненной реальностью</h3>
				<dl class="game-list__options">
					<div class="game-list__wrapper game-list__wrapper--1">
						<dt class="game-list__termin">Время игры: </dt>
						<dd class="game-list__data">60-90 мин</dd>
					</div>
					<div class="game-list__wrapper game-list__wrapper--2">
						<dt class="game-list__termin">Кол-во игроков: </dt>
						<dd class="game-list__data">2-6</dd>
					</div>
					<div class="game-list__wrapper game-list__wrapper--3">
						<dt class="game-list__termin">Подготовка: </dt>
						<dd class="game-list__data">0 мин</dd>
					</div>
					<div class="game-list__wrapper game-list__wrapper--4">
						<dt class="game-list__termin">Места: </dt>
						<dd class="game-list__data">любые</dd>
					</div>
					<div class="game-list__wrapper game-list__wrapper--5">
						<dt class="game-list__termin">Сложность: </dt>
						<dd class="game-list__data">простая</dd>
					</div>
					<div class="game-list__wrapper label">
						<dt class="game-list__termin">Возраст: </dt>
						<dd class="game-list__data">6+</dd>
					</div>
				</dl>
				<p class="game-list__price">3600₽</p>
				<button class="game-list__add button">добавить в корзину</button>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.catalog {
	padding: 0 20px;
	padding-top: 64px;
}

.catalog__title {
	margin: 0;
	margin-bottom: 8px;
	font-weight: 500;
	font-size: 32px;
	line-height: auto;
	color: #222528;
}

.catalog__text {
	margin: 0;
	margin-bottom: 56px;
	color: #5b636b;
}

.catalog__link {
	display: table;
	margin-bottom: 27px;
	font-weight: 500;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;
}

.catalog__list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.catalog__item {
	position: relative;
	padding: 29px 23px;
	box-shadow: 0 4px 9px 0 #d3d3d3;
}

.game-list__img {
	margin-bottom: 21px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.game-list__heading {
	margin: 0;
	margin-bottom: 25px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;
}

.game-list__wrapper {
	position: relative;
	height: 26px;
	padding-left: 34px;
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
}

.game-list__termin,
.game-list__data {
	display: inline;
	margin: 0;
	font-size: 16px;
}

.label {
	content: '';
	position: absolute;
	top: 30px;
	right: 23px;
	box-sizing: border-box;
	width: 122px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 0;
	text-align: center;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #90c1bf;
	border-radius: 6px;

	& dt,
	& dd {
		font-size: 14px;
		line-height: 22px;
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
}

.game-list__add {
	width: 276px;
	margin: 0;
	margin-left: 4px;
	padding: 15px 28px 18px;
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	color: $darken-white-color;
	text-transform: uppercase;
	background-color: #f2b236;
	border: none;
	border-radius: 12px;
	cursor: pointer;
}
</style>
