import { StyleVars } from '../../style-provider'
import button from './button'
import hoverOverlay from './hoverOverlay'
import menu from './menu'
import menuSelect from './menuSelect'
import menuOption from './menuOption'

export default {
  // common
  '--color-body': '#fef7ff',
  '--color-text': '#000',
  '--color-primary': '#6750A4',
  '--color-info': '#625B71',
  '--color-success': '#465C04',
  '--color-warning': '#7D5260',
  '--color-danger': '#B3261E',
  // component
  ...button,
  ...hoverOverlay,
  ...menu,
  ...menuSelect,
  ...menuOption,
} as StyleVars
