import { PropType } from 'vue'

export interface VarFile {
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: string
  state?: 'loading' | 'success' | 'error'
}

export type ValidateTriggers = 'onChange' | 'onRemove'

export const props = {
  modelValue: {
    type: Array as PropType<VarFile[]>,
    default: [],
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  capture: {
    type: String,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  removable: {
    type: Boolean,
    default: true,
  },
  maxlength: {
    type: Number,
  },
  maxsize: {
    type: Number,
  },
  previewed: {
    type: Boolean,
    default: true,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: ['onChange', 'onRemove'],
  },
  rules: {
    type: Array as PropType<Array<(v: VarFile) => any>>,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
  onBeforeRead: {
    type: Function as PropType<(file: VarFile) => Promise<boolean> | boolean>,
  },
  onAfterRead: {
    type: Function as PropType<(file: VarFile) => any>,
  },
  onOversize: {
    type: Function as PropType<(file: VarFile) => any>,
  },
}
