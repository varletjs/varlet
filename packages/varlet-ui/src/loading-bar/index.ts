import LoadingBarComponent from './LoadingBar'
import { reactive } from 'vue'
import { mountInstance } from '../utils/components'
import { props as loadingBarProps } from './props'

interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
  top?: string | number
  finishDelay?: number
}

interface InternalProps {
  value: number
  opacity: number
  error: boolean
}

interface LoadingBar {
  start(): void

  finish(): void

  error(): void

  setDefaultOptions(options: LoadingBarOptions): void

  resetDefaultOptions(): void
}

const OPACITY_DELAY = 200

let valueTimer: number
let errorTimer: number
let finishTimer: number
let finishErrorTimer: number
let opacityTimer: number

let isMount: boolean
let internalOptions: LoadingBarOptions = {}

const internalProps: InternalProps = {
  value: 0,
  opacity: 0,
  error: false,
}

const ctx: LoadingBarOptions & InternalProps = reactive(internalProps)

function setDefaultOptions(options: LoadingBarOptions) {
  Object.assign(ctx, options)
  internalOptions = options
}

const resetDefaultOptions = () => {
  Object.keys(internalOptions).forEach((key) => {
    if (ctx[key as keyof LoadingBarOptions] !== undefined) {
      ctx[key as keyof LoadingBarOptions] = undefined
    }
  })
}

const mount = () => {
  if (!isMount) {
    isMount = true
    mountInstance(LoadingBarComponent, ctx)
  }
}

const tick = () => {
  valueTimer = window.setTimeout(() => {
    if (ctx.value >= 95) {
      return
    }

    ctx.value += ctx.value < 70 ? Math.round(5 * Math.random()) : Math.random()
    tick()
  }, 200)
}

const clearTimer = () => {
  window.clearTimeout(valueTimer)
  window.clearTimeout(opacityTimer)
  window.clearTimeout(finishTimer)
  window.clearTimeout(errorTimer)
  window.clearTimeout(finishErrorTimer)
}

const finishTask = () => {
  clearTimer()
  ctx.value = 100

  opacityTimer = window.setTimeout(() => {
    ctx.opacity = 0

    finishErrorTimer = window.setTimeout(() => {
      ctx.error = false
    }, 250)
  }, OPACITY_DELAY + 100)
}

const start = () => {
  clearTimer()
  ctx.error = false
  ctx.value = 0

  mount()

  opacityTimer = window.setTimeout(() => {
    ctx.opacity = 1
  }, OPACITY_DELAY)

  tick()
}

const finish = () => {
  finishTimer = window.setTimeout(finishTask, ctx.finishDelay ?? 0)
}

const error = () => {
  clearTimer()
  ctx.error = true

  if (ctx.value === 100) {
    ctx.value = 0
  }

  mount()

  opacityTimer = window.setTimeout(() => {
    ctx.opacity = 1
  }, OPACITY_DELAY)

  tick()
  errorTimer = window.setTimeout(finishTask, 300)
}

const LoadingBar: LoadingBar = {
  start,
  finish,
  error,
  setDefaultOptions,
  resetDefaultOptions,
}

export { loadingBarProps }

export const _LoadingBarComponent = LoadingBar

export default LoadingBar
