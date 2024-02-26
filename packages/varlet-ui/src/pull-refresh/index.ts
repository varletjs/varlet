import PullRefresh from './PullRefresh.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as pullRefreshProps } from './props'

withInstall(PullRefresh)
withPropsDefaultsSetter(PullRefresh, pullRefreshProps)

export { pullRefreshProps }

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
