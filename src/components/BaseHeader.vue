<template>
	<header class="header">
		<div class="header__navigation">
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
			<a href="#!">
				<img class="header__logo" src="/images/icons/logo-tablet.svg" alt="">
			</a>
			<div class="header__menu-wrapper">
				<button class="button-icon button-icon--menu"></button>
			</div>
		</div>
		<div class="contact-us">
			<a class="contact-us__link" href="tel:+80000000000">
				8-(000)-000-00-00 МСК (9-21)</a
			>
		</div>
	</header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
.header__navigation {
	position: relative;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 24px 20px 36px;
	background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
	box-shadow: 0 0 7px #ffdba6;

	@media (min-width: 768px) {
		padding: 42px 54px 36px;
	}
}

.header__logo {
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
}

.header__cart-wrapper {
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 66px;
		height: 66px;
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

	&--cart {
		position: relative;
		background-image: url('/images/icons/cart.svg');
		background-position: 4px 5px;

		@media (min-width: 768px) {
			background-position: 6px 8px;
			background-size: 48px;
		}
	}

	&--menu {
		background-image: url('/images/icons/menu-mobile.svg');
		background-position: 7px 10px;

		@media (min-width: 768px) {
			background-position: 9px 16px;
			background-size: 46px;
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
}

.header__description {
	place-self: end center;
	margin: 0;
	font-size: 16px;
	color: #fafaf9;
}

.contact-us {
	padding-top: 18px;
	padding-bottom: 18px;
	text-align: center;
	box-shadow: 0 5px 13px 0 #ebe7e0;

	@media (min-width: 768px) {
		padding: 22px 55px 26px;
		text-align: left;
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
