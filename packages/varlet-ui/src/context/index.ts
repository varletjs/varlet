import { reactive } from 'vue'

interface Context {
  locks: Record<any, number>
  zIndex: number
}

const context: Context = {
  locks: {},
  zIndex: 2000,
}

export default reactive<Context>(context)
