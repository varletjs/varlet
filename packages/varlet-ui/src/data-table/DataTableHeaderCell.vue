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
    <button
      v-else-if="isColumnSortable(headerCell.column)"
      type="button"
      :class="
        classes(n('sort-trigger'), n(`sort-trigger--align-${headerAlign}`), [
          columnSorterOrder,
          n('sort-trigger--active'),
        ])
      "
      :style="sortTriggerStyle"
      :aria-label="sortTriggerLabel"
      @click="toggleColumnSorter(headerCell.column.key)"
    >
      <span :class="n('sort-trigger-text')">{{ headerCell.column.title }}</span>
      <span :class="n('sort-trigger-icon')" aria-hidden="true">
        <var-icon
          name="chevron-up"
          :class="classes(n('sort-trigger-icon-up'), [columnSorterOrder === 'asc', n('sort-trigger-icon--active')])"
        />
        <var-icon
          name="chevron-down"
          :class="classes(n('sort-trigger-icon-down'), [columnSorterOrder === 'desc', n('sort-trigger-icon--active')])"
        />
      </span>
    </button>
    <template v-else>
      {{ headerTitle }}
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
import { computed, defineComponent, type CSSProperties, type PropType } from 'vue'
import VarCheckbox from '../checkbox'
import VarIcon from '../icon'
import { createNamespace } from '../utils/components'
import type {
  DataTableColumn,
  DataTableExpandColumn,
  DataTableFieldColumn,
  DataTableSelectionColumn,
  DataTableSorterOrder,
} from './props'

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
    VarIcon,
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
    isColumnSortable: {
      type: Function as PropType<(column: DataTableColumn) => column is DataTableFieldColumn>,
      required: true,
    },
    getColumnSorterOrder: {
      type: Function as PropType<(columnKey: string) => DataTableSorterOrder | undefined>,
      required: true,
    },
    toggleColumnSorter: {
      type: Function as PropType<(columnKey: string) => void>,
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
  setup(props) {
    const columnSorterOrder = computed(() => {
      if (!props.isColumnSortable(props.headerCell.column)) {
        return
      }

      return props.getColumnSorterOrder(props.headerCell.column.key)
    })

    const headerAlign = computed(() => {
      return props.headerCell.column.titleAlign ?? props.headerCell.column.align ?? 'left'
    })

    const headerTitle = computed(() => {
      return props.isSelectionColumn(props.headerCell.column) || props.isExpandColumn(props.headerCell.column)
        ? ''
        : props.headerCell.column.title
    })

    const sortTriggerStyle = computed<CSSProperties>(() => {
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
    })

    const sortTriggerLabel = computed(() => {
      if (!props.isColumnSortable(props.headerCell.column)) {
        return ''
      }

      const orderLabel =
        columnSorterOrder.value === 'asc' ? 'ascending' : columnSorterOrder.value === 'desc' ? 'descending' : 'none'

      return `Sort by ${props.headerCell.column.title}, current: ${orderLabel}`
    })

    return {
      n,
      classes,
      columnSorterOrder,
      headerTitle,
      headerAlign,
      sortTriggerStyle,
      sortTriggerLabel,
    }
  },
})
</script>
