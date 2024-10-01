<script setup>
import BlockPromo from '@/components/blocks/BlockPromo.vue';
import BlockDiscount from '@/components/blocks/BlockDiscount.vue';
import BlockCatalog from '@/components/blocks/BlockCatalog.vue';
import BlockPreview from '@/components/blocks/BlockPreview.vue';
import BlockFeatures from '@/components/blocks/BlockFeatures.vue';
import BlockFaq from '@/components/blocks/BlockFaq.vue';
import BlockReviews from '@/components/blocks/BlockReviews.vue';
import discounts from '@/data/discounts';
</script>

<template>
  <main class="main">
		<h1 class="visually-hidden">ПчёлоШоп - магазин</h1>
		<block-promo class="main__promo" />
		<block-discount class="main__discount" :discounts="discounts" />
		<block-catalog class="main__catalog" />
		<block-preview class="main__preview" />
		<block-features class="main__features" />
		<block-faq class="main__faq" />
		<block-reviews class="main__reviews" />
	</main>
</template>

<style lang="scss">
.main {
	@media (min-width: 1440px) {
		max-width: 1440px;
		margin-right: auto;
		margin-left: auto;
	}
}
</style>
