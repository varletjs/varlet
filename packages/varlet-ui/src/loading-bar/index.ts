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

let timer: number
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

const changeValue = () => {
  timer = window.setTimeout(() => {
    if (props.value >= 95) return
    let num = Math.random()

    if (props.value < 70) num = Math.round(5 * Math.random())

    props.value += num
    changeValue()
  }, 200)
}

const start = () => {
  if (!isMount) {
    isMount = true
    mountInstance(LoadingBarComponent, props)
  }

  if (!props.error || props.value === 100) {
    props.value = 0
  }

  setTimeout(() => {
    props.opacity = 1
  }, 200)
  changeValue()
}

const finish = () => {
  props.value = 100

  setTimeout(() => {
    props.opacity = 0

    setTimeout(() => {
      props.error = false
    }, 250)
  }, 300)

  window.clearTimeout(timer)
}

const error = () => {
  props.error = true

  LoadingBar.start()

  setTimeout(LoadingBar.finish, 300)
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
