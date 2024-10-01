<template>
	<header class="header">
		<div class="header__wrapper">
		<div class="header__navigation">
			<div class="header__search-wrapper">
				<input
					class="header__search"
					type="search"
					placeholder="Поиск по сайту...."
				/>
			</div>
			<div class="header__cart-wrapper">
				<button class="button-icon button-icon--cart">
					<span class="cart-counter"></span>
				</button>
			</div>
			<p
				class="header__description"
				:class="{ 'visually-hidden': route.name === 'index' }"
			>
				Лаборатория игр
			</p>
			<a class="header__logo" href="#!">
				<picture>
					<source
						srcset="/images/icons/logo-desktop.svg"
						media="(min-width: 1440px)"
					/>
					<img
						class="header__logo-img"
						src="/images/icons/logo-tablet.svg"
						alt=""
					/>
				</picture>
			</a>
			<div class="header__menu-wrapper">
				<button class="button-icon button-icon--profile">
					<span class="cart-counter"></span>
				</button>
				<button @click="openMenu" class="button-icon button-icon--menu"></button>
			</div>
		</div>
		<div class="contact-us">
			<a class="contact-us__link" href="tel:+80000000000">
				8-(000)-000-00-00 МСК (9-21)</a
			>
		</div>
	</div>
	<BlockMenu :openMenu @click="closeMenu" :class="{ 'menu--active': isOpen }"/>
	</header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BlockMenu from './blocks/BlockMenu.vue';
import { ref } from 'vue';
const isOpen = ref(false);

const route = useRoute();
const openMenu = () => isOpen.value = true;
const closeMenu = () => isOpen.value = false;
</script>

<style lang="scss" scoped>
.header {
	@media (min-width: 1440px) {
		background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
	}
}

.header__wrapper {
	@media (min-width: 1440px) {
		display: flex;
		flex-wrap: wrap;
		max-width: 1440px;
		height: 214px;
		height: auto;
		margin-right: auto;
		margin-left: auto;
		padding-top: 42px;
	}
}

.header__navigation {
	position: relative;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	min-width: 375px;
	padding: 24px 20px 36px;
	background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
	box-shadow: 0 0 7px #ffdba6;

	@media (min-width: 768px) {
		order: -2;
		padding: 42px 54px 35px;
	}

	@media (min-width: 1440px) {
		display: contents;
	}
}

.header__logo {
	@media (min-width: 1440px) {
		order: -2;
		padding-bottom: 30px;
	}
}

.header__logo-img {
	display: none;

	@media (min-width: 768px) {
		display: block;
		margin-top: 8px;
	}

	@media (min-width: 1440px) {
		margin-top: 0;
		margin-right: 0;
		padding-left: 156px;
	}
}

.header__cart-wrapper {
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 66px;
		height: 66px;
	}

	@media (min-width: 1440px) {
		width: 45px;
		height: 45px;
		margin: 0;
		margin-top: 14px;
		margin-left: 25px;
	}
}

.header__search-wrapper {
	display: none;

	@media (min-width: 1440px) {
		position: relative;
		display: block;

		&::after {
			content: '';
			position: absolute;
			top: 24px;
			right: 17px;
			width: 24px;
			height: 24px;
			mask: url('/images/icons/search.svg');
			background-color: #a5aaaf;
		}
	}
}

.header__search {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		width: 327px;
		height: 45px;
		margin-top: 14px;
		margin-left: 7px;
		padding: 10px 23px;
		padding-right: 50px;
		font-size: 16px;
		color: #a5aaaf;
		border: none;
		border-radius: 26px;
	}
}

.button-icon {
	width: 40px;
	height: 40px;
	background-color: #ffffff;
	background-repeat: no-repeat;
	border: none;
	border-radius: 8px;
	box-shadow: 0 4px 4px rgba(#000000, 25%);
	cursor: pointer;

	@media (min-width: 768px) {
		width: 66px;
		height: 66px;
		border-radius: 12px;
	}

	@media (min-width: 1440px) {
		width: 45px;
		height: 46px;
	}

	&--cart {
		position: relative;
		background-image: url('/images/icons/cart.svg');
		background-position: 4px 5px;

		@media (min-width: 768px) {
			background-position: 6px 8px;
			background-size: 48px;
		}

		@media (min-width: 1440px) {
			width: 45px;
			height: 45px;
			background-position: 4px 6px;
			background-size: 32px;
		}
	}

	&--menu {
		background-image: url('/images/icons/menu-mobile.svg');
		background-position: 7px 10px;

		@media (min-width: 768px) {
			background-position: 9px 16px;
			background-size: 46px;
		}

		@media (min-width: 1440px) {
			display: none;
		}
	}

	&--profile {
		display: none;

		@media (min-width: 1440px) {
			position: relative;
			display: flex;
			width: 45px;
			height: 45px;
			margin-top: 14px;
			margin-left: 25px;
			background-image: url('/images/icons/user.svg');
			background-position: 6px 6px;
		}
	}
}

.cart-counter {
	content: '';
	position: absolute;
	top: 4px;
	right: 4px;
	width: 12px;
	height: 12px;
	background-color: #db4e66;
	border-radius: 50%;

	@media (min-width: 768px) {
		top: 6px;
		right: 6px;
		width: 20px;
		height: 20px;
	}

	@media (min-width: 1440px) {
		top: 4px;
		right: 4px;
		width: 14px;
		height: 14px;
	}
}

.header__description {
	place-self: center;
	margin: 0;
	font-size: 16px;
	color: #fafaf9;
	transform: translate(100px, 16px);

	@media (min-width: 768px) {
		display: none;
	}
}

.contact-us {
	padding-top: 18px;
	padding-bottom: 18px;
	text-align: center;
	box-shadow: 0 5px 13px 0 #ebe7e0;

	@media (min-width: 768px) {
		padding: 22px 55px 26px;
		text-align: left;
		background: transparent;
	}

	@media (min-width: 1440px) {
		order: -1;
		margin-right: 1px;
		padding: 27px 20px 20px 91px;
		padding-bottom: 0;
		box-shadow: none;
	}
}

.contact-us__link {
	font-size: 16px;
	color: #884900;
	text-decoration: none;

	@media (min-width: 768px) {
		font-weight: 500;
		font-size: 18px;
	}
}
</style>
