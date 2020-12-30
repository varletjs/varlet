<template>
	<div
		class="var-sticky"
		ref="stickyEl"
		:style="{
			width: isFixed ? fixedWidth : null,
			height: isFixed ? fixedHeight : null,
		}"
	>
		<div
			class="var-sticky__wrapper"
			:style="{
				position: isFixed ? 'fixed' : null,
				left: isFixed ? fixedLeft : null,
				top: isFixed ? fixedTop : null,
			}"
		>
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onUnmounted, computed } from 'vue'
import { props } from './props'
import { getParentScroller, isPx, remToPx, formatPx } from '../utils/elements'

export default defineComponent({
	name: 'VarSticky',
	props,
	setup(props) {
		const stickyEl: Ref<HTMLElement | null> = ref(null)

		const isFixed: Ref<boolean> = ref(false)
		const fixedTop: Ref<string> = ref('0px')
		const fixedLeft: Ref<string> = ref('0px')
		const fixedWidth: Ref<string> = ref('auto')
		const fixedHeight: Ref<string> = ref('auto')

		const offsetTop = computed(() => {
			return isPx(props.offsetTop) ? formatPx(props.offsetTop) : remToPx(props.offsetTop)
		})

		let scroller: HTMLElement | Window = window

		const handleScroll = () => {
			let scrollerTop = 0

			if (scroller !== window) {
				const { top } = (scroller as HTMLElement).getBoundingClientRect()
				scrollerTop = top
			}

			const { top: stickyTop, left: stickyLeft } = (stickyEl.value as HTMLElement).getBoundingClientRect()
			const currentOffsetTop = stickyTop - scrollerTop

			if (currentOffsetTop <= offsetTop.value) {
				fixedWidth.value = `${(stickyEl.value as HTMLElement).offsetWidth}px`
				fixedHeight.value = `${(stickyEl.value as HTMLElement).offsetHeight}px`
				fixedTop.value = `${scrollerTop + offsetTop.value}px`
				fixedLeft.value = `${stickyLeft}px`
				isFixed.value = true

				props.onScroll?.(offsetTop.value, isFixed.value)
			} else {
				isFixed.value = false

				props.onScroll?.(currentOffsetTop, isFixed.value)
			}
		}

		onMounted(() => {
			window.addEventListener('scroll', handleScroll)
			scroller = getParentScroller(stickyEl.value as HTMLElement)
			scroller !== window && scroller.addEventListener('scroll', handleScroll)

			handleScroll()
		})
		onUnmounted(() => {
			window.removeEventListener('scroll', handleScroll)
			scroller !== window && scroller.removeEventListener('scroll', handleScroll)
		})

		return {
			stickyEl,
			isFixed,
			fixedTop,
			fixedLeft,
			fixedWidth,
			fixedHeight,
		}
	},
})
</script>
