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
import table from './table'
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
  '--color-primary-container': '#EADDFF',
  '--color-info-container': '#E8DEF8',
  '--color-success-container': '#D5EC9C',
  '--color-warning-container': '#FFD8E4',
  '--color-danger-container': '#F9DEDC',
  '--color-on-primary-container': '#21005D',
  '--color-on-info-container': '#1D192B',
  '--color-on-success-container': '#151F00',
  '--color-on-warning-container': '#31111D',
  '--color-on-danger-container': '#410E0B',
  '--color-surface-container': '#F3EDF7',
  '--color-surface-container-low': '#F7F2FA',
  '--color-surface-container-high': '#ECE6F0',
  '--color-surface-container-highest': '#E6E0E9',
  '--color-inverse-surface': '#322F35',
  '--color-outline': '#CAC4D0',
  '--color-on-surface-variant': '#49454F',
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
  ...table,
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
