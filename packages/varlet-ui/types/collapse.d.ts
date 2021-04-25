import { VarComponent } from './varComponent'

type ModelValue = null | string | number | Array<string | number>

interface CollapseProps {
  modelValue?: ModelValue
  accordion?: boolean
  offset?: boolean
  onChange?: (value: ModelValue) => void
  'onUpdate:modelValue'?: (value: ModelValue) => void
}

export class Collapse extends VarComponent {
  $props: CollapseProps
}
