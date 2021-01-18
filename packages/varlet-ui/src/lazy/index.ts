import { App, Directive, Plugin } from 'vue'
import { DirectiveBinding } from '@vue/runtime-core'
import { getParentScroller, inViewport } from '../utils/elements'
import {
	CacheInstance,
	checkIntersectionObserverAPI,
	createCache,
	createInViewportObserver,
	removeItem,
	throttle,
} from '../utils/shared'

interface LazyOptions {
	loading?: string
	error?: string
	attempt?: number
	throttleWait?: number
	filter?: (lazy: Lazy) => void
	events?: string[]
}

type Lazy = LazyOptions & {
	src: string
	arg: string | undefined
	currentAttempt: number
	attemptLock: boolean
	state: 'pending' | 'success' | 'error'
}

export type LazyHTMLElement = HTMLElement & { _lazy: Lazy }

type ListenTarget = Window | HTMLElement

const BACKGROUND_IMAGE_ARG_NAME = 'background-image'
const LAZY_LOADING = 'lazy-loading'
const LAZY_ERROR = 'lazy-error'
const LAZY_ATTEMPT = 'lazy-attempt'
const EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
export const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

const lazyElements: LazyHTMLElement[] = []

let listenTargets: ListenTarget[] = []

const imageCache: CacheInstance<string> = createCache<string>(100)

export const defaultLazyOptions: LazyOptions = {
	loading: PIXEL,
	error: PIXEL,
	attempt: 3,
	throttleWait: 300,
	events: EVENTS,
}

let checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

let observer: IntersectionObserver | null = null

const useIntersectionObserverAPI: boolean = checkIntersectionObserverAPI()

function setLoading(el: LazyHTMLElement) {
	el._lazy.loading
		? el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME
			? (el.style.backgroundImage = `url(${el._lazy.loading})`)
			: el.setAttribute('src', el._lazy.loading)
		: null

	!useIntersectionObserverAPI && checkAll()
}

function setError(el: LazyHTMLElement) {
	if (el._lazy.error) {
		if (el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
			el.style.backgroundImage = `url(${el._lazy.error})`
		} else {
			el.setAttribute('src', el._lazy.error)
		}
	}

	el._lazy.state = 'error'

	clear(el)
	!useIntersectionObserverAPI && checkAll()
}

function setSuccess(el: LazyHTMLElement, attemptSRC: string) {
	el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME
		? (el.style.backgroundImage = `url(${attemptSRC})`)
		: el.setAttribute('src', attemptSRC)

	el._lazy.state = 'success'

	clear(el)
	!useIntersectionObserverAPI && checkAll()
}

function bindEvents(listenTarget: ListenTarget) {
	if (listenTargets.includes(listenTarget)) {
		return
	}
	listenTargets.push(listenTarget)

	defaultLazyOptions.events?.forEach((event: string) => {
		listenTarget.addEventListener(event, checkAllWithThrottle, { passive: true })
	})
}

function unbindEvents() {
	listenTargets.forEach((listenTarget: ListenTarget) => {
		defaultLazyOptions.events?.forEach((event: string) => {
			listenTarget.removeEventListener(event, checkAllWithThrottle)
		})
	})

	listenTargets = []
}

function updateLazyOptions(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
	const lazyInnerOptions: LazyOptions = {
		loading: el.getAttribute(LAZY_LOADING) ?? defaultLazyOptions.loading,
		error: el.getAttribute(LAZY_ERROR) ?? defaultLazyOptions.error,
		attempt: el.getAttribute(LAZY_ATTEMPT) ? Number(el.getAttribute(LAZY_ATTEMPT)) : defaultLazyOptions.attempt,
	}

	el._lazy = {
		src: binding.value,
		arg: binding.arg,
		currentAttempt: 0,
		state: 'pending',
		attemptLock: false,
		...lazyInnerOptions,
	}

	defaultLazyOptions.filter?.(el._lazy)
}

function createImage(el: LazyHTMLElement, attemptSRC: string) {
	const image: HTMLImageElement = new Image()
	image.src = attemptSRC
	image.addEventListener('load', () => {
		el._lazy.attemptLock = false

		imageCache.add(attemptSRC)
		setSuccess(el, attemptSRC)
	})
	image.addEventListener('error', () => {
		el._lazy.attemptLock = false
		;(el._lazy.currentAttempt as number) >= (el._lazy.attempt as number) ? setError(el) : attemptLoad(el)
	})
}

function attemptLoad(el: LazyHTMLElement) {
	if (el._lazy.attemptLock === true) {
		return
	}
	el._lazy.attemptLock = true
	el._lazy.currentAttempt++

	const { src: attemptSRC }: Lazy = el._lazy

	if (imageCache.has(attemptSRC)) {
		setSuccess(el, attemptSRC)
		el._lazy.attemptLock = false
		return
	}

	setLoading(el)
	createImage(el, attemptSRC)
}

function check(el: LazyHTMLElement) {
	inViewport(el) && attemptLoad(el)
}

function checkAll() {
	lazyElements.forEach((el: LazyHTMLElement) => check(el))
}

function clear(el: LazyHTMLElement) {
	if (useIntersectionObserverAPI) {
		observer?.unobserve(el)
	} else {
		removeItem(lazyElements, el)
		lazyElements.length === 0 && unbindEvents()
	}
}

function observe(el: LazyHTMLElement) {
	if (!observer) {
		observer = createInViewportObserver<LazyHTMLElement>((el: LazyHTMLElement) => attemptLoad(el))
	}

	observer.unobserve(el)
	observer.observe(el)
}

function diff(el: LazyHTMLElement, binding: DirectiveBinding<string>): boolean {
	const { src, arg, attempt, loading, error } = el._lazy
	return (
		src !== binding.value ||
		arg !== binding.arg ||
		attempt !== Number(el.getAttribute(LAZY_ATTEMPT)) ||
		loading !== el.getAttribute(LAZY_LOADING) ||
		error !== el.getAttribute(LAZY_ERROR)
	)
}

function mounted(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
	!el.getAttribute('src') && el.setAttribute('src', PIXEL)

	updateLazyOptions(el, binding)

	if (useIntersectionObserverAPI) {
		observe(el)
	} else {
		bindEvents(window)
		bindEvents(getParentScroller(el))
		check(el)
	}
}

function unmounted(el: LazyHTMLElement) {
	clear(el)
}

function updated(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
	diff(el, binding)
		? mounted(el, binding)
		: !useIntersectionObserverAPI
		? lazyElements.includes(el)
			? check(el)
			: null
		: null
}

function mergeLazyOptions(lazyOptions: LazyOptions) {
	defaultLazyOptions.events = lazyOptions.events ?? defaultLazyOptions.events
	defaultLazyOptions.loading = lazyOptions.loading ?? defaultLazyOptions.loading
	defaultLazyOptions.error = lazyOptions.error ?? defaultLazyOptions.error
	defaultLazyOptions.attempt = lazyOptions.attempt ?? defaultLazyOptions.attempt
	defaultLazyOptions.throttleWait = lazyOptions.throttleWait ?? defaultLazyOptions.throttleWait
	defaultLazyOptions.filter = lazyOptions.filter
}

const Lazy: Directive & Plugin = {
	mounted,
	unmounted,
	updated,
	install(app: App, lazyOptions: LazyOptions) {
		mergeLazyOptions(lazyOptions)

		checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

		app.directive('lazy', this)
	},
}

export default Lazy
