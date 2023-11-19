import IndexAnchor from './IndexAnchor.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as indexAnchorProps } from './props'

withInstall(IndexAnchor)
withPropsDefaultsSetter(IndexAnchor, indexAnchorProps)

export { indexAnchorProps }

export const _IndexAnchorComponent = IndexAnchor

export default IndexAnchor
