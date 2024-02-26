<template>
  <component
    :is="sticky ? n('$-sticky') : Transition"
    :ref="sticky ? 'stickyComponent' : undefined"
    :css-mode="sticky ? stickyCssMode : undefined"
    :offset-top="sticky ? offsetTop : undefined"
    :z-index="sticky ? stickyZIndex : undefined"
  >
    <div
      :class="
        classes(
          n(),
          n('$--box'),
          n(`--item-${itemDirection}`),
          n(`--layout-${layoutDirection}-padding`),
          formatElevation(elevation, 4),
          [fixedBottom, n('--fixed-bottom')],
          [safeArea, n('--safe-area')]
        )
      "
      :style="{ background: color }"
      v-bind="$attrs"
    >
      <div
        ref="scrollerEl"
        :class="
          classes(
            n('tab-wrap'),
            [localScrollable, n(`--layout-${layoutDirection}-scrollable`)],
            n(`--layout-${layoutDirection}`)
          )
        "
      >
        <slot />

        <div
          :class="classes(n('indicator'), n(`--layout-${layoutDirection}${indicatorPosition}-indicator`))"
          :style="{
            width: layoutDirection === 'horizontal' ? indicatorWidth : toSizeUnit(indicatorSize),
            height: layoutDirection === 'horizontal' ? toSizeUnit(indicatorSize) : indicatorHeight,
            transform: layoutDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
          }"
        >
          <div
            :class="classes(n('indicator-inner'), n(`--layout-${layoutDirection}-indicator-inner`))"
            :style="{ background: indicatorColor || activeColor }"
          ></div>
        </div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import VarSticky from '../sticky'
import { defineComponent, watch, ref, computed, Transition, onActivated } from 'vue'
import { props } from './props'
import { useTabList, type TabsProvider } from './provide'
import { clamp, isNumber, doubleRaf, call } from '@varlet/shared'
import { linear } from '../utils/shared'
import { toSizeUnit, scrollTo } from '../utils/elements'
import { createNamespace, formatElevation } from '../utils/components'
import { onWindowResize } from '@varlet/use'
import { type TabProvider } from '../tab/provide'

const { name, n, classes } = createNamespace('tabs')

export default defineComponent({
  name,
  components: { VarSticky },
  inheritAttrs: false,
  props,
  setup(props) {
    const indicatorWidth = ref('0px')
    const indicatorHeight = ref('0px')
    const indicatorX = ref('0px')
    const indicatorY = ref('0px')
    const localScrollable = ref(false)
    const scrollerEl = ref<HTMLElement | null>(null)
    const active = computed(() => props.active)
    const activeColor = computed(() => props.activeColor)
    const inactiveColor = computed(() => props.inactiveColor)
    const disabledColor = computed(() => props.disabledColor)
    const itemDirection = computed(() => props.itemDirection)
    const stickyComponent = ref<null | typeof VarSticky>(null)
    const indicatorPosition = computed<string>(() => (props.indicatorPosition === 'reverse' ? '-reverse' : ''))
    const { tabList, bindTabList, length } = useTabList()

    const tabsProvider: TabsProvider = {
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize,
      onTabClick,
    }

    bindTabList(tabsProvider)

    watch(
      () => length.value,
      async () => {
        await doubleRaf()
        resize()
      }
    )

    watch(() => [props.active, props.scrollable], resize)

    onActivated(resize)

    onWindowResize(resize)

    function onTabClick(tab: TabProvider) {
      const currentActive = tab.name.value ?? tab.index.value
      const { active, onChange, onClick } = props

      call(props['onUpdate:active'], currentActive)
      call(onClick, currentActive)
      currentActive !== active && call(onChange, currentActive)
    }

    function matchName(): TabProvider | undefined {
      return tabList.find(({ name }: TabProvider) => props.active === name.value)
    }

    function matchIndex(activeIndex?: number): TabProvider | undefined {
      return tabList.find(({ index }: TabProvider) => (activeIndex ?? props.active) === index.value)
    }

    function matchBoundary(): TabProvider | undefined {
      if (length.value === 0) {
        return
      }

      const { active } = props

      if (isNumber(active)) {
        const activeIndex = clamp(active, 0, length.value - 1)
        call(props['onUpdate:active'], activeIndex)
        return matchIndex(activeIndex)
      }
    }

    function watchScrollable() {
      localScrollable.value = props.scrollable === 'always' || tabList.length >= 5
    }

    function moveIndicator({ element }: TabProvider) {
      const el = element.value

      if (!el) return

      if (props.layoutDirection === 'horizontal') {
        indicatorWidth.value = `${el.offsetWidth}px`
        indicatorX.value = `${el.offsetLeft}px`
      } else {
        indicatorHeight.value = `${el.offsetHeight}px`
        indicatorY.value = `${el.offsetTop}px`
      }
    }

    function scrollToCenter({ element }: TabProvider) {
      if (!localScrollable.value) {
        return
      }

      const scroller: HTMLElement = scrollerEl.value as HTMLElement
      const el = element.value as HTMLElement

      if (props.layoutDirection === 'horizontal') {
        const left: number = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
        scrollTo(scroller, {
          left,
          animation: linear,
        })
      } else {
        const top: number = el.offsetTop + el.offsetHeight / 2 - scroller.offsetHeight / 2
        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }
    }

    // expose
    function resize() {
      const tab: TabProvider | undefined = matchName() || matchIndex() || matchBoundary()
      if (!tab || tab.disabled.value) {
        return
      }

      watchScrollable()
      moveIndicator(tab)
      scrollToCenter(tab)
    }

    // expose
    async function resizeSticky() {
      if (props.sticky && stickyComponent.value) {
        await stickyComponent.value.resize()
      }
    }

    return {
      stickyComponent,
      indicatorWidth,
      indicatorHeight,
      indicatorX,
      indicatorY,
      indicatorPosition,
      localScrollable,
      scrollerEl,
      Transition,
      toSizeUnit,
      n,
      classes,
      resize,
      resizeSticky,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../sticky/sticky';
@import './tabs';
</style>
