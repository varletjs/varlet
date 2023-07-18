import FormDetails from './FormDetails.vue'
import { withInstall } from '../utils/components'

withInstall(FormDetails)

export { props as formDetailsProps } from './props'

export const _FormDetailsComponent = FormDetails

export default FormDetails
