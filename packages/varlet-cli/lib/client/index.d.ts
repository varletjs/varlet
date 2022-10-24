import AppType from './components/app-type';
export declare type StyleVars = Record<string, string>;
export declare function formatStyleVars(styleVars: StyleVars | null): StyleVars;
export declare function StyleProvider(styleVars?: StyleVars | null): void;
export interface PCLocationInfo {
    language: string;
    menuName: string;
}
export declare function getPCLocationInfo(): PCLocationInfo;
export declare function isPhone(): boolean;
export interface Menu {
    doc: string;
    text: Record<string, string>;
    type: MenuTypes;
}
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
export declare type Theme = 'lightTheme' | 'darkTheme';
export declare function setTheme(config: Record<string, any>, name: Theme): void;
export declare function utoa(data: string): string;
export { AppType };
export declare function watchTheme(cb: (theme: Theme, from: 'pc' | 'mobile' | 'default' | 'playground') => void, shouldUnmount?: boolean): void;
export declare function getBrowserTheme(): Theme;
export declare function watchDarkMode(dark: StyleVars, cb?: (theme: Theme) => void): void;
