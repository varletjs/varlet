import { InputHTMLAttributes, VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, Rules as UploaderRules, VarComponent } from './varComponent'

export declare const uploaderProps: Record<keyof UploaderProps, any>

export type VarFileFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type VarFileState = 'loading' | 'success' | 'error'

export interface VarFile {
  id?: number | string
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: VarFileFit
  state?: VarFileState
  progress?: number
}

export type UploaderResolveType = 'default' | 'file' | 'data-url'

export type UploaderValidateTrigger = 'onChange' | 'onRemove'

export type UploaderVarFileUtils = {
  getLoading(): VarFile[]
  getSuccess(): VarFile[]
  getError(): VarFile[]
}

export type UploaderCapture = boolean | 'user' | 'environment'

export interface UploaderProps extends BasicAttributes {
  modelValue?: VarFile[]
  accept?: string
  capture?: InputHTMLAttributes['capture']
  multiple?: boolean
  readonly?: boolean
  disabled?: boolean
  elevation?: boolean | string | number
  removable?: boolean
  maxlength?: string | number
  maxsize?: string | number
  previewed?: boolean
  hideList?: boolean
  ripple?: boolean
  preventDefaultPreview?: boolean
  resolveType?: UploaderResolveType
  validateTrigger?: Array<UploaderValidateTrigger>
  rules?: UploaderRules
  onClickAction?: ListenerProp<(chooseFile: () => void, event: Event) => void>
  onBeforeFilter?: ListenerProp<(files: VarFile[]) => Promise<VarFile[]> | VarFile[]>
  onBeforeRead?: ListenerProp<(file: VarFile) => Promise<any> | any>
  onAfterRead?: ListenerProp<(file: VarFile) => any>
  onOversize?: ListenerProp<(file: VarFile) => any>
  onBeforeRemove?: ListenerProp<(file: VarFile) => any>
  onRemove?: ListenerProp<(file: VarFile) => any>
  onPreview?: ListenerProp<(file: VarFile) => void>
  'onUpdate:modelValue'?: ListenerProp<(files: VarFile[]) => any>
}

export class Uploader extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<UploaderProps>

  $props: UploaderProps

  $slots: {
    default(): VNode[]
    'extra-message'(): VNode[]
    'remove-button'(remove: () => void): VNode[]
  }

  getLoading(): VarFile[]

  getSuccess(): VarFile[]

  getError(): VarFile[]

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  chooseFile(): void

  closePreview(): void
}

export class _UploaderComponent extends Uploader {}
