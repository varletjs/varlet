interface GenCommandOptions {
    name?: string;
    i18n?: boolean;
    sfc?: boolean;
    tsx?: boolean;
}
export declare function gen(options: GenCommandOptions): Promise<void>;
export {};
