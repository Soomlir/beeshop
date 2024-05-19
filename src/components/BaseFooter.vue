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

		<ul>
			<li><a href="#!">Акции и новости</a></li>
			<li><a href="#!">Игры для праздника</a></li>
			<li><a href="#!">Развивающие игры</a></li>
			<li><a href="#!">Игры в дорогу</a></li>
		</ul>

		<ul>
			<li><a href="#!">Отзывы</a></li>
			<li><a href="#!">Доставка и оплата</a></li>
			<li><a href="#!">Возврат</a></li>
			<li><a href="#!">О компании</a></li>
			<li><a href="#!">Контакты</a></li>
			<li><a href="#!">Документы</a></li>
		</ul>

		<ul>
			<li><a href="#!">Личный кабинет</a></li>
			<li><a href="#!">Партнерам</a></li>
			<li><a href="#!">Групповой заказ</a></li>
			<li><a href="#!">Постоянный покупатель</a></li>
		</ul>

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

.footer__political {
	color: #ced0d2;
	background-color: #222528;
}
</style>
