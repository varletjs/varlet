import { App, Directive, Plugin } from 'vue'
import { DirectiveBinding } from '@vue/runtime-core'
import { inViewport } from '../utils/elements'
import { checkIntersectionObserverAPI, createInViewportObserver, removeItem, throttle } from '../utils/shared'

interface LazyOptions {
  loading?: string
  error?: string
  attempt?: number
  throttleWait?: number
  filter?: (lazy: Lazy) => void
}

type Lazy = LazyOptions & {
  src: string
  arg: string | undefined
  currentAttempt: number
  attemptLock: boolean
}

type LazyHTMLElement = HTMLElement & { lazy: Lazy }

const BACKGROUND_IMAGE_ARG_NAME = 'background-image'
const LAZY_LOADING = 'lazy-loading'
const LAZY_ERROR = 'lazy-error'
const LAZY_ATTEMPT = 'lazy-attempt'
const EVENTS = ['resize', 'animationend', 'transitionend', 'touchmove', 'scroll']

const lazyElements: LazyHTMLElement[] = []

let defaultLazyOptions: LazyOptions = {
  loading: '',
  error: '',
  attempt: 3,
  throttleWait: 300,
}

let checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

let observer: IntersectionObserver | null = null

const useIntersectionObserverAPI: boolean = checkIntersectionObserverAPI()

function setLoading(el: LazyHTMLElement) {
  el.lazy.loading
    ? el.lazy.arg === BACKGROUND_IMAGE_ARG_NAME
      ? el.style.backgroundImage = `url(${el.lazy.loading})`
      : el.setAttribute('src', el.lazy.loading)
    : null

  !useIntersectionObserverAPI && checkAll()
}

function setError(el: LazyHTMLElement) {
  if (el.lazy.error) {
    if (el.lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
      el.style.backgroundImage = `url(${el.lazy.error})`
    } else {
      el.setAttribute('src', el.lazy.error)
    }
  }

  clear(el)
  !useIntersectionObserverAPI && checkAll()
}

function setSuccess(el: LazyHTMLElement, attemptSRC: string) {
  el.lazy.arg === BACKGROUND_IMAGE_ARG_NAME
    ? el.style.backgroundImage = `url(${attemptSRC})`
    : el.setAttribute('src', attemptSRC)

  clear(el)
  !useIntersectionObserverAPI && checkAll()
}

function bindEvents() {
  EVENTS.forEach((event: string) => {
    window.addEventListener(event, checkAllWithThrottle)
  })
}

function unbindEvents() {
  EVENTS.forEach((event: string) => {
    window.removeEventListener(event, checkAllWithThrottle)
  })
}

function buildAttemptSRC(el: LazyHTMLElement): string {
  const { src } = el.lazy

  if (el.lazy.currentAttempt === 0) {
    el.lazy.currentAttempt++
    return src
  }

  const index: number = src.indexOf('?')
  const url: string = index > -1 ? src.slice(0,  index) : src
  const params: string = index > -1 ? src.slice(src.indexOf('?')) : ''

  const searchParams = new URLSearchParams(params)
  searchParams.set('lazyAttempt', String(++el.lazy.currentAttempt))

  return `${url}?${searchParams.toString()}`
}

function mergeLazyOptions(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
  const lazyInnerOptions: LazyOptions = {
    loading: el.getAttribute(LAZY_LOADING) ?? defaultLazyOptions.loading,
    error: el.getAttribute(LAZY_ERROR) ?? defaultLazyOptions.error,
    attempt: el.getAttribute(LAZY_ATTEMPT) ? Number(el.getAttribute(LAZY_ATTEMPT)) : defaultLazyOptions.attempt
  }

  el.lazy = {
    src: binding.value,
    arg: binding.arg,
    currentAttempt: 0,
    attemptLock: false,
    ...lazyInnerOptions
  }

  defaultLazyOptions.filter?.(el.lazy)
}

function attemptLoad(el: LazyHTMLElement) {
  if (el.lazy.attemptLock === true) {
    return
  }
  el.lazy.attemptLock = true

  setLoading(el)

  const attemptSRC: string = buildAttemptSRC(el)

  const image: HTMLImageElement = new Image()
  image.src = attemptSRC
  image.addEventListener('load', () => {
    el.lazy.attemptLock = false
    setSuccess(el, attemptSRC)
  })
  image.addEventListener('error', () => {
    el.lazy.attemptLock = false
    ;(el.lazy.currentAttempt as number) >= (el.lazy.attempt as number)
      ? setError(el)
      : attemptLoad(el)
  })
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

function mounted(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
  mergeLazyOptions(el, binding)

  if (useIntersectionObserverAPI) {
    observe(el)
  } else {
    !lazyElements.includes(el) && lazyElements.push(el) === 1 && bindEvents()
    check(el)
  }
}

function unmounted(el: LazyHTMLElement) {
  clear(el)
}

function diff(el: LazyHTMLElement, binding: DirectiveBinding<string>): boolean {
  const { src, arg, attempt, loading, error } = el.lazy
  return src !== binding.value ||
    arg !== binding.arg ||
    attempt !== Number(el.getAttribute(LAZY_ATTEMPT)) ||
    loading !== el.getAttribute(LAZY_LOADING) ||
    error !== el.getAttribute(LAZY_ERROR)
}

function updated(el: LazyHTMLElement, binding: DirectiveBinding<string>) {
  diff(el, binding) ? mounted(el, binding) : check(el)
}

const Lazy: Directive & Plugin = {
  mounted,
  unmounted,
  updated,
  install(app: App, lazyOptions: LazyOptions) {
    defaultLazyOptions = { ...defaultLazyOptions, ...lazyOptions }

    checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

    app.directive('lazy', this)
  }
}

export default Lazy
