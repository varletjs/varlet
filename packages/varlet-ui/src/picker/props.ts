import { PropType } from 'vue'
import { pickProps } from '../utils/components'
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
    default: [],
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
  onChange: {
    type: Function as PropType<(texts: Texts, indexes: number[]) => void>,
  },
  onConfirm: {
    type: Function as PropType<(texts: Texts, indexes: number[]) => void>,
  },
  onCancel: {
    type: Function as PropType<(texts: Texts, indexes: number[]) => void>,
  },
  // dynamic internal
  ...pickProps(popupProps, [
    'show',
    'onUpdate:show',
    'closeOnClickOverlay',
    'teleport',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    'onRouteChange',
  ]),
}
