import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './actionSheet'
export * from './alert'
export * from './appBar'
export * from './autoComplete'
export * from './avatar'
export * from './avatarGroup'
export * from './backTop'
export * from './badge'
export * from './bottomNavigation'
export * from './bottomNavigationItem'
export * from './breadcrumb'
export * from './breadcrumbs'
export * from './button'
export * from './buttonGroup'
export * from './card'
export * from './cell'
export * from './checkbox'
export * from './checkboxGroup'
export * from './chip'
export * from './code'
export * from './col'
export * from './collapse'
export * from './collapseItem'
export * from './collapseTransition'
export * from './context'
export * from './countTo'
export * from './countdown'
export * from './counter'
export * from './datePicker'
export * from './dialog'
export * from './divider'
export * from './drag'
export * from './ellipsis'
export * from './fab'
export * from './floatingPanel'
export * from './form'
export * from './formDetails'
export * from './highlighterProvider'
export * from './hover'
export * from './hoverOverlay'
export * from './icon'
export * from './image'
export * from './imagePreview'
export * from './indexAnchor'
export * from './indexBar'
export * from './input'
export * from './lazy'
export * from './link'
export * from './list'
export * from './loading'
export * from './loadingBar'
export * from './locale'
export * from './localeProvider'
export * from './menu'
export * from './menuOption'
export * from './menuSelect'
export * from './option'
export * from './overlay'
export * from './pagination'
export * from './paper'
export * from './picker'
export * from './popup'
export * from './progress'
export * from './pullRefresh'
export * from './radio'
export * from './radioGroup'
export * from './rate'
export * from './result'
export * from './ripple'
export * from './row'
export * from './select'
export * from './signature'
export * from './skeleton'
export * from './slider'
export * from './snackbar'
export * from './space'
export * from './step'
export * from './steps'
export * from './sticky'
export * from './styleProvider'
export * from './styleVars'
export * from './swipe'
export * from './swipeItem'
export * from './switch'
export * from './tab'
export * from './tabItem'
export * from './table'
export * from './tabs'
export * from './tabsItems'
export * from './themes'
export * from './timePicker'
export * from './tooltip'
export * from './uploader'
export * from './varComponent'
export * from './varDirective'
export * from './watermark'

declare module 'vue' {
  export interface GlobalComponents {
    VarActionSheet: typeof import('@varlet/ui')['_ActionSheetComponent']
    VarAlert: typeof import('@varlet/ui')['_AlertComponent']
    VarAppBar: typeof import('@varlet/ui')['_AppBarComponent']
    VarAutoComplete: typeof import('@varlet/ui')['_AutoCompleteComponent']
    VarAvatar: typeof import('@varlet/ui')['_AvatarComponent']
    VarAvatarGroup: typeof import('@varlet/ui')['_AvatarGroupComponent']
    VarBackTop: typeof import('@varlet/ui')['_BackTopComponent']
    VarBadge: typeof import('@varlet/ui')['_BadgeComponent']
    VarBottomNavigation: typeof import('@varlet/ui')['_BottomNavigationComponent']
    VarBottomNavigationItem: typeof import('@varlet/ui')['_BottomNavigationItemComponent']
    VarBreadcrumb: typeof import('@varlet/ui')['_BreadcrumbComponent']
    VarBreadcrumbs: typeof import('@varlet/ui')['_BreadcrumbsComponent']
    VarButton: typeof import('@varlet/ui')['_ButtonComponent']
    VarButtonGroup: typeof import('@varlet/ui')['_ButtonGroupComponent']
    VarCard: typeof import('@varlet/ui')['_CardComponent']
    VarCell: typeof import('@varlet/ui')['_CellComponent']
    VarCheckbox: typeof import('@varlet/ui')['_CheckboxComponent']
    VarCheckboxGroup: typeof import('@varlet/ui')['_CheckboxGroupComponent']
    VarChip: typeof import('@varlet/ui')['_ChipComponent']
    VarCode: typeof import('@varlet/ui')['_CodeComponent']
    VarCol: typeof import('@varlet/ui')['_ColComponent']
    VarCollapse: typeof import('@varlet/ui')['_CollapseComponent']
    VarCollapseItem: typeof import('@varlet/ui')['_CollapseItemComponent']
    VarCollapseTransition: typeof import('@varlet/ui')['_CollapseTransitionComponent']
    VarContext: typeof import('@varlet/ui')['_ContextComponent']
    VarCountTo: typeof import('@varlet/ui')['_CountToComponent']
    VarCountdown: typeof import('@varlet/ui')['_CountdownComponent']
    VarCounter: typeof import('@varlet/ui')['_CounterComponent']
    VarDatePicker: typeof import('@varlet/ui')['_DatePickerComponent']
    VarDialog: typeof import('@varlet/ui')['_DialogComponent']
    VarDivider: typeof import('@varlet/ui')['_DividerComponent']
    VarDrag: typeof import('@varlet/ui')['_DragComponent']
    VarEllipsis: typeof import('@varlet/ui')['_EllipsisComponent']
    VarFab: typeof import('@varlet/ui')['_FabComponent']
    VarFloatingPanel: typeof import('@varlet/ui')['_FloatingPanelComponent']
    VarForm: typeof import('@varlet/ui')['_FormComponent']
    VarFormDetails: typeof import('@varlet/ui')['_FormDetailsComponent']
    VarHighlighterProvider: typeof import('@varlet/ui')['_HighlighterProviderComponent']
    VarHoverOverlay: typeof import('@varlet/ui')['_HoverOverlayComponent']
    VarIcon: typeof import('@varlet/ui')['_IconComponent']
    VarImage: typeof import('@varlet/ui')['_ImageComponent']
    VarImagePreview: typeof import('@varlet/ui')['_ImagePreviewComponent']
    VarIndexAnchor: typeof import('@varlet/ui')['_IndexAnchorComponent']
    VarIndexBar: typeof import('@varlet/ui')['_IndexBarComponent']
    VarInput: typeof import('@varlet/ui')['_InputComponent']
    VarLink: typeof import('@varlet/ui')['_LinkComponent']
    VarList: typeof import('@varlet/ui')['_ListComponent']
    VarLoading: typeof import('@varlet/ui')['_LoadingComponent']
    VarLoadingBar: typeof import('@varlet/ui')['_LoadingBarComponent']
    VarLocale: typeof import('@varlet/ui')['_LocaleComponent']
    VarLocaleProvider: typeof import('@varlet/ui')['_LocaleProviderComponent']
    VarMenu: typeof import('@varlet/ui')['_MenuComponent']
    VarMenuOption: typeof import('@varlet/ui')['_MenuOptionComponent']
    VarMenuSelect: typeof import('@varlet/ui')['_MenuSelectComponent']
    VarOption: typeof import('@varlet/ui')['_OptionComponent']
    VarOverlay: typeof import('@varlet/ui')['_OverlayComponent']
    VarPagination: typeof import('@varlet/ui')['_PaginationComponent']
    VarPaper: typeof import('@varlet/ui')['_PaperComponent']
    VarPicker: typeof import('@varlet/ui')['_PickerComponent']
    VarPopup: typeof import('@varlet/ui')['_PopupComponent']
    VarProgress: typeof import('@varlet/ui')['_ProgressComponent']
    VarPullRefresh: typeof import('@varlet/ui')['_PullRefreshComponent']
    VarRadio: typeof import('@varlet/ui')['_RadioComponent']
    VarRadioGroup: typeof import('@varlet/ui')['_RadioGroupComponent']
    VarRate: typeof import('@varlet/ui')['_RateComponent']
    VarResult: typeof import('@varlet/ui')['_ResultComponent']
    VarRow: typeof import('@varlet/ui')['_RowComponent']
    VarSelect: typeof import('@varlet/ui')['_SelectComponent']
    VarSignature: typeof import('@varlet/ui')['_SignatureComponent']
    VarSkeleton: typeof import('@varlet/ui')['_SkeletonComponent']
    VarSlider: typeof import('@varlet/ui')['_SliderComponent']
    VarSnackbar: typeof import('@varlet/ui')['_SnackbarComponent']
    VarSpace: typeof import('@varlet/ui')['_SpaceComponent']
    VarStep: typeof import('@varlet/ui')['_StepComponent']
    VarSteps: typeof import('@varlet/ui')['_StepsComponent']
    VarSticky: typeof import('@varlet/ui')['_StickyComponent']
    VarStyleProvider: typeof import('@varlet/ui')['_StyleProviderComponent']
    VarStyleVars: typeof import('@varlet/ui')['_StyleVarsComponent']
    VarSwipe: typeof import('@varlet/ui')['_SwipeComponent']
    VarSwipeItem: typeof import('@varlet/ui')['_SwipeItemComponent']
    VarSwitch: typeof import('@varlet/ui')['_SwitchComponent']
    VarTab: typeof import('@varlet/ui')['_TabComponent']
    VarTabItem: typeof import('@varlet/ui')['_TabItemComponent']
    VarTable: typeof import('@varlet/ui')['_TableComponent']
    VarTabs: typeof import('@varlet/ui')['_TabsComponent']
    VarTabsItems: typeof import('@varlet/ui')['_TabsItemsComponent']
    VarThemes: typeof import('@varlet/ui')['_ThemesComponent']
    VarTimePicker: typeof import('@varlet/ui')['_TimePickerComponent']
    VarTooltip: typeof import('@varlet/ui')['_TooltipComponent']
    VarUploader: typeof import('@varlet/ui')['_UploaderComponent']
    VarWatermark: typeof import('@varlet/ui')['_WatermarkComponent']
  }

  export interface ComponentCustomProperties {
    vHover: typeof import('@varlet/ui')['_HoverComponent']
    vLazy: typeof import('@varlet/ui')['_LazyComponent']
    vRipple: typeof import('@varlet/ui')['_RippleComponent']
  }
}
