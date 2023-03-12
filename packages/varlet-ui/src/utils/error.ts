class VarletError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VarletError'
  }
}

export function throwError(source: string, message: string): never {
  throw new VarletError(`[${source}]: ${message}`)
}

export function warn(source: string, message: string): void {
  console.warn(new VarletError(`[${source}]: ${message}`))
}
