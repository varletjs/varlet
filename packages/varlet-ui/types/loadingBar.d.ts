export interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
  top?: string | number
}

export interface ILoadingBar {
  mergeConfig(options: LoadingBarOptions): void

  start(): void

  finish(): void

  error(): void
}

export const LoadingBar: ILoadingBar
