import { ref, getCurrentInstance } from 'vue'
import { kebabCase } from '@varlet/shared'

export function useId() {
  const id = ref<string>()
  const instance = getCurrentInstance()!
  const name = kebabCase(instance.type.name!)

  id.value = process.env.NODE_ENV === 'test' ? `${name}-mock-id` : `${name}-${instance.uid}`

  return id
}
