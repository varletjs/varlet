import { getParentScroller, inViewport } from '../utils/elements'
import {
  checkIntersectionObserverAPI,
  createCache,
  createInViewportObserver,
  removeItem,
  throttle,
} from '../utils/shared'
import type { App, Directive, Plugin, DirectiveBinding } from 'vue'
import type { CacheInstance } from '../utils/shared'

interface LazyOptions {
  loading?: string
  error?: string
  attempt?: number
  throttleWait?: number
  filter?: (lazy: Lazy) => void
  events?: string[]
}

type LazyState = 'pending' | 'success' | 'error'

type Lazy = LazyOptions & {
  src: string
  arg: string | undefined
  currentAttempt: number
  attemptLock: boolean
  state: LazyState
  preloadImage?: HTMLImageElement
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

export const imageCache: CacheInstance<string> = createCache<string>(100)

export const defaultLazyOptions: LazyOptions = {
  loading: PIXEL,
  error: PIXEL,
  attempt: 3,
  throttleWait: 300,
  events: EVENTS,
}

let checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

let observer: IntersectionObserver | null = null

function setSRC(el: LazyHTMLElement, src: string) {
  if (el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
    el.style.backgroundImage = `url(${src})`
  } else {
    el.setAttribute('src', src)
  }
}

function setLoading(el: LazyHTMLElement) {
  el._lazy.loading && setSRC(el, el._lazy.loading)

  !checkIntersectionObserverAPI() && checkAll()
}

function setError(el: LazyHTMLElement) {
  el._lazy.error && setSRC(el, el._lazy.error)
  el._lazy.state = 'error'

  clear(el)
  !checkIntersectionObserverAPI() && checkAll()
}

function setSuccess(el: LazyHTMLElement, attemptSRC: string) {
  setSRC(el, attemptSRC)
  el._lazy.state = 'success'

  clear(el)
  !checkIntersectionObserverAPI() && checkAll()
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

function createLazy(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
  const lazyOptions: LazyOptions = {
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
    ...lazyOptions,
  }

  setSRC(el, PIXEL)

  defaultLazyOptions.filter?.(el._lazy)
}

function createImage(el: LazyHTMLElement, attemptSRC: string) {
  const image: HTMLImageElement = new Image()
  image.src = attemptSRC
  el._lazy.preloadImage = image

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
  if (el._lazy.attemptLock) {
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

function add(el: LazyHTMLElement) {
  if (checkIntersectionObserverAPI()) {
    observe(el)
  } else {
    !lazyElements.includes(el) && lazyElements.push(el)
    bindEvents(window)
    bindEvents(getParentScroller(el))
    check(el)
  }
}

function clear(el: LazyHTMLElement) {
  if (checkIntersectionObserverAPI()) {
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
  createLazy(el, binding)
  add(el)
}

function updated(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
  if (!diff(el, binding)) {
    if (!checkIntersectionObserverAPI() && lazyElements.includes(el)) {
      check(el)
    }
    return
  }

  mounted(el, binding)
}

function mergeLazyOptions(lazyOptions: LazyOptions = {}) {
  const { events, loading, error, attempt, throttleWait, filter } = lazyOptions

  defaultLazyOptions.events = events ?? defaultLazyOptions.events
  defaultLazyOptions.loading = loading ?? defaultLazyOptions.loading
  defaultLazyOptions.error = error ?? defaultLazyOptions.error
  defaultLazyOptions.attempt = attempt ?? defaultLazyOptions.attempt
  defaultLazyOptions.throttleWait = throttleWait ?? defaultLazyOptions.throttleWait
  defaultLazyOptions.filter = filter
}

const Lazy: Directive & Plugin = {
  mounted,
  unmounted: clear,
  updated,
  install(app: App, lazyOptions: LazyOptions) {
    mergeLazyOptions(lazyOptions)

    checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

    app.directive('lazy', this)
  },
}

export const _LazyComponent = Lazy

export default Lazy
