import Progress from './components/progress'
import { reactive } from 'vue'
import config from '@config'
import { getBrowserThemes, mountInstance, watchThemes } from './utils'
import { get } from 'lodash-es'

function getColor(themes?: 'themes' | 'darkThemes') {
  const themesKey = get(config, 'themesKey')

  return get(config, `${themes ?? getBrowserThemes(themesKey)}.color-progress`)
}

function getTrackColor(themes?: 'themes' | 'darkThemes') {
  const themesKey = get(config, 'themesKey')

  return get(config, `${themes ?? getBrowserThemes(themesKey)}.color-progress-track`)
}

export function useProgress() {
  let timer: number
  let currentThemes: 'themes' | 'darkThemes'
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

  watchThemes((themes) => {
    currentThemes = themes
    props.trackColor = getTrackColor(themes)
    props.color = props.value === 100 ? getTrackColor(themes) : getColor(themes)
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
    setTimeout(() => (props.color = getColor(currentThemes)), 200)
    changeValue()
  }

  const end = () => {
    props.value = 100
    setTimeout(() => (props.color = getTrackColor(currentThemes)), 300)
    window.clearTimeout(timer)
  }

  mountInstance(Progress, props)

  return {
    start,
    end,
  }
}
