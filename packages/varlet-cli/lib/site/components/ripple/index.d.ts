import './ripple.less';
import '../styles/common.less';
import type { Directive, Plugin, App } from 'vue';
declare const Ripple: Directive & Plugin;
export declare const _RippleComponent: import("vue").ObjectDirective<any, any> & {
    install: (app: App<any>, ...options: any[]) => any;
};
export default Ripple;
