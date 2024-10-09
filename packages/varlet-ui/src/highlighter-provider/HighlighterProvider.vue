<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { call } from '@varlet/shared'
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
        call(slots.default)
      )
  },
})
</script>
