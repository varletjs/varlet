export declare const IMPORT_LESS_PATH_RE: RegExp
export declare const REQUIRE_LESS_PATH_RE: RegExp
export declare const EMPTY_SPACE_RE: RegExp
export declare const EMPTY_LINE_RE: RegExp
export declare function replaceStyleExt(script: string): string
export declare function clearEmptyLine(style: string): string
export declare function compileLess(path: string): Promise<void>
export declare function emitStyleEntry(
	path: string,
	modules?: string | boolean
): void
