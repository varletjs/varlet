import Progress from './components/progress'
import config from '@config'
import { reactive } from 'vue'
import { getBrowserTheme, Theme, watchTheme } from '@varlet/cli/client'
import { mountInstance } from './components/utils/components'
import { get } from 'lodash-es'

function getColor(theme?: Theme) {
  return get(config, `${theme ?? getBrowserTheme()}.color-progress`)
}

function getTrackColor(theme?: Theme) {
  return get(config, `${theme ?? getBrowserTheme()}.color-progress-track`)
}

export function useProgress() {
  let timer: number
  let currentTheme: Theme

  const trackColor = getTrackColor()
  const color = getColor()

  const props = reactive({
    style: {
      position: 'fixed',
      width: '100%',
      left: 0,
      top: 0,
      zIndex: 10086,
    },
    trackColor,
    color,
    lineWidth: 3,
    value: 0,
  })

  watchTheme((theme) => {
    currentTheme = theme
    props.trackColor = getTrackColor(theme)
    props.color = props.value === 100 ? getTrackColor(theme) : getColor(theme)
  }, false)

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
    props.value = 0
    setTimeout(() => (props.color = getColor(currentTheme)), 200)
    changeValue()
  }

  const end = () => {
    props.value = 100
    setTimeout(() => (props.color = getTrackColor(currentTheme)), 300)
    window.clearTimeout(timer)
  }

  mountInstance(Progress, props)

  return {
    start,
    end,
  }
}
