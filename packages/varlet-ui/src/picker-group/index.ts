import PickerGroup from './PickerGroup'
import { withInstall } from '../utils/components'
import { type PickerColumnOption } from './props'

interface PickerGroupOptions {
  title?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  tabs: string[]
  onChange?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onConfirm?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onCancel?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
}

withInstall(PickerGroup)

export const _PickerGroupComponent = PickerGroup

export default PickerGroup
