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
