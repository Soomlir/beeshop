<template>
  <section class="faq">
    <h2 class="faq__title">Часто задаваемые вопросы</h2>

    <dl class="faq__list">
      <template v-for="(item, i) in questions" :key="i">
        <dt
          class="faq__termin"
          :class="{ 'faq__termin--opened': item.opened }"
          @click="item.opened = !item.opened"
        >
          {{ item.question }}
        </dt>
        <dd
          class="faq__definition"
          v-show="item.opened"
        >
          {{ item.answer }}
        </dd>
      </template>
    </dl>
    <a class="faq__button" href="#!">Перейти в каталог</a>
  </section>
</template>

<script setup>
const questions = Array.from({ length: 6 }, () => ({
	question: 'Что такое игра-квест?',
	answer: 'Это такая игра, типа квест',
	opened: false,
}));
</script>

<style lang="scss" scoped>
.faq {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 0 4px 4px rgba(#000000, 25%);

	@media (min-width: 768px) {
		padding: 92px 55px 82px;
	}
}

.faq__title {
	order: 1;
	margin: 0;
	margin-bottom: 34px;
	font-weight: 500;
	font-size: 32px;
	color: #222528;
}

.faq__list {
	display: flex;
	flex-direction: column;
	order: 2;
	margin: 0;
	margin-bottom: 55px;
	font-weight: 500;
	font-size: 20px;
	color: #222528;

	@media (min-width: 768px) {
		margin-top: 16px;
	}
}

.faq__termin {
	position: relative;
	padding-top: 23px;
	padding-bottom: 24px;
	padding-left: 17px;
	border-bottom: 1px solid #a5aaaf;
	cursor: pointer;

	&::before {
		content: '+';
		position: absolute;
		top: 22px;
		left: 0;
	}

	@media (min-width: 768px) {
		padding-bottom: 26px;
		padding-left: 20px;
		font-size: 24px;
	}
}

.faq__button {
	order: 3;
	box-sizing: border-box;
	width: 276px;
	margin-bottom: 60px;
	padding: 17px 32px;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	color: #fafaf9;
	text-transform: uppercase;
	text-decoration: none;
	background-color: #db4e66;
	border-radius: 12px;
	box-shadow: 2px 4px 9px #fbccd4;

	@media (min-width: 768px) {
		width: 306px;
		margin-bottom: 0;
		padding: 18px 32px 19px;
		font-weight: 500;
		font-size: 17px;
	}
}
</style>
