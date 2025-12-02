import { StyleVars } from '../style-provider'
import { convert } from './convert'

export interface ThemesToRemOptions {
  rootFontSize?: number
  unitPrecision?: number
}

export function toRem(theme: StyleVars, options: ThemesToRemOptions = {}) {
  const { rootFontSize = 16, unitPrecision = 6 } = options
  return convert(theme, (value) => `${Number((value / rootFontSize).toFixed(unitPrecision))}rem`)
}
