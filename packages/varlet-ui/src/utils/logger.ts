export function throwError(source: string, message: string): never {
  throw Error(`Varlet [${source}]: ${message}`)
}

export function warn(source: string, message: string): void {
  console.warn(`Varlet [${source}]: ${message}`)
}
