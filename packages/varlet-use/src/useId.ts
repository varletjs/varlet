import { ref, getCurrentInstance } from 'vue'
import { kebabCase } from '@varlet/shared'

export function useId() {
  const id = ref<string>()
  const instance = getCurrentInstance()!

  // @ts-ignore
  const isTestEnv = process.env.NODE_ENV === 'test'
  const name = kebabCase(instance.type.name!)
  id.value = isTestEnv ? name : `${name}-${instance.uid}`

  return id
}
