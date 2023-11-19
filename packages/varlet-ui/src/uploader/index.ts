import Uploader from './Uploader.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as uploaderProps } from './props'

withInstall(Uploader)
withPropsDefaultsSetter(Uploader, uploaderProps)

export { uploaderProps }

export const _UploaderComponent = Uploader

export default Uploader
