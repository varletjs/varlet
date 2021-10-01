import type { PropType } from 'vue';
declare function typeValidator(type: string): boolean;
declare function sizeValidator(size: string): boolean;
export declare const props: {
    type: {
        type: PropType<"default" | "primary" | "info" | "success" | "warning" | "danger">;
        default: string;
        validator: typeof typeValidator;
    };
    size: {
        type: PropType<"small" | "normal" | "mini" | "large">;
        default: string;
        validator: typeof sizeValidator;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    loadingRadius: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    loadingType: any;
    loadingSize: any;
    onClick: {
        type: PropType<(e: Event) => void>;
    };
    onTouchstart: {
        type: PropType<(e: Event) => void>;
    };
};
export {};
