import { VarComponent, BasicAttributes } from './varComponent'

export interface FormDetailsProps extends BasicAttributes {
  errorMessage?: string
  extraMessage?: string
}

export class FormDetails extends VarComponent {
  $props: FormDetailsProps
}

export class _FormDetailsComponent extends FormDetails {}
