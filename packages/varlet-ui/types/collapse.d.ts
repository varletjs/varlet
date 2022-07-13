import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

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
}

export class _CollapseComponent extends Collapse {}
