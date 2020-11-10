export declare const IMPORT_VUE_PATH_RE: RegExp
export declare const REQUIRE_VUE_PATH_RE: RegExp
export declare const IMPORT_TS_PATH_RE: RegExp
export declare const REQUIRE_TS_PATH_RE: RegExp
export declare function replaceVueExt(script: string): string
export declare function replaceTSExt(script: string): string
export declare function compileScript(
	script: string,
	path: string,
	modules?: string | boolean
): Promise<void>
export declare function compileScriptFile(
	path: string,
	modules?: string | boolean
): Promise<void>
export declare function compileLibraryEntry(
	dir: string,
	componentNames: string[],
	modules?: string | boolean
): void
