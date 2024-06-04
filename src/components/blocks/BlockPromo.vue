<template>
	<section class="promo">
		<h2 class="visually-hidden">Промоушн магазина ПчёлоШоп</h2>
		<p class="promo__title">
			Квест в коробке – объединяет семью и друзей в поисках разгадки
		</p>
		<p class="promo__description">
			Подготовка до 10 минут, прохождение 60-90 минут,<br />
			яркие эмоции - надолго!
		</p>
		<a class="promo__button button" href="#!">выбрать игру</a>
	</section>
</template>

<style lang="scss" scoped>
.promo {
	position: relative;
	padding: 236px 20px 113px;
	background-image: url('/images/promo-bg.jpg');
	background-repeat: no-repeat;
	box-shadow: 0 4px 4px 0 rgba(#000000, 25%);

	@media (min-width: 768px) {
		padding: 265px 54px 113px;
		background-image: url('/images/promo-bg-tablet.jpg');
	}

	&::before {
		content: '';
		inset: 0;
		position: absolute;
		background-color: rgba(#000000, 54%);
	}
}

.promo__title {
	position: relative;
	margin: 0;
	padding-bottom: 24px;
	font-weight: 500;
	font-size: 36px;
	line-height: 43px;
	color: $darken-white-color;

	@media (min-width: 768px) {
		padding-right: 160px;
		font-size: 50px;
		line-height: 59px;
	}
}

.promo__description {
	position: relative;
	margin: 0;
	padding-bottom: 32px;
	font-weight: 500;
	font-size: 20px;
	color: $darken-white-color;

	@media (min-width: 768px) {
		font-size: 24px;
	}
}

.promo__button {
	position: relative;
	display: block;
	box-sizing: border-box;
	width: 276px;
	padding: 17px 24px 16px;
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	color: $darken-white-color;
	text-transform: uppercase;
	text-decoration: none;
	background-color: #db4e66;
	border-radius: 12px;
	box-shadow: 0 4px 4px 0 rgba(#000000, 25%);
}
</style>
