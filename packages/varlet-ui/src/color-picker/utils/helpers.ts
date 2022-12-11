export function padEnd(str: string, length: number, char = '0'): string {
  return str + char.repeat(Math.max(0, length - str.length))
}
export function chunk(str: string, size = 1): string[] {
  const chunked: string[] = []
  let index = 0
  while (index < str.length) {
    chunked.push(str.substr(index, size))
    index += size
  }
  return chunked
}
export function mergeObjects<T extends Record<string, unknown>, K extends Record<string, unknown>>(
  source: T,
  target: K
): Record<string, unknown> {
  return Object.assign(source, target)
}
export function parseHex(value: string): number {
  return parseInt(value, 16)
}
export const clamp = (value: number, min: number, max: number): number => {
  return min < max ? (value < min ? min : value > max ? max : value) : value < max ? max : value > min ? min : value
}
export const upperCase = (word: string): string => {
  return word.toLocaleUpperCase()
}
export const lowerCase = (word: string): string => {
  return word.toLocaleLowerCase()
}
export function splitStr(str: string, chars: string): string {
  return str.split(chars)[0]
}
// 保留小数工具
export function keepDecimal(value: number, digits = 0): number {
  const COUNT_VALUE = 10 ** digits
  return Math.round(value * COUNT_VALUE) / COUNT_VALUE
}
export function has<T extends Record<string, unknown>>(obj: T, key: string[]): boolean {
  return key.every((k) => obj.hasOwnProperty(k))
}
