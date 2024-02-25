import { reactive } from 'vue'

interface Context {
  locks: Record<any, number>
  zIndex: number
  stack: number[]
  enableRipple: boolean
}

const context: Context = {
  locks: {},
  zIndex: 2000,
  stack: [],
  enableRipple: true,
}

export const _ContextComponent = reactive<Context>(context)

export default reactive<Context>(context)
