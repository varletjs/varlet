import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Col from './Col.vue'
import { props as colProps } from './props'

withInstall(Col)
withPropsDefaultsSetter(Col, colProps)

export { colProps }

export const _ColComponent = Col

export default Col
