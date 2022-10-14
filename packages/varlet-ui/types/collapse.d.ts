import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type CollapseModelValue = null | string | number | Array<string | number>

export interface CollapseProps extends BasicAttributes {
  modelValue?: CollapseModelValue
  accordion?: boolean
  offset?: boolean
  onChange?: (value: CollapseModelValue) => void
  'onUpdate:modelValue'?: (value: CollapseModelValue) => void
}

export class Collapse extends VarComponent {
  $props: CollapseProps

  $slots: {
    default(): VNode[]
  }
}

export class _CollapseComponent extends Collapse {}
