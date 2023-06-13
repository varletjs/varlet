export interface IContext {
  locks: Record<any, number>
  zIndex: number
  enableRipple: boolean
}

export declare const Context: IContext

export class _ContextComponent {}
