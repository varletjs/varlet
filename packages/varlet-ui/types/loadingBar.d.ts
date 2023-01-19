export interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
  top?: string | number
}

export declare const loadingBarProps: Record<string, any>

export interface ILoadingBar {
  mergeConfig(options: LoadingBarOptions): void

  start(): void

  finish(): void

  error(): void
}

export declare const LoadingBar: ILoadingBar
