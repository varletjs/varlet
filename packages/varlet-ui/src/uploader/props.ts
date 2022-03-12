import type { PropType } from 'vue'

export interface VarFile {
  id: number
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  state?: 'loading' | 'success' | 'error'
}

export type ValidateTriggers = 'onChange' | 'onRemove'

export const props = {
  modelValue: {
    type: Array as PropType<VarFile[]>,
    default: () => [],
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  capture: {
    type: [String, Boolean] as PropType<boolean | 'user' | 'environment'>,
    default: undefined,
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
    type: [Number, String],
  },
  maxsize: {
    type: [Number, String],
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
    default: () => ['onChange', 'onRemove'],
  },
  rules: {
    type: Array as PropType<Array<(v: VarFile) => any>>,
  },
  hideList: {
    type: Boolean,
    default: false,
  },
  onBeforeRead: {
    type: Function as PropType<(file: VarFile) => Promise<boolean> | boolean>,
  },
  onAfterRead: {
    type: Function as PropType<(file: VarFile) => any>,
  },
  onBeforeRemove: {
    type: Function as PropType<(file: VarFile) => any>,
  },
  onRemove: {
    type: Function as PropType<(file: VarFile) => any>,
  },
  onOversize: {
    type: Function as PropType<(file: VarFile) => any>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(files: VarFile[]) => any>,
  },
}
