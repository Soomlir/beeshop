<script setup>
import SocialLink from '@/components/blocks/SocialLink.vue';
</script>

<template>
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
						15% для группового заказа от школы или организации
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
					Вам нравится наш продукт? Расскажите о нём и получите<br />
					его бесплатно!
				</p>
				<p class="cooperation__paragraph">Сотрудничество для блогеров</p>
				<p class="cooperation__steps">
					Это возможно в рамках сотрудничества по одобренной заявке. <br />Этапы
					сотрудничества:
				</p>
				<ol class="algorithm__list">
					<li class="algorithm__item">
						Вы выбираете продукт/ы, о котором/ых хотите написать/снять
						видео-обзор или статью.
					</li>
					<li class="algorithm__item">
						Направляете заявку с указанием желаемого продукта, ссылкой на вашу
						площадку и показателям статистики просмотров/вовлечённости,
						половозрастному распределению аудиторию.
					</li>
					<li class="algorithm__item">
						Для крупных блогеров будут рассмотрены индивидуальные условия
						сотрудничества.
					</li>
				</ol>
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
				<p class="cooperation__list-title">Преимущества сотрудничества с нами:</p>
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
			<span>Начните продавать</span> трендовые игры уже завтра, пока до нас не добрались Ваши
			конкуренты!
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
				<input type="text" name="lastName" placeholder="Иванова">
			</label>
			<label>
				<p>Имя<span>*</span></p>
				<input type="text" name="name" placeholder="Алена">
			</label>
			<label>
				<p>Отчество<span>*</span></p>
				<input type="text" name="name2" placeholder="Николаевна">
			</label>
			<label>
				<p>Наименование юр.лица<span>*</span></p>
				<input type="text" name="lawyer">
			</label>
			<label>
				<p>Номер телефона<span>*</span></p>
				<input type="tel" name="tel" placeholder="+7 -">
			</label>
			<label>
				<p>E-mail<span>*</span></p>
				<input type="email" name="email">
			</label>
			<p>Способ реализации продукции<span>*</span></p>
			<select class="feedback__form-select">
				<option>Розничный магазин</option>
				<option>Розничная сеть</option>
				<option>Интернет-магазин</option>
				<option>СП</option>
				<option>Другое</option>
			</select>
			<button type="submit">Оставить заявку</button>
		</form>
	</section>
</template>

<style scoped lang="scss">
.cooperation {
	margin-bottom: 28px;
	padding: 55px 20px;
}

.cooperation__title {
	margin: 0;
	margin-bottom: 24px;
	font-weight: 500;
	font-size: 28px;
	color: #222528;
}

.cooperation__info {
	margin: 0;
	margin-bottom: 48px;
	font-weight: 500;
	font-size: 16px;
	color: #5b636b;
}

.cooperation__heading {
	margin: 0;
	margin-bottom: 25px;
}

.cooperation__text {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;
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
}

.features__list {
	margin: 0;
	margin-bottom: 14px;
	padding: 0;
	padding-left: 57px;
	list-style: circle;
}

.features__item {
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #222528;
}

.cooperation__contacts {
	margin-bottom: 64px;
}

.cooperation__contact-text {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;
	color: #90c1bf;
}

.cooperation__social {
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
}

.cooperation__heading-inner {
	margin: 0;
	margin-bottom: 8px;
}

.cooperation__paragraph {
	margin: 0;
	margin-bottom: 24px;
	font-size: 16px;
	color: #5b636b;
}

.cooperation__steps {
	margin: 0;
	margin-bottom: 15px;
	font-size: 16px;
	color: #222528;
}

.algorithm__list {
	margin: 0;
	margin-bottom: 43px;
	padding: 0;
	padding-left: 58px;
	font-size: 16px;
	line-height: 26px;
	color: #222528;
}

.cooperation__order {
	margin: 0;
	margin-bottom: 16px;
	font-size: 16px;
	color: #222528;

	& span {
		color: #db4e66;
	}
}

.cooperation__partner {
	margin: 0;
	margin-bottom: 9px;
}

.cooperation__features {
	margin: 0;
	margin-bottom: 21px;
	font-size: 16px;
	color: #5b636b;
}

.cooperation__list-title {
	margin: 0;
	margin-bottom: 22px;
	font-size: 16px;
	color: #222528;
}

.cooperation__list-features {
	margin-bottom: 30px;
	padding-left: 59px;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #222528;
}

.cooperation__accent {
	margin: 0;
	font-weight: 500;
	font-size: 18px;
	color: #db4e66;

	& span {
		font-size: 20px;
	}
}

.feedback-form {
	padding: 52px 30px;
	font-weight: 500;
	color: #fafaf9;
	background: linear-gradient(92.55deg, #f2b236 32.31%, #ff9c1a 64.34%);
}

.feedback-form__title {
	margin: 0;
	margin-bottom: 16px;
	font-size: 20px;
	text-align: center;
}

.feedback-form__text {
	margin: 0;
	margin-bottom: 33px;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	text-align: center;
}

.feedback__form {
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
}

.feedback__form-select {
	width: 100%;
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
</style>
