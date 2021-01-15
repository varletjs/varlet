<template>
	<component :is="sticky ? 'var-sticky' : Transition" :offset-top="sticky ? offsetTop : null">
		<div
			class="var-tabs var--box"
			:class="[
			  `var-tabs--item-${itemDirection}`,
			  `var-elevation--${elevation}`,
			  `var-tabs--layout-${layoutDirection}-padding`,
			   fixedBottom ? 'var-tabs--fixed-bottom' : null
			]"
			:style="{
				background: color,
			}"
			v-bind="$attrs"
		>
			<div
        class="var-tabs__tab-wrap"
        ref="scrollerEl"
        :class="[
          scrollable ? `var-tabs--layout-${layoutDirection}-scrollable` : null,
          `var-tabs--layout-${layoutDirection}`
        ]">
				<slot />

				<div
					class="var-tabs__indicator"
          :class="[`var-tabs--layout-${layoutDirection}-indicator`]"
					:style="{
						width: layoutDirection === 'horizontal' ? indicatorWidth : indicatorSize,
						height: layoutDirection === 'horizontal' ? indicatorSize : indicatorHeight,
						transform: layoutDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
						background: indicatorColor || activeColor,
					}"
				></div>
			</div>
		</div>
	</component>
</template>

<script lang="ts">
import Sticky from '../sticky'
import { defineComponent, watch, ref, Ref, computed, Transition, ComputedRef, nextTick } from 'vue'
import { props } from './props'
import { TabsProvider, TABS_COUNT_TAB_KEY, TABS_BIND_TAB_KEY } from './provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'
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
		const indicatorHeight: Ref<string> = ref('0px')
		const indicatorX: Ref<string> = ref('0px')
		const indicatorY: Ref<string> = ref('0px')

		const scrollable: Ref<boolean> = ref(false)
		const scrollerEl: Ref<HTMLElement | null> = ref(null)

		const active: ComputedRef<number | string> = computed(() => props.active)
		const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
		const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
		const disabledColor: ComputedRef<string | undefined> = computed(() => props.disabledColor)
		const itemDirection: ComputedRef<string> = computed(() => props.itemDirection)
		const { childProviders: tabProviders, bindChildren } = useChildren<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)
		const { length } = useAtChildrenCounter(TABS_COUNT_TAB_KEY)

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
		  if (props.layoutDirection === 'horizontal') {
        indicatorWidth.value = `${element.value?.offsetWidth}px`
        indicatorX.value = `${element.value?.offsetLeft}px`
      } else {
        indicatorHeight.value = `${element.value?.offsetHeight}px`
        indicatorY.value = `${element.value?.offsetTop}px`
      }
		}

		const scrollToCenter = ({ element }: TabProvider) => {
			if (!scrollable.value) {
				return
			}

			const scroller: HTMLElement = scrollerEl.value as HTMLElement
			const el = element.value as HTMLElement

      if (props.layoutDirection === 'horizontal') {
        const left: number = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
        scroller.scrollTo({
          left,
          behavior: 'smooth',
        })
      } else {
        const top: number = el.offsetTop + el.offsetHeight / 2 - scroller.offsetHeight / 2
        scroller.scrollTo({
          top,
          behavior: 'smooth',
        })
      }
		}

		const resize = () => {
			const tabProvider: TabProvider | undefined = matchName() || matchIndex() || matchBoundary()
      if (!tabProvider || tabProvider.disabled.value) {
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
      itemDirection,
			resize,
			onTabClick,
		}

		bindChildren(tabsProvider)

		watch(
			() => length.value,
			() => nextTick().then(resize)
		)

		watch(() => props.active, resize)

		return {
			indicatorWidth,
      indicatorHeight,
			indicatorX,
      indicatorY,
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
