import { ref } from 'vue'
import type { Ref } from 'vue'
import zhCN from './zh-CN'

export type Message = {
  // Button component
  button: string

  // internal
  lang?: string
  [key: PropertyKey]: any
}

function useLocale<T = Message>() {
  const messages: Record<string, Partial<T>> = {}
  const currentMessage: Ref<Partial<T>> = ref({})

  const add = (lang: string, message: Partial<T> & { lang?: string }) => {
    message.lang = lang
    messages[lang] = message
  }

  const use = (lang: string) => {
    if (!messages[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return {}
    }

    currentMessage.value = messages[lang]
  }

  const merge = (lang: string, message: Partial<T>) => {
    if (!messages[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return
    }

    messages[lang] = { ...messages[lang], ...message }

    use(lang)
  }

  const t = (id: string) => {
    if (Object.prototype.hasOwnProperty.call(currentMessage.value, id)) {
      return currentMessage.value[id]
    }

    return id
  }

  return {
    messages,
    currentMessage,
    add,
    use,
    merge,
    t
  }
}

const { messages, currentMessage, add, use, merge } = useLocale()

add('zh-CN', zhCN)
use('zh-CN')

export { messages, currentMessage, add, use, merge, useLocale }

export const _LocaleComponent = { messages, currentMessage, add, use, merge, useLocale }

export default {
  messages,
  currentMessage,
  add,
  use,
  merge,
  useLocale,
}
