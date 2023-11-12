import Breadcrumbs from './Breadcrumbs.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as breadcrumbsProps } from './props'

withInstall(Breadcrumbs)
withPropsDefaultsSetter(Breadcrumbs, breadcrumbsProps)

export { breadcrumbsProps }

export const _BreadcrumbsComponent = Breadcrumbs

export default Breadcrumbs
