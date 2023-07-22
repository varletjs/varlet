import Overlay from './Overlay'
import { withInstall } from '../utils/components'

withInstall(Overlay)

export { props as overlayProps } from './props'

export const _OverlayComponent = Overlay

export default Overlay
