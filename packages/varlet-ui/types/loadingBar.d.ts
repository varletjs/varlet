export interface LoadingBarOptions {
  color?: string
  errorColor?: string
  height?: string | number
}

export interface ILoadingBar {
  (options: LoadingBarOptions): void

  start(): void

  finish(): void

  error(): void
}

export const LoadingBar: ILoadingBar
