import type { PropType } from 'vue';
export declare const props: {
    name: {
        type: StringConstructor;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
    };
    namespace: {
        type: StringConstructor;
        default: string;
    };
    transition: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    onClick: {
        type: PropType<(event: Event) => void>;
    };
};
