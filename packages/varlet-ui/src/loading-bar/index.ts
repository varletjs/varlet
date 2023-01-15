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
}

let timer: number
let isMount: boolean
const props: LoadingBarOptions & InternalProps = reactive({
  value: 0,
  opacity: 0,
  error: false,
})

const mergeConfig = (options: LoadingBarOptions) => {
  Object.assign(props, options)
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
  mergeConfig,
}

export { props as loadingBarProps } from './props'

export const _LoadingBarComponent = LoadingBar

export default LoadingBar
