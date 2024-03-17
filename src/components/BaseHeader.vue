<template>
	<header class="header">
		<div class="header__navigation">
			<div class="header__cart-wrapper">
				<button class="cart-button button-icon">
					<span class="cart-counter"></span>
				</button>
			</div>
			<p
				class="header__description"
				:class="{ 'visually-hidden': route.name === 'index' }">
					Лаборатория игр
				</p>
			<div class="header__menu-wrapper">
				<button class="menu-button button-icon"></button>
			</div>
		</div>
		<div class="contact-us">
			<a class="contact-us__link" href="tel:+80000000000"> 8-(000)-000-00-00 МСК (9-21)</a>
		</div>
	</header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
	.header__navigation {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		min-height: 100px;
		padding: 24px 20px;
		background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
		box-shadow: 0 0 7px 0 #ffdba6;
	}

	.header__cart-wrapper {
		width: 40px;
		height: 40px;
	}

	.button-icon {
		width: 40px;
		height: 40px;
		background-color: #ffffff;
		background-repeat: no-repeat;
		border: none;
		border-radius: 8px;
		cursor: pointer;
	}

	.cart-button {
		position: relative;
		background-image: url('/images/icons/cart.svg');
		background-position: 4px 5px;
		box-shadow: 0 4px 4px 0 rgba(#000000, 25%);
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
	}

	.header__description {
		place-self: end center;
		margin: 0;
		font-size: 16px;
		color: #fafaf9;
	}

	.menu-button {
		background-image: url('/images/icons/menu-mobile.svg');
		background-position: 7px 10px;
		box-shadow: 0 4px 4px 0 rgba(#000000, 25%);
	}

	.contact-us {
		padding-top: 18px;
		padding-bottom: 17px;
		text-align: center;
		box-shadow: 0 5px 13px 0 #ebe7e0;
	}

	.contact-us__link {
		font-size: 16px;
		color: #884900;
		text-decoration: none;
	}
</style>
