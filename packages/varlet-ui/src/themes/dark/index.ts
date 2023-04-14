import { StyleVars } from '../../style-provider'
import actionSheet from './actionSheet'
import badge from './badge'
import button from './button'
import card from './card'
import cell from './cell'
import checkbox from './checkbox'
import chip from './chip'
import collapse from './collapse'
import datePicker from './datePicker'
import dialog from './dialog'
import divider from './divider'
import fieldDecorator from './fieldDecorator'
import pagination from './pagination'
import picker from './picker'
import popup from './popup'
import pullRefresh from './pullRefresh'
import radio from './radio'
import result from './result'
import select from './select'
import skeleton from './skeleton'
import steps from './steps'
import switchThemes from './switch'
import tab from './tab'
import table from './table'
import timePicker from './timePicker'
import uploader from './uploader'
import tabs from './tabs'
import appBar from './appBar'
import bottomNavigation from './bottomNavigation'
import bottomNavigationItem from './bottomNavigationItem'
import menu from './menu'
import breadcrumb from './breadcrumb'
import paper from './paper'
import avatar from './avatar'

export default {
  // common
  '--color-body': '#1e1e1e',
  '--color-text': '#fff',
  '--color-primary': '#4a7afe',
  '--color-info': '#10afef',
  '--color-success': '#10c48f',
  '--color-warning': '#ff8800',
  '--color-danger': '#ef5350',
  '--color-disabled': '#404040',
  '--color-text-disabled': '#757575',
  // component
  ...button,
  ...cell,
  ...card,
  ...timePicker,
  ...datePicker,
  ...skeleton,
  ...tabs,
  ...tab,
  ...popup,
  ...dialog,
  ...actionSheet,
  ...chip,
  ...badge,
  ...uploader,
  ...collapse,
  ...pullRefresh,
  ...switchThemes,
  ...steps,
  ...pagination,
  ...table,
  ...fieldDecorator,
  ...select,
  ...radio,
  ...checkbox,
  ...divider,
  ...picker,
  ...appBar,
  ...bottomNavigation,
  ...bottomNavigationItem,
  ...menu,
  ...result,
  ...breadcrumb,
  ...paper,
  ...avatar,
} as StyleVars
