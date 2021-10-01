export declare type Time = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
export interface CacheInstance<T> {
    cache: T[];
    has(key: T): boolean;
    add(key: T): void;
    remove(key: T): void;
    clear(): void;
}
export declare const toNumber: (val: number | string | boolean | undefined | null) => number;
export declare const isHTMLSupportImage: (val: string) => boolean;
export declare const isHTMLSupportVideo: (val: string) => boolean;
export declare const isString: (val: unknown) => val is string;
export declare const isBool: (val: unknown) => val is boolean;
export declare const isNumber: (val: unknown) => val is number;
export declare const isPlainObject: (val: unknown) => val is Record<string, any>;
export declare const isArray: (val: unknown) => val is any[];
export declare const isURL: (val: string) => boolean;
export declare const isEmpty: (val: unknown) => boolean;
export declare const removeItem: (arr: Array<unknown>, item: unknown) => unknown[] | undefined;
export declare const throttle: (method: any, mustRunDelay?: number) => (() => void);
export declare const debounce: (method: any, delay?: number) => (this: unknown, ...args: any[]) => void;
export declare const createCache: <T>(max: number) => CacheInstance<T>;
export declare const linear: (value: number) => number;
export declare const cubic: (value: number) => number;
export declare const easeInOutCubic: (value: number) => number;
export declare function parseFormat(format: string, time: Time): string;
export declare const dt: (value: unknown, defaultText: string) => unknown;
export declare const inBrowser: boolean;
export declare const uniq: (arr: Array<any>) => any[];
export declare function kebabCase(str: string): string;
