export interface SpaceOptions {
  mini?: CustomSpaceSize
  small?: CustomSpaceSize
  normal?: CustomSpaceSize
  large?: CustomSpaceSize
}

type CustomSpaceSize = number | string | [number | string, number | string]

export const spaceOptions: SpaceOptions = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20],
}

export const mergeSpaceOptions = (options: SpaceOptions) => {
  Object.assign(spaceOptions, options)
}
