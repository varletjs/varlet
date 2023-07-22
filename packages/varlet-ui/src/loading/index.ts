import Loading from './Loading.vue'
import { withInstall } from '../utils/components'

withInstall(Loading)

export { props as loadingProps } from './props'

export const _LoadingComponent = Loading

export default Loading
