import { type App, type Directive, type DirectiveBinding, type Plugin } from 'vue'
import { getRect, getStyle, supportTouch } from '@varlet/shared'
import context from '../context'
import { createNamespace } from '../utils/components'
import '../styles/common.less'
import './ripple.less'

const { n } = createNamespace('ripple')

interface RippleStyles {
  x: number
  y: number
  centerX: number
  centerY: number
  size: number
}

interface RippleOptions {
  removeRipple: any
  color?: string
  disabled?: boolean
  tasker?: number | null
}

export interface RippleHTMLElement extends HTMLElement {
  _ripple?: RippleOptions
}

const ANIMATION_DURATION = 250

function setStyles(element: RippleHTMLElement) {
  const { zIndex, position } = getStyle(element)

  element.style.overflow = 'hidden'
  element.style.overflowX = 'hidden'
  element.style.overflowY = 'hidden'
  position === 'static' && (element.style.position = 'relative')
  zIndex === 'auto' && (element.style.zIndex = '1')
}

function isTouchEvent(event: Event): event is TouchEvent {
  return 'touches' in event
}

function computeRippleStyles(element: RippleHTMLElement, event: TouchEvent | KeyboardEvent): RippleStyles {
  const { top, left }: DOMRect = getRect(element)
  const { clientWidth, clientHeight } = element

  const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
  const size: number = radius * 2

  const localX: number = isTouchEvent(event) ? event.touches[0].clientX - left : clientWidth / 2
  const localY: number = isTouchEvent(event) ? event.touches[0].clientY - top : clientHeight / 2

  const centerX: number = (clientWidth - radius * 2) / 2
  const centerY: number = (clientHeight - radius * 2) / 2

  const x: number = localX - radius
  const y: number = localY - radius

  return { x, y, centerX, centerY, size }
}

function createRipple(this: RippleHTMLElement, event: TouchEvent | KeyboardEvent) {
  const _ripple = this._ripple as RippleOptions
  _ripple.removeRipple()

  if (_ripple.disabled || _ripple.tasker || !context.enableRipple) {
    return
  }

  const task = () => {
    _ripple.tasker = null

    const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(this, event)
    const ripple: RippleHTMLElement = document.createElement('div')
    ripple.classList.add(n())
    ripple.style.opacity = `0`
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    _ripple.color && (ripple.style.backgroundColor = _ripple.color)
    ripple.dataset.createdAt = String(performance.now())

    setStyles(this)

    this.appendChild(ripple)

    window.setTimeout(() => {
      ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
      ripple.style.opacity = `.25`
    }, 20)
  }

  _ripple.tasker = window.setTimeout(task, 30)
}

function removeRipple(this: RippleHTMLElement) {
  const _ripple = this._ripple as RippleOptions

  const task = () => {
    const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(`.${n()}`)
    if (!ripples.length) {
      return
    }

    const lastRipple: RippleHTMLElement = ripples[ripples.length - 1]
    const delay: number = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt)

    window.setTimeout(() => {
      lastRipple.style.opacity = `0`

      window.setTimeout(() => lastRipple.parentNode?.removeChild(lastRipple), ANIMATION_DURATION)
    }, delay)
  }

  _ripple.tasker ? window.setTimeout(task, 30) : task()
}

function forbidRippleTask(this: RippleHTMLElement) {
  if (!supportTouch() || !context.enableRipple) {
    return
  }

  const _ripple = this._ripple as RippleOptions
  _ripple.tasker && window.clearTimeout(_ripple.tasker)
  _ripple.tasker = null
}

let hasKeyboardRipple = false

function createKeyboardRipple(this: RippleHTMLElement, event: KeyboardEvent) {
  if (hasKeyboardRipple || !(event.key === ' ' || event.key === 'Enter')) {
    return
  }

  createRipple.call(this, event)
  hasKeyboardRipple = true
}

function removeKeyboardRipple(this: RippleHTMLElement) {
  if (!hasKeyboardRipple) {
    return
  }

  removeRipple.call(this)
  hasKeyboardRipple = false
}

function mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
  el._ripple = {
    tasker: null,
    ...(binding.value ?? {}),
    removeRipple: removeRipple.bind(el),
  }

  el.addEventListener('touchstart', createRipple, { passive: true })
  el.addEventListener('touchmove', forbidRippleTask, { passive: true })
  el.addEventListener('dragstart', removeRipple, { passive: true })
  el.addEventListener('keydown', createKeyboardRipple)
  el.addEventListener('keyup', removeKeyboardRipple)
  el.addEventListener('blur', removeKeyboardRipple)

  document.addEventListener('touchend', el._ripple.removeRipple, { passive: true })
  document.addEventListener('touchcancel', el._ripple.removeRipple, { passive: true })
  document.addEventListener('dragend', el._ripple.removeRipple, { passive: true })
}

function unmounted(el: RippleHTMLElement) {
  el.removeEventListener('touchstart', createRipple)
  el.removeEventListener('touchmove', forbidRippleTask)
  el.removeEventListener('dragstart', removeRipple)

  if (!el._ripple || !el._ripple.removeRipple) {
    // may be null in nuxt
    return
  }

  document.removeEventListener('touchend', el._ripple!.removeRipple)
  document.removeEventListener('touchcancel', el._ripple!.removeRipple)
  document.removeEventListener('dragend', el._ripple!.removeRipple)
}

function updated(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
  const newBinding = {
    color: binding.value?.color,
    disabled: binding.value?.disabled,
  }

  const diff = newBinding.color !== el._ripple?.color || newBinding.disabled !== el._ripple?.disabled

  if (diff) {
    el._ripple = {
      tasker: newBinding.disabled ? null : el._ripple?.tasker,
      removeRipple: el._ripple?.removeRipple,
      ...newBinding,
    }
  }
}

const Ripple: Directive & Plugin = {
  mounted,
  unmounted,
  updated,
  install(app: App) {
    app.directive('ripple', this)
  },
}

export const _RippleComponent = Ripple

export default Ripple
