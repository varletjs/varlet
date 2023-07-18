import Image from './Image.vue'
import { withInstall } from '../utils/components'

withInstall(Image)

export { props as imageProps } from './props'

export const _ImageComponent = Image

export default Image
