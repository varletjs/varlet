import Col from './Col.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as colProps } from './props'

withInstall(Col)
withPropsDefaultsSetter(Col, colProps)

export { colProps }

export const _ColComponent = Col

export default Col
