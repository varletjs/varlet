import Progress from './Progress.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as progressProps } from './props'

withInstall(Progress)
withPropsDefaultsSetter(Progress, progressProps)

export { progressProps }

export const _ProgressComponent = Progress

export default Progress
