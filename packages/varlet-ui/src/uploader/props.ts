import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export interface VarFile {
  id: number
  file?: File
  name?: string
  url?: string
  cover?: string
  progress?: number
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  state?: 'loading' | 'success' | 'error'
}

export type UploaderResolveType = 'default' | 'file' | 'data-url'

export type UploaderValidateTrigger = 'onChange' | 'onRemove'

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
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  resolveType: {
    type: String as PropType<UploaderResolveType>,
    default: 'default',
  },
  removable: {
    type: Boolean,
    default: true,
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: true,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<UploaderValidateTrigger>>,
    default: () => ['onChange', 'onRemove'],
  },
  rules: Array as PropType<Array<(v: VarFile) => any>>,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: defineListenerProp<(chooseFile: () => void, event: Event) => void>(),
  onBeforeFilter: defineListenerProp<(files: VarFile[]) => Promise<VarFile[]> | VarFile[]>(),
  onBeforeRead: defineListenerProp<(file: VarFile) => Promise<any> | any>(),
  onAfterRead: defineListenerProp<(file: VarFile) => any>(),
  onBeforeRemove: defineListenerProp<(file: VarFile) => any>(),
  onRemove: defineListenerProp<(file: VarFile) => any>(),
  onOversize: defineListenerProp<(file: VarFile) => any>(),
  onPreview: defineListenerProp<(file: VarFile) => void>(),
  'onUpdate:modelValue': defineListenerProp<(files: VarFile[]) => any>(),
}
