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
          <var-icon class="var-uploader__file-close-icon" var-uploader-cover name="delete" />
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
        class="var--relative"
        :class="[
          !$slots.default ? 'var-uploader__action var-elevation--2' : null,
          disabled || formDisabled ? 'var-uploader--disabled' : null,
        ]"
        v-if="!maxlength || modelValue.length < maxlength"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple || $slots.default }"
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
        <slot>
          <var-icon class="var-uploader__action-icon" var-uploader-cover name="plus" />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />

    <var-popup
      class="var-uploader__preview"
      var-uploader-cover
      position="center"
      v-model:show="showPreview"
      @closed="currentPreview = null"
    >
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
    </var-popup>
  </div>
</template>

<script lang="ts">
import FormDetails from '../form-details'
import Ripple from '../ripple'
import Icon from '../icon'
import Popup from '../popup'
import ImagePreview from '../image-preview'
import { defineComponent, nextTick, reactive, computed, ComputedRef, watch, ref, Ref } from 'vue'
import { props, VarFile, ValidateTriggers } from './props'
import { isNumber, isHTMLSupportImage, isHTMLSupportVideo, toNumber, isString } from '../utils/shared'
import { useValidation } from '../utils/components'
import { useForm } from '../form/provide'
import { UploaderProvider } from './provide'

interface ValidationVarFile {
  valid: boolean
  varFile: VarFile
}

interface VarFileUtils {
  getLoading(varFiles: VarFile[]): VarFile[]
  getSuccess(varFiles: VarFile[]): VarFile[]
  getError(varFiles: VarFile[]): VarFile[]
}

let imagePreviewInstance = null

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
    const showPreview: Ref<boolean> = ref(false)
    const currentPreview: Ref<null | VarFile> = ref(null)
    const maxlengthText: ComputedRef<string> = computed(() => {
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

    const preview = (varFile: VarFile) => {
      const { disabled, readonly, previewed } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !previewed) {
        return
      }

      const { url } = varFile

      if (isString(url) && isHTMLSupportImage(url)) {
        imagePreviewInstance = ImagePreview(url)
        return
      }

      if (isString(url) && isHTMLSupportVideo(url)) {
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

    const getFiles = (event: Event): File[] => {
      const el = event.target as HTMLInputElement
      const { files: fileList } = el
      return Array.from<File>(fileList as ArrayLike<File>)
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

    const getResolvers = (varFiles: VarFile[]) => varFiles.map(resolver)

    const getBeforeReaders = (varFiles: VarFile[]): Promise<ValidationVarFile>[] => {
      const { onBeforeRead } = props

      return varFiles.map((varFile) => {
        return new Promise((resolve) => {
          const valid = onBeforeRead ? onBeforeRead(reactive(varFile)) : true
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
      const { maxsize, maxlength, modelValue, onOversize, onAfterRead, readonly, disabled } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const getValidSizeVarFile = (varFiles: VarFile[]): VarFile[] => {
        return varFiles.filter((varFile) => {
          if (varFile.file!.size > toNumber(maxsize)) {
            onOversize?.(reactive(varFile))
            return false
          }

          return true
        })
      }

      const getValidLengthVarFiles = (varFiles: VarFile[]): VarFile[] => {
        const limit = Math.min(varFiles.length, toNumber(maxlength) - modelValue.length)
        return varFiles.slice(0, limit)
      }

      // limit
      const files = getFiles(event)
      let varFiles: VarFile[] = files.map(createVarFile)
      varFiles = maxsize != null ? getValidSizeVarFile(varFiles) : varFiles
      varFiles = maxlength != null ? getValidLengthVarFiles(varFiles) : varFiles

      // pre resolve
      const resolvedVarFiles: VarFile[] = await Promise.all(getResolvers(varFiles))
      const validationVarFiles: ValidationVarFile[] = await Promise.all(getBeforeReaders(resolvedVarFiles))
      const validVarFiles: VarFile[] = validationVarFiles.filter(({ valid }) => valid).map(({ varFile }) => varFile)

      props['onUpdate:modelValue']?.([...modelValue, ...validVarFiles])
      ;(event.target as HTMLInputElement).value = ''
      validVarFiles.forEach((varFile) => onAfterRead?.(reactive(varFile)))
    }

    const handleRemove = (removedVarFile: VarFile) => {
      const { disabled, readonly, modelValue, onRemove } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      props['onUpdate:modelValue']?.(modelValue.filter((varFile) => varFile !== removedVarFile))
      onRemove?.(removedVarFile)
      validateWithTrigger('onRemove')
    }

    // expose
    const getSuccess = () => props.modelValue.filter((varFile) => varFile.state === 'success')

    // expose
    const getError = () => props.modelValue.filter((varFile) => varFile.state === 'error')

    // expose
    const getLoading = () => props.modelValue.filter((varFile) => varFile.state === 'loading')

    const varFileUtils: VarFileUtils = {
      getSuccess,
      getError,
      getLoading,
    }

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue, varFileUtils)
      })
    }

    let callReset = false

    // expose
    const validate = () => v(props.rules, props.modelValue, varFileUtils)

    // expose
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
      isHTMLSupportVideo,
      isHTMLSupportImage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      preview,
      handleChange,
      handleRemove,
      getSuccess,
      getError,
      getLoading,
      validate,
      resetValidation,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../popup/popup';
@import '../image-preview/imagePreview';
@import './uploader';
</style>
