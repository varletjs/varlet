import { PropType } from 'vue'
import { pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'

export interface NormalColumn {
  texts: any[]
  initialIndex?: number
}

export interface CascadeColumn {
  [textKey: string]: any
  children: CascadeColumn[]
}

export const props = {
  columns: {
    type: Array as PropType<NormalColumn[] | CascadeColumn[]>,
    default: [],
  },
  title: {
    type: String,
    default: '请选择',
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
    type: Number,
    default: 44,
  },
  optionCount: {
    type: Number,
    default: 6,
  },
  confirmButtonText: {
    type: String,
    default: '确认',
  },
  cancelButtonText: {
    type: String,
    default: '取消',
  },
  confirmButtonColor: {
    type: String,
  },
  cancelButtonColor: {
    type: String,
  },
  dynamic: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
  },
  onConfirm: {
    type: Function,
  },
  onCancel: {
    type: Function,
  },
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
