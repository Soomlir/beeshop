<script setup></script>

<template>
	<main>
		<section class="cart">
			<h1 class="visually-hidden">Корзина.</h1>
			<p class="cart__title">Товаров в корзине: <span>2</span></p>
			<div class="cart__desktop-wrap">
				<ul class="cart__list">
					<li class="cart__item">
						<picture>
							<source
								srcset="/images/cart-img-tablet.png"
								media="(min-width: 768px)"
							/>
							<img
								class="cart__img"
								src="/images/cart-img.jpg"
								width="87"
								height="87"
								alt="Картинка товара."
							/>
						</picture>
						<h2 class="cart__heading">
							Настольная игра<br class="mobile" />
							“Сказочное<br class="tablet" />
							королевство” с дополненной<br class="tablet" />
							реальностью, 6+
						</h2>
						<p class="cart__article">Артикул: 00980</p>
						<div class="cart__count-product">
							<button class="cart__btn-less">-</button>
							<input class="cart__input" type="text" value="1" />
							<button class="cart__btn-more">+</button>
						</div>
						<p class="cart__price">
							<span class="cart__price--old">2300</span
							><span class="cart__price--new">2208₽</span>
							<a class="cart__item-delete" href="#!">
								<span class="visually-hidden">Удалить товар.</span>
							</a>
						</p>
					</li>
					<li class="cart__item">
						<picture>
							<source
								srcset="/images/cart-img-tablet.png"
								media="(min-width: 768px)"
							/>
							<img
								class="cart__img"
								src="/images/cart-img.jpg"
								width="87"
								height="87"
								alt="Картинка товара."
							/>
						</picture>
						<h2 class="cart__heading">
							Настольная игра<br class="mobile" />
							“Сказочное<br class="tablet" />
							королевство” с дополненной<br class="tablet" />
							реальностью, 6+
						</h2>
						<p class="cart__article">Артикул: 00980</p>
						<div class="cart__count-product">
							<button class="cart__btn-less">-</button>
							<input class="cart__input" type="text" value="1" />
							<button class="cart__btn-more">+</button>
						</div>
						<p class="cart__price">
							<span class="cart__price--old">2300</span
							><span class="cart__price--new">2208₽</span>
							<a class="cart__item-delete" href="#!">
								<span class="visually-hidden">Удалить товар.</span>
							</a>
						</p>
					</li>
				</ul>
				<div class="cart__tablet-wrap">
					<div class="cart__total total">
						<dl>
							<div class="total__wrap">
								<dt>Товары (2)</dt>
								<dd>4600₽</dd>
							</div>
							<div class="total__wrap">
								<dt>Скидка на товары (-4%)</dt>
								<dd><span>-184₽</span></dd>
							</div>
							<div class="total__wrap">
								<dt>Итого:</dt>
								<dd>4416₽</dd>
							</div>
						</dl>
						<button class="cart__go-pay" type="button">
							перейти к оформлению
						</button>
						<div class="cart__promocode">
							<input type="text" placeholder="Промокод на скидку" />
							<button class="cart__submit-promo" type="submit">
								Применить
							</button>
						</div>
					</div>
					<div class="cart__discount">
						<p>Ваша скидка:</p>
						<span>4%</span>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
.cart {
	padding: 55px 20px;
	padding-bottom: 120px;

	& picture {
		display: contents;
	}

	@media (min-width: 768px) {
		padding: 80px 54px;
		padding-bottom: 104px;
	}

	@media (min-width: 1440px) {
		padding: 89px 138px;
	}
}

.cart__title {
	margin: 0;
	margin-bottom: 31px;
	font-weight: 500;
	font-size: 24px;
	color: #222528;

	@media (min-width: 768px) {
		margin-bottom: 40px;
		font-size: 32px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 53px;
		font-size: 44px;
	}
}

.cart__list {
	margin: 0;
	margin-bottom: 40px;
	padding: 0;
	list-style: none;
}

.cart__item {
	display: grid;
	grid-template-columns: 87px 1fr;
	grid-template-rows: 81px 42px 30px;
	margin-bottom: 8px;
	padding: 17px 12px 15px 14px;
	column-gap: 15px;
	border: 1px solid #ced0d2;
	border-radius: 10px;

	& .tablet {
		display: none;
	}

	@media (min-width: 768px) {
		grid-template-columns: 131px 285px 1fr;
		grid-template-rows: 77px 42px;
		padding-top: 18px;
		padding-bottom: 24px;

		& .mobile {
			display: none;
		}

		& .tablet {
			display: block;
		}
	}

	@media (min-width: 1440px) {
		grid-template-columns: 170px 285px 85px 1fr;
		grid-template-rows: 114px 46px;
		box-sizing: border-box;
		width: 765px;
		margin-bottom: 24px;
		padding-bottom: 32px;
	}
}

.cart__img {
	grid-row: 1 / 3;
}

.cart__heading {
	margin: 0;
	font-weight: 500;
	font-size: 16px;
	color: #222528;

	@media (min-width: 1440px) {
		margin-top: 28px;
		font-size: 18px;
	}
}

.cart__article {
	margin: 0;
	font-size: 14px;
	color: #a5aaaf;

	@media (min-width: 768px) {
		font-size: 16px;
	}
}

.cart__count-product {
	display: flex;
	justify-content: flex-end;

	@media (min-width: 768px) {
		justify-content: start;
		margin-top: 5px;
	}

	@media (min-width: 1440px) {
		grid-column: 3 / 4;
		grid-row: 1 / 1;
		margin-top: 28px;
	}
}

.cart__btn-less,
.cart__btn-more {
	width: 16px;
	height: 20px;
	padding: 0;
	background-color: #ffffff;
	border: none;
	border: 1px solid #a5aaaf;
	border-radius: 4px;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 30px;
		height: 40px;
	}

	@media (min-width: 1440px) {
		width: 20px;
		height: 34px;
	}
}

.cart__btn-less {
	border-right: none;
	border-top-left-radius: none;
	border-bottom-left-radius: none;
}

.cart__btn-more {
	border-left: none;
	border-top-right-radius: none;
	border-bottom-right-radius: none;
}

.cart__input {
	width: 20px;
	height: 16px;
	text-align: center;
	border: 1px solid #a5aaaf;
	border-right: none;
	border-left: none;

	@media (min-width: 768px) {
		height: 36px;
	}

	@media (min-width: 1440px) {
		width: 21px;
		height: 30px;
	}
}

.cart__price {
	display: flex;
	margin: 0;
	font-weight: 500;

	&--old {
		margin-right: 7px;
		color: #a5aaaf;
		text-decoration: line-through;

		@media (min-width: 768px) {
			margin-bottom: 7px;
			font-size: 17px;
		}

		@media (min-width: 1440px) {
			margin-bottom: 0;
			font-size: 19px;
		}
	}

	&--new {
		color: #db4e66;

		@media (min-width: 768px) {
			font-size: 20px;
		}

		@media (min-width: 1440px) {
			font-size: 24px;
		}
	}

	@media (min-width: 768px) {
		flex-direction: column;
		grid-column: 3 / -1;
		grid-row: 1 / 1;
		margin-top: 28px;
	}

	@media (min-width: 1440px) {
		grid-column: 4 / -1;
	}
}

.cart__item-delete {
	position: relative;
	display: inline-block;
	width: 30px;
	height: 19px;
	margin-left: auto;

	&::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 3px;
		width: 16px;
		height: 19px;
		background-image: url('images/icons/trash.svg');
	}

	@media (min-width: 768px) {
		top: 51px;
		right: 3px;
	}

	@media (min-width: 1440px) {
		&::before {
			top: 5px;
			left: 3px;
		}
	}
}

.cart__tablet-wrap {
	display: contents;

	@media (min-width: 768px) {
		display: flex;
		gap: 30px;
	}

	@media (min-width: 1440px) {
		flex-direction: column;
	}
}

.cart__desktop-wrap {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		gap: 35px;
	}
}

.cart__total {
	margin-bottom: 16px;
	padding: 42px 29px 23px 30px;
	padding-bottom: 18px;
	border: 1px solid #ced0d2;
	border-radius: 12px;

	@media (min-width: 768px) {
		box-sizing: border-box;
		width: 315px;
		padding: 40px 20px;
		padding-bottom: 20px;
	}

	@media (min-width: 1440px) {
		box-sizing: border-box;
		width: 365px;
		padding: 34px 29px 48px 30px;
	}
}

.total dl {
	margin: 0;
	padding: 0;
}

.total__wrap {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	&:nth-child(3) {
		margin-top: 19px;
		margin-bottom: 63px;
	}

	& dt {
		padding: 0;
		font-weight: 400;
	}

	& dd {
		margin: 0;
		padding: 0;
		font-weight: 400;
	}

	& dt:nth-child(3),
	& dd:nth-child(3) {
		font-weight: 500;
	}

	& span {
		color: #db4e66;
	}
}

.cart__go-pay {
	width: 276px;
	padding: 18px 30px;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #db4e66;
	border: none;
	border-radius: 12px;
}

.cart__promocode {
	width: 274px;
	margin-top: 16px;
	padding-top: 22px;
	border-top: 1px solid #ced0d2;

	& input {
		box-sizing: border-box;
		width: 162px;
		padding: 12px 10px;
		font-size: 15px;
		color: #a5aaaf;
		border: 1px solid #ced0d2;
		border-top-left-radius: 11px;
		border-bottom-left-radius: 11px;
	}
}

.cart__submit-promo {
	width: 112px;
	padding: 15px 10px;
	padding-bottom: 14px;
	font-weight: 500;
	color: #222528;
	text-transform: uppercase;
	background-color: #e8eceb;
	border: none;
	border-top-right-radius: 11px;
	border-bottom-right-radius: 11px;
}

.cart__discount {
	padding-bottom: 12px;
	background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
	border-radius: 14px;

	& p {
		position: relative;
		margin: 0;
		padding-top: 38px;
		padding-bottom: 2px;
		font-size: 20px;
		text-align: center;
		color: #fafaf9;

		&::before {
			content: '';
			position: absolute;
			top: 12px;
			left: 159px;
			width: 18px;
			height: 22px;
			background-image: url('/images/icons/fire.svg');
			background-repeat: no-repeat;
		}
	}

	& span {
		display: block;
		box-sizing: border-box;
		width: 59px;
		height: 32px;
		margin-right: auto;
		margin-left: auto;
		padding: 4px 5px;
		font-weight: 500;
		font-size: 20px;
		text-align: center;
		color: #db4e66;
		background-color: #fafaf9;
		border-radius: 30px;
	}

	@media (min-width: 768px) {
		box-sizing: border-box;
		width: 315px;
		height: 167px;

		& p {
			padding-top: 73px;
			padding-bottom: 8px;

			&::before {
				top: 23px;
				left: 140px;
				width: 33px;
				height: 41px;
			}
		}

		& span {
			width: 101px;
			height: 40px;
			padding-top: 6px;
			font-size: 24px;
		}
	}
}
</style>
