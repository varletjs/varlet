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
import step from './step'
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
import avatarGroup from './avatarGroup'
import countdown from './countdown'
import formDetails from './formDetails'
import icon from './icon'
import imagePreview from './imagePreview'
import indexBar from './indexBar'
import input from './input'
import list from './list'
import loading from './loading'
import loadingBar from './loadingBar'
import overlay from './overlay'
import ripple from './ripple'
import space from './space'
import swipe from './swipe'
import code from './code'

export default {
  '--font-size-xs': '10px',
  '--font-size-sm': '12px',
  '--font-size-md': '14px',
  '--font-size-lg': '16px',
  '--icon-size-xs': '16px',
  '--icon-size-sm': '18px',
  '--icon-size-md': '20px',
  '--icon-size-lg': '22px',
  '--hsl-body': '260, 14%, 8%',
  '--color-body': 'hsla(var(--hsl-body), 1)',
  '--hsl-text': '0, 0%, 100%',
  '--color-text': 'hsla(var(--hsl-text), 1)',
  '--hsl-primary': '258, 100%, 87%',
  '--color-primary': 'hsla(var(--hsl-primary), 1)',
  '--hsl-info': '263, 27%, 81%',
  '--color-info': 'hsla(var(--hsl-info), 1)',
  '--hsl-success': '77, 44%, 66%',
  '--color-success': 'hsla(var(--hsl-success), 1)',
  '--hsl-warning': '343, 63%, 83%',
  '--color-warning': 'hsla(var(--hsl-warning), 1)',
  '--hsl-danger': '3, 70%, 83%',
  '--color-danger': 'hsla(var(--hsl-danger), 1)',
  '--hsl-on-primary': '259, 58%, 28%',
  '--color-on-primary': 'hsla(var(--hsl-on-primary), 1)',
  '--hsl-on-info': '258, 18%, 22%',
  '--color-on-info': 'hsla(var(--hsl-on-info), 1)',
  '--hsl-on-success': '76, 100%, 10%',
  '--color-on-success': 'hsla(var(--hsl-on-success), 1)',
  '--hsl-on-warning': '338, 33%, 22%',
  '--color-on-warning': 'hsla(var(--hsl-on-warning), 1)',
  '--hsl-on-danger': '3, 71%, 22%',
  '--color-on-danger': 'hsla(var(--hsl-on-danger), 1)',
  '--hsl-primary-container': '257, 37%, 42%',
  '--color-primary-container': 'hsla(var(--hsl-primary-container), 1)',
  '--hsl-info-container': '260, 12%, 35%',
  '--color-info-container': 'hsla(var(--hsl-info-container), 1)',
  '--hsl-success-container': '77, 57%, 23%',
  '--color-success-container': 'hsla(var(--hsl-success-container), 1)',
  '--hsl-warning-container': '342, 21%, 36%',
  '--color-warning-container': 'hsla(var(--hsl-warning-container), 1)',
  '--hsl-danger-container': '2, 48%, 42%',
  '--color-danger-container': 'hsla(var(--hsl-danger-container), 1)',
  '--hsl-on-primary-container': '263, 100%, 93%',
  '--color-on-primary-container': 'hsla(var(--hsl-on-primary-container), 1)',
  '--hsl-on-info-container': '263, 65%, 92%',
  '--color-on-info-container': 'hsla(var(--hsl-on-info-container), 1)',
  '--hsl-on-success-container': '77, 68%, 77%',
  '--color-on-success-container': 'hsla(var(--hsl-on-success-container), 1)',
  '--hsl-on-warning-container': '342, 100%, 92%',
  '--color-on-warning-container': 'hsla(var(--hsl-on-warning-container), 1)',
  '--hsl-on-danger-container': '4, 71%, 92%',
  '--color-on-danger-container': 'hsla(var(--hsl-on-danger-container), 1)',
  '--hsl-disabled': '0, 0%, 25%',
  '--color-disabled': 'hsla(var(--hsl-disabled), 1)',
  '--hsl-text-disabled': '0, 0%, 46%',
  '--color-text-disabled': 'hsla(var(--hsl-text-disabled), 1)',
  '--hsl-surface-container': '257, 10%, 14%',
  '--color-surface-container': 'hsla(var(--hsl-surface-container), 1)',
  '--hsl-surface-container-low': '264, 8%, 12%',
  '--color-surface-container-low': 'hsla(var(--hsl-surface-container-low), 1)',
  '--hsl-surface-container-high': '257, 8%, 17%',
  '--color-surface-container-high': 'hsla(var(--hsl-surface-container-high), 1)',
  '--hsl-surface-container-highest': '257, 6%, 22%',
  '--color-surface-container-highest': 'hsla(var(--hsl-surface-container-highest), 1)',
  '--hsl-inverse-surface': '280, 17%, 90%',
  '--color-inverse-surface': 'hsla(var(--hsl-inverse-surface), 1)',
  '--hsl-outline': '264, 7%, 29%',
  '--color-outline': 'hsla(var(--hsl-outline), 1)',
  '--hsl-on-surface-variant': '270, 11%, 79%',
  '--color-on-surface-variant': 'hsla(var(--hsl-on-surface-variant), 1)',
  '--opacity-disabled': '0.6',
  '--opacity-hover': '0.12',
  '--opacity-focus': '0.2',
  '--cubic-bezier': 'cubic-bezier(0.25, 0.8, 0.5, 1)',
  '--shadow-key-umbra-opacity': 'rgba(0, 0, 0, 0.2)',
  '--shadow-key-penumbra-opacity': 'rgba(0, 0, 0, 0.14)',
  '--shadow-key-ambient-opacity': 'rgba(0, 0, 0, 0.12)',
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
  ...step,
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
  ...avatarGroup,
  ...countdown,
  ...formDetails,
  ...icon,
  ...imagePreview,
  ...indexBar,
  ...input,
  ...list,
  ...loading,
  ...loadingBar,
  ...overlay,
  ...ripple,
  ...space,
  ...swipe,
  ...code,
} as StyleVars
