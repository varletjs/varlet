import type { Plugin } from 'vite';
export interface MarkdownOptions {
    style?: string;
}
export declare function markdown(options: MarkdownOptions): Plugin;
