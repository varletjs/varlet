<template>
  <td
    :class="
      classes(
        n('cell'),
        n('body-cell'),
        [isSelectionColumn(cell.column), n('selection-cell')],
        [isExpandColumn(cell.column), n('expand-cell')],
        [cell.column.fixed, n('fixed-cell')],
        [isLastLeftFixedColumn(cell.columnIndex), n('fixed-cell--shadow-right')],
        [isFirstRightFixedColumn(cell.columnIndex), n('fixed-cell--shadow-left')],
      )
    "
    :style="style"
    v-bind="getCellProps(bodyRow, cell.column)"
    :colspan="cell.colSpan"
    :rowspan="cell.rowSpan"
  >
    <var-checkbox
      v-if="isSelectionColumn(cell.column) && isMultipleSelectionColumn(cell.column)"
      var-data-table-cover
      :model-value="isRowKeySelected(bodyRow.key)"
      :indeterminate="isRowKeyIndeterminate(bodyRow.key)"
      :disabled="
        !isSelectionColumnSelectable(cell.column) || !isRowSelectable(bodyRow.row, bodyRow.rowIndex, cell.column)
      "
      tabindex="-1"
      @update:model-value="toggleRowSelection(bodyRow, $event)"
    />
    <var-radio
      v-else-if="isSelectionColumn(cell.column)"
      var-data-table-cover
      :model-value="isRowKeySelected(bodyRow.key)"
      :disabled="
        !isSelectionColumnSelectable(cell.column) || !isRowSelectable(bodyRow.row, bodyRow.rowIndex, cell.column)
      "
      tabindex="-1"
      @update:model-value="toggleRowSelection(bodyRow, $event)"
    />
    <button
      v-else-if="isExpandColumn(cell.column)"
      type="button"
      tabindex="-1"
      :class="classes(n('expand-trigger'), [bodyRow.expanded, n('expand-trigger--expanded')])"
      :disabled="!isRowExpandable(bodyRow, cell.column)"
      @click="toggleRowExpanded(bodyRow)"
    >
      <var-icon var-data-table-cover :name="bodyRow.expanded ? 'chevron-down' : 'chevron-right'" />
    </button>
    <div v-else-if="tree && cell.treeLevel != null" :class="n('tree-cell')" :style="treeStyle">
      <button
        v-if="cell.treeExpandable"
        type="button"
        tabindex="-1"
        :class="classes(n('tree-trigger'), [cell.treeExpanded, n('tree-trigger--expanded')])"
        @click="toggleTreeRowExpanded(bodyRow)"
      >
        <var-icon var-data-table-cover :name="cell.treeExpanded ? 'chevron-down' : 'chevron-right'" />
      </button>
      <span v-else :class="n('tree-indent')" />
      <maybe-v-node :is="renderCell(bodyRow, cell.column)" tag="div" />
    </div>
    <maybe-v-node v-else :is="renderCell(bodyRow, cell.column)" tag="div" />
  </td>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties, type PropType, type VNodeChild } from 'vue'
import VarCheckbox from '../checkbox'
import VarIcon from '../icon'
import VarRadio from '../radio'
import { createNamespace, MaybeVNode } from '../utils/components'
import type { DataTableColumn, DataTableExpandColumn, DataTableSelectionColumn } from './props'
import type { DataTableBodyCell, DataTableBodyRow } from './useBodyRows'

const { n, classes } = createNamespace('data-table')

export default defineComponent({
  name: 'DataTableBodyCell',
  components: {
    MaybeVNode,
    VarCheckbox,
    VarIcon,
    VarRadio,
  },
  props: {
    bodyRow: {
      type: Object as PropType<DataTableBodyRow>,
      required: true,
    },
    cell: {
      type: Object as PropType<DataTableBodyCell>,
      required: true,
    },
    style: {
      type: Object as PropType<CSSProperties>,
      required: true,
    },
    tree: {
      type: Boolean,
      required: true,
    },
    isSelectionColumn: {
      type: Function as PropType<(column: DataTableColumn) => column is DataTableSelectionColumn>,
      required: true,
    },
    isExpandColumn: {
      type: Function as PropType<(column: DataTableColumn) => column is DataTableExpandColumn>,
      required: true,
    },
    isMultipleSelectionColumn: {
      type: Function as PropType<(column: DataTableSelectionColumn) => boolean>,
      required: true,
    },
    isSelectionColumnSelectable: {
      type: Function as PropType<(column: DataTableSelectionColumn) => boolean>,
      required: true,
    },
    isRowSelectable: {
      type: Function as PropType<
        (row: Record<string, any>, rowIndex: number, column?: DataTableSelectionColumn) => boolean
      >,
      required: true,
    },
    isRowKeySelected: {
      type: Function as PropType<(key: string | number) => boolean>,
      required: true,
    },
    isRowKeyIndeterminate: {
      type: Function as PropType<(key: string | number) => boolean>,
      required: true,
    },
    isRowExpandable: {
      type: Function as PropType<(bodyRow: DataTableBodyRow, column?: DataTableExpandColumn) => boolean>,
      required: true,
    },
    isLastLeftFixedColumn: {
      type: Function as PropType<(columnIndex: number) => boolean>,
      required: true,
    },
    isFirstRightFixedColumn: {
      type: Function as PropType<(columnIndex: number) => boolean>,
      required: true,
    },
    toggleRowSelection: {
      type: Function as PropType<(bodyRow: DataTableBodyRow, selected: boolean) => void>,
      required: true,
    },
    toggleRowExpanded: {
      type: Function as PropType<(bodyRow: DataTableBodyRow) => void>,
      required: true,
    },
    toggleTreeRowExpanded: {
      type: Function as PropType<(bodyRow: DataTableBodyRow) => void>,
      required: true,
    },
    renderCell: {
      type: Function as PropType<(bodyRow: DataTableBodyRow, column: DataTableColumn) => VNodeChild>,
      required: true,
    },
    getCellProps: {
      type: Function as PropType<
        (bodyRow: DataTableBodyRow, column: DataTableColumn) => Record<string, any> | undefined
      >,
      required: true,
    },
  },
  setup(props) {
    const treeStyle = computed<CSSProperties>(() => {
      return {
        paddingInlineStart: `${(props.cell.treeLevel ?? 0) * 20}px`,
      }
    })

    return {
      n,
      classes,
      treeStyle,
    }
  },
})
</script>
