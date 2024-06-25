<template>
	<section class="reviews">
		<h2 class="reviews__title">Отзывы о наших играх</h2>
		<p class="reviews__heading">Последние отзывы</p>
		<a class="reviews__link" href="#!">Смотреть все отзывы</a>
		<div class="reviews__posts">
			<article
				class="reviews__post post"
				v-for="(item, i) in postData"
				:key="i"
			>
				<header class="post__header">
					<img
						class="post__image"
						src="/images/girl.svg"
						width="79"
						height="79"
						alt="Картинка автора."
					/>
					<p class="post__author-name">{{ item.authorName }}</p>
					<p class="post__date">{{ item.postDate }}</p>
					<p class="post__rating">
						<span class="post__rating-number">{{ item.postRating }}</span
						>/5<span class="post__star"></span>
					</p>
				</header>
				<p class="post__text">{{ item.postText }}</p>
				<a class="post__link" href="#!">Читать полностью</a>
			</article>
		</div>
	</section>
</template>

<script setup>
const postData = Array.from({ length: 3 }, () => ({
	authorName: 'Ирина Е.',
	postDate: '10-09-20',
	postRating: '5',
	postText: `Советую всем мамочкам и папочкам! Первый квест, который мы выбрали -
					Загадки Египетских пирамид. Играли, размышляли всей семьей! Это было
					действителньо очень занимательно!`,
}));
</script>

<style lang="scss" scoped>
.reviews {
	padding: 0 20px;
	padding-top: 68px;
	padding-bottom: 105px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 98px 55px 0;
	}
}

.reviews__title {
	margin: 0;
	margin-bottom: 7px;
	font-weight: 500;
	font-size: 32px;
	line-height: 38px;
	color: #222528;

	@media (min-width: 768px) {
		grid-column: span 2;
	}
}

.reviews__heading {
	margin: 0;
	margin-bottom: 57px;
	font-size: 16px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 0;
		padding-top: 44px;
		padding-left: 20px;
	}
}

.reviews__link {
	display: block;
	margin-bottom: 31px;
	font-weight: 500;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;

	@media (min-width: 768px) {
		justify-self: end;
		padding-top: 44px;
		padding-right: 11px;
		font-size: 16px;
	}
}

.reviews__posts {
	@media (min-width: 768px) {
		grid-column: span 2;
		padding-top: 11px;
	}
}

.post {
	margin-bottom: 13px;
	padding: 34px 20px 34px 19px;
	border-radius: 14px;
	box-shadow: 0 4px 9px #d3d3d3;

	@media (min-width: 768px) {
		padding: 36px 60px 0;
	}
}

.post__header {
	display: grid;
	grid-template-columns: 79px 1fr;
	grid-template-rows: 27px 22px 31px;
	margin-bottom: 23px;
	column-gap: 19px;

	@media (min-width: 768px) {
		grid-template-columns: 121px 1fr;
		grid-template-rows: 30px 43px 49px;
	}
}

.post__image {
	grid-row: span 3;
	margin-left: 3px;

	@media (min-width: 768px) {
		width: 121px;
		height: 121px;
		margin-left: 0;
	}
}

.post__author-name {
	margin: 0;
	font-weight: 500;
	font-size: 20px;
	color: #222528;

	@media (min-width: 768px) {
		padding-top: 2px;
		padding-left: 2px;
		font-size: 26px;
	}
}

.post__date {
	grid-column: 2 / -1;
	margin: 0;
	color: #a5aaaf;

	@media (min-width: 768px) {
		padding-top: 14px;
		padding-left: 5px;
	}
}

.post__rating {
	grid-column: 2 / -1;
	margin: 0;
	font-size: 17px;
	color: #f2b236;
}

.post__rating-number {
	font-size: 30px;

	@media (min-width: 768px) {
		padding-left: 4px;
		font-size: 41px;
	}
}

.post__star {
	display: inline-block;
	width: 90px;
	height: 18px;
	margin-left: 6px;
	background-image: url('/images/icons/star.svg');

	@media (min-width: 768px) {
		width: 131px;
		height: 25px;
		margin-left: 13px;
		background-image: url('/images/icons/star-tablet.svg');
	}
}

.post__text {
	margin: 0;
	font-size: 16px;
	color: #222528;
}

.post__link {
	font-size: 16px;
	color: #f2b236;
	text-decoration: none;
}
</style>
