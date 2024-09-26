<template>
	<footer class="footer">
		<a class="footer__link" href="#!">
			<img class="footer__logo" src="/images/icons/footer-logo.svg" alt="" />
		</a>
		<a class="footer__tel" href="tel:+80000000000"
			>8(000) 000 00 00 МСК (9-21)</a
		>
		<a class="footer__email" href="mailto:pchelkashop.ru@mail.ru"
			>pchelkashop.ru@mail.ru</a
		>

		<div class="footer-list__wrapper">
			<ul class="footer__list footer__list--1">
				<li class="footer__item"><a href="#!">Акции и новости</a></li>
				<li class="footer__item"><a href="#!">Игры для праздника</a></li>
				<li class="footer__item"><a href="#!">Развивающие игры</a></li>
				<li class="footer__item"><a href="#!">Игры в дорогу</a></li>
			</ul>

			<ul class="footer__list footer__list--2">
				<li class="footer__item"><a href="#!">Отзывы</a></li>
				<li class="footer__item"><a href="#!">Доставка и оплата</a></li>
				<li class="footer__item"><a href="#!">Возврат</a></li>
				<li class="footer__item"><a href="#!">О компании</a></li>
				<li class="footer__item"><a href="#!">Контакты</a></li>
				<li class="footer__item"><a href="#!">Документы</a></li>
			</ul>

			<ul class="footer__list footer__list--3">
				<li class="footer__item footer__item--accent"><a href="#!">Личный кабинет</a></li>
				<li class="footer__item"><a href="#!">Партнерам</a></li>
				<li class="footer__item"><a href="#!">Групповой заказ</a></li>
				<li class="footer__item"><a href="#!">Постоянный покупатель</a></li>
			</ul>
		</div>

		<div class="footer__political">
			<p>Политика конфиденциальности</p>
			<p>Публичная оферта</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	padding-top: 47px;
	text-align: center;
	background: linear-gradient(to right, #f2b236 0%, #ff9c1a 100%);

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 254px 1fr;
		grid-template-rows: 25px 25px;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 265px 265px 1fr;
		grid-template-rows: 76px 40px 40px 100px;
		padding: 58px 138px 10px;
	}
}

.footer__link {
	display: flex;
	width: 200px;
	height: 42px;
	margin-right: auto;
	margin-bottom: 17px;
	margin-left: auto;
	background-color: #ffcf86;
	border-radius: 12px;

	@media (min-width: 768px) {
		grid-row: span 2;
		margin-right: 0;
		margin-left: 55px;
	}

	@media (min-width: 1440px) {
		grid-row: 1 / 1;
		width: 265px;
		height: 76px;
		margin: 0;
		border-radius: 10px;
	}
}

.footer__logo {
	margin: auto;
}

.footer__tel,
.footer__email {
	display: inline-block;
	font-weight: 500;
	font-size: 16px;
	color: #884900;
	text-decoration: none;
}

.footer__tel {
	margin-bottom: 6px;

	@media (min-width: 768px) {
		margin-bottom: 0;
		padding-left: 30px;
		text-align: left;
	}

	@media (min-width: 1440px) {
		grid-row: 2 / 2;
	}
}

.footer__email {
	margin-bottom: 49px;

	@media (min-width: 768px) {
		grid-column: 2 / -1;
		margin-bottom: 0;
		padding-left: 31px;
		text-align: left;
	}

	@media (min-width: 1440px) {
		grid-column: 1 / 2;
		grid-row: 3 / 4;
	}
}

.footer ul {
	list-style: none;
}

.footer ul a {
	font-size: 16px;
	line-height: 160%;
	color: #fafaf9;
	text-decoration: none;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.footer-list__wrapper {
	display: grid;
	grid-template-columns: 189px 145px;
	grid-template-rows: 184px 1fr;
	padding-right: 20px;
	padding-bottom: 19px;
	padding-left: 20px;

	@media (min-width: 768px) {
		grid-column: span 2;
		grid-template-columns: 189px 193px 230px;
		grid-template-rows: 292px;
		padding: 0 55px;
	}

	@media (min-width: 1440px) {
		grid-column: 3 / -1;
	}
}

.footer__list {
	margin: 0;
	padding: 0;
	text-align: left;

	@media (min-width: 768px) {
		&--1 {
			padding-top: 26px;
		}

		&--2 {
			margin: 0;
			padding: 0;
			padding-top: 25px;
			padding-left: 10px;
			text-align: left;
		}

		&--3 {
			padding-top: 25px;
			text-align: left;
		}
	}
}

.footer__item {
	padding-bottom: 16px;

	&--accent {
		font-weight: 700;
	}
}

.footer__political {
	padding: 28px 64px 25px;
	color: #ced0d2;
	background-color: #222528;

	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		grid-column: span 2;
		padding: 29px 55px;
	}

	@media (min-width: 1440px) {
		grid-column: 1 / -1;
		grid-row: 5 / 6;
	}
}

.footer__political p {
	margin: 0;
}

.footer__political p:first-child {
	padding-bottom: 10px;
}
</style>
