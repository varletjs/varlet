interface VarletConfig {
    /**
     * @default `Varlet`
     * UI library name.
     */
    name?: string;
    /**
     * @default `var`
     * Component name prefix
     */
    namespace?: string;
    /**
     * @default `localhost`
     * Local dev server host
     */
    host?: string;
    /**
     * @default `8080`
     * Local dev server port
     */
    port?: number;
    logo?: string;
    defaultLanguage?: 'zh-CN' | 'en-US';
    /**
     * @default `false`
     * Show mobile component on the right.
     */
    useMobile?: boolean;
    lightTheme?: Record<string, string>;
    darkTheme?: Record<string, string>;
    highlight?: {
        style: string;
    };
    analysis?: {
        baidu: string;
    };
    pc?: Record<string, any>;
    mobile?: Record<string, any>;
    moduleCompatible?: Record<string, string>;
}
export declare function defineConfig(conf: VarletConfig): VarletConfig;
export declare function mergeStrategy(value: any, srcValue: any, key: string): any[] | undefined;
export declare function getVarletConfig(emit?: boolean): any;
export {};
