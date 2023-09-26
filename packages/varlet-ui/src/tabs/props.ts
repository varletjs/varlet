import { defineListenerProp, pickProps } from '../utils/components'
import { stickyProps } from '../sticky'
import { type PropType } from 'vue'

export type TabsDirection = 'horizontal' | 'vertical'

export type TabsScrollable = 'auto' | 'always'

export type TabsIndicatorPosition = 'normal' | 'reverse'

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  layoutDirection: {
    type: String as PropType<TabsDirection>,
    default: 'horizontal',
  },
  itemDirection: {
    type: String as PropType<TabsDirection>,
    default: 'horizontal',
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: false,
  },
  scrollable: {
    type: String as PropType<TabsScrollable>,
    default: 'auto',
  },
  indicatorPosition: {
    type: String as PropType<TabsIndicatorPosition>,
    default: 'normal',
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: pickProps(stickyProps, 'cssMode'),
  stickyZIndex: pickProps(stickyProps, 'zIndex'),
  offsetTop: pickProps(stickyProps, 'offsetTop'),
  onClick: defineListenerProp<(active: string | number) => void>(),
  onChange: defineListenerProp<(active: string | number) => void>(),
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
}
