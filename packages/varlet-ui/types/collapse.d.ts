import { VarComponent } from './varComponent'

export type CollapseModelValue = null | string | number | Array<string | number>

export interface CollapseProps {
  modelValue?: CollapseModelValue
  accordion?: boolean
  offset?: boolean
  onChange?: (value: CollapseModelValue) => void
  'onUpdate:modelValue'?: (value: CollapseModelValue) => void
}

export class Collapse extends VarComponent {
  $props: CollapseProps
}
