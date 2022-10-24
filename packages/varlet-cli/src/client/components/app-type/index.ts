import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AppType',
  setup(props, { slots }) {
    return () => h('div', { class: 'app-type' }, [slots.default?.()])
  },
})
