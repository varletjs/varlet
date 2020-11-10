export declare function removeDir(): Promise<[void, void, void]>
export declare function recompile(path: string): Promise<void>
export declare function handleFilesChange(): void
export declare function compile(cmd: { watch: boolean }): Promise<void>
