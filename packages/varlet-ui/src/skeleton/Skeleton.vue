<template>
	<div class="var--box var-skeleton">
		<div class="var-skeleton__data" v-if="!loading">
			<slot />
		</div>

		<div class="var-skeleton__content" v-if="loading">
			<div class="var-skeleton__card" v-if="card" :style="{ height: cardHeight }">
				<div class="var-skeleton--animation"></div>
			</div>
			<div class="var-skeleton__article">
				<div class="var-skeleton__avatar" v-if="avatar">
					<div class="var-skeleton--animation"></div>
				</div>
				<div class="var-skeleton__section">
					<div class="var-skeleton__title" :style="{ width: titleWidth }" v-if="title">
						<div class="var-skeleton--animation"></div>
					</div>
					<div class="var-skeleton__row" v-for="(r, index) in rows" :key="r" :style="{ width: rowsWidth[index] }">
						<div class="var-skeleton--animation"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="var-skeleton__fullscreen" v-if="loading && fullscreen">
			<div class="var-skeleton--animation"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
	name: 'VarSkeleton',
	props,
})
</script>

<style lang="less">
@import './skeleton';
</style>
