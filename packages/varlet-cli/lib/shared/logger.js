'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
var chalk_1 = __importDefault(require('chalk'))
exports.default = {
	info: function (text) {
		console.log(chalk_1.default.hex('#60AEDF')(text))
	},
	success: function (text) {
		console.log(chalk_1.default.hex('#15DD6A')(text))
	},
	warning: function (text) {
		console.log(chalk_1.default.hex('#DDBF69')(text))
	},
	error: function (text) {
		console.log(chalk_1.default.hex('#AE4434')(text))
	},
}
