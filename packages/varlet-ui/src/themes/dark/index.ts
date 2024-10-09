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
import step from './step'
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
import avatarGroup from './avatarGroup'
import backTop from './backTop'
import bottomNavigation from './bottomNavigation'
import countdown from './countdown'
import counter from './counter'
import fab from './fab'
import floatingPanel from './floatingPanel'
import formDetails from './formDetails'
import hoverOverlay from './hoverOverlay'
import icon from './icon'
import imagePreview from './imagePreview'
import indexBar from './indexBar'
import input from './input'
import list from './list'
import loading from './loading'
import loadingBar from './loadingBar'
import overlay from './overlay'
import paper from './paper'
import rate from './rate'
import ripple from './ripple'
import slider from './slider'
import snackbar from './snackbar'
import space from './space'
import swipe from './swipe'
import tooltip from './tooltip'
import select from './select'
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
  '--hsl-body': '0, 0%, 12%',
  '--color-body': 'hsla(var(--hsl-body), 1)',
  '--hsl-text': '0, 0%, 100%',
  '--color-text': 'hsla(var(--hsl-text), 1)',
  '--hsl-primary': '224, 99%, 64%',
  '--color-primary': 'hsla(var(--hsl-primary), 1)',
  '--hsl-info': '197, 87%, 50%',
  '--color-info': 'hsla(var(--hsl-info), 1)',
  '--hsl-success': '162, 85%, 42%',
  '--color-success': 'hsla(var(--hsl-success), 1)',
  '--hsl-warning': '32, 100%, 50%',
  '--color-warning': 'hsla(var(--hsl-warning), 1)',
  '--hsl-danger': '1, 83%, 63%',
  '--color-danger': 'hsla(var(--hsl-danger), 1)',
  '--hsl-on-primary': '0, 0%, 100%',
  '--color-on-primary': 'hsla(var(--hsl-on-primary), 1)',
  '--hsl-on-info': '0, 0%, 100%',
  '--color-on-info': 'hsla(var(--hsl-on-info), 1)',
  '--hsl-on-success': '0, 0%, 100%',
  '--color-on-success': 'hsla(var(--hsl-on-success), 1)',
  '--hsl-on-warning': '0, 0%, 100%',
  '--color-on-warning': 'hsla(var(--hsl-on-warning), 1)',
  '--hsl-on-danger': '0, 0%, 100%',
  '--color-on-danger': 'hsla(var(--hsl-on-danger), 1)',
  '--hsl-primary-container': '224, 99%, 64%',
  '--color-primary-container': 'hsla(var(--hsl-primary-container), 1)',
  '--hsl-info-container': '197, 87%, 50%',
  '--color-info-container': 'hsla(var(--hsl-info-container), 1)',
  '--hsl-success-container': '162, 85%, 42%',
  '--color-success-container': 'hsla(var(--hsl-success-container), 1)',
  '--hsl-warning-container': '32, 100%, 50%',
  '--color-warning-container': 'hsla(var(--hsl-warning-container), 1)',
  '--hsl-danger-container': '1, 83%, 63%',
  '--color-danger-container': 'hsla(var(--hsl-danger-container), 1)',
  '--hsl-on-primary-container': '0, 0%, 100%',
  '--color-on-primary-container': 'hsla(var(--hsl-on-primary-container), 1)',
  '--hsl-on-info-container': '0, 0%, 100%',
  '--color-on-info-container': 'hsla(var(--hsl-on-info-container), 1)',
  '--hsl-on-success-container': '0, 0%, 100%',
  '--color-on-success-container': 'hsla(var(--hsl-on-success-container), 1)',
  '--hsl-on-warning-container': '0, 0%, 100%',
  '--color-on-warning-container': 'hsla(var(--hsl-on-warning-container), 1)',
  '--hsl-on-danger-container': '0, 0%, 100%',
  '--color-on-danger-container': 'hsla(var(--hsl-on-danger-container), 1)',
  '--hsl-disabled': '0, 0%, 25%',
  '--color-disabled': 'hsla(var(--hsl-disabled), 1)',
  '--hsl-text-disabled': '0, 0%, 46%',
  '--color-text-disabled': 'hsla(var(--hsl-text-disabled), 1)',
  '--hsl-surface-container': '0, 0%, 12%',
  '--color-surface-container': 'hsla(var(--hsl-surface-container), 1)',
  '--hsl-surface-container-low': '0, 0%, 12%',
  '--color-surface-container-low': 'hsla(var(--hsl-surface-container-low), 1)',
  '--hsl-surface-container-high': '0, 0%, 15%',
  '--color-surface-container-high': 'hsla(var(--hsl-surface-container-high), 1)',
  '--hsl-surface-container-highest': '0, 0%, 19%',
  '--color-surface-container-highest': 'hsla(var(--hsl-surface-container-highest), 1)',
  '--hsl-inverse-surface': '0, 0%, 100%',
  '--color-inverse-surface': 'hsla(var(--hsl-inverse-surface), 1)',
  '--hsl-outline': '0, 0%, 100%',
  '--color-outline': 'hsla(var(--hsl-outline), 0.2)',
  '--hsl-on-surface-variant': '0, 0%, 100%',
  '--color-on-surface-variant': 'hsla(var(--hsl-on-surface-variant), 1)',
  '--opacity-disabled': '0.6',
  '--opacity-hover': '0.15',
  '--opacity-focus': '0.2',
  '--cubic-bezier': 'cubic-bezier(0.25, 0.8, 0.5, 1)',
  '--shadow-key-umbra-opacity': 'rgba(0, 0, 0, 0.2)',
  '--shadow-key-penumbra-opacity': 'rgba(0, 0, 0, 0.14)',
  '--shadow-key-ambient-opacity': 'rgba(0, 0, 0, 0.12)',
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
  ...step,
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
  ...avatarGroup,
  ...backTop,
  ...bottomNavigation,
  ...countdown,
  ...counter,
  ...fab,
  ...floatingPanel,
  ...formDetails,
  ...hoverOverlay,
  ...icon,
  ...imagePreview,
  ...indexBar,
  ...input,
  ...list,
  ...loading,
  ...loadingBar,
  ...overlay,
  ...paper,
  ...rate,
  ...ripple,
  ...slider,
  ...snackbar,
  ...space,
  ...swipe,
  ...tooltip,
  ...select,
  ...code,
} as StyleVars
