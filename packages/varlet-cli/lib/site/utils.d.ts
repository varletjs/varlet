export * from './components/utils/components';
export * from './components/utils/elements';
export * from './components/utils/shared';
export declare type StyleVars = Record<string, string>;
export declare function camelize(str: string): string;
export declare function bigCamelize(str: string): string;
export interface PCLocationInfo {
    language: string;
    menuName: string;
}
export declare function getPCLocationInfo(): PCLocationInfo;
export declare function isPhone(): boolean;
export declare enum MenuTypes {
    TITLE = 1,
    COMPONENT = 2,
    DOCUMENTATION = 3
}
export declare function inIframe(): boolean;
export declare function removeEmpty(object?: Record<string, string>): Record<string, string>;
export declare function getHashSearch(): URLSearchParams;
export declare function watchLang(cb: (lang: string) => void, platform?: 'pc' | 'mobile'): void;
export declare function watchPlatform(cb: (platform: string) => void): void;
export declare function addRouteListener(cb: () => void): void;
export declare function setThemes(config: Record<string, any>): void;
