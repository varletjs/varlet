"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.default = {
    info: function (text) {
        console.log(text);
    },
    success: function (text) {
        console.log(chalk_1.default.hex('#00c48f')(text));
    },
    warning: function (text) {
        console.log(chalk_1.default.hex('#ff9800')(text));
    },
    error: function (text) {
        console.log(chalk_1.default.hex('#f44336')(text));
    },
    title: function (text) {
        console.log(chalk_1.default.cyan(text));
    },
};
