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
	</section>
</template>

<style lang="scss" scoped>
.features {
	padding: 15px 20px;
}

.features__promo {
	margin: 0;
	margin-bottom: 55px;
	font-weight: 500;
	font-size: 32px;
}

.features__list {
	margin: 0;
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
	margin-bottom: 23px;
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
	}

	&--4::before {
		background-image: url('/images/icons/features-4.svg');
	}
}

.features__text {
	margin: 0;
}
</style>
