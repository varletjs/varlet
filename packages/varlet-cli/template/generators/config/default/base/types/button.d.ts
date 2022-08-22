import { BasicComponent } from './basicComponent'

export interface ButtonProps {
  color?: string
  onClick?: (e: Event) => void
}

export class Button extends BasicComponent {
  $props: ButtonProps
}

export class _ButtonComponent extends Button {}
