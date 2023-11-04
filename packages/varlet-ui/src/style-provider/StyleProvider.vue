<script lang="ts">
import { defineComponent, h } from 'vue'
import { formatStyleVars } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { call } from '@varlet/shared'

const { name, n } = createNamespace('style-provider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    return () =>
      h(
        props.tag,
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
