<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { call, hasOwn } from '@varlet/shared'
import { provideLocaleProvider } from './provide'
import { type Message } from '../locale'

const { name, n } = createNamespace('locale-provider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const messages = computed(() =>
      Object.entries(props.messages ?? {}).reduce((messages, [key, value]) => {
        messages[key] = {
          ...value,
          lang: key,
        }
        return messages
      }, {} as Record<string, Partial<Message>>)
    )
    provideLocaleProvider({
      t,
    })

    function t(id: string) {
      if (hasOwn(messages.value, props.locale) && hasOwn(messages.value[props.locale], id)) {
        return messages.value[props.locale][id]
      }
    }

    return () =>
      h(
        props.tag,
        {
          class: n(),
        },
        call(slots.default)
      )
  },
})
</script>
