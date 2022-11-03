export declare function removeDir(): Promise<[void, void, void, void]>;
export declare function runTask(taskName: string, task: () => any): Promise<void>;
interface CompileCommandOptions {
    noUmd?: boolean;
}
export declare function compile(options: CompileCommandOptions): Promise<void>;
export {};
