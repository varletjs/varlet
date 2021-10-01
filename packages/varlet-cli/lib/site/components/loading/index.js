"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._LoadingComponent = void 0;
var Loading_vue_1 = __importDefault(require("./Loading.vue"));
Loading_vue_1.default.install = function (app) {
    app.component(Loading_vue_1.default.name, Loading_vue_1.default);
};
exports._LoadingComponent = Loading_vue_1.default;
exports.default = Loading_vue_1.default;
