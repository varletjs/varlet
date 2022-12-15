export interface SpacePluginOptions {
  mini?: SpacePluginOptionsSize
  small?: SpacePluginOptionsSize
  normal?: SpacePluginOptionsSize
  large?: SpacePluginOptionsSize
}

export type SpacePluginOptionsSize = number | string | [number | string, number | string]

export const spacePluginOptions: SpacePluginOptions = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20],
}

export const mergeSpacePluginOptions = (options: SpacePluginOptions) => {
  Object.assign(spacePluginOptions, options)
}
