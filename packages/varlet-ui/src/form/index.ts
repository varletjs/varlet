import { useValidation, withInstall, withPropsDefaultsSetter } from '../utils/components'
import Form from './Form.vue'
import { props as formProps } from './props'
import { useForm } from './provide'

Form.useValidation = useValidation
Form.useForm = useForm
withInstall(Form)
withPropsDefaultsSetter(Form, formProps)

export { formProps }

export const _FormComponent = Form

export default Form
