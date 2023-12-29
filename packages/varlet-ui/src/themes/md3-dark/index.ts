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
import chip from './chip'
import badge from './badge'
import tooltip from './tooltip'
import progress from './progress'
import tabs from './tabs'
import tab from './tab'
import steps from './steps'
import divider from './divider'
import table from './table'
import pagination from './pagination'
import watermark from './watermark'
import collapse from './collapse'
import result from './result'
import appBar from './appBar'
import bottomNavigation from './bottomNavigation'
import bottomNavigationItem from './bottomNavigationItem'
import snackbar from './snackbar'
import actionSheet from './actionSheet'
import dialog from './dialog'
import pullRefresh from './pullRefresh'

export default {
  // common
  '--color-body': '#141218',
  '--color-text': '#fff',
  '--color-primary': '#D0BCFF',
  '--color-info': '#CCC2DC',
  '--color-success': '#BACF83',
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
  ...breadcrumb,
  ...link,
  ...cell,
  ...paper,
  ...avatar,
  ...fieldDecorator,
  ...checkbox,
  ...radio,
  ...card,
  ...chip,
  ...badge,
  ...tooltip,
  ...progress,
  ...tabs,
  ...tab,
  ...steps,
  ...divider,
  ...table,
  ...pagination,
  ...watermark,
  ...collapse,
  ...result,
  ...appBar,
  ...bottomNavigation,
  ...bottomNavigationItem,
  ...snackbar,
  ...actionSheet,
  ...dialog,
  ...pullRefresh,
} as StyleVars
