import { VarComponent } from './varComponent'

export type CollapseModelValue = undefined | string | number | Array<string | number | undefined>

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

export class _CollapseComponent extends Collapse {}
