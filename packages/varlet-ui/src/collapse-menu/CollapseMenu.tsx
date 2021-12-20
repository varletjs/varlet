import { defineComponent } from 'vue'
import { props } from './props'
import '../styles/common.less'
import './collapseMenu.less'

export default defineComponent({
  name: 'VarCollapseMenu',
  props,
  setup(props, { slots }) {
    return () => <div class={'var-collapse-menu'}>{slots.default && slots.default()}</div>
  },
})
