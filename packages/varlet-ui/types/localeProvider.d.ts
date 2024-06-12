import { Message } from './locale'
import { VarComponent, SetPropsDefaults, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const localeProviderProps: Record<keyof LocaleProviderProps, any>

export interface LocaleProviderProps extends BasicAttributes {
  tag?: string
  locale?: string
  messages?: Record<string, Partial<Message>>
}

export class LocaleProvider extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<LocaleProviderProps>

  $props: LocaleProviderProps

  $slots: {
    default(): VNode[]
  }
}

export class _LocaleProviderComponent extends LocaleProvider {}
