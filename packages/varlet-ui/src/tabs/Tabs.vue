<template>
	<component :is="sticky ? 'var-sticky' : 'div'" :offset-top="sticky ? offsetTop : null">
		<div
			class="var-tabs var--box"
			:class="[`var-tabs--${direction}`, `var-elevation--${elevation}`]"
			:style="{
				background,
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
						background: indicatorBackground || activeColor,
					}"
				></div>
			</div>
		</div>
	</component>
</template>

<script lang="ts">
import { defineComponent, provide, onMounted, onUpdated, watch, ref, Ref, computed, ComputedRef } from 'vue'
import { TabMessage, TABS_PROVIDER_KEY, TabsProvider, props, TAB_COUNTER_KEY } from './props'
import { removeItem } from '../utils/shared'
import { countChildren } from '../utils/components'
import Sticky from '../sticky'

export default defineComponent({
	name: 'VarTabs',
	components: {
		[Sticky.name]: Sticky,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const tabMessages: TabMessage[] = []

		const indicatorWidth: Ref<string> = ref('0px')
		const indicatorX: Ref<string> = ref('0px')
		const scrollable: Ref<boolean> = ref(false)
		const scrollerEl: Ref<HTMLElement | null> = ref(null)

		const active: ComputedRef<number | string> = computed(() => props.active)
		const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
		const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
		const disabledColor: ComputedRef<string | undefined> = computed(() => props.disabledColor)
		const direction: ComputedRef<string> = computed(() => props.direction)

		const matchName = (): TabMessage | undefined => {
			return tabMessages.find(({ name }: TabMessage) => props.active === name.value)
		}
		const matchIndex = (): TabMessage | undefined => {
			return tabMessages.find(({ index }: TabMessage) => props.active === index.value)
		}
		const watchScrollable = () => {
			scrollable.value = tabMessages.length >= 5
		}
		const moveIndicator = ({ element }: TabMessage) => {
			indicatorWidth.value = `${element?.offsetWidth}px`
			indicatorX.value = `${element?.offsetLeft}px`
		}
		const scrollToCenter = ({ element }: TabMessage) => {
			if (!scrollable.value) {
				return
			}
			const scroller: HTMLElement = scrollerEl.value as HTMLElement
			const el = element as HTMLElement
			const left: number = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
			scroller.scrollTo({
				left,
				behavior: 'smooth',
			})
		}

		const tabsEffect = () => {
			const tabMessage = matchName() || matchIndex()
			if (!tabMessage) {
				throw new Error('Active not match to the <var-tab>')
			}

			watchScrollable()
			moveIndicator(tabMessage)
			scrollToCenter(tabMessage)
		}

		onMounted(tabsEffect)
		onUpdated(tabsEffect)

		watch(() => props.active, tabsEffect)

		countChildren(TAB_COUNTER_KEY)

		provide<TabsProvider>(TABS_PROVIDER_KEY, {
			active,
			activeColor,
			inactiveColor,
			disabledColor,
			direction,
			receiveTabMessage(tabMessage: TabMessage) {
				tabMessages.push(tabMessage)
			},
			clearTabMessage(tabMessage: TabMessage) {
				removeItem(tabMessages, tabMessage)
			},
			onTabClick(tabMessage: TabMessage) {
				const active = tabMessage.name.value ?? tabMessage.index.value

				props['onUpdate:active']?.(active)
				props.onClick?.(active)
				active !== props.active && props.onChange?.(active)
			},
		})

		return {
			indicatorWidth,
			indicatorX,
			scrollable,
			scrollerEl,
		}
	},
})
</script>

<style lang="less">
@import '../styles/elevation';
@import './tabs';
</style>
