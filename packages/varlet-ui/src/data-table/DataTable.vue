<template>
  <div
    :class="
      classes(
        n(),
        formatElevation(elevation, 1),
        n('$--box'),
        [surface === 'low', n('--surface-low')],
        [cellBordered, n('--cell-bordered')],
        [showFooter, n('--with-footer')],
        n(`--${size}`),
      )
    "
  >
    <var-loading :loading="loading">
      <div
        :class="classes(n('main'), n('$--scrollbar'))"
        :style="{ maxHeight: toSizeUnit(maxHeight), overflow: maxHeight != null ? 'auto' : undefined }"
      >
        <table v-if="columns.length" :class="n('table')" :style="{ tableLayout }">
          <colgroup>
            <col
              v-for="(column, index) in columns"
              :key="column.key ?? column.type ?? index"
              :style="getColStyle(column)"
            />
          </colgroup>

          <thead>
            <tr :class="n('header-row')">
              <th
                v-for="headerCell in headerCells"
                :key="headerCell.key"
                :class="
                  classes(
                    n('cell'),
                    n('header-cell'),
                    [isSelectionColumn(headerCell.column), n('selection-cell')],
                    [isExpandColumn(headerCell.column), n('expand-cell')],
                    [headerCell.column.fixed, n('fixed-cell')],
                  )
                "
                :style="getHeaderCellStyle(headerCell)"
                :colspan="headerCell.colSpan"
              >
                <var-checkbox
                  v-if="isSelectionColumn(headerCell.column) && isMultipleSelectionColumn(headerCell.column)"
                  :model-value="allCurrentRowsSelected"
                  :indeterminate="someCurrentRowsSelected"
                  :disabled="isSelectionColumnDisabled(headerCell.column) || !currentSelectableRows.length"
                  tabindex="-1"
                  @update:model-value="toggleAllCurrentRows"
                />
                <template v-else>{{
                  isSelectionColumn(headerCell.column) || isExpandColumn(headerCell.column)
                    ? ''
                    : headerCell.column.title
                }}</template>
              </th>
            </tr>
          </thead>

          <tbody v-if="bodyRows.length">
            <template v-for="bodyRow in bodyRows" :key="bodyRow.key">
              <tr :class="n('row')" v-bind="getRowProps(bodyRow)">
                <td
                  v-for="cell in bodyRow.cells"
                  :key="cell.key"
                  :class="
                    classes(
                      n('cell'),
                      n('body-cell'),
                      [isSelectionColumn(cell.column), n('selection-cell')],
                      [isExpandColumn(cell.column), n('expand-cell')],
                      [cell.column.fixed, n('fixed-cell')],
                    )
                  "
                  :style="getBodyCellStyle(cell)"
                  v-bind="getCellProps(bodyRow, cell.column)"
                  :colspan="cell.colSpan"
                  :rowspan="cell.rowSpan"
                >
                  <var-checkbox
                    v-if="isSelectionColumn(cell.column) && isMultipleSelectionColumn(cell.column)"
                    :model-value="isRowSelected(bodyRow)"
                    :indeterminate="isRowIndeterminate(bodyRow)"
                    :disabled="
                      isSelectionColumnDisabled(cell.column) || isRowSelectionDisabledByColumn(bodyRow, cell.column)
                    "
                    tabindex="-1"
                    @update:model-value="toggleRowSelection(bodyRow, $event)"
                  />
                  <var-radio
                    v-else-if="isSelectionColumn(cell.column)"
                    :model-value="isRowSelected(bodyRow)"
                    :disabled="
                      isSelectionColumnDisabled(cell.column) || isRowSelectionDisabledByColumn(bodyRow, cell.column)
                    "
                    tabindex="-1"
                    @update:model-value="toggleRowSelection(bodyRow, $event)"
                  />
                  <button
                    v-else-if="isExpandColumn(cell.column)"
                    type="button"
                    :class="classes(n('expand-trigger'), [isRowExpanded(bodyRow), n('expand-trigger--expanded')])"
                    :disabled="!isRowExpandable(bodyRow, cell.column)"
                    @click="toggleRowExpanded(bodyRow)"
                  >
                    <var-icon :name="isRowExpanded(bodyRow) ? 'chevron-down' : 'chevron-right'" />
                  </button>
                  <div
                    v-else-if="treeEnabled && cell.treeLevel != null"
                    :class="n('tree-cell')"
                    :style="{ paddingInlineStart: `${cell.treeLevel * 20}px` }"
                  >
                    <button
                      v-if="cell.treeExpandable"
                      type="button"
                      :class="classes(n('tree-trigger'), [cell.treeExpanded, n('tree-trigger--expanded')])"
                      @click="toggleTreeRowExpanded(bodyRow)"
                    >
                      <var-icon :name="cell.treeExpanded ? 'chevron-down' : 'chevron-right'" />
                    </button>
                    <span v-else :class="n('tree-indent')" />
                    <maybe-v-node :is="renderCell(bodyRow, cell.column)" tag="div" />
                  </div>
                  <maybe-v-node v-else :is="renderCell(bodyRow, cell.column)" tag="div" />
                </td>
              </tr>

              <tr v-if="bodyRow.expanded" :class="n('expanded-row')">
                <td :class="classes(n('cell'), n('body-cell'), n('expanded-cell'))" :colspan="columns.length">
                  <div :class="n('expanded-content')">
                    <maybe-v-node :is="renderExpandedRow(bodyRow)" tag="div" />
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>

        <div v-if="!bodyRows.length" :class="n('empty')">
          <slot name="empty">
            {{ resolvedEmptyText }}
          </slot>
        </div>
      </div>

      <div v-if="showFooter" :class="n('footer')">
        <slot name="footer-prefix" />

        <var-pagination
          :current="page"
          :size="pageSize"
          :total="paginationTotal"
          :simple="normalizedPaginationOptions.simple"
          :disabled="normalizedPaginationOptions.disabled"
          :show-size-changer="normalizedPaginationOptions.showSizeChanger"
          :show-quick-jumper="normalizedPaginationOptions.showQuickJumper"
          :max-pager-count="normalizedPaginationOptions.maxPagerCount"
          :size-option="normalizedPaginationOptions.sizeOption"
          :show-total="normalizedPaginationOptions.showTotal"
          @change="handlePaginationChange"
        />
      </div>

      <template v-if="$slots.loading" #description>
        <slot name="loading" />
      </template>
    </var-loading>
  </div>
</template>

<script lang="ts">
import { call, callOrReturn, clamp, isArray, isBoolean, isFunction } from '@varlet/shared'
import { computed, defineComponent, ref, toRefs, watch, type CSSProperties } from 'vue'
import VarCheckbox from '../checkbox'
import VarIcon from '../icon'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import VarRadio from '../radio'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { toPxNum, toSizeUnit } from '../utils/elements'
import {
  props,
  type DataTableColumn,
  type DataTableColumnAlign,
  type DataTableColumnCellSpan,
  type DataTableColumnFixed,
  type DataTableExpandColumn,
  type DataTableKey,
  type DataTablePagination,
  type DataTableSelectionColumn,
  type DataTableTreeOption,
} from './props'

const { name, n, classes } = createNamespace('data-table')
const defaultDataTableControlColumnWidth = 52

const defaultPaginationOptions = {
  simple: false,
  disabled: false,
  showSizeChanger: true,
  showQuickJumper: false,
  maxPagerCount: 5,
  sizeOption: [10, 20, 50, 100],
  showTotal: undefined,
} satisfies Required<
  Pick<
    DataTablePagination,
    'simple' | 'disabled' | 'showSizeChanger' | 'showQuickJumper' | 'maxPagerCount' | 'sizeOption'
  >
> &
  Pick<DataTablePagination, 'showTotal'>

interface InternalDataTableCellContext {
  row: Record<string, any>
  rowIndex: number
  pageRowIndex: number
  column: DataTableColumn
}

interface DataTableHeaderCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  colSpan?: number
}

interface DataTableBodyCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  treeLevel?: number
  treeExpandable?: boolean
  treeExpanded?: boolean
  colSpan?: number
  rowSpan?: number
}

interface DataTableFlatRow {
  key: DataTableKey
  row: Record<string, any>
  rowIndex: number
  pageRowIndex: number
  level: number
  parentKey?: DataTableKey
  expandable: boolean
  treeExpanded: boolean
}

interface DataTableBodyRow extends DataTableFlatRow {
  expanded: boolean
  cells: DataTableBodyCell[]
}

interface DataTableTreeSelectionState {
  checked: boolean
  indeterminate: boolean
  selectable: boolean
}

export default defineComponent({
  name,
  components: {
    VarCheckbox,
    VarIcon,
    VarLoading,
    VarPagination,
    VarRadio,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const { page, pageSize } = toRefs(props)
    const checkedRowKeys = ref<DataTableKey[]>([...props.checkedRowKeys])
    const expandedRowKeys = ref(new Set<DataTableKey>())
    const collapsedTreeRowKeys = ref(new Set<DataTableKey>())

    const normalizedPaginationOptions = computed(() => {
      if (isBoolean(props.pagination)) {
        return defaultPaginationOptions
      }

      return {
        ...defaultPaginationOptions,
        ...props.pagination,
      }
    })

    const columnWidths = computed(() => {
      return props.columns.map((column) => {
        const resolvedWidth = getColumnDefaultWidth(column)

        if (resolvedWidth != null) {
          return toPxNum(resolvedWidth)
        }

        if (column.minWidth != null) {
          return toPxNum(column.minWidth)
        }

        return 0
      })
    })

    const leftFixedOffsets = computed(() => {
      return buildFixedOffsets('left')
    })

    const rightFixedOffsets = computed(() => {
      return buildFixedOffsets('right')
    })

    const paginationTotal = computed(() => {
      if (props.pagination === false) {
        return props.data.length
      }

      return props.remote ? (props.total ?? 0) : props.data.length
    })

    const showFooter = computed(() => {
      return props.pagination !== false && paginationTotal.value > 0
    })

    const pageCount = computed(() => {
      if (!showFooter.value) {
        return 1
      }

      return clamp(Math.ceil(paginationTotal.value / pageSize.value), 1, Number.MAX_SAFE_INTEGER)
    })

    const normalizedPage = computed(() => {
      if (!showFooter.value) {
        return 1
      }

      return clamp(page.value, 1, pageCount.value)
    })

    const pagedData = computed(() => {
      if (!showFooter.value || props.remote) {
        return props.data
      }

      const start = (normalizedPage.value - 1) * pageSize.value
      return props.data.slice(start, start + pageSize.value)
    })

    const treeOptions = computed<DataTableTreeOption | undefined>(() => {
      if (props.tree === false) {
        return
      }

      if (props.tree === true) {
        return {}
      }

      return props.tree
    })

    const treeEnabled = computed(() => {
      return !!treeOptions.value && !treeOptions.value.disabled
    })

    const cascadeSelectionEnabled = computed(() => {
      return treeEnabled.value && props.cascade
    })

    const firstTreeColumnIndex = computed(() => {
      return props.columns.findIndex((column) => !isSelectionColumn(column) && !isExpandColumn(column))
    })

    const allFlatRows = computed<DataTableFlatRow[]>(() => buildFlatRows(pagedData.value, true))

    const visibleFlatRows = computed<DataTableFlatRow[]>(() => buildFlatRows(pagedData.value, false))

    const treeRowMeta = computed(() => {
      const rowByKey = new Map<DataTableKey, DataTableFlatRow>()
      const rowByObject = new Map<Record<string, any>, DataTableFlatRow>()
      const parentKeyByChild = new Map<DataTableKey, DataTableKey>()

      for (const flatRow of allFlatRows.value) {
        rowByKey.set(flatRow.key, flatRow)
        rowByObject.set(flatRow.row, flatRow)

        if (flatRow.parentKey != null) {
          parentKeyByChild.set(flatRow.key, flatRow.parentKey)
        }
      }

      return {
        rowByKey,
        rowByObject,
        parentKeyByChild,
      }
    })

    const selectionColumn = computed(() => props.columns.find(isSelectionColumn))

    const expandColumn = computed(() => props.columns.find(isExpandColumn))

    const checkedRowKeySet = computed(() => new Set(checkedRowKeys.value))

    const treeSelectionState = computed(() => {
      const states = new Map<DataTableKey, { checked: boolean; indeterminate: boolean }>()
      const column = selectionColumn.value

      if (!column) {
        return states
      }

      function visit(row: Record<string, any>): DataTableTreeSelectionState {
        const flatRow = treeRowMeta.value.rowByObject.get(row)

        if (!flatRow) {
          return {
            checked: false,
            indeterminate: false,
            selectable: false,
          }
        }

        const children = getTreeChildren(row)
        const childStates = children.map(visit)
        const selectable = !isRowSelectionDisabled(row, flatRow.rowIndex, column)
        const selfChecked = checkedRowKeySet.value.has(flatRow.key)

        if (!cascadeSelectionEnabled.value || childStates.length === 0) {
          const state = {
            checked: selfChecked,
            indeterminate: false,
          }

          states.set(flatRow.key, state)

          return {
            ...state,
            selectable,
          }
        }

        const selectableChildren = childStates.filter((childState) => {
          return childState.selectable
        })
        const allChildrenChecked =
          selectableChildren.length > 0 &&
          selectableChildren.every((childState) => {
            return childState.checked
          })
        const someChildrenSelected = selectableChildren.some((childState) => {
          return childState.checked || childState.indeterminate
        })
        const state = {
          checked: selectable ? allChildrenChecked : false,
          indeterminate: !allChildrenChecked && someChildrenSelected,
        }

        states.set(flatRow.key, state)

        return {
          ...state,
          selectable: selectable || selectableChildren.length > 0,
        }
      }

      for (const row of pagedData.value) {
        visit(row)
      }

      return states
    })

    const currentSelectableRows = computed(() => {
      const column = selectionColumn.value

      if (!column) {
        return []
      }

      const rows = treeEnabled.value ? allFlatRows.value : visibleFlatRows.value

      return rows.filter((flatRow) => {
        return !isRowSelectionDisabled(flatRow.row, flatRow.rowIndex, column)
      })
    })

    const allCurrentRowsSelected = computed(() => {
      return (
        currentSelectableRows.value.length > 0 &&
        currentSelectableRows.value.every((flatRow) => {
          return isRowKeySelected(flatRow.key)
        })
      )
    })

    const someCurrentRowsSelected = computed(() => {
      return (
        currentSelectableRows.value.some((flatRow) => {
          return isRowKeySelected(flatRow.key) || isRowKeyIndeterminate(flatRow.key)
        }) && !allCurrentRowsSelected.value
      )
    })

    const resolvedEmptyText = computed(() => (pt ? pt : t)('dataTableEmptyText'))

    const headerCells = computed<DataTableHeaderCell[]>(() => {
      const cells: DataTableHeaderCell[] = []
      let coveredUntil = -1

      props.columns.forEach((column, columnIndex) => {
        if (columnIndex <= coveredUntil) {
          return
        }

        const maxColSpan = props.columns.length - columnIndex
        const colSpan = clamp(Math.trunc(Number(column.titleColSpan ?? 1)), 0, maxColSpan)

        if (colSpan === 0) {
          return
        }

        coveredUntil = columnIndex + colSpan - 1
        cells.push({
          key: `${column.key ?? column.type ?? columnIndex}-header-${columnIndex}`,
          columnIndex,
          column,
          colSpan: colSpan > 1 ? colSpan : undefined,
        })
      })

      return cells
    })

    const bodyRows = computed<DataTableBodyRow[]>(() => {
      const rowCount = visibleFlatRows.value.length
      const columnCount = props.columns.length
      const covered = Array.from({ length: rowCount }, () => {
        return Array(columnCount).fill(false)
      })

      return visibleFlatRows.value.map((flatRow, visibleRowIndex) => {
        const cells: DataTableBodyCell[] = []

        props.columns.forEach((column, columnIndex) => {
          if (covered[visibleRowIndex][columnIndex]) {
            return
          }

          const context = {
            row: flatRow.row,
            rowIndex: flatRow.rowIndex,
            pageRowIndex: visibleRowIndex,
            column,
          }
          const maxColSpan = columnCount - columnIndex
          const maxRowSpan = rowCount - visibleRowIndex
          const colSpan = resolveSpan(column.colSpan, context, maxColSpan)
          const rowSpan = resolveSpan(column.rowSpan, context, maxRowSpan)

          if (colSpan === 0 || rowSpan === 0) {
            return
          }

          for (let rowOffset = 0; rowOffset < rowSpan; rowOffset += 1) {
            for (let colOffset = 0; colOffset < colSpan; colOffset += 1) {
              if (rowOffset === 0 && colOffset === 0) {
                continue
              }

              covered[visibleRowIndex + rowOffset][columnIndex + colOffset] = true
            }
          }

          const isTreeColumn = columnIndex === firstTreeColumnIndex.value
          cells.push({
            key: `${column.key ?? column.type ?? columnIndex}-${visibleRowIndex}-${columnIndex}`,
            columnIndex,
            column,
            treeLevel: isTreeColumn ? flatRow.level : undefined,
            treeExpandable: isTreeColumn ? flatRow.expandable : undefined,
            treeExpanded: isTreeColumn ? flatRow.treeExpanded : undefined,
            colSpan: colSpan > 1 ? colSpan : undefined,
            rowSpan: rowSpan > 1 ? rowSpan : undefined,
          })
        })

        return {
          ...flatRow,
          pageRowIndex: visibleRowIndex,
          expanded: expandedRowKeys.value.has(flatRow.key),
          cells,
        }
      })
    })

    watch(
      () => props.checkedRowKeys,
      (value) => {
        checkedRowKeys.value = [...value]
      },
      { deep: true },
    )

    watch(
      () => props.data,
      () => {
        syncCollapsedTreeRowKeys()
      },
      { deep: true, immediate: true },
    )

    watch(
      [() => props.pagination, () => props.remote, page, normalizedPage],
      ([pagination, remote, page, nextPage]) => {
        if (pagination === false || remote || page === nextPage) {
          return
        }

        call(props['onUpdate:page'], nextPage)
      },
      { immediate: true },
    )

    function buildFixedOffsets(direction: DataTableColumnFixed) {
      const offsets = Array<number | undefined>(props.columns.length).fill(undefined)
      let offset = 0

      if (direction === 'left') {
        for (let index = 0; index < props.columns.length; index += 1) {
          if (props.columns[index].fixed !== 'left') {
            continue
          }

          offsets[index] = offset
          offset += columnWidths.value[index]
        }

        return offsets
      }

      for (let index = props.columns.length - 1; index >= 0; index -= 1) {
        if (props.columns[index].fixed !== 'right') {
          continue
        }

        offsets[index] = offset
        offset += columnWidths.value[index]
      }

      return offsets
    }

    function getRowKey(row: Record<string, any>, rowIndex: number) {
      if (isFunction(props.rowKey)) {
        return props.rowKey(row, rowIndex)
      }

      return row[props.rowKey] ?? rowIndex
    }

    function getTreeChildren(row: Record<string, any>) {
      const children = row[props.childrenKey]
      return isArray(children) ? children : []
    }

    function buildFlatRows(sourceRows: Record<string, any>[], includeCollapsedChildren: boolean) {
      const rows: DataTableFlatRow[] = []
      let rowIndex = 0

      function visit(
        source: Record<string, any>[],
        level: number,
        parentKey: DataTableKey | undefined,
        visible: boolean,
      ): void {
        for (const row of source) {
          const currentRowIndex = rowIndex
          rowIndex += 1

          const key = getRowKey(row, currentRowIndex)
          const children = getTreeChildren(row)
          const expandable = treeEnabled.value && children.length > 0
          const treeExpanded = !expandable || !collapsedTreeRowKeys.value.has(key)

          if (includeCollapsedChildren || visible) {
            rows.push({
              key,
              row,
              rowIndex: currentRowIndex,
              pageRowIndex: currentRowIndex,
              level,
              parentKey,
              expandable,
              treeExpanded,
            })
          }

          visit(children, level + 1, key, visible && treeExpanded)
        }
      }

      visit(sourceRows, 0, undefined, true)

      return rows
    }

    function collectExpandableRowKeys(rows: Record<string, any>[]) {
      const keys = new Set<DataTableKey>()
      let rowIndex = 0

      function visit(source: Record<string, any>[]): void {
        for (const row of source) {
          const currentRowIndex = rowIndex
          rowIndex += 1

          const children = getTreeChildren(row)

          if (children.length > 0) {
            keys.add(getRowKey(row, currentRowIndex))
          }

          visit(children)
        }
      }

      visit(rows)

      return keys
    }

    function syncCollapsedTreeRowKeys() {
      if (!treeEnabled.value) {
        collapsedTreeRowKeys.value = new Set()
        return
      }

      const validKeys = collectExpandableRowKeys(props.data)
      const nextCollapsedKeys = new Set<DataTableKey>()

      for (const key of collapsedTreeRowKeys.value) {
        if (validKeys.has(key)) {
          nextCollapsedKeys.add(key)
        }
      }

      collapsedTreeRowKeys.value = nextCollapsedKeys
    }

    function isSelectionColumn(column: DataTableColumn): column is DataTableSelectionColumn {
      return column.type === 'selection'
    }

    function isExpandColumn(column: DataTableColumn): column is DataTableExpandColumn {
      return column.type === 'expand'
    }

    function isMultipleSelectionColumn(column: DataTableSelectionColumn) {
      return column.multiple !== false
    }

    function isSelectionColumnDisabled(column: DataTableSelectionColumn) {
      return column.disabled === true
    }

    function isRowExpandable(bodyRow: DataTableBodyRow, column?: DataTableExpandColumn) {
      if (!column?.expandable) {
        return true
      }

      return column.expandable({
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function isRowSelectionDisabled(row: Record<string, any>, rowIndex: number, column?: DataTableSelectionColumn) {
      if (!column?.disabled || column.disabled === true) {
        return false
      }

      return column.disabled({
        row,
        rowIndex,
      })
    }

    function isRowSelectionDisabledByColumn(bodyRow: DataTableBodyRow, column?: DataTableSelectionColumn) {
      return isRowSelectionDisabled(bodyRow.row, bodyRow.rowIndex, column)
    }

    function updateCheckedRowKeys(value: DataTableKey[]) {
      checkedRowKeys.value = value
      call(props['onUpdate:checkedRowKeys'], value)
    }

    function isRowKeySelected(key: DataTableKey) {
      return treeSelectionState.value.get(key)?.checked ?? checkedRowKeySet.value.has(key)
    }

    function isRowKeyIndeterminate(key: DataTableKey) {
      return treeSelectionState.value.get(key)?.indeterminate ?? false
    }

    function isRowSelected(bodyRow: DataTableBodyRow) {
      return isRowKeySelected(bodyRow.key)
    }

    function isRowIndeterminate(bodyRow: DataTableBodyRow) {
      return isRowKeyIndeterminate(bodyRow.key)
    }

    function isRowExpanded(bodyRow: DataTableBodyRow) {
      return expandedRowKeys.value.has(bodyRow.key)
    }

    function toggleRowSelection(bodyRow: DataTableBodyRow, selected: boolean) {
      const column = selectionColumn.value

      if (!column || isSelectionColumnDisabled(column) || isRowSelectionDisabledByColumn(bodyRow, column)) {
        return
      }

      if (!isMultipleSelectionColumn(column)) {
        updateCheckedRowKeys(
          selected
            ? [bodyRow.key]
            : checkedRowKeys.value.filter((key) => {
                return key !== bodyRow.key
              }),
        )
        return
      }

      const nextKeys = new Set(checkedRowKeys.value)

      if (cascadeSelectionEnabled.value) {
        for (const key of collectSelectableBranchKeys(bodyRow.row)) {
          if (selected) {
            nextKeys.add(key)
          } else {
            nextKeys.delete(key)
          }
        }

        syncAncestorSelection(nextKeys, bodyRow.key)
      } else if (selected) {
        nextKeys.add(bodyRow.key)
      } else {
        nextKeys.delete(bodyRow.key)
      }

      updateCheckedRowKeys([...nextKeys])
    }

    function toggleAllCurrentRows(selected: boolean) {
      const column = selectionColumn.value

      if (!column || isSelectionColumnDisabled(column) || !isMultipleSelectionColumn(column)) {
        return
      }

      const nextKeys = new Set(checkedRowKeys.value)

      for (const flatRow of currentSelectableRows.value) {
        if (selected) {
          nextKeys.add(flatRow.key)
        } else {
          nextKeys.delete(flatRow.key)
        }
      }

      updateCheckedRowKeys([...nextKeys])
    }

    function collectSelectableBranchKeys(row: Record<string, any>) {
      const column = selectionColumn.value
      const keys: DataTableKey[] = []

      if (!column) {
        return keys
      }

      function visit(currentRow: Record<string, any>): void {
        const flatRow = treeRowMeta.value.rowByObject.get(currentRow)

        if (!flatRow) {
          return
        }

        if (!isRowSelectionDisabled(currentRow, flatRow.rowIndex, column)) {
          keys.push(flatRow.key)
        }

        for (const child of getTreeChildren(currentRow)) {
          visit(child)
        }
      }

      visit(row)

      return keys
    }

    function shouldAncestorBeChecked(row: Record<string, any>, nextKeys: Set<DataTableKey>): boolean {
      const column = selectionColumn.value
      const flatRow = treeRowMeta.value.rowByObject.get(row)

      if (!column || !flatRow) {
        return false
      }

      const selectable = !isRowSelectionDisabled(row, flatRow.rowIndex, column)
      const children = getTreeChildren(row)

      if (!children.length) {
        return selectable ? nextKeys.has(flatRow.key) : true
      }

      return (
        selectable &&
        children.every((child) => {
          return shouldAncestorBeChecked(child, nextKeys)
        })
      )
    }

    function syncAncestorSelection(nextKeys: Set<DataTableKey>, key: DataTableKey) {
      let parentKey = treeRowMeta.value.parentKeyByChild.get(key)

      while (parentKey != null) {
        const parentRow = treeRowMeta.value.rowByKey.get(parentKey)

        if (!parentRow) {
          break
        }

        if (shouldAncestorBeChecked(parentRow.row, nextKeys)) {
          nextKeys.add(parentKey)
        } else {
          nextKeys.delete(parentKey)
        }

        parentKey = treeRowMeta.value.parentKeyByChild.get(parentKey)
      }
    }

    function toggleRowExpanded(bodyRow: DataTableBodyRow) {
      const column = expandColumn.value

      if (!column || !isRowExpandable(bodyRow, column)) {
        return
      }

      const nextExpandedRows = new Set(expandedRowKeys.value)

      if (nextExpandedRows.has(bodyRow.key)) {
        nextExpandedRows.delete(bodyRow.key)
      } else {
        nextExpandedRows.add(bodyRow.key)
      }

      expandedRowKeys.value = nextExpandedRows
    }

    function toggleTreeRowExpanded(bodyRow: DataTableBodyRow) {
      if (!treeEnabled.value || !bodyRow.expandable) {
        return
      }

      const nextCollapsedRows = new Set(collapsedTreeRowKeys.value)

      if (nextCollapsedRows.has(bodyRow.key)) {
        nextCollapsedRows.delete(bodyRow.key)
      } else {
        nextCollapsedRows.add(bodyRow.key)
      }

      collapsedTreeRowKeys.value = nextCollapsedRows
    }

    function renderCell(bodyRow: DataTableBodyRow, column: DataTableColumn) {
      if (isSelectionColumn(column) || isExpandColumn(column)) {
        return
      }

      if (column.render) {
        return column.render({
          row: bodyRow.row,
          rowIndex: bodyRow.rowIndex,
        })
      }

      return bodyRow.row[column.key]
    }

    function renderExpandedRow(bodyRow: DataTableBodyRow) {
      const column = expandColumn.value

      if (!column) {
        return
      }

      return column.renderExpand({
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
        expanded: true,
      })
    }

    function resolveSpan(
      span: DataTableColumnCellSpan | undefined,
      context: InternalDataTableCellContext,
      maxSpan: number,
    ) {
      const resolvedSpan = span == null ? 1 : Math.trunc(Number(callOrReturn(span, context)))

      if (resolvedSpan <= 0) {
        return 0
      }

      return clamp(resolvedSpan, 1, maxSpan)
    }

    function getRowProps(bodyRow: DataTableBodyRow) {
      if (!props.rowProps) {
        return
      }

      return callOrReturn(props.rowProps, {
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function getCellProps(bodyRow: DataTableBodyRow, column: DataTableColumn) {
      if (!column.cellProps) {
        return
      }

      return callOrReturn(column.cellProps, {
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function getAlign(align?: DataTableColumnAlign) {
      return align ?? 'left'
    }

    function getColumnDefaultWidth(column: DataTableColumn) {
      if (column.width != null) {
        return column.width
      }

      if (isSelectionColumn(column) || isExpandColumn(column)) {
        return defaultDataTableControlColumnWidth
      }
    }

    function getColStyle(column: DataTableColumn) {
      const style: CSSProperties = {}
      const resolvedWidth = getColumnDefaultWidth(column)

      if (resolvedWidth != null) {
        style.width = toSizeUnit(resolvedWidth)
      }

      if (column.minWidth != null) {
        style.minWidth = toSizeUnit(column.minWidth)
      } else if (resolvedWidth != null) {
        style.minWidth = toSizeUnit(resolvedWidth)
      }

      return style
    }

    function getFixedStyle(fixed: DataTableColumnFixed | undefined, columnIndex: number) {
      if (fixed === 'left') {
        return {
          left: `${leftFixedOffsets.value[columnIndex] ?? 0}px`,
          position: 'sticky',
          zIndex: 2,
        } satisfies CSSProperties
      }

      if (fixed === 'right') {
        return {
          right: `${rightFixedOffsets.value[columnIndex] ?? 0}px`,
          position: 'sticky',
          zIndex: 2,
        } satisfies CSSProperties
      }
    }

    function getHeaderCellStyle(cell: DataTableHeaderCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.titleAlign ?? cell.column.align),
        zIndex: cell.column.fixed ? 3 : undefined,
        ...getFixedStyle(cell.column.fixed, cell.columnIndex),
      }
    }

    function getBodyCellStyle(cell: DataTableBodyCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.align),
        ...getFixedStyle(cell.column.fixed, cell.columnIndex),
      }
    }

    function handlePaginationChange(page: number, pageSize: number) {
      call(props['onUpdate:page'], page)
      call(props['onUpdate:pageSize'], pageSize)
    }

    return {
      page,
      pageSize,
      normalizedPaginationOptions,
      paginationTotal,
      resolvedEmptyText,
      showFooter,
      treeEnabled,
      currentSelectableRows,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      headerCells,
      bodyRows,
      getRowProps,
      getCellProps,
      isSelectionColumn,
      isExpandColumn,
      isMultipleSelectionColumn,
      isSelectionColumnDisabled,
      isRowSelectionDisabledByColumn,
      isRowExpandable,
      isRowExpanded,
      isRowIndeterminate,
      isRowSelected,
      toggleAllCurrentRows,
      toggleRowExpanded,
      toggleTreeRowExpanded,
      toggleRowSelection,
      renderCell,
      renderExpandedRow,
      getColStyle,
      getHeaderCellStyle,
      getBodyCellStyle,
      handlePaginationChange,
      n,
      classes,
      formatElevation,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../hover-overlay/hoverOverlay';
@import '../checkbox/checkbox';
@import '../loading/loading';
@import '../menu/menu';
@import '../menu-select/menuSelect';
@import '../menu-option/menuOption';
@import '../radio/radio';
@import '../cell/cell';
@import '../field-decorator/fieldDecorator';
@import '../input/input';
@import '../pagination/pagination';
@import './dataTable';
</style>
