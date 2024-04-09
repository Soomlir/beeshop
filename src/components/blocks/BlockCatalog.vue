<template>
  <section class="catalog">
    <h2 class="catalog__title">Каталог игр</h2>
    <p class="catalog__text">Популярные игры</p>
    <a class="catalog__link" href="#!">Смотреть все игры</a>
    <ul class="catalog__list game-list">
      <li
        class="catalog__item game-list__item"
        v-for="({ title, image, params, price }, i) in games"
        :key="i"
      >
        <img
          class="game-list__img"
          :src="image"
          :alt="title"
        />
        <h3 class="game-list__heading">{{ title }}</h3>
        <dl class="game-list__options">
          <div
            :class="{
              [`game-list__wrapper game-list__wrapper--${j + 1}`]: termin !== 'age',
              'game-list__label': termin === 'age',
            }"
            v-for="(value, termin, j) in termins"
            :key="value"
          >
            <dt class="game-list__termin">{{ value }}: </dt>
            <dd class="game-list__data">{{ params[termin] }}</dd>
          </div>
        </dl>
        <p class="game-list__price">{{ price }}₽</p>
        <button class="game-list__add button">добавить в корзину</button>
      </li>
    </ul>
  </section>
</template>

<script setup>
const termins = {
	time: 'Время игры',
	players: 'Кол-во игроков',
	prepare: 'Подготовка',
	places: 'Места',
	complexity: 'Сложность',
	age: 'Возраст',
};

const games = Array.from({ length: 3 }, () => ({
	title: 'Настольная игра “Сказочное королевство” с дополненной реальностью',
	image: '/images/game-card-1.jpg',
	params: {
		time: '60-90 мин',
		players: '2-6',
		prepare: '0 мин',
		places: 'любые',
		complexity: 'простая',
		age: '6+',
	},
	price: 3600,
}));
</script>


<style lang="scss" scoped>
.catalog {
	padding: 0 20px;
	padding-top: 64px;
	padding-bottom: 38px;
	border-bottom: 1px solid #a5aaaf;
}

.catalog__title {
	margin: 0;
	margin-bottom: 8px;
	font-weight: 500;
	font-size: 32px;
	line-height: auto;
	color: #222528;
}

.catalog__text {
	margin: 0;
	margin-bottom: 56px;
	color: #5b636b;
}

.catalog__link {
	display: table;
	margin-bottom: 27px;
	font-weight: 500;
	font-size: 14px;
	color: #db4e66;
	text-transform: uppercase;
	text-decoration: none;
}

.catalog__list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.catalog__item {
	position: relative;
	margin-bottom: 15px;
	padding: 29px 23px 31px;
	border-radius: 12px;
	box-shadow: 0 4px 9px 0 #d3d3d3;
}

.game-list__img {
	margin-bottom: 21px;
}

.game-list__heading {
	margin: 0;
	margin-bottom: 25px;
	font-weight: 500;
	font-size: 16px;
	color: #222528;
}

.game-list__wrapper {
	position: relative;
	padding-bottom: 7px;
	padding-left: 34px;
	font-size: 16px;
	color: #5b636b;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 22px;
		background-repeat: no-repeat;
	}

	&--1::before {
		top: 2px;
		left: 4px;
		background-image: url('/images/icons/game-card-icon-1.svg');
	}

	&--2::before {
		background-image: url('/images/icons/game-card-icon-2.svg');
	}

	&--3::before {
		top: -1px;
		background-image: url('/images/icons/game-card-icon-3.svg');
	}

	&--4::before {
		top: -2px;
		background-image: url('/images/icons/game-card-icon-4.svg');
	}

	&--5::before {
		top: -3px;
		background-image: url('/images/icons/game-card-icon-5.svg');
	}
}

.game-list__termin,
.game-list__data {
	display: inline;
	margin: 0;
}

.game-list__label {
	content: '';
	position: absolute;
	top: 30px;
	right: 23px;
	box-sizing: border-box;
	width: 122px;
	padding: 3px 16px 2px;
	font-size: 14px;
	line-height: 22px;
	text-align: center;
	color: #fafaf9;
	text-transform: uppercase;
	background-color: #90c1bf;
	border-radius: 6px;
}

.game-list__price {
	margin: 0;
	margin-top: 31px;
	margin-bottom: 26px;
	font-weight: 500;
	font-size: 24px;
	text-align: center;
	color: #db4e66;
}

.game-list__add {
	width: 276px;
	margin: 0;
	margin-left: 4px;
	padding: 15px 28px 17px;
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	color: $darken-white-color;
	text-transform: uppercase;
	background-color: #f2b236;
	border: none;
	border-radius: 12px;
	cursor: pointer;
}
</style>
