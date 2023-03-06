import { VarDirective } from './varDirective'
import { StyleValue } from 'vue'

export type HoverValue = StyleValue | ((hovering: boolean) => void)

export interface IHover extends VarDirective<HoverValue> {}

export declare const Hover: IHover

export class _HoverComponent {}
