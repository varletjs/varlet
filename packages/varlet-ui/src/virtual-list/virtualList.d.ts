import { VarComponent } from '../varComponent'

export interface VirtualListProps {
  /** 列表数据 */
  data?: any[]
  /** 列表项高度（单位：像素） */
  itemHeight?: number | string
  /** 缓冲区大小（上下预渲染的列表项数量） */
  bufferSize?: number
  /** 容器高度（单位：像素） */
  containerHeight?: number | string
  /** 滚动事件回调 */
  onScroll?: (e: Event) => void
}

export interface VirtualListSlots {
  /** 默认插槽，用于自定义列表项内容 */
  default: (item: { item: any; index: number }) => JSX.Element
}

export interface VirtualListMethods {
  /** 滚动到指定索引位置 */
  scrollTo: (index: number) => void
}

export type VirtualListListeners = {
  /** 滚动事件监听器 */
  onScroll?: (e: Event) => void
}

export type VirtualList = VarComponent<VirtualListProps, VirtualListSlots, VirtualListMethods, VirtualListListeners>

export class _VirtualListComponent extends VarComponent {
  scrollTo(index: number): void
}
