declare function modeValidator(mode: string): boolean;
export declare const props: {
    mode: {
        type: StringConstructor;
        default: string;
        validator: typeof modeValidator;
    };
    lineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
    };
    trackColor: {
        type: StringConstructor;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    track: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export {};
