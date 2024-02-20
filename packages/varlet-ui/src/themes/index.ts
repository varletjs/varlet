import dark from './dark'
import md3Light from './md3-light'
import md3Dark from './md3-dark'
import { type StyleVars } from '../style-provider'

export interface ThemesToViewportOptions {
  viewportWidth?: number
  viewportUnit?: string
  unitPrecision?: number
}

function toViewport(theme: StyleVars, options: ThemesToViewportOptions = {}) {
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

const Themes = { dark, md3Light, md3Dark, toViewport }

export const _ThemesComponent = null

export default Themes
