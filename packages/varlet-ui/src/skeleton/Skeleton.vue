<template>
	<div class="var-skeleton">
		<div class="var-skeleton__data" v-if="!loading">
			<slot />
		</div>

		<div class="var-skeleton__content" v-if="loading">
			<div
				class="var-skeleton__card"
				v-if="card"
				:style="{ height: cardHeight }"
			>
				<div class="var-skeleton--animation"></div>
			</div>
			<div class="var-skeleton__article">
				<div class="var-skeleton__avatar" v-if="avatar">
					<div class="var-skeleton--animation"></div>
				</div>
				<div class="var-skeleton__section">
					<div
						class="var-skeleton__title"
						:style="{ width: titleWidth }"
						v-if="title"
					>
						<div class="var-skeleton--animation"></div>
					</div>
					<div
						class="var-skeleton__row"
						v-for="(r, index) in row"
						:key="r"
						:style="{ width: rowWidth[index] }"
					>
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

export default defineComponent({
	name: 'VarSkeleton',
	props: {
		// 加载状态
		loading: {
			type: Boolean,
			default: true,
		},
		// 段落行数
		row: {
			type: Number,
			default: 0,
		},
		rowWidth: {
			type: Array,
			default: () => [],
		},
		// 是否全屏
		fullscreen: {
			type: Boolean,
			default: false,
		},
		// 是否显示标题
		title: {
			type: Boolean,
			default: false,
		},
		// 标题宽度
		titleWidth: {
			type: String,
		},
		// 是否显示卡片
		card: {
			type: Boolean,
			default: false,
		},
		// 卡片高度
		cardHeight: {
			type: String,
		},
		// 是否显示头像
		avatar: {
			type: Boolean,
			default: false,
		},
		// 头像大小
		avatarSize: {
			type: String,
		},
	},
})
</script>

<style lang="less">
@import './skeleton';
</style>
