import type { PropType } from 'vue';
declare function alignmentValidator(alignment: string): boolean;
export declare const props: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignment: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: typeof alignmentValidator;
    };
    offsetX: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    offsetY: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    teleport: {
        default: string;
    };
    onOpen: {
        type: PropType<() => void>;
    };
    onOpened: {
        type: PropType<() => void>;
    };
    onClose: {
        type: PropType<() => void>;
    };
    onClosed: {
        type: PropType<() => void>;
    };
    'onUpdate:show': {
        type: PropType<(show: boolean) => void>;
    };
};
export {};
