import { VarDirective } from './varDirective'
import { StyleValue } from 'vue'

export type HoverValue = StyleValue | ((hovering: boolean) => void)

export interface Hover extends VarDirective<HoverValue> {}

export class _HoverComponent {}
