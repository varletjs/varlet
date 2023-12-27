export interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
  top?: string | number
}

export declare const loadingBarProps: Record<string, any>

export interface ILoadingBar {
  start(): void

  finish(): void

  error(): void

  setDefaultOptions(options: LoadingBarOptions): void

  resetDefaultOptions(): void
}

export declare const LoadingBar: ILoadingBar

export class _LoadingBarComponent {}
