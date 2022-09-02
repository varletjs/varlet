import { reactive } from 'vue'

interface Context {
  locks: Record<any, number>
  zIndex: number
  touchmoveForbid: boolean
  showPlayground: boolean,
  playgroundURL: string
}

const context: Context = {
  locks: {},
  zIndex: 2000,
  touchmoveForbid: true,
  showPlayground: false,
  playgroundURL: ''
}

export const _ContextComponent = reactive<Context>(context)

export default reactive<Context>(context)
