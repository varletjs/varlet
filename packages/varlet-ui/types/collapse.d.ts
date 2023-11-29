import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const collapseProps: Record<keyof CollapseProps, any>

export type CollapseModelValue = undefined | string | number | Array<string | number | undefined>

export interface CollapseProps extends BasicAttributes {
  modelValue?: CollapseModelValue
  accordion?: boolean
  offset?: boolean
  divider?: boolean
  elevation?: boolean | string | number
  onChange?: ListenerProp<(value: CollapseModelValue) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: CollapseModelValue) => void>
}

export class Collapse extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CollapseProps>

  $props: CollapseProps

  $slots: {
    default(): VNode[]
  }
}

export class _CollapseComponent extends Collapse {}
