import { VarDirective } from './varDirective'
import { StyleValue } from 'vue'

export type HoverValue = StyleValue | ((hovering: boolean) => void)

export class Hover extends VarDirective<string> {}

export class _HoverComponent extends Hover {}
