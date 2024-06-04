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
			<ul class="footer__list">
				<li class="footer__item"><a href="#!">Акции и новости</a></li>
				<li class="footer__item"><a href="#!">Игры для праздника</a></li>
				<li class="footer__item"><a href="#!">Развивающие игры</a></li>
				<li class="footer__item"><a href="#!">Игры в дорогу</a></li>
			</ul>

			<ul class="footer__list">
				<li class="footer__item"><a href="#!">Отзывы</a></li>
				<li class="footer__item"><a href="#!">Доставка и оплата</a></li>
				<li class="footer__item"><a href="#!">Возврат</a></li>
				<li class="footer__item"><a href="#!">О компании</a></li>
				<li class="footer__item"><a href="#!">Контакты</a></li>
				<li class="footer__item"><a href="#!">Документы</a></li>
			</ul>

			<ul class="footer__list">
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
}

.footer__email {
	margin-bottom: 50px;
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
	padding-bottom: 20px;
	padding-left: 20px;
}

.footer__list {
	margin: 0;
	padding: 0;
	text-align: left;
}

.footer__item {
	padding-bottom: 16px;

	&--accent {
		font-weight: 700;
	}
}

.footer__political {
	padding: 25px 64px;
	color: #ced0d2;
	background-color: #222528;
}

.footer__political p {
	margin: 0;
}

.footer__political p:first-child {
	padding-bottom: 10px;
}
</style>
