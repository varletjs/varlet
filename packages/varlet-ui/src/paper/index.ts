import Paper from './Paper.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as paperProps } from './props'

withInstall(Paper)
withPropsDefaultsSetter(Paper, paperProps)

export { paperProps }

export const _PaperComponent = Paper

export default Paper
