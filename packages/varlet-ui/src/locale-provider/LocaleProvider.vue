<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { call } from '@varlet/shared'
import { provideLocaleProvider } from './provide'

const { name, n } = createNamespace('locale-provider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    provideLocaleProvider({
      locale: computed(() => props.locale),
    })

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
