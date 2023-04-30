import LoadingBarComponent from './LoadingBar'
import { reactive } from 'vue'
import { mountInstance } from '../utils/components'

interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
  top?: string | number
}

interface InternalProps {
  value: number
  opacity: number
  error: boolean
}

interface LoadingBar {
  mergeConfig(options: LoadingBarOptions): void

  start(): void

  finish(): void

  error(): void

  setDefaultOptions(options: LoadingBarOptions): void

  resetDefaultOptions(): void
}

let valueTimer: number
let errorTimer: number
let opacityTimer: number
let finishTimer: number
let isMount: boolean
let setOptions: LoadingBarOptions = {}

const internalProps: InternalProps = {
  value: 0,
  opacity: 0,
  error: false,
}
const props: LoadingBarOptions & InternalProps = reactive(internalProps)

const mergeConfig = (options: LoadingBarOptions) => {
  Object.assign(props, options)
}

const setDefaultOptions = (options: LoadingBarOptions) => {
  Object.assign(props, options)
  setOptions = options
}

const resetDefaultOptions = () => {
  Object.keys(setOptions).forEach((key) => {
    if (props[key as keyof LoadingBarOptions] !== undefined) {
      props[key as keyof LoadingBarOptions] = undefined
    }
  })
}

const mount = () => {
  if (!isMount) {
    isMount = true
    mountInstance(LoadingBarComponent, props)
  }
}

const tickValue = () => {
  valueTimer = window.setTimeout(() => {
    if (props.value >= 95) return
    let num = Math.random()

    if (props.value < 70) num = Math.round(5 * Math.random())

    props.value += num
    tickValue()
  }, 200)
}

const clearTimer = () => {
  window.clearTimeout(errorTimer)
  window.clearTimeout(valueTimer)
  window.clearTimeout(opacityTimer)
  window.clearTimeout(finishTimer)
}

const start = () => {
  clearTimer()
  props.error = false
  props.value = 0

  mount()

  opacityTimer = window.setTimeout(() => {
    props.opacity = 1
  }, 200)

  tickValue()
}

const finish = () => {
  clearTimer()
  props.value = 100

  opacityTimer = window.setTimeout(() => {
    props.opacity = 0

    errorTimer = window.setTimeout(() => {
      props.error = false
    }, 250)
  }, 300)
}

const error = () => {
  clearTimer()
  props.error = true

  if (props.value === 100) {
    props.value = 0
  }

  mount()

  opacityTimer = window.setTimeout(() => {
    props.opacity = 1
  }, 200)

  tickValue()
  finishTimer = window.setTimeout(finish, 300)
}

const LoadingBar: LoadingBar = {
  start,
  finish,
  error,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig,
  setDefaultOptions,
  resetDefaultOptions,
}

export { props as loadingBarProps } from './props'

export const _LoadingBarComponent = LoadingBar

export default LoadingBar
