<template>
	<section class="features">
		<h2 class="visually-hidden">Наши преимущества</h2>
		<p class="features__promo">
			Квест – возможность подарить <br> детям незабываемые эмоции!
		</p>
		<ul class="features__list">
			<li class="features__item features__item--1">
				<p class="features__text">
					Объединяет семью и&nbsp;друзей<br />
					в поисках одной разгадки!
				</p>
			</li>
			<li class="features__item features__item--2">
				<p class="features__text">
					Развивает логику и&nbsp;последовательное мышление!
				</p>
			</li>
			<li class="features__item features__item--3">
				<p class="features__text">
					Заменит аниматора на празднике и&nbsp;обеспечит мероприятие на 5+!
				</p>
			</li>
			<li class="features__item features__item--4">
				<p class="features__text">
					Все необходимое - уже есть<br />
					в коробке!
				</p>
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
	padding: 15px 20px;
	padding-bottom: 23px;

	&::after {
		content: '';
		position: absolute;
		bottom: 65px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.25);
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 52px 55px 97px;

		&::before {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: rgba(0, 0, 0, 0.25);
		}

		&::after {
			display: none;
		}
	}

	@media (min-width: 1440px) {
		padding-top: 75px;
		padding-right: 137px;
		padding-left: 138px;
	}
}

.features__promo {
	margin: 0;
	margin-bottom: 55px;
	font-weight: 500;
	font-size: 32px;
	color: #222528;

	br {
		display: none;
	}

	@media (min-width: 768px) {
		margin-top: 69px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 92px;
		font-size: 44px;

		br {
			display: block;
		}
	}
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

	@media (min-width: 768px) {
		margin-bottom: 20px;
	}

	@media (min-width: 1440px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
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
		background-size: 100%;
		border-radius: 14px;
		box-shadow: 0 4px 9px #dadada;
	}

	&--1 br {
		display: none;

		@media (min-width: 768px) {
			display: flex;
		}
	}

	&--4 br {
		display: none;

		@media (min-width: 768px) {
			display: flex;
		}
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

	@media (min-width: 768px) {
		align-items: flex-start;
		min-height: 140px;
		padding-left: 161px;

		&::before {
			width: 140px;
			height: 140px;
		}
	}

	@media (min-width: 1440px) {
		width: 440px;
		margin-bottom: 37px;

		&--1 {
			order: -2;
		}

		&--2 {
			order: 1;
		}

		&--3 {
			order: -1;
		}

		&--4 {
			order: 2;
		}
	}
}

.features__text {
	margin: 0;

	@media (min-width: 768px) {
		margin-top: 34px;
		padding-right: 50px;
		font-size: 24px;
		line-height: 26px;
	}
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

	@media (min-width: 768px) {
		width: 306px;
		font-size: 17px;
	}
}

.features__contact-us {
	position: relative;
	z-index: 1;
	display: flex;
	box-sizing: border-box;
	width: 208px;
	margin-top: 22px;
	margin-bottom: 10px;
	margin-left: auto;
	padding-left: 69px;
	color: #222528;
	background-color: #ffffff;
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

	@media (min-width: 768px) {
		position: relative;
		left: 26px;
		order: -1;
		width: 276px;
		margin-top: -168px;

		&::before {
			top: 10px;
			left: 16px;
			width: 71px;
			height: 71px;
		}
	}
}

.contact-us__text {
	width: 114px;
	margin: 0;
	padding: 23px 8px 14px;
	font-size: 16px;
	color: inherit;

	@media (min-width: 768px) {
		padding: 23px 32px 18px;
		line-height: 24px;
	}
}
</style>
