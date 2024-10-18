<script setup>
import SocialLink from '@/components/blocks/SocialLink.vue';
</script>

<template>
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
			РФ, 353585, Краснодарский край, Славянский район, х. Колесников, ул.
			Магистральная, 18
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
.contacts {
	padding: 56px 22px;
}

.contacts__title {
	margin: 0;
	margin-bottom: 42px;
	font-weight: 500;
	font-size: 28px;
	color: #222528;
}

.contacts__phone {
	margin: 0;
	margin-bottom: 46px;
	padding-left: 31px;
	font-weight: 500;
	color: #222528;
}

.contacts__text {
	margin: 0;
	font-size: 16px;
	color: #5b636b;
}
</style>
