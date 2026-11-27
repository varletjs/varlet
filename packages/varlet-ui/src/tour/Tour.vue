<template>
  <Teleport :to="teleport || undefined" :disabled="teleport === false">
    <transition :name="n('--fade')">
      <div v-if="active" :class="classes(n(), n('$--box'))" :style="{ zIndex }" v-bind="$attrs">
        <svg v-if="overlay" :class="n('mask')" :viewBox="`0 0 ${viewport.width} ${viewport.height}`" aria-hidden="true">
          <path :d="maskPath" fill-rule="evenodd" @click="handleClickOverlay" />
        </svg>
        <div
          v-if="hole"
          :class="classes(n('highlight'), [allowTargetInteraction || !overlay, n('--interactive')])"
          :style="{
            left: `${hole.left}px`,
            top: `${hole.top}px`,
            width: `${hole.width}px`,
            height: `${hole.height}px`,
            borderRadius: `${Math.max(0, gapRadius)}px`,
          }"
          aria-hidden="true"
        />
        <div
          ref="panel"
          :class="classes(n('panel'), n('$--box'), n('$-elevation--3'), [!hole, n('--center')])"
          :style="{ width: toSizeUnit(width), ...positionStyles }"
          :data-popper-placement="finalPlacement"
          role="dialog"
          :aria-modal="modal || undefined"
          :aria-labelledby="step.title || $slots.title ? `${id}-title` : undefined"
          :aria-label="step.title || $slots.title ? undefined : translate('tourTitle')"
          :aria-describedby="`${id}-description`"
          tabindex="-1"
        >
          <div v-if="step.title || $slots.title" :id="`${id}-title`" :class="n('title')">
            <slot name="title" v-bind="slotData">{{ step.title }}</slot>
          </div>
          <div :id="`${id}-description`" :class="n('description')" aria-live="polite">
            <slot v-bind="slotData">{{ step.description }}</slot>
          </div>
          <div :class="n('footer')">
            <slot name="actions" v-bind="slotData">
              <span v-if="showProgress" :class="n('progress')">{{ index + 1 }} / {{ steps.length }}</span>
              <div :class="n('actions')">
                <var-button v-if="showClose" text size="small" :class="n('close')" @click="close">
                  {{ closeButtonText ?? translate('tourCloseButtonText') }}
                </var-button>
                <var-button v-if="index > 0" text type="primary" size="small" :class="n('prev')" @click="prev">
                  {{ prevButtonText ?? translate('tourPrevButtonText') }}
                </var-button>
                <var-button type="primary" size="small" :elevation="false" :class="n('next')" @click="next">
                  {{
                    last
                      ? (finishButtonText ?? translate('tourFinishButtonText'))
                      : (nextButtonText ?? translate('tourNextButtonText'))
                  }}
                </var-button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import { type Instance, type State } from '@popperjs/core'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles.js'
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import { call, clamp } from '@varlet/shared'
import { useEventListener, useId, useVModel } from '@varlet/use'
import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  watch,
} from 'vue'
import VarButton from '../button'
import { useLock } from '../context/lock'
import { useStack } from '../context/stack'
import { useZIndex } from '../context/zIndex'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('tour')
const FOCUSABLE =
  'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
const fallbackMessages: Record<string, string> = {
  tourTitle: 'Tour',
  tourPrevButtonText: 'Previous',
  tourNextButtonText: 'Next',
  tourFinishButtonText: 'Finish',
  tourCloseButtonText: 'Skip',
}

export default defineComponent({
  name,
  components: { VarButton },
  inheritAttrs: false,
  props,
  setup(props) {
    const show = useVModel(props, 'show')
    const current = useVModel(props, 'current')
    const mounted = ref(false)
    const foreground = ref(true)
    const active = computed(() => mounted.value && foreground.value && show.value && props.steps.length > 0)
    const index = computed(() =>
      clamp(Number.isFinite(current.value) ? Math.trunc(current.value) : 0, 0, Math.max(props.steps.length - 1, 0)),
    )
    const step = computed(() => props.steps[index.value] ?? {})
    const last = computed(() => index.value === props.steps.length - 1)
    const modal = computed(() => props.overlay && !props.allowTargetInteraction)
    const panel = ref<HTMLElement | null>(null)
    const positionStyles = ref<Record<string, string>>({})
    const finalPlacement = ref<string>()
    const hole = ref<{ left: number; top: number; width: number; height: number } | null>(null)
    const viewport = ref({ width: 0, height: 0 })
    const id = useId()
    const { t: pt } = injectLocaleProvider()
    const { zIndex } = useZIndex(() => active.value, 2)
    const { onStackTop } = useStack(() => active.value, zIndex)

    let target: HTMLElement | null = null
    let popper: Instance | undefined
    let observer: ResizeObserver | undefined
    let frame: number | undefined
    let previousFocus: HTMLElement | null = null
    let sequence = 0
    let disposing = false

    useLock(
      () => active.value,
      () => props.lockScroll,
    )
    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => document, 'focusin', handleFocusin)
    useEventListener(() => document, 'scroll', scheduleResize, { capture: true, passive: true })
    useEventListener(() => window, 'resize', scheduleResize, { passive: true })
    useEventListener(() => window.visualViewport ?? window, 'resize', scheduleResize, { passive: true })
    useEventListener(() => window.visualViewport ?? window, 'scroll', scheduleResize, { passive: true })

    onMounted(() => {
      mounted.value = true
    })
    onActivated(() => {
      foreground.value = true
    })
    onDeactivated(() => {
      foreground.value = false
    })
    onBeforeUnmount(() => {
      disposing = true
      cleanup()
    })

    watch(
      active,
      (value) => {
        if (value) {
          previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
          call(props.onOpen)
        } else {
          cleanup()
          call(props.onClose)
        }
      },
      { flush: 'post' },
    )

    watch(index, (value, previous) => {
      call(props.onChange, value, previous)
    })

    watch(
      () => [
        active.value,
        current.value,
        index.value,
        active.value ? resolveTarget() : null,
        step.value.target,
        step.value.placement,
        props.placement,
        props.gap,
        props.scrollIntoView,
      ],
      async () => {
        const token = ++sequence
        if (!active.value) {
          return
        }
        if (current.value !== index.value) {
          current.value = index.value
        }
        await nextTick()
        if (!active.value || token !== sequence) {
          return
        }
        syncTarget(true)
        resize()
        panel.value?.focus({ preventScroll: true })
      },
      { flush: 'post' },
    )

    const maskPath = computed(() => {
      const { width, height } = viewport.value
      const outer = `M0 0H${width}V${height}H0Z`
      if (!hole.value) {
        return outer
      }
      const { left: x, top: y, width: w, height: h } = hole.value
      const radius = Math.min(Math.max(0, props.gapRadius), w / 2, h / 2)
      return `${outer} M${x + radius} ${y}H${x + w - radius}Q${x + w} ${y} ${x + w} ${y + radius}V${y + h - radius}Q${x + w} ${y + h} ${x + w - radius} ${y + h}H${x + radius}Q${x} ${y + h} ${x} ${y + h - radius}V${y + radius}Q${x} ${y} ${x + radius} ${y}Z`
    })

    const slotData = computed(() => ({
      step: step.value,
      current: index.value,
      total: props.steps.length,
      next,
      prev,
      close,
      finish,
    }))

    function translate(key: string) {
      return pt?.(key) ?? t(key) ?? fallbackMessages[key]
    }

    function resolveTarget() {
      const reference = step.value.target
      try {
        const element =
          typeof reference === 'function'
            ? reference()
            : typeof reference === 'string'
              ? document.querySelector(reference)
              : reference
        return element instanceof HTMLElement && element.isConnected ? element : null
      } catch {
        return null
      }
    }

    function syncTarget(scroll = false) {
      const element = resolveTarget()
      if (element !== target || !observer) {
        observer?.disconnect()
        target = element
        if (typeof ResizeObserver !== 'undefined') {
          observer = new ResizeObserver(scheduleResize)
          if (target) {
            observer.observe(target)
          }
          if (panel.value) {
            observer.observe(panel.value)
          }
        }
      }
      if (scroll && props.scrollIntoView && target) {
        target.scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'instant' })
      }
    }

    // expose
    function resize() {
      if (!active.value || !panel.value) {
        return
      }
      syncTarget()
      viewport.value = { width: window.innerWidth, height: window.innerHeight }
      const rect = target?.getBoundingClientRect()
      const gap = Math.max(0, props.gap)
      let left = Math.max(0, (rect?.left ?? 0) - gap)
      let top = Math.max(0, (rect?.top ?? 0) - gap)
      let right = Math.min(viewport.value.width, (rect?.right ?? 0) + gap)
      let bottom = Math.min(viewport.value.height, (rect?.bottom ?? 0) + gap)
      let ancestor = target?.parentElement
      while (ancestor && ancestor !== document.body) {
        const style = getComputedStyle(ancestor)
        const clipsX = /auto|scroll|hidden|clip/.test(style.overflowX || style.overflow)
        const clipsY = /auto|scroll|hidden|clip/.test(style.overflowY || style.overflow)
        if (clipsX || clipsY) {
          const bounds = ancestor.getBoundingClientRect()
          if (clipsX) {
            left = Math.max(left, bounds.left)
            right = Math.min(right, bounds.right)
          }
          if (clipsY) {
            top = Math.max(top, bounds.top)
            bottom = Math.min(bottom, bounds.bottom)
          }
        }
        ancestor = ancestor.parentElement
      }
      hole.value =
        rect &&
        rect.width > 0 &&
        rect.height > 0 &&
        right > left &&
        bottom > top &&
        rect.right > left &&
        rect.left < right &&
        rect.bottom > top &&
        rect.top < bottom
          ? { left, top, width: right - left, height: bottom - top }
          : null

      if (!hole.value) {
        popper?.destroy()
        popper = undefined
        positionStyles.value = {}
        finalPlacement.value = undefined
        return
      }
      const reference = {
        getBoundingClientRect: () => {
          const { left: x, top: y, width, height } = hole.value!
          return { x, y, left: x, top: y, width, height, right: x + width, bottom: y + height, toJSON: () => ({}) }
        },
      }
      const options = {
        placement: step.value.placement ?? props.placement,
        strategy: 'fixed' as const,
        modifiers: [
          { name: 'eventListeners', enabled: false },
          { name: 'applyStyles', enabled: false },
          { ...flip, options: { padding: 12 } },
          { ...preventOverflow, options: { padding: 12, altAxis: true } },
          { ...offset, options: { offset: [0, 12] } },
          { ...computeStyles, options: { adaptive: false, gpuAcceleration: false } },
          {
            name: 'tourStyles',
            enabled: true,
            phase: 'write' as const,
            fn({ state }: { state: State }) {
              positionStyles.value = {
                position: state.options.strategy,
                top: state.styles.popper.top ?? '',
                left: state.styles.popper.left ?? '',
                transform: state.styles.popper.transform ?? '',
              }
              finalPlacement.value = state.placement
            },
          },
        ],
      }
      if (!popper) {
        popper = createPopper(reference, panel.value, options)
      } else {
        popper.setOptions(options)
      }
    }

    function scheduleResize() {
      if (!active.value || frame !== undefined) {
        return
      }
      frame = window.requestAnimationFrame(() => {
        frame = undefined
        resize()
      })
    }

    function cleanup() {
      sequence++
      observer?.disconnect()
      observer = undefined
      popper?.destroy()
      popper = undefined
      positionStyles.value = {}
      finalPlacement.value = undefined
      target = null
      hole.value = null
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame)
        frame = undefined
      }
      if (previousFocus?.isConnected && onStackTop()) {
        previousFocus.focus({ preventScroll: true })
      }
      previousFocus = null
    }

    // expose
    function open(value = 0) {
      if (!props.steps.length) {
        return
      }
      current.value = clamp(Number.isFinite(value) ? Math.trunc(value) : 0, 0, props.steps.length - 1)
      show.value = true
    }

    // expose
    function close() {
      show.value = false
    }

    // expose
    function finish() {
      if (!active.value) {
        return
      }
      call(props.onFinish)
      close()
    }

    // expose
    function next() {
      if (!active.value) {
        return
      }
      if (last.value) {
        finish()
      } else {
        current.value = index.value + 1
      }
    }

    // expose
    function prev() {
      if (active.value && index.value > 0) {
        current.value = index.value - 1
      }
    }

    function handleClickOverlay(event: MouseEvent) {
      call(props.onClickOverlay, event)
      if (props.closeOnClickOverlay) {
        close()
      }
    }

    function handleFocusin(event: FocusEvent) {
      if (!disposing && active.value && modal.value && onStackTop() && !panel.value?.contains(event.target as Node)) {
        panel.value?.focus({ preventScroll: true })
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      if (!active.value || !onStackTop()) {
        return
      }
      if (event.key === 'Escape' && props.closeOnKeyEscape) {
        event.preventDefault()
        close()
      }
      if (event.key !== 'Tab' || !modal.value || !panel.value) {
        return
      }
      const elements = Array.from(panel.value.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.tabIndex >= 0 && !element.closest('[hidden], [inert]'),
      )
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (!first) {
        event.preventDefault()
        panel.value.focus()
      } else if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.value)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === panel.value)) {
        event.preventDefault()
        first.focus()
      }
    }

    return {
      active,
      index,
      step,
      last,
      modal,
      panel,
      positionStyles,
      finalPlacement,
      hole,
      viewport,
      id,
      zIndex,
      maskPath,
      slotData,
      n,
      classes,
      translate,
      toSizeUnit,
      open,
      close,
      next,
      prev,
      finish,
      resize,
      handleClickOverlay,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../overlay/overlay';
@import '../dialog/dialog';
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../button/button';
@import './tour';
</style>
