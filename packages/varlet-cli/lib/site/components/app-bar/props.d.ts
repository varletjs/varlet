export declare function positionValidator(position: string): boolean;
export declare const props: {
    color: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    titlePosition: {
        type: StringConstructor;
        default: string;
        validator: typeof positionValidator;
    };
    elevation: {
        type: BooleanConstructor;
        default: boolean;
    };
};
