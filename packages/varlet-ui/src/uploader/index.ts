import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as uploaderProps } from './props'
import Uploader from './Uploader.vue'

withInstall(Uploader)
withPropsDefaultsSetter(Uploader, uploaderProps)

export { uploaderProps }

export const _UploaderComponent = Uploader

export default Uploader
