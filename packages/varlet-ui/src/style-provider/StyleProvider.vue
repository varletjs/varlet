<script lang="ts">
import { defineComponent, h } from 'vue'
import { formatStyleVars } from '../utils/elements'
import type { PropType } from 'vue'
import type { StyleVars } from './index'
import { call, createNamespace } from '../utils/components'

const { n } = createNamespace('style-provider')

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
          class: n(),
          style: formatStyleVars(props.styleVars),
        },
        call(slots.default)
      )
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
