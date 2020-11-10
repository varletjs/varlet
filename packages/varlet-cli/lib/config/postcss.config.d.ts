export declare function createPostcssOptions(
	path: string
):
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
