<template>
	<section class="catalog">
		<h2 class="catalog__title">Каталог игр</h2>
		<p class="catalog__text">Популярные игры</p>
		<a class="catalog__link" href="#!">Смотреть все игры</a>
		<ul class="catalog__list game-list">
			<li class="catalog__item game-list__item">
				<img class="game-list__img" src="../../../public/images/game-card-1.jpg" alt="Настольная игра Сказочное королевство.">
				<h3 class="game-list__heading">Настольная игра “Сказочное королевство” с дополненной реальностью</h3>
				<dl class="game-list__options">
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Время игры:</dt>
						<dd class="game-list__data">60-90 мин</dd>
					</div>
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Кол-во игроков:</dt>
						<dd class="game-list__data">2-6</dd>
					</div>
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Подготовка:</dt>
						<dd class="game-list__data">0 мин</dd>
					</div>
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Места:</dt>
						<dd class="game-list__data">любые</dd>
					</div>
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Сложность:</dt>
						<dd class="game-list__data">простая</dd>
					</div>
					<div class="game-list__wrapper">
						<dt class="game-list__termin">Возраст:</dt>
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
	padding: 29px 23px;
	box-shadow: 0 4px 9px 0 #d3d3d3;
}

.game-list__img {
	margin-bottom: 21px;
}

.game-list__heading {
	margin: 0;
	font-weight: 500;
	font-size: 16px;
}

.game-list__options {

}
</style>
