import Form from './Form.vue'
import { useValidation, withInstall, withPropsDefaultsSetter } from '../utils/components'
import { useForm } from './provide'
import { props as formProps } from './props'

Form.useValidation = useValidation
Form.useForm = useForm
withInstall(Form)
withPropsDefaultsSetter(Form, formProps)

export { formProps }

export const _FormComponent = Form

export default Form
