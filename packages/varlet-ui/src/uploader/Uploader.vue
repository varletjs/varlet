<template>
  <div class="var-uploader var--box" v-bind="$attrs">
    <div class="var-uploader__file-list">
      <div
        class="var-uploader__file var-elevation--2"
        :class="[f.state === 'loading' ? 'var-uploader--loading' : null]"
        :key="f"
        v-for="f in modelValue"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple }"
        @click="preview(f)"
      >
        <div class="var-uploader__file-name">
          {{ f.name || f.url }}
        </div>
        <div class="var-uploader__file-close" v-if="removable" @click.stop="handleRemove(f)">
          <var-icon class="var-uploader__file-close-icon" name="delete" />
        </div>
        <img
          class="var-uploader__file-cover"
          :style="{ objectFit: f.fit }"
          :src="f.cover"
          :alt="f.name"
          v-if="f.cover"
        />
        <div
          class="var-uploader__file-indicator"
          :class="[
            f.state === 'success' ? 'var-uploader--success' : null,
            f.state === 'error' ? 'var-uploader--error' : null,
          ]"
        ></div>
      </div>

      <div
        class="var-uploader__action var-elevation--2"
        :class="[disabled || formDisabled ? 'var-uploader--disabled' : null]"
        v-if="!maxlength || modelValue.length < maxlength"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple }"
      >
        <input
          class="var-uploader__action-input"
          type="file"
          :multiple="multiple"
          :accept="accept"
          :capture="capture"
          :disabled="disabled || formDisabled || readonly || formReadonly"
          @change="handleChange"
        />
        <slot name="action">
          <var-icon class="var-uploader__action-icon" name="plus" />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />

    <var-popup
      class="var-uploader__preview"
      position="center"
      v-model:show="showPreview"
      @closed="currentPreview = null"
    >
      <img
        class="var-uploader__preview-image"
        :src="currentPreview.url"
        :alt="currentPreview.name"
        v-if="currentPreview && isHTMLSupportImage(currentPreview.url)"
        @click="showPreview = false"
      />
      <video
        class="var-uploader__preview-video"
        playsinline="true"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        controls
        :src="currentPreview.url"
        v-if="currentPreview && isHTMLSupportVideo(currentPreview.url)"
      ></video>
      <audio
        class="var-uploader__preview-audio"
        controls
        :src="currentPreview.url"
        v-if="currentPreview && isHTMLSupportAudio(currentPreview.url)"
      ></audio>
    </var-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, computed, ComputedRef, watch, ref, Ref } from 'vue'
import { props, VarFile, ValidateTriggers } from './props'
import { isNumber, isHTMLSupportImage, isHTMLSupportAudio, isHTMLSupportVideo } from '../utils/shared'
import { useParent, useValidation } from '../utils/components'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import { UploaderProvider } from './provide'
import FormDetails from '../form-details'
import Ripple from '../ripple'
import Icon from '../icon'
import Popup from '../popup'

interface ValidationVarFile {
  valid: boolean
  varFile: VarFile
}

export default defineComponent({
  name: 'VarUploader',
  directives: { Ripple },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, UploaderProvider>(
      FORM_BIND_FORM_ITEM_KEY
    )
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const showPreview: Ref<boolean> = ref(false)
    const currentPreview: Ref<null | VarFile> = ref(null)
    const maxlengthText: ComputedRef<string> = computed(() => {
      const {
        maxlength,
        modelValue: { length },
      } = props

      return isNumber(maxlength) ? `${length} / ${maxlength}` : ''
    })

    const preview = (varFile: VarFile) => {
      if (
        formProvider?.disabled.value ||
        formProvider?.readonly.value ||
        props.disabled ||
        props.readonly ||
        !props.previewed
      ) {
        return
      }

      const { url } = varFile

      if (isHTMLSupportImage(url as string) || isHTMLSupportVideo(url as string) || isHTMLSupportAudio(url as string)) {
        currentPreview.value = varFile
        showPreview.value = true
      }
    }

    const createVarFile = (file: File): VarFile => {
      return {
        url: '',
        cover: '',
        name: file.name,
        file,
      }
    }

    const resolver = (varFile: VarFile): Promise<VarFile> => {
      return new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
          const base64 = fileReader.result as string

          varFile.file!.type.startsWith('image') && (varFile.cover = base64)
          varFile.url = base64

          resolve(varFile)
        }

        fileReader.readAsDataURL(varFile.file as File)
      })
    }

    const getResolvers = (varFiles: VarFile[]) => varFiles.map((varFile) => resolver(varFile))

    const getBeforeReaders = (varFiles: VarFile[]): Promise<ValidationVarFile>[] => {
      return varFiles.map((varFile) => {
        return new Promise((resolve) => {
          const valid = props.onBeforeRead?.(reactive(varFile)) ?? true

          Promise.resolve(valid).then((valid) =>
            resolve({
              valid,
              varFile,
            })
          )
        })
      })
    }

    const handleChange = async (event: Event) => {
      const el = event.target as HTMLInputElement
      const { files: fileList } = el
      const files: File[] = Array.from<File>(fileList as ArrayLike<File>)
      let varFiles: VarFile[] = files.map((file) => createVarFile(file))
      const { maxsize, maxlength, modelValue: { length } } = props

      if (isNumber(maxsize)) {
        varFiles = varFiles.filter((varFile) => {
          if (varFile.file!.size > (maxsize as number)) {
            props.onOversize?.(reactive(varFile))
            return false
          }

          return true
        })
      }

      if (isNumber(maxlength)) {
        const limit = Math.min(varFiles.length, maxlength - length)
        varFiles = varFiles.slice(0, limit)
      }

      const resolvedVarFiles: VarFile[] = await Promise.all(getResolvers(varFiles))

      const validationVarFiles: ValidationVarFile[] = await Promise.all(getBeforeReaders(resolvedVarFiles))

      const validVarFiles: VarFile[] = validationVarFiles.filter(({ valid }) => valid).map(({ varFile }) => varFile)

      props['onUpdate:modelValue']?.([...props.modelValue, ...validVarFiles])
      el.value = ''

      validVarFiles.forEach((varFile) => props.onAfterRead?.(reactive(varFile)))
    }

    const handleRemove = (removedVarFile: VarFile) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }

      props['onUpdate:modelValue']?.(props.modelValue.filter((varFile) => varFile !== removedVarFile))
      validateWithTrigger('onRemove')
    }

    const getSuccessFiles = () => props.modelValue.filter((varFile) => varFile.state === 'success')

    const getErrorFiles = () => props.modelValue.filter((varFile) => varFile.state === 'error')

    const getLoadingFiles = () => props.modelValue.filter((varFile) => varFile.state === 'loading')

    const utils = {
      getSuccessFiles,
      getErrorFiles,
      getLoadingFiles,
    }

    const validate = () => v(props.rules, props.modelValue, utils)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue, utils))

    let callReset = false

    const reset = () => {
      callReset = true
      props['onUpdate:modelValue']?.([])
      resetValidation()
    }

    const uploaderProvider: UploaderProvider = {
      validate,
      resetValidation,
      reset,
    }

    bindForm?.(uploaderProvider)

    watch(
      () => props.modelValue,
      () => {
        !callReset && validateWithTrigger('onChange')
        callReset = false
      },
      { deep: true }
    )

    return {
      showPreview,
      currentPreview,
      errorMessage,
      maxlengthText,
      isHTMLSupportAudio,
      isHTMLSupportVideo,
      isHTMLSupportImage,
      formDisabled: formProvider?.disabled,
      formReadonly: formProvider?.readonly,
      preview,
      handleChange,
      handleRemove,
      getSuccessFiles,
      getErrorFiles,
      getLoadingFiles,
      validate,
      resetValidation,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/elevation';
@import './uploader';
</style>
