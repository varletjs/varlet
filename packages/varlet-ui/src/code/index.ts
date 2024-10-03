import Code from './Code.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as codeProps } from './props'

withInstall(Code)
withPropsDefaultsSetter(Code, codeProps)

export { codeProps }

export const _CodeComponent = Code

export default Code
