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
}

interface RippleHTMLElement extends HTMLElement {
	_ripple?: RippleOptions
}

function computeRippleStyles(
	element: RippleHTMLElement,
	event: TouchEvent
): RippleStyles {
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
	if (this._ripple?.disabled) {
		return
	}

	const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(
		this,
		event
	)

	const ripple: RippleHTMLElement = document.createElement('div')
	ripple.classList.add('var-ripple')
	ripple.style.opacity = `0`
	ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
	ripple.style.width = `${size}px`
	ripple.style.height = `${size}px`
	ripple.style.backgroundColor = this._ripple?.color ?? 'currentColor'
	ripple.dataset.createdAt = String(performance.now())

	const styles = window.getComputedStyle(this)
	styles.zIndex === 'auto' && this.classList.add('var-ripple--flat')
	styles.position === 'static' && this.classList.add('var--relative')

	this.classList.add('var--hidden')
	this.appendChild(ripple)

	setTimeout(() => {
		ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
		ripple.style.opacity = `.25`
	})
}

function removeRipple(this: RippleHTMLElement) {
	const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(
		'.var-ripple'
	)
	if (!ripples.length) {
		return
	}

	const lastRipple: RippleHTMLElement = ripples[ripples.length - 1]
	const delay: number = 300 - performance.now() + Number(lastRipple.dataset.createdAt)

	setTimeout(() => {
		lastRipple.style.opacity = `0`

		setTimeout(() => {
			const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(
				'.var-ripple'
			)
			if (ripples.length === 1) {
				this.classList.remove('var-ripple--flat')
				this.classList.remove('var--relative')
				this.classList.remove('var--hidden')
			}
			lastRipple.parentNode?.removeChild(lastRipple)
		}, 300)
	}, delay)
}

function mounted(
	el: RippleHTMLElement,
	binding: DirectiveBinding<RippleOptions>
) {
	el._ripple = binding.value

	el.addEventListener('touchstart', createRipple, { passive: true })
	el.addEventListener('touchend', removeRipple, { passive: true })
	el.addEventListener('touchcancel', removeRipple, { passive: true })
}

function unmounted(el: RippleHTMLElement) {
	el.removeEventListener('touchstart', createRipple)
	el.removeEventListener('touchend', removeRipple)
	el.removeEventListener('touchcancel', removeRipple)
}

function updated(
	el: RippleHTMLElement,
	binding: DirectiveBinding<RippleOptions>
) {
	el._ripple = binding.value
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
