import { PropType } from 'vue'

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
  onChange: {
    type: Function,
  },
  onConfirm: {
    type: Function,
  },
  onCancel: {
    type: Function,
  },
}
