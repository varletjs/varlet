import Watermark from './Watermark.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as watermarkProps } from './props'

withInstall(Watermark)
withPropsDefaultsSetter(Watermark, watermarkProps)

export { watermarkProps }

export const _WatermarkComponent = Watermark

export default Watermark
