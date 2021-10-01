import type { PropType } from 'vue';
declare type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear';
declare type LoadingSize = 'normal' | 'mini' | 'small' | 'large';
export declare function typeValidator(type: string): boolean;
export declare function sizeValidator(size: string): boolean;
export declare const props: {
    type: {
        type: PropType<LoadingType>;
        default: string;
        validator: typeof typeValidator;
    };
    radius: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    size: {
        type: PropType<LoadingSize>;
        default: string;
        validator: typeof sizeValidator;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
};
export {};
