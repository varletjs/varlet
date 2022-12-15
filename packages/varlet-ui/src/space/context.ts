import { toSizeUnit } from '../utils/elements'

export type SpacePluginOptionsSize = number | string | [number | string, number | string]

export interface SpacePluginOptions {
  mini?: SpacePluginOptionsSize
  small?: SpacePluginOptionsSize
  normal?: SpacePluginOptionsSize
  large?: SpacePluginOptionsSize
}

export interface SpaceContext {
  mini?: string[]
  small?: string[]
  normal?: string[]
  large?: string[]
}

export const context: SpaceContext = {
  mini: ['4px', '4px'],
  small: ['6px', '6px'],
  normal: ['8px', '12px'],
  large: ['12px', '20px'],
}

export const launchSpacePluginOptions = (options: SpacePluginOptions) => {
  const normalizedContext = Object.entries(options).reduce((normalizedContext, [key, value]) => {
    normalizedContext[key as keyof SpaceContext] = value.map(toSizeUnit)
    return normalizedContext
  }, {} as SpaceContext)

  Object.assign(context, normalizedContext)
}
