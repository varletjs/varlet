import { Button } from './Button'
import { Dialog } from './Dialog'
import { Menu } from './Menu'
import { Popup } from './Popup'
import { Ripple } from './Ripple'
import { VarComponent } from './VarComponent'
import { VarDirective } from './VarDirective'
import { App } from 'vue'

export const install: (app: App) => void

export {
  Button,
  Dialog,
  Menu,
  Popup,
  Ripple,
  VarComponent,
  VarDirective,
}
