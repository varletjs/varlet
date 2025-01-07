import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as pullRefreshProps } from './props'
import PullRefresh from './PullRefresh.vue'

withInstall(PullRefresh)
withPropsDefaultsSetter(PullRefresh, pullRefreshProps)

export { pullRefreshProps }

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
