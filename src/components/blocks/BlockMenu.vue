<script setup>
defineEmits(['closeMenu']);
</script>

<template>
	<div class="menu">
		<div class="menu__cabinet">
			<button @click="$emit('closeMenu')" class="menu__close">
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
							<a class="menu__link" href="#!"
								>Акции и новости<span class="menu__link--bullet"></span
							></a>
						</li>
						<li class="menu__item">
							<a class="menu__link" href="#!">Отзывы</a>
						</li>
						<li class="menu__item">
							<a class="menu__link" href="#!">Доставка и оплата</a>
						</li>
						<li class="menu__item">
							<a class="menu__link menu__link--arrow" href="#!">О компании</a>
							<ul class="menu__list-inner">
								<li><a class="menu__link-inner" href="#!">О нас</a></li>
								<li><a class="menu__link-inner" href="#!">Контакты</a></li>
								<li><a class="menu__link-inner" href="#!">Документы</a></li>
							</ul>
						</li>
					</ul>
					<ul class="menu__icon-list">
						<li class="menu__icon-item">
							<a class="menu__icon menu__icon--vk" href="#!"
								><span class="visually-hidden">Vk</span></a
							>
						</li>
						<li class="menu__icon-item">
							<a class="menu__icon menu__icon--insta" href="#!"
								><span class="visually-hidden">Instagram</span></a
							>
						</li>
					</ul>
					<input
						class="menu__search"
						type="search"
						placeholder="Поиск по сайту..."
					/>
			</nav>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		width: 100%;
		background-color: #fafaf9;
	}

	&--active {
		position: absolute;
		z-index: 100;
		display: flex;
		width: 375px;
		overflow-y: auto;
		background-color: rgba(34, 37, 40, 0.79);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		inset: 0;
		backdrop-filter: blur(10px);

		@media (min-width: 768px) {
			width: 768px;
		}
	}
}

.menu__cabinet {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 85px 100px;

	@media (min-width: 768px) {
		grid-template-rows: 173px 100px;
		width: 100%;
	}

	@media (min-width: 1440px) {
		display: block;
		box-shadow: 0 5px 13px 0 #ebe7e0;
	}
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

	@media (min-width: 768px) {
		width: 66px;
		height: 66px;
		margin-top: 42px;
		margin-right: 54px;
		background-image: url('/images/icons/crest-tablet.svg');
	}

	@media (min-width: 1440px) {
		display: none;
	}
}

.menu__info {
	display: grid;
	grid-column: 1 / -1;
	grid-template-columns: 40px 1fr;
	grid-template-rows: 40px 40px;
	padding: 11px 22px;

	@media (min-width: 768px) {
		grid-template-columns: 66px 1fr 1fr;
		width: 662px;
		padding: 13px 53px;
	}

	@media (min-width: 1440px) {
		display: none;
	}
}

.menu__portret {
	width: 40px;
	height: 40px;
	background-color: $base-white-color;
	background-image: url('/images/icons/menu-user.svg');
	background-repeat: no-repeat;
	background-position: 50% 50%;
	border-radius: 8px;

	@media (min-width: 768px) {
		width: 66px;
		height: 66px;
		background-image: url('/images/icons/menu-user-tablet.svg');
	}
}

.menu__heading {
	margin: 0;
	padding: 12px 15px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: $darken-white-color;

	@media (min-width: 768px) {
		grid-column: 2 / 3;
		width: 200px;
		margin-top: 11px;
		margin-left: 10px;
		font-size: 24px;
	}
}

.menu__options {
	display: flex;
	grid-column: 2 / -1;

	@media (min-width: 768px) {
		grid-column: 3 / -1;
	}
}

.menu__reg,
.menu__auth {
	display: inline-block;
	align-self: start;
	padding: 0 16px;
	padding-top: 9px;
	font-size: 16px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;
}

.menu__reg {
	@media (min-width: 768px) {
		margin-top: 19px;
		margin-left: 56px;
	}
}

.menu__auth {
	@media (min-width: 768px) {
		margin-top: 19px;
		margin-left: 33px;
		padding-right: 14px;
	}
}

.menu__nav {
	box-sizing: border-box;
	min-width: 335px;
	margin-top: 36px;
	margin-right: 20px;
	margin-left: 20px;

	@media (min-width: 768px) {
		width: 100%;
		width: 660px;
		margin-top: 62px;
		margin-right: 54px;
		margin-left: 54px;
	}

	@media (min-width: 1440px) {
		display: flex;
		margin: 0;
		margin-left: auto;
	}
}

.menu__list {
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;

	@media (min-width: 1440px) {
		display: flex;
		flex-wrap: wrap;
		width: auto;
	}

	@media (min-width: 1440px) {
		grid-column: 2 / -1;
	}
}

.menu__item {
	border-bottom: 1px solid #a5aaaf;

	@media (min-width: 1440px) {
		border: none;
	}
}

.menu__link {
	position: relative;
	display: flex;
	padding: 24px 22px;
	padding-left: 0;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;

	@media (min-width: 768px) {
		padding: 27px 0;
		font-size: 24px;
	}

	@media (min-width: 1440px) {
		padding: 22px 0;
		padding-right: 27px;
		padding-left: 27px;
		font-size: 16px;
		color: #222528;
	}

	&--bullet {
		position: absolute;
		right: 140px;
		bottom: 6px;
		width: 15px;
		height: 15px;
		background-color: #db4e66;
		border-radius: 50%;

		@media (min-width: 768px) {
			right: 413px;
			bottom: 27px;
			width: 21px;
			height: 21px;
		}

		@media (min-width: 1440px) {
			display: none;
		}
	}

	&--arrow {
		background-image: url('/images/icons/arrow-menu-mobile.svg');
		background-repeat: no-repeat;
		background-position: 303px 50%;

		@media (min-width: 768px) {
			background-image: url('/images/icons/arrow-menu-tablet.svg');
			background-position: 603px 58%;
		}

		@media (min-width: 1440px) {
			display: none;
		}
	}

	&--current {
		margin-right: -20px;
		margin-left: -20px;
		padding-left: 20px;
		background-color: #f2b236;

		@media (min-width: 768px) {
			margin-right: -54px;
			margin-left: -54px;
			padding-right: 54px;
			padding-left: 54px;
		}

		@media (min-width: 1440px) {
			margin: 0;
		}

		@media (min-width: 1440px) {
			background: none;
		}
	}
}

.menu__list-inner {
	margin: 0;
	padding: 0;
	list-style: none;

	@media (min-width: 768px) {
		margin-top: 37px;
		padding-bottom: 24px;
		padding-left: 50px;
		font-size: 24px;
		border-bottom: 1px solid #a5aaaf;
	}

	@media (min-width: 1440px) {
		display: none;
	}
}

.menu__link-inner {
	display: flex;
	padding-bottom: 24px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: $base-white-color;
	text-decoration: none;

	@media (min-width: 768px) {
		padding-bottom: 47px;
		font-size: 24px;
	}
}

.menu__icon-list {
	display: flex;
	margin: 0;
	padding: 0;
	padding: 36px 22px;
	padding-bottom: 20px;
	padding-left: 0;
	list-style: none;

	@media (min-width: 768px) {
		padding-top: 81px;
	}

	@media (min-width: 1440px) {
		display: none;
	}
}

.menu__icon-item {
	margin-right: 16px;

	@media (min-width: 768px) {
		margin-right: 24px;
	}
}

.menu__icon {
	display: flex;
	width: 52px;
	height: 52px;
	background-color: #90c1bf;
	border-radius: 8px;

	@media (min-width: 768px) {
		width: 64px;
		height: 64px;
	}

	&--vk {
		background-image: url('/images/icons/vk.svg');
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}

	&--insta {
		background-image: url('/images/icons/insta.svg');
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
}

.menu__search {
	width: 333px;
	height: 56px;
	margin: 20px 20px 201px 0;
	margin-bottom: 70px;
	padding: 10px 0;
	padding-right: 50px;
	padding-left: 22px;
	font-size: 16px;
	color: #a5aaaf;
	background-image: url('/images/icons/search-input.svg');
	background-repeat: no-repeat;
	background-position: 288px 50%;
	border: none;
	border-radius: 30px;

	@media (min-width: 768px) {
		width: 392px;
		padding: 31px 22px;
		font-size: 24px;
		background-image: url('/images/icons/search-input-tablet.svg');
		background-position: 345px 50%;
	}

	@media (min-width: 1440px) {
		display: none;
	}
}
</style>
