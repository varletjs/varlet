import{_ as a,m as n,p as d,q as e,w as r,Q as o,a1 as c,b as i,e as l}from"./index-XHkyQ4jX.js";const s={components:{}},p={class:"varlet-site-doc"},m=d("h1",null,"从 2.x 迁移",-1),g={class:"card"},f={id:"jie4shao4"},h=d("p",null,[o("本节主要介绍从 "),d("code",null,"2.x"),o(" 迁移至 "),d("code",null,"3.x"),o(" 的注意事项")],-1),u={class:"card"},_={id:"zu3jian4gong1neng2bian4geng1"},b=c("<ul><li>DatePicker 组件移除了对 <code>headerColor</code> 属性的兼容</li><li>TimePicker 组件移除了对 <code>headerColor</code> 属性的兼容</li><li>ImagePreview 组件移除了对 <code>current</code> 属性的兼容</li><li>Chip 组件移除了对 <code>closable</code> 属性的兼容</li><li>Progress 组件移除了对 <code>ripple</code> 属性的兼容</li><li>IndexBar 组件移除了对 <code>cssMode</code> 属性的兼容</li><li>LoadingBar 组件移除了对 <code>mergeConfig</code> 方法的兼容</li></ul>",1),y={class:"card"},k={id:"zu3jian4yang4shi4bian4liang4bian4geng1"},v=c("<p>为了使组件样式定义更加容易，并且支持 <code>Material Design 3</code>，<code>3.x</code> 版本对组件库的样式变量进行了一次重构，新增了一些基础样式变量。</p><table><thead><tr><th>变量名</th></tr></thead><tbody><tr><td><code>--color-on-primary</code></td></tr><tr><td><code>--color-on-info</code></td></tr><tr><td><code>--color-on-success</code></td></tr><tr><td><code>--color-on-warning</code></td></tr><tr><td><code>--color-on-danger</code></td></tr><tr><td><code>--color-primary-container</code></td></tr><tr><td><code>--color-info-container</code></td></tr><tr><td><code>--color-success-container</code></td></tr><tr><td><code>--color-warning-container</code></td></tr><tr><td><code>--color-danger-container</code></td></tr><tr><td><code>--color-on-primary-container</code></td></tr><tr><td><code>--color-on-info-container</code></td></tr><tr><td><code>--color-on-success-container</code></td></tr><tr><td><code>--color-on-warning-container</code></td></tr><tr><td><code>--color-on-danger-container</code></td></tr><tr><td><code>--color-outline</code></td></tr><tr><td><code>--color-surface-container</code></td></tr><tr><td><code>--color-surface-container-low</code></td></tr><tr><td><code>--color-surface-container-high</code></td></tr><tr><td><code>--color-surface-container-highest</code></td></tr><tr><td><code>--color-inverse-surface</code></td></tr><tr><td><code>--color-on-surface-variant</code></td></tr><tr><td><code>--opacity-hover</code></td></tr><tr><td><code>--opacity-focus</code></td></tr></tbody></table><p>以下列举了一些可能会影响页面样式的变量变更。</p><ul><li><p>DatePicker</p><ul><li><code>--picker-header-padding</code> 变更为 <code>--date-picker-header-padding</code></li><li><code>--picker-header-color</code> 变更为 <code>--date-picker-header-color</code></li><li><code>--picker-actions-padding</code> 变更为 <code>--date-picker-actions-padding</code></li></ul></li><li><p>Pagination</p><p>移除 <code>--pagination-list-bg-color</code>, <code>--pagination-list-active-bg-color</code>, <code>--pagination-list-active-color</code></p></li><li><p>Step</p><p>移除 <code>--step-min-size</code>, <code>--step-line-size</code></p></li><li><p>Progress</p><p>移除 <code>--progress-ripple-color</code></p></li><li><p>Select/Input</p><p>组件进行了一次较大的重构，支持了前置图标存在时的占位符 (hint) 动画</p><table><thead><tr><th>移除变量</th></tr></thead><tbody><tr><td><code>--field-decorator-standard-normal-padding-top</code></td></tr><tr><td><code>--field-decorator-standard-normal-padding-bottom</code></td></tr><tr><td><code>--field-decorator-standard-normal-icon-padding</code></td></tr><tr><td><code>--field-decorator-standard-normal-non-hint-padding-top</code></td></tr><tr><td><code>--field-decorator-standard-normal-placeholder-translate-y</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-top</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-bottom</code></td></tr><tr><td><code>--field-decorator-standard-small-icon-padding</code></td></tr><tr><td><code>--field-decorator-standard-small-non-hint-padding-top</code></td></tr><tr><td><code>--field-decorator-standard-small-placeholder-translate-y</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-top</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-bottom</code></td></tr><tr><td><code>--field-decorator-outlined-normal-icon-padding</code></td></tr><tr><td><code>--field-decorator-outlined-normal-placeholder-translate-y</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-top</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-bottom</code></td></tr><tr><td><code>--field-decorator-outlined-small-icon-padding</code></td></tr><tr><td><code>--field-decorator-outlined-small-placeholder-translate-y</code></td></tr></tbody></table><table><thead><tr><th>新增变量</th></tr></thead><tbody><tr><td><code>--field-decorator-standard-normal-margin-top</code></td></tr><tr><td><code>--field-decorator-standard-normal-margin-bottom</code></td></tr><tr><td><code>--field-decorator-standard-normal-icon-margin-top</code></td></tr><tr><td><code>--field-decorator-standard-normal-icon-margin-bottom</code></td></tr><tr><td><code>--field-decorator-standard-normal-non-hint-margin-top</code></td></tr><tr><td><code>--field-decorator-standard-small-margin-top</code></td></tr><tr><td><code>--field-decorator-standard-small-margin-bottom</code></td></tr><tr><td><code>--field-decorator-standard-small-icon-margin-top</code></td></tr><tr><td><code>--field-decorator-standard-small-icon-margin-bottom</code></td></tr><tr><td><code>--field-decorator-standard-small-non-hint-margin-top</code></td></tr><tr><td><code>--field-decorator-outlined-normal-margin-top</code></td></tr><tr><td><code>--field-decorator-outlined-normal-margin-bottom</code></td></tr><tr><td><code>--field-decorator-outlined-normal-icon-margin-top</code></td></tr><tr><td><code>--field-decorator-outlined-normal-icon-margin-bottom</code></td></tr><tr><td><code>--field-decorator-outlined-small-margin-top</code></td></tr><tr><td><code>--field-decorator-outlined-small-margin-bottom</code></td></tr><tr><td><code>--field-decorator-outlined-small-icon-margin-top</code></td></tr><tr><td><code>--field-decorator-outlined-small-icon-margin-bottom</code></td></tr></tbody></table></li></ul>",4);function x(w,z,C,P,j,B){const t=i("router-link");return l(),n("div",p,[m,d("div",g,[d("h3",f,[e(t,{to:"#jie4shao4"},{default:r(()=>[o("#")]),_:1}),o("介绍")]),h]),d("div",u,[d("h3",_,[e(t,{to:"#zu3jian4gong1neng2bian4geng1"},{default:r(()=>[o("#")]),_:1}),o("组件功能变更")]),b]),d("div",y,[d("h3",k,[e(t,{to:"#zu3jian4yang4shi4bian4liang4bian4geng1"},{default:r(()=>[o("#")]),_:1}),o("组件样式变量变更")]),v])])}const V=a(s,[["render",x]]);export{V as default};