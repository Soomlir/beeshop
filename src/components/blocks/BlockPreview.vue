<template>
	<section class="preview">
		<h2 class="visually-hidden">Видео о наших играх</h2>
		<div class="preview__box">
			<button class="preview__button-play">
				<span class="visually-hidden">Проиграть видео.</span>
			</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.preview {
	padding: 223px 20px;
	padding-bottom: 155px;
	background-image: url('/images/preview-bg.jpg');
	background-repeat: no-repeat;
	background-position: 0 63px;

	@media (min-width: 768px) {
		padding: 285px 169px;
		padding-bottom: 200px;
		background-image: url('/images/preview-bg-tablet.jpg');
		background-position: 0 98px;
	}

	@media (min-width: 1440px) {
		padding: 408px 337px 256px;
		background-image: url('/images/preview-bg-desktop.jpg');
		background-position: 0 82px;
	}
}

.preview__box {
	display: flex;
	width: 335px;
	height: 184px;
	background-color: #f1f1f1;
	border-radius: 8px;

	@media (min-width: 768px) {
		width: 429px;
		height: 236px;
	}

	@media (min-width: 1440px) {
		width: 765px;
		height: 420px;
	}
}

.preview__button-play {
	width: 31px;
	height: 31px;
	margin: auto;
	background-image: url('/images/icons/play-btn.svg');
	background-repeat: no-repeat;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		scale: 1.2;
	}

	@media (min-width: 768px) {
		width: 40px;
		height: 40px;
		background-size: 40px;
	}

	@media (min-width: 1440px) {
		width: 70px;
		height: 70px;
		background-image: url('/images/icons/play-btn-desktop.svg');
		background-size: 70px;
	}
}
</style>
