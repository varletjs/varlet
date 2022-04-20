<template>
  <component :is="sticky ? 'var-sticky' : Transition" :offset-top="sticky ? offsetTop : null">
    <div
      :class="
        classes(
          n(),
          'var--box',
          n(`--item-${itemDirection}`),
          n(`--layout-${layoutDirection}-padding`),
          [elevation, 'var-elevation--4'],
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
            [scrollable, n(`--layout-${layoutDirection}-scrollable`)],
            n(`--layout-${layoutDirection}`)
          )
        "
      >
        <slot />

        <div
          :class="classes(n('indicator'), n(`--layout-${layoutDirection}-indicator`))"
          :style="{
            width: layoutDirection === 'horizontal' ? indicatorWidth : toSizeUnit(indicatorSize),
            height: layoutDirection === 'horizontal' ? toSizeUnit(indicatorSize) : indicatorHeight,
            transform: layoutDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
            background: indicatorColor || activeColor,
          }"
        ></div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import VarSticky from '../sticky'
import { defineComponent, watch, ref, computed, Transition, onMounted, onUnmounted } from 'vue'
import { props } from './props'
import { useTabList } from './provide'
import { isNumber, linear } from '../utils/shared'
import { toSizeUnit, scrollTo, doubleRaf } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { TabsProvider } from './provide'
import type { TabProvider } from '../tab/provide'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('tabs')

export default defineComponent({
  name: 'VarTabs',
  components: { VarSticky },
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
    const { tabList, bindTabList, length } = useTabList()

    const onTabClick = (tab: TabProvider) => {
      const currentActive = tab.name.value ?? tab.index.value
      const { active, onChange, onClick } = props

      call(props['onUpdate:active'], currentActive)
      call(onClick, currentActive)
      currentActive !== active && call(onChange, currentActive)
    }

    const matchName = (): TabProvider | undefined => {
      return tabList.find(({ name }: TabProvider) => props.active === name.value)
    }

    const matchIndex = (activeIndex?: number): TabProvider | undefined => {
      return tabList.find(({ index }: TabProvider) => (activeIndex ?? props.active) === index.value)
    }

    const matchBoundary = (): TabProvider | undefined => {
      if (length.value === 0) {
        return
      }

      const { active } = props

      if (isNumber(active)) {
        const activeIndex = active > length.value - 1 ? length.value - 1 : 0
        call(props['onUpdate:active'], activeIndex)
        return matchIndex(activeIndex)
      }
    }

    const watchScrollable = () => {
      scrollable.value = tabList.length >= 5
    }

    const moveIndicator = ({ element }: TabProvider) => {
      const el = element.value

      if (props.layoutDirection === 'horizontal') {
        indicatorWidth.value = `${el?.offsetWidth}px`
        indicatorX.value = `${el?.offsetLeft}px`
      } else {
        indicatorHeight.value = `${el?.offsetHeight}px`
        indicatorY.value = `${el?.offsetTop}px`
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
    const resize = () => {
      const tab: TabProvider | undefined = matchName() || matchIndex() || matchBoundary()
      if (!tab || tab.disabled.value) {
        return
      }

      watchScrollable()
      moveIndicator(tab)
      scrollToCenter(tab)
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

    bindTabList(tabsProvider)

    watch(
      () => length.value,
      async () => {
        await doubleRaf()
        resize()
      }
    )

    watch(() => props.active, resize)

    onMounted(() => window.addEventListener('resize', resize))
    onUnmounted(() => window.removeEventListener('resize', resize))

    return {
      indicatorWidth,
      indicatorHeight,
      indicatorX,
      indicatorY,
      scrollable,
      scrollerEl,
      Transition,
      toSizeUnit,
      n,
      classes,
      resize,
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
