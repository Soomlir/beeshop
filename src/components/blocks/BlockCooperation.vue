<script setup>
import SocialLink from '@/components/blocks/SocialLink.vue';
</script>

<template>
	<div class="breadcrumbs">
		<ul>
			<li><a href="#!">Главная</a></li>
			<li><a href="#!">Сотрудничество</a></li>
		</ul>
	</div>
	<section class="cooperation">
		<h1 class="cooperation__title">Сотрудничество</h1>
		<p class="cooperation__info">
			Информация о сотрудничестве для оптовых покупателей<br />
			и блогеров
		</p>
		<ul class="cooperation__list">
			<li class="cooperation__item">
				<p class="cooperation__heading">
					Хотите выгодно приобрести игры для организации или мероприятия?<br />
					Просто оставьте заявку.
				</p>
				<p class="cooperation__text">
					Наш оператор свяжется с Вами в ближайшее время и поможет:
				</p>
				<ul class="features__list">
					<li class="features__item">
						Выбрать игры, определиться с количеством и узнать специальную цену.
					</li>
					<li class="features__item">
						Узнать о каждой игре и подобрать то, что нужно именно вашему
						коллективу или ученикам.
					</li>
					<li class="features__item">
						Получить самые выгодные скидки, которые действуют у нас. Например,
						15% для группового заказа от школы<br class="desktop" />
						или организации
					</li>
					<li class="features__item">
						Оформить наиболее удобный способ доставки - курьером, транспортной
						компанией, почтой или самовывозом<br />
						Вы можете просто позвонить нам по телефону +7 ()
					</li>
				</ul>
				<div class="cooperation__contacts">
					<p class="cooperation__contact-text">
						Или связаться с нами через мессенджеры
					</p>
					<ul class="cooperation__social">
						<li>
							<SocialLink />
						</li>
						<li>
							<SocialLink />
						</li>
						<li>
							<SocialLink />
						</li>
					</ul>
				</div>
			</li>
			<li class="cooperation__item">
				<p class="cooperation__heading-inner">
					Вам нравится наш продукт?<br class="tablet" />
					Расскажите о нём и получите<br class="mobile" />
					его бесплатно!
				</p>
				<p class="cooperation__paragraph">Сотрудничество для блогеров</p>
				<p class="cooperation__steps">
					Это возможно в рамках сотрудничества по одобренной заявке. <br />Этапы
					сотрудничества:
				</p>
				<ul class="algorithm__list">
					<li class="algorithm__item">
						1. Вы выбираете продукты, о котором/ых хотите написать/снять
						видео-обзор или статью.
					</li>
					<li class="algorithm__item">
						2. Направляете заявку с указанием желаемого продукта, ссылкой на
						вашу площадку и показателям статистики просмотров/вовлечённости,
						половозрастному распределению аудиторию.
					</li>
					<li class="algorithm__item">
						3. Для крупных блогеров будут рассмотрены индивидуальные условия
						сотрудничества.
					</li>
				</ul>
				<div class="cooperation__contacts">
					<p class="cooperation__order">
						Заявки отправляйте на почту <span>pchelkashop.ru@mail.ru</span> с
						темой письма <span>«Блогер»</span> или в мессенджер:
					</p>
					<ul class="cooperation__social">
						<li>
							<SocialLink />
						</li>
						<li>
							<SocialLink />
						</li>
						<li>
							<SocialLink />
						</li>
					</ul>
				</div>
			</li>
			<li class="cooperation__item">
				<p class="cooperation__partner">Хотите стать партнером?</p>
				<p class="cooperation__features">
					Для магазинов, сетей, настольных клубов, СП
				</p>
				<p class="cooperation__list-title">
					Преимущества сотрудничества с нами:
				</p>
				<ul class="cooperation__list-features">
					<li class="cooperation__item-features">
						Приобретение товаров напрямую у производителя. Мы несем
						ответственность за своё производство и тщательно следим за качеством
						своей продукции
					</li>
					<li class="cooperation__item-features">
						Отстройка от конкурентов. Используются оригинальные авторские
						механики игр и небанальный игровой реквизит.
					</li>
					<li class="cooperation__item-features">
						Высокая маржинальность продукции и свободная розничная цена для
						оптовых партнеров.
					</li>
					<li class="cooperation__item-features">
						Гибкая система скидок для постоянных партнеров.
					</li>
					<li class="cooperation__item-features">
						Доступная минимальная сумма для оптового заказа - 12000 рублей.
					</li>
					<li class="cooperation__item-features">
						Предоставление всех сертификатов и нормативных документов.
					</li>
					<li class="cooperation__item-features">
						Предоставление фото и видео материалов продукции, в том числе с
						рекламных контент съемок с моделями.
					</li>
					<li class="cooperation__item-features">
						Бесплатная доставка до транспортной компании и помощь в логистике:
						подбор и контроль выполнения работ транспортной компанией,
						соблюдение сроков доставки.
					</li>
					<li class="cooperation__item-features">
						Повышенные скидки на предзаказ и ограниченный тираж
					</li>
				</ul>
			</li>
		</ul>

		<p class="cooperation__accent">
			<span>Начните продавать</span> трендовые игры уже завтра, пока до нас не
			добрались Ваши конкуренты!
		</p>
	</section>
	<section class="feedback-form">
		<h2 class="visually-hidden">Обратная заявка</h2>
		<p class="feedback-form__title">
			Оставьте заявку для сотрудничества и запросите прайс-лист
		</p>
		<p class="feedback-form__text">
			Наш оператор свяжется с Вами в ближайшее время
		</p>

		<form class="feedback__form" action="/">
			<label>
				<p>Фамилия<span>*</span></p>
				<input type="text" name="lastName" placeholder="Иванова" />
			</label>
			<label>
				<p>Имя<span>*</span></p>
				<input type="text" name="name" placeholder="Алена" />
			</label>
			<label>
				<p>Отчество<span>*</span></p>
				<input type="text" name="name2" placeholder="Николаевна" />
			</label>
			<label>
				<p>Наименование юр.лица<span>*</span></p>
				<input type="text" name="lawyer" />
			</label>
			<label>
				<p>Номер телефона<span>*</span></p>
				<input type="tel" name="tel" placeholder="+7 -" />
			</label>
			<label>
				<p>E-mail<span>*</span></p>
				<input type="email" name="email" />
			</label>
			<div>
				<p>Способ реализации продукции<span>*</span></p>
				<select class="feedback__form-select">
					<option>Розничный магазин</option>
					<option>Розничная сеть</option>
					<option>Интернет-магазин</option>
					<option>СП</option>
					<option>Другое</option>
				</select>
			</div>
			<button class="feedback__form-submit" type="submit">
				Оставить заявку
			</button>
		</form>
	</section>
</template>

<style scoped lang="scss">
.cooperation {
	margin-bottom: 33px;
	padding: 55px 20px;

	@media (min-width: 768px) {
		padding: 80px 54px;
		padding-bottom: 13px;
	}

	@media (min-width: 1440px) {
		max-width: 1440px;
		margin-right: auto;
		margin-bottom: 0;
		margin-left: auto;
		padding: 52px 138px;
		padding-bottom: 106px;
	}
}

.breadcrumbs {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		padding: 36px 138px;
		padding-bottom: 59px;
		border-bottom: 1px solid #a5aaaf;

		& ul {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		& li {
			position: relative;
			padding-right: 28px;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 7px;
				width: 9px;
				height: 15px;
				background-image: url('/public/images/icons/arrow-breadcrumb.svg');
			}

			&:last-child::after {
				display: none;
			}
		}

		& a {
			color: #a5aaaf;
			text-decoration: none;
		}
	}
}

.cooperation__title {
	margin: 0;
	margin-bottom: 24px;
	font-weight: 500;
	font-size: 28px;
	color: #222528;

	@media (min-width: 768px) {
		font-size: 32px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 32px;
		font-size: 44px;
	}
}

.cooperation__info {
	margin: 0;
	margin-bottom: 48px;
	font-weight: 500;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 65px;
		margin-left: 3px;
		font-size: 20px;
	}

	@media (min-width: 1440px) {
		margin-left: 0;
		font-size: 18px;

		& br {
			display: none;
		}
	}
}

.cooperation__heading {
	margin: 0;
	margin-bottom: 25px;

	@media (min-width: 768px) {
		position: relative;
		margin-bottom: 41px;
		padding-left: 43px;

		&::before {
			content: '1';
			position: absolute;
			top: 3px;
			left: 8px;
			font-size: 34px;
			color: #f2b236;
		}
	}

	@media (min-width: 1440px) {
		padding-left: 49px;

		&::before {
			top: 1px;
			left: 3px;
			font-size: 47px;
		}
	}
}

.cooperation__text {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;

	@media (min-width: 768px) {
		margin-bottom: 23px;
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.cooperation__list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.cooperation__item {
	font-weight: 500;
	font-size: 20px;
	color: #222528;

	@media (min-width: 1440px) {
		font-size: 24px;
	}
}

.features__list {
	margin: 0;
	margin-bottom: 16px;
	padding: 0;
	padding-left: 27px;
	list-style: none;

	@media (min-width: 768px) {
		margin-bottom: 32px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 24px;
		padding-left: 0;
	}
}

.features__item {
	position: relative;
	padding-left: 30px;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #222528;

	& .desktop {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		top: 7px;
		left: 6px;
		width: 10px;
		height: 10px;
		background-color: #f2b236;
		border-radius: 50%;
	}

	@media (min-width: 768px) {
		&::before {
			top: 6px;
			left: 11px;
		}
	}

	@media (min-width: 1440px) {
		padding-left: 36px;

		& .desktop {
			display: block;
		}

		&::before {
			top: 5px;
			left: 13px;
			width: 13px;
			height: 13px;
		}
	}
}

.cooperation__contacts {
	margin-bottom: 64px;

	@media (min-width: 768px) {
		margin-bottom: 65px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 66px;
	}
}

.cooperation__contact-text {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;
	color: #90c1bf;

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.cooperation__social {
	display: flex;
	margin: 0;
	margin-left: 2px;
	padding: 0;
	list-style: none;

	& li {
		margin-right: 16px;
	}
}

.cooperation__heading-inner {
	margin: 0;
	margin-bottom: 8px;

	& .mobile {
		display: none;
	}

	@media (min-width: 768px) {
		position: relative;
		padding-left: 43px;

		&::before {
			content: '2';
			position: absolute;
			top: 0;
			left: 6px;
			font-size: 34px;
			color: #f2b236;
		}

		& .mobile {
			display: none;
		}

		& .tablet {
			display: block;
		}
	}

	@media (min-width: 1440px) {
		margin-bottom: 4px;
		padding-left: 50px;

		&::before {
			left: 1px;
			font-size: 47px;
		}
	}
}

.cooperation__paragraph {
	margin: 0;
	margin-bottom: 24px;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 41px;
		margin-left: 43px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 39px;
		margin-left: 50px;
		font-size: 18px;
	}
}

.cooperation__steps {
	margin: 0;
	margin-bottom: 15px;
	font-size: 16px;
	color: #222528;

	@media (min-width: 768px) {
		margin-bottom: 24px;
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.algorithm__list {
	margin: 0;
	margin-bottom: 17px;
	padding: 0;
	padding-left: 58px;
	list-style: none;
	font-size: 16px;
	line-height: 26px;
	color: #222528;

	@media (min-width: 768px) {
		margin-bottom: 32px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 39px;
	}
}

.cooperation__order {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;
	color: #222528;

	& span {
		color: #db4e66;
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.cooperation__partner {
	margin: 0;
	margin-bottom: 9px;

	@media (min-width: 768px) {
		position: relative;
		padding-left: 43px;

		&::before {
			content: '3';
			position: absolute;
			top: 2px;
			left: 4px;
			font-size: 34px;
			color: #f2b236;
		}
	}

	@media (min-width: 1440px) {
		margin-bottom: 4px;
		margin-left: 6px;
		padding-top: 8px;

		&::before {
			top: 0;
			left: -8px;
			font-size: 47px;
		}
	}
}

.cooperation__features {
	margin: 0;
	margin-bottom: 21px;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 40px;
		padding-left: 43px;
	}

	@media (min-width: 1440px) {
		padding-left: 48px;
		font-size: 18px;
	}
}

.cooperation__list-title {
	margin: 0;
	margin-bottom: 22px;
	font-size: 16px;
	color: #222528;

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.cooperation__list-features {
	margin-bottom: 34px;
	padding-left: 29px;
	list-style: none;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #222528;

	@media (min-width: 768px) {
		padding-left: 28px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 41px;
		padding-left: 0;
	}
}

.cooperation__item-features {
	position: relative;
	padding-left: 30px;

	&::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 3px;
		width: 10px;
		height: 10px;
		background-color: #f2b236;
		border-radius: 50%;
	}

	@media (min-width: 768px) {
		&::before {
			top: 9px;
			left: 10px;
		}
	}

	@media (min-width: 1440px) {
		padding-left: 36px;

		&::before {
			top: 8px;
			left: 13px;
			width: 13px;
			height: 13px;
		}
	}
}

.cooperation__accent {
	margin: 0;
	font-weight: 500;
	font-size: 16px;
	color: #db4e66;

	& span {
		font-weight: 500;
		font-size: 20px;
	}

	@media (min-width: 1440px) {
		font-size: 18px;

		& span {
			font-size: 24px;
		}
	}
}

.feedback-form {
	margin-bottom: 120px;
	padding: 52px 30px;
	font-weight: 500;
	color: #fafaf9;
	background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);

	@media (min-width: 768px) {
		margin-bottom: 120px;
		padding-top: 67px;
		padding-bottom: 79px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 242px;
		padding-top: 62px;
		padding-bottom: 74px;
	}
}

.feedback-form__title {
	margin: 0;
	margin-bottom: 16px;
	font-size: 20px;
	text-align: center;

	@media (min-width: 1440px) {
		font-size: 24px;
	}
}

.feedback-form__text {
	margin: 0;
	margin-bottom: 35px;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	text-align: center;

	@media (min-width: 768px) {
		margin-bottom: 34px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 18px;
	}
}

.feedback__form {
	padding-bottom: 64px;
	font-weight: 400;

	& label {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 18px;
	}

	& p {
		margin: 0;
		margin-bottom: 10px;

		& span {
			color: #db4e66;
		}
	}

	& input {
		width: 100%;
		padding: 11px 10px;
		font-size: 14px;
		border: none;
		border-radius: 6px;

		&::placeholder {
			font-size: 14px;
			color: #ced0d2;
		}
	}

	@media (min-width: 768px) {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 315px 315px;
		grid-template-rows: 56px 56px 56px 56px;
		margin-bottom: 0;
		padding: 24px 25px;
		padding-bottom: 0;
		gap: 30px;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 329px 329px;
		width: 729px;
		margin-right: auto;
		margin-left: auto;
		column-gap: 71px;

		& input[type='tel'] {
			width: 209px;
		}
	}
}

.feedback__form-select {
	width: 100%;
	margin-bottom: 32px;
	padding: 11px 10px;
	font-size: 14px;
	background: #f9f9f9;
	border: none;
	border-radius: 6px;

	&::placeholder {
		font-size: 14px;
		color: #ced0d2;
	}
}

.feedback__form-submit {
	width: 276px;
	margin-left: 18px;
	padding: 18px 20px;
	font-weight: 500;
	font-size: 15px;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #db4e66;
	border: none;
	border-radius: 13px;

	@media (min-width: 768px) {
		grid-column: 1/-1;
		grid-row: 5/6;
		margin-top: 30px;
		margin-left: 190px;
	}

	@media (min-width: 1440px) {
		margin-top: 38px;
		margin-left: 211px;
	}
}
</style>
