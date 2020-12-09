import VarSnackbar from './Snackbar.vue'
import { mountInstance } from '../utils/components'
import { h, reactive, TransitionGroup, nextTick } from 'vue'

interface SnackbarOptions {
	type?: 'loading' | 'success' | 'error' | 'warning' | 'info'
	content?: string
	position?: 'top' | 'center' | 'bottom'
	loadingType?: string
	loadingSize?: string
	teleport?: string
	lockScroll?: boolean
	contentClass?: string
	height?: number | string
	width?: number | string
	color?: string
	duration?: number
	vertical?: boolean
	show?: boolean
	forbidClick?: boolean
	onOpen?: () => void
	onClose?: () => void
	onOpened?: () => void
	onClosed?: () => void
}

function Snackbar(options: SnackbarOptions) {
  const snackOptions: SnackbarOptions =
    Object.prototype.toString.call(options) === '[object Object]' ? options : {}
  const reactiveSnackOptions: SnackbarOptions = reactive<SnackbarOptions>(
    snackOptions
  )

  if (!Snackbar.instances.length) {
    const Host = {
      setup() {
        return () => h(TransitionGroup,{
              ...props,
            },
            Snackbar.instances.map(({ id, reactiveSnackOptions }) => {
              return h(VarSnackbar, {
                ...reactiveSnackOptions,
                ...{
                  key: id,
                  'onUpdate:show': (value: boolean) => {
                    reactiveSnackOptions.show = value
                  }
                },
              })
            })
          )
      },
    }
    const { unmountInstance } = mountInstance(Host)
  }

  if (Snackbar.allowMultiple) {
    Snackbar.instances.push({
      id: Date.now(),
      reactiveSnackOptions
    })

    nextTick().then(() => {
      reactiveSnackOptions.show = true
    })
  }
}

['success', 'warning', 'info', 'error', 'loading'].forEach((type: any) => {
	Snackbar[type] = (options: SnackbarOptions | string) => {
		if (typeof options === 'string') {
			options = {
				content: options,
				type,
			}
		} else {
			options.type = type
		}
		return Snackbar(options)
	}
})

Snackbar.install = function (app: any) {
	app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = true

Snackbar.instances = reactive([]) as any[]

Snackbar.Component = VarSnackbar

const props = {
	name: 'var-fade',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

// export default createSnackbar
export default Snackbar
