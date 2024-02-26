import { iconProps } from '../icon'
import { pickProps } from '../utils/components'

export const props = {
  activeIcon: {
    type: String,
    default: 'check',
  },
  currentIcon: pickProps(iconProps, 'name'),
  inactiveIcon: pickProps(iconProps, 'name'),
  activeIconNamespace: pickProps(iconProps, 'namespace'),
  currentIconNamespace: pickProps(iconProps, 'namespace'),
  inactiveIconNamespace: pickProps(iconProps, 'namespace'),
}
