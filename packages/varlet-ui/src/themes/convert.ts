import { StyleVars } from '../style-provider'

export function convert(theme: StyleVars, converter: (value: number) => string) {
  return Object.entries(theme).reduce((target, [key, value]) => {
    target[key] = value.includes('px') ? value.replace(/(\d+(\.\d+)?)px/g, (_, p1) => converter(p1)) : value

    return target
  }, {} as StyleVars)
}
