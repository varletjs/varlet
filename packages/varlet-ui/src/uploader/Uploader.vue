<template>
  <div :class="classes(n(), 'var--box')">
    <div :class="n('file-list')">
      <div
        :class="classes(n('file'), 'var-elevation--2', f.state === 'loading' ? n('--loading') : '')"
        :key="f.id"
        v-for="f in files"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple }"
        @click="preview(f)"
      >
        <div :class="n('file-name')">{{ f.name || f.url }}</div>
        <div :class="n('file-close')" v-if="removable" @click.stop="handleRemove(f)">
          <var-icon :class="n('file-close-icon')" var-uploader-cover name="delete" />
        </div>
        <img :class="n('file-cover')" :style="{ objectFit: f.fit }" :src="f.cover" :alt="f.name" v-if="f.cover" />
        <div
          :class="
            classes(
              n('file-indicator'),
              f.state === 'success' ? n('--success') : '',
              f.state === 'error' ? n('--error') : ''
            )
          "
        ></div>
      </div>

      <div
        :class="
          classes(
            'var--relative',
            !$slots.default ? `${n('action')} var-elevation--2` : '',
            disabled || formDisabled ? n('--disabled') : ''
          )
        "
        v-if="!maxlength || modelValue.length < maxlength"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple || $slots.default }"
      >
        <input
          :class="n('action-input')"
          type="file"
          :multiple="multiple"
          :accept="accept"
          :capture="capture"
          :disabled="disabled || formDisabled || readonly || formReadonly"
          @change="handleChange"
        />
        <slot>
          <var-icon :class="n('action-icon')" var-uploader-cover name="plus" />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />

    <var-popup
      :class="n('preview')"
      var-uploader-cover
      position="center"
      v-model:show="showPreview"
      @closed="currentPreview = null"
    >
      <video
        :class="n('preview-video')"
        playsinline="true"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        controls
        :src="currentPreview?.url"
        v-if="currentPreview && isHTMLSupportVideo(currentPreview?.url)"
      ></video>
    </var-popup>
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import VarPopup from '../popup'
import ImagePreview from '../image-preview'
import Ripple from '../ripple'
import { defineComponent, nextTick, reactive, computed, watch, ref } from 'vue'
import { props } from './props'
import { isNumber, isHTMLSupportImage, isHTMLSupportVideo, toNumber, isString } from '../utils/shared'
import { useValidation, createNamespace } from '../utils/components'
import { useForm } from '../form/provide'
import type { ComputedRef, Ref } from 'vue'
import type { UploaderProvider } from './provide'
import type { VarFile, ValidateTriggers } from './props'

const { n, classes } = createNamespace('uploader')
interface ValidationVarFile {
  valid: boolean
  varFile: VarFile
}

interface VarFileUtils {
  getLoading(varFiles: VarFile[]): VarFile[]
  getSuccess(varFiles: VarFile[]): VarFile[]
  getError(varFiles: VarFile[]): VarFile[]
}

let fid = 0

export default defineComponent({
  name: 'VarUploader',
  directives: { Ripple },
  components: {
    VarIcon,
    VarPopup,
    VarFormDetails,
  },
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

    const files = computed(() => {
      const { modelValue, hideList } = props

      if (hideList) {
        return []
      }

      return modelValue
    })

    const preview = (varFile: VarFile) => {
      const { disabled, readonly, previewed } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !previewed) {
        return
      }

      const { url } = varFile

      if (isString(url) && isHTMLSupportImage(url)) {
        ImagePreview(url)
        return
      }

      if (isString(url) && isHTMLSupportVideo(url)) {
        currentPreview.value = varFile
        showPreview.value = true
      }
    }

    const createVarFile = (file: File): VarFile => {
      return {
        id: fid++,
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

    const handleRemove = async (removedVarFile: VarFile) => {
      const { disabled, readonly, modelValue, onBeforeRemove, onRemove } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      if (onBeforeRemove && !(await onBeforeRemove(removedVarFile))) {
        return
      }

      const expectedFiles: VarFile[] = modelValue.filter((varFile) => varFile !== removedVarFile)
      onRemove?.(removedVarFile)
      validateWithTrigger('onRemove')
      props['onUpdate:modelValue']?.(expectedFiles)
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
      n,
      classes,
      files,
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
@import '../styles/common';
@import '../styles/elevation';
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../popup/popup';
@import '../image-preview/imagePreview';
@import './uploader';
</style>
