import { StyleVars } from '../../style-provider'
import button from './button'
import hoverOverlay from './hoverOverlay'
import menu from './menu'
import menuSelect from './menuSelect'
import menuOption from './menuOption'
import fab from './fab'
import breadcrumb from './breadcrumb'
import link from './link'
import cell from './cell'
import paper from './paper'
import avatar from './avatar'
import fieldDecorator from './fieldDecorator'
import checkbox from './checkbox'
import radio from './radio'
import card from './card'

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
  ...fab,
  ...breadcrumb,
  ...link,
  ...cell,
  ...paper,
  ...avatar,
  ...fieldDecorator,
  ...checkbox,
  ...radio,
  ...card,
} as StyleVars
