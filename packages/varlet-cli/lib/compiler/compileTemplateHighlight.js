"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTemplateHighlight = exports.compileDir = exports.compileMD = exports.compileWebTypes = exports.compileAttributes = exports.compileTags = exports.compileTable = exports.parseTable = exports.replaceUnderline = exports.replaceDot = void 0;
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
var path_1 = require("path");
var fsUtils_1 = require("../shared/fsUtils");
var lodash_1 = require("lodash");
var varlet_config_1 = require("../config/varlet.config");
var TABLE_HEAD_RE = /\s*\|.*\|\s*\n\s*\|.*---+\s*\|\s*\n+/;
var TABLE_FOOT_RE = /(\|\s*$)|(\|\s*\n(?!\s*\|))/;
var replaceDot = function (s) { return s.replace(/`/g, ''); };
exports.replaceDot = replaceDot;
var replaceUnderline = function (s) { return s.replace(/_/g, ''); };
exports.replaceUnderline = replaceUnderline;
function parseTable(table) {
    var rows = table.split('\n').filter(Boolean);
    return rows.map(function (row) {
        var cols = row.split('|');
        cols.shift();
        cols.pop();
        return cols.map(function (col) { return col.replace(/__varlet_axis__/g, '|').trim(); });
    });
}
exports.parseTable = parseTable;
function compileTable(md, titleRe) {
    var apiMatched = md.match(constant_1.HL_API_RE);
    if (!apiMatched) {
        return '';
    }
    md = md.slice(apiMatched.index + apiMatched[0].length);
    var titleMatched = md.match(titleRe);
    if (!titleMatched) {
        return '';
    }
    md = md.slice(titleMatched.index + titleMatched[0].length);
    var tableHeadMatched = md.match(TABLE_HEAD_RE);
    if (!tableHeadMatched) {
        return '';
    }
    md = md.slice(tableHeadMatched.index + tableHeadMatched[0].length);
    var tableFootMatched = md.match(TABLE_FOOT_RE);
    if (!tableFootMatched) {
        return '';
    }
    md = md.slice(0, tableFootMatched.index + tableFootMatched[0].length);
    return md.replace(/\\\|/g, '__varlet_axis__').trim();
}
exports.compileTable = compileTable;
function compileTags(table, tags, componentName, varletConfig) {
    tags["".concat((0, lodash_1.get)(varletConfig, 'namespace'), "-").concat(componentName)] = {
        attributes: table.attributesTable.map(function (row) { return (0, exports.replaceDot)(row[0]); }),
    };
}
exports.compileTags = compileTags;
function compileAttributes(table, attributes, componentName, varletConfig) {
    table.attributesTable.forEach(function (row) {
        var attrNamespace = "".concat((0, lodash_1.get)(varletConfig, 'namespace'), "-").concat(componentName, "/").concat((0, exports.replaceDot)(row[0]));
        attributes[attrNamespace] = {
            type: (0, exports.replaceUnderline)(row[2]),
            description: "".concat(row[1], " \u9ED8\u8BA4\u503C\uFF1A").concat((0, exports.replaceDot)(row[3])),
        };
    });
}
exports.compileAttributes = compileAttributes;
function compileWebTypes(table, webTypes, componentName, varletConfig) {
    var attributesTable = table.attributesTable, eventsTable = table.eventsTable, slotsTable = table.slotsTable;
    var attributes = attributesTable.map(function (row) { return ({
        name: (0, exports.replaceDot)(row[0]),
        description: row[1],
        default: (0, exports.replaceDot)(row[3]),
        value: {
            type: (0, exports.replaceUnderline)(row[2]),
            kind: 'expression',
        },
    }); });
    var events = eventsTable.map(function (row) { return ({
        name: (0, exports.replaceDot)(row[0]),
        description: row[1],
    }); });
    var slots = slotsTable.map(function (row) { return ({
        name: (0, exports.replaceDot)(row[0]),
        description: row[1],
    }); });
    webTypes.contributions.html.tags.push({
        name: "".concat((0, lodash_1.get)(varletConfig, 'namespace'), "-").concat(componentName),
        attributes: attributes,
        events: events,
        slots: slots,
    });
}
exports.compileWebTypes = compileWebTypes;
function compileMD(path, tags, attributes, webTypes, varletConfig) {
    if (!path.endsWith(constant_1.HL_MD)) {
        return;
    }
    var md = (0, fs_extra_1.readFileSync)(path, 'utf-8');
    var componentName = path.match(constant_1.HL_COMPONENT_NAME_RE)[2];
    var attributesTable = parseTable(compileTable(md, constant_1.HL_TITLE_ATTRIBUTES_RE));
    var eventsTable = parseTable(compileTable(md, constant_1.HL_TITLE_EVENTS_RE));
    var slotsTable = parseTable(compileTable(md, constant_1.HL_TITLE_SLOTS_RE));
    var table = {
        attributesTable: attributesTable,
        eventsTable: eventsTable,
        slotsTable: slotsTable,
    };
    compileWebTypes(table, webTypes, componentName, varletConfig);
    compileTags(table, tags, componentName, varletConfig);
    compileAttributes(table, attributes, componentName, varletConfig);
}
exports.compileMD = compileMD;
function compileDir(path, tags, attributes, webTypes, varletConfig) {
    var dir = (0, fs_extra_1.readdirSync)(path);
    dir.forEach(function (filename) {
        var filePath = (0, path_1.resolve)(path, filename);
        (0, fsUtils_1.isDir)(filePath) && compileDir(filePath, tags, attributes, webTypes, varletConfig);
        (0, fsUtils_1.isMD)(filePath) && compileMD(filePath, tags, attributes, webTypes, varletConfig);
    });
}
exports.compileDir = compileDir;
function compileTemplateHighlight() {
    return __awaiter(this, void 0, void 0, function () {
        var varletConfig, tags, attributes, webTypes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fs_extra_1.ensureDir)(constant_1.HL_DIR)];
                case 1:
                    _a.sent();
                    varletConfig = (0, varlet_config_1.getVarletConfig)();
                    tags = {};
                    attributes = {};
                    webTypes = {
                        $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
                        framework: 'vue',
                        version: require(constant_1.CLI_PACKAGE_JSON).version,
                        name: (0, lodash_1.get)(varletConfig, 'title'),
                        contributions: {
                            html: {
                                tags: [],
                                'types-syntax': 'typescript',
                            },
                        },
                    };
                    compileDir(constant_1.SRC_DIR, tags, attributes, webTypes, varletConfig);
                    return [4 /*yield*/, Promise.all([
                            (0, fs_extra_1.writeFile)(constant_1.HL_WEB_TYPES_JSON, JSON.stringify(webTypes, null, 2)),
                            (0, fs_extra_1.writeFile)(constant_1.HL_TAGS_JSON, JSON.stringify(tags, null, 2)),
                            (0, fs_extra_1.writeFile)(constant_1.HL_ATTRIBUTES_JSON, JSON.stringify(attributes, null, 2)),
                        ])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileTemplateHighlight = compileTemplateHighlight;
