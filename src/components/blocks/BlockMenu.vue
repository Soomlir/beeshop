<script setup></script>

<template>
	<div class="menu">
		<div class="menu__cabinet">
			<button class="menu__close"></button>
			<div class="menu__portret"></div>
			<h1>Личный кабинет</h1>
			<a href="#!">Регистрация</a>
			<a href="#!">Войти</a>
			<nav>
				<ul>
					<li><a href="#!">Каталог</a></li>
					<li><a href="#!">Акции и новости</a></li>
					<li><a href="#!">Отзывы</a></li>
					<li><a href="#!">Доставка и оплата</a></li>
					<li>
						<a href="#!">О компании</a>
						<ul>
							<li><a href="#!">О нас</a></li>
							<li><a href="#!">Контакты</a></li>
							<li><a href="#!">Документы</a></li>
						</ul>
					</li>
				</ul>
				<ul>
					<li><a href="#!">Vk</a></li>
					<li><a href="#!">Instagram</a></li>
				</ul>
				<input type="search" placeholder="Поиск по сайту..." />
			</nav>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu {
	display: none;

	&--active {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 100;
		display: flex;
		width: 375px;
		height: 1131px;
		background: url('/images/menu-bg.png');
		background-color: rgba(255, 255, 255, 0.8);
	}
}

.menu__cabinet {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 85px 100px;
	width: 375px;
}

.menu__close {
	display: flex;
	grid-column: span 2;
	width: 40px;
	height: 40px;
	background-color: #ffffff;
	background-image: url('/images/icons/crest.svg');
	background-repeat: no-repeat;
	background-position: 50% 50%;
	border: none;
	border-radius: 8px;
	cursor: pointer;
}
</style>
