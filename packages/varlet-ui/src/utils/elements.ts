import { inBrowser } from './shared'

const root = (inBrowser ? window : global) as Window

export function getTop(element: HTMLElement): number {
	const { top } = element.getBoundingClientRect()

	return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

export function getScrollTop(element: Element | Window): number {
	const top = 'scrollTop' in element ? element.scrollTop : element.pageYOffset

	// iOS scroll bounce cause minus scrollTop
	return Math.max(top, 0)
}

export function getLeft(element: HTMLElement): number {
	return element.getBoundingClientRect().left
}

export function inViewport(element: HTMLElement): boolean {
	const { top, bottom, left, right } = element.getBoundingClientRect()

	const xInViewport = left < window.innerWidth && right > 0
	const yInViewport = top < window.innerHeight && bottom > 0

	return xInViewport && yInViewport
}

export function getParentScroller(el: HTMLElement, direction?: 'x' | 'y'): HTMLElement | Window {
	let element = el

	while (element) {
		if (!element.parentNode) {
			break
		}

		element = element.parentNode as HTMLElement

		if (element === document.body || element === document.documentElement) {
			break
		}

		const scrollRE = /(scroll|auto)/

		const { overflow, overflowX, overflowY } = window.getComputedStyle(element)
		const passOverflow = scrollRE.test(overflow)
		const passOverflowX = (direction === 'x' || direction == null) && scrollRE.test(overflowX)
		const passOverflowY = (direction === 'y' || direction == null) && scrollRE.test(overflowY)
		if (passOverflow || passOverflowX || passOverflowY) {
			return element
		}
	}

	return window
}

export function isPx(value: unknown): boolean {
	if (typeof value === 'number') {
		return true
	}
	return typeof value === 'string' && value.endsWith('px')
}

export function isRem(value: unknown): boolean {
	if (typeof value === 'number') {
		return false
	}

	return typeof value === 'string' && value.endsWith('rem')
}

export function formatPx(value: string | number) {
	return typeof value === 'number' ? value : +value.replace('px', '')
}

export function remToPx(rem: string | number): number {
	if (typeof rem === 'number') {
		return rem
	}

	const value = +rem.replace('rem', '')

	const rootFontSize = window.getComputedStyle(document.documentElement).fontSize

	return value * parseFloat(rootFontSize)
}

export function requestAnimationFrame(fn: FrameRequestCallback): number {
	return root.requestAnimationFrame ? root.requestAnimationFrame(fn) : root.setTimeout(fn, 16)
}
