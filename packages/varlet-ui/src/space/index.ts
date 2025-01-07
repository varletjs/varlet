import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as spaceProps } from './props'
import Space from './Space'

withInstall(Space)
withPropsDefaultsSetter(Space, spaceProps)

export { spaceProps }

export const _SpaceComponent = Space

export default Space
