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
import skeleton from './skeleton'
import steps from './steps'
import switchThemes from './switch'
import tab from './tab'
import table from './table'
import timePicker from './timePicker'
import uploader from './uploader'
import tabs from './tabs'
import appBar from './appBar'
import bottomNavigationItem from './bottomNavigationItem'
import menu from './menu'
import breadcrumb from './breadcrumb'
import avatar from './avatar'
import link from './link'
import progress from './progress'
import option from './option'
import watermark from './watermark'
import menuSelect from './menuSelect'
import menuOption from './menuOption'

export default {
  // common
  '--color-body': '#1e1e1e',
  '--color-text': '#fff',
  '--color-primary': '#4a7afe',
  '--color-info': '#10afef',
  '--color-success': '#10c48f',
  '--color-warning': '#ff8800',
  '--color-danger': '#ef5350',
  '--color-on-primary': '#fff',
  '--color-on-info': '#fff',
  '--color-on-success': '#fff',
  '--color-on-warning': '#fff',
  '--color-on-danger': '#fff',
  '--color-primary-container': '#4a7afe',
  '--color-info-container': '#10afef',
  '--color-success-container': '#10c48f',
  '--color-warning-container': '#ff8800',
  '--color-danger-container': '#ef5350',
  '--color-on-primary-container': '#fff',
  '--color-on-info-container': '#fff',
  '--color-on-success-container': '#fff',
  '--color-on-warning-container': '#fff',
  '--color-on-danger-container': '#fff',
  '--color-disabled': '#404040',
  '--color-text-disabled': '#757575',
  '--color-surface-container': '#1e1e1e',
  '--color-surface-container-low': '#1e1e1e',
  '--color-surface-container-high': '#272727',
  '--color-surface-container-highest': '#303030',
  '--color-inverse-surface': '#fff',
  '--color-outline': 'rgba(255, 255, 255, 0.2)',
  '--color-on-surface-variant': '#fff',
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
  ...radio,
  ...checkbox,
  ...divider,
  ...picker,
  ...appBar,
  ...bottomNavigationItem,
  ...menu,
  ...result,
  ...breadcrumb,
  ...avatar,
  ...link,
  ...progress,
  ...option,
  ...watermark,
  ...menuSelect,
  ...menuOption,
} as StyleVars
