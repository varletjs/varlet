import Uploader from './Uploader.vue'
import { withInstall } from '../utils/components'

withInstall(Uploader)

export { props as uploaderProps } from './props'

export const _UploaderComponent = Uploader

export default Uploader
