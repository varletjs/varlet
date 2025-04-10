<template>
  <div :class="classes(n(), n('$--box'))">
    <div :class="n('file-list')">
      <div
        v-for="f in files"
        :key="f.id"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple }"
        :class="classes(n('file'), formatElevation(elevation, 2), [f.state === 'loading', n('--loading')])"
        @click="preview(f)"
      >
        <div :class="n('file-name')">{{ f.name || f.url }}</div>
        <slot
          v-if="removable"
          name="remove-button"
          :remove="
            () => {
              handleRemove(f)
            }
          "
        >
          <div :class="n('file-close')" @click.stop="handleRemove(f)">
            <var-icon :class="n('file-close-icon')" var-uploader-cover name="delete" />
          </div>
        </slot>
        <img
          v-if="f.cover"
          role="img"
          :class="n('file-cover')"
          :style="{ objectFit: f.fit }"
          :src="f.cover"
          :alt="f.name"
        />
        <div :class="n('file-indicator')">
          <div
            :class="
              classes(n('progress'), [f.state === 'success', n('--success')], [f.state === 'error', n('--error')])
            "
            :style="{ width: f.state === 'success' || f.state === 'error' ? '100%' : `${f.progress}%` }"
          ></div>
        </div>
      </div>

      <div
        v-if="!maxlength || modelValue.length < toNumber(maxlength)"
        ref="actionRef"
        v-ripple="{
          disabled: disabled || formDisabled || readonly || formReadonly || !ripple || Boolean($slots.default),
        }"
        v-hover:desktop="handleHovering"
        :class="
          classes(
            n('--outline-none'),
            [!$slots.default, `${n('action')} ${formatElevation(elevation, 2)}`],
            [disabled || formDisabled, n('--disabled')],
          )
        "
        :tabindex="disabled || formDisabled ? undefined : '0'"
        @click="handleActionClick"
        @focus="isFocusing = true"
        @blur="isFocusing = false"
      >
        <input
          ref="input"
          type="file"
          :class="n('action-input')"
          :multiple="multiple"
          :accept="accept"
          :capture="capture"
          :disabled="disabled || formDisabled || readonly || formReadonly"
          @change="handleChange"
          @click.stop
        />

        <slot>
          <var-icon :class="n('action-icon')" var-uploader-cover name="plus" />
          <var-hover-overlay
            :hovering="hovering && !disabled && !formDisabled && !readonly && !formReadonly"
            :focusing="isFocusing && !disabled && !formDisabled && !readonly && !formReadonly"
          />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :extra-message="maxlengthText">
      <template v-if="$slots['extra-message']" #extra-message>
        <slot name="extra-message" />
      </template>
    </var-form-details>

    <var-popup
      v-model:show="showPreview"
      :class="n('preview')"
      var-uploader-cover
      position="center"
      @closed="currentPreview = null"
    >
      <video
        v-if="currentPreview && isHTMLSupportVideo(currentPreview?.url)"
        :class="n('preview-video')"
        playsinline="true"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        controls
        :src="currentPreview?.url"
      ></video>
    </var-popup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref, watch } from 'vue'
import { call, isNumber, normalizeToArray, toDataURL, toNumber } from '@varlet/shared'
import { useEventListener } from '@varlet/use'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import VarIcon from '../icon'
import ImagePreview from '../image-preview'
import VarPopup from '../popup'
import Ripple from '../ripple'
import { createNamespace, formatElevation, useValidation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { isHTMLSupportImage, isHTMLSupportVideo } from '../utils/shared'
import { props, type UploaderValidateTrigger, type VarFile } from './props'
import { type UploaderProvider } from './provide'

const { name, n, classes } = createNamespace('uploader')

interface ValidationVarFile {
  valid: boolean
  varFile: VarFile
}

interface VarFileUtils {
  getLoading(): VarFile[]

  getSuccess(): VarFile[]

  getError(): VarFile[]
}

let fid = 0

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarIcon,
    VarPopup,
    VarFormDetails,
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const isFocusing = ref(false)
    const actionRef = ref<null | HTMLElement>(null)
    const input = ref<null | HTMLElement>(null)
    const showPreview = ref(false)
    const currentPreview = ref<null | VarFile>(null)
    const maxlengthText = computed(() => {
      const {
        maxlength,
        modelValue: { length },
      } = props

      return isNumber(maxlength) ? `${length} / ${maxlength}` : ''
    })
    const { form, bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const { hovering, handleHovering } = useHoverOverlay()
    const files = computed(() => {
      const { modelValue, hideList } = props

      if (hideList) {
        return []
      }
      return modelValue
    })

    let callReset = false
    const varFileUtils: VarFileUtils = {
      getSuccess,
      getError,
      getLoading,
    }
    const uploaderProvider: UploaderProvider = {
      validate,
      resetValidation,
      reset,
    }

    call(bindForm, uploaderProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    watch(
      () => props.modelValue,
      () => {
        !callReset && validateWithTrigger('onChange')
        callReset = false
      },
      { deep: true },
    )

    function handleKeydown(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault()
      }

      if (event.key === 'Enter') {
        actionRef.value!.click()
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (!isFocusing.value || event.key !== ' ') {
        return
      }

      event.preventDefault()
      actionRef.value!.click()
    }

    function preview(varFile: VarFile) {
      const { disabled, previewed, preventDefaultPreview, onPreview } = props

      if (form?.disabled.value || disabled || !previewed) {
        return
      }

      call(onPreview, reactive(varFile))

      if (preventDefaultPreview) {
        return
      }

      const { url } = varFile

      if (isHTMLSupportImage(url)) {
        ImagePreview(url)
        return
      }

      if (isHTMLSupportVideo(url)) {
        currentPreview.value = varFile
        showPreview.value = true
      }
    }

    function createVarFile(file: File): VarFile {
      return {
        id: fid++,
        url: '',
        cover: '',
        name: file.name,
        file,
        progress: 0,
      }
    }

    function getFiles(event: Event): File[] {
      const el = event.target as HTMLInputElement
      const { files: fileList } = el
      return Array.from<File>(fileList as ArrayLike<File>)
    }

    async function resolver(varFile: VarFile): Promise<VarFile> {
      const file = varFile.file!
      const shouldWithDataURL =
        (props.resolveType === 'default' && file.type.startsWith('image')) || props.resolveType === 'data-url'

      if (shouldWithDataURL) {
        const dataURL = await toDataURL(file)
        varFile.cover = dataURL
        varFile.url = dataURL
      }

      return varFile
    }

    function getResolvers(varFiles: VarFile[]) {
      return varFiles.map(resolver)
    }

    function getBeforeReaders(varFiles: VarFile[]): Promise<ValidationVarFile>[] {
      const { onBeforeRead } = props

      return varFiles.map(
        (varFile) =>
          new Promise((resolve) => {
            if (!onBeforeRead) {
              resolve({
                valid: true,
                varFile,
              })
            }

            const results = normalizeToArray(call(onBeforeRead, reactive(varFile)))
            Promise.all(results).then((values) => {
              resolve({
                valid: values.every(Boolean),
                varFile,
              })
            })
          }),
      )
    }

    async function handleChange(event: Event) {
      const { maxsize, maxlength, modelValue, onOversize, onAfterRead, onBeforeFilter, readonly, disabled } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const getValidSizeVarFile = (varFiles: VarFile[]): VarFile[] =>
        varFiles.filter((varFile) => {
          if (varFile.file!.size > toNumber(maxsize)) {
            call(onOversize, reactive(varFile))
            return false
          }

          return true
        })

      const getValidLengthVarFiles = (varFiles: VarFile[]): VarFile[] => {
        const limit = Math.min(varFiles.length, toNumber(maxlength) - modelValue.length)
        return varFiles.slice(0, limit)
      }

      const getFilterVarFiles = async (varFiles: VarFile[]): Promise<VarFile[]> => {
        if (!onBeforeFilter) {
          return varFiles
        }

        const events = normalizeToArray(onBeforeFilter)

        for (const event of events) {
          varFiles = await event(varFiles)
        }

        return varFiles
      }

      // limit
      const files = getFiles(event)
      let varFiles: VarFile[] = files.map(createVarFile)

      varFiles = await getFilterVarFiles(varFiles)
      varFiles = maxsize != null ? getValidSizeVarFile(varFiles) : varFiles
      varFiles = maxlength != null ? getValidLengthVarFiles(varFiles) : varFiles

      // pre resolve
      const resolvedVarFiles: VarFile[] = await Promise.all(getResolvers(varFiles))
      const validationVarFiles: ValidationVarFile[] = await Promise.all(getBeforeReaders(resolvedVarFiles))
      const validVarFiles: VarFile[] = validationVarFiles.filter(({ valid }) => valid).map(({ varFile }) => varFile)

      call(props['onUpdate:modelValue'], [...modelValue, ...validVarFiles])
      ;(event.target as HTMLInputElement).value = ''
      validVarFiles.forEach((varFile) => call(onAfterRead, reactive(varFile)))
    }

    async function handleRemove(removedVarFile: VarFile) {
      const { disabled, readonly, modelValue, onBeforeRemove, onRemove } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      if (onBeforeRemove) {
        const results = normalizeToArray(call(onBeforeRemove, reactive(removedVarFile)))
        if ((await Promise.all(results)).some((result) => !result)) {
          return
        }
      }

      const expectedFiles: VarFile[] = modelValue.filter((varFile) => varFile !== removedVarFile)
      call(onRemove, reactive(removedVarFile))
      validateWithTrigger('onRemove')
      call(props['onUpdate:modelValue'], expectedFiles)
    }

    function handleActionClick(event: Event) {
      if (form?.disabled.value || props.disabled) {
        return
      }

      if (props.onClickAction) {
        call(props.onClickAction, chooseFile, event)
        return
      }

      chooseFile()
    }

    // expose
    function getSuccess() {
      return props.modelValue.filter((varFile) => varFile.state === 'success')
    }

    // expose
    function getError() {
      return props.modelValue.filter((varFile) => varFile.state === 'error')
    }

    // expose
    function getLoading() {
      return props.modelValue.filter((varFile) => varFile.state === 'loading')
    }

    // expose
    function chooseFile() {
      input.value!.click()
    }

    // expose
    function closePreview() {
      currentPreview.value = null
      showPreview.value = false
      ImagePreview.close()
    }

    function validateWithTrigger(trigger: UploaderValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue, varFileUtils)
      })
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue, varFileUtils)
    }

    // expose
    function reset() {
      callReset = true
      call(props['onUpdate:modelValue'], [])
      resetValidation()
    }

    return {
      input,
      actionRef,
      files,
      showPreview,
      currentPreview,
      errorMessage,
      maxlengthText,
      hovering,
      isFocusing,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      n,
      classes,
      formatElevation,
      toNumber,
      handleHovering,
      isHTMLSupportVideo,
      isHTMLSupportImage,
      preview,
      handleChange,
      handleRemove,
      getSuccess,
      getError,
      getLoading,
      validate,
      resetValidation,
      reset,
      chooseFile,
      closePreview,
      handleActionClick,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../popup/popup';
@import '../swipe/swipe';
@import '../swipe-item/swipeItem';
@import '../image-preview/imagePreview';
@import './uploader';
</style>
