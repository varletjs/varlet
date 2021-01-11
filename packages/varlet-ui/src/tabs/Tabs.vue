<template>
	<component :is="sticky ? 'var-sticky' : Transition" :offset-top="sticky ? offsetTop : null">
		<div
			class="var-tabs var--box"
			:class="[
			  `var-tabs--item-${tabDirection}`,
			  `var-elevation--${elevation}`,
			  `var-tabs--layout-${tabsDirection}-padding`,
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
          scrollable ? `var-tabs--layout-${tabsDirection}-scrollable` : null,
          `var-tabs--layout-${tabsDirection}`
        ]">
				<slot />

				<div
					class="var-tabs__indicator"
          :class="[`var-tabs--layout-${tabsDirection}-indicator`]"
					:style="{
						width: tabsDirection === 'horizontal' ? indicatorWidth : indicatorSize,
						height: tabsDirection === 'horizontal' ? indicatorSize : indicatorHeight,
						transform: tabsDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
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
		const tabDirection: ComputedRef<string> = computed(() => props.tabDirection)
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
			if (length.value === 0 || !isNumber(props.active)) {
				return
			}

      const boundary: number = props.active > length.value - 1 ? length.value - 1 : 0
      props['onUpdate:active']?.(boundary)
      props.onChange?.(boundary)

			return matchIndex()
		}

		const watchScrollable = () => {
			scrollable.value = tabProviders.length >= 5
		}

		const moveIndicator = ({ element }: TabProvider) => {
		  if (props.tabsDirection === 'horizontal') {
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

      if (props.tabsDirection === 'horizontal') {
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
      tabDirection,
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
