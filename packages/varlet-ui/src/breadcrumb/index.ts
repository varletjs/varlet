import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Breadcrumb from './Breadcrumb.vue'
import { props as breadcrumbProps } from './props'

withInstall(Breadcrumb)
withPropsDefaultsSetter(Breadcrumb, breadcrumbProps)

export { breadcrumbProps }

export const _BreadcrumbComponent = Breadcrumb

export default Breadcrumb
