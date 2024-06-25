export default ['', '', ''].map((_item, i) => {
	const id = i + 1;
	return {
		id,
		title: 'Скидка -15% на групповой заказ',
		description: 'Получите скидку -15% при оформлении группового заказа в период с 1 января 2021 г. по 19 февраля 2021 г.',
		background: `discount-${id}.png`,
	};
});
