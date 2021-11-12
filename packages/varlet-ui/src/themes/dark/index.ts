import button from './button'
import cell from './cell'
import skeleton from './skeleton'
import { StyleVars } from '../../style-provider'

export default {
  // common
  '--color-body': '#1e1e1e',
  '--color-text': '#fff',
  '--color-primary': '#4a7afe',
  '--color-info': '#10afef',
  '--color-success': '#10c48f',
  '--color-warning': '#ff8800',
  '--color-danger': '#ef5350',
  '--color-disabled': '#393939',
  '--color-text-disabled': '#757575',
  ...button,
  ...cell,
  ...skeleton,
} as StyleVars
