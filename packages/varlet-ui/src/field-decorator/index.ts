import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import FieldDecorator from './FieldDecorator.vue'
import { props as fieldDecoratorProps } from './props'

withInstall(FieldDecorator)
withPropsDefaultsSetter(FieldDecorator, fieldDecoratorProps)

export { fieldDecoratorProps }

export const _FieldDecoratorComponent = FieldDecorator

export default FieldDecorator
