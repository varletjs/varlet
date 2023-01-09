import type { Plugin } from 'vite';
export interface InlineCssOptions {
    cssFile: string;
    jsFile: string;
    onEnd?(): void;
}
export declare function inlineCss(options: InlineCssOptions): Plugin;
