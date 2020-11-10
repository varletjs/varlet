import { WebpackPluginInstance } from 'webpack'
export declare type URLLoaderType = 'image' | 'video' | 'audio' | 'font'
export declare const commonTemplateOption: {
	minify: {
		removeAttributeQuotes: boolean
		collapseWhitespace: boolean
	}
	hash: boolean
}
export declare function createURLLoaderOptions(
	type: URLLoaderType
): {
	name: string
	limit: number
	outputPath: string
	esModule: boolean
}
export declare function createCSSLoaders(): (
	| string
	| {
			loader: string
			options:
				| {
						postcssOptions: {
							plugins: string[]
						}
				  }
				| {
						postcssOptions: {
							config: string
							plugins: string[]
						}
				  }
	  }
)[]
export declare function createBabelConfig(): {
	loader: string
	options: {
		presets: (
			| string
			| {
					targets: {
						chrome: string
						ie: string
					}
			  }
		)[][]
		plugins: string[]
	}
}
export declare function createBasePlugins(): WebpackPluginInstance[]
export declare function createBaseConfig(): {
	entry: {
		pc: string
		mobile: string
	}
	resolve: {
		extensions: string[]
	}
	module: {
		rules: (
			| {
					test: RegExp
					use: (
						| string
						| {
								loader: string
								options: {
									presets: (
										| string
										| {
												targets: {
													chrome: string
													ie: string
												}
										  }
									)[][]
									plugins: string[]
								}
						  }
					)[]
					exclude: RegExp
			  }
			| {
					test: RegExp
					use: (
						| string
						| {
								loader: string
								options: {
									presets: (
										| string
										| {
												targets: {
													chrome: string
													ie: string
												}
										  }
									)[][]
									plugins: string[]
								}
						  }
						| {
								loader: string
								options: {
									appendTsSuffixTo: RegExp[]
								}
						  }
					)[]
					exclude?: undefined
			  }
			| {
					test: RegExp
					use: {
						loader: string
						options: {
							name: string
							limit: number
							outputPath: string
							esModule: boolean
						}
					}
					exclude?: undefined
			  }
			| {
					test: RegExp
					use: (
						| string
						| {
								loader: string
								options:
									| {
											postcssOptions: {
												plugins: string[]
											}
									  }
									| {
											postcssOptions: {
												config: string
												plugins: string[]
											}
									  }
						  }
					)[]
					exclude?: undefined
			  }
		)[]
	}
}
