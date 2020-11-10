import { Stats } from 'webpack'
declare const _default: {
	info(text: string): void
	success(text: string): void
	warning(text: string): void
	error(text: string | Stats): void
}
export default _default
