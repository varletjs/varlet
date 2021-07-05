<script lang="ts">
import { defineComponent, h } from 'vue'
import { formatStyleVars } from '../utils/elements'
import type { PropType } from 'vue'
import type { StyleVars } from './index'

export default defineComponent({
  name: 'VarStyleProvider',
  props: {
    styleVars: {
      type: Object as PropType<StyleVars>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: 'var-style-provider',
          style: formatStyleVars(props.styleVars),
        },
        slots.default?.()
      )
  },
})
</script>
