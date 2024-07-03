<script setup>
defineEmits(
	['closeMenu'],
);
</script>

<template>
	<div class="menu">
		<div class="menu__cabinet">
			<button  @click="$emit('closeMenu')" class="menu__close">
				<span class="visually-hidden">Закрыть меню.</span>
			</button>
			<div class="menu__info">
				<div class="menu__portret"></div>
				<h1 class="menu__heading">Личный кабинет</h1>
				<div class="menu__options">
					<a class="menu__reg" href="#!">Регистрация</a>
					<a class="menu__auth" href="#!">Войти</a>
				</div>
			</div>
			<nav class="menu__nav">
				<ul class="menu__list">
					<li class="menu__item">
						<a class="menu__link menu__link--current" href="#!">Каталог</a>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="#!">Акции и новости</a>
					</li>
					<li class="menu__item"><a class="menu__link" href="#!">Отзывы</a></li>
					<li class="menu__item">
						<a class="menu__link" href="#!">Доставка и оплата</a>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="#!">О компании</a>
						<ul>
							<li><a class="menu__link-inner" href="#!">О нас</a></li>
							<li><a class="menu__link-inner" href="#!">Контакты</a></li>
							<li><a class="menu__link-inner" href="#!">Документы</a></li>
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
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: 100;
		display: flex;
		width: 375px;
		height: 1131px;
		background-color: rgba(34, 37, 40, 0.79);
	}
}

.menu__cabinet {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 85px 100px;
}

.menu__close {
	display: flex;
	justify-self: end;
	width: 40px;
	height: 40px;
	margin-top: 24px;
	margin-right: 20px;
	background-color: #ffffff;
	background-image: url('/images/icons/crest.svg');
	background-repeat: no-repeat;
	background-position: 50% 50%;
	border: none;
	border-radius: 8px;
	cursor: pointer;
}

.menu__info {
	display: grid;
	grid-column: 1 / -1;
	grid-column: span 2;
	grid-template-columns: 40px 1fr;
	padding: 11px 22px;
}

.menu__portret {
	width: 40px;
	height: 40px;
	background-color: $base-white-color;
	background-image: url('/images/icons/menu-user.svg');
	background-repeat: no-repeat;
	background-position: 50% 50%;
	border-radius: 8px;
}

.menu__heading {
	margin: 0;
	padding: 12px 15px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: $darken-white-color;
}

.menu__options {
	display: flex;
	grid-column: 2 / -1;
}

.menu__reg,
.menu__auth {
	display: inline-block;
	align-self: start;
	padding: 0 15px;
	font-size: 16px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;
}

.menu__nav {
	min-width: 375px;
	margin-top: 35px;
}

.menu__list {
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
}

.menu__link {
	display: flex;
	padding: 24px 22px;
	font-size: 21px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;

	&--current {
		background-color: #f2b236;
	}
}

.menu__link-inner {
	display: flex;
	padding-bottom: 24px;
	padding-left: 22px;
	font-size: 21px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;
}
</style>
