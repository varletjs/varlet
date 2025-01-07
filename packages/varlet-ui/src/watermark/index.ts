import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as watermarkProps } from './props'
import Watermark from './Watermark.vue'

withInstall(Watermark)
withPropsDefaultsSetter(Watermark, watermarkProps)

export { watermarkProps }

export const _WatermarkComponent = Watermark

export default Watermark
