'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.setProd = exports.setDev = exports.isDev = exports.isProd = void 0
function isProd() {
	return process.env.NODE_ENV === 'production'
}
exports.isProd = isProd
function isDev() {
	return process.env.NODE_ENV === 'development'
}
exports.isDev = isDev
function setDev() {
	process.env.NODE_ENV = 'development'
}
exports.setDev = setDev
function setProd() {
	process.env.NODE_ENV = 'production'
}
exports.setProd = setProd
