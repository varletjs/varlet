import PullRefresh from './PullRefresh.vue'
import { withInstall } from '../utils/components'

withInstall(PullRefresh)

export { props as pullRefreshProps } from './props'

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
