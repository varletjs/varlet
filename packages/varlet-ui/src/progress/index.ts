import Progress from './Progress.vue'
import { withInstall } from '../utils/components'

withInstall(Progress)

export { props as progressProps } from './props'

export const _ProgressComponent = Progress

export default Progress
