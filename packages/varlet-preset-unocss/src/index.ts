import { type Preset } from 'unocss'

export interface PresetVarletOptions {
  breakpoints?: boolean | { sm?: string | number; md?: string | number; lg?: string | number; xl?: string | number }
  fontSize?: boolean
  opacity?: boolean
  colors?: boolean | PresetVarletColors
}

export interface PresetVarletColors {
  body?: string
  text?: string
  primary?: string
  info?: string
  warning?: string
  danger?: string
  success?: string
  disabled?: string
  textDisabled?: string
  onPrimary?: string
  onInfo?: string
  onWarning?: string
  onDanger?: string
  onSuccess?: string
  primaryContainer?: string
  infoContainer?: string
  warningContainer?: string
  dangerContainer?: string
  successContainer?: string
  onPrimaryContainer?: string
  onInfoContainer?: string
  onWarningContainer?: string
  onDangerContainer?: string
  onSuccessContainer?: string
  surfaceContainer?: string
  surfaceContainerLow?: string
  surfaceContainerHigh?: string
  surfaceContainerHighest?: string
  inverseSurface?: string
  outline?: string
  onSurfaceVariant?: string
  hslBody?: string
  hslText?: string
  hslPrimary?: string
  hslInfo?: string
  hslWarning?: string
  hslDanger?: string
  hslSuccess?: string
  hslDisabled?: string
  hslTextDisabled?: string
  hslOnPrimary?: string
  hslOnInfo?: string
  hslOnWarning?: string
  hslOnDanger?: string
  hslOnSuccess?: string
  hslPrimaryContainer?: string
  hslInfoContainer?: string
  hslWarningContainer?: string
  hslDangerContainer?: string
  hslSuccessContainer?: string
  hslOnPrimaryContainer?: string
  hslOnInfoContainer?: string
  hslOnWarningContainer?: string
  hslOnDangerContainer?: string
  hslOnSuccessContainer?: string
  hslSurfaceContainer?: string
  hslSurfaceContainerLow?: string
  hslSurfaceContainerHigh?: string
  hslSurfaceContainerHighest?: string
  hslInverseSurface?: string
  hslOutline?: string
  hslOnSurfaceVariant?: string
}

function getBreakpoints(options: PresetVarletOptions = {}) {
  const { breakpoints = true } = options

  if (!breakpoints) {
    return
  }

  const defaultBreakpoints = {
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1920px',
  }

  if (breakpoints === true) {
    return defaultBreakpoints
  }

  return {
    ...defaultBreakpoints,
    ...breakpoints,
  }
}

function getColors(options: PresetVarletOptions = {}) {
  const { colors = true } = options

  if (!colors) {
    return
  }

  const defaultColors: PresetVarletColors = {
    body: 'var(--color-body)',
    text: 'var(--color-text)',
    primary: 'var(--color-primary)',
    info: 'var(--color-info)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    success: 'var(--color-success)',
    disabled: 'var(--color-disabled)',
    textDisabled: 'var(--color-text-disabled)',
    onPrimary: 'var(--color-on-primary)',
    onInfo: 'var(--color-on-info)',
    onWarning: 'var(--color-on-warning)',
    onDanger: 'var(--color-on-danger)',
    onSuccess: 'var(--color-on-success)',
    primaryContainer: 'var(--color-primary-container)',
    infoContainer: 'var(--color-info-container)',
    warningContainer: 'var(--color-warning-container)',
    dangerContainer: 'var(--color-danger-container)',
    successContainer: 'var(--color-success-container)',
    onPrimaryContainer: 'var(--color-on-primary-container)',
    onInfoContainer: 'var(--color-on-info-container)',
    onWarningContainer: 'var(--color-on-warning-container)',
    onDangerContainer: 'var(--color-on-danger-container)',
    onSuccessContainer: 'var(--color-on-success-container)',
    surfaceContainer: 'var(--color-surface-container)',
    surfaceContainerLow: 'var(--color-surface-container-low)',
    surfaceContainerHigh: 'var(--color-surface-container-high)',
    surfaceContainerHighest: 'var(--color-surface-container-highest)',
    inverseSurface: 'var(--color-inverse-surface)',
    outline: 'var(--color-outline)',
    onSurfaceVariant: 'var(--color-on-surface-variant)',
    hslBody: 'hsla(var(--hsl-body), <alpha-value>)',
    hslText: 'hsla(var(--hsl-text), <alpha-value>)',
    hslPrimary: 'hsla(var(--hsl-primary), <alpha-value>)',
    hslInfo: 'hsla(var(--hsl-info), <alpha-value>)',
    hslWarning: 'hsla(var(--hsl-warning), <alpha-value>)',
    hslDanger: 'hsla(var(--hsl-danger), <alpha-value>)',
    hslSuccess: 'hsla(var(--hsl-success), <alpha-value>)',
    hslDisabled: 'hsla(var(--hsl-disabled), <alpha-value>)',
    hslTextDisabled: 'hsla(var(--hsl-text-disabled), <alpha-value>)',
    hslOnPrimary: 'hsla(var(--hsl-on-primary), <alpha-value>)',
    hslOnInfo: 'hsla(var(--hsl-on-info), <alpha-value>)',
    hslOnWarning: 'hsla(var(--hsl-on-warning), <alpha-value>)',
    hslOnDanger: 'hsla(var(--hsl-on-danger), <alpha-value>)',
    hslOnSuccess: 'hsla(var(--hsl-on-success), <alpha-value>)',
    hslPrimaryContainer: 'hsla(var(--hsl-primary-container), <alpha-value>)',
    hslInfoContainer: 'hsla(var(--hsl-info-container), <alpha-value>)',
    hslWarningContainer: 'hsla(var(--hsl-warning-container), <alpha-value>)',
    hslDangerContainer: 'hsla(var(--hsl-danger-container), <alpha-value>)',
    hslSuccessContainer: 'hsla(var(--hsl-success-container), <alpha-value>)',
    hslOnPrimaryContainer: 'hsla(var(--hsl-on-primary-container), <alpha-value>)',
    hslOnInfoContainer: 'hsla(var(--hsl-on-info-container), <alpha-value>)',
    hslOnWarningContainer: 'hsla(var(--hsl-on-warning-container), <alpha-value>)',
    hslOnDangerContainer: 'hsla(var(--hsl-on-danger-container), <alpha-value>)',
    hslOnSuccessContainer: 'hsla(var(--hsl-on-success-container), <alpha-value>)',
    hslSurfaceContainer: 'hsla(var(--hsl-surface-container), <alpha-value>)',
    hslSurfaceContainerLow: 'hsla(var(--hsl-surface-container-low), <alpha-value>)',
    hslSurfaceContainerHigh: 'hsla(var(--hsl-surface-container-high), <alpha-value>)',
    hslSurfaceContainerHighest: 'hsla(var(--hsl-surface-container-highest), <alpha-value>)',
    hslInverseSurface: 'hsla(var(--hsl-inverse-surface), <alpha-value>)',
    hslOutline: 'hsla(var(--hsl-outline), <alpha-value>)',
    hslOnSurfaceVariant: 'hsla(var(--hsl-on-surface-variant), <alpha-value>)',
  }

  if (colors === true) {
    return defaultColors
  }

  return { ...defaultColors, ...colors }
}

export function presetVarlet(options: PresetVarletOptions = {}): Preset {
  const { fontSize = true, opacity = true } = options

  return {
    name: '@varlet/preset-unocss',
    theme: {
      colors: getColors(options),
      breakpoints: getBreakpoints(options),
    },

    rules: [
      [
        /^text-(.*)$/,
        ([, s]) => {
          if (!fontSize || !['xs', 'sm', 'md', 'lg'].includes(s)) {
            return
          }

          return {
            'font-size': `var(--font-size-${s})`,
          }
        },
      ],
      [
        /^opacity-(.*)$/,
        ([, s]) => {
          if (!opacity || !['disabled', 'hover', 'focus'].includes(s)) {
            return
          }

          return { opacity: `var(--opacity-${s})` }
        },
      ],
    ],
  }
}
