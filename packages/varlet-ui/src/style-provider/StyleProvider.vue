<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import { StyleVars } from './index'
import { formatStyleVars } from '../utils/elements'

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
