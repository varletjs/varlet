import Space from './Space'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as spaceProps } from './props'

withInstall(Space)
withPropsDefaultsSetter(Space, spaceProps)

export { spaceProps }

export const _SpaceComponent = Space

export default Space
