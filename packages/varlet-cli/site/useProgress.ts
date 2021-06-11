import { reactive } from 'vue'
import { Progress } from '@varlet/ui'
import { mountInstance } from '@varlet/ui/es/utils/components'

export function useProgress() {
  const props = reactive({
    style: {
      position: 'fixed',
      width: '100%',
      left: 0,
      top: 0,
      zIndex: 10086
    },
    trackColor: '#fff',
    color: '#3594d9',
    lineWidth: 2,
    value: 0
  })

  let timer: number

  const changeValue = () => {
    timer = window.setTimeout(() => {
      if (props.value >= 95) return
      let num = Math.random()

      if(props.value < 70) num = Math.round(5 * Math.random())

      props.value += num
      changeValue()
    }, 200)
  }

  const start = () => {
    props.value = 0;
    setTimeout(() => props.color = '#3594d9', 200)
    changeValue()
  }

  const end = () => {
    props.value = 100;
    setTimeout(() => props.color = '#fff', 200)
    window.clearTimeout(timer)
  }

  mountInstance(Progress, props)

  return {
    start,
    end
  }
}
