interface PCLocationInfo {
    language: string;
    menuName: string;
}
export declare type Theme = 'lightTheme' | 'darkTheme';
export declare type StyleVars = Record<string, string>;
export declare function StyleProvider(styleVars?: StyleVars | null): void;
export declare function getPCLocationInfo(): PCLocationInfo;
export declare function addRouteListener(cb: () => void): void;
export declare function getHashSearch(): URLSearchParams;
export declare function getBrowserTheme(): Theme;
export {};
