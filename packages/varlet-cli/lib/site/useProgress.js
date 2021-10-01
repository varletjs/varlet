"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProgress = void 0;
var progress_1 = __importDefault(require("./components/progress"));
var vue_1 = require("vue");
// @ts-ignore
var _config_1 = __importDefault(require("@config"));
// @ts-ignore
var utils_1 = require("./utils");
var lodash_es_1 = require("lodash-es");
function useProgress() {
    var timer;
    var trackColor = lodash_es_1.get(_config_1.default, 'themes.color-progress-track');
    var color = lodash_es_1.get(_config_1.default, 'themes.color-progress');
    var props = vue_1.reactive({
        style: {
            position: 'fixed',
            width: '100%',
            left: 0,
            top: 0,
            zIndex: 10086,
        },
        trackColor: trackColor,
        color: color,
        lineWidth: 3,
        value: 0,
    });
    var changeValue = function () {
        timer = window.setTimeout(function () {
            if (props.value >= 95)
                return;
            var num = Math.random();
            if (props.value < 70)
                num = Math.round(5 * Math.random());
            props.value += num;
            changeValue();
        }, 200);
    };
    var start = function () {
        props.value = 0;
        setTimeout(function () { return (props.color = color); }, 200);
        changeValue();
    };
    var end = function () {
        props.value = 100;
        setTimeout(function () { return (props.color = trackColor); }, 300);
        window.clearTimeout(timer);
    };
    utils_1.mountInstance(progress_1.default, props);
    return {
        start: start,
        end: end,
    };
}
exports.useProgress = useProgress;
