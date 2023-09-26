import FieldDecorator from './FieldDecorator.vue'
import { withInstall } from '../utils/components'

withInstall(FieldDecorator)

export { props as fieldDecoratorProps } from './props'

export const _FieldDecoratorComponent = FieldDecorator

export default FieldDecorator
