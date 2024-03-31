import { StyleVars } from '../style-provider'

export interface ThemesToViewportOptions {
  viewportWidth?: number
  viewportUnit?: string
  unitPrecision?: number
}

export function toViewport(theme: StyleVars, options: ThemesToViewportOptions = {}) {
  const { viewportWidth = 375, viewportUnit = 'vmin', unitPrecision = 6 } = options

  return Object.entries(theme).reduce((target, [key, value]) => {
    target[key] = value.includes('px')
      ? value.replace(
          /(\d+(\.\d+)?)px/g,
          (_, p1) => `${Number(((p1 / viewportWidth) * 100).toFixed(unitPrecision))}${viewportUnit}`
        )
      : value

    return target
  }, {} as StyleVars)
}
