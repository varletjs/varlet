import { defineComponent } from 'vue'
import context from '../context'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'
import '../styles/common.less'
import './loadingBar.less'

const { classes, n } = createNamespace('loading-bar')

export default defineComponent({
  name: 'VarLoadingBar',
  props,
  setup(props) {
    return () => {
      return (
        <div
          class={classes(n(), [props.error, n('--error')])}
          style={{
            zIndex: context.zIndex + 10,
            width: `${props.value}%`,
            opacity: props.opacity,
            height: toSizeUnit(props.height),
            backgroundColor: props.error ? props.errorColor : props.color,
          }}
        ></div>
      )
    }
  },
})
