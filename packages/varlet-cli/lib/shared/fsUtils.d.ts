export declare function accessProperty(target: any, operator: string): any
export declare function getDirComponentNames(dir: string[]): string[]
export declare function isDir(path: string): boolean
export declare function isSFC(path: string): boolean
export declare function isScript(path: string): boolean
export declare function isLess(path: string): boolean
export declare function isExampleDir(path: string): boolean
export declare function isTestsDir(path: string): boolean
export declare function replaceExt(path: string, ext: string): string
export declare function convertMobileSiteExamplePathToComponentName(
	path: string
): string
export declare function getMobileSiteExamplePaths(): Promise<string[]>
export declare function buildMobileSiteRoutes(): Promise<void>
export declare function bigCamelize(str: string): string
export declare function camelize(str: string): string
