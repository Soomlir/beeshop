<script setup></script>

<template>
	<main class="main">
		<section class="order">
			<h1 class="visually-hidden">Детали доставки и оплаты</h1>
			<p class="order__text">
				Если у вас возникли сложности с оформлением заказа — будем рады принять
				его по телефону<br class="mobile" />
				8 (000) 000-00-00
			</p>
			<p class="order__details">Детали доставки и оплаты</p>
			<form class="order__form" action="/">
				<fieldset class="order__fieldset">
					<label class="order__label">
						<p class="order__label-name">Фамилия<span>*</span></p>
						<input
							class="order__input"
							type="text"
							name="lastName"
							placeholder="Иванова"
						/>
					</label>
					<label class="order__label">
						<p class="order__label-name">Имя<span>*</span></p>
						<input
							class="order__input"
							type="text"
							name="name"
							placeholder="Алена"
						/>
					</label>
					<label class="order__label">
						<p class="order__label-name">Отчество<span>*</span></p>
						<input
							class="order__input"
							type="text"
							name="fatherName"
							placeholder="Николаевна"
						/>
					</label>
					<label class="order__label order__label--address">
						<p class="order__address">Адрес доставки<span>*</span></p>
						<input
							class="order__input"
							type="text"
							name="address"
							placeholder="Город, улица, дом, корпус, квартира"
						/>
					</label>
					<input
						class="order__country"
						type="text"
						name="country"
						value="Россия"
						disabled
					/>
					<label class="order__label--index">
						<p class="order__post-index">Почтовый индекс<span>*</span></p>
						<input
							class="order__input"
							type="number"
							name="index"
							placeholder="900000"
						/>
					</label>
					<label class="order__phone">
						<p class="order__client-phone">Номер телефона<span>*</span></p>
						<input
							class="order__input"
							type="tel"
							name="tel"
							placeholder="+7 -"
						/>
					</label>
					<label class="order__email">
						<p class="order__client-email">E-mail<span>*</span></p>
						<input
							class="order__input"
							type="email"
							name="email"
							placeholder="Адрес эл. почты для чека"
						/>
					</label>
				</fieldset>
				<fieldset class="order__fieldset-games">
					<h2 class="order__game-title">Товары</h2>
					<p class="order__game-name">
						Настольная игра “Сказочное королевство” с дополненной реальностью,
						6+
					</p>
					<span class="order__game-price">2208₽</span>
					<p class="order__game-name">
						Настольная игра “Сказочное королевство” с дополненной реальностью,
						6+
					</p>
					<span class="order__game-price">2208₽</span>
				</fieldset>
				<fieldset class="order__fieldset-delivery">
					<h2 class="order__delivery-title">Доставка</h2>
					<p class="order__delivery-text">
						<input class="order__radio" type="radio" name="delivery" checked />
						Почта России до отделения <span>(450р)</span>
					</p>
					<p class="order__delivery-text">
						<input class="order__radio" type="radio" name="delivery" /> СДЭК до
						двери/склада
						<span>(000р)</span>
					</p>
					<div class="order__delivery-text order__delivery-city">
						<input
							class="order__radio order__radio--city"
							type="radio"
							name="delivery"
						/>
						<p>
							Курьером по <br />
							Славянску-на-Кубани
							<span>(бесплатно при заказе от 500р)</span>
						</p>
					</div>
				</fieldset>
				<p class="order__total">Итог &nbsp;<span>4866₽</span></p>
				<fieldset class="order__fieldset-pay">
					<h2 class="order__title-pay">Способ оплаты</h2>
					<p class="order__pay-wrap">
						<input class="order__radio" type="radio" name="pay" checked />Картой
						на сайте
					</p>
					<p class="order__pay-wrap">
						<input class="order__radio" type="radio" name="pay" />
						<span>Наличная/безналичная оплата курьеру при получении</span>
					</p>
					<ul class="order__cards">
						<li>
							<img src="/public/images/mir.jpg" width="75" height="22" alt="Mir.">
						</li>
						<li>
							<img src="/public/images/visa.jpg" width="65" height="22" alt="Visa.">
						</li>
						<li>
							<img src="/public/images/master.jpg" width="59" height="22" alt="MasterVisa.">
						</li>
					</ul>
				</fieldset>
				<button class="order__submit" type="submit">Перейти в каталог</button>
			</form>
			<p class="order__rules">
				Нажимая «Подтвердить заказ», вы соглашаетесь с
				<span>условиями использования</span> онлайн-магазина “НАЗВАНИЕ”. С
				подробными условиями доставки можно ознакомиться на странице о
				<span>доставке</span>
			</p>
		</section>
	</main>
</template>

<style scoped lang="scss">
.order {
	padding: 32px 20px;
	padding-bottom: 121px;

	@media (min-width: 768px) {
		padding: 56px 54px;
	}
}

.order__text {
	margin: 0;
	margin-bottom: 31px;
	font-weight: 500;
	color: #f2b236;

	& .mobile {
		display: block;
	}

	@media (min-width: 768px) {
		margin-bottom: 56px;

		& .mobile {
			display: none;
		}
	}
}

.order__details {
	margin: 0;
	margin-bottom: 24px;
	font-weight: 500;
	font-size: 20px;
	color: #222528;

	@media (min-width: 768px) {
		margin-bottom: 40px;
	}
}

.order__fieldset {
	margin: 0;
	margin-bottom: 16px;
	padding-top: 36px;
	padding-bottom: 44px;
	border-width: 1px;
	border-color: #ced0d2;
	border-radius: 14px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 284px 1fr;
		grid-template-rows: 76px 94px 70px;
		padding: 38px 31px;
		column-gap: 30px;
	}
}

.order__label {
	display: block;
	margin-bottom: 9px;

	@media (min-width: 768px) {
		&--address {
			grid-column: 1 / 2;
			grid-row: 3 / -1;
		}
	}
}

.order__label-name {
	margin: 0;
	padding-bottom: 8px;
	padding-left: 14px;
	color: #5b636b;

	@media (min-width: 768px) {
		padding-left: 0;

		& + input[name='name'] {
			width: 207px;
		}
	}
}

.order__input {
	width: 260px;
	margin-left: 14px;
	padding: 8px 10px;
	border: 1px solid #ced0d2;
	border-radius: 4px;

	&::placeholder {
		font-size: 14px;
		color: #ced0d2;
	}

	@media (min-width: 768px) {
		margin-left: 0;
	}
}

.order__address {
	margin-top: 52px;
	margin-bottom: 7px;
	margin-left: 14px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin: 0;
		margin-bottom: 8px;
	}
}

.order__country {
	box-sizing: border-box;
	width: 284px;
	height: 35px;
	margin-left: 14px;
	padding: 5px 10px;
	font-size: 16px;
	color: #a5aaaf;
	background-color: #e8eceb;
	border: none;
	border-radius: 4px;

	@media (min-width: 768px) {
		grid-column: 2 / -1;
		grid-row: 3 / -1;
		width: 230px;
		margin: 0;
		margin-top: 26px;
	}
}

.order__label--index {
	@media (min-width: 768px) {
		grid-row: 4 / 5;
	}
}

.order__post-index {
	margin: 0;
	margin-top: 8px;
	margin-bottom: 10px;
	margin-left: 14px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin: 0;
		margin-top: 7px;
		margin-bottom: 8px;

		& + input {
			width: 176px;
		}
	}
}

.order__phone {
	@media (min-width: 768px) {
		grid-row: 5 / 6;
	}
}

.order__email {
	@media (min-width: 768px) {
		grid-column: 2 / -1;
		grid-row: 5 / 6;
	}
}

.order__client-phone {
	margin: 0;
	margin-top: 31px;
	margin-bottom: 8px;
	margin-left: 14px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin: 0;
		margin-top: 31px;
		margin-bottom: 9px;

		& + input {
			width: 176px;
		}
	}
}

.order__client-email {
	margin: 0;
	margin-top: 9px;
	margin-bottom: 8px;
	margin-left: 14px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin: 0;
		margin-top: 32px;
		margin-bottom: 8px;

		& + input {
			width: 207px;
		}
	}
}

.order__fieldset-games {
	margin: 0;
	margin-bottom: 16px;
	padding: 27px 26px;
	padding-bottom: 10px;
	border-width: 1px;
	border-color: #ced0d2;
	border-radius: 14px;
}

.order__game-title {
	margin: 0;
	margin-bottom: 25px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;
}

.order__game-name {
	margin: 0;
	margin-bottom: 10px;
	line-height: 26px;
}

.order__game-price {
	display: block;
	margin-bottom: 20px;
	color: #db4e66;
}

.order__fieldset-delivery {
	margin: 0;
	margin-bottom: 24px;
	padding: 27px 26px;
	padding-right: 17px;
	padding-bottom: 55px;
	border-width: 1px;
	border-color: #ced0d2;
	border-radius: 14px;
}

.order__delivery-title {
	margin: 0;
	margin-bottom: 29px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;
}

.order__radio {
	position: relative;
	width: 15px;
	height: 15px;
	margin: 0;
	border: 1px solid #ced0d2;
	border-radius: 50%;
	appearance: none;

	&--city {
		margin-top: 5px;
	}

	&:checked::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		width: 11px;
		height: 11px;
		background-color: #db4e66;
		border-radius: 50%;
	}
}

.order__delivery-text {
	margin: 0;
	margin-bottom: 21px;

	& span {
		color: #db4e66;
	}
}

.order__delivery-city {
	display: grid;
	grid-template-columns: 20px 1fr;
	grid-template-rows: 50px;
	margin-bottom: 0;
	line-height: 26px;

	& p {
		margin: 0;
	}
}

.order__total {
	margin: 0;
	margin-bottom: 32px;
	margin-left: 236px;

	& span {
		font-weight: 500;
		color: #db4e66;
	}
}

.order__fieldset-pay {
	margin: 0;
	margin-bottom: 31px;
	padding: 27px 17px 34px 26px;
	border-width: 1px;
	border-color: #ced0d2;
	border-radius: 14px;
}

.order__title-pay {
	margin: 0;
	margin-bottom: 25px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;
}

.order__pay-wrap {
	display: grid;
	grid-template-columns: 20px 1fr;
	margin: 0;
	margin-bottom: 4px;
	line-height: 26px;

	& input {
		margin-top: 5px;
		color: #222528;
	}
}

.order__cards {
	display: flex;
	margin: 0;
	margin-top: 24px;
	padding: 0;
	list-style: none;

	& li {
		margin-right: 22px;
	}
}

.order__submit {
	width: 276px;
	padding: 18px 20px;
	font-weight: 500;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #db4e66;
	border: none;
	border-radius: 14px;
}

.order__rules {
	margin: 0;
	margin-top: 24px;
	font-size: 14px;
	color: #a5aaaf;

	& span {
		color: #222528;
	}
}
</style>
