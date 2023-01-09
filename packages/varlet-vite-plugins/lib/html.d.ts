import type { Plugin } from 'vite';
export interface HtmlOptions {
    data?: Record<string, string>;
}
export declare function html(options: HtmlOptions): Plugin;
