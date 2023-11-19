import Result from './Result.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as resultProps } from './props'

withInstall(Result)
withPropsDefaultsSetter(Result, resultProps)

export { resultProps }

export const _ResultComponent = Result

export default Result
