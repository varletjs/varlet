interface JestCommandOptions {
    watch?: boolean;
    watchAll?: boolean;
    component?: string;
    clearCache?: boolean;
}
export declare function jest(cmd: JestCommandOptions): Promise<void>;
export {};
