# Tour

### Introduction

Guide users through a page with step descriptions and highlighted targets. The card uses Dialog theme variables and Button styles, including Material Design 2, Material Design 3, and dark themes.

### Basic Usage

Use `v-model:show` to control visibility and `steps` to describe the tour. A `target` can be a CSS selector, an HTML element, or a function returning an HTML element. The optional `v-model:current` uses zero-based step indices.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const current = ref(0)
const steps = [
  { target: '#create-project', title: 'Create a project', description: 'Create a project and invite your teammates here.' },
  { target: '#project-list', title: 'View projects', description: 'Find the latest updates here.', placement: 'top' },
]

function start() {
  current.value = 0
  show.value = true
}
</script>

<template>
  <var-button type="primary" @click="start">Start Tour</var-button>
  <var-button id="create-project">New Project</var-button>
  <div id="project-list">Project list</div>
  <var-tour v-model:show="show" v-model:current="current" :steps="steps" />
</template>
```

### Targets and Placement

The card appears below its target by default. It flips when space is limited and stays within the viewport. Set a global `placement` or override it for individual steps.
Offscreen targets are scrolled into view when changing steps. Set `scroll-into-view` to `false` to disable this behavior. Positioning follows page and nested container scrolling, window resizing, and target size changes.

A step without a target displays a centered card, which is useful for welcome and closing screens. Missing, hidden, removed, fully offscreen targets, and invalid selectors also fall back to a centered card without a highlight.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const target = ref(null)
const steps = [
  { title: 'Welcome', description: 'Take a quick tour of your workspace.' },
  { target: () => target.value, title: 'Search', description: 'Find projects by name.' },
]
</script>

<template>
  <div ref="target">Search area</div>
  <var-tour v-model:show="show" :steps="steps" />
</template>
```

Target resolver functions can read reactive element refs. For selector targets added asynchronously, or layout changes that only move an element without scrolling or resizing, call `resize()` after `nextTick()`. Loading pages, changing routes, and persisting tour completion remain the responsibility of the application.

### Highlight and Interaction

Set `gap` for space around the target and `gap-radius` for rounded corners. The overlay blocks page interaction by default, including the highlighted area. Enable `allow-target-interaction` to make the highlighted target interactive. Set `overlay` to `false` to keep the card and highlight without a mask.

```html
<var-tour
  v-model:show="show"
  :steps="steps"
  :gap="12"
  :gap-radius="8"
  allow-target-interaction
/>
```

Overlay clicks do not close the tour unless `close-on-click-overlay` is enabled. Escape or Skip closes the tour; Finish on the last step emits `finish` before closing. Page scrolling is unlocked by default; use `lock-scroll` to lock it.

### Custom Content

Replace the title, description, or footer with the `title`, default, and `actions` slots. Each slot receives the current step, progress, and navigation methods.

```html
<var-tour v-model:show="show" :steps="steps">
  <template #default="{ step }">
    <p>{{ step.description }}</p>
  </template>
  <template #actions="{ current, total, next, close }">
    <var-button text @click="close">Skip for now</var-button>
    <var-button type="primary" @click="next">
      {{ current === total - 1 ? 'Get Started' : 'Continue' }}
    </var-button>
  </template>
</var-tour>
```

Button labels can be overridden with props, `Locale`, or `LocaleProvider`. Missing Tour messages in a scoped locale fall back to the global locale, then English.

### Keyboard Access

In the default overlay mode, focus moves to the card and Tab / Shift+Tab stay inside it. Closing or unmounting attempts to restore focus to the trigger. Escape affects only the topmost layer.
Focus is not trapped when target interaction is enabled or the overlay is disabled. Custom action slots should use buttons with clear text or accessible names.

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | Visibility; supports `v-model:show` | _boolean_ | `false` |
| `current` | Zero-based index; supports `v-model:current`; invalid values are clamped | _number_ | `0` |
| `steps` | Tour steps; an empty array hides the tour | _TourStep[]_ | `[]` |
| `placement` | Global card placement | _TourPlacement_ | `bottom` |
| `width` | Card width, limited by the viewport | _string \| number_ | `-` |
| `gap` | Highlight padding in px | _number_ | `8` |
| `gap-radius` | Highlight corner radius in px | _number_ | `4` |
| `overlay` | Show the mask | _boolean_ | `true` |
| `lock-scroll` | Lock page scrolling | _boolean_ | `false` |
| `scroll-into-view` | Scroll to offscreen targets on step changes | _boolean_ | `true` |
| `allow-target-interaction` | Allow interaction with the highlighted area | _boolean_ | `false` |
| `close-on-click-overlay` | Close on mask clicks | _boolean_ | `false` |
| `close-on-key-escape` | Close on Escape | _boolean_ | `true` |
| `show-close` | Show the Skip button | _boolean_ | `true` |
| `show-progress` | Show step progress | _boolean_ | `true` |
| `prev-button-text` | Previous button label | _string_ | `Previous` |
| `next-button-text` | Next button label | _string_ | `Next` |
| `finish-button-text` | Finish button label | _string_ | `Finish` |
| `close-button-text` | Skip button label | _string_ | `Skip` |
| `teleport` | Mount target; `false` disables teleporting. Keep the default to avoid transformed or clipping ancestors affecting positioning | _string \| Element \| false_ | `body` |

### TourStep

| Property | Description | Type |
| --- | --- | --- |
| `target` | Optional highlight target | _string \| HTMLElement \| (() => HTMLElement \| null \| undefined)_ |
| `title` | Step title | _string_ |
| `description` | Step description | _string_ |
| `placement` | Override the global placement | _TourPlacement_ |

`TourPlacement` supports `top`, `bottom`, `left`, and `right`, with optional `-start` and `-end` suffixes, such as `bottom-start`.

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `open` | Tour becomes visible | `-` |
| `close` | Tour becomes hidden | `-` |
| `change` | Current step changes | `current: number, previous: number` |
| `finish` | Last-step Next button or `finish()` is used | `-` |
| `click-overlay` | Mask is clicked | `event: MouseEvent` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `open` | Open at an index; defaults to the first step | `current?: number` | `-` |
| `close` | Close without emitting finish | `-` | `-` |
| `next` | Next step, or finish and close on the last step | `-` | `-` |
| `prev` | Previous step; no effect on the first step | `-` | `-` |
| `finish` | Finish and close; no effect while hidden | `-` | `-` |
| `resize` | Resolve the target again and update positions | `-` | `-` |

### Slots

| Name | Description | Arguments |
| --- | --- | --- |
| `default` | Step description | `TourSlotData` |
| `title` | Step title | `TourSlotData` |
| `actions` | Footer, replacing progress and action buttons | `TourSlotData` |

`TourSlotData` contains `step: TourStep`, `current: number`, `total: number`, and the `next()`, `prev()`, `close()`, and `finish()` methods.

### Style Variables

| Variable | Default |
| --- | --- |
| `--tour-width` | `320px` |
| `--tour-padding` | `20px` |
| `--tour-border-radius` | `var(--dialog-border-radius)` |
| `--tour-background` | `var(--dialog-background)` |
| `--tour-title-color` | `var(--dialog-title-color)` |
| `--tour-title-font-size` | `var(--dialog-title-font-size)` |
| `--tour-description-color` | `var(--dialog-message-color)` |
| `--tour-description-font-size` | `var(--dialog-message-font-size)` |
| `--tour-description-line-height` | `var(--dialog-message-line-height)` |
| `--tour-overlay-color` | `var(--overlay-background-color)` |
| `--tour-highlight-color` | `var(--color-primary)` |
