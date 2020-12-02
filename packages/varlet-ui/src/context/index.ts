import { reactive } from 'vue'

interface Context {
  zIndex: number
}

const context: Context = {
  zIndex: 2000
}

export default reactive<Context>(context)
