import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './actionSheet.d.ts'
export * from './appBar.d.ts'
export * from './avatar.d.ts'
export * from './avatarGroup.d.ts'
export * from './backTop.d.ts'
export * from './badge.d.ts'
export * from './bottomNavigation.d.ts'
export * from './bottomNavigationItem.d.ts'
export * from './breadcrumb.d.ts'
export * from './breadcrumbs.d.ts'
export * from './button.d.ts'
export * from './buttonGroup.d.ts'
export * from './card.d.ts'
export * from './cell.d.ts'
export * from './checkbox.d.ts'
export * from './checkboxGroup.d.ts'
export * from './chip.d.ts'
export * from './col.d.ts'
export * from './collapse.d.ts'
export * from './collapseItem.d.ts'
export * from './context.d.ts'
export * from './countdown.d.ts'
export * from './counter.d.ts'
export * from './datePicker.d.ts'
export * from './dialog.d.ts'
export * from './divider.d.ts'
export * from './ellipsis.d.ts'
export * from './fab.d.ts'
export * from './form.d.ts'
export * from './formDetails.d.ts'
export * from './hover.d.ts'
export * from './hoverOverlay.d.ts'
export * from './icon.d.ts'
export * from './image.d.ts'
export * from './imagePreview.d.ts'
export * from './indexAnchor.d.ts'
export * from './indexBar.d.ts'
export * from './input.d.ts'
export * from './lazy.d.ts'
export * from './link.d.ts'
export * from './list.d.ts'
export * from './loading.d.ts'
export * from './loadingBar.d.ts'
export * from './locale.d.ts'
export * from './menu.d.ts'
export * from './option.d.ts'
export * from './overlay.d.ts'
export * from './pagination.d.ts'
export * from './paper.d.ts'
export * from './picker.d.ts'
export * from './popup.d.ts'
export * from './progress.d.ts'
export * from './pullRefresh.d.ts'
export * from './radio.d.ts'
export * from './radioGroup.d.ts'
export * from './rate.d.ts'
export * from './result.d.ts'
export * from './ripple.d.ts'
export * from './row.d.ts'
export * from './select.d.ts'
export * from './skeleton.d.ts'
export * from './slider.d.ts'
export * from './snackbar.d.ts'
export * from './space.d.ts'
export * from './step.d.ts'
export * from './steps.d.ts'
export * from './sticky.d.ts'
export * from './styleProvider.d.ts'
export * from './swipe.d.ts'
export * from './swipeItem.d.ts'
export * from './switch.d.ts'
export * from './tab.d.ts'
export * from './tabItem.d.ts'
export * from './table.d.ts'
export * from './tabs.d.ts'
export * from './tabsItems.d.ts'
export * from './themes.d.ts'
export * from './timePicker.d.ts'
export * from './tooltip.d.ts'
export * from './uploader.d.ts'
export * from './varComponent.d.ts'
export * from './varDirective.d.ts'

declare module 'vue' {
  export interface GlobalComponents {
    VarActionSheet: typeof import('@varlet/ui')['_ActionSheetComponent']
    VarAppBar: typeof import('@varlet/ui')['_AppBarComponent']
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
    VarCol: typeof import('@varlet/ui')['_ColComponent']
    VarCollapse: typeof import('@varlet/ui')['_CollapseComponent']
    VarCollapseItem: typeof import('@varlet/ui')['_CollapseItemComponent']
    VarContext: typeof import('@varlet/ui')['_ContextComponent']
    VarCountdown: typeof import('@varlet/ui')['_CountdownComponent']
    VarCounter: typeof import('@varlet/ui')['_CounterComponent']
    VarDatePicker: typeof import('@varlet/ui')['_DatePickerComponent']
    VarDialog: typeof import('@varlet/ui')['_DialogComponent']
    VarDivider: typeof import('@varlet/ui')['_DividerComponent']
    VarEllipsis: typeof import('@varlet/ui')['_EllipsisComponent']
    VarFab: typeof import('@varlet/ui')['_FabComponent']
    VarForm: typeof import('@varlet/ui')['_FormComponent']
    VarFormDetails: typeof import('@varlet/ui')['_FormDetailsComponent']
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
    VarMenu: typeof import('@varlet/ui')['_MenuComponent']
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
    VarSkeleton: typeof import('@varlet/ui')['_SkeletonComponent']
    VarSlider: typeof import('@varlet/ui')['_SliderComponent']
    VarSnackbar: typeof import('@varlet/ui')['_SnackbarComponent']
    VarSpace: typeof import('@varlet/ui')['_SpaceComponent']
    VarStep: typeof import('@varlet/ui')['_StepComponent']
    VarSteps: typeof import('@varlet/ui')['_StepsComponent']
    VarSticky: typeof import('@varlet/ui')['_StickyComponent']
    VarStyleProvider: typeof import('@varlet/ui')['_StyleProviderComponent']
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
  }

  export interface ComponentCustomProperties {
    vHover: typeof import('@varlet/ui')['_HoverComponent']
    vLazy: typeof import('@varlet/ui')['_LazyComponent']
    vRipple: typeof import('@varlet/ui')['_RippleComponent']
  }
}
