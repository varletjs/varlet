import { Directive, Plugin, App } from 'vue'
import { DirectiveBinding } from '@vue/runtime-core'
import './ripple.less'
import '../styles/common.less'

interface RippleStyles {
	x: number
	y: number
	centerX: number
	centerY: number
	size: number
}

interface RippleOptions {
	color?: string
	disabled?: boolean
	tasker?: number | null
}

interface RippleHTMLElement extends HTMLElement {
	_ripple?: RippleOptions
}

function recordStyles(element: RippleHTMLElement) {
	const { zIndex, position, overflow, overflowX, overflowY } = window.getComputedStyle(element)

	zIndex === 'auto' && (element.dataset.prevZIndex = zIndex)
	position === 'static' && (element.dataset.prevPosition = position)
	element.dataset.prevOverflow = overflow
	element.dataset.prevOverflowX = overflowX
	element.dataset.prevOverflowY = overflowY
}

function setStyles(element: RippleHTMLElement) {
	const { zIndex, position } = window.getComputedStyle(element)

	element.style.overflow = 'hidden'
	element.style.overflowX = 'hidden'
	element.style.overflowY = 'hidden'
	position === 'static' && (element.style.position = 'relative')
	zIndex === 'auto' && (element.style.zIndex = '1')
}

function resetStyles(element: RippleHTMLElement) {
	element.dataset.prevZIndex && (element.style.zIndex = element.dataset.prevZIndex)
	element.dataset.prevPosition && (element.style.position = element.dataset.prevPosition)

	element.style.overflow = element.dataset.prevOverflow as string
	element.style.overflowX = element.dataset.prevOverflowX as string
	element.style.overflowY = element.dataset.prevOverflowY as string
}

function computeRippleStyles(element: RippleHTMLElement, event: TouchEvent): RippleStyles {
	const { top, left }: DOMRect = element.getBoundingClientRect()
	const { clientWidth, clientHeight } = element

	const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
	const size: number = radius * 2

	const localX: number = event.touches[0].clientX - left
	const localY: number = event.touches[0].clientY - top

	const centerX: number = (clientWidth - radius * 2) / 2
	const centerY: number = (clientHeight - radius * 2) / 2

	const x: number = localX - radius
	const y: number = localY - radius

	return { x, y, centerX, centerY, size }
}

function createRipple(this: RippleHTMLElement, event: TouchEvent) {
	const _ripple = this._ripple as RippleOptions
	if (_ripple.disabled) {
		return
	}

	const task = () => {
		_ripple.tasker = null

		const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(this, event)
		const ripple: RippleHTMLElement = document.createElement('div')
		ripple.classList.add('var-ripple')
		ripple.style.opacity = `0`
		ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
		ripple.style.width = `${size}px`
		ripple.style.height = `${size}px`
		ripple.style.backgroundColor = _ripple.color ?? 'currentColor'
		ripple.dataset.createdAt = String(performance.now())

		setStyles(this)

		this.appendChild(ripple)

		window.setTimeout(() => {
			ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
			ripple.style.opacity = `.25`
		}, 20)
	}

	_ripple.tasker = window.setTimeout(task, 60)
}

function removeRipple(this: RippleHTMLElement) {
	const _ripple = this._ripple as RippleOptions

	const task = () => {
		const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll('.var-ripple')
		if (!ripples.length) {
			return
		}

		const lastRipple: RippleHTMLElement = ripples[ripples.length - 1]
		const delay: number = 300 - performance.now() + Number(lastRipple.dataset.createdAt)

		setTimeout(() => {
			lastRipple.style.opacity = `0`

			setTimeout(() => {
				const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll('.var-ripple')

				ripples.length === 1 && resetStyles(this)

				lastRipple.parentNode?.removeChild(lastRipple)
			}, 300)
		}, delay)
	}

	_ripple.tasker ? setTimeout(task, 60) : task()
}

function forbidRippleTask(this: RippleHTMLElement) {
	const _ripple = this._ripple as RippleOptions

	_ripple.tasker && window.clearTimeout(_ripple.tasker)
	_ripple.tasker = null
}

function mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
	el._ripple = binding.value ?? {}
	el._ripple.tasker = null

	recordStyles(el)

	el.addEventListener('touchstart', createRipple, { passive: true })
	el.addEventListener('touchend', removeRipple, { passive: true })
	el.addEventListener('touchcancel', removeRipple, { passive: true })
	el.addEventListener('touchmove', forbidRippleTask, { passive: true })
}

function unmounted(el: RippleHTMLElement) {
	el.removeEventListener('touchstart', createRipple)
	el.removeEventListener('touchend', removeRipple)
	el.removeEventListener('touchcancel', removeRipple)
	el.removeEventListener('touchmove', forbidRippleTask)
}

function updated(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
	el._ripple = binding.value ?? {}
	el._ripple.tasker = null

	recordStyles(el)
}

const Ripple: Directive & Plugin = {
	mounted,
	unmounted,
	updated,
	install(app: App) {
		app.directive('ripple', this)
	},
}

export default Ripple
