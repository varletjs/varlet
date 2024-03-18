export interface PresetVarletOptions {
  screens?: boolean | PresetVarletScreens
  fontSize?: boolean | PresetVarletFontSize
  opacity?: boolean | PresetVarletOpacity
  colors?: boolean | PresetVarletColors
}

export interface PresetVarletScreens {
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

export interface PresetVarletFontSize {
  xs?: string
  sm?: string
  md?: string
  lg?: string
}

export interface PresetVarletOpacity {
  disabled?: string
  hover?: string
  focus?: string
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

function getScreens(options: PresetVarletOptions = {}) {
  const { screens = true } = options

  if (!screens) {
    return
  }

  const defaultScreens: PresetVarletScreens = {
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1920px',
  }

  if (screens === true) {
    return defaultScreens
  }

  return {
    ...defaultScreens,
    ...screens,
  }
}

function getFontSize(options: PresetVarletOptions = {}) {
  const { fontSize = true } = options

  if (!fontSize) {
    return
  }

  const defaultFontSize: PresetVarletFontSize = {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
  }

  if (fontSize === true) {
    return defaultFontSize
  }

  return {
    ...defaultFontSize,
    ...fontSize,
  }
}

function getOpacity(options: PresetVarletOptions = {}) {
  const { opacity = true } = options

  if (!opacity) {
    return
  }

  const defaultOpacity: PresetVarletOpacity = {
    disabled: 'var(--font-size-disabled)',
    hover: 'var(--font-size-hover)',
    focus: 'var(--font-size-focus)',
  }

  if (opacity === true) {
    return defaultOpacity
  }

  return {
    ...defaultOpacity,
    ...opacity,
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

export function presetVarlet(options: PresetVarletOptions = {}) {
  return {
    theme: {
      colors: getColors(options),
      screens: getScreens(options),
      fontSize: getFontSize(options),
      opacity: getOpacity(options),
    },
  }
}
