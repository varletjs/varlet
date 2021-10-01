"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ProgressComponent = void 0;
var Progress_vue_1 = __importDefault(require("./Progress.vue"));
Progress_vue_1.default.install = function (app) {
    app.component(Progress_vue_1.default.name, Progress_vue_1.default);
};
exports._ProgressComponent = Progress_vue_1.default;
exports.default = Progress_vue_1.default;
