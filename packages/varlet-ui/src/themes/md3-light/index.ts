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
import tooltip from './tooltip'
import tabs from './tabs'
import tab from './tab'
import divider from './divider'
import table from './table'
import pagination from './pagination'
import collapse from './collapse'
import result from './result'
import bottomNavigation from './bottomNavigation'
import bottomNavigationItem from './bottomNavigationItem'
import snackbar from './snackbar'
import actionSheet from './actionSheet'
import dialog from './dialog'
import pullRefresh from './pullRefresh'
import popup from './popup'
import picker from './picker'
import floatingPanel from './floatingPanel'
import backTop from './backTop'
import select from './select'
import option from './option'
import slider from './slider'
import uploader from './uploader'
import timePicker from './timePicker'
import datePicker from './datePicker'
import SwitchTheme from './switch'
import rate from './rate'

export default {
  // common
  '--color-body': '#fef7ff',
  '--color-text': '#000',
  '--color-primary': '#6750A4',
  '--color-info': '#625B71',
  '--color-success': '#536525',
  '--color-warning': '#7D5260',
  '--color-danger': '#B3261E',
  '--color-on-primary': '#fff',
  '--color-on-info': '#fff',
  '--color-on-success': '#fff',
  '--color-on-warning': '#fff',
  '--color-on-danger': '#fff',
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
  ...tooltip,
  ...tabs,
  ...tab,
  ...divider,
  ...table,
  ...pagination,
  ...collapse,
  ...result,
  ...bottomNavigation,
  ...bottomNavigationItem,
  ...snackbar,
  ...actionSheet,
  ...dialog,
  ...pullRefresh,
  ...popup,
  ...picker,
  ...floatingPanel,
  ...backTop,
  ...select,
  ...option,
  ...slider,
  ...uploader,
  ...timePicker,
  ...datePicker,
  ...SwitchTheme,
  ...rate,
} as StyleVars
