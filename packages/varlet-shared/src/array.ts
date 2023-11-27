import { isArray } from './is.js'

export const uniq = (arr: Array<any>) => [...new Set(arr)]

export const normalizeToArray = <T>(value: T | T[]) => (isArray(value) ? value : [value])

export const removeItem = <T>(arr: Array<T>, item: T) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const toggleItem = <T>(arr: Array<T>, item: T) => {
  arr.includes(item) ? removeItem(arr, item) : arr.push(item)
  return arr
}

export const removeArrayBlank = <T>(arr: Array<T | null | undefined>) => arr.filter((item) => item != null) as T[]

export const find = <T>(
  arr: Array<T>,
  callback: (item: T, index: number, array: Array<T>) => any,
  from: 'start' | 'end' = 'start'
): [T, number] | [null, -1] => {
  let i = from === 'start' ? 0 : arr.length - 1

  while (arr.length > 0 && i >= 0 && i <= arr.length - 1) {
    const flag = callback(arr[i], i, arr)

    if (flag) {
      return [arr[i], i]
    }

    from === 'start' ? i++ : i--
  }

  return [null, -1]
}

export type ClassName = string | undefined | null

export type Classes = (ClassName | [any, ClassName, ClassName?])[]

export const classes = (...classes: Classes): any[] =>
  classes.map((className) => {
    if (isArray(className)) {
      const [condition, truthy, falsy = null] = className
      return condition ? truthy : falsy
    }

    return className
  })
