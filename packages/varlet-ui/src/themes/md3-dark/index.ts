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
import popup from './popup'
import picker from './picker'
import floatingPanel from './floatingPanel'
import backTop from './backTop'
import select from './select'
import option from './option'
import counter from './counter'
import switchThemes from './switch'
import slider from './slider'
import uploader from './uploader'
import timePicker from './timePicker'
import datePicker from './datePicker'
import rate from './rate'
import skeleton from './skeleton'

export default {
  // common
  '--color-body': '#141218',
  '--color-text': '#fff',
  '--color-primary': '#D0BCFF',
  '--color-info': '#CCC2DC',
  '--color-success': '#BACF83',
  '--color-warning': '#EFB8C8',
  '--color-danger': '#F2B8B5',
  '--color-on-primary': '#381E72',
  '--color-on-info': '#332D41',
  '--color-on-success': '#273500',
  '--color-on-warning': '#492532',
  '--color-on-danger': '#601410',
  '--color-primary-container': '#5B4494',
  '--color-info-container': '#575065',
  '--color-success-container': '#485A19',
  '--color-warning-container': '#6F4854',
  '--color-danger-container': '#9D3A37',
  '--color-on-primary-container': '#EADDFF',
  '--color-on-info-container': '#E8DEF8',
  '--color-on-success-container': '#D5EC9C',
  '--color-on-warning-container': '#FFD8E4',
  '--color-on-danger-container': '#F9DEDC',
  '--color-disabled': '#404040',
  '--color-text-disabled': '#757575',
  '--color-outline': '#49454F',
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
  ...popup,
  ...picker,
  ...floatingPanel,
  ...backTop,
  ...select,
  ...option,
  ...counter,
  ...switchThemes,
  ...slider,
  ...uploader,
  ...timePicker,
  ...datePicker,
  ...rate,
  ...skeleton,
} as StyleVars
