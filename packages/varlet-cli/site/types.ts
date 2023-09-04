import { type IContext } from "@varlet/ui"

export interface SiteContext extends IContext {
  showPlayground: boolean
  playgroundURL: string
}