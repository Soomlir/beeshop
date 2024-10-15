<script></script>

<template>
		<section class="docs">
			<h1 class="docs__title">Документы</h1>
			<p class="docs__text">
				Наши игры соответствуют требования ЕАС и имеют сертификаты качества
			</p>
			<ul class="docs__list">
				<li class="docs__item">
					<picture>
						<source srcset="/public/images/doc-desktop.svg" width="219" height="276" media="(min-width: 1440px)">
						<source srcset="/public/images/doc-tablet.svg" width="150" height="188" media="(min-width: 768px)">
						<img
							src="/public/images/doc-mobile.svg"
							width="128"
							height="160"
							alt="Doc 1."
						/>
					</picture>
				</li>
				<li class="docs__item">
					<picture>
						<source srcset="/public/images/doc-desktop.svg" width="219" height="276" media="(min-width: 1440px)">
						<source srcset="/public/images/doc-tablet.svg" width="150" height="188" media="(min-width: 768px)">
						<img
							src="/public/images/doc-mobile.svg"
							width="128"
							height="160"
							alt="Doc 2."
						/>
					</picture>
				</li>
				<li class="docs__item">
					<picture>
						<source srcset="/public/images/doc-desktop.svg" width="219" height="276" media="(min-width: 1440px)">
						<source srcset="/public/images/doc-tablet.svg" width="150" height="188" media="(min-width: 768px)">
						<img
							src="/public/images/doc-mobile.svg"
							width="128"
							height="160"
							alt="Doc 3."
						/>
					</picture>
				</li>
				<li class="docs__item">
					<picture>
						<source srcset="/public/images/doc-desktop.svg" width="219" height="276" media="(min-width: 1440px)">
						<source srcset="/public/images/doc-tablet.svg" width="150" height="188" media="(min-width: 768px)">
						<img
							src="/public/images/doc-mobile.svg"
							width="128"
							height="160"
							alt="Doc 4."
						/>
					</picture>
				</li>
			</ul>
		</section>
</template>

<style lang="scss">
.docs {
	padding: 56px 22px 118px;
	background-image: url('../images/wave-mobile.svg');
	background-repeat: no-repeat;
	background-position: 0 239px;

	@media (min-width: 768px) {
		padding: 80px 54px 240px;
		background-image: url('../images/wave-tablet.svg');
		background-position: 0 241px;
	}

	@media (min-width: 1440px) {
		padding: 89px 138px 351px;
		background-image: url('../images/wave-desktop.svg');
		background-position: 0 265px;
	}
}

.docs__title {
	margin: 0;
	margin-bottom: 23px;
	font-weight: 500;
	font-size: 28px;
	color: #222528;

	@media (min-width: 1440px) {
		margin-bottom: 31px;
		font-size: 44px;
	}
}

.docs__text {
	margin: 0;
	margin-bottom: 40px;
	font-weight: 500;
	font-size: 20px;
	color: #5b636b;

	@media (min-width: 768px) {
		margin-bottom: 121px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 87px;
		font-size: 24px;
	}
}

.docs__list {
	display: grid;
	grid-template-columns: 127px 127px;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: 24px;

	@media (min-width: 768px) {
		display: flex;
	}

	@media (min-width: 1440px) {
		gap: 30px;
	}
}

.docs__item {
	box-shadow: 0 4px 4px rgba(#000000, 25%);
}
</style>
