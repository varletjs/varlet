import Loading from './Loading.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as loadingProps } from './props'

withInstall(Loading)
withPropsDefaultsSetter(Loading, loadingProps)

export { loadingProps }

export const _LoadingComponent = Loading

export default Loading
