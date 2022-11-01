interface CreateCommandOptions {
    name?: string;
    locale?: boolean;
    sfc?: boolean;
    tsx?: boolean;
}
export declare function create(options: CreateCommandOptions): Promise<void>;
export {};
