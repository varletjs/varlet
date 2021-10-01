import type { Component, VNode, ComputedRef, ComponentInternalInstance, Ref } from 'vue';
export interface MountInstance {
    instance: any;
    unmount: () => void;
}
export interface ChildrenCounter {
    collect(instance: ComponentInternalInstance): void;
    clear(instance: ComponentInternalInstance): void;
    instances: ComponentInternalInstance[];
}
export interface BaseParentProvider<C> {
    collect(childProvider: C): void;
    clear(childProvider: C): void;
}
export declare function pickProps(props: any, propsKey: string): any;
export declare function pickProps(props: any, propsKey: string[]): any;
export declare function mount(component: Component): MountInstance;
export declare function mountInstance(component: any, props?: Record<string, any>, eventListener?: Record<string, any>): {
    unmountInstance: () => void;
};
export declare function flatVNodes(subTree: any): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[];
export declare function useAtChildrenCounter(key: symbol): {
    length: ComputedRef<number>;
};
export declare function useAtParentIndex(key: symbol): {
    index: null;
} | {
    index: ComputedRef<number>;
};
export declare function useChildren<P, C>(key: symbol): {
    childProviders: C[];
    bindChildren: (parentProvider: P) => void;
};
export declare function useParent<P, C>(key: symbol): {
    parentProvider: null;
    bindParent: null;
} | {
    parentProvider: Omit<P & BaseParentProvider<C>, "collect" | "clear">;
    bindParent: (childProvider: C) => void;
};
export declare function keyInProvides(key: symbol): boolean;
export declare function useValidation(): {
    errorMessage: Ref<string>;
    validate: (rules: any, value: any, apis?: any) => Promise<boolean>;
    resetValidation: () => void;
    validateWithTrigger: <T>(validateTrigger: T[], trigger: T, rules: any, value: any, apis?: any) => Promise<void>;
};
export declare function addRouteListener(cb: () => void): void;
export declare function useTeleport(): {
    disabled: Ref<boolean>;
};
