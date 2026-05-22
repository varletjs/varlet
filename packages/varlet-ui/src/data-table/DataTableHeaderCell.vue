<template>
  <th
    :class="
      classes(
        n('cell'),
        n('header-cell'),
        [isSelectionColumn(headerCell.column), n('selection-cell')],
        [isExpandColumn(headerCell.column), n('expand-cell')],
        [headerCell.column.fixed, n('fixed-cell')],
        [isLastLeftFixedColumn(headerCell.columnIndex), n('fixed-cell--shadow-right')],
        [isFirstRightFixedColumn(headerCell.columnIndex), n('fixed-cell--shadow-left')],
      )
    "
    :style="style"
    :colspan="headerCell.colSpan"
  >
    <var-checkbox
      v-if="isSelectionColumn(headerCell.column) && isMultipleSelectionColumn(headerCell.column)"
      :model-value="allCurrentRowsSelected"
      :indeterminate="someCurrentRowsSelected"
      :disabled="!isSelectionColumnSelectable(headerCell.column) || !hasSelectableRows"
      tabindex="-1"
      @update:model-value="toggleCurrentSelectableRows"
    />
    <template v-else>
      {{ isSelectionColumn(headerCell.column) || isExpandColumn(headerCell.column) ? '' : headerCell.column.title }}
    </template>
    <button
      v-if="
        isColumnResizable(headerCell.column) &&
        headerCell.colSpan == null &&
        !isLastHeaderColumn(headerCell.columnIndex)
      "
      type="button"
      tabindex="-1"
      :class="n('resize-trigger')"
      @click.stop
      @mousedown="startColumnResize($event, headerCell)"
    />
  </th>
</template>

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue'
import VarCheckbox from '../checkbox'
import { createNamespace } from '../utils/components'
import type { DataTableColumn, DataTableExpandColumn, DataTableSelectionColumn } from './props'

const { n, classes } = createNamespace('data-table')

export interface DataTableHeaderCellData {
  key: string
  columnIndex: number
  column: DataTableColumn
  colSpan?: number
}

export default defineComponent({
  name: 'DataTableHeaderCell',
  components: {
    VarCheckbox,
  },
  props: {
    headerCell: {
      type: Object as PropType<DataTableHeaderCellData>,
      required: true,
    },
    style: {
      type: Object as PropType<CSSProperties>,
      required: true,
    },
    allCurrentRowsSelected: {
      type: Boolean,
      required: true,
    },
    someCurrentRowsSelected: {
      type: Boolean,
      required: true,
    },
    hasSelectableRows: {
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
    isColumnResizable: {
      type: Function as PropType<(column: DataTableColumn) => boolean>,
      required: true,
    },
    isLastHeaderColumn: {
      type: Function as PropType<(columnIndex: number) => boolean>,
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
    toggleCurrentSelectableRows: {
      type: Function as PropType<(selected: boolean) => void>,
      required: true,
    },
    startColumnResize: {
      type: Function as PropType<(event: MouseEvent, headerCell: DataTableHeaderCellData) => void>,
      required: true,
    },
  },
  setup() {
    return {
      n,
      classes,
    }
  },
})
</script>
