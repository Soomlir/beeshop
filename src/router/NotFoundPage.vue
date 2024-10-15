<template>
	<main>
		<section class="notfound">
			<h1 class="visually-hidden">Страница не найдена</h1>
			<img
				class="notfound__image"
				src="/images/depressed.svg"
				width="200"
				height="200"
				alt="Грустная тучка."
			/>
			<div class="notfound__content">
				<p class="notfound__title">Тут ничего нет</p>
				<p class="notfound__text">
					Попробуйте вернуться назад или поищите что-нибудь другое.<br />
					Код ошибки: 404
				</p>
				<a class="notfound__link" href="#!">каталог игр</a>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.notfound {
	@media (min-width: 1440px) {
		max-width: 1440px;
		margin-right: auto;
		margin-left: auto;
		padding-bottom: 120px;
	}
}

.notfound__image {
	margin: 79px 88px 32px;

	@media (min-width: 768px) {
		margin: 100px 284px 31px;
	}

	@media (min-width: 1440px) {
		width: 365px;
		height: 365px;
		margin: 100px 538px 49px;
	}
}

.notfound__content {
	width: 270px;
	margin-right: auto;
	margin-left: auto;
	font-weight: 500;
	text-align: center;
	color: #222528;

	@media (min-width: 768px) {
		width: 520px;
	}

	@media (min-width: 1440px) {
		width: 620px;
	}
}

.notfound__title {
	margin: 0;
	margin-bottom: 16px;
	font-size: 28px;

	@media (min-width: 1440px) {
		font-size: 38px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 24px;
	}
}

.notfound__text {
	margin: 0;
	margin-bottom: 32px;
	font-size: 16px;

	@media (min-width: 768px) {
		margin-bottom: 41px;
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
}

.notfound__link {
	display: block;
	margin-bottom: 120px;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;

	@media (min-width: 1440px) {
		font-size: 16px;
	}
}
</style>
