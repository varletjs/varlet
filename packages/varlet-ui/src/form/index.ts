import Form from './Form.vue'
import { useValidation, withInstall } from '../utils/components'
import { useForm } from './provide'

Form.useValidation = useValidation
Form.useForm = useForm
withInstall(Form)

export { props as formProps } from './props'

export const _FormComponent = Form

export default Form
