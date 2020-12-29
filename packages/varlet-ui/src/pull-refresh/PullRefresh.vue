<template>
	<div
		class="var-pull-refresh"
		@touchstart="touchStart"
		@touchmove="touchMove"
		@touchend="touchEnd"
		@touchcancel="
			{
				touchEnd
			}
		"
	>
		<div
			class="var-pull-refresh__control var-elevation--2"
			:style="{
				transform: `translate3d(0px, ${distance}px, 0px)`,
				transition: isEnd ? `transform ${animationDuration}ms` : null,
			}"
		>
			{{ textStatus }}
		</div>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, watch } from 'vue'
import { props } from './props'

type RefreshStatus = 'default' | 'pulling' | 'loosing' | 'loading' | 'success'

const MAX_DISTANCE = 100

const CONTROL_POSITION = -50

export default defineComponent({
	name: 'VarPullRefresh',
	props,
	setup(props) {
		const startPosition: Ref<number> = ref(0)

		const distance: Ref<number> = ref(CONTROL_POSITION)

		const textStatus: Ref<string> = ref('下')

		const refreshStatus: Ref<RefreshStatus> = ref('default')

		const isEnd: Ref<boolean> = ref(false)

		const isTouchable = computed(
			() => refreshStatus.value !== 'loading' && refreshStatus.value !== 'success' && !props.disable
		)

		const touchStart = (event: TouchEvent) => {
			if (!isTouchable.value) return
			refreshStatus.value = 'pulling'
			startPosition.value = event.touches[0].clientY
		}
		const touchMove = (event: TouchEvent) => {
			if (!isTouchable.value || distance.value >= MAX_DISTANCE) return
			distance.value = (event.touches[0].clientY - startPosition.value) / 2 + CONTROL_POSITION
			textStatus.value = distance.value >= MAX_DISTANCE * 0.2 ? '放' : '下'
		}
		const touchEnd = () => {
			if (!isTouchable.value) return
			isEnd.value = true
			if (distance.value >= MAX_DISTANCE * 0.2) {
				refreshStatus.value = 'loading'
				textStatus.value = '转'
				distance.value = MAX_DISTANCE * 0.3
				props.onRefresh?.()
			} else {
				refreshStatus.value = 'loosing'
				textStatus.value = '下'
				distance.value = CONTROL_POSITION
				setTimeout(() => {
					isEnd.value = false
				}, +props.animationDuration)
			}
		}

		watch(
			() => props.modelValue,
			(newValue) => {
				if (newValue === false) {
					isEnd.value = true
					refreshStatus.value = 'success'
					textStatus.value = 'ok'
					setTimeout(() => {
						refreshStatus.value = 'default'
						textStatus.value = '下'
						distance.value = CONTROL_POSITION
						setTimeout(() => {
							isEnd.value = false
						}, +props.animationDuration)
					}, +props.successDuration)
				}
			}
		)
		return {
			touchStart,
			touchMove,
			touchEnd,
			distance,
			textStatus,
			isEnd,
		}
	},
})
</script>

<style lang="less">
@import './pull-refresh';
</style>
