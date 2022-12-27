import type { PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'
import { Texts } from '.'

export interface NormalColumn {
  texts: Texts
  initialIndex?: number
}

export interface CascadeColumn {
  [textKey: string]: any
  children: CascadeColumn[]
}

export const props = {
  columns: {
    type: Array as PropType<NormalColumn[] | CascadeColumn[] | Texts>,
    default: () => [],
  },
  title: {
    type: String,
  },
  textKey: {
    type: String,
    default: 'text',
  },
  toolbar: {
    type: Boolean,
    default: true,
  },
  cascade: {
    type: Boolean,
    default: false,
  },
  cascadeInitialIndexes: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
  optionHeight: {
    type: [Number, String],
    default: 44,
  },
  optionCount: {
    type: [Number, String],
    default: 6,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonTextColor: {
    type: String,
  },
  cancelButtonTextColor: {
    type: String,
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: false,
  },
  textFormatter: {
    type: Function as PropType<(text: any, columnIndex: number) => any>,
    default: (text: any) => text,
  },
  onChange: defineListenerProp<(texts: Texts, indexes: number[]) => void>(),
  onConfirm: defineListenerProp<(texts: Texts, indexes: number[]) => void>(),
  onCancel: defineListenerProp<(texts: Texts, indexes: number[]) => void>(),
  // dynamic internal
  ...pickProps(popupProps, [
    'show',
    'onUpdate:show',
    'closeOnClickOverlay',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    'onRouteChange',
  ]),
}
