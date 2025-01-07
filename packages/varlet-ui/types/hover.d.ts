import { StyleValue } from 'vue'
import { VarDirective } from './varDirective'

export type HoverValue = StyleValue | ((hovering: boolean) => void)

export interface IHover extends VarDirective<HoverValue> {}

export declare const Hover: IHover

export declare const _HoverComponent: IHover
