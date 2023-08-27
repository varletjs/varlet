import { type PropType } from 'vue'
import { type ColSizeDescriptor } from './provide'
import { defineListenerProp } from '../utils/components'

export type ColAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | 'flex-start'
  | 'flex-end'

export type ColJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type ColDirection = 'row' | 'column'

export type ColBreakpoint = string | number | ColSizeDescriptor | undefined

export const props = {
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<ColDirection>,
    default: 'row',
  },
  justify: String as PropType<ColJustify>,
  align: String as PropType<ColDirection>,
  xs: [Object, Number, String] as PropType<ColBreakpoint>,
  sm: [Object, Number, String] as PropType<ColBreakpoint>,
  md: [Object, Number, String] as PropType<ColBreakpoint>,
  lg: [Object, Number, String] as PropType<ColBreakpoint>,
  xl: [Object, Number, String] as PropType<ColBreakpoint>,
  onClick: defineListenerProp<(e: Event) => void>(),
}
