interface ChangelogCommandOptions {
    file?: string;
    releaseCount?: number;
}
export declare function changelog({ releaseCount, file }?: ChangelogCommandOptions): Promise<void>;
export {};
