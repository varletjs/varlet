import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const formDetailsProps: Record<keyof FormDetailsProps, any>

export interface FormDetailsProps extends BasicAttributes {
  errorMessage?: string
  extraMessage?: string
}

export class FormDetails extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<FormDetailsProps>

  $props: FormDetailsProps
}

export class _FormDetailsComponent extends FormDetails {}
