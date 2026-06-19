<template>
  <div ref="root" :class="n()">
    <template v-for="(segment, index) in segments" :key="segment.key">
      <span v-if="index > 0" :class="n('separator')">:</span>

      <var-menu-select
        :show="openKey === segment.key"
        :model-value="segment.value"
        :options="segment.options"
        trigger="manual"
        placement="bottom"
        :offset-y="4"
        scrollable
        :close-on-select="false"
        :popover-class="n('popover')"
        :disabled="disabled || readonly"
        @update:show="(value) => handleUpdateShow(segment.key, value)"
        @update:model-value="(value) => selectOption(segment.key, value)"
      >
        <button
          type="button"
          :class="
            classes(n('box'), [openKey === segment.key, n('box--active')], [disabled || readonly, n('box--disabled')])
          "
          :aria-disabled="disabled || readonly"
          @mousedown.prevent
          @click="toggle(segment.key)"
        >
          {{ segment.label }}
        </button>
      </var-menu-select>
    </template>
  </div>
</template>

<script lang="ts">
import { times } from '@varlet/shared'
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, type PropType } from 'vue'
import VarMenuSelect from '../../menu-select'
import { createNamespace } from '../../utils/components'
import { padStart } from '../../utils/shared'

type TimeUnit = 'hour' | 'minute' | 'second'

type TimeValue = {
  hour: number
  minute: number
  second: number
}

const { name, n, classes } = createNamespace('date-input-time-field')

export default defineComponent({
  name,
  components: {
    VarMenuSelect,
  },
  props: {
    hour: {
      type: Number,
      default: 0,
    },
    minute: {
      type: Number,
      default: 0,
    },
    second: {
      type: Number,
      default: 0,
    },
    useSeconds: {
      type: Boolean,
      default: true,
    },
    readonly: Boolean,
    disabled: Boolean,
    isHourAllowed: Function as PropType<(hour: number) => boolean>,
    isMinuteAllowed: Function as PropType<(minute: number) => boolean>,
    isSecondAllowed: Function as PropType<(second: number) => boolean>,
  },
  emits: ['change'],

  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    const openKey = ref<TimeUnit | null>(null)

    const segments = computed(() => {
      const list = [
        buildSegment('hour', props.hour, 24, props.isHourAllowed),
        buildSegment('minute', props.minute, 60, props.isMinuteAllowed),
      ]

      if (props.useSeconds) {
        list.push(buildSegment('second', props.second, 60, props.isSecondAllowed))
      }

      return list
    })

    onMounted(() => {
      document.addEventListener('mousedown', handlePopoverMousedown, true)
      document.addEventListener('pointerdown', handleOutsidePointerdown, true)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handlePopoverMousedown, true)
      document.removeEventListener('pointerdown', handleOutsidePointerdown, true)
    })

    function buildSegment(key: TimeUnit, value: number, count: number, allowed?: (value: number) => boolean) {
      return {
        key,
        value,
        label: padStart(`${value}`, 2, '0'),
        options: times(count, (option) => ({
          label: padStart(`${option}`, 2, '0'),
          value: option,
          disabled: allowed ? !allowed(option) : false,
        })),
      }
    }

    function toggle(key: TimeUnit) {
      if (props.disabled || props.readonly) {
        return
      }

      openKey.value = openKey.value === key ? null : key
    }

    function handleUpdateShow(key: TimeUnit, value: boolean) {
      if (!value && openKey.value === key) {
        openKey.value = null
      }
    }

    function selectOption(key: TimeUnit, value: number) {
      const time: TimeValue = {
        hour: props.hour,
        minute: props.minute,
        second: props.second,
      }
      time[key] = value

      openKey.value = null
      emit('change', time)
    }

    function isInsidePopover(target: Node | null) {
      if (!target) {
        return false
      }

      return Array.from(document.querySelectorAll(`.${n('popover')}`)).some((popover) => popover.contains(target))
    }

    function handlePopoverMousedown(event: Event) {
      if (openKey.value != null && isInsidePopover(event.target as Node | null)) {
        event.preventDefault()
      }
    }

    function handleOutsidePointerdown(event: Event) {
      if (openKey.value == null) {
        return
      }

      const target = event.target as Node | null

      if ((target && root.value?.contains(target)) || isInsidePopover(target)) {
        return
      }

      openKey.value = null
    }

    return {
      n,
      classes,
      root,
      openKey,
      segments,
      toggle,
      handleUpdateShow,
      selectOption,
    }
  },
})
</script>
