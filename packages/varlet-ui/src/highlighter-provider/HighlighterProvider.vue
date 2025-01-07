<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { provideHighlighterProvider } from './provide'

const { name, n } = createNamespace('highlighter-provider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const highlighter = computed(() => props.highlighter)
    const theme = computed(() => props.theme)

    provideHighlighterProvider({ highlighter, theme })

    return () =>
      h(
        props.tag,
        {
          class: n(),
        },
        call(slots.default),
      )
  },
})
</script>
