<script lang="ts">
import { defineComponent, h } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { call, hasOwn } from '@varlet/shared'
import { provideLocaleProvider } from './provide'

const { name, n } = createNamespace('locale-provider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    provideLocaleProvider({
      t,
    })

    function t(id: string) {
      if (props.messages && hasOwn(props.messages, props.locale) && hasOwn(props.messages[props.locale], id)) {
        return props.messages[props.locale][id]
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
