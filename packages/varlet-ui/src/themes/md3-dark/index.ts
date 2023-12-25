import { StyleVars } from '../../style-provider'
import button from './button'
import hoverOverlay from './hoverOverlay'
import menu from './menu'
import menuSelect from './menuSelect'
import menuOption from './menuOption'
import fab from './fab'

export default {
  // common
  '--color-body': '#141218',
  '--color-text': '#fff',
  '--color-primary': '#D0BCFF',
  '--color-info': '#CCC2DC',
  '--color-success': '#465C04',
  '--color-warning': '#EFB8C8',
  '--color-danger': '#F2B8B5',
  '--color-disabled': '#404040',
  '--color-text-disabled': '#757575',
  // component
  ...button,
  ...hoverOverlay,
  ...menu,
  ...menuSelect,
  ...menuOption,
  ...fab,
} as StyleVars
