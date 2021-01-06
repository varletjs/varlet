<template>
	<component :is="sticky ? 'var-sticky' : Transition" :offset-top="sticky ? offsetTop : null">
		<div
			class="var-tabs var--box"
			:class="[`var-tabs--${direction}`, `var-elevation--${elevation}`, fixedBottom ? 'var-tabs--fixed-bottom' : null]"
			:style="{
				background: color,
			}"
			v-bind="$attrs"
		>
			<div class="var-tabs__tab-wrap" ref="scrollerEl" :class="[scrollable ? 'var-tabs--scrollable' : null]">
				<slot />

				<div
					class="var-tabs__indicator"
					:style="{
						width: indicatorWidth,
						height: indicatorSize,
						transform: `translateX(${indicatorX})`,
						background: indicatorColor || activeColor,
					}"
				></div>
			</div>
		</div>
	</component>
</template>

<script lang="ts">
import Sticky from '../sticky'
import { defineComponent, onMounted, watch, ref, Ref, computed, Transition, ComputedRef, nextTick } from 'vue'
import { props } from './props'
import { TabsProvider, TABS_COUNT_TAB_KEY, TABS_BIND_TAB_KEY } from './provide'
import { countChildren, useChildren } from '../utils/components'
import { TabProvider } from '../tab/provide'
import { isNumber } from '../utils/shared'

export default defineComponent({
	name: 'VarTabs',
	components: {
		[Sticky.name]: Sticky,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const indicatorWidth: Ref<string> = ref('0px')
		const indicatorX: Ref<string> = ref('0px')
		const scrollable: Ref<boolean> = ref(false)
		const scrollerEl: Ref<HTMLElement | null> = ref(null)
		const active: ComputedRef<number | string> = computed(() => props.active)
		const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
		const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
		const disabledColor: ComputedRef<string | undefined> = computed(() => props.disabledColor)
		const direction: ComputedRef<string> = computed(() => props.direction)
		const { childProviders: tabProviders, bindChildren } = useChildren<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)
		const { length } = countChildren(TABS_COUNT_TAB_KEY)

		const onTabClick = (tabProvider: TabProvider) => {
			const active = tabProvider.name.value ?? tabProvider.index.value

			props['onUpdate:active']?.(active)
			props.onClick?.(active)
			active !== props.active && props.onChange?.(active)
		}

		const matchName = (): TabProvider | undefined => {
			return tabProviders.find(({ name }: TabProvider) => props.active === name.value)
		}

		const matchIndex = (): TabProvider | undefined => {
			return tabProviders.find(({ index }: TabProvider) => props.active === index.value)
		}

		const matchBoundary = (): TabProvider | undefined => {
			if (length.value === 0) {
				return
			}

			isNumber(props.active)
				? props.active > length.value - 1
					? props['onUpdate:active']?.(length.value - 1)
					: props['onUpdate:active']?.(0)
				: null

			return matchIndex()
		}

		const watchScrollable = () => {
			scrollable.value = tabProviders.length >= 5
		}

		const moveIndicator = ({ element }: TabProvider) => {
			indicatorWidth.value = `${element.value?.offsetWidth}px`
			indicatorX.value = `${element.value?.offsetLeft}px`
		}

		const scrollToCenter = ({ element }: TabProvider) => {
			if (!scrollable.value) {
				return
			}

			const scroller: HTMLElement = scrollerEl.value as HTMLElement
			const el = element.value as HTMLElement
			const left: number = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
			scroller.scrollTo({
				left,
				behavior: 'smooth',
			})
		}

		const resize = () => {
			const tabProvider: TabProvider | undefined = matchName() || matchIndex() || matchBoundary()
			if (!tabProvider) {
				return
			}

			watchScrollable()
			moveIndicator(tabProvider)
			scrollToCenter(tabProvider)
		}

		const tabsProvider: TabsProvider = {
			active,
			activeColor,
			inactiveColor,
			disabledColor,
			direction,
			resize,
			onTabClick,
		}

		bindChildren(tabsProvider)

		watch(
			() => length.value,
			() => nextTick().then(resize)
		)

		watch(() => props.active, resize)

		onMounted(resize)

		return {
			indicatorWidth,
			indicatorX,
			scrollable,
			scrollerEl,
			Transition,
			resize,
		}
	},
})
</script>

<style lang="less">
@import '../styles/elevation';
@import './tabs';
</style>
