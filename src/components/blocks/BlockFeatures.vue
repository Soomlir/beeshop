<template>
	<section class="features">
		<h2 class="visually-hidden">Наши преимущества</h2>
		<p class="features__promo">Квест – возможность подарить детям незабываемые эмоции!</p>
		<ul class="features__list">
			<li class="features__item features__item--1">
				<p class="features__text">Объединяет семью и&nbsp;друзей в поисках одной разгадки!</p>
			</li>
			<li class="features__item features__item--2">
				<p class="features__text">Развивает логику и&nbsp;последовательное мышление!</p>
			</li>
			<li class="features__item features__item--3">
				<p class="features__text">Заменит аниматора на празднике и&nbsp;обеспечит мероприятие на 5+!</p>
			</li>
			<li class="features__item features__item--4">
				<p class="features__text">Все необходимое - уже есть в коробке!</p>
			</li>
		</ul>
		<a class="features__link">выбрать игру</a>
		<div class="features__contact-us contact-us">
			<p class="contact-us__text">Есть вопросы? Напишите нам</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.features {
	position: relative;
	margin-bottom: 20px;
	padding: 15px 20px;
	padding-bottom: 64px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

.features__promo {
	margin: 0;
	margin-bottom: 55px;
	font-weight: 500;
	font-size: 32px;
}

.features__list {
	margin: 0;
	margin-bottom: 54px;
	padding: 0;
	list-style: none;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #222528;
}

.features__item {
	position: relative;
	display: flex;
	align-items: center;
	min-height: 101px;
	margin-bottom: 25px;
	padding-left: 117px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 101px;
		height: 101px;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-position: 50%;
		border-radius: 14px;
		box-shadow: 0 4px 9px #dadada;
	}

	&--1::before {
		background-image: url('/images/icons/features-1.svg');
	}

	&--2::before {
		background-image: url('/images/icons/features-2.svg');
	}

	&--3::before {
		background-image: url('/images/icons/features-3.svg');
		background-position: 50% 100%;
	}

	&--4::before {
		background-image: url('/images/icons/features-4.svg');
	}
}

.features__text {
	margin: 0;
}

.features__link {
	display: table;
	box-sizing: border-box;
	width: 276px;
	padding: 17px 20px;
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	color: $base-white-color;
	text-transform: uppercase;
	background-color: #db4e66;
	border-radius: 12px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
}

.features__contact-us {
	position: absolute;
	bottom: -33px;
	left: 145px;
	z-index: 1;
	display: flex;
	box-sizing: border-box;
	width: 208px;
	padding-left: 69px;
	color: #222528;
	border-radius: 64px;
	box-shadow: 0 4px 9px #d3d3d3;

	&::before {
		content: '';
		position: absolute;
		top: 7px;
		left: 10px;
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
	padding: 18px 10px 14px;
	font-size: 16px;
	color: inherit;
}

</style>
