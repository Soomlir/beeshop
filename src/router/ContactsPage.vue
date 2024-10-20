<script setup>
import SocialLink from '@/components/blocks/SocialLink.vue';
</script>

<template>
	<div class="breadcrumbs">
			<ul>
				<li><a href="#!">Главная</a></li>
				<li><a href="#!">Контакты</a></li>
			</ul>
		</div>
	<section class="contacts">
		<h1 class="contacts__title">Контакты</h1>
		<p class="contacts__phone">8 (000) 000 00 00</p>
		<p class="contacts__text">Вопросы, замечания и предложения:</p>
		<p class="contacts__email">pchelkashop.ru@mail.ru</p>
		<p class="contacts__info">
			ИП Степанова Е.П.<br />
			ИНН: 233610716405<br />
			ОГРН: 319237500017172
		</p>
		<p class="contacts__address-title">Адрес производства:</p>
		<p class="contacts__address">
			РФ, 353585, Краснодарский край, Славянский район,<br class="tablet" />
			х. Колесников, <br class="mobile" />ул. Магистральная, 18
		</p>
		<ul class="contacts__social">
			<li>
				<SocialLink />
			</li>
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
	</section>
</template>

<style lang="scss">
.breadcrumbs {
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		padding: 36px 138px;
		padding-bottom: 23px;
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

.contacts {
	margin-bottom: 73px;
	padding: 56px 22px;

	@media (min-width: 768px) {
		margin-bottom: 46px;
		padding: 80px 54px;
	}

	@media (min-width: 1440px) {
		padding: 89px 138px;
	}
}

.contacts__title {
	margin: 0;
	margin-bottom: 42px;
	font-weight: 500;
	font-size: 28px;
	color: #222528;

	@media (min-width: 768px) {
		margin-bottom: 66px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 83px;
		font-size: 44px;
	}
}

.contacts__phone {
	position: relative;
	margin: 0;
	margin-bottom: 46px;
	padding-left: 31px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 21px;
		height: 21px;
		background-image: url('../images/icons/phone-contact.svg');
	}

	@media (min-width: 1440px) {
		margin-bottom: 56px;
		padding-left: 54px;
		font-size: 31px;

		&::before {
			top: -1px;
			left: 3px;
			width: 39px;
			height: 39px;
			background-image: url('../images/icons/phone-contact-desktop.svg');
		}
	}
}

.contacts__text {
	margin: 0;
	margin-bottom: 4px;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 1440px) {
		margin-bottom: 9px;
	}
}

.contacts__email {
	position: relative;
	margin: 0;
	margin-bottom: 41px;
	padding-left: 31px;
	font-size: 19px;
	color: #222528;

	&::before {
		content: '';
		position: absolute;
		top: 2px;
		left: -1px;
		width: 23px;
		height: 19px;
		background-image: url('../images/icons/email-contact.svg');
	}

	@media (min-width: 1440px) {
		margin-bottom: 57px;
		padding-left: 46px;
		font-size: 25px;

		&::before {
			top: 5px;
			left: 3px;
			width: 30px;
			height: 24px;
			background-image: url('../images/icons/email-contact-desktop.svg');
		}
	}
}

.contacts__info {
	margin: 0;
	margin-bottom: 43px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;

	@media (min-width: 1440px) {
		margin-bottom: 53px;
		font-size: 24px;
		line-height: 32px;
	}
}

.contacts__address-title {
	margin: 0;
	margin-bottom: 12px;
	font-size: 16px;
	color: #5b636b;
}

.contacts__address {
	margin: 0;
	margin-bottom: 54px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;

	& .mobile {
		display: block;
	}

	& .tablet {
		display: none;
	}

	@media (min-width: 768px) {
		& .mobile {
			display: none;
		}

		& .tablet {
			display: block;
		}
	}

	@media (min-width: 1440px) {
		font-size: 24px;
	}
}

.contacts__social {
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: 24px;

	& a {
		width: 52px;
		height: 52px;
	}
}
</style>
