<template>
	<section class="faq">
		<h2 class="faq__title">Часто задаваемые вопросы</h2>
		<div class="faq__contact-us contact-us">
			<p class="contact-us__text">Есть вопросы? Напишите нам</p>
		</div>
		<dl class="faq__list">
			<!-- <dt class="faq__termin" v-for="item of (6)">+ Что такое игра-квест?</dt> -->
			<dd class="faq__defination"></dd>
		</dl>
		<a class="faq__button" href="#!">Перейти в каталог</a>
	</section>
</template>

<style lang="scss" scoped>
.faq {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 0 4px 4px rgba(#000000, 25%);

	&::before {
		content: '';
		position: absolute;
		top: 41px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.25);
	}
}

.faq__title {
	order: 1;
	margin: 0;
	margin-bottom: 20px;
	font-weight: 500;
	font-size: 32px;
	color: #222528;
}

.faq__contact-us {
	position: relative;
	z-index: 1;
	display: flex;
	box-sizing: border-box;
	width: 208px;
	margin-bottom: 31px;
	margin-left: auto;
	padding-left: 69px;
	color: #222528;
	border-radius: 64px;
	box-shadow: 0 4px 9px #d3d3d3;

	&::before {
		content: '';
		position: absolute;
		top: 12px;
		left: 8px;
		z-index: 100;
		width: 59px;
		height: 59px;
		background-color: #90c1bf;
		background-image: url('/images/icons/marks.svg');
		background-repeat: no-repeat;
		background-position: 50%;
		border-radius: 50%;
	}
}

.contact-us__text {
	width: 114px;
	margin: 0;
	padding: 23px 8px 14px;
	font-size: 16px;
	color: inherit;
}

.faq__list {
	display: flex;
	flex-direction: column;
	order: 2;
	margin-bottom: 50px;
	font-weight: 500;
	font-size: 20px;
	color: #222528;
	gap: 6px;
}

.faq__termin {
	padding-top: 17px;
	padding-bottom: 24px;
	border-bottom: 1px solid #a5aaaf;
	cursor: pointer;
}

.faq__button {
	display: flex;
	order: 3;
	box-sizing: border-box;
	width: 276px;
	height: 50px;
	margin-bottom: 60px;
	padding: 16px 32px;
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	color: #fafaf9;
	text-transform: uppercase;
	text-decoration: none;
	background-color: #db4e66;
	border-radius: 12px;
	box-shadow: 2px 4px 9px #fbccd4;
}
</style>
