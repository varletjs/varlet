import { StyleVars } from '../style-provider'
import { convert } from './convert'

export interface ThemesToViewportOptions {
  viewportWidth?: number
  viewportUnit?: string
  unitPrecision?: number
}

export function toViewport(theme: StyleVars, options: ThemesToViewportOptions = {}) {
  const { viewportWidth = 375, viewportUnit = 'vmin', unitPrecision = 6 } = options

  return convert(theme, (value) => `${Number(((value / viewportWidth) * 100).toFixed(unitPrecision))}${viewportUnit}`)
}
