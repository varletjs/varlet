import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Popup from './Popup'
import { props as popupProps } from './props'

withInstall(Popup)
withPropsDefaultsSetter(Popup, popupProps)

export { popupProps }

export const _PopupComponent = Popup

export default Popup
