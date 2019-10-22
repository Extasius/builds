/*!
 * surveyjs - SurveyJS Analytics library v1.1.17
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["survey-core", "plotly.js-dist", "wordcloud", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else
		root["SurveyAnalytics"] = factory(root["Survey"], root["Plotly"], root["WordCloud"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationManager; });

var VisualizationManager = /** @class */ (function () {
    function VisualizationManager() {
    }
    VisualizationManager.registerVisualizer = function (typeName, constructor) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            vizualizers = [];
            VisualizationManager.vizualizers[typeName] = vizualizers;
        }
        vizualizers.push(constructor);
    };
    VisualizationManager.getVisualizers = function (typeName) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            return [__WEBPACK_IMPORTED_MODULE_0__visualizerBase__["a" /* VisualizerBase */]];
        }
        return vizualizers;
    };
    VisualizationManager.vizualizers = {};
    return VisualizationManager;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __rest */
/* unused harmony export __decorate */
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __rest = function (source, e) {
    var result = {};
    for (var propertyName in source)
        if (Object.prototype.hasOwnProperty.call(source, propertyName) &&
            e.indexOf(propertyName) < 0)
            result[propertyName] = source[propertyName];
    if (source != null &&
        typeof Object["getOwnPropertySymbols"] === "function")
        for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source); i < propertySymbols.length; i++)
            if (e.indexOf(propertySymbols[i]) < 0)
                result[propertySymbols[i]] = source[propertySymbols[i]];
    return result;
};
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerBase; });
var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(targetElement, question, data, options) {
        this.targetElement = targetElement;
        this.question = question;
        this.data = data;
        this.options = options;
        this.toolbarItemCreators = {};
        this.backgroundColor = "#f7f7f7";
    }
    VisualizerBase.prototype.registerToolbarItem = function (name, creator) {
        this.toolbarItemCreators[name] = creator;
    };
    Object.defineProperty(VisualizerBase.prototype, "name", {
        get: function () {
            return "visualizer";
        },
        enumerable: true,
        configurable: true
    });
    VisualizerBase.prototype.update = function (data) {
        this.data = data;
    };
    VisualizerBase.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
    };
    VisualizerBase.prototype.renderContent = function (container) {
        container.innerHTML = "This question type is not visualized yet";
    };
    VisualizerBase.prototype.render = function (targetElement) {
        this.targetElement = targetElement || this.targetElement;
        var toolbarNodeContainer = document.createElement("div");
        var contentContainer = document.createElement("div");
        contentContainer.className = "sa-visualizer__content";
        this.createToolbar(toolbarNodeContainer);
        this.renderContent(contentContainer);
        this.targetElement.appendChild(toolbarNodeContainer);
        this.targetElement.appendChild(contentContainer);
    };
    VisualizerBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        Object.keys(this.toolbarItemCreators || {}).forEach(function (toolbarItemName) { return _this.toolbarItemCreators[toolbarItemName](toolbar); });
    };
    VisualizerBase.prototype.createToolbar = function (container) {
        var toolbar = document.createElement("div");
        toolbar.className = "sva-toolbar";
        this.createToolbarItems(toolbar);
        container.appendChild(toolbar);
    };
    VisualizerBase.prototype.invokeOnUpdate = function () {
        this.onUpdate && this.onUpdate();
    };
    VisualizerBase.prototype.getRandomColor = function () {
        var colors = this.getColors();
        return colors[Math.floor(Math.random() * colors.length)];
    };
    VisualizerBase.prototype.getColors = function (count) {
        if (count === void 0) { count = 10; }
        var colors = Array.isArray(VisualizerBase.customColors) &&
            VisualizerBase.customColors.length > 0
            ? VisualizerBase.customColors
            : VisualizerBase.colors;
        var manyColors = [];
        for (var index = 0; index < count; index++) {
            manyColors = manyColors.concat(colors);
        }
        return manyColors;
    };
    VisualizerBase.customColors = [];
    VisualizerBase.colors = [
        "#86e1fb",
        "#3999fb",
        "#ff6771",
        "#1eb496",
        "#ffc152",
        "#aba1ff",
        "#7d8da5",
        "#4ec46c",
        "#cf37a6",
        "#4e6198"
    ];
    return VisualizerBase;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_english__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });

var localization = {
    currentLocaleValue: "",
    defaultLocaleValue: "en",
    locales: {},
    localeNames: {},
    supportedLocales: [],
    get currentLocale() {
        return this.currentLocaleValue === this.defaultLocaleValue
            ? ""
            : this.currentLocaleValue;
    },
    set currentLocale(val) {
        this.currentLocaleValue = val;
    },
    get defaultLocale() {
        return this.defaultLocaleValue;
    },
    set defaultLocale(val) {
        this.defaultLocaleValue = val;
    },
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        var result = loc[strName];
        if (result === undefined) {
            result = this.locales["en"][strName] || strName;
        }
        return result;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.locales["en"] = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.localeNames["en"] = "english";


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarHelper; });
var ToolbarHelper = /** @class */ (function () {
    function ToolbarHelper() {
    }
    ToolbarHelper.createSelector = function (toolbar, options, isSelected, hander) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sva-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sva-question__select";
        options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.text = option.text;
            optionElement.selected = isSelected(option);
            select.appendChild(optionElement);
        });
        select.onchange = hander;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    ToolbarHelper.createButton = function (toolbar, hander, text, cssClass) {
        if (text === void 0) { text = ""; }
        if (cssClass === void 0) { cssClass = ""; }
        var button = document.createElement("span");
        button.className = "sva-toolbar__button " + cssClass;
        button.innerText = text;
        button.onclick = hander;
        toolbar.appendChild(button);
        return button;
    };
    return ToolbarHelper;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectBase__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = canLoadPlotly;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectBasePlotly; });



function canLoadPlotly() {
    return !!window.URL.createObjectURL;
}
var Plotly;
if (canLoadPlotly()) {
    Plotly = __webpack_require__(11);
}
var SelectBasePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBasePlotly, _super);
    function SelectBasePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.filterText = undefined;
        _this.filter = undefined;
        _this.chartTypes = SelectBasePlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    SelectBasePlotly.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.destroy();
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
        this.invokeOnUpdate();
    };
    SelectBasePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
    };
    SelectBasePlotly.prototype.createChart = function () {
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
    };
    SelectBasePlotly.prototype.getSelectedItemByText = function (itemText) {
        return this.question.choices.filter(function (choice) { return choice.text === itemText; })[0];
    };
    SelectBasePlotly.prototype.getPlotlyChart = function (chartNode, chartType) {
        var _this = this;
        var question = this.question;
        var datasets = this.getData();
        var labels = this.getLabels();
        var traces = [];
        var colors = this.getColors();
        var traceConfig = {
            type: chartType,
            y: labels.map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            text: labels,
            orientation: "h",
            mode: "markers",
            width: 0.5
        };
        if (datasets.length === 1) {
            traceConfig["marker"] = {
                color: colors,
                symbol: 'circle',
                size: 16
            };
        }
        datasets.forEach(function (dataset) {
            if (_this.chartType === "pie") {
                traces.push(Object.assign({}, traceConfig, { values: dataset }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = chartType === "pie"
            ? 450
            : (labels.length + (labels.length + 1) * 0.5) * 20;
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040"
            },
            height: height,
            margin: {
                t: 0,
                b: 0,
                r: 10
            },
            colorway: colors,
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent"
            },
            xaxis: {
                automargin: true
            },
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor
        };
        var config = {
            displaylogo: false,
            responsive: true
        };
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0 && _this.onDataItemSelected) {
                var itemText = data.points[0].text;
                var item = _this.getSelectedItemByText(itemText);
                _this.setSelection(item);
            }
        });
        var getDragLayer = function () { return (chartNode.getElementsByClassName("nsewdrag")[0]); };
        chartNode["on"]("plotly_hover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "pointer");
        });
        chartNode["on"]("plotly_unhover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "");
        });
        return plot;
    };
    SelectBasePlotly.types = ["bar", "pie", "scatter"];
    return SelectBasePlotly;
}(__WEBPACK_IMPORTED_MODULE_2__selectBase__["a" /* SelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("checkbox", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("radiogroup", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("dropdown", SelectBasePlotly);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("imagepicker", SelectBasePlotly);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBase__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanel; });



var Muuri = __webpack_require__(20);





var questionElementClassName = "sva-question";
var VisualizationPanel = /** @class */ (function () {
    function VisualizationPanel(targetElement, questions, data, options, _elements, isTrustedAccess) {
        if (_elements === void 0) { _elements = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetElement = targetElement;
        this.questions = questions;
        this.data = data;
        this.options = options;
        this._elements = _elements;
        this.isTrustedAccess = isTrustedAccess;
        this._showHeader = false;
        this.panelContent = undefined;
        this.filterValues = {};
        this.visualizers = [];
        this.onVisibleElementsCnahged = new __WEBPACK_IMPORTED_MODULE_2_survey_core__["Event"]();
        this.filteredData = data;
        if (_elements.length === 0) {
            this._elements = this.buildElements(questions);
        }
    }
    Object.defineProperty(VisualizationPanel.prototype, "layoutEngine", {
        get: function () {
            return !!this.getLayoutEngine && this.getLayoutEngine();
        },
        enumerable: true,
        configurable: true
    });
    VisualizationPanel.prototype.buildElements = function (questions) {
        return (questions || []).map(function (question) {
            return {
                name: question.name,
                displayName: question.title,
                visibility: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible,
                type: undefined
            };
        });
    };
    VisualizationPanel.prototype.isVisible = function (visibility) {
        return this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible || !this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible;
    };
    Object.defineProperty(VisualizationPanel.prototype, "visibleElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return _this.isVisible(el.visibility); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "hiddenElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return !_this.isVisible(el.visibility); });
        },
        enumerable: true,
        configurable: true
    });
    VisualizationPanel.prototype.getElement = function (name) {
        return this._elements.filter(function (el) { return el.name === name; })[0];
    };
    VisualizationPanel.prototype.visibleElementsCnahged = function () {
        if (!this.onVisibleElementsCnahged.isEmpty) {
            this.onVisibleElementsCnahged.fire(this, {});
        }
        this.layout();
    };
    VisualizationPanel.prototype.destroyVisualizer = function (visualizer) {
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
            visualizer.setSelection(undefined);
            visualizer.onDataItemSelected = undefined;
        }
        visualizer.onUpdate = undefined;
        visualizer.destroy();
        this.visualizers.splice(this.visualizers.indexOf(visualizer), 1);
    };
    VisualizationPanel.prototype.renderVisualizer = function (element) {
        var _this = this;
        var question = this.questions.filter(function (q) { return q.name === element.name; })[0];
        var questionElement = document.createElement("div");
        var questionContent = document.createElement("div");
        var titleElement = document.createElement("h3");
        var vizualizerElement = document.createElement("div");
        titleElement.innerText = element.displayName;
        questionElement.className = questionElementClassName;
        questionContent.className = questionElementClassName + "__content";
        titleElement.className = questionElementClassName + "__title";
        questionContent.appendChild(titleElement);
        questionContent.appendChild(vizualizerElement);
        questionElement.appendChild(questionContent);
        var visualizer = this.createVizualizer(vizualizerElement, question, this.filteredData);
        visualizer.registerToolbarItem("removeQuestion", function (toolbar) {
            return __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
                setTimeout(function () {
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible;
                    _this.destroyVisualizer(visualizer);
                    _this.layoutEngine.remove([questionElement]);
                    _this.panelContent.removeChild(questionElement);
                    _this.visibleElementsCnahged();
                }, 0);
            }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("hideButton"));
        });
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
            var filterInfo = {
                text: undefined,
                element: undefined,
                update: function (selection) {
                    if (!!selection && !!selection.value) {
                        this.element.style.display = "inline-block";
                        this.text.innerHTML = "Filter: [" + selection.text + "]";
                    }
                    else {
                        this.element.style.display = "none";
                        this.text.innerHTML = "";
                    }
                }
            };
            visualizer.registerToolbarItem("questionFilterInfo", function (toolbar) {
                filterInfo.element = document.createElement("div");
                filterInfo.element.className = "sva-question__filter";
                filterInfo.text = document.createElement("span");
                filterInfo.text.className = "sva-question__filter-text";
                filterInfo.element.appendChild(filterInfo.text);
                var filterClear = document.createElement("span");
                filterClear.className = "sva-toolbar__button";
                filterClear.innerHTML = __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("clearButton");
                filterClear.onclick = function () {
                    visualizer.setSelection(undefined);
                };
                filterInfo.element.appendChild(filterClear);
                toolbar.appendChild(filterInfo.element);
                filterInfo.update(visualizer.selection);
                return filterInfo.element;
            });
            visualizer.onDataItemSelected = function (selectedValue, selectedText) {
                filterInfo.update({ value: selectedValue, text: selectedText });
                _this.applyFilter(question.name, selectedValue);
            };
        }
        visualizer.render();
        visualizer.onUpdate = function () { return _this.layout(); };
        this.visualizers.push(visualizer);
        return questionElement;
    };
    VisualizationPanel.prototype.render = function () {
        var _this = this;
        var layoutEngine = undefined;
        this.getLayoutEngine = function () { return layoutEngine; };
        this.panelContent = document.createElement("div");
        this.panelContent.className = "sva-grid";
        this.visibleElements.forEach(function (element) {
            var questionElement = _this.renderVisualizer(element);
            _this.panelContent.appendChild(questionElement);
        });
        if (this.showHeader) {
            var panelHeader = document.createElement("div");
            panelHeader.className = "sva-panel__header";
            var toolobar = document.createElement("div");
            toolobar.className = "sva-toolbar";
            this.createToolbarItems(toolobar);
            panelHeader.appendChild(toolobar);
            this.targetElement.appendChild(panelHeader);
        }
        this.targetElement.appendChild(this.panelContent);
        var moveHandler = function (data) {
            var elements = _this._elements.splice(data.fromIndex, 1);
            _this._elements.splice(data.toIndex, 0, elements[0]);
        };
        layoutEngine = new Muuri(this.panelContent, {
            items: ".sva-question",
            dragEnabled: true
        });
        layoutEngine.on("move", moveHandler);
    };
    VisualizationPanel.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var resetFilterButton = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
            _this.visualizers.forEach(function (visualizer) {
                if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                    visualizer.setSelection(undefined);
                }
            });
        }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("resetFilter"));
        toolbar.appendChild(resetFilterButton);
        var addElementSelector = undefined;
        var addElementSelectorUpdater = function (panel, _) {
            var hiddenElements = _this.hiddenElements;
            if (hiddenElements.length > 0) {
                var selectWrapper = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, [{ name: undefined, displayName: __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("addElement") }].concat(hiddenElements).map(function (element) {
                    return {
                        value: element.name,
                        text: element.displayName
                    };
                }), function (option) { return false; }, function (e) {
                    var element = _this.getElement(e.target.value);
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible;
                    var questionElement = _this.renderVisualizer(element);
                    _this.panelContent.appendChild(questionElement);
                    _this.layoutEngine.add([questionElement]);
                    _this.visibleElementsCnahged();
                });
                addElementSelector && toolbar.replaceChild(selectWrapper, addElementSelector) || toolbar.appendChild(selectWrapper);
                addElementSelector = selectWrapper;
            }
            else {
                addElementSelector && toolbar.removeChild(addElementSelector);
                addElementSelector = undefined;
            }
        };
        addElementSelectorUpdater(this, {});
        this.onVisibleElementsCnahged.add(addElementSelectorUpdater);
    };
    VisualizationPanel.prototype.destroy = function () {
        var layoutEngine = !!this.getLayoutEngine && this.getLayoutEngine();
        if (!!layoutEngine) {
            layoutEngine.off("move");
            layoutEngine.destroy();
            this.getLayoutEngine = undefined;
        }
        this.targetElement.innerHTML = "";
        this.panelContent = undefined;
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
    };
    VisualizationPanel.prototype.update = function (hard) {
        var _this = this;
        if (hard === void 0) { hard = false; }
        if (hard && this.visualizers.length > 0) {
            this.destroy();
            this.render();
        }
        else {
            this.visualizers.forEach(function (visualizer) {
                return setTimeout(function () { return visualizer.update(_this.filteredData); }, 10);
            });
        }
    };
    VisualizationPanel.prototype.layout = function () {
        var layoutEngine = this.layoutEngine;
        if (!!layoutEngine) {
            layoutEngine.refreshItems();
            layoutEngine.layout();
        }
    };
    VisualizationPanel.prototype.applyFilter = function (questionName, selectedValue) {
        var _this = this;
        var filterChanged = true;
        if (selectedValue !== undefined) {
            filterChanged = this.filterValues[questionName] !== selectedValue;
            this.filterValues[questionName] = selectedValue;
        }
        else {
            filterChanged = this.filterValues[questionName] !== undefined;
            delete this.filterValues[questionName];
        }
        if (filterChanged) {
            this.filteredData = this.data.filter(function (item) {
                return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
            });
            this.update();
        }
    };
    VisualizationPanel.prototype.createVizualizer = function (vizualizerElement, question, data) {
        var creators = __WEBPACK_IMPORTED_MODULE_0__visualizationManager__["a" /* VisualizationManager */].getVisualizers(question.getType());
        var visualizers = creators.map(function (creator) { return new creator(vizualizerElement, question, data); });
        if (visualizers.length > 1) {
            var visualizer = new __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__["a" /* AlternativeVisualizersWrapper */](visualizers, vizualizerElement, question, data);
            return visualizer;
        }
        return visualizers[0];
    };
    Object.defineProperty(VisualizationPanel.prototype, "showHeader", {
        get: function () {
            return this._showHeader;
        },
        set: function (newValue) {
            if (newValue != this._showHeader) {
                this._showHeader = newValue;
                this.update(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    return VisualizationPanel;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanelDynamic; });




var VisualizationPanelDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationPanelDynamic, _super);
    function VisualizationPanelDynamic(targetNode, question, data, options) {
        var _this = _super.call(this, targetNode, question, data, options) || this;
        _this.data = [];
        data.forEach(function (dataItem) {
            return !!dataItem[question.name] &&
                (_this.data = _this.data.concat(dataItem[question.name]));
        });
        return _this;
    }
    VisualizationPanelDynamic.prototype.getQuestions = function () {
        var paneldynamic = this.question;
        return paneldynamic.panels[0].questions;
    };
    VisualizationPanelDynamic.prototype.render = function () {
        var visPanel = new __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a" /* VisualizationPanel */](document.getElementById("summaryContainer"), this.getQuestions(), this.data);
        visPanel.render();
    };
    return VisualizationPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("paneldynamic", VisualizationPanelDynamic);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textHelper; });

var stopWordsDictionary = {};
stopWordsDictionary["en"] = __WEBPACK_IMPORTED_MODULE_0__english__["a" /* stopWords */];
var textHelper = {
    getStopWords: function (locale) {
        if (locale === void 0) { locale = ""; }
        return stopWordsDictionary[locale || "en"] || [];
    }
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBase; });





var SelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
    function SelectBase(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.selectedItem = undefined;
        _this.chartNode = document.createElement("div");
        return _this;
    }
    SelectBase.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.createChart();
            this.invokeOnUpdate();
        }
    };
    SelectBase.prototype.createChart = function () { };
    SelectBase.prototype.setSelection = function (item) {
        this.selectedItem = item;
        this.onDataItemSelected((item && item.value) || undefined, (item && item.text) || "");
    };
    Object.defineProperty(SelectBase.prototype, "selection", {
        get: function () {
            return this.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    SelectBase.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
    };
    SelectBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, function (e) { return _this.setChartType(e.target.value); });
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    SelectBase.prototype.valuesSource = function () {
        var question = this.question;
        return question["activeChoices"];
    };
    SelectBase.prototype.getValues = function () {
        var values = this.valuesSource().map(function (choice) { return choice.value; });
        if (this.question.hasOther)
            values.unshift("other");
        return values;
    };
    SelectBase.prototype.getLabels = function () {
        var _this = this;
        var labels = this.valuesSource().map(function (choice) {
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value);
        });
        if (this.question.hasOther)
            labels.unshift("Other");
        return labels;
    };
    SelectBase.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var statistics = values.map(function (v) { return 0; });
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    values.forEach(function (val, index) {
                        if (rowValue.indexOf(val) !== -1) {
                            statistics[index]++;
                        }
                    });
                }
                else {
                    values.forEach(function (val, index) {
                        if (rowValue == val) {
                            statistics[index]++;
                        }
                    });
                }
            }
        });
        return [statistics];
    };
    return SelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__datatables_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTables; });





var DataTables = /** @class */ (function () {
    function DataTables(targetNode, survey, data, options, _columns, isTrustedAccess) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetNode = targetNode;
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.isTrustedAccess = isTrustedAccess;
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        this.columnsChanged = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["Event"]();
        this.groupBy = [];
        this.headerButtonCreators = [];
        this.detailButtonCreators = [];
        this.createSelectButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("selectButton");
            button.onclick = function (e) {
                e.stopPropagation();
                datatableApi.columns().deselect();
                datatableApi.column(colIdx).select();
                !!_this.onColumnSelected && _this.onColumnSelected(columnName);
            };
            return button;
        };
        this.createGroupingButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("groupButton");
            button.onclick = function (e) {
                e.stopPropagation();
                var index = _this.groupBy.indexOf(columnName);
                if (index === -1) {
                    _this.groupBy.push(columnName);
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("ungroupButton");
                }
                else {
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("groupButton");
                    _this.groupBy.splice(index, 1);
                }
                datatableApi.rowGroup().enable(_this.groupBy.length > 0);
                if (_this.groupBy.length > 0) {
                    datatableApi.rowGroup().dataSrc(_this.groupBy);
                }
                datatableApi.draw();
            };
            return button;
        };
        this.createHideButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("hideColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible;
                datatableApi.columns([colIdx]).visible(false);
                // TODO: Use datatables to update headers (show columns options)
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createAddColumnButton = function (datatableApi, colIdx, columnName) {
            var selector = document.createElement("select");
            selector.onclick = function (e) {
                e.stopPropagation();
            };
            var hiddenColumns = _this.columns.filter(function (column) { return column.visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible; });
            if (hiddenColumns.length === 0) {
                return;
            }
            var option = document.createElement("option");
            option.text = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showColumn");
            option.disabled = true;
            option.selected = true;
            selector.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var option = document.createElement("option");
                var text = column.displayName;
                if (text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                option.text = text;
                option.title = column.displayName;
                option.value = column.name;
                selector.appendChild(option);
            });
            var self = _this;
            selector.onchange = function (e) {
                var _this = this;
                e.stopPropagation();
                if (!__WEBPACK_IMPORTED_MODULE_0_jquery__(this).val())
                    return;
                var column = self._columns.filter(function (column) { return column.name === __WEBPACK_IMPORTED_MODULE_0_jquery__(_this).val(); })[0];
                column.visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible;
                datatableApi.columns([self._columns.indexOf(column)]).visible(true);
                // TODO: Use datatables to update headers (show columns options)
                self.update();
                self.onColumnsChanged();
            };
            return selector;
        };
        this.createMoveToDetailButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("moveToDetail");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showAsColumn");
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        this.headerButtonCreators = [this.createGroupingButton, this.createHideButton, this.createAddColumnButton, this.createMoveToDetailButton];
        this.detailButtonCreators = [this.createShowAsColumnButton];
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
    }
    DataTables.prototype.initTableData = function (data) {
        var _this = this;
        this.tableData = (data || []).map(function (item) {
            var dataItem = {};
            _this.survey.data = item;
            _this._columns.forEach(function (column) {
                var displayValue = item[column.name];
                var question = _this.survey.getQuestionByName(column.name);
                if (question) {
                    displayValue = question.displayValue;
                }
                dataItem[column.name] = typeof displayValue === "string" ? displayValue : JSON.stringify(displayValue) || "";
            });
            return dataItem;
        });
    };
    DataTables.prototype.onColumnsChanged = function () {
        this.columnsChanged.fire(this, { survey: this.survey });
    };
    DataTables.prototype.buildColumns = function (survey) {
        return this.survey.getAllQuestions().map(function (question) {
            return {
                name: question.name,
                displayName: (question.title || "").trim() || question.name,
                dataType: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].Text : __WEBPACK_IMPORTED_MODULE_2__config__["c" /* ColumnDataType */].FileLink,
                visibility: question.getType() !== "file" ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                location: __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column
            };
        });
    };
    DataTables.prototype.isVisible = function (visibility) {
        return this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible || !this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible;
    };
    Object.defineProperty(DataTables.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.update = function (hard) {
        if (hard === void 0) { hard = false; }
        if (this.isRendered) {
            if (hard) {
                this.initTableData(this.data);
            }
            this.destroy();
            this.render();
        }
    };
    Object.defineProperty(DataTables.prototype, "isRendered", {
        get: function () {
            return this.targetNode.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        //if(!this.targetNode) return;
        var tableNode = this.targetNode.children[0];
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__["fn"].DataTable.isDataTable(tableNode)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        this.targetNode.innerHTML = "";
    };
    DataTables.prototype.render = function () {
        var _this = this;
        var tableNode = document.createElement("table");
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var self = this;
        var options = __WEBPACK_IMPORTED_MODULE_0_jquery__["extend"](true, {
            buttons: ["copy", "csv", "print"],
            dom: "Blfrtip",
            data: this.tableData,
            responsive: {
                details: false
            },
            columns: columns,
            // orderFixed: [[1, "asc"]],
            rowGroup: {
                dataSrc: columnsData[0],
                endRender: function (rows, group) {
                    return "Count: " + rows.data().count();
                }
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode)
                    .dataTable()
                    .api();
                var self = _this;
                __WEBPACK_IMPORTED_MODULE_0_jquery__(thead)
                    .children("th")
                    .each(function (index) {
                    var $thNode = __WEBPACK_IMPORTED_MODULE_0_jquery__(this);
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = document.createElement("div");
                        container.className = "sa-datatable-action-container";
                        self.headerButtonCreators.forEach(function (creator) {
                            var element = creator(datatableApi, index, columnsData[index]);
                            if (!!element) {
                                container.appendChild(element);
                            }
                        });
                        $thNode.prepend(container);
                        var filterContainer = document.createElement("div");
                        filterContainer.className = "sa-datatable-filter-container";
                        filterContainer.innerHTML = "<input type='text' placeholder='Search...' />";
                        var column = datatableApi.column(index);
                        __WEBPACK_IMPORTED_MODULE_0_jquery__('input', __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on('click', function (e) { return e.stopPropagation(); });
                        __WEBPACK_IMPORTED_MODULE_0_jquery__('input', __WEBPACK_IMPORTED_MODULE_0_jquery__(filterContainer)).on('keyup change', function () {
                            var value = this.value;
                            if (column.search() !== value) {
                                column.search(value).draw();
                            }
                        });
                        $thNode.append(filterContainer);
                    }
                });
            }
        }, this.options);
        this.targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatable display responsive dataTable";
        var datatableApiRef = this.datatableApi = __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).DataTable(options);
        this.datatableApi
            .rowGroup()
            .enable(false)
            .draw();
        // this.datatableApi.on("rowgroup-datasrc", (e, dt, val) => {
        //   this.datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
        // });
        this.datatableApi.on('column-reorder', function (e, settings, details) {
            var columns = _this._columns.splice(details.from, 1);
            _this._columns.splice(details.to, 0, columns[0]);
            //console.log(this._columns);
            _this.onColumnsChanged();
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__(tableNode).find('tbody').on('click', 'td.sa-datatable-action-column', function () {
            var tr = __WEBPACK_IMPORTED_MODULE_0_jquery__(this).closest('tr');
            var row = datatableApiRef.row(tr);
            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('sa-datatable-detail-row');
            }
            else {
                row.child(self.createDetailMarkup(row.data())).show();
                tr.addClass('sa-datatable-detail-row');
            }
        });
    };
    DataTables.prototype.createDetailMarkup = function (data) {
        var _this = this;
        var table = document.createElement("table");
        table.cellPadding = "5";
        table.cellSpacing = "0";
        table.border = "0";
        table.className = "sa-datatable-detail";
        this.columns
            .filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Row && _this.isVisible(column.visibility); })
            .forEach(function (column) {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = column.displayName;
            var td2 = document.createElement("td");
            td2.textContent = data[column.name];
            var td3 = document.createElement("td");
            _this.detailButtonCreators.forEach(function (creator) { return td3.appendChild(creator(column.name)); });
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            table.appendChild(row);
        });
        if (!!this.datatableApi && this.datatableApi.responsive.hasHidden()) {
            var columnsVisibility = this.datatableApi.columns().responsiveHidden();
            var columns = this.datatableApi.settings().init().columns;
            for (var index = 0; index < columnsVisibility.length; index++) {
                if (!columnsVisibility[index]) {
                    var column = columns[index];
                    var row = document.createElement("tr");
                    var td1 = document.createElement("td");
                    td1.textContent = column.sTitle;
                    var td2 = document.createElement("td");
                    td2.textContent = data[column.mData];
                    var td3 = document.createElement("td");
                    //this.detailButtonCreators.forEach(creator => td3.appendChild(creator(column.mData)));
                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    table.appendChild(row);
                }
            }
        }
        if (!!this.renderDetailActions) {
            var row = document.createElement("tr");
            var td = document.createElement("td");
            row.appendChild(td);
            var td1 = document.createElement("td");
            row.appendChild(td1);
            var td2 = document.createElement("td");
            row.appendChild(td2);
            table.appendChild(row);
            this.renderDetailActions(td, data);
        }
        return table;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var availableColumns = this.columns.filter(function (column) { return column.location === __WEBPACK_IMPORTED_MODULE_2__config__["b" /* QuestionLocation */].Column && _this.isVisible(column.visibility); });
        var columns = availableColumns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                data: column.name,
                sTitle: question && question.title || column.displayName,
                visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                mRender: function (data, type, row) { return row[column.name]; }
            };
        });
        return [{
                "className": 'sa-datatable-action-column',
                "orderable": false,
                "data": null,
                "defaultContent": '',
            }].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__boolean__["a"]; });






/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__text_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });




var Text = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Text, _super);
    function Text(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return "text";
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.getData = function () {
        var _this = this;
        var result = [];
        var columnsCount = 0;
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            var dataStrings = [];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    dataStrings.concat(rowValue);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) { return dataStrings.push(rowValue[key]); });
                    }
                    else {
                        dataStrings.push(rowValue);
                    }
                }
                result.push(dataStrings);
                if (dataStrings.length > columnsCount) {
                    columnsCount = dataStrings.length;
                }
            }
        });
        return { columnsCount: columnsCount, data: result };
    };
    Text.prototype.renderContent = function (container) {
        var _a = this.getData(), columnsCount = _a.columnsCount, data = _a.data;
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        var tableNode = document.createElement("table");
        tableNode.className = "sa-text-table";
        tableNode.style.backgroundColor = this.backgroundColor;
        container.appendChild(tableNode);
        data.forEach(function (rowData) {
            var row = document.createElement("tr");
            for (var i = 0; i < columnsCount; i++) {
                var td = document.createElement("td");
                td.className = "sa-text-table__cell";
                td.textContent = rowData[i];
                row.appendChild(td);
            }
            tableNode.appendChild(row);
        });
        container.className = "sa-text-table__container";
        container.appendChild(tableNode);
    };
    Text.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.targetElement.className = "";
    };
    return Text;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", Text);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationMatrixDynamic; });



var VisualizationMatrixDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationMatrixDynamic, _super);
    function VisualizationMatrixDynamic(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    VisualizationMatrixDynamic.prototype.getQuestions = function () {
        var matrixdynamic = this.question;
        var visibleRows = matrixdynamic.visibleRows;
        if (visibleRows.length === 0)
            return [];
        return visibleRows[0].cells.map(function (c) { return c.question; });
    };
    return VisualizationMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__["a" /* VisualizationPanelDynamic */]));

__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdynamic", VisualizationMatrixDynamic);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdropdown", VisualizationMatrixDynamic);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stopwords_index__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloud; });





var WordCloud = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](WordCloud, _super);
    function WordCloud(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    Object.defineProperty(WordCloud.prototype, "name", {
        get: function () {
            return "wordcloud";
        },
        enumerable: true,
        configurable: true
    });
    WordCloud.prototype.getData = function () {
        var _this = this;
        var result = {};
        var stopWords = __WEBPACK_IMPORTED_MODULE_4__stopwords_index__["a" /* textHelper */].getStopWords();
        var stopTheWord = function (word) {
            if (stopWords.indexOf(word) !== -1) {
                return "";
            }
            return word;
        };
        var processString = function (row) {
            row = "" + row;
            if (!!row) {
                row.split(" ").forEach(function (word) {
                    word = stopTheWord(word.toLowerCase() || "");
                    if (!!word) {
                        if (!result[word]) {
                            result[word] = 1;
                        }
                        else {
                            result[word]++;
                        }
                    }
                });
            }
        };
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    rowValue.forEach(processString);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) { return processString(rowValue[key]); });
                    }
                    else {
                        processString(rowValue);
                    }
                }
            }
        });
        return Object.keys(result).map(function (key) {
            return [key, result[key]];
        });
    };
    WordCloud.prototype.renderContent = function (container) {
        var _this = this;
        var data = this.getData();
        var colors = this.getColors();
        var canvasNode = document.createElement("canvas");
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        container.appendChild(canvasNode);
        var config = {
            list: data,
            weightFactor: 20,
            fontFamily: "Segoe UI Bold, sans-serif",
            color: function (word, weight) {
                return _this.getRandomColor();
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: this.backgroundColor,
            click: function (item) {
                console.log(item[0] + ": " + item[1]);
            }
        };
        this.cloud = __WEBPACK_IMPORTED_MODULE_1_wordcloud___default()(canvasNode, config);
    };
    WordCloud.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (!!this.cloud) {
            this.cloud = undefined;
        }
    };
    return WordCloud;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", WordCloud);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Muuri v0.8.0
* https://github.com/haltu/muuri
* Copyright (c) 2015-present, Haltu Oy
* Released under the MIT license
* https://github.com/haltu/muuri/blob/master/LICENSE.md
* @license MIT
*
* Muuri Packer
* Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri Ticker / Muuri Emitter / Muuri Queue
* Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*/

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Muuri = factory());
}(this, function () { 'use strict';

  var namespace = 'Muuri';
  var gridInstances = {};

  var actionSwap = 'swap';
  var actionMove = 'move';

  var eventSynchronize = 'synchronize';
  var eventLayoutStart = 'layoutStart';
  var eventLayoutEnd = 'layoutEnd';
  var eventAdd = 'add';
  var eventRemove = 'remove';
  var eventShowStart = 'showStart';
  var eventShowEnd = 'showEnd';
  var eventHideStart = 'hideStart';
  var eventHideEnd = 'hideEnd';
  var eventFilter = 'filter';
  var eventSort = 'sort';
  var eventMove = 'move';
  var eventSend = 'send';
  var eventBeforeSend = 'beforeSend';
  var eventReceive = 'receive';
  var eventBeforeReceive = 'beforeReceive';
  var eventDragInit = 'dragInit';
  var eventDragStart = 'dragStart';
  var eventDragMove = 'dragMove';
  var eventDragScroll = 'dragScroll';
  var eventDragEnd = 'dragEnd';
  var eventDragReleaseStart = 'dragReleaseStart';
  var eventDragReleaseEnd = 'dragReleaseEnd';
  var eventDestroy = 'destroy';

  /**
   * Event emitter constructor.
   *
   * @class
   */
  function Emitter() {
    this._events = {};
    this._queue = [];
    this._counter = 0;
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Emitter}
   */
  Emitter.prototype.on = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners queue and create it if it does not exist.
    var listeners = this._events[event];
    if (!listeners) listeners = this._events[event] = [];

    // Add the listener to the queue.
    listeners.push(listener);

    return this;
  };

  /**
   * Unbind all event listeners that match the provided listener function.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} [listener]
   * @returns {Emitter}
   */
  Emitter.prototype.off = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners and return immediately if none is found.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    // If no specific listener is provided remove all listeners.
    if (!listener) {
      listeners.length = 0;
      return this;
    }

    // Remove all matching listeners.
    var i = listeners.length;
    while (i--) {
      if (listener === listeners[i]) listeners.splice(i, 1);
    }

    return this;
  };

  /**
   * Emit all listeners in a specified event with the provided arguments.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {*} [arg1]
   * @param {*} [arg2]
   * @param {*} [arg3]
   * @returns {Emitter}
   */
  Emitter.prototype.emit = function(event, arg1, arg2, arg3) {
    if (this._isDestroyed) return this;

    // Get event listeners and quit early if there's no listeners.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    var queue = this._queue;
    var qLength = queue.length;
    var aLength = arguments.length - 1;
    var i;

    // Add the current listeners to the callback queue before we process them.
    // This is necessary to guarantee that all of the listeners are called in
    // correct order even if new event listeners are removed/added during
    // processing and/or events are emitted during processing.
    for (i = 0; i < listeners.length; i++) {
      queue.push(listeners[i]);
    }

    // Increment queue counter. This is needed for the scenarios where emit is
    // triggered while the queue is already processing. We need to keep track of
    // how many "queue processors" there are active so that we can safely reset
    // the queue in the end when the last queue processor is finished.
    ++this._counter;

    // Process the queue (the specific part of it for this emit).
    for (i = qLength, qLength = queue.length; i < qLength; i++) {
      // prettier-ignore
      aLength === 0 ? queue[i]() :
      aLength === 1 ? queue[i](arg1) :
      aLength === 2 ? queue[i](arg1, arg2) :
                      queue[i](arg1, arg2, arg3);

      // Stop processing if the emitter is destroyed.
      if (this._isDestroyed) return this;
    }

    // Decrement queue process counter.
    --this._counter;

    // Reset the queue if there are no more queue processes running.
    if (!this._counter) queue.length = 0;

    return this;
  };

  /**
   * Destroy emitter instance. Basically just removes all bound listeners.
   *
   * @public
   * @memberof Emitter.prototype
   * @returns {Emitter}
   */
  Emitter.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var events = this._events;
    var event;

    // Flag as destroyed.
    this._isDestroyed = true;

    // Reset queue (if queue is currently processing this will also stop that).
    this._queue.length = this._counter = 0;

    // Remove all listeners.
    for (event in events) {
      if (events[event]) {
        events[event].length = 0;
        events[event] = undefined;
      }
    }

    return this;
  };

  // Set up the default export values.
  var transformStyle = 'transform';
  var transformProp = 'transform';

  // Find the supported transform prop and style names.
  var docElemStyle = window.document.documentElement.style;
  var style = 'transform';
  var styleCap = 'Transform';
  var found = false;
  ['', 'Webkit', 'Moz', 'O', 'ms'].forEach(function(prefix) {
    if (found) return;
    var propName = prefix ? prefix + styleCap : style;
    if (docElemStyle[propName] !== undefined) {
      prefix = prefix.toLowerCase();
      transformStyle = prefix ? '-' + prefix + '-' + style : style;
      transformProp = propName;
      found = true;
    }
  });

  var stylesCache = typeof WeakMap === 'function' ? new WeakMap() : null;

  /**
   * Returns the computed value of an element's style property as a string.
   *
   * @param {HTMLElement} element
   * @param {String} style
   * @returns {String}
   */
  function getStyle(element, style) {
    var styles = stylesCache && stylesCache.get(element);
    if (!styles) {
      styles = window.getComputedStyle(element, null);
      if (stylesCache) stylesCache.set(element, styles);
    }
    return styles.getPropertyValue(style === 'transform' ? transformStyle : style);
  }

  var styleNameRegEx = /([A-Z])/g;

  /**
   * Transforms a camel case style property to kebab case style property.
   *
   * @param {String} string
   * @returns {String}
   */
  function getStyleName(string) {
    return string.replace(styleNameRegEx, '-$1').toLowerCase();
  }

  var strFunction = 'function';

  /**
   * Check if a value is a function.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isFunction(val) {
    return typeof val === strFunction;
  }

  var transformStyle$1 = 'transform';

  /**
   * Set inline styles to an element.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   */
  function setStyles(element, styles) {
    for (var prop in styles) {
      element.style[prop === transformStyle$1 ? transformProp : prop] = styles[prop];
    }
  }

  /**
   * Item animation handler powered by Web Animations API.
   *
   * @class
   * @param {HTMLElement} element
   */
  function ItemAnimate(element) {
    this._element = element;
    this._animation = null;
    this._callback = null;
    this._props = [];
    this._values = [];
    this._keyframes = [];
    this._options = {};
    this._isDestroyed = false;
    this._onFinish = this._onFinish.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start instance's animation. Automatically stops current animation if it is
   * running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} propsFrom
   * @param {Object} propsTo
   * @param {Object} [options]
   * @param {Number} [options.duration=300]
   * @param {String} [options.easing='ease']
   * @param {Function} [options.onFinish]
   */
  ItemAnimate.prototype.start = function(propsFrom, propsTo, options) {
    if (this._isDestroyed) return;

    var animation = this._animation;
    var currentProps = this._props;
    var currentValues = this._values;
    var opts = options || 0;
    var cancelAnimation = false;

    // If we have an existing animation running, let's check if it needs to be
    // cancelled or if it can continue running.
    if (animation) {
      var propCount = 0;
      var propIndex;

      // Check if the requested animation target props and values match with the
      // current props and values.
      for (var propName in propsTo) {
        ++propCount;
        propIndex = currentProps.indexOf(propName);
        if (propIndex === -1 || propsTo[propName] !== currentValues[propIndex]) {
          cancelAnimation = true;
          break;
        }
      }

      // Check if the target props count matches current props count. This is
      // needed for the edge case scenario where target props contain the same
      // styles as current props, but the current props have some additional
      // props.
      if (!cancelAnimation && propCount !== currentProps.length) {
        cancelAnimation = true;
      }
    }

    // Cancel animation (if required).
    if (cancelAnimation) animation.cancel();

    // Store animation callback.
    this._callback = isFunction(opts.onFinish) ? opts.onFinish : null;

    // If we have a running animation that does not need to be cancelled, let's
    // call it a day here and let it run.
    if (animation && !cancelAnimation) return;

    // Store target props and values to instance.
    currentProps.length = currentValues.length = 0;
    for (propName in propsTo) {
      currentProps.push(propName);
      currentValues.push(propsTo[propName]);
    }

    // Set up keyframes.
    var animKeyframes = this._keyframes;
    animKeyframes[0] = propsFrom;
    animKeyframes[1] = propsTo;

    // Set up options.
    var animOptions = this._options;
    animOptions.duration = opts.duration || 300;
    animOptions.easing = opts.easing || 'ease';

    // Start the animation
    var element = this._element;
    animation = element.animate(animKeyframes, animOptions);
    animation.onfinish = this._onFinish;
    this._animation = animation;

    // Set the end styles. This makes sure that the element stays at the end
    // values after animation is finished.
    setStyles(element, propsTo);
  };

  /**
   * Stop instance's current animation if running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} [styles]
   */
  ItemAnimate.prototype.stop = function(styles) {
    if (this._isDestroyed || !this._animation) return;

    var element = this._element;
    var currentProps = this._props;
    var currentValues = this._values;
    var propName;
    var propValue;
    var i;

    // Calculate (if not provided) and set styles.
    if (!styles) {
      for (i = 0; i < currentProps.length; i++) {
        propName = currentProps[i];
        propValue = getStyle(element, getStyleName(propName));
        element.style[propName === 'transform' ? transformProp : propName] = propValue;
      }
    } else {
      setStyles(element, styles);
    }

    //  Cancel animation.
    this._animation.cancel();
    this._animation = this._callback = null;

    // Reset current props and values.
    currentProps.length = currentValues.length = 0;
  };

  /**
   * Check if the item is being animated currently.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @return {Boolean}
   */
  ItemAnimate.prototype.isAnimating = function() {
    return !!this._animation;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype.destroy = function() {
    if (this._isDestroyed) return;
    this.stop();
    this._element = this._options = this._keyframes = null;
    this._isDestroyed = true;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Animation end handler.
   *
   * @private
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype._onFinish = function() {
    var callback = this._callback;
    this._animation = this._callback = null;
    this._props.length = this._values.length = 0;
    callback && callback();
  };

  var vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o', 'Webkit', 'Moz', 'MS', 'O'];

  /**
   * Get prefixed CSS property name when given a non-prefixed CSS property name.
   * @param {Object} elemStyle
   * @param {String} propName
   * @returns {!String}
   */
  function getPrefixedPropName(elemStyle, propName) {
    var camelPropName = propName[0].toUpperCase() + propName.slice(1);
    var i = 0;
    var prefix;
    var prefixedPropName;

    while (i < vendorPrefixes.length) {
      prefix = vendorPrefixes[i];
      prefixedPropName = prefix ? prefix + camelPropName : propName;
      if (prefixedPropName in elemStyle) return prefixedPropName;
      ++i;
    }

    return null;
  }

  var dt = 1000 / 60;

  var raf = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      return this.setTimeout(function() {
        callback(dt);
      }, dt);
    }
  ).bind(window);

  // Detect support for passive events:
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  var isPassiveEventsSupported = false;
  try {
    var passiveOpts = Object.defineProperty({}, 'passive', {
      get: function() {
        isPassiveEventsSupported = true;
      }
    });
    window.addEventListener('testPassive', null, passiveOpts);
    window.removeEventListener('testPassive', null, passiveOpts);
  } catch (e) {}

  // Dragger events.
  var events = {
    start: 'start',
    move: 'move',
    end: 'end',
    cancel: 'cancel'
  };

  var hasTouchEvents = !!('ontouchstart' in window || window.TouchEvent);
  var hasPointerEvents = !!window.PointerEvent;
  var hasMsPointerEvents = !!window.navigator.msPointerEnabled;
  var isAndroid = /(android)/i.test(window.navigator.userAgent);
  var listenerOptions = isPassiveEventsSupported ? { passive: true } : false;

  var taProp = 'touchAction';
  var taPropPrefixed = getPrefixedPropName(window.document.documentElement.style, taProp);
  var taDefaultValue = 'auto';

  /**
   * Creates a new Dragger instance for an element.
   *
   * @public
   * @class
   * @param {HTMLElement} element
   * @param {Object} [cssProps]
   */
  function Dragger(element, cssProps) {
    this._element = element;
    this._emitter = new Emitter();
    this._isDestroyed = false;
    this._cssProps = {};
    this._touchAction = '';
    this._startEvent = null;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;

    this._preStartCheck = this._preStartCheck.bind(this);
    this._abortNonCancelable = this._abortNonCancelable.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onMove = this._onMove.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onEnd = this._onEnd.bind(this);

    // Apply initial css props.
    this.setCssProps(cssProps);

    // If touch action was not provided with initial css props let's assume it's
    // auto.
    if (!this._touchAction) {
      this.setTouchAction(taDefaultValue);
    }

    // Prevent native link/image dragging for the item and it's ancestors.
    element.addEventListener('dragstart', Dragger._preventDefault, false);

    // Listen to start event.
    element.addEventListener(Dragger._events.start, this._preStartCheck, listenerOptions);

    // If we have touch events, but no pointer events we need to also listen for
    // mouse events in addition to touch events for devices which support both
    // mouse and touch interaction.
    if (hasTouchEvents && !hasPointerEvents && !hasMsPointerEvents) {
      element.addEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    }
  }

  /**
   * Protected properties
   * ********************
   */

  Dragger._pointerEvents = {
    start: 'pointerdown',
    move: 'pointermove',
    cancel: 'pointercancel',
    end: 'pointerup'
  };

  Dragger._msPointerEvents = {
    start: 'MSPointerDown',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel',
    end: 'MSPointerUp'
  };

  Dragger._touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    cancel: 'touchcancel',
    end: 'touchend'
  };

  Dragger._mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    cancel: '',
    end: 'mouseup'
  };

  Dragger._events = (function() {
    if (hasPointerEvents) return Dragger._pointerEvents;
    if (hasMsPointerEvents) return Dragger._msPointerEvents;
    if (hasTouchEvents) return Dragger._touchEvents;
    return Dragger._mouseEvents;
  })();

  Dragger._emitter = new Emitter();

  Dragger._activeInstances = [];

  /**
   * Protected static methods
   * ************************
   */

  Dragger._preventDefault = function(e) {
    if (e.preventDefault && e.cancelable !== false) e.preventDefault();
  };

  Dragger._activateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index > -1) return;

    Dragger._activeInstances.push(instance);
    Dragger._emitter.on(events.move, instance._onMove);
    Dragger._emitter.on(events.cancel, instance._onCancel);
    Dragger._emitter.on(events.end, instance._onEnd);

    if (Dragger._activeInstances.length === 1) {
      Dragger._bindListeners();
    }
  };

  Dragger._deactivateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index === -1) return;

    Dragger._activeInstances.splice(index, 1);
    Dragger._emitter.off(events.move, instance._onMove);
    Dragger._emitter.off(events.cancel, instance._onCancel);
    Dragger._emitter.off(events.end, instance._onEnd);

    if (!Dragger._activeInstances.length) {
      Dragger._unbindListeners();
    }
  };

  Dragger._bindListeners = function() {
    var events = Dragger._events;
    window.addEventListener(events.move, Dragger._onMove, listenerOptions);
    window.addEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.addEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._unbindListeners = function() {
    var events = Dragger._events;
    window.removeEventListener(events.move, Dragger._onMove, listenerOptions);
    window.removeEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.removeEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._getEventPointerId = function(event) {
    // If we have pointer id available let's use it.
    if (typeof event.pointerId === 'number') {
      return event.pointerId;
    }

    // For touch events let's get the first changed touch's identifier.
    if (event.changedTouches) {
      return event.changedTouches[0] ? event.changedTouches[0].identifier : null;
    }

    // For mouse/other events let's provide a static id.
    return 1;
  };

  Dragger._getTouchById = function(event, id) {
    // If we have a pointer event return the whole event if there's a match, and
    // null otherwise.
    if (typeof event.pointerId === 'number') {
      return event.pointerId === id ? event : null;
    }

    // For touch events let's check if there's a changed touch object that matches
    // the pointerId in which case return the touch object.
    if (event.changedTouches) {
      for (var i = 0; i < event.changedTouches.length; i++) {
        if (event.changedTouches[i].identifier === id) {
          return event.changedTouches[i];
        }
      }
      return null;
    }

    // For mouse/other events let's assume there's only one pointer and just
    // return the event.
    return event;
  };

  Dragger._onMove = function(e) {
    Dragger._emitter.emit(events.move, e);
  };

  Dragger._onCancel = function(e) {
    Dragger._emitter.emit(events.cancel, e);
  };

  Dragger._onEnd = function(e) {
    Dragger._emitter.emit(events.end, e);
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset current drag operation (if any).
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._reset = function() {
    if (this._isDestroyed) return;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;
    this._startEvent = null;

    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    Dragger._deactivateInstance(this);
  };

  /**
   * Create a custom dragger event from a raw event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   * @returns {DraggerEvent}
   */
  Dragger.prototype._createEvent = function(type, e) {
    var touch = this._getTrackedTouch(e);
    return {
      // Hammer.js compatibility interface.
      type: type,
      srcEvent: e,
      distance: this.getDistance(),
      deltaX: this.getDeltaX(),
      deltaY: this.getDeltaY(),
      deltaTime: type === events.start ? 0 : this.getDeltaTime(),
      isFirst: type === events.start,
      isFinal: type === events.end || type === events.cancel,
      // Partial Touch API interface.
      identifier: this._pointerId,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      target: touch.target
    };
  };

  /**
   * Emit a raw event as dragger event internally.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._emit = function(type, e) {
    this._emitter.emit(type, this._createEvent(type, e));
  };

  /**
   * If the provided event is a PointerEvent this method will return it if it has
   * the same pointerId as the instance. If the provided event is a TouchEvent
   * this method will try to look for a Touch instance in the changedTouches that
   * has an identifier matching this instance's pointerId. If the provided event
   * is a MouseEvent (or just any other event than PointerEvent or TouchEvent)
   * it will be returned immediately.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)}
   * @returns {?(Touch|PointerEvent|MouseEvent)}
   */
  Dragger.prototype._getTrackedTouch = function(e) {
    if (this._pointerId === null) {
      return null;
    } else {
      return Dragger._getTouchById(e, this._pointerId);
    }
  };

  /**
   * A pre-handler for start event that checks if we can start dragging.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._preStartCheck = function(e) {
    if (this._isDestroyed) return;

    // Make sure the element is not being dragged currently.
    if (this.isDragging()) return;

    // Special cancelable check for Android to prevent drag procedure from
    // starting if native scrolling is in progress. Part 1.
    if (isAndroid && e.cancelable === false) return;

    // Make sure left button is pressed on mouse.
    if (e.button) return;

    // Get (and set) pointer id.
    this._pointerId = Dragger._getEventPointerId(e);
    if (this._pointerId === null) return;

    // Store the start event and trigger start (async or sync). Pointer events
    // are emitted before touch events if the browser supports both of them. And
    // if you try to move an element before `touchstart` is emitted the pointer
    // events for that element will be canceled. The fix is to delay the emitted
    // pointer events in such a scenario by one frame so that `touchstart` has
    // time to be emitted before the element is (potentially) moved.
    this._startEvent = e;
    if (hasTouchEvents && (hasPointerEvents || hasMsPointerEvents)) {
      // Special cancelable check for Android to prevent drag procedure from
      // starting if native scrolling is in progress. Part 2.
      if (isAndroid) {
        this._element.addEventListener(
          Dragger._touchEvents.start,
          this._abortNonCancelable,
          listenerOptions
        );
      }
      raf(this._onStart);
    } else {
      this._onStart();
    }
  };

  /**
   * Abort start event if it turns out to be non-cancelable.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._abortNonCancelable = function(e) {
    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    if (this._startEvent && e.cancelable === false) {
      this._pointerId = null;
      this._startEvent = null;
    }
  };

  /**
   * Start the drag procedure if possible.
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._onStart = function() {
    var e = this._startEvent;
    if (!e) return;

    this._startEvent = null;

    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    // Set up init data and emit start event.
    this._startX = this._currentX = touch.clientX;
    this._startY = this._currentY = touch.clientY;
    this._startTime = Date.now();
    this._emit(events.start, e);
    Dragger._activateInstance(this);
  };

  /**
   * Handler for move event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onMove = function(e) {
    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    this._currentX = touch.clientX;
    this._currentY = touch.clientY;
    this._emit(events.move, e);
  };

  /**
   * Handler for move cancel event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onCancel = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.cancel, e);
    this._reset();
  };

  /**
   * Handler for end event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onEnd = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.end, e);
    this._reset();
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Check if the element is being dragged at the moment.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Boolean}
   */
  Dragger.prototype.isDragging = function() {
    return this._pointerId !== null;
  };

  /**
   * Set element's touch-action CSS property.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} value
   */
  Dragger.prototype.setTouchAction = function(value) {
    // Store unmodified touch action value (we trust user input here).
    this._touchAction = value;

    // Set touch-action style.
    if (taPropPrefixed) {
      this._cssProps[taPropPrefixed] = '';
      this._element.style[taPropPrefixed] = value;
    }

    // If we have an unsupported touch-action value let's add a special listener
    // that prevents default action on touch start event. A dirty hack, but best
    // we can do for now. The other options would be to somehow polyfill the
    // unsupported touch action behavior with custom heuristics which sounds like
    // a can of worms.
    if (hasTouchEvents) {
      this._element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      if (this._element.style[taPropPrefixed] !== value) {
        this._element.addEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      }
    }
  };

  /**
   * Update element's CSS properties. Accepts an object with camel cased style
   * props with value pairs as it's first argument.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {Object} [newProps]
   */
  Dragger.prototype.setCssProps = function(newProps) {
    if (!newProps) return;

    var currentProps = this._cssProps;
    var element = this._element;
    var prop;
    var prefixedProp;

    // Reset current props.
    for (prop in currentProps) {
      element.style[prop] = currentProps[prop];
      delete currentProps[prop];
    }

    // Set new props.
    for (prop in newProps) {
      // Make sure we have a value for the prop.
      if (!newProps[prop]) continue;

      // Special handling for touch-action.
      if (prop === taProp) {
        this.setTouchAction(newProps[prop]);
        continue;
      }

      // Get prefixed prop and skip if it does not exist.
      prefixedProp = getPrefixedPropName(element.style, prop);
      if (!prefixedProp) continue;

      // Store the prop and add the style.
      currentProps[prefixedProp] = '';
      element.style[prefixedProp] = newProps[prop];
    }
  };

  /**
   * How much the pointer has moved on x-axis from start position, in pixels.
   * Positive value indicates movement from left to right.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaX = function() {
    return this._currentX - this._startX;
  };

  /**
   * How much the pointer has moved on y-axis from start position, in pixels.
   * Positive value indicates movement from top to bottom.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaY = function() {
    return this._currentY - this._startY;
  };

  /**
   * How far (in pixels) has pointer moved from start position.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDistance = function() {
    var x = this.getDeltaX();
    var y = this.getDeltaY();
    return Math.sqrt(x * x + y * y);
  };

  /**
   * How long has pointer been dragged.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaTime = function() {
    return this._startTime ? Date.now() - this._startTime : 0;
  };

  /**
   * Bind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.on = function(eventName, listener) {
    this._emitter.on(eventName, listener);
  };

  /**
   * Unbind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.off = function(events, listener) {
    this._emitter.off(eventName, listener);
  };

  /**
   * Destroy the instance and unbind all drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   */
  Dragger.prototype.destroy = function() {
    if (this._isDestroyed) return;

    var element = this._element;
    var events = Dragger._events;

    // Reset data and deactivate the instance.
    this._reset();

    // Destroy emitter.
    this._emitter.destroy();

    // Unbind event handlers.
    element.removeEventListener(events.start, this._preStartCheck, listenerOptions);
    element.removeEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    element.removeEventListener('dragstart', Dragger._preventDefault, false);
    element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);

    // Reset styles.
    for (var prop in this._cssProps) {
      element.style[prop] = this._cssProps[prop];
      delete this._cssProps[prop];
    }

    // Reset data.
    this._element = null;

    // Mark as destroyed.
    this._isDestroyed = true;
  };

  /**
   * A ticker system for handling DOM reads and writes in an efficient way.
   * Contains a read queue and a write queue that are processed on the next
   * animation frame when needed.
   *
   * @class
   */
  function Ticker() {
    this._nextStep = null;

    this._queue = [];
    this._reads = {};
    this._writes = {};

    this._batch = [];
    this._batchReads = {};
    this._batchWrites = {};

    this._step = this._step.bind(this);
  }

  Ticker.prototype.add = function(id, readOperation, writeOperation, isPrioritized) {
    // First, let's check if an item has been added to the queues with the same id
    // and if so -> remove it.
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) this._queue[currentIndex] = undefined;

    // Add entry.
    isPrioritized ? this._queue.unshift(id) : this._queue.push(id);
    this._reads[id] = readOperation;
    this._writes[id] = writeOperation;

    // Finally, let's kick-start the next tick if it is not running yet.
    if (!this._nextStep) this._nextStep = raf(this._step);
  };

  Ticker.prototype.cancel = function(id) {
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) {
      this._queue[currentIndex] = undefined;
      delete this._reads[id];
      delete this._writes[id];
    }
  };

  Ticker.prototype._step = function() {
    var queue = this._queue;
    var reads = this._reads;
    var writes = this._writes;
    var batch = this._batch;
    var batchReads = this._batchReads;
    var batchWrites = this._batchWrites;
    var length = queue.length;
    var id;
    var i;

    // Reset ticker.
    this._nextStep = null;

    // Setup queues and callback placeholders.
    for (i = 0; i < length; i++) {
      id = queue[i];
      if (!id) continue;

      batch.push(id);

      batchReads[id] = reads[id];
      delete reads[id];

      batchWrites[id] = writes[id];
      delete writes[id];
    }

    // Reset queue.
    queue.length = 0;

    // Process read callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchReads[id]) {
        batchReads[id]();
        delete batchReads[id];
      }
    }

    // Process write callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchWrites[id]) {
        batchWrites[id]();
        delete batchWrites[id];
      }
    }

    // Reset batch.
    batch.length = 0;

    // Restart the ticker if needed.
    if (!this._nextStep && queue.length) {
      this._nextStep = raf(this._step);
    }
  };

  var ticker = new Ticker();

  var layoutTick = 'layout';
  var visibilityTick = 'visibility';
  var moveTick = 'move';
  var scrollTick = 'scroll';
  var placeholderTick = 'placeholder';

  function addLayoutTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + layoutTick, readCallback, writeCallback);
  }

  function cancelLayoutTick(itemId) {
    return ticker.cancel(itemId + layoutTick);
  }

  function addVisibilityTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + visibilityTick, readCallback, writeCallback);
  }

  function cancelVisibilityTick(itemId) {
    return ticker.cancel(itemId + visibilityTick);
  }

  function addMoveTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + moveTick, readCallback, writeCallback, true);
  }

  function cancelMoveTick(itemId) {
    return ticker.cancel(itemId + moveTick);
  }

  function addScrollTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + scrollTick, readCallback, writeCallback, true);
  }

  function cancelScrollTick(itemId) {
    return ticker.cancel(itemId + scrollTick);
  }

  function addPlaceholderTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + placeholderTick, readCallback, writeCallback);
  }

  function cancelPlaceholderTick(itemId) {
    return ticker.cancel(itemId + placeholderTick);
  }

  var ElProto = window.Element.prototype;
  var matchesFn =
    ElProto.matches ||
    ElProto.matchesSelector ||
    ElProto.webkitMatchesSelector ||
    ElProto.mozMatchesSelector ||
    ElProto.msMatchesSelector ||
    ElProto.oMatchesSelector ||
    function() {
      return false;
    };

  /**
   * Check if element matches a CSS selector.
   *
   * @param {Element} el
   * @param {String} selector
   * @returns {Boolean}
   */
  function elementMatches(el, selector) {
    return matchesFn.call(el, selector);
  }

  /**
   * Add class to an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!elementMatches(element, '.' + className)) {
        element.className += ' ' + className;
      }
    }
  }

  var tempArray = [];
  var numberType = 'number';

  /**
   * Insert an item or an array of items to array to a specified index. Mutates
   * the array. The index can be negative in which case the items will be added
   * to the end of the array.
   *
   * @param {Array} array
   * @param {*} items
   * @param {Number} [index=-1]
   */
  function arrayInsert(array, items, index) {
    var startIndex = typeof index === numberType ? index : -1;
    if (startIndex < 0) startIndex = array.length - startIndex + 1;

    array.splice.apply(array, tempArray.concat(startIndex, 0, items));
    tempArray.length = 0;
  }

  /**
   * Normalize array index. Basically this function makes sure that the provided
   * array index is within the bounds of the provided array and also transforms
   * negative index to the matching positive index.
   *
   * @param {Array} array
   * @param {Number} index
   * @param {Boolean} isMigration
   */
  function normalizeArrayIndex(array, index, isMigration) {
    var length = array.length;
    var maxIndex = Math.max(0, isMigration ? length : length - 1);
    return index > maxIndex ? maxIndex : index < 0 ? Math.max(maxIndex + index + 1, 0) : index;
  }

  /**
   * Move array item to another index.
   *
   * @param {Array} array
   * @param {Number} fromIndex
   *   - Index (positive or negative) of the item that will be moved.
   * @param {Number} toIndex
   *   - Index (positive or negative) where the item should be moved to.
   */
  function arrayMove(array, fromIndex, toIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var from = normalizeArrayIndex(array, fromIndex);
    var to = normalizeArrayIndex(array, toIndex);

    // Add target item to the new position.
    if (from !== to) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }

  /**
   * Swap array items.
   *
   * @param {Array} array
   * @param {Number} index
   *   - Index (positive or negative) of the item that will be swapped.
   * @param {Number} withIndex
   *   - Index (positive or negative) of the other item that will be swapped.
   */
  function arraySwap(array, index, withIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var indexA = normalizeArrayIndex(array, index);
    var indexB = normalizeArrayIndex(array, withIndex);
    var temp;

    // Swap the items.
    if (indexA !== indexB) {
      temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
    }
  }

  var actionCancel = 'cancel';
  var actionFinish = 'finish';
  var debounceTick = 'debounce';
  var debounceId = 0;

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. The returned function accepts one argument which, when
   * being "finish", calls the debounce function immediately if it is currently
   * waiting to be called, and when being "cancel" cancels the currently queued
   * function call.
   *
   * @param {Function} fn
   * @param {Number} wait
   * @returns {Function}
   */
  function debounce(fn, wait) {
    var timeout;
    var tickerId = ++debounceId + debounceTick;

    if (wait > 0) {
      return function(action) {
        if (timeout !== undefined) {
          timeout = window.clearTimeout(timeout);
          ticker.cancel(tickerId);
          if (action === actionFinish) fn();
        }

        if (action !== actionCancel && action !== actionFinish) {
          timeout = window.setTimeout(function() {
            timeout = undefined;
            ticker.add(tickerId, fn, null, true);
          }, wait);
        }
      };
    }

    return function(action) {
      if (action !== actionCancel) fn();
    };
  }

  /**
   * Returns true if element is transformed, false if not. In practice the
   * element's display value must be anything else than "none" or "inline" as
   * well as have a valid transform value applied in order to be counted as a
   * transformed element.
   *
   * Borrowed from Mezr (v0.6.1):
   * https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L661
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isTransformed(element) {
    var transform = getStyle(element, 'transform');
    if (!transform || transform === 'none') return false;

    var display = getStyle(element, 'display');
    if (display === 'inline' || display === 'none') return false;

    return true;
  }

  /**
   * Returns an absolute positioned element's containing block, which is
   * considered to be the closest ancestor element that the target element's
   * positioning is relative to. Disclaimer: this only works as intended for
   * absolute positioned elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   *   - When this is set to true the containing block checking is started from
   *     the provided element. Otherwise the checking is started from the
   *     provided element's parent element.
   * @returns {(Document|Element)}
   */
  function getContainingBlock(element, includeSelf) {
    // As long as the containing block is an element, static and not
    // transformed, try to get the element's parent element and fallback to
    // document. https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L339
    var document = window.document;
    var ret = (includeSelf ? element : element.parentElement) || document;
    while (ret && ret !== document && getStyle(ret, 'position') === 'static' && !isTransformed(ret)) {
      ret = ret.parentElement || document;
    }
    return ret;
  }

  /**
   * Returns the computed value of an element's style property transformed into
   * a float value.
   *
   * @param {HTMLElement} el
   * @param {String} style
   * @returns {Number}
   */
  function getStyleAsFloat(el, style) {
    return parseFloat(getStyle(el, style)) || 0;
  }

  var offsetA = {};
  var offsetB = {};
  var offsetDiff = {};

  /**
   * Returns the element's document offset, which in practice means the vertical
   * and horizontal distance between the element's northwest corner and the
   * document's northwest corner. Note that this function always returns the same
   * object so be sure to read the data from it instead using it as a reference.
   *
   * @param {(Document|Element|Window)} element
   * @param {Object} [offsetData]
   *   - Optional data object where the offset data will be inserted to. If not
   *     provided a new object will be created for the return data.
   * @returns {Object}
   */
  function getOffset(element, offsetData) {
    var ret = offsetData || {};
    var rect;

    // Set up return data.
    ret.left = 0;
    ret.top = 0;

    // Document's offsets are always 0.
    if (element === document) return ret;

    // Add viewport scroll left/top to the respective offsets.
    ret.left = window.pageXOffset || 0;
    ret.top = window.pageYOffset || 0;

    // Window's offsets are the viewport scroll left/top values.
    if (element.self === window.self) return ret;

    // Add element's client rects to the offsets.
    rect = element.getBoundingClientRect();
    ret.left += rect.left;
    ret.top += rect.top;

    // Exclude element's borders from the offset.
    ret.left += getStyleAsFloat(element, 'border-left-width');
    ret.top += getStyleAsFloat(element, 'border-top-width');

    return ret;
  }

  /**
   * Calculate the offset difference two elements.
   *
   * @param {HTMLElement} elemA
   * @param {HTMLElement} elemB
   * @param {Boolean} [compareContainingBlocks=false]
   *   - When this is set to true the containing blocks of the provided elements
   *     will be used for calculating the difference. Otherwise the provided
   *     elements will be compared directly.
   * @returns {Object}
   */
  function getOffsetDiff(elemA, elemB, compareContainingBlocks) {
    offsetDiff.left = 0;
    offsetDiff.top = 0;

    // If elements are same let's return early.
    if (elemA === elemB) return offsetDiff;

    // Compare containing blocks if necessary.
    if (compareContainingBlocks) {
      elemA = getContainingBlock(elemA, true);
      elemB = getContainingBlock(elemB, true);

      // If containing blocks are identical, let's return early.
      if (elemA === elemB) return offsetDiff;
    }

    // Finally, let's calculate the offset diff.
    getOffset(elemA, offsetA);
    getOffset(elemB, offsetB);
    offsetDiff.left = offsetB.left - offsetA.left;
    offsetDiff.top = offsetB.top - offsetA.top;

    return offsetDiff;
  }

  var styleOverflow = 'overflow';
  var styleOverflowX = 'overflow-x';
  var styleOverflowY = 'overflow-y';
  var overflowAuto = 'auto';
  var overflowScroll = 'scroll';

  /**
   * Check if an element is scrollable.
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isScrollable(element) {
    var overflow = getStyle(element, styleOverflow);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowX);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowY);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    return false;
  }

  /**
   * Collect element's ancestors that are potentially scrollable elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   * @param {Array} [data]
   * @returns {Array}
   */
  function getScrollableAncestors(element, includeSelf, data) {
    var ret = data || [];
    var parent = includeSelf ? element : element.parentNode;

    // Find scroll parents.
    while (parent && parent !== document) {
      // If element is inside ShadowDOM let's get it's host node from the real
      // DOM and continue looping.
      if (parent.getRootNode && parent instanceof DocumentFragment) {
        parent = parent.getRootNode().host;
        continue;
      }

      // If element is scrollable let's add it to the scrollable list.
      if (isScrollable(parent)) {
        ret.push(parent);
      }

      parent = parent.parentNode;
    }

    // Always add window to the results.
    ret.push(window);

    return ret;
  }

  var translateValue = {};
  var transformStyle$2 = 'transform';
  var transformNone = 'none';
  var rxMat3d = /^matrix3d/;
  var rxMatTx = /([^,]*,){4}/;
  var rxMat3dTx = /([^,]*,){12}/;
  var rxNextItem = /[^,]*,/;

  /**
   * Returns the element's computed translateX and translateY values as a floats.
   * The returned object is always the same object and updated every time this
   * function is called.
   *
   * @param {HTMLElement} element
   * @returns {Object}
   */
  function getTranslate(element) {
    translateValue.x = 0;
    translateValue.y = 0;

    var transform = getStyle(element, transformStyle$2);
    if (!transform || transform === transformNone) {
      return translateValue;
    }

    // Transform style can be in either matrix3d(...) or matrix(...).
    var isMat3d = rxMat3d.test(transform);
    var tX = transform.replace(isMat3d ? rxMat3dTx : rxMatTx, '');
    var tY = tX.replace(rxNextItem, '');

    translateValue.x = parseFloat(tX) || 0;
    translateValue.y = parseFloat(tY) || 0;

    return translateValue;
  }

  /**
   * Transform translateX and translateY value into CSS transform style
   * property's value.
   *
   * @param {Number} x
   * @param {Number} y
   * @returns {String}
   */
  function getTranslateString(x, y) {
    return 'translateX(' + x + 'px) translateY(' + y + 'px)';
  }

  /**
   * Remove class from an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (elementMatches(element, '.' + className)) {
        element.className = (' ' + element.className + ' ')
          .replace(' ' + className + ' ', ' ')
          .trim();
      }
    }
  }

  // Drag start predicate states.
  var startPredicateInactive = 0;
  var startPredicatePending = 1;
  var startPredicateResolved = 2;
  var startPredicateRejected = 3;

  /**
   * Bind touch interaction to an item.
   *
   * @class
   * @param {Item} item
   */
  function ItemDrag(item) {
    var element = item._element;
    var grid = item.getGrid();
    var settings = grid._settings;

    this._item = item;
    this._gridId = grid._id;
    this._isDestroyed = false;
    this._isMigrating = false;

    // Start predicate data.
    this._startPredicate = isFunction(settings.dragStartPredicate)
      ? settings.dragStartPredicate
      : ItemDrag.defaultStartPredicate;
    this._startPredicateState = startPredicateInactive;
    this._startPredicateResult = undefined;

    // Data for drag sort predicate heuristics.
    this._hBlockedIndex = null;
    this._hX1 = 0;
    this._hX2 = 0;
    this._hY1 = 0;
    this._hY2 = 0;

    // Setup item's initial drag data.
    this._reset();

    // Bind the methods that needs binding.
    this._preStartCheck = this._preStartCheck.bind(this);
    this._preEndCheck = this._preEndCheck.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._prepareMove = this._prepareMove.bind(this);
    this._applyMove = this._applyMove.bind(this);
    this._prepareScroll = this._prepareScroll.bind(this);
    this._applyScroll = this._applyScroll.bind(this);
    this._checkOverlap = this._checkOverlap.bind(this);

    // Create debounce overlap checker function.
    var sortInterval = settings.dragSortHeuristics.sortInterval;
    this._checkOverlapDebounce = debounce(this._checkOverlap, sortInterval);

    // Init dragger.
    this._dragger = new Dragger(element, settings.dragCssProps);
    this._dragger.on('start', this._preStartCheck);
    this._dragger.on('move', this._preStartCheck);
    this._dragger.on('cancel', this._preEndCheck);
    this._dragger.on('end', this._preEndCheck);
  }

  /**
   * Public static methods
   * *********************
   */

  /**
   * Default drag start predicate handler that handles anchor elements
   * gracefully. The return value of this function defines if the drag is
   * started, rejected or pending. When true is returned the dragging is started
   * and when false is returned the dragging is rejected. If nothing is returned
   * the predicate will be called again on the next drag movement.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {DraggerEvent} event
   * @param {Object} [options]
   *   - An optional options object which can be used to pass the predicate
   *     it's options manually. By default the predicate retrieves the options
   *     from the grid's settings.
   * @returns {Boolean}
   */
  ItemDrag.defaultStartPredicate = function(item, event, options) {
    var drag = item._drag;
    var predicate = drag._startPredicateData || drag._setupStartPredicate(options);

    // Final event logic. At this stage return value does not matter anymore,
    // the predicate is either resolved or it's not and there's nothing to do
    // about it. Here we just reset data and if the item element is a link
    // we follow it (if there has only been slight movement).
    if (event.isFinal) {
      drag._finishStartPredicate(event);
      return;
    }

    // Find and store the handle element so we can check later on if the
    // cursor is within the handle. If we have a handle selector let's find
    // the corresponding element. Otherwise let's use the item element as the
    // handle.
    if (!predicate.handleElement) {
      predicate.handleElement = drag._getStartPredicateHandle(event);
      if (!predicate.handleElement) return false;
    }

    // If delay is defined let's keep track of the latest event and initiate
    // delay if it has not been done yet.
    if (predicate.delay) {
      predicate.event = event;
      if (!predicate.delayTimer) {
        predicate.delayTimer = window.setTimeout(function() {
          predicate.delay = 0;
          if (drag._resolveStartPredicate(predicate.event)) {
            drag._forceResolveStartPredicate(predicate.event);
            drag._resetStartPredicate();
          }
        }, predicate.delay);
      }
    }

    return drag._resolveStartPredicate(event);
  };

  /**
   * Default drag sort predicate.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {Object} [options]
   * @param {Number} [options.threshold=50]
   * @param {String} [options.action='move']
   * @returns {(Boolean|DragSortCommand)}
   *   - Returns false if no valid index was found. Otherwise returns drag sort
   *     command.
   */
  ItemDrag.defaultSortPredicate = (function() {
    var itemRect = {};
    var targetRect = {};
    var returnData = {};
    var rootGridArray = [];

    function getTargetGrid(item, rootGrid, threshold) {
      var target = null;
      var dragSort = rootGrid._settings.dragSort;
      var bestScore = -1;
      var gridScore;
      var grids;
      var grid;
      var i;

      // Get potential target grids.
      if (dragSort === true) {
        rootGridArray[0] = rootGrid;
        grids = rootGridArray;
      } else {
        grids = dragSort.call(rootGrid, item);
      }

      // Return immediately if there are no grids.
      if (!Array.isArray(grids)) return target;

      // Loop through the grids and get the best match.
      for (i = 0; i < grids.length; i++) {
        grid = grids[i];

        // Filter out all destroyed grids.
        if (grid._isDestroyed) continue;

        // We need to update the grid's offsets and dimensions since they might
        // have changed (e.g during scrolling).
        grid._updateBoundingRect();

        // Check how much dragged element overlaps the container element.
        targetRect.width = grid._width;
        targetRect.height = grid._height;
        targetRect.left = grid._left;
        targetRect.top = grid._top;
        gridScore = getRectOverlapScore(itemRect, targetRect);

        // Check if this grid is the best match so far.
        if (gridScore > threshold && gridScore > bestScore) {
          bestScore = gridScore;
          target = grid;
        }
      }

      // Always reset root grid array.
      rootGridArray.length = 0;

      return target;
    }

    return function(item, options) {
      var drag = item._drag;
      var rootGrid = drag._getGrid();

      // Get drag sort predicate settings.
      var sortThreshold = options && typeof options.threshold === 'number' ? options.threshold : 50;
      var sortAction = options && options.action === actionSwap ? actionSwap : actionMove;

      // Populate item rect data.
      itemRect.width = item._width;
      itemRect.height = item._height;
      itemRect.left = drag._elementClientX;
      itemRect.top = drag._elementClientY;

      // Calculate the target grid.
      var grid = getTargetGrid(item, rootGrid, sortThreshold);

      // Return early if we found no grid container element that overlaps the
      // dragged item enough.
      if (!grid) return false;

      var gridOffsetLeft = 0;
      var gridOffsetTop = 0;
      var matchScore = -1;
      var matchIndex;
      var hasValidTargets;
      var target;
      var score;
      var i;

      // If item is moved within it's originating grid adjust item's left and
      // top props. Otherwise if item is moved to/within another grid get the
      // container element's offset (from the element's content edge).
      if (grid === rootGrid) {
        itemRect.left = drag._gridX + item._marginLeft;
        itemRect.top = drag._gridY + item._marginTop;
      } else {
        grid._updateBorders(1, 0, 1, 0);
        gridOffsetLeft = grid._left + grid._borderLeft;
        gridOffsetTop = grid._top + grid._borderTop;
      }

      // Loop through the target grid items and try to find the best match.
      for (i = 0; i < grid._items.length; i++) {
        target = grid._items[i];

        // If the target item is not active or the target item is the dragged
        // item let's skip to the next item.
        if (!target._isActive || target === item) {
          continue;
        }

        // Mark the grid as having valid target items.
        hasValidTargets = true;

        // Calculate the target's overlap score with the dragged item.
        targetRect.width = target._width;
        targetRect.height = target._height;
        targetRect.left = target._left + target._marginLeft + gridOffsetLeft;
        targetRect.top = target._top + target._marginTop + gridOffsetTop;
        score = getRectOverlapScore(itemRect, targetRect);

        // Update best match index and score if the target's overlap score with
        // the dragged item is higher than the current best match score.
        if (score > matchScore) {
          matchIndex = i;
          matchScore = score;
        }
      }

      // If there is no valid match and the item is being moved into another
      // grid.
      if (matchScore < sortThreshold && item.getGrid() !== grid) {
        matchIndex = hasValidTargets ? -1 : 0;
        matchScore = Infinity;
      }

      // Check if the best match overlaps enough to justify a placement switch.
      if (matchScore >= sortThreshold) {
        returnData.grid = grid;
        returnData.index = matchIndex;
        returnData.action = sortAction;
        return returnData;
      }

      return false;
    };
  })();

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Abort dragging and reset drag data.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.stop = function() {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();

    if (!this._isActive) return this;

    // If the item is being dropped into another grid, finish it up and return
    // immediately.
    if (this._isMigrating) {
      this._finishMigration();
      return this;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Cancel overlap check.
    this._checkOverlapDebounce('cancel');

    // Append item element to the container if it's not it's child. Also make
    // sure the translate values are adjusted to account for the DOM shift.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
      element.style[transformProp] = getTranslateString(this._gridX, this._gridY);
    }

    // Remove dragging class.
    removeClass(element, grid._settings.itemDraggingClass);

    // Reset drag data.
    this._reset();

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop();
    this._dragger.destroy();
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get Grid instance.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @returns {?Grid}
   */
  ItemDrag.prototype._getGrid = function() {
    return gridInstances[this._gridId] || null;
  };

  /**
   * Setup/reset drag data.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._reset = function() {
    // Is item being dragged?
    this._isActive = false;

    // The dragged item's container element.
    this._container = null;

    // The dragged item's containing block.
    this._containingBlock = null;

    // Drag/scroll event data.
    this._dragEvent = null;
    this._scrollEvent = null;

    // All the elements which need to be listened for scroll events during
    // dragging.
    this._scrollers = [];

    // The current translateX/translateY position.
    this._left = 0;
    this._top = 0;

    // Dragged element's current position within the grid.
    this._gridX = 0;
    this._gridY = 0;

    // Dragged element's current offset from window's northwest corner. Does
    // not account for element's margins.
    this._elementClientX = 0;
    this._elementClientY = 0;

    // Offset difference between the dragged element's temporary drag
    // container and it's original container.
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  };

  /**
   * Bind drag scroll handlers to all scrollable ancestor elements of the
   * dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._bindScrollListeners = function() {
    var gridContainer = this._getGrid()._element;
    var dragContainer = this._container;
    var scrollers = this._scrollers;
    var gridScrollers;
    var i;

    // Get dragged element's scrolling parents.
    scrollers.length = 0;
    getScrollableAncestors(this._item._element, false, scrollers);

    // If drag container is defined and it's not the same element as grid
    // container then we need to add the grid container and it's scroll parents
    // to the elements which are going to be listener for scroll events.
    if (dragContainer !== gridContainer) {
      gridScrollers = [];
      getScrollableAncestors(gridContainer, true, gridScrollers);
      for (i = 0; i < gridScrollers.length; i++) {
        if (scrollers.indexOf(gridScrollers[i]) < 0) {
          scrollers.push(gridScrollers[i]);
        }
      }
    }

    // Bind scroll listeners.
    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].addEventListener('scroll', this._onScroll);
    }
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._unbindScrollListeners = function() {
    var scrollers = this._scrollers;
    var i;

    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].removeEventListener('scroll', this._onScroll);
    }

    scrollers.length = 0;
  };

  /**
   * Setup default start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Object} [options]
   * @returns {Object}
   */
  ItemDrag.prototype._setupStartPredicate = function(options) {
    var config = options || this._getGrid()._settings.dragStartPredicate || 0;
    return (this._startPredicateData = {
      distance: Math.abs(config.distance) || 0,
      delay: Math.max(config.delay, 0) || 0,
      handle: typeof config.handle === 'string' ? config.handle : false
    });
  };

  /**
   * Setup default start predicate handle.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {?HTMLElement}
   */
  ItemDrag.prototype._getStartPredicateHandle = function(event) {
    var predicate = this._startPredicateData;
    var element = this._item._element;
    var handleElement = element;

    // No handle, no hassle -> let's use the item element as the handle.
    if (!predicate.handle) return handleElement;

    // If there is a specific predicate handle defined, let's try to get it.
    handleElement = event.target;
    while (handleElement && !elementMatches(handleElement, predicate.handle)) {
      handleElement = handleElement !== element ? handleElement.parentElement : null;
    }
    return handleElement || null;
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._resolveStartPredicate = function(event) {
    var predicate = this._startPredicateData;

    // If the moved distance is smaller than the threshold distance or there is
    // some delay left, ignore this predicate cycle.
    if (event.distance < predicate.distance || predicate.delay) return;

    // Get handle rect data.
    var handleRect = predicate.handleElement.getBoundingClientRect();
    var handleLeft = handleRect.left + (window.pageXOffset || 0);
    var handleTop = handleRect.top + (window.pageYOffset || 0);
    var handleWidth = handleRect.width;
    var handleHeight = handleRect.height;

    // Reset predicate data.
    this._resetStartPredicate();

    // If the cursor is still within the handle let's start the drag.
    return (
      handleWidth &&
      handleHeight &&
      event.pageX >= handleLeft &&
      event.pageX < handleLeft + handleWidth &&
      event.pageY >= handleTop &&
      event.pageY < handleTop + handleHeight
    );
  };

  /**
   * Forcefully resolve drag start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._forceResolveStartPredicate = function(event) {
    if (!this._isDestroyed && this._startPredicateState === startPredicatePending) {
      this._startPredicateState = startPredicateResolved;
      this._onStart(event);
    }
  };

  /**
   * Finalize start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._finishStartPredicate = function(event) {
    var element = this._item._element;

    // Check if this is a click (very subjective heuristics).
    var isClick = Math.abs(event.deltaX) < 2 && Math.abs(event.deltaY) < 2 && event.deltaTime < 200;

    // Reset predicate.
    this._resetStartPredicate();

    // If the gesture can be interpreted as click let's try to open the element's
    // href url (if it is an anchor element).
    if (isClick) openAnchorHref(element);
  };

  /**
   * Reset drag sort heuristics.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._resetHeuristics = function(event) {
    this._hBlockedIndex = null;
    this._hX1 = this._hX2 = event.clientX;
    this._hY1 = this._hY2 = event.clientY;
  };

  /**
   * Run heuristics and return true if overlap check can be performed, and false
   * if it can not.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._checkHeuristics = function(event) {
    var settings = this._getGrid()._settings.dragSortHeuristics;
    var minDist = settings.minDragDistance;

    // Skip heuristics if not needed.
    if (minDist <= 0) {
      this._hBlockedIndex = null;
      return true;
    }

    var x = event.clientX;
    var y = event.clientY;
    var diffX = x - this._hX2;
    var diffY = y - this._hY2;

    // If we can't do proper bounce back check make sure that the blocked index
    // is not set.
    var canCheckBounceBack = minDist > 3 && settings.minBounceBackAngle > 0;
    if (!canCheckBounceBack) {
      this._hBlockedIndex = null;
    }

    if (Math.abs(diffX) > minDist || Math.abs(diffY) > minDist) {
      // Reset blocked index if angle changed enough. This check requires a
      // minimum value of 3 for minDragDistance to function properly.
      if (canCheckBounceBack) {
        var angle = Math.atan2(diffX, diffY);
        var prevAngle = Math.atan2(this._hX2 - this._hX1, this._hY2 - this._hY1);
        var deltaAngle = Math.atan2(Math.sin(angle - prevAngle), Math.cos(angle - prevAngle));
        if (Math.abs(deltaAngle) > settings.minBounceBackAngle) {
          this._hBlockedIndex = null;
        }
      }

      // Update points.
      this._hX1 = this._hX2;
      this._hY1 = this._hY2;
      this._hX2 = x;
      this._hY2 = y;

      return true;
    }

    return false;
  };

  /**
   * Reset for default drag start predicate function.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._resetStartPredicate = function() {
    var predicate = this._startPredicateData;
    if (predicate) {
      if (predicate.delayTimer) {
        predicate.delayTimer = window.clearTimeout(predicate.delayTimer);
      }
      this._startPredicateData = null;
    }
  };

  /**
   * Check (during drag) if an item is overlapping other items and based on
   * the configuration layout the items.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._checkOverlap = function() {
    if (!this._isActive) return;

    var item = this._item;
    var settings = this._getGrid()._settings;
    var result;
    var currentGrid;
    var currentIndex;
    var targetGrid;
    var targetIndex;
    var sortAction;
    var isMigration;

    // Get overlap check result.
    if (isFunction(settings.dragSortPredicate)) {
      result = settings.dragSortPredicate(item, this._dragEvent);
    } else {
      result = ItemDrag.defaultSortPredicate(item, settings.dragSortPredicate);
    }

    // Let's make sure the result object has a valid index before going further.
    if (!result || typeof result.index !== 'number') return;

    currentGrid = item.getGrid();
    targetGrid = result.grid || currentGrid;
    isMigration = currentGrid !== targetGrid;
    currentIndex = currentGrid._items.indexOf(item);
    targetIndex = normalizeArrayIndex(targetGrid._items, result.index, isMigration);
    sortAction = result.action === actionSwap ? actionSwap : actionMove;

    // Prevent position bounce.
    if (!isMigration && targetIndex === this._hBlockedIndex) {
      return;
    }

    // If the item was moved within it's current grid.
    if (!isMigration) {
      // Make sure the target index is not the current index.
      if (currentIndex !== targetIndex) {
        this._hBlockedIndex = currentIndex;

        // Do the sort.
        (sortAction === actionSwap ? arraySwap : arrayMove)(
          currentGrid._items,
          currentIndex,
          targetIndex
        );

        // Emit move event.
        if (currentGrid._hasListeners(eventMove)) {
          currentGrid._emit(eventMove, {
            item: item,
            fromIndex: currentIndex,
            toIndex: targetIndex,
            action: sortAction
          });
        }

        // Layout the grid.
        currentGrid.layout();
      }
    }

    // If the item was moved to another grid.
    else {
      this._hBlockedIndex = null;

      // Emit beforeSend event.
      if (currentGrid._hasListeners(eventBeforeSend)) {
        currentGrid._emit(eventBeforeSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit beforeReceive event.
      if (targetGrid._hasListeners(eventBeforeReceive)) {
        targetGrid._emit(eventBeforeReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Update item's grid id reference.
      item._gridId = targetGrid._id;

      // Update drag instance's migrating indicator.
      this._isMigrating = item._gridId !== this._gridId;

      // Move item instance from current grid to target grid.
      currentGrid._items.splice(currentIndex, 1);
      arrayInsert(targetGrid._items, item, targetIndex);

      // Set sort data as null, which is an indicator for the item comparison
      // function that the sort data of this specific item should be fetched
      // lazily.
      item._sortData = null;

      // Emit send event.
      if (currentGrid._hasListeners(eventSend)) {
        currentGrid._emit(eventSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit receive event.
      if (targetGrid._hasListeners(eventReceive)) {
        targetGrid._emit(eventReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Layout both grids.
      currentGrid.layout();
      targetGrid.layout();
    }
  };

  /**
   * If item is dragged into another grid, finish the migration process
   * gracefully.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._finishMigration = function() {
    var item = this._item;
    var release = item._release;
    var element = item._element;
    var isActive = item._isActive;
    var targetGrid = item.getGrid();
    var targetGridElement = targetGrid._element;
    var targetSettings = targetGrid._settings;
    var targetContainer = targetSettings.dragContainer || targetGridElement;
    var currentSettings = this._getGrid()._settings;
    var currentContainer = element.parentNode;
    var translate;
    var offsetDiff;

    // Destroy current drag. Note that we need to set the migrating flag to
    // false first, because otherwise we create an infinite loop between this
    // and the drag.stop() method.
    this._isMigrating = false;
    this.destroy();

    // Remove current classnames.
    removeClass(element, currentSettings.itemClass);
    removeClass(element, currentSettings.itemVisibleClass);
    removeClass(element, currentSettings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isActive ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(currentContainer, targetContainer, true);
      translate = getTranslate(element);
      translate.x -= offsetDiff.left;
      translate.y -= offsetDiff.top;
    }

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Calculate the offset difference between target's drag container (if any)
    // and actual grid container element. We save it later for the release
    // process.
    offsetDiff = getOffsetDiff(targetContainer, targetGridElement, true);
    release._containerDiffX = offsetDiff.left;
    release._containerDiffY = offsetDiff.top;

    // Recreate item's drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Adjust the position of the item element if it was moved from a container
    // to another.
    if (targetContainer !== currentContainer) {
      element.style[transformProp] = getTranslateString(translate.x, translate.y);
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isActive ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Start the release.
    release.start();
  };

  /**
   * Drag pre-start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preStartCheck = function(event) {
    // Let's activate drag start predicate state.
    if (this._startPredicateState === startPredicateInactive) {
      this._startPredicateState = startPredicatePending;
    }

    // If predicate is pending try to resolve it.
    if (this._startPredicateState === startPredicatePending) {
      this._startPredicateResult = this._startPredicate(this._item, event);
      if (this._startPredicateResult === true) {
        this._startPredicateState = startPredicateResolved;
        this._onStart(event);
      } else if (this._startPredicateResult === false) {
        this._startPredicateState = startPredicateRejected;
      }
    }

    // Otherwise if predicate is resolved and drag is active, move the item.
    else if (this._startPredicateState === startPredicateResolved && this._isActive) {
      this._onMove(event);
    }
  };

  /**
   * Drag pre-end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preEndCheck = function(event) {
    // Check if the start predicate was resolved during drag.
    var isResolved = this._startPredicateState === startPredicateResolved;

    // Do final predicate check to allow user to unbind stuff for the current
    // drag procedure within the predicate callback. The return value of this
    // check will have no effect to the state of the predicate.
    this._startPredicate(this._item, event);

    // Reset start predicate state.
    this._startPredicateState = startPredicateInactive;

    // If predicate is resolved and dragging is active, call the end handler.
    if (isResolved && this._isActive) this._onEnd(event);
  };

  /**
   * Drag start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onStart = function(event) {
    var item = this._item;

    // If item is not active, don't start the drag.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;
    var migrate = item._migrate;
    var gridContainer = grid._element;
    var dragContainer = settings.dragContainer || gridContainer;
    var containingBlock = getContainingBlock(dragContainer, true);
    var translate = getTranslate(element);
    var currentLeft = translate.x;
    var currentTop = translate.y;
    var elementRect = element.getBoundingClientRect();
    var hasDragContainer = dragContainer !== gridContainer;
    var offsetDiff;

    // Reset heuristics data.
    this._resetHeuristics(event);

    // If grid container is not the drag container, we need to calculate the
    // offset difference between grid container and drag container's containing
    // element.
    if (hasDragContainer) {
      offsetDiff = getOffsetDiff(containingBlock, gridContainer);
    }

    // Stop current positioning animation.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // Stop current migration animation.
    if (migrate._isActive) {
      currentLeft -= migrate._containerDiffX;
      currentTop -= migrate._containerDiffY;
      migrate.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // If item is being released reset release data.
    if (item.isReleasing()) release._reset();

    // Setup drag data.
    this._isActive = true;
    this._dragEvent = event;
    this._container = dragContainer;
    this._containingBlock = containingBlock;
    this._elementClientX = elementRect.left;
    this._elementClientY = elementRect.top;
    this._left = this._gridX = currentLeft;
    this._top = this._gridY = currentTop;

    // Create placeholder (if necessary).
    if (settings.dragPlaceholder.enabled) {
      item._dragPlaceholder.create();
    }

    // Emit dragInit event.
    grid._emit(eventDragInit, item, event);

    // If a specific drag container is set and it is different from the
    // grid's container element we need to cast some extra spells.
    if (hasDragContainer) {
      // Store the container offset diffs to drag data.
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;

      // If the dragged element is a child of the drag container all we need to
      // do is setup the relative drag position data.
      if (element.parentNode === dragContainer) {
        this._gridX = currentLeft - this._containerDiffX;
        this._gridY = currentTop - this._containerDiffY;
      }

      // Otherwise we need to append the element inside the correct container,
      // setup the actual drag position data and adjust the element's translate
      // values to account for the DOM position shift.
      else {
        this._left = currentLeft + this._containerDiffX;
        this._top = currentTop + this._containerDiffY;
        dragContainer.appendChild(element);
        element.style[transformProp] = getTranslateString(this._left, this._top);
      }
    }

    // Set drag class and bind scrollers.
    addClass(element, settings.itemDraggingClass);
    this._bindScrollListeners();

    // Emit dragStart event.
    grid._emit(eventDragStart, item, event);
  };

  /**
   * Drag move handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onMove = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    var settings = this._getGrid()._settings;
    var axis = settings.dragAxis;

    // Update horizontal position data.
    if (axis !== 'y') {
      var xDiff = event.clientX - this._dragEvent.clientX;
      this._left += xDiff;
      this._gridX += xDiff;
      this._elementClientX += xDiff;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      var yDiff = event.clientY - this._dragEvent.clientY;
      this._top += yDiff;
      this._gridY += yDiff;
      this._elementClientY += yDiff;
    }

    // Update event data.
    this._dragEvent = event;

    // Do move prepare/apply handling in the next tick.
    addMoveTick(item._id, this._prepareMove, this._applyMove);
  };

  /**
   * Prepare dragged item for moving.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareMove = function() {
    // Do nothing if item is not active.
    if (!this._item._isActive) return;

    // If drag sort is enabled -> check overlap.
    if (this._getGrid()._settings.dragSort) {
      if (this._checkHeuristics(this._dragEvent)) {
        this._checkOverlapDebounce();
      }
    }
  };

  /**
   * Apply movement to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyMove = function() {
    var item = this._item;

    // Do nothing if item is not active.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragMove event.
    this._getGrid()._emit(eventDragMove, item, this._dragEvent);
  };

  /**
   * Drag scroll handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Event} event
   */
  ItemDrag.prototype._onScroll = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Update last scroll event.
    this._scrollEvent = event;

    // Do scroll prepare/apply handling in the next tick.
    addScrollTick(item._id, this._prepareScroll, this._applyScroll);
  };

  /**
   * Prepare dragged item for scrolling.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var axis = settings.dragAxis;
    var gridContainer = grid._element;
    var offsetDiff;

    // Calculate element's rect and x/y diff.
    var rect = element.getBoundingClientRect();
    var xDiff = this._elementClientX - rect.left;
    var yDiff = this._elementClientY - rect.top;

    // Update container diff.
    if (this._container !== gridContainer) {
      offsetDiff = getOffsetDiff(this._containingBlock, gridContainer);
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;
    }

    // Update horizontal position data.
    if (axis !== 'y') {
      this._left += xDiff;
      this._gridX = this._left - this._containerDiffX;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      this._top += yDiff;
      this._gridY = this._top - this._containerDiffY;
    }

    // Overlap handling.
    if (settings.dragSort) this._checkOverlapDebounce();
  };

  /**
   * Apply scroll to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragScroll event.
    this._getGrid()._emit(eventDragScroll, item, this._scrollEvent);
  };

  /**
   * Drag end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onEnd = function(event) {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Finish currently queued overlap check.
    settings.dragSort && this._checkOverlapDebounce('finish');

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Setup release data.
    release._containerDiffX = this._containerDiffX;
    release._containerDiffY = this._containerDiffY;

    // Reset drag data.
    this._reset();

    // Remove drag class name from element.
    removeClass(element, settings.itemDraggingClass);

    // Emit dragEnd event.
    grid._emit(eventDragEnd, item, event);

    // Finish up the migration process or start the release process.
    this._isMigrating ? this._finishMigration() : release.start();
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Calculate how many percent the intersection area of two rectangles is from
   * the maximum potential intersection area between the rectangles.
   *
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Number}
   *   - A number between 0-100.
   */
  function getRectOverlapScore(a, b) {
    // Return 0 immediately if the rectangles do not overlap.
    if (
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    ) {
      return 0;
    }

    // Calculate intersection area's width, height, max height and max width.
    var width = Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left);
    var height = Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top);
    var maxWidth = Math.min(a.width, b.width);
    var maxHeight = Math.min(a.height, b.height);

    return ((width * height) / (maxWidth * maxHeight)) * 100;
  }

  /**
   * Check if an element is an anchor element and open the href url if possible.
   *
   * @param {HTMLElement} element
   */
  function openAnchorHref(element) {
    // Make sure the element is anchor element.
    if (element.tagName.toLowerCase() !== 'a') return;

    // Get href and make sure it exists.
    var href = element.getAttribute('href');
    if (!href) return;

    // Finally let's navigate to the link href.
    var target = element.getAttribute('target');
    if (target && target !== '_self') {
      window.open(href, target);
    } else {
      window.location.href = href;
    }
  }

  /**
   * Drag placeholder.
   *
   * @class
   * @param {Item} item
   */
  function ItemDragPlaceholder(item) {
    this._item = item;
    this._animate = new ItemAnimate();
    this._element = null;
    this._className = '';
    this._didMigrate = false;
    this._resetAfterLayout = false;
    this._currentLeft = 0;
    this._currentTop = 0;
    this._nextLeft = 0;
    this._nextTop = 0;

    // Bind animation handlers.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);

    // Bind event handlers.
    this._onLayoutStart = this._onLayoutStart.bind(this);
    this._onLayoutEnd = this._onLayoutEnd.bind(this);
    this._onReleaseEnd = this._onReleaseEnd.bind(this);
    this._onMigrate = this._onMigrate.bind(this);
  }

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Move placeholder to a new position.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutStart = function() {
    var item = this._item;
    var grid = item.getGrid();

    // Find out the item's new (unapplied) left and top position.
    var itemIndex = grid._items.indexOf(item);
    var nextLeft = grid._layout.slots[itemIndex * 2];
    var nextTop = grid._layout.slots[itemIndex * 2 + 1];

    // If item's position did not change and the item did not migrate we can
    // safely skip layout.
    if (!this._didMigrate && item._left === nextLeft && item._top === nextTop) {
      return;
    }

    // Slots data is calculated with item margins added to them so we need to add
    // item's left and top margin to the slot data to get the placeholder's
    // next position.
    nextLeft += item._marginLeft;
    nextTop += item._marginTop;

    // Just snap to new position without any animations if no animation is
    // required or if placeholder moves between grids.
    var animEnabled = grid._settings.dragPlaceholder.duration > 0;
    if (!animEnabled || this._didMigrate) {
      // Cancel potential (queued) layout tick.
      cancelPlaceholderTick(item._id);

      // Snap placeholder to correct position.
      var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };
      if (this._animate.isAnimating()) {
        this._animate.stop(targetStyles);
      } else {
        setStyles(this._element, targetStyles);
      }

      // Move placeholder inside correct container after migration.
      if (this._didMigrate) {
        grid.getElement().appendChild(this._element);
        this._didMigrate = false;
      }

      return;
    }

    // Start the placeholder's layout animation in the next tick. We do this to
    // avoid layout thrashing.
    this._nextLeft = nextLeft;
    this._nextTop = nextTop;
    addPlaceholderTick(item._id, this._setupAnimation, this._startAnimation);
  };

  /**
   * Prepare placeholder for layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._setupAnimation = function() {
    if (!this.isActive()) return;

    var translate = getTranslate(this._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._startAnimation = function() {
    if (!this.isActive()) return;

    var animation = this._animate;
    var currentLeft = this._currentLeft;
    var currentTop = this._currentTop;
    var nextLeft = this._nextLeft;
    var nextTop = this._nextTop;
    var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };

    // If placeholder is already in correct position let's just stop animation
    // and be done with it.
    if (currentLeft === nextLeft && currentTop === nextTop) {
      if (animation.isAnimating()) animation.stop(targetStyles);
      return;
    }

    // Otherwise let's start the animation.
    var settings = this._item.getGrid()._settings.dragPlaceholder;
    var currentStyles = { transform: getTranslateString(currentLeft, currentTop) };
    animation.start(currentStyles, targetStyles, {
      duration: settings.duration,
      easing: settings.easing,
      onFinish: this._onLayoutEnd
    });
  };

  /**
   * Layout end handler.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutEnd = function() {
    if (this._resetAfterLayout) {
      this.reset();
    }
  };

  /**
   * Drag end handler. This handler is called when dragReleaseEnd event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Item} item
   */
  ItemDragPlaceholder.prototype._onReleaseEnd = function(item) {
    if (item._id === this._item._id) {
      // If the placeholder is not animating anymore we can safely reset it.
      if (!this._animate.isAnimating()) {
        this.reset();
        return;
      }

      // If the placeholder item is still animating here, let's wait for it to
      // finish it's animation.
      this._resetAfterLayout = true;
    }
  };

  /**
   * Migration start handler. This handler is called when beforeSend event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Object} data
   * @param {Item} data.item
   * @param {Grid} data.fromGrid
   * @param {Number} data.fromIndex
   * @param {Grid} data.toGrid
   * @param {Number} data.toIndex
   */
  ItemDragPlaceholder.prototype._onMigrate = function(data) {
    // Make sure we have a matching item.
    if (data.item !== this._item) return;

    var grid = this._item.getGrid();
    var nextGrid = data.toGrid;

    // Unbind listeners from current grid.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Bind listeners to the next grid.
    nextGrid.on(eventDragReleaseEnd, this._onReleaseEnd);
    nextGrid.on(eventLayoutStart, this._onLayoutStart);
    nextGrid.on(eventBeforeSend, this._onMigrate);

    // Mark the item as migrated.
    this._didMigrate = true;
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Create placeholder. Note that this method only writes to DOM and does not
   * read anything from DOM so it should not cause any additional layout
   * thrashing when it's called at the end of the drag start procedure.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.create = function() {
    // If we already have placeholder set up we can skip the initiation logic.
    if (this.isActive()) {
      this._resetAfterLayout = false;
      return;
    }

    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Create placeholder element.
    var element;
    if (isFunction(settings.dragPlaceholder.createElement)) {
      element = settings.dragPlaceholder.createElement(item);
    } else {
      element = window.document.createElement('div');
    }
    this._element = element;

    // Update element to animation instance.
    animation._element = element;

    // Add placeholder class to the placeholder element.
    this._className = settings.itemPlaceholderClass || '';
    if (this._className) {
      addClass(element, this._className);
    }

    // Position the placeholder item correctly.
    var left = item._left + item._marginLeft;
    var top = item._top + item._marginTop;
    setStyles(element, {
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '0',
      width: item._width + 'px',
      height: item._height + 'px',
      transform: getTranslateString(left, top)
    });

    // Bind event listeners.
    grid.on(eventLayoutStart, this._onLayoutStart);
    grid.on(eventDragReleaseEnd, this._onReleaseEnd);
    grid.on(eventBeforeSend, this._onMigrate);

    // onCreate hook.
    if (isFunction(settings.dragPlaceholder.onCreate)) {
      settings.dragPlaceholder.onCreate(item, element);
    }

    // Insert the placeholder element to the grid.
    grid.getElement().appendChild(element);
  };

  /**
   * Reset placeholder data.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.reset = function() {
    if (!this.isActive()) return;

    var element = this._element;
    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Reset flag.
    this._resetAfterLayout = false;

    // Cancel potential (queued) layout tick.
    cancelPlaceholderTick(item._id);

    // Reset animation instance.
    animation.stop();
    animation._element = null;

    // Unbind event listeners.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Remove placeholder class from the placeholder element.
    if (this._className) {
      removeClass(element, this._className);
      this._className = '';
    }

    // Remove element.
    element.parentNode.removeChild(element);
    this._element = null;

    // onRemove hook. Note that here we use the current grid's onRemove callback
    // so if the item has migrated during drag the onRemove method will not be
    // the originating grid's method.
    if (isFunction(settings.dragPlaceholder.onRemove)) {
      settings.dragPlaceholder.onRemove(item, element);
    }
  };

  /**
   * Update placeholder's dimensions.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @param {Number} width
   * @param {height} height
   */
  ItemDragPlaceholder.prototype.updateDimensions = function(width, height) {
    if (this.isActive()) {
      setStyles(this._element, {
        width: width + 'px',
        height: height + 'px'
      });
    }
  };

  /**
   * Check if placeholder is currently active (visible).
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @returns {Boolean}
   */
  ItemDragPlaceholder.prototype.isActive = function() {
    return !!this._element;
  };

  /**
   * Destroy placeholder instance.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.destroy = function() {
    this.reset();
    this._animate.destroy();
    this._item = this._animate = null;
  };

  /**
   * Queue constructor.
   *
   * @class
   */
  function Queue() {
    this._queue = [];
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Add callback to the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {Function} callback
   * @returns {Queue}
   */
  Queue.prototype.add = function(callback) {
    if (this._isDestroyed) return this;
    this._queue.push(callback);
    return this;
  };

  /**
   * Process queue callbacks and reset the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {*} arg1
   * @param {*} arg2
   * @returns {Queue}
   */
  Queue.prototype.flush = function(arg1, arg2) {
    if (this._isDestroyed) return this;

    var queue = this._queue;
    var length = queue.length;
    var i;

    // Quit early if the queue is empty.
    if (!length) return this;

    var singleCallback = length === 1;
    var snapshot = singleCallback ? queue[0] : queue.slice(0);

    // Reset queue.
    queue.length = 0;

    // If we only have a single callback let's just call it.
    if (singleCallback) {
      snapshot(arg1, arg2);
      return this;
    }

    // If we have multiple callbacks, let's process them.
    for (i = 0; i < length; i++) {
      snapshot[i](arg1, arg2);
      if (this._isDestroyed) break;
    }

    return this;
  };

  /**
   * Destroy Queue instance.
   *
   * @public
   * @memberof Queue.prototype
   * @returns {Queue}
   */
  Queue.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    this._isDestroyed = true;
    this._queue.length = 0;

    return this;
  };

  /**
   * Layout manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemLayout(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isInterrupted = false;
    this._currentStyles = {};
    this._targetStyles = {};
    this._currentLeft = 0;
    this._currentTop = 0;
    this._offsetLeft = 0;
    this._offsetTop = 0;
    this._skipNextAnimation = false;
    this._animateOptions = {
      onFinish: this._finish.bind(this)
    };
    this._queue = new Queue();

    // Bind animation handlers and finish method.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start item layout based on it's current data.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [instant=false]
   * @param {Function} [onFinish]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.start = function(instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var element = item._element;
    var release = item._release;
    var gridSettings = item.getGrid()._settings;
    var isPositioning = this._isActive;
    var isJustReleased = release._isActive && release._isPositioningStarted === false;
    var animDuration = isJustReleased
      ? gridSettings.dragReleaseDuration
      : gridSettings.layoutDuration;
    var animEasing = isJustReleased ? gridSettings.dragReleaseEasing : gridSettings.layoutEasing;
    var animEnabled = !instant && !this._skipNextAnimation && animDuration > 0;
    var isAnimating;

    // If the item is currently positioning process current layout callback
    // queue with interrupted flag on.
    if (isPositioning) this._queue.flush(true, item);

    // Mark release positioning as started.
    if (isJustReleased) release._isPositioningStarted = true;

    // Push the callback to the callback queue.
    if (isFunction(onFinish)) this._queue.add(onFinish);

    // If no animations are needed, easy peasy!
    if (!animEnabled) {
      this._updateOffsets();
      this._updateTargetStyles();
      isAnimating = item._animate.isAnimating();
      this.stop(false, this._targetStyles);
      !isAnimating && setStyles(element, this._targetStyles);
      this._skipNextAnimation = false;
      return this._finish();
    }

    // Set item active and store some data for the animation that is about to be
    // triggered.
    this._isActive = true;
    this._animateOptions.easing = animEasing;
    this._animateOptions.duration = animDuration;
    this._isInterrupted = isPositioning;

    // Start the item's layout animation in the next tick.
    addLayoutTick(item._id, this._setupAnimation, this._startAnimation);

    return this;
  };

  /**
   * Stop item's position animation if it is currently animating.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [processCallbackQueue=false]
   * @param {Object} [targetStyles]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.stop = function(processCallbackQueue, targetStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;

    // Cancel animation init.
    cancelLayoutTick(item._id);

    // Stop animation.
    item._animate.stop(targetStyles);

    // Remove positioning class.
    removeClass(item._element, item.getGrid()._settings.itemPositioningClass);

    // Reset active state.
    this._isActive = false;

    // Process callback queue if needed.
    if (processCallbackQueue) this._queue.flush(true, item);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true, {});
    this._queue.destroy();
    this._item = this._currentStyles = this._targetStyles = this._animateOptions = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Calculate and update item's current layout offset data.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateOffsets = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    this._offsetLeft = release._isActive
      ? release._containerDiffX
      : migrate._isActive
      ? migrate._containerDiffX
      : 0;

    this._offsetTop = release._isActive
      ? release._containerDiffY
      : migrate._isActive
      ? migrate._containerDiffY
      : 0;
  };

  /**
   * Calculate and update item's layout target styles.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateTargetStyles = function() {
    if (this._isDestroyed) return;
    this._targetStyles.transform = getTranslateString(
      this._item._left + this._offsetLeft,
      this._item._top + this._offsetTop
    );
  };

  /**
   * Finish item layout procedure.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._finish = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    // Mark the item as inactive and remove positioning classes.
    if (this._isActive) {
      this._isActive = false;
      removeClass(item._element, item.getGrid()._settings.itemPositioningClass);
    }

    // Finish up release and migration.
    if (release._isActive) release.stop();
    if (migrate._isActive) migrate.stop();

    // Process the callback queue.
    this._queue.flush(false, item);
  };

  /**
   * Prepare item for layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._setupAnimation = function() {
    var translate = getTranslate(this._item._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._startAnimation = function() {
    var item = this._item;
    var settings = item.getGrid()._settings;

    // Let's update the offset data and target styles.
    this._updateOffsets();
    this._updateTargetStyles();

    // If the item is already in correct position let's quit early.
    if (
      item._left === this._currentLeft - this._offsetLeft &&
      item._top === this._currentTop - this._offsetTop
    ) {
      if (this._isInterrupted) this.stop(false, this._targetStyles);
      this._isActive = false;
      this._finish();
      return;
    }

    // Set item's positioning class if needed.
    if (!this._isInterrupted) {
      addClass(item._element, settings.itemPositioningClass);
    }

    // Get current styles for animation.
    this._currentStyles.transform = getTranslateString(this._currentLeft, this._currentTop);

    // Animate.
    item._animate.start(this._currentStyles, this._targetStyles, this._animateOptions);
  };

  var tempStyles = {};

  /**
   * The migrate process handler constructor.
   *
   * @class
   * @param {Item} item
   */
  function ItemMigrate(item) {
    // Private props.
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._container = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the migrate process of an item.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Grid} targetGrid
   * @param {GridSingleItemQuery} position
   * @param {HTMLElement} [container]
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.start = function(targetGrid, position, container) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var isVisible = item.isVisible();
    var grid = item.getGrid();
    var settings = grid._settings;
    var targetSettings = targetGrid._settings;
    var targetElement = targetGrid._element;
    var targetItems = targetGrid._items;
    var currentIndex = grid._items.indexOf(item);
    var targetContainer = container || window.document.body;
    var targetIndex;
    var targetItem;
    var currentContainer;
    var offsetDiff;
    var containerDiff;
    var translate;
    var translateX;
    var translateY;

    // Get target index.
    if (typeof position === 'number') {
      targetIndex = normalizeArrayIndex(targetItems, position, true);
    } else {
      targetItem = targetGrid._getItem(position);
      /** @todo Consider throwing an error here instead of silently failing. */
      if (!targetItem) return this;
      targetIndex = targetItems.indexOf(targetItem);
    }

    // Get current translateX and translateY values if needed.
    if (item.isPositioning() || this._isActive || item.isReleasing()) {
      translate = getTranslate(element);
      translateX = translate.x;
      translateY = translate.y;
    }

    // Abort current positioning.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current migration.
    if (this._isActive) {
      translateX -= this._containerDiffX;
      translateY -= this._containerDiffY;
      this.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current release.
    if (item.isReleasing()) {
      translateX -= item._release._containerDiffX;
      translateY -= item._release._containerDiffY;
      item._release.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Stop current visibility animations.
    item._visibility._stopAnimation();

    // Destroy current drag.
    if (item._drag) item._drag.destroy();

    // Process current visibility animation queue.
    item._visibility._queue.flush(true, item);

    // Emit beforeSend event.
    if (grid._hasListeners(eventBeforeSend)) {
      grid._emit(eventBeforeSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit beforeReceive event.
    if (targetGrid._hasListeners(eventBeforeReceive)) {
      targetGrid._emit(eventBeforeReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Remove current classnames.
    removeClass(element, settings.itemClass);
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isVisible ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move item instance from current grid to target grid.
    grid._items.splice(currentIndex, 1);
    arrayInsert(targetItems, item, targetIndex);

    // Update item's grid id reference.
    item._gridId = targetGrid._id;

    // Get current container.
    currentContainer = element.parentNode;

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(targetContainer, currentContainer, true);
      if (!translate) {
        translate = getTranslate(element);
        translateX = translate.x;
        translateY = translate.y;
      }
      element.style[transformProp] = getTranslateString(
        translateX + offsetDiff.left,
        translateY + offsetDiff.top
      );
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isVisible ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Update display style.
    element.style.display = isVisible ? 'block' : 'hidden';

    // Get offset diff for the migration data.
    containerDiff = getOffsetDiff(targetContainer, targetElement, true);

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Create new drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Setup migration data.
    this._isActive = true;
    this._container = targetContainer;
    this._containerDiffX = containerDiff.left;
    this._containerDiffY = containerDiff.top;

    // Emit send event.
    if (grid._hasListeners(eventSend)) {
      grid._emit(eventSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit receive event.
    if (targetGrid._hasListeners(eventReceive)) {
      targetGrid._emit(eventReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    return this;
  };

  /**
   * End the migrate process of an item. This method can be used to abort an
   * ongoing migrate process (animation) or finish the migrate process.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Boolean} [abort=false]
   *  - Should the migration be aborted?
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var gridElement = grid._element;
    var translate;

    if (this._container !== gridElement) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles;
      }
      gridElement.appendChild(element);
      setStyles(element, currentStyles);
    }

    this._isActive = false;
    this._container = null;
    this._containerDiffX = 0;
    this._containerDiffY = 0;

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  var tempStyles$1 = {};

  /**
   * The release process handler constructor. Although this might seem as proper
   * fit for the drag process this needs to be separated into it's own logic
   * because there might be a scenario where drag is disabled, but the release
   * process still needs to be implemented (dragging from a grid to another).
   *
   * @class
   * @param {Item} item
   */
  function ItemRelease(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the release process of an item.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.start = function() {
    if (this._isDestroyed || this._isActive) return this;

    var item = this._item;
    var grid = item.getGrid();

    // Flag release as active.
    this._isActive = true;

    // Add release class name to the released element.
    addClass(item._element, grid._settings.itemReleasingClass);

    // Emit dragReleaseStart event.
    grid._emit(eventDragReleaseStart, item);

    // Position the released item.
    item._layout.start(false);

    return this;
  };

  /**
   * End the release process of an item. This method can be used to abort an
   * ongoing release process (animation) or finish the release process.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @param {Boolean} [abort=false]
   *  - Should the release be aborted? When true, the release end event won't be
   *    emitted. Set to true only when you need to abort the release process
   *    while the item is animating to it's position.
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var container = grid._element;
    var translate;

    // Reset data and remove releasing class name from the element.
    this._reset();

    // If the released element is outside the grid's container element put it
    // back there and adjust position accordingly.
    if (element.parentNode !== container) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles$1.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles$1.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles$1;
      }
      container.appendChild(element);
      setStyles(element, currentStyles);
    }

    // Emit dragReleaseEnd event.
    if (!abort) grid._emit(eventDragReleaseEnd, item);

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset public data and remove releasing class.
   *
   * @private
   * @memberof ItemRelease.prototype
   */
  ItemRelease.prototype._reset = function() {
    if (this._isDestroyed) return;
    var item = this._item;
    this._isActive = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
    removeClass(item._element, item.getGrid()._settings.itemReleasingClass);
  };

  /**
   * Get current values of the provided styles definition object.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {Object}
   */
  function getCurrentStyles(element, styles) {
    var current = {};
    for (var prop in styles) {
      current[prop] = getStyle(element, getStyleName(prop));
    }
    return current;
  }

  /**
   * Visibility manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemVisibility(item) {
    var isActive = item._isActive;
    var element = item._element;
    var settings = item.getGrid()._settings;

    this._item = item;
    this._isDestroyed = false;

    // Set up visibility states.
    this._isHidden = !isActive;
    this._isHiding = false;
    this._isShowing = false;

    // Callback queue.
    this._queue = new Queue();

    // Bind show/hide finishers.
    this._finishShow = this._finishShow.bind(this);
    this._finishHide = this._finishHide.bind(this);

    // Force item to be either visible or hidden on init.
    element.style.display = isActive ? 'block' : 'none';

    // Set visible/hidden class.
    addClass(element, isActive ? settings.itemVisibleClass : settings.itemHiddenClass);

    // Set initial styles for the child element.
    setStyles(item._child, isActive ? settings.visibleStyles : settings.hiddenStyles);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Show item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.show = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is visible call the callback and be done with it.
    if (!this._isShowing && !this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is showing and does not need to be shown instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isShowing && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is hiding or hidden process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isShowing) {
      queue.flush(true, item);
      removeClass(element, settings.itemHiddenClass);
      addClass(element, settings.itemVisibleClass);
      if (!this._isHiding) element.style.display = 'block';
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    item._isActive = this._isShowing = true;
    this._isHiding = this._isHidden = false;

    // Finally let's start show animation.
    this._startAnimation(true, instant, this._finishShow);

    return this;
  };

  /**
   * Hide item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.hide = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is already hidden call the callback and be done with it.
    if (!this._isHiding && this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is hiding and does not need to be hidden instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isHiding && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is showing or visible process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isHiding) {
      queue.flush(true, item);
      addClass(element, settings.itemHiddenClass);
      removeClass(element, settings.itemVisibleClass);
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    this._isHidden = this._isHiding = true;
    item._isActive = this._isShowing = false;

    // Finally let's start hide animation.
    this._startAnimation(false, instant, this._finishHide);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var queue = this._queue;
    var settings = grid._settings;

    // Stop visibility animation.
    this._stopAnimation({});

    // Fire all uncompleted callbacks with interrupted flag and destroy the queue.
    queue.flush(true, item).destroy();

    // Remove visible/hidden classes.
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Reset state.
    this._item = null;
    this._isHiding = this._isShowing = false;
    this._isDestroyed = this._isHidden = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Start visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Boolean} toVisible
   * @param {Boolean} [instant]
   * @param {Function} [onFinish]
   */
  ItemVisibility.prototype._startAnimation = function(toVisible, instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var settings = item.getGrid()._settings;
    var targetStyles = toVisible ? settings.visibleStyles : settings.hiddenStyles;
    var duration = parseInt(toVisible ? settings.showDuration : settings.hideDuration) || 0;
    var easing = (toVisible ? settings.showEasing : settings.hideEasing) || 'ease';
    var isInstant = instant || duration <= 0;
    var currentStyles;

    // No target styles? Let's quit early.
    if (!targetStyles) {
      onFinish && onFinish();
      return;
    }

    // Cancel queued visibility tick.
    cancelVisibilityTick(item._id);

    // If we need to apply the styles instantly without animation.
    if (isInstant) {
      if (item._animateChild.isAnimating()) {
        item._animateChild.stop(targetStyles);
      } else {
        setStyles(item._child, targetStyles);
      }
      onFinish && onFinish();
      return;
    }

    // Start the animation in the next tick (to avoid layout thrashing).
    addVisibilityTick(
      item._id,
      function() {
        currentStyles = getCurrentStyles(item._child, targetStyles);
      },
      function() {
        item._animateChild.start(currentStyles, targetStyles, {
          duration: duration,
          easing: easing,
          onFinish: onFinish
        });
      }
    );
  };

  /**
   * Stop visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Object} [targetStyles]
   */
  ItemVisibility.prototype._stopAnimation = function(targetStyles) {
    if (this._isDestroyed) return;
    var item = this._item;
    cancelVisibilityTick(item._id);
    item._animateChild.stop(targetStyles);
  };

  /**
   * Finish show procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  ItemVisibility.prototype._finishShow = function() {
    if (this._isHidden) return;
    this._isShowing = false;
    this._queue.flush(false, this._item);
  };

  /**
   * Finish hide procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  var finishStyles = {};
  ItemVisibility.prototype._finishHide = function() {
    if (!this._isHidden) return;
    var item = this._item;
    this._isHiding = false;
    finishStyles.transform = getTranslateString(0, 0);
    item._layout.stop(true, finishStyles);
    item._element.style.display = 'none';
    this._queue.flush(false, item);
  };

  var id = 0;

  /**
   * Returns a unique numeric id (increments a base value on every call).
   * @returns {Number}
   */
  function createUid() {
    return ++id;
  }

  /**
   * Creates a new Item instance for a Grid instance.
   *
   * @class
   * @param {Grid} grid
   * @param {HTMLElement} element
   * @param {Boolean} [isActive]
   */
  function Item(grid, element, isActive) {
    var settings = grid._settings;

    // Create instance id.
    this._id = createUid();

    // Reference to connected Grid instance's id.
    this._gridId = grid._id;

    // Destroyed flag.
    this._isDestroyed = false;

    // Set up initial positions.
    this._left = 0;
    this._top = 0;

    // The elements.
    this._element = element;
    this._child = element.children[0];

    // If the provided item element is not a direct child of the grid container
    // element, append it to the grid container.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
    }

    // Set item class.
    addClass(element, settings.itemClass);

    // If isActive is not defined, let's try to auto-detect it.
    if (typeof isActive !== 'boolean') {
      isActive = getStyle(element, 'display') !== 'none';
    }

    // Set up active state (defines if the item is considered part of the layout
    // or not).
    this._isActive = isActive;

    // Set element's initial position styles.
    element.style.left = '0';
    element.style.top = '0';
    element.style[transformProp] = getTranslateString(0, 0);

    // Initiate item's animation controllers.
    this._animate = new ItemAnimate(element);
    this._animateChild = new ItemAnimate(this._child);

    // Setup visibility handler.
    this._visibility = new ItemVisibility(this);

    // Set up layout handler.
    this._layout = new ItemLayout(this);

    // Set up migration handler data.
    this._migrate = new ItemMigrate(this);

    // Set up release handler. Note that although this is fully linked to dragging
    // this still needs to be always instantiated to handle migration scenarios
    // correctly.
    this._release = new ItemRelease(this);

    // Set up drag placeholder handler. Note that although this is fully linked to
    // dragging this still needs to be always instantiated to handle migration
    // scenarios correctly.
    this._dragPlaceholder = new ItemDragPlaceholder(this);

    // Set up drag handler.
    this._drag = settings.dragEnabled ? new ItemDrag(this) : null;

    // Set up the initial dimensions and sort data.
    this._refreshDimensions();
    this._refreshSortData();
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Get the instance grid reference.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Grid}
   */
  Item.prototype.getGrid = function() {
    return gridInstances[this._gridId];
  };

  /**
   * Get the instance element.
   *
   * @public
   * @memberof Item.prototype
   * @returns {HTMLElement}
   */
  Item.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get instance element's cached width.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getWidth = function() {
    return this._width;
  };

  /**
   * Get instance element's cached height.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getHeight = function() {
    return this._height;
  };

  /**
   * Get instance element's cached margins.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left, right, top and bottom properties
   *     which indicate the item element's cached margins.
   */
  Item.prototype.getMargin = function() {
    return {
      left: this._marginLeft,
      right: this._marginRight,
      top: this._marginTop,
      bottom: this._marginBottom
    };
  };

  /**
   * Get instance element's cached position.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left and top properties which indicate the
   *     item element's cached position in the grid.
   */
  Item.prototype.getPosition = function() {
    return {
      left: this._left,
      top: this._top
    };
  };

  /**
   * Is the item active?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isActive = function() {
    return this._isActive;
  };

  /**
   * Is the item visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isVisible = function() {
    return !!this._visibility && !this._visibility._isHidden;
  };

  /**
   * Is the item being animated to visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isShowing = function() {
    return !!(this._visibility && this._visibility._isShowing);
  };

  /**
   * Is the item being animated to hidden?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isHiding = function() {
    return !!(this._visibility && this._visibility._isHiding);
  };

  /**
   * Is the item positioning?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isPositioning = function() {
    return !!(this._layout && this._layout._isActive);
  };

  /**
   * Is the item being dragged?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDragging = function() {
    return !!(this._drag && this._drag._isActive);
  };

  /**
   * Is the item being released?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isReleasing = function() {
    return !!(this._release && this._release._isActive);
  };

  /**
   * Is the item destroyed?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDestroyed = function() {
    return this._isDestroyed;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Recalculate item's dimensions.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshDimensions = function() {
    if (this._isDestroyed || this._visibility._isHidden) return;

    var element = this._element;
    var dragPlaceholder = this._dragPlaceholder;
    var rect = element.getBoundingClientRect();

    // Calculate width and height.
    this._width = rect.width;
    this._height = rect.height;

    // Calculate margins (ignore negative margins).
    this._marginLeft = Math.max(0, getStyleAsFloat(element, 'margin-left'));
    this._marginRight = Math.max(0, getStyleAsFloat(element, 'margin-right'));
    this._marginTop = Math.max(0, getStyleAsFloat(element, 'margin-top'));
    this._marginBottom = Math.max(0, getStyleAsFloat(element, 'margin-bottom'));

    // Keep drag placeholder's dimensions synced with the item's.
    if (dragPlaceholder) {
      dragPlaceholder.updateDimensions(this._width, this._height);
    }
  };

  /**
   * Fetch and store item's sort data.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshSortData = function() {
    if (this._isDestroyed) return;

    var data = (this._sortData = {});
    var getters = this.getGrid()._settings.sortData;
    var prop;

    for (prop in getters) {
      data[prop] = getters[prop](this, this._element);
    }
  };

  /**
   * Destroy item instance.
   *
   * @private
   * @memberof Item.prototype
   * @param {Boolean} [removeElement=false]
   */
  Item.prototype._destroy = function(removeElement) {
    if (this._isDestroyed) return;

    var element = this._element;
    var grid = this.getGrid();
    var settings = grid._settings;
    var index = grid._items.indexOf(this);

    // Destroy handlers.
    this._release.destroy();
    this._migrate.destroy();
    this._layout.destroy();
    this._visibility.destroy();
    this._animate.destroy();
    this._animateChild.destroy();
    this._dragPlaceholder.destroy();
    this._drag && this._drag.destroy();

    // Remove all inline styles.
    element.removeAttribute('style');
    this._child.removeAttribute('style');

    // Remove item class.
    removeClass(element, settings.itemClass);

    // Remove item from Grid instance if it still exists there.
    index > -1 && grid._items.splice(index, 1);

    // Remove element from DOM.
    removeElement && element.parentNode.removeChild(element);

    // Reset state.
    this._isActive = false;
    this._isDestroyed = true;
  };

  /**
   * This is the default layout algorithm for Muuri. Based on MAXRECTS approach
   * as described by Jukka Jylänki in his survey: "A Thousand Ways to Pack the
   * Bin - A Practical Approach to Two-Dimensional Rectangle Bin Packing.".
   *
   * @class
   */
  function Packer() {
    this._slots = [];
    this._slotSizes = [];
    this._freeSlots = [];
    this._newSlots = [];
    this._rectItem = {};
    this._rectStore = [];
    this._rectId = 0;

    // The layout return data, which will be populated in getLayout.
    this._layout = {
      slots: null,
      setWidth: false,
      setHeight: false,
      width: false,
      height: false
    };

    // Bind sort handlers.
    this._sortRectsLeftTop = this._sortRectsLeftTop.bind(this);
    this._sortRectsTopLeft = this._sortRectsTopLeft.bind(this);
  }

  /**
   * @public
   * @memberof Packer.prototype
   * @param {Item[]} items
   * @param {Number} width
   * @param {Number} height
   * @param {Number[]} [slots]
   * @param {Object} [options]
   * @param {Boolean} [options.fillGaps=false]
   * @param {Boolean} [options.horizontal=false]
   * @param {Boolean} [options.alignRight=false]
   * @param {Boolean} [options.alignBottom=false]
   * @returns {LayoutData}
   */
  Packer.prototype.getLayout = function(items, width, height, slots, options) {
    var layout = this._layout;
    var fillGaps = !!(options && options.fillGaps);
    var isHorizontal = !!(options && options.horizontal);
    var alignRight = !!(options && options.alignRight);
    var alignBottom = !!(options && options.alignBottom);
    var rounding = !!(options && options.rounding);
    var slotSizes = this._slotSizes;
    var i;

    // Reset layout data.
    layout.slots = slots ? slots : this._slots;
    layout.width = isHorizontal ? 0 : rounding ? Math.round(width) : width;
    layout.height = !isHorizontal ? 0 : rounding ? Math.round(height) : height;
    layout.setWidth = isHorizontal;
    layout.setHeight = !isHorizontal;

    // Make sure slots and slot size arrays are reset.
    layout.slots.length = 0;
    slotSizes.length = 0;

    // No need to go further if items do not exist.
    if (!items.length) return layout;

    // Find slots for items.
    for (i = 0; i < items.length; i++) {
      this._addSlot(items[i], isHorizontal, fillGaps, rounding, alignRight || alignBottom);
    }

    // If the alignment is set to right we need to adjust the results.
    if (alignRight) {
      for (i = 0; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.width - (layout.slots[i] + slotSizes[i]);
      }
    }

    // If the alignment is set to bottom we need to adjust the results.
    if (alignBottom) {
      for (i = 1; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.height - (layout.slots[i] + slotSizes[i]);
      }
    }

    // Reset slots arrays and rect id.
    slotSizes.length = 0;
    this._freeSlots.length = 0;
    this._newSlots.length = 0;
    this._rectId = 0;

    return layout;
  };

  /**
   * Calculate position for the layout item. Returns the left and top position
   * of the item in pixels.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Item} item
   * @param {Boolean} isHorizontal
   * @param {Boolean} fillGaps
   * @param {Boolean} rounding
   * @returns {Array}
   */
  Packer.prototype._addSlot = (function() {
    var eps = 0.001;
    var itemSlot = {};
    return function(item, isHorizontal, fillGaps, rounding, trackSize) {
      var layout = this._layout;
      var freeSlots = this._freeSlots;
      var newSlots = this._newSlots;
      var rect;
      var rectId;
      var potentialSlots;
      var ignoreCurrentSlots;
      var i;
      var ii;

      // Reset new slots.
      newSlots.length = 0;

      // Set item slot initial data.
      itemSlot.left = null;
      itemSlot.top = null;
      itemSlot.width = item._width + item._marginLeft + item._marginRight;
      itemSlot.height = item._height + item._marginTop + item._marginBottom;

      // Round item slot width and height if needed.
      if (rounding) {
        itemSlot.width = Math.round(itemSlot.width);
        itemSlot.height = Math.round(itemSlot.height);
      }

      // Try to find a slot for the item.
      for (i = 0; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        if (itemSlot.width <= rect.width + eps && itemSlot.height <= rect.height + eps) {
          itemSlot.left = rect.left;
          itemSlot.top = rect.top;
          break;
        }
      }

      // If no slot was found for the item.
      if (itemSlot.left === null) {
        // Position the item in to the bottom left (vertical mode) or top right
        // (horizontal mode) of the grid.
        itemSlot.left = !isHorizontal ? 0 : layout.width;
        itemSlot.top = !isHorizontal ? layout.height : 0;

        // If gaps don't need filling do not add any current slots to the new
        // slots array.
        if (!fillGaps) {
          ignoreCurrentSlots = true;
        }
      }

      // In vertical mode, if the item's bottom overlaps the grid's bottom.
      if (!isHorizontal && itemSlot.top + itemSlot.height > layout.height) {
        // If item is not aligned to the left edge, create a new slot.
        if (itemSlot.left > 0) {
          newSlots.push(this._addRect(0, layout.height, itemSlot.left, Infinity));
        }

        // If item is not aligned to the right edge, create a new slot.
        if (itemSlot.left + itemSlot.width < layout.width) {
          newSlots.push(
            this._addRect(
              itemSlot.left + itemSlot.width,
              layout.height,
              layout.width - itemSlot.left - itemSlot.width,
              Infinity
            )
          );
        }

        // Update grid height.
        layout.height = itemSlot.top + itemSlot.height;
      }

      // In horizontal mode, if the item's right overlaps the grid's right edge.
      if (isHorizontal && itemSlot.left + itemSlot.width > layout.width) {
        // If item is not aligned to the top, create a new slot.
        if (itemSlot.top > 0) {
          newSlots.push(this._addRect(layout.width, 0, Infinity, itemSlot.top));
        }

        // If item is not aligned to the bottom, create a new slot.
        if (itemSlot.top + itemSlot.height < layout.height) {
          newSlots.push(
            this._addRect(
              layout.width,
              itemSlot.top + itemSlot.height,
              Infinity,
              layout.height - itemSlot.top - itemSlot.height
            )
          );
        }

        // Update grid width.
        layout.width = itemSlot.left + itemSlot.width;
      }

      // Clean up the current slots making sure there are no old slots that
      // overlap with the item. If an old slot overlaps with the item, split it
      // into smaller slots if necessary.
      for (i = fillGaps ? 0 : ignoreCurrentSlots ? freeSlots.length : i; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        potentialSlots = this._splitRect(rect, itemSlot);
        for (ii = 0; ii < potentialSlots.length; ii++) {
          rectId = potentialSlots[ii];
          rect = this._getRect(rectId);
          // Let's make sure here that we have a big enough slot
          // (width/height > 0.49px) and also let's make sure that the slot is
          // within the boundaries of the grid.
          if (
            rect.width > 0.49 &&
            rect.height > 0.49 &&
            ((!isHorizontal && rect.top < layout.height) ||
              (isHorizontal && rect.left < layout.width))
          ) {
            newSlots.push(rectId);
          }
        }
      }

      // Sanitize new slots.
      if (newSlots.length) {
        this._purgeRects(newSlots).sort(
          isHorizontal ? this._sortRectsLeftTop : this._sortRectsTopLeft
        );
      }

      // Update layout width/height.
      if (isHorizontal) {
        layout.width = Math.max(layout.width, itemSlot.left + itemSlot.width);
      } else {
        layout.height = Math.max(layout.height, itemSlot.top + itemSlot.height);
      }

      // Add item slot data to layout slots (and store the slot size for later
      // usage too if necessary).
      layout.slots.push(itemSlot.left, itemSlot.top);
      if (trackSize) this._slotSizes.push(itemSlot.width, itemSlot.height);

      // Free/new slots switcheroo!
      this._freeSlots = newSlots;
      this._newSlots = freeSlots;
    };
  })();

  /**
   * Add a new rectangle to the rectangle store. Returns the id of the new
   * rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Number} left
   * @param {Number} top
   * @param {Number} width
   * @param {Number} height
   * @returns {RectId}
   */
  Packer.prototype._addRect = function(left, top, width, height) {
    var rectId = ++this._rectId;
    var rectStore = this._rectStore;

    rectStore[rectId] = left || 0;
    rectStore[++this._rectId] = top || 0;
    rectStore[++this._rectId] = width || 0;
    rectStore[++this._rectId] = height || 0;

    return rectId;
  };

  /**
   * Get rectangle data from the rectangle store by id. Optionally you can
   * provide a target object where the rectangle data will be written in. By
   * default an internal object is reused as a target object.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} id
   * @param {Object} [target]
   * @returns {Object}
   */
  Packer.prototype._getRect = function(id, target) {
    var rectItem = target ? target : this._rectItem;
    var rectStore = this._rectStore;

    rectItem.left = rectStore[id] || 0;
    rectItem.top = rectStore[++id] || 0;
    rectItem.width = rectStore[++id] || 0;
    rectItem.height = rectStore[++id] || 0;

    return rectItem;
  };

  /**
   * Punch a hole into a rectangle and split the remaining area into smaller
   * rectangles (4 at max).
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} rect
   * @param {Rectangle} hole
   * @returns {RectId[]}
   */
  Packer.prototype._splitRect = (function() {
    var results = [];
    return function(rect, hole) {
      // Reset old results.
      results.length = 0;

      // If the rect does not overlap with the hole add rect to the return data
      // as is.
      if (!this._doRectsOverlap(rect, hole)) {
        results.push(this._addRect(rect.left, rect.top, rect.width, rect.height));
        return results;
      }

      // Left split.
      if (rect.left < hole.left) {
        results.push(this._addRect(rect.left, rect.top, hole.left - rect.left, rect.height));
      }

      // Right split.
      if (rect.left + rect.width > hole.left + hole.width) {
        results.push(
          this._addRect(
            hole.left + hole.width,
            rect.top,
            rect.left + rect.width - (hole.left + hole.width),
            rect.height
          )
        );
      }

      // Top split.
      if (rect.top < hole.top) {
        results.push(this._addRect(rect.left, rect.top, rect.width, hole.top - rect.top));
      }

      // Bottom split.
      if (rect.top + rect.height > hole.top + hole.height) {
        results.push(
          this._addRect(
            rect.left,
            hole.top + hole.height,
            rect.width,
            rect.top + rect.height - (hole.top + hole.height)
          )
        );
      }

      return results;
    };
  })();

  /**
   * Check if two rectangles overlap.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._doRectsOverlap = function(a, b) {
    return !(
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    );
  };

  /**
   * Check if a rectangle is fully within another rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._isRectWithinRect = function(a, b) {
    return (
      a.left >= b.left &&
      a.top >= b.top &&
      a.left + a.width <= b.left + b.width &&
      a.top + a.height <= b.top + b.height
    );
  };

  /**
   * Loops through an array of rectangle ids and resets all that are fully
   * within another rectangle in the array. Resetting in this case means that
   * the rectangle id value is replaced with zero.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId[]} rectIds
   * @returns {RectId[]}
   */
  Packer.prototype._purgeRects = (function() {
    var rectA = {};
    var rectB = {};
    return function(rectIds) {
      var i = rectIds.length;
      var ii;

      while (i--) {
        ii = rectIds.length;
        if (!rectIds[i]) continue;
        this._getRect(rectIds[i], rectA);
        while (ii--) {
          if (!rectIds[ii] || i === ii) continue;
          if (this._isRectWithinRect(rectA, this._getRect(rectIds[ii], rectB))) {
            rectIds[i] = 0;
            break;
          }
        }
      }

      return rectIds;
    };
  })();

  /**
   * Sort rectangles with top-left gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsTopLeft = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 :
             rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 : 0;
    };
  })();

  /**
   * Sort rectangles with left-top gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsLeftTop = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 :
             rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 : 0;
    };
  })();

  var htmlCollectionType = '[object HTMLCollection]';
  var nodeListType = '[object NodeList]';

  /**
   * Check if a value is a node list
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isNodeList(val) {
    var type = Object.prototype.toString.call(val);
    return type === htmlCollectionType || type === nodeListType;
  }

  var objectType = 'object';
  var objectToStringType = '[object Object]';
  var toString = Object.prototype.toString;

  /**
   * Check if a value is a plain object.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isPlainObject(val) {
    return typeof val === objectType && toString.call(val) === objectToStringType;
  }

  /**
   * Converts a value to an array or clones an array.
   *
   * @param {*} target
   * @returns {Array}
   */
  function toArray(target) {
    return isNodeList(target) ? Array.prototype.slice.call(target) : Array.prototype.concat(target);
  }

  var packer = new Packer();
  var noop = function() {};

  var numberType$1 = 'number';
  var stringType = 'string';
  var instantLayout = 'instant';

  /**
   * Creates a new Grid instance.
   *
   * @class
   * @param {(HTMLElement|String)} element
   * @param {Object} [options]
   * @param {?(HTMLElement[]|NodeList|String)} [options.items]
   * @param {Number} [options.showDuration=300]
   * @param {String} [options.showEasing="ease"]
   * @param {Object} [options.visibleStyles]
   * @param {Number} [options.hideDuration=300]
   * @param {String} [options.hideEasing="ease"]
   * @param {Object} [options.hiddenStyles]
   * @param {(Function|Object)} [options.layout]
   * @param {Boolean} [options.layout.fillGaps=false]
   * @param {Boolean} [options.layout.horizontal=false]
   * @param {Boolean} [options.layout.alignRight=false]
   * @param {Boolean} [options.layout.alignBottom=false]
   * @param {Boolean} [options.layout.rounding=true]
   * @param {(Boolean|Number)} [options.layoutOnResize=100]
   * @param {Boolean} [options.layoutOnInit=true]
   * @param {Number} [options.layoutDuration=300]
   * @param {String} [options.layoutEasing="ease"]
   * @param {?Object} [options.sortData=null]
   * @param {Boolean} [options.dragEnabled=false]
   * @param {?HtmlElement} [options.dragContainer=null]
   * @param {?Function} [options.dragStartPredicate]
   * @param {Number} [options.dragStartPredicate.distance=0]
   * @param {Number} [options.dragStartPredicate.delay=0]
   * @param {(Boolean|String)} [options.dragStartPredicate.handle=false]
   * @param {?String} [options.dragAxis]
   * @param {(Boolean|Function)} [options.dragSort=true]
   * @param {Object} [options.dragSortHeuristics]
   * @param {Number} [options.dragSortHeuristics.sortInterval=100]
   * @param {Number} [options.dragSortHeuristics.minDragDistance=10]
   * @param {Number} [options.dragSortHeuristics.minBounceBackAngle=1]
   * @param {(Function|Object)} [options.dragSortPredicate]
   * @param {Number} [options.dragSortPredicate.threshold=50]
   * @param {String} [options.dragSortPredicate.action="move"]
   * @param {Number} [options.dragReleaseDuration=300]
   * @param {String} [options.dragReleaseEasing="ease"]
   * @param {Object} [options.dragCssProps]
   * @param {Object} [options.dragPlaceholder]
   * @param {Boolean} [options.dragPlaceholder.enabled=false]
   * @param {Number} [options.dragPlaceholder.duration=300]
   * @param {String} [options.dragPlaceholder.easing="ease"]
   * @param {?Function} [options.dragPlaceholder.createElement=null]
   * @param {?Function} [options.dragPlaceholder.onCreate=null]
   * @param {?Function} [options.dragPlaceholder.onRemove=null]
   * @param {String} [options.containerClass="muuri"]
   * @param {String} [options.itemClass="muuri-item"]
   * @param {String} [options.itemVisibleClass="muuri-item-visible"]
   * @param {String} [options.itemHiddenClass="muuri-item-hidden"]
   * @param {String} [options.itemPositioningClass="muuri-item-positioning"]
   * @param {String} [options.itemDraggingClass="muuri-item-dragging"]
   * @param {String} [options.itemReleasingClass="muuri-item-releasing"]
   * @param {String} [options.itemPlaceholderClass="muuri-item-placeholder"]
   */

  function Grid(element, options) {
    var inst = this;
    var settings;
    var items;
    var layoutOnResize;

    // Allow passing element as selector string. Store element for instance.
    element = this._element =
      typeof element === stringType ? window.document.querySelector(element) : element;

    // Throw an error if the container element is not body element or does not
    // exist within the body element.
    var isElementInDom = element.getRootNode
      ? element.getRootNode({ composed: true }) === document
      : window.document.body.contains(element);
    if (!isElementInDom || element === window.document.documentElement) {
      throw new Error('Container element must be an existing DOM element');
    }

    // Create instance settings by merging the options with default options.
    settings = this._settings = mergeSettings(Grid.defaultOptions, options);

    // Sanitize dragSort setting.
    if (!isFunction(settings.dragSort)) {
      settings.dragSort = !!settings.dragSort;
    }

    // Create instance id and store it to the grid instances collection.
    this._id = createUid();
    gridInstances[this._id] = inst;

    // Destroyed flag.
    this._isDestroyed = false;

    // The layout object (mutated on every layout).
    this._layout = {
      id: 0,
      items: [],
      slots: [],
      setWidth: false,
      setHeight: false,
      width: 0,
      height: 0
    };

    // Create private Emitter instance.
    this._emitter = new Emitter();

    // Add container element's class name.
    addClass(element, settings.containerClass);

    // Create initial items.
    this._items = [];
    items = settings.items;
    if (typeof items === stringType) {
      toArray(element.children).forEach(function(itemElement) {
        if (items === '*' || elementMatches(itemElement, items)) {
          inst._items.push(new Item(inst, itemElement));
        }
      });
    } else if (Array.isArray(items) || isNodeList(items)) {
      this._items = toArray(items).map(function(itemElement) {
        return new Item(inst, itemElement);
      });
    }

    // If layoutOnResize option is a valid number sanitize it and bind the resize
    // handler.
    layoutOnResize = settings.layoutOnResize;
    if (typeof layoutOnResize !== numberType$1) {
      layoutOnResize = layoutOnResize === true ? 0 : -1;
    }
    if (layoutOnResize >= 0) {
      window.addEventListener(
        'resize',
        (inst._resizeHandler = debounce(function() {
          inst.refreshItems().layout();
        }, layoutOnResize))
      );
    }

    // Layout on init if necessary.
    if (settings.layoutOnInit) {
      this.layout(true);
    }
  }

  /**
   * Public properties
   * *****************
   */

  /**
   * @see Item
   */
  Grid.Item = Item;

  /**
   * @see ItemLayout
   */
  Grid.ItemLayout = ItemLayout;

  /**
   * @see ItemVisibility
   */
  Grid.ItemVisibility = ItemVisibility;

  /**
   * @see ItemMigrate
   */
  Grid.ItemMigrate = ItemMigrate;

  /**
   * @see ItemAnimate
   */
  Grid.ItemAnimate = ItemAnimate;

  /**
   * @see ItemDrag
   */
  Grid.ItemDrag = ItemDrag;

  /**
   * @see ItemRelease
   */
  Grid.ItemRelease = ItemRelease;

  /**
   * @see ItemDragPlaceholder
   */
  Grid.ItemDragPlaceholder = ItemDragPlaceholder;

  /**
   * @see Emitter
   */
  Grid.Emitter = Emitter;

  /**
   * @see Dragger
   */
  Grid.Dragger = Dragger;

  /**
   * @see Packer
   */
  Grid.Packer = Packer;

  /**
   * Default options for Grid instance.
   *
   * @public
   * @memberof Grid
   */
  Grid.defaultOptions = {
    // Item elements
    items: '*',

    // Default show animation
    showDuration: 300,
    showEasing: 'ease',

    // Default hide animation
    hideDuration: 300,
    hideEasing: 'ease',

    // Item's visible/hidden state styles
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    },

    // Layout
    layout: {
      fillGaps: false,
      horizontal: false,
      alignRight: false,
      alignBottom: false,
      rounding: true
    },
    layoutOnResize: 100,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',

    // Sorting
    sortData: null,

    // Drag & Drop
    dragEnabled: false,
    dragContainer: null,
    dragStartPredicate: {
      distance: 0,
      delay: 0,
      handle: false
    },
    dragAxis: null,
    dragSort: true,
    dragSortHeuristics: {
      sortInterval: 100,
      minDragDistance: 10,
      minBounceBackAngle: 1
    },
    dragSortPredicate: {
      threshold: 50,
      action: actionMove
    },
    dragReleaseDuration: 300,
    dragReleaseEasing: 'ease',
    dragCssProps: {
      touchAction: 'none',
      userSelect: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0, 0, 0, 0)',
      touchCallout: 'none',
      contentZooming: 'none'
    },
    dragPlaceholder: {
      enabled: false,
      duration: 300,
      easing: 'ease',
      createElement: null,
      onCreate: null,
      onRemove: null
    },

    // Classnames
    containerClass: 'muuri',
    itemClass: 'muuri-item',
    itemVisibleClass: 'muuri-item-shown',
    itemHiddenClass: 'muuri-item-hidden',
    itemPositioningClass: 'muuri-item-positioning',
    itemDraggingClass: 'muuri-item-dragging',
    itemReleasingClass: 'muuri-item-releasing',
    itemPlaceholderClass: 'muuri-item-placeholder'
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.on = function(event, listener) {
    this._emitter.on(event, listener);
    return this;
  };

  /**
   * Unbind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.off = function(event, listener) {
    this._emitter.off(event, listener);
    return this;
  };

  /**
   * Get the container element.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {HTMLElement}
   */
  Grid.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get all items. Optionally you can provide specific targets (elements and
   * indices). Note that the returned array is not the same object used by the
   * instance so modifying it will not affect instance's items. All items that
   * are not found are omitted from the returned array.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [targets]
   * @returns {Item[]}
   */
  Grid.prototype.getItems = function(targets) {
    // Return all items immediately if no targets were provided or if the
    // instance is destroyed.
    if (this._isDestroyed || (!targets && targets !== 0)) {
      return this._items.slice(0);
    }

    var ret = [];
    var targetItems = toArray(targets);
    var item;
    var i;

    // If target items are defined return filtered results.
    for (i = 0; i < targetItems.length; i++) {
      item = this._getItem(targetItems[i]);
      item && ret.push(item);
    }

    return ret;
  };

  /**
   * Update the cached dimensions of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshItems = function(items) {
    if (this._isDestroyed) return this;

    var targets = this.getItems(items);
    var i;

    for (i = 0; i < targets.length; i++) {
      targets[i]._refreshDimensions();
    }

    return this;
  };

  /**
   * Update the sort data of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshSortData = function(items) {
    if (this._isDestroyed) return this;

    var targetItems = this.getItems(items);
    var i;

    for (i = 0; i < targetItems.length; i++) {
      targetItems[i]._refreshSortData();
    }

    return this;
  };

  /**
   * Synchronize the item elements to match the order of the items in the DOM.
   * This comes handy if you need to keep the DOM structure matched with the
   * order of the items. Note that if an item's element is not currently a child
   * of the container element (if it is dragged for example) it is ignored and
   * left untouched.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {Grid}
   */
  Grid.prototype.synchronize = function() {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items;
    var fragment;
    var element;
    var i;

    // Append all elements in order to the container element.
    if (items.length) {
      for (i = 0; i < items.length; i++) {
        element = items[i]._element;
        if (element.parentNode === container) {
          fragment = fragment || window.document.createDocumentFragment();
          fragment.appendChild(element);
        }
      }

      if (fragment) container.appendChild(fragment);
    }

    // Emit synchronize event.
    this._emit(eventSynchronize);

    return this;
  };

  /**
   * Calculate and apply item positions.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [instant=false]
   * @param {LayoutCallback} [onFinish]
   * @returns {Grid}
   */
  Grid.prototype.layout = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var inst = this;
    var element = this._element;
    var layout = this._updateLayout();
    var layoutId = layout.id;
    var itemsLength = layout.items.length;
    var counter = itemsLength;
    var isBorderBox;
    var item;
    var i;

    // The finish function, which will be used for checking if all the items
    // have laid out yet. After all items have finished their animations call
    // callback and emit layoutEnd event. Only emit layoutEnd event if there
    // hasn't been a new layout call during this layout.
    function tryFinish() {
      if (--counter > 0) return;

      var hasLayoutChanged = inst._layout.id !== layoutId;
      var callback = isFunction(instant) ? instant : onFinish;

      if (isFunction(callback)) {
        callback(hasLayoutChanged, layout.items.slice(0));
      }

      if (!hasLayoutChanged && inst._hasListeners(eventLayoutEnd)) {
        inst._emit(eventLayoutEnd, layout.items.slice(0));
      }
    }

    // If grid's width or height was modified, we need to update it's cached
    // dimensions. Also keep in mind that grid's cached width/height should
    // always equal to what elem.getBoundingClientRect() would return, so
    // therefore we need to add the grid element's borders to the dimensions if
    // it's box-sizing is border-box. Note that we support providing the
    // dimensions as a string here too so that one can define the unit of the
    // dimensions, in which case we don't do the border-box check.
    if (
      (layout.setHeight && typeof layout.height === numberType$1) ||
      (layout.setWidth && typeof layout.width === numberType$1)
    ) {
      isBorderBox = getStyle(element, 'box-sizing') === 'border-box';
    }
    if (layout.setHeight) {
      if (typeof layout.height === numberType$1) {
        element.style.height =
          (isBorderBox ? layout.height + this._borderTop + this._borderBottom : layout.height) + 'px';
      } else {
        element.style.height = layout.height;
      }
    }
    if (layout.setWidth) {
      if (typeof layout.width === numberType$1) {
        element.style.width =
          (isBorderBox ? layout.width + this._borderLeft + this._borderRight : layout.width) + 'px';
      } else {
        element.style.width = layout.width;
      }
    }

    // Emit layoutStart event. Note that this is intentionally emitted after the
    // container element's dimensions are set, because otherwise there would be
    // no hook for reacting to container dimension changes.
    if (this._hasListeners(eventLayoutStart)) {
      this._emit(eventLayoutStart, layout.items.slice(0));
    }

    // If there are no items let's finish quickly.
    if (!itemsLength) {
      tryFinish();
      return this;
    }

    // If there are items let's position them.
    for (i = 0; i < itemsLength; i++) {
      item = layout.items[i];
      if (!item) continue;

      // Update item's position.
      item._left = layout.slots[i * 2];
      item._top = layout.slots[i * 2 + 1];

      // Layout item if it is not dragged.
      item.isDragging() ? tryFinish() : item._layout.start(instant === true, tryFinish);
    }

    return this;
  };

  /**
   * Add new items by providing the elements you wish to add to the instance and
   * optionally provide the index where you want the items to be inserted into.
   * All elements that are not already children of the container element will be
   * automatically appended to the container element. If an element has it's CSS
   * display property set to "none" it will be marked as inactive during the
   * initiation process. As long as the item is inactive it will not be part of
   * the layout, but it will retain it's index. You can activate items at any
   * point with grid.show() method. This method will automatically call
   * grid.layout() if one or more of the added elements are visible. If only
   * hidden items are added no layout will be called. All the new visible items
   * are positioned without animation during their first layout.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(HTMLElement|HTMLElement[])} elements
   * @param {Object} [options]
   * @param {Number} [options.index=-1]
   * @param {Boolean} [options.isActive]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.add = function(elements, options) {
    if (this._isDestroyed || !elements) return [];

    var newItems = toArray(elements);
    if (!newItems.length) return newItems;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var items = this._items;
    var needsLayout = false;
    var item;
    var i;

    // Map provided elements into new grid items.
    for (i = 0; i < newItems.length; i++) {
      item = new Item(this, newItems[i], opts.isActive);
      newItems[i] = item;

      // If the item to be added is active, we need to do a layout. Also, we
      // need to mark the item with the skipNextAnimation flag to make it
      // position instantly (without animation) during the next layout. Without
      // the hack the item would animate to it's new position from the northwest
      // corner of the grid, which feels a bit buggy (imho).
      if (item._isActive) {
        needsLayout = true;
        item._layout._skipNextAnimation = true;
      }
    }

    // Add the new items to the items collection to correct index.
    arrayInsert(items, newItems, opts.index);

    // Emit add event.
    if (this._hasListeners(eventAdd)) {
      this._emit(eventAdd, newItems.slice(0));
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return newItems;
  };

  /**
   * Remove items from the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.removeElements=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.remove = function(items, options) {
    if (this._isDestroyed) return this;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var needsLayout = false;
    var allItems = this.getItems();
    var targetItems = this.getItems(items);
    var indices = [];
    var item;
    var i;

    // Remove the individual items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];
      indices.push(allItems.indexOf(item));
      if (item._isActive) needsLayout = true;
      item._destroy(opts.removeElements);
    }

    // Emit remove event.
    if (this._hasListeners(eventRemove)) {
      this._emit(eventRemove, targetItems.slice(0), indices);
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return targetItems;
  };

  /**
   * Show instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {ShowCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.show = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, true, options);
    return this;
  };

  /**
   * Hide instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {HideCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.hide = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, false, options);
    return this;
  };

  /**
   * Filter items. Expects at least one argument, a predicate, which should be
   * either a function or a string. The predicate callback is executed for every
   * item in the instance. If the return value of the predicate is truthy the
   * item in question will be shown and otherwise hidden. The predicate callback
   * receives the item instance as it's argument. If the predicate is a string
   * it is considered to be a selector and it is checked against every item
   * element in the instance with the native element.matches() method. All the
   * matching items will be shown and others hidden.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|String)} predicate
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {FilterCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.filter = function(predicate, options) {
    if (this._isDestroyed || !this._items.length) return this;

    var itemsToShow = [];
    var itemsToHide = [];
    var isPredicateString = typeof predicate === stringType;
    var isPredicateFn = isFunction(predicate);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var onFinish = isFunction(opts.onFinish) ? opts.onFinish : null;
    var tryFinishCounter = -1;
    var tryFinish = noop;
    var item;
    var i;

    // If we have onFinish callback, let's create proper tryFinish callback.
    if (onFinish) {
      tryFinish = function() {
        ++tryFinishCounter && onFinish(itemsToShow.slice(0), itemsToHide.slice(0));
      };
    }

    // Check which items need to be shown and which hidden.
    if (isPredicateFn || isPredicateString) {
      for (i = 0; i < this._items.length; i++) {
        item = this._items[i];
        if (isPredicateFn ? predicate(item) : elementMatches(item._element, predicate)) {
          itemsToShow.push(item);
        } else {
          itemsToHide.push(item);
        }
      }
    }

    // Show items that need to be shown.
    if (itemsToShow.length) {
      this.show(itemsToShow, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // Hide items that need to be hidden.
    if (itemsToHide.length) {
      this.hide(itemsToHide, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // If there are any items to filter.
    if (itemsToShow.length || itemsToHide.length) {
      // Emit filter event.
      if (this._hasListeners(eventFilter)) {
        this._emit(eventFilter, itemsToShow.slice(0), itemsToHide.slice(0));
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Sort items. There are three ways to sort the items. The first is simply by
   * providing a function as the comparer which works identically to native
   * array sort. Alternatively you can sort by the sort data you have provided
   * in the instance's options. Just provide the sort data key(s) as a string
   * (separated by space) and the items will be sorted based on the provided
   * sort data keys. Lastly you have the opportunity to provide a presorted
   * array of items which will be used to sync the internal items array in the
   * same order.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|Item[]|String|String[])} comparer
   * @param {Object} [options]
   * @param {Boolean} [options.descending=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.sort = (function() {
    var sortComparer;
    var isDescending;
    var origItems;
    var indexMap;

    function parseCriteria(data) {
      return data
        .trim()
        .split(' ')
        .map(function(val) {
          return val.split(':');
        });
    }

    function getIndexMap(items) {
      var ret = {};
      for (var i = 0; i < items.length; i++) {
        ret[items[i]._id] = i;
      }
      return ret;
    }

    function compareIndices(itemA, itemB) {
      var indexA = indexMap[itemA._id];
      var indexB = indexMap[itemB._id];
      return isDescending ? indexB - indexA : indexA - indexB;
    }

    function defaultComparer(a, b) {
      var result = 0;
      var criteriaName;
      var criteriaOrder;
      var valA;
      var valB;

      // Loop through the list of sort criteria.
      for (var i = 0; i < sortComparer.length; i++) {
        // Get the criteria name, which should match an item's sort data key.
        criteriaName = sortComparer[i][0];
        criteriaOrder = sortComparer[i][1];

        // Get items' cached sort values for the criteria. If the item has no sort
        // data let's update the items sort data (this is a lazy load mechanism).
        valA = (a._sortData ? a : a._refreshSortData())._sortData[criteriaName];
        valB = (b._sortData ? b : b._refreshSortData())._sortData[criteriaName];

        // Sort the items in descending order if defined so explicitly. Otherwise
        // sort items in ascending order.
        if (criteriaOrder === 'desc' || (!criteriaOrder && isDescending)) {
          result = valB < valA ? -1 : valB > valA ? 1 : 0;
        } else {
          result = valA < valB ? -1 : valA > valB ? 1 : 0;
        }

        // If we have -1 or 1 as the return value, let's return it immediately.
        if (result) return result;
      }

      // If values are equal let's compare the item indices to make sure we
      // have a stable sort.
      if (!result) {
        if (!indexMap) indexMap = getIndexMap(origItems);
        result = compareIndices(a, b);
      }
      return result;
    }

    function customComparer(a, b) {
      var result = sortComparer(a, b);
      // If descending let's invert the result value.
      if (isDescending && result) result = -result;
      // If we have a valid result (not zero) let's return it right away.
      if (result) return result;
      // If result is zero let's compare the item indices to make sure we have a
      // stable sort.
      if (!indexMap) indexMap = getIndexMap(origItems);
      return compareIndices(a, b);
    }

    return function(comparer, options) {
      if (this._isDestroyed || this._items.length < 2) return this;

      var items = this._items;
      var opts = options || 0;
      var layout = opts.layout ? opts.layout : opts.layout === undefined;
      var i;

      // Setup parent scope data.
      sortComparer = comparer;
      isDescending = !!opts.descending;
      origItems = items.slice(0);
      indexMap = null;

      // If function is provided do a native array sort.
      if (isFunction(sortComparer)) {
        items.sort(customComparer);
      }
      // Otherwise if we got a string, let's sort by the sort data as provided in
      // the instance's options.
      else if (typeof sortComparer === stringType) {
        sortComparer = parseCriteria(comparer);
        items.sort(defaultComparer);
      }
      // Otherwise if we got an array, let's assume it's a presorted array of the
      // items and order the items based on it.
      else if (Array.isArray(sortComparer)) {
        if (sortComparer.length !== items.length) {
          throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
        }
        for (i = 0; i < items.length; i++) {
          if (sortComparer.indexOf(items[i]) < 0) {
            throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
          }
          items[i] = sortComparer[i];
        }
        if (isDescending) items.reverse();
      }
      // Otherwise let's just skip it, nothing we can do here.
      else {
        /** @todo Maybe throw an error here? */
        return this;
      }

      // Emit sort event.
      if (this._hasListeners(eventSort)) {
        this._emit(eventSort, items.slice(0), origItems);
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }

      return this;
    };
  })();

  /**
   * Move item to another index or in place of another item.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {String} [options.action="move"]
   *   - Accepts either "move" or "swap".
   *   - "move" moves the item in place of the other item.
   *   - "swap" swaps the position of the items.
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.move = function(item, position, options) {
    if (this._isDestroyed || this._items.length < 2) return this;

    var items = this._items;
    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var isSwap = opts.action === actionSwap;
    var action = isSwap ? actionSwap : actionMove;
    var fromItem = this._getItem(item);
    var toItem = this._getItem(position);
    var fromIndex;
    var toIndex;

    // Make sure the items exist and are not the same.
    if (fromItem && toItem && fromItem !== toItem) {
      // Get the indices of the items.
      fromIndex = items.indexOf(fromItem);
      toIndex = items.indexOf(toItem);

      // Do the move/swap.
      if (isSwap) {
        arraySwap(items, fromIndex, toIndex);
      } else {
        arrayMove(items, fromIndex, toIndex);
      }

      // Emit move event.
      if (this._hasListeners(eventMove)) {
        this._emit(eventMove, {
          item: fromItem,
          fromIndex: fromIndex,
          toIndex: toIndex,
          action: action
        });
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Send item to another Grid instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {Grid} grid
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {HTMLElement} [options.appendTo=document.body]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutSender=true]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutReceiver=true]
   * @returns {Grid}
   */
  Grid.prototype.send = function(item, grid, position, options) {
    if (this._isDestroyed || grid._isDestroyed || this === grid) return this;

    // Make sure we have a valid target item.
    item = this._getItem(item);
    if (!item) return this;

    var opts = options || 0;
    var container = opts.appendTo || window.document.body;
    var layoutSender = opts.layoutSender ? opts.layoutSender : opts.layoutSender === undefined;
    var layoutReceiver = opts.layoutReceiver
      ? opts.layoutReceiver
      : opts.layoutReceiver === undefined;

    // Start the migration process.
    item._migrate.start(grid, position, container);

    // If migration was started successfully and the item is active, let's layout
    // the grids.
    if (item._migrate._isActive && item._isActive) {
      if (layoutSender) {
        this.layout(
          layoutSender === instantLayout,
          isFunction(layoutSender) ? layoutSender : undefined
        );
      }
      if (layoutReceiver) {
        grid.layout(
          layoutReceiver === instantLayout,
          isFunction(layoutReceiver) ? layoutReceiver : undefined
        );
      }
    }

    return this;
  };

  /**
   * Destroy the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [removeElements=false]
   * @returns {Grid}
   */
  Grid.prototype.destroy = function(removeElements) {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items.slice(0);
    var i;

    // Unbind window resize event listener.
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    // Destroy items.
    for (i = 0; i < items.length; i++) {
      items[i]._destroy(removeElements);
    }

    // Restore container.
    removeClass(container, this._settings.containerClass);
    container.style.height = '';
    container.style.width = '';

    // Emit destroy event and unbind all events.
    this._emit(eventDestroy);
    this._emitter.destroy();

    // Remove reference from the grid instances collection.
    gridInstances[this._id] = undefined;

    // Flag instance as destroyed.
    this._isDestroyed = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get instance's item by element or by index. Target can also be an Item
   * instance in which case the function returns the item if it exists within
   * related Grid instance. If nothing is found with the provided target, null
   * is returned.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} [target]
   * @returns {?Item}
   */
  Grid.prototype._getItem = function(target) {
    // If no target is specified or the instance is destroyed, return null.
    if (this._isDestroyed || (!target && target !== 0)) {
      return null;
    }

    // If target is number return the item in that index. If the number is lower
    // than zero look for the item starting from the end of the items array. For
    // example -1 for the last item, -2 for the second last item, etc.
    if (typeof target === numberType$1) {
      return this._items[target > -1 ? target : this._items.length + target] || null;
    }

    // If the target is an instance of Item return it if it is attached to this
    // Grid instance, otherwise return null.
    if (target instanceof Item) {
      return target._gridId === this._id ? target : null;
    }

    // In other cases let's assume that the target is an element, so let's try
    // to find an item that matches the element and return it. If item is not
    // found return null.
    /** @todo This could be made a lot faster by using Map/WeakMap of elements. */
    for (var i = 0; i < this._items.length; i++) {
      if (this._items[i]._element === target) {
        return this._items[i];
      }
    }

    return null;
  };

  /**
   * Recalculates and updates instance's layout data.
   *
   * @private
   * @memberof Grid.prototype
   * @returns {LayoutData}
   */
  Grid.prototype._updateLayout = function() {
    var layout = this._layout;
    var settings = this._settings.layout;
    var width;
    var height;
    var newLayout;
    var i;

    // Let's increment layout id.
    ++layout.id;

    // Let's update layout items
    layout.items.length = 0;
    for (i = 0; i < this._items.length; i++) {
      if (this._items[i]._isActive) layout.items.push(this._items[i]);
    }

    // Let's make sure we have the correct container dimensions.
    this._refreshDimensions();

    // Calculate container width and height (without borders).
    width = this._width - this._borderLeft - this._borderRight;
    height = this._height - this._borderTop - this._borderBottom;

    // Calculate new layout.
    if (isFunction(settings)) {
      newLayout = settings(layout.items, width, height);
    } else {
      newLayout = packer.getLayout(layout.items, width, height, layout.slots, settings);
    }

    // Let's update the grid's layout.
    layout.slots = newLayout.slots;
    layout.setWidth = Boolean(newLayout.setWidth);
    layout.setHeight = Boolean(newLayout.setHeight);
    layout.width = newLayout.width;
    layout.height = newLayout.height;

    return layout;
  };

  /**
   * Emit a grid event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @param {...*} [arg]
   */
  Grid.prototype._emit = function() {
    if (this._isDestroyed) return;
    this._emitter.emit.apply(this._emitter, arguments);
  };

  /**
   * Check if there are any events listeners for an event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @returns {Boolean}
   */
  Grid.prototype._hasListeners = function(event) {
    var listeners = this._emitter._events[event];
    return !!(listeners && listeners.length);
  };

  /**
   * Update container's width, height and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._updateBoundingRect = function() {
    var element = this._element;
    var rect = element.getBoundingClientRect();
    this._width = rect.width;
    this._height = rect.height;
    this._left = rect.left;
    this._top = rect.top;
  };

  /**
   * Update container's border sizes.
   *
   * @private
   * @memberof Grid.prototype
   * @param {Boolean} left
   * @param {Boolean} right
   * @param {Boolean} top
   * @param {Boolean} bottom
   */
  Grid.prototype._updateBorders = function(left, right, top, bottom) {
    var element = this._element;
    if (left) this._borderLeft = getStyleAsFloat(element, 'border-left-width');
    if (right) this._borderRight = getStyleAsFloat(element, 'border-right-width');
    if (top) this._borderTop = getStyleAsFloat(element, 'border-top-width');
    if (bottom) this._borderBottom = getStyleAsFloat(element, 'border-bottom-width');
  };

  /**
   * Refresh all of container's internal dimensions and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._refreshDimensions = function() {
    this._updateBoundingRect();
    this._updateBorders(1, 1, 1, 1);
  };

  /**
   * Show or hide Grid instance's items.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Boolean} toVisible
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {(ShowCallback|HideCallback)} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   */
  Grid.prototype._setItemsVisibility = function(items, toVisible, options) {
    var grid = this;
    var targetItems = this.getItems(items);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var callback = opts.onFinish;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var counter = targetItems.length;
    var startEvent = toVisible ? eventShowStart : eventHideStart;
    var endEvent = toVisible ? eventShowEnd : eventHideEnd;
    var method = toVisible ? 'show' : 'hide';
    var needsLayout = false;
    var completedItems = [];
    var hiddenItems = [];
    var item;
    var i;

    // If there are no items call the callback, but don't emit any events.
    if (!counter) {
      if (isFunction(callback)) callback(targetItems);
      return;
    }

    // Emit showStart/hideStart event.
    if (this._hasListeners(startEvent)) {
      this._emit(startEvent, targetItems.slice(0));
    }

    // Show/hide items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];

      // If inactive item is shown or active item is hidden we need to do
      // layout.
      if ((toVisible && !item._isActive) || (!toVisible && item._isActive)) {
        needsLayout = true;
      }

      // If inactive item is shown we also need to do a little hack to make the
      // item not animate it's next positioning (layout).
      if (toVisible && !item._isActive) {
        item._layout._skipNextAnimation = true;
      }

      // If a hidden item is being shown we need to refresh the item's
      // dimensions.
      if (toVisible && item._visibility._isHidden) {
        hiddenItems.push(item);
      }

      // Show/hide the item.
      item._visibility[method](isInstant, function(interrupted, item) {
        // If the current item's animation was not interrupted add it to the
        // completedItems array.
        if (!interrupted) completedItems.push(item);

        // If all items have finished their animations call the callback
        // and emit showEnd/hideEnd event.
        if (--counter < 1) {
          if (isFunction(callback)) callback(completedItems.slice(0));
          if (grid._hasListeners(endEvent)) grid._emit(endEvent, completedItems.slice(0));
        }
      });
    }

    // Refresh hidden items.
    if (hiddenItems.length) this.refreshItems(hiddenItems);

    // Layout if needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Merge default settings with user settings. The returned object is a new
   * object with merged values. The merging is a deep merge meaning that all
   * objects and arrays within the provided settings objects will be also merged
   * so that modifying the values of the settings object will have no effect on
   * the returned object.
   *
   * @param {Object} defaultSettings
   * @param {Object} [userSettings]
   * @returns {Object} Returns a new object.
   */
  function mergeSettings(defaultSettings, userSettings) {
    // Create a fresh copy of default settings.
    var ret = mergeObjects({}, defaultSettings);

    // Merge user settings to default settings.
    if (userSettings) {
      ret = mergeObjects(ret, userSettings);
    }

    // Handle visible/hidden styles manually so that the whole object is
    // overridden instead of the props.
    ret.visibleStyles = (userSettings || 0).visibleStyles || (defaultSettings || 0).visibleStyles;
    ret.hiddenStyles = (userSettings || 0).hiddenStyles || (defaultSettings || 0).hiddenStyles;

    return ret;
  }

  /**
   * Merge two objects recursively (deep merge). The source object's properties
   * are merged to the target object.
   *
   * @param {Object} target
   *   - The target object.
   * @param {Object} source
   *   - The source object.
   * @returns {Object} Returns the target object.
   */
  function mergeObjects(target, source) {
    var sourceKeys = Object.keys(source);
    var length = sourceKeys.length;
    var isSourceObject;
    var propName;
    var i;

    for (i = 0; i < length; i++) {
      propName = sourceKeys[i];
      isSourceObject = isPlainObject(source[propName]);

      // If target and source values are both objects, merge the objects and
      // assign the merged value to the target property.
      if (isPlainObject(target[propName]) && isSourceObject) {
        target[propName] = mergeObjects(mergeObjects({}, target[propName]), source[propName]);
        continue;
      }

      // If source's value is object and target's is not let's clone the object as
      // the target's value.
      if (isSourceObject) {
        target[propName] = mergeObjects({}, source[propName]);
        continue;
      }

      // If source's value is an array let's clone the array as the target's
      // value.
      if (Array.isArray(source[propName])) {
        target[propName] = source[propName].slice(0);
        continue;
      }

      // In all other cases let's just directly assign the source's value as the
      // target's value.
      target[propName] = source[propName];
    }

    return target;
  }

  return Grid;

}));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativeVisualizersWrapper; });




var AlternativeVisualizersWrapper = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AlternativeVisualizersWrapper, _super);
    function AlternativeVisualizersWrapper(visualizers, targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.visualizers = visualizers;
        if (!visualizers || visualizers.length < 2) {
            throw new Error("VisualizerArrayWrapper works with visualizers collection only.");
        }
        _this.visualizer = visualizers[0];
        return _this;
    }
    AlternativeVisualizersWrapper.prototype.setVisualizer = function (name) {
        if (!!this.visualizer) {
            this.visualizer.destroy();
        }
        this.visualizer = this.visualizers.filter(function (v) { return v.name === name; })[0];
        this.visualizer.render(this.visualizerContainer);
        this.invokeOnUpdate();
    };
    AlternativeVisualizersWrapper.prototype.update = function (data) {
        this.visualizer.update(data);
    };
    AlternativeVisualizersWrapper.prototype.destroy = function () {
        this.visualizer.destroy();
        _super.prototype.destroy.call(this);
    };
    AlternativeVisualizersWrapper.prototype.renderContent = function (container) {
        this.visualizerContainer = container;
        this.visualizer.render(this.visualizerContainer);
    };
    AlternativeVisualizersWrapper.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var selectWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.visualizers.map(function (visualizer) {
            return {
                value: visualizer.name,
                text: __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("visualizer_" + visualizer.name)
            };
        }), function (option) { return _this.visualizer.name === option.value; }, function (e) { return _this.setVisualizer(e.target.value); });
        toolbar.appendChild(selectWrapper);
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    return AlternativeVisualizersWrapper;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementVisibility; });
var ElementVisibility;
(function (ElementVisibility) {
    ElementVisibility["Visible"] = "Visible";
    ElementVisibility["Invisible"] = "Invisible";
    ElementVisibility["PublicInvisible"] = "PublicInvisible";
})(ElementVisibility || (ElementVisibility = {}));


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColumnDataType; });
var ColumnVisibility;
(function (ColumnVisibility) {
    ColumnVisibility["Visible"] = "Visible";
    ColumnVisibility["Invisible"] = "Invisible";
    ColumnVisibility["PublicInvisible"] = "PublicInvisible";
})(ColumnVisibility || (ColumnVisibility = {}));
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation["Column"] = "Column";
    QuestionLocation["Row"] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType["Text"] = "Text";
    ColumnDataType["FileLink"] = "FileLink";
    ColumnDataType["Image"] = "Image";
})(ColumnDataType || (ColumnDataType = {}));
// export interface ITableColumns {
//     columns: Array<ITableColumn>;
// }


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return englishStrings; });
//Uncomment this line on creating a translation file
//import { localization } from "../localization";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    resetFilter: "Reset Filter",
    clearButton: "Clear",
    addElement: "Choose question to show..."
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanPlotly; });




var BooleanPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](BooleanPlotly, _super);
    function BooleanPlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartTypes = BooleanPlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    Object.defineProperty(BooleanPlotly.prototype, "booleanQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: true,
        configurable: true
    });
    BooleanPlotly.prototype.getSelectedItemByText = function (itemText) {
        return new __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"](itemText);
    };
    BooleanPlotly.prototype.getValues = function () {
        return [this.booleanQuestion.valueTrue !== undefined ? this.booleanQuestion.valueTrue : true, this.booleanQuestion.valueFalse !== undefined ? this.booleanQuestion.valueFalse : false];
    };
    BooleanPlotly.prototype.getLabels = function () {
        return this.getValues();
    };
    BooleanPlotly.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var statistics = values.map(function (v) { return 0; });
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            values.forEach(function (val, index) {
                if (rowValue === val) {
                    statistics[index]++;
                }
            });
        });
        return [statistics];
    };
    BooleanPlotly.types = ["pie", "bar"];
    return BooleanPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("boolean", BooleanPlotly);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixPlotly; });




var MatrixPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixPlotly, _super);
    function MatrixPlotly(targetNode, question, data, options) {
        return _super.call(this, targetNode, question, data, options) || this;
    }
    MatrixPlotly.prototype.valuesSource = function () {
        var question = this.question;
        return question.columns;
    };
    MatrixPlotly.prototype.getLabels = function () {
        var question = this.question;
        return question.rows.map(function (row) {
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
        });
    };
    MatrixPlotly.prototype.getData = function () {
        var _this = this;
        var question = this.question;
        var datasets = this.valuesSource().map(function (choice) {
            return question.rows.map(function (v) { return 0; });
        });
        this.data.forEach(function (rowData) {
            var questionValue = rowData[_this.question.name];
            if (!!questionValue) {
                question.rows.forEach(function (row, index) {
                    _this.getValues().forEach(function (val, dsIndex) {
                        if (questionValue[row.value] == val) {
                            datasets[dsIndex][index]++;
                        }
                    });
                });
            }
        });
        return datasets;
    };
    return MatrixPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrix", MatrixPlotly);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugePlotly; });

var Plotly = __webpack_require__(11);




var GaugePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugePlotly, _super);
    function GaugePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartTypes = ["gauge", "bullet"];
        _this.chartType = "gauge";
        _this.chartNode = document.createElement("div");
        _this.toolbarChangeHandler = function (e) {
            if (_this.chartType !== e.target.value) {
                _this.chartType = e.target.value;
                _this.update(_this.data);
            }
        };
        return _this;
    }
    GaugePlotly.prototype.update = function (data) {
        if (data !== undefined) {
            this._result = undefined;
        }
        _super.prototype.update.call(this, data);
        this.destroy();
        this.createChart();
        this.invokeOnUpdate();
    };
    GaugePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, this.toolbarChangeHandler);
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    GaugePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
        this._result = undefined;
    };
    GaugePlotly.prototype.generateText = function (maxValue, minValue, stepsCount) {
        var texts = [];
        if (stepsCount === 5) {
            texts = [
                "very high (" + maxValue + ")",
                "high",
                "medium",
                "low",
                "very low (" + minValue + ")"
            ];
        }
        else {
            texts.push(maxValue);
            for (var i = 0; i < stepsCount - 2; i++) {
                texts.push("");
            }
            texts.push(minValue);
        }
        if (!!GaugePlotly.generateTextsCallback) {
            return GaugePlotly.generateTextsCallback(this.question, maxValue, minValue, stepsCount, texts);
        }
        return texts;
    };
    GaugePlotly.prototype.generateValues = function (maxValue, stepsCount) {
        var values = [];
        for (var i = 0; i < stepsCount; i++) {
            values.push(maxValue / stepsCount);
        }
        values.push(maxValue);
        return values;
    };
    GaugePlotly.prototype.generateColors = function (maxValue, minValue, stepsCount) {
        var palette = this.getColors();
        var colors = [];
        for (var i = 0; i < stepsCount; i++) {
            colors.push(palette[i]);
        }
        colors.push("rgba(255, 255, 255, 0)");
        return colors;
    };
    GaugePlotly.prototype.createChart = function () {
        var question = this.question;
        var rateValues = question.visibleRateValues;
        var maxValue = rateValues[rateValues.length - 1].value;
        var minValue = rateValues[0].value;
        var colors = this.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        var level = this.result;
        var data = [
            {
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [minValue, maxValue] },
                    shape: this.chartType,
                    bgcolor: "white",
                    bar: { color: colors[0] }
                },
                value: level,
                text: question.name,
                domain: { x: [0, 1], y: [0, 1] }
            }
        ];
        var layout = {
            width: 600,
            height: 400,
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor
        };
        var config = {
            displayModeBar: false,
            staticPlot: true
        };
        this.chart = Plotly.newPlot(this.chartNode, data, layout, config);
    };
    GaugePlotly.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
    };
    Object.defineProperty(GaugePlotly.prototype, "result", {
        get: function () {
            var _this = this;
            if (this._result === undefined) {
                var questionValues_1 = [];
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue) {
                        questionValues_1.push(questionValue);
                    }
                });
                this._result = questionValues_1 && (questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length) || 0;
                this._result = Math.ceil(this._result * 100) / 100;
            }
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    GaugePlotly.stepsCount = 5;
    return GaugePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizationManager__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return __WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return __WEBPACK_IMPORTED_MODULE_6__datatables_datatables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plotly_index__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "canLoadPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return __WEBPACK_IMPORTED_MODULE_7__plotly_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return __WEBPACK_IMPORTED_MODULE_8__wordcloud_wordcloud__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_stopwords_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__text__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_10__text__["a"]; });













/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiODNmZjRlMGUzM2U2NWY0OGRkZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXJCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWNvcmVcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXktY29yZVwiLFwiYW1kXCI6XCJzdXJ2ZXktY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9zZWxlY3RCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxpemF0aW9uUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdEJhc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBsb3RseVwiLFwiY29tbW9uanMyXCI6XCJwbG90bHkuanMtZGlzdFwiLFwiY29tbW9uanNcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJhbWRcIjpcInBsb3RseS5qcy1kaXN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bsb3RseS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmRjbG91ZC93b3JkY2xvdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzIiwid2VicGFjazovLy8uL34vbXV1cmkvZGlzdC9tdXVyaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXRhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9wbG90bHkvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxvdGx5L3JhdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29yZGNsb3VkL3N0b3B3b3Jkcy9lbmdsaXNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJXb3JkQ2xvdWRcIixcImNvbW1vbmpzMlwiOlwid29yZGNsb3VkXCIsXCJjb21tb25qc1wiOlwid29yZGNsb3VkXCIsXCJhbWRcIjpcIndvcmRjbG91ZFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9CQUFvQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxxQ0FBcUM7QUFDbEQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix5REFBeUQ7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseURBQXlEO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEIsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixhQUFhLEVBQUU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsWUFBWTtBQUN6QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXdEO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdEQUF3RDtBQUN4Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxLQUFLLEVBQ0wsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsV0FBVyxFQUNYLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxNQUFNLEVBQ04sSUFBSSxFQUNKLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDUCxJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsR0FBRyxFQUNILEdBQUcsRUFDSCxNQUFNLEVBQ04sT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLENBQ0osQ0FBQzs7Ozs7OztBQzlhRixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBRUw7QUFDTTtBQUNGO0FBQ087QUFDQztBQUVMO0FBQ1Q7QUFDTztBQUNNO0FBQ3JCIiwiZmlsZSI6Ii4vcGFja2FnZXMvc3VydmV5LmFuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpLCByZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIiksIHJlcXVpcmUoXCJ3b3JkY2xvdWRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlBbmFseXRpY3NcIiwgW1wic3VydmV5LWNvcmVcIiwgXCJwbG90bHkuanMtZGlzdFwiLCBcIndvcmRjbG91ZFwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpLCByZXF1aXJlKFwid29yZGNsb3VkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlBbmFseXRpY3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0sIHJvb3RbXCJQbG90bHlcIl0sIHJvb3RbXCJXb3JkQ2xvdWRcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4M2ZmNGUwZTMzZTY1ZjQ4ZGRmIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcblxuZGVjbGFyZSB0eXBlIFZpc3VhbGl6ZXJDb25zdHJ1Y3RvciA9IG5ldyAoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gIG9wdGlvbnM/OiBPYmplY3RcbikgPT4gYW55O1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvbk1hbmFnZXIge1xuICBzdGF0aWMgdml6dWFsaXplcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBcnJheTxWaXN1YWxpemVyQ29uc3RydWN0b3I+IH0gPSB7fTtcbiAgc3RhdGljIHJlZ2lzdGVyVmlzdWFsaXplcihcbiAgICB0eXBlTmFtZTogc3RyaW5nLFxuICAgIGNvbnN0cnVjdG9yOiBWaXN1YWxpemVyQ29uc3RydWN0b3JcbiAgKSB7XG4gICAgbGV0IHZpenVhbGl6ZXJzID0gVmlzdWFsaXphdGlvbk1hbmFnZXIudml6dWFsaXplcnNbdHlwZU5hbWVdO1xuICAgIGlmICghdml6dWFsaXplcnMpIHtcbiAgICAgIHZpenVhbGl6ZXJzID0gW107XG4gICAgICBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV0gPSB2aXp1YWxpemVycztcbiAgICB9XG4gICAgdml6dWFsaXplcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cbiAgc3RhdGljIGdldFZpc3VhbGl6ZXJzKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdml6dWFsaXplcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci52aXp1YWxpemVyc1t0eXBlTmFtZV07XG4gICAgaWYgKCF2aXp1YWxpemVycykge1xuICAgICAgcmV0dXJuIFtWaXN1YWxpemVyQmFzZV07XG4gICAgfVxuICAgIHJldHVybiB2aXp1YWxpemVycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbGl6YXRpb25NYW5hZ2VyLnRzIiwiZXhwb3J0IHZhciBfX2Fzc2lnbiA9XG4gICg8YW55Pk9iamVjdClbXCJhc3NpZ25cIl0gfHxcbiAgZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwIGluIHMpXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzOiBhbnksIGJhc2VDbGFzczogYW55KSB7XG4gIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKVxuICAgIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgZnVuY3Rpb24gX18oKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzcztcbiAgfVxuICB0aGlzQ2xhc3MucHJvdG90eXBlID1cbiAgICBiYXNlQ2xhc3MgPT09IG51bGxcbiAgICAgID8gT2JqZWN0LmNyZWF0ZShiYXNlQ2xhc3MpXG4gICAgICA6ICgoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSksIG5ldyAoPGFueT5fXykoKSk7XG59XG5cbmV4cG9ydCB2YXIgX19yZXN0ID0gZnVuY3Rpb24oc291cmNlOiBhbnksIGU6IGFueSkge1xuICB2YXIgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSlcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICBlLmluZGV4T2YocHJvcGVydHlOYW1lKSA8IDBcbiAgICApXG4gICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHNvdXJjZVtwcm9wZXJ0eU5hbWVdO1xuICBpZiAoXG4gICAgc291cmNlICE9IG51bGwgJiZcbiAgICB0eXBlb2YgKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXSA9PT0gXCJmdW5jdGlvblwiXG4gIClcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICBwcm9wZXJ0eVN5bWJvbHMgPSAoPGFueT5PYmplY3QpW1wiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCJdKHNvdXJjZSk7XG4gICAgICBpIDwgcHJvcGVydHlTeW1ib2xzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgIClcbiAgICAgIGlmIChlLmluZGV4T2YocHJvcGVydHlTeW1ib2xzW2ldKSA8IDApXG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eVN5bWJvbHNbaV1dID0gc291cmNlW3Byb3BlcnR5U3ltYm9sc1tpXV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCB2YXIgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uKFxuICBkZWNvcmF0b3JzOiBhbnksXG4gIHRhcmdldDogYW55LFxuICBrZXk6IGFueSxcbiAgZGVzYzogYW55XG4pIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIHIgPVxuICAgICAgYyA8IDNcbiAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgOiBkZXNjID09PSBudWxsXG4gICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgOiBkZXNjLFxuICAgIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZVxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgaWYgKChkID0gZGVjb3JhdG9yc1tpXSkpXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9oZWxwZXJzLnRzIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6ZXJCYXNlIHtcblxuICBwdWJsaWMgdG9vbGJhckl0ZW1DcmVhdG9yczogeyBbbmFtZTogc3RyaW5nXTogKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiBIVE1MRWxlbWVudCB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlclRvb2xiYXJJdGVtKG5hbWU6IHN0cmluZywgY3JlYXRvcjogKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudG9vbGJhckl0ZW1DcmVhdG9yc1tuYW1lXSA9IGNyZWF0b3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwidmlzdWFsaXplclwiO1xuICB9XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgb25VcGRhdGU6ICgpID0+IHZvaWQ7XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb250ZW50KGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJUaGlzIHF1ZXN0aW9uIHR5cGUgaXMgbm90IHZpc3VhbGl6ZWQgeWV0XCI7XG4gIH1cblxuICByZW5kZXIodGFyZ2V0RWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCB8fCB0aGlzLnRhcmdldEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0b29sYmFyTm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXZpc3VhbGl6ZXJfX2NvbnRlbnRcIjtcblxuICAgIHRoaXMuY3JlYXRlVG9vbGJhcih0b29sYmFyTm9kZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRvb2xiYXJOb2RlQ29udGFpbmVyKTtcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgT2JqZWN0LmtleXModGhpcy50b29sYmFySXRlbUNyZWF0b3JzIHx8IHt9KS5mb3JFYWNoKHRvb2xiYXJJdGVtTmFtZSA9PiB0aGlzLnRvb2xiYXJJdGVtQ3JlYXRvcnNbdG9vbGJhckl0ZW1OYW1lXSh0b29sYmFyKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhcihjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9vbGJhci5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyXCI7XG4gICAgdGhpcy5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICB9XG5cbiAgaW52b2tlT25VcGRhdGUoKSB7XG4gICAgdGhpcy5vblVwZGF0ZSAmJiB0aGlzLm9uVXBkYXRlKCk7XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdldENvbG9ycygpO1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICB9XG5cbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZjdmN2Y3XCI7XG5cbiAgc3RhdGljIGN1c3RvbUNvbG9yczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzID0gW1xuICAgIFwiIzg2ZTFmYlwiLFxuICAgIFwiIzM5OTlmYlwiLFxuICAgIFwiI2ZmNjc3MVwiLFxuICAgIFwiIzFlYjQ5NlwiLFxuICAgIFwiI2ZmYzE1MlwiLFxuICAgIFwiI2FiYTFmZlwiLFxuICAgIFwiIzdkOGRhNVwiLFxuICAgIFwiIzRlYzQ2Y1wiLFxuICAgIFwiI2NmMzdhNlwiLFxuICAgIFwiIzRlNjE5OFwiXG4gIF07XG5cbiAgZ2V0Q29sb3JzKGNvdW50ID0gMTApIHtcbiAgICBjb25zdCBjb2xvcnMgPVxuICAgICAgQXJyYXkuaXNBcnJheShWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMpICYmXG4gICAgICBWaXN1YWxpemVyQmFzZS5jdXN0b21Db2xvcnMubGVuZ3RoID4gMFxuICAgICAgICA/IFZpc3VhbGl6ZXJCYXNlLmN1c3RvbUNvbG9yc1xuICAgICAgICA6IFZpc3VhbGl6ZXJCYXNlLmNvbG9ycztcblxuICAgIGxldCBtYW55Q29sb3JzOiBhbnkgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgbWFueUNvbG9ycyA9IG1hbnlDb2xvcnMuY29uY2F0KGNvbG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbnlDb2xvcnM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemVyQmFzZS50cyIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1jb3JlXCIsXCJjb21tb25qc1wiOlwic3VydmV5LWNvcmVcIixcImFtZFwiOlwic3VydmV5LWNvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFRvb2xiYXJIZWxwZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTZWxlY3Rvcih0b29sYmFyOiBIVE1MRGl2RWxlbWVudCwgb3B0aW9uczogQXJyYXk8e3ZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZ30+LCBpc1NlbGVjdGVkOiAob3B0aW9uOiB7dmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nfSkgPT4gYm9vbGVhbiwgaGFuZGVyOiAoZTogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VsZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fc2VsZWN0LXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fc2VsZWN0XCI7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gb3B0aW9uLnRleHQ7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxlY3Qub25jaGFuZ2UgPSBoYW5kZXI7XHJcbiAgICAgICAgc2VsZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RXcmFwcGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVCdXR0b24odG9vbGJhcjogSFRNTERpdkVsZW1lbnQsIGhhbmRlcjogKGU6IGFueSkgPT4gdm9pZCwgdGV4dCA9IFwiXCIsIGNzc0NsYXNzID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyX19idXR0b24gXCIgKyBjc3NDbGFzcztcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGhhbmRlcjtcclxuICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9zZWxlY3RCYXNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5Mb2FkUGxvdGx5KCkge1xuICByZXR1cm4gISF3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTDtcbn1cblxudmFyIFBsb3RseTogYW55O1xuaWYoY2FuTG9hZFBsb3RseSgpKSB7XG4gIFBsb3RseSA9IDxhbnk+cmVxdWlyZShcInBsb3RseS5qcy1kaXN0XCIpO1xufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZVBsb3RseSBleHRlbmRzIFNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydFR5cGVzID0gU2VsZWN0QmFzZVBsb3RseS50eXBlcztcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcbiAgcHJpdmF0ZSBmaWx0ZXJUZXh0OiBIVE1MU3BhbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZmlsdGVyOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHN0YXRpYyB0eXBlcyA9IFtcImJhclwiLCBcInBpZVwiLCBcInNjYXR0ZXJcIl07XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBzdXBlci51cGRhdGUoZGF0YSk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0UGxvdGx5Q2hhcnQodGhpcy5jaGFydE5vZGUsIHRoaXMuY2hhcnRUeXBlKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRQbG90bHlDaGFydCh0aGlzLmNoYXJ0Tm9kZSwgdGhpcy5jaGFydFR5cGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlbGVjdGVkSXRlbUJ5VGV4dChpdGVtVGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uY2hvaWNlcy5maWx0ZXIoXG4gICAgICAoY2hvaWNlOiBJdGVtVmFsdWUpID0+IGNob2ljZS50ZXh0ID09PSBpdGVtVGV4dFxuICAgIClbMF07XG4gIH1cblxuICBwcml2YXRlIGdldFBsb3RseUNoYXJ0KFxuICAgIGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgY2hhcnRUeXBlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb247XG4gICAgY29uc3QgZGF0YXNldHMgPSB0aGlzLmdldERhdGEoKTtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpO1xuICAgIGNvbnN0IHRyYWNlczogYW55ID0gW107XG4gICAgY29uc3QgY29sb3JzID0gdGhpcy5nZXRDb2xvcnMoKTtcblxuICAgIGNvbnN0IHRyYWNlQ29uZmlnOiBhbnkgPSB7XG4gICAgICB0eXBlOiBjaGFydFR5cGUsXG4gICAgICB5OiBsYWJlbHMubWFwKGwgPT4ge1xuICAgICAgICBpZiAobC5sZW5ndGggPiAzMCkge1xuICAgICAgICAgIHJldHVybiBsLnN1YnN0cmluZygwLCAyNykgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSksXG4gICAgICB0ZXh0OiBsYWJlbHMsXG4gICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICBtb2RlOiBcIm1hcmtlcnNcIixcbiAgICAgIHdpZHRoOiAwLjVcbiAgICB9O1xuXG4gICAgaWYgKGRhdGFzZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHJhY2VDb25maWdbXCJtYXJrZXJcIl0gPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMsXG4gICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgIHNpemU6IDE2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRhdGFzZXRzLmZvckVhY2goZGF0YXNldCA9PiB7XG4gICAgICBpZiAodGhpcy5jaGFydFR5cGUgPT09IFwicGllXCIpIHtcbiAgICAgICAgdHJhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdHJhY2VDb25maWcsIHsgdmFsdWVzOiBkYXRhc2V0IH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHRyYWNlQ29uZmlnLCB7IHg6IGRhdGFzZXQgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVpZ2h0ID1cbiAgICAgIGNoYXJ0VHlwZSA9PT0gXCJwaWVcIlxuICAgICAgICA/IDQ1MFxuICAgICAgICA6IChsYWJlbHMubGVuZ3RoICsgKGxhYmVscy5sZW5ndGggKyAxKSAqIDAuNSkgKiAyMDtcblxuICAgIGNvbnN0IGxheW91dDogYW55ID0ge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgc2l6ZTogMTQsXG4gICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgY29sb3I6IFwiIzQwNDA0MFwiXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdDogMCxcbiAgICAgICAgYjogMCxcbiAgICAgICAgcjogMTBcbiAgICAgIH0sXG4gICAgICBjb2xvcndheTogY29sb3JzLFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICB0aWNrbGVuOiA1LFxuICAgICAgICB0aWNrY29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICAgIH0sXG4gICAgICBwbG90X2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGlzcGxheWxvZ286IGZhbHNlLFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdCBwbG90ID0gUGxvdGx5Lm5ld1Bsb3QoY2hhcnROb2RlLCB0cmFjZXMsIGxheW91dCwgY29uZmlnKTtcblxuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9jbGlja1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoID4gMCAmJiB0aGlzLm9uRGF0YUl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRhdGEucG9pbnRzWzBdLnRleHQ7XG4gICAgICAgIGNvbnN0IGl0ZW06IEl0ZW1WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtQnlUZXh0KGl0ZW1UZXh0KTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0RHJhZ0xheWVyID0gKCkgPT4gPEhUTUxFbGVtZW50PihcbiAgICAgIGNoYXJ0Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibnNld2RyYWdcIilbMF1cbiAgICApO1xuICAgICg8YW55PmNoYXJ0Tm9kZSlbXCJvblwiXShcInBsb3RseV9ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiKTtcbiAgICB9KTtcbiAgICAoPGFueT5jaGFydE5vZGUpW1wib25cIl0oXCJwbG90bHlfdW5ob3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcmFnTGF5ZXIgPSBnZXREcmFnTGF5ZXIoKTtcbiAgICAgIGRyYWdMYXllciAmJiAoZHJhZ0xheWVyLnN0eWxlLmN1cnNvciA9IFwiXCIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsb3Q7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiY2hlY2tib3hcIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJyYWRpb2dyb3VwXCIsIFNlbGVjdEJhc2VQbG90bHkpO1xuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwiZHJvcGRvd25cIiwgU2VsZWN0QmFzZVBsb3RseSk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJpbWFnZXBpY2tlclwiLCBTZWxlY3RCYXNlUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvc2VsZWN0QmFzZS50cyIsImltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyIH0gZnJvbSBcIi4vYWx0ZXJuYXRpdmVWaXp1YWxpemVyc1dyYXBwZXJcIjtcbmltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvblBhbmVsRHluYW1pY01vZGVsLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuY29uc3QgTXV1cmkgPSByZXF1aXJlKFwibXV1cmlcIik7XG5pbXBvcnQgXCIuL3Zpc3VhbGl6YXRpb25QYW5lbC5zY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3RCYXNlIH0gZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuaW1wb3J0IHsgVG9vbGJhckhlbHBlciB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBJVmlzdWFsaXplclBhbmVsRWxlbWVudCwgRWxlbWVudFZpc2liaWxpdHkgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25QYW5lbCB7XG4gIHByaXZhdGUgX3Nob3dIZWFkZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYW5lbENvbnRlbnQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgZmlsdGVyZWREYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+O1xuICBwcm90ZWN0ZWQgZmlsdGVyVmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJzOiBBcnJheTxWaXN1YWxpemVyQmFzZT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uczogQXJyYXk8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBwcm90ZWN0ZWQgb3B0aW9ucz86IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbGVtZW50czogQXJyYXk8SVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQ+ID0gW10sXG4gICAgcHJpdmF0ZSBpc1RydXN0ZWRBY2Nlc3MgPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgaWYoX2VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSB0aGlzLmJ1aWxkRWxlbWVudHMocXVlc3Rpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExheW91dEVuZ2luZTogKCkgPT4gYW55O1xuICBwcml2YXRlIGdldCBsYXlvdXRFbmdpbmUgKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cyhxdWVzdGlvbnM6IGFueVtdKTogSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIChxdWVzdGlvbnMgfHwgW10pLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogcXVlc3Rpb24udGl0bGUsXG4gICAgICAgIHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGUsXG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBFbGVtZW50VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiB0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ICE9PSBFbGVtZW50VmlzaWJpbGl0eS5JbnZpc2libGUgfHwgIXRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgPT09IEVsZW1lbnRWaXNpYmlsaXR5LlZpc2libGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHZpc2libGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZmlsdGVyKGVsID0+IHRoaXMuaXNWaXNpYmxlKGVsLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaGlkZGVuRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiAhdGhpcy5pc1Zpc2libGUoZWwudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmZpbHRlcihlbCA9PiBlbC5uYW1lID09PSBuYW1lKVswXTtcbiAgfVxuXG4gIG9uVmlzaWJsZUVsZW1lbnRzQ25haGdlZCA9IG5ldyBFdmVudDwoc2VuZGVyOiBWaXN1YWxpemF0aW9uUGFuZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgdmlzaWJsZUVsZW1lbnRzQ25haGdlZCgpIHtcbiAgICBpZighdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuaXNFbXB0eSkge1xuICAgICAgdGhpcy5vblZpc2libGVFbGVtZW50c0NuYWhnZWQuZmlyZSh0aGlzLCB7fSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICBkZXN0cm95VmlzdWFsaXplcih2aXN1YWxpemVyOiBWaXN1YWxpemVyQmFzZSkge1xuICAgIGlmICh2aXN1YWxpemVyIGluc3RhbmNlb2YgU2VsZWN0QmFzZSkge1xuICAgICAgdmlzdWFsaXplci5zZXRTZWxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIHZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMudmlzdWFsaXplcnMuc3BsaWNlKHRoaXMudmlzdWFsaXplcnMuaW5kZXhPZih2aXN1YWxpemVyKSwgMSk7XG4gIH1cblxuICByZW5kZXJWaXN1YWxpemVyKGVsZW1lbnQ6IElWaXN1YWxpemVyUGFuZWxFbGVtZW50KSB7XG4gICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnMuZmlsdGVyKHEgPT4gcS5uYW1lID09PSBlbGVtZW50Lm5hbWUpWzBdO1xuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcXVlc3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3Qgdml6dWFsaXplckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnQuZGlzcGxheU5hbWU7XG5cbiAgICBxdWVzdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gcXVlc3Rpb25FbGVtZW50Q2xhc3NOYW1lO1xuICAgIHF1ZXN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fY29udGVudFwiO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBxdWVzdGlvbkVsZW1lbnRDbGFzc05hbWUgKyBcIl9fdGl0bGVcIjtcblxuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIHF1ZXN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh2aXp1YWxpemVyRWxlbWVudCk7XG4gICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uQ29udGVudCk7XG5cbiAgICBjb25zdCB2aXN1YWxpemVyID0gdGhpcy5jcmVhdGVWaXp1YWxpemVyKFxuICAgICAgdml6dWFsaXplckVsZW1lbnQsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhXG4gICAgKTtcblxuICAgIHZpc3VhbGl6ZXIucmVnaXN0ZXJUb29sYmFySXRlbShcInJlbW92ZVF1ZXN0aW9uXCIsICh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIFRvb2xiYXJIZWxwZXIuY3JlYXRlQnV0dG9uKHRvb2xiYXIsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuSW52aXNpYmxlO1xuICAgICAgICAgIHRoaXMuZGVzdHJveVZpc3VhbGl6ZXIodmlzdWFsaXplcik7XG4gICAgICAgICAgdGhpcy5sYXlvdXRFbmdpbmUucmVtb3ZlKFtxdWVzdGlvbkVsZW1lbnRdKTtcbiAgICAgICAgICB0aGlzLnBhbmVsQ29udGVudC5yZW1vdmVDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzQ25haGdlZCgpO1xuICAgICAgICB9LCAwICk7XG4gICAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUJ1dHRvblwiKSk7XG4gICAgfSk7XG5cbiAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcbiAgICAgIHZhciBmaWx0ZXJJbmZvID0ge1xuICAgICAgICB0ZXh0OiA8SFRNTEVsZW1lbnQ+dW5kZWZpbmVkLFxuICAgICAgICBlbGVtZW50OiA8SFRNTERpdkVsZW1lbnQ+dW5kZWZpbmVkLFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKHNlbGVjdGlvbjogYW55KSB7XG4gICAgICAgICAgaWYoISFzZWxlY3Rpb24gJiYgISFzZWxlY3Rpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lckhUTUwgPSBcIkZpbHRlcjogW1wiICsgc2VsZWN0aW9uLnRleHQgKyBcIl1cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aXN1YWxpemVyLnJlZ2lzdGVyVG9vbGJhckl0ZW0oXCJxdWVzdGlvbkZpbHRlckluZm9cIiwgKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5jbGFzc05hbWUgPSBcInN2YS1xdWVzdGlvbl9fZmlsdGVyXCI7XG4gICAgXG4gICAgICAgIGZpbHRlckluZm8udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBmaWx0ZXJJbmZvLnRleHQuY2xhc3NOYW1lID0gXCJzdmEtcXVlc3Rpb25fX2ZpbHRlci10ZXh0XCI7XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJJbmZvLnRleHQpO1xuICAgIFxuICAgICAgICBjb25zdCBmaWx0ZXJDbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBmaWx0ZXJDbGVhci5jbGFzc05hbWUgPSBcInN2YS10b29sYmFyX19idXR0b25cIjtcbiAgICAgICAgZmlsdGVyQ2xlYXIuaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNsZWFyQnV0dG9uXCIpO1xuICAgICAgICBmaWx0ZXJDbGVhci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHZpc3VhbGl6ZXIuc2V0U2VsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIH07XG4gICAgICAgIGZpbHRlckluZm8uZWxlbWVudC5hcHBlbmRDaGlsZChmaWx0ZXJDbGVhcik7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZmlsdGVySW5mby5lbGVtZW50KTtcblxuICAgICAgICBmaWx0ZXJJbmZvLnVwZGF0ZSh2aXN1YWxpemVyLnNlbGVjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlckluZm8uZWxlbWVudDtcbiAgICAgIH0pO1xuXG4gICAgICB2aXN1YWxpemVyLm9uRGF0YUl0ZW1TZWxlY3RlZCA9IChcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogYW55LFxuICAgICAgICBzZWxlY3RlZFRleHQ6IHN0cmluZ1xuICAgICAgKSA9PiB7XG4gICAgICAgIGZpbHRlckluZm8udXBkYXRlKHsgdmFsdWU6IHNlbGVjdGVkVmFsdWUsIHRleHQ6IHNlbGVjdGVkVGV4dCB9KTtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcihxdWVzdGlvbi5uYW1lLCBzZWxlY3RlZFZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmlzdWFsaXplci5yZW5kZXIoKTtcbiAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLnB1c2godmlzdWFsaXplcik7XG5cbiAgICByZXR1cm4gcXVlc3Rpb25FbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsYXlvdXRFbmdpbmU6IGFueSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdldExheW91dEVuZ2luZSA9ICgpID0+IGxheW91dEVuZ2luZTtcblxuICAgIHRoaXMucGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnBhbmVsQ29udGVudC5jbGFzc05hbWUgPSBcInN2YS1ncmlkXCI7XG5cbiAgICB0aGlzLnZpc2libGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgbGV0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyVmlzdWFsaXplcihlbGVtZW50KTtcbiAgICAgIHRoaXMucGFuZWxDb250ZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLnNob3dIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHBhbmVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBhbmVsSGVhZGVyLmNsYXNzTmFtZSA9IFwic3ZhLXBhbmVsX19oZWFkZXJcIjtcbiAgICAgIGNvbnN0IHRvb2xvYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvb2xvYmFyLmNsYXNzTmFtZSA9IFwic3ZhLXRvb2xiYXJcIjtcbiAgICAgIHRoaXMuY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xvYmFyKTtcbiAgICAgIHBhbmVsSGVhZGVyLmFwcGVuZENoaWxkKHRvb2xvYmFyKTtcbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChwYW5lbEhlYWRlcik7XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhbmVsQ29udGVudCk7XG5cbiAgICB2YXIgbW92ZUhhbmRsZXIgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cy5zcGxpY2UoZGF0YS5mcm9tSW5kZXgsIDEpO1xuICAgICAgdGhpcy5fZWxlbWVudHMuc3BsaWNlKGRhdGEudG9JbmRleCwgMCwgZWxlbWVudHNbMF0pO1xuICAgIH1cblxuICAgIGxheW91dEVuZ2luZSA9IG5ldyBNdXVyaSh0aGlzLnBhbmVsQ29udGVudCwge1xuICAgICAgaXRlbXM6IFwiLnN2YS1xdWVzdGlvblwiLFxuICAgICAgZHJhZ0VuYWJsZWQ6IHRydWVcbiAgICB9KTtcbiAgICBsYXlvdXRFbmdpbmUub24oXCJtb3ZlXCIsIG1vdmVIYW5kbGVyKVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IHJlc2V0RmlsdGVyQnV0dG9uID0gVG9vbGJhckhlbHBlci5jcmVhdGVCdXR0b24odG9vbGJhciwgKCkgPT4ge1xuICAgICAgdGhpcy52aXN1YWxpemVycy5mb3JFYWNoKHZpc3VhbGl6ZXIgPT4ge1xuICAgICAgICBpZiAodmlzdWFsaXplciBpbnN0YW5jZW9mIFNlbGVjdEJhc2UpIHtcbiAgICAgICAgICB2aXN1YWxpemVyLnNldFNlbGVjdGlvbih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVzZXRGaWx0ZXJcIikpO1xuICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQocmVzZXRGaWx0ZXJCdXR0b24pO1xuXG4gICAgbGV0IGFkZEVsZW1lbnRTZWxlY3RvcjogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgYWRkRWxlbWVudFNlbGVjdG9yVXBkYXRlciA9IChwYW5lbDogVmlzdWFsaXphdGlvblBhbmVsLCBfOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gdGhpcy5oaWRkZW5FbGVtZW50cztcbiAgICAgIGlmIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSBUb29sYmFySGVscGVyLmNyZWF0ZVNlbGVjdG9yKHRvb2xiYXIsXG4gICAgICAgICAgWzxhbnk+e25hbWU6IHVuZGVmaW5lZCwgZGlzcGxheU5hbWU6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhZGRFbGVtZW50XCIpfV0uY29uY2F0KGhpZGRlbkVsZW1lbnRzKS5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICB0ZXh0OiBlbGVtZW50LmRpc3BsYXlOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gZmFsc2UsXG4gICAgICAgICAgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudC52aXNpYmlsaXR5ID0gRWxlbWVudFZpc2liaWxpdHkuVmlzaWJsZTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IHRoaXMucmVuZGVyVmlzdWFsaXplcihlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxDb250ZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmxheW91dEVuZ2luZS5hZGQoW3F1ZXN0aW9uRWxlbWVudF0pO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHNDbmFoZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgJiYgdG9vbGJhci5yZXBsYWNlQ2hpbGQoc2VsZWN0V3JhcHBlciwgYWRkRWxlbWVudFNlbGVjdG9yKSB8fCB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICBhZGRFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3RXcmFwcGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yICYmIHRvb2xiYXIucmVtb3ZlQ2hpbGQoYWRkRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgYWRkRWxlbWVudFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRFbGVtZW50U2VsZWN0b3JVcGRhdGVyKHRoaXMsIHt9KTtcbiAgICB0aGlzLm9uVmlzaWJsZUVsZW1lbnRzQ25haGdlZC5hZGQoYWRkRWxlbWVudFNlbGVjdG9yVXBkYXRlcik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGxldCBsYXlvdXRFbmdpbmUgPSAhIXRoaXMuZ2V0TGF5b3V0RW5naW5lICYmIHRoaXMuZ2V0TGF5b3V0RW5naW5lKCk7XG4gICAgaWYoISFsYXlvdXRFbmdpbmUpIHtcbiAgICAgIGxheW91dEVuZ2luZS5vZmYoXCJtb3ZlXCIpO1xuICAgICAgbGF5b3V0RW5naW5lLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2V0TGF5b3V0RW5naW5lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnBhbmVsQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc3VhbGl6ZXJzLmZvckVhY2godmlzdWFsaXplciA9PiB7XG4gICAgICB2aXN1YWxpemVyLm9uVXBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHZpc3VhbGl6ZXIgaW5zdGFuY2VvZiBTZWxlY3RCYXNlKSB7XG4gICAgICAgIHZpc3VhbGl6ZXIub25EYXRhSXRlbVNlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmlzdWFsaXplci5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy52aXN1YWxpemVycyA9IFtdO1xuICB9XG5cbiAgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKGhhcmQgJiYgdGhpcy52aXN1YWxpemVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzdWFsaXplcnMuZm9yRWFjaCh2aXN1YWxpemVyID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdmlzdWFsaXplci51cGRhdGUodGhpcy5maWx0ZXJlZERhdGEpLCAxMClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGNvbnN0IGxheW91dEVuZ2luZSA9IHRoaXMubGF5b3V0RW5naW5lO1xuICAgIGlmICghIWxheW91dEVuZ2luZSkge1xuICAgICAgbGF5b3V0RW5naW5lLnJlZnJlc2hJdGVtcygpO1xuICAgICAgbGF5b3V0RW5naW5lLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5RmlsdGVyKFxuICAgIHF1ZXN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNlbGVjdGVkVmFsdWU6IGFueVxuICApIHtcbiAgICB2YXIgZmlsdGVyQ2hhbmdlZCA9IHRydWU7XG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHNlbGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyQ2hhbmdlZCA9IHRoaXMuZmlsdGVyVmFsdWVzW3F1ZXN0aW9uTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclZhbHVlc1txdWVzdGlvbk5hbWVdO1xuICAgIH1cbiAgICBpZihmaWx0ZXJDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5maWx0ZXJWYWx1ZXMpLnNvbWUoXG4gICAgICAgICAga2V5ID0+IGl0ZW1ba2V5XSAhPT0gdGhpcy5maWx0ZXJWYWx1ZXNba2V5XVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVZpenVhbGl6ZXIoXG4gICAgdml6dWFsaXplckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+XG4gICk6IFZpc3VhbGl6ZXJCYXNlIHtcbiAgICB2YXIgY3JlYXRvcnMgPSBWaXN1YWxpemF0aW9uTWFuYWdlci5nZXRWaXN1YWxpemVycyhxdWVzdGlvbi5nZXRUeXBlKCkpO1xuICAgIHZhciB2aXN1YWxpemVycyA9IGNyZWF0b3JzLm1hcChjcmVhdG9yID0+IG5ldyBjcmVhdG9yKHZpenVhbGl6ZXJFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSkpO1xuICAgIGlmKHZpc3VhbGl6ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCB2aXN1YWxpemVyID0gbmV3IEFsdGVybmF0aXZlVmlzdWFsaXplcnNXcmFwcGVyKHZpc3VhbGl6ZXJzLCB2aXp1YWxpemVyRWxlbWVudCwgcXVlc3Rpb24sIGRhdGEpO1xuICAgICAgcmV0dXJuIHZpc3VhbGl6ZXI7XG4gICAgfVxuICAgIHJldHVybiB2aXN1YWxpemVyc1swXTtcbiAgfVxuXG4gIGdldCBzaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93SGVhZGVyO1xuICB9XG4gIHNldCBzaG93SGVhZGVyKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYobmV3VmFsdWUgIT0gdGhpcy5fc2hvd0hlYWRlcikge1xuICAgICAgdGhpcy5fc2hvd0hlYWRlciA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUodHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnRzIiwiaW1wb3J0IHsgVmlzdWFsaXplckJhc2UgfSBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsXCI7XG5pbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25QYW5lbER5bmFtaWNNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXROb2RlLCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgZGF0YS5mb3JFYWNoKFxuICAgICAgZGF0YUl0ZW0gPT5cbiAgICAgICAgISFkYXRhSXRlbVtxdWVzdGlvbi5uYW1lXSAmJlxuICAgICAgICAodGhpcy5kYXRhID0gdGhpcy5kYXRhLmNvbmNhdChkYXRhSXRlbVtxdWVzdGlvbi5uYW1lXSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zdCBwYW5lbGR5bmFtaWM6IFF1ZXN0aW9uUGFuZWxEeW5hbWljTW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgcmV0dXJuIHBhbmVsZHluYW1pYy5wYW5lbHNbMF0ucXVlc3Rpb25zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB2aXNQYW5lbCA9IG5ldyBWaXN1YWxpemF0aW9uUGFuZWwoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bW1hcnlDb250YWluZXJcIiksXG4gICAgICB0aGlzLmdldFF1ZXN0aW9ucygpLFxuICAgICAgdGhpcy5kYXRhXG4gICAgKTtcbiAgICB2aXNQYW5lbC5yZW5kZXIoKTtcbiAgfVxuXG59XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJwYW5lbGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uUGFuZWxEeW5hbWljLnRzIiwiaW1wb3J0IHsgc3RvcFdvcmRzIH0gZnJvbSBcIi4vZW5nbGlzaFwiO1xuXG52YXIgc3RvcFdvcmRzRGljdGlvbmFyeTogeyBbaW5kZXg6IHN0cmluZ106IEFycmF5PHN0cmluZz4gfSA9IHt9O1xuc3RvcFdvcmRzRGljdGlvbmFyeVtcImVuXCJdID0gc3RvcFdvcmRzO1xuXG5leHBvcnQgdmFyIHRleHRIZWxwZXIgPSB7XG4gIGdldFN0b3BXb3JkczogKGxvY2FsZTogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIHJldHVybiBzdG9wV29yZHNEaWN0aW9uYXJ5W2xvY2FsZSB8fCBcImVuXCJdIHx8IFtdO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiwgUXVlc3Rpb25TZWxlY3RCYXNlLCBJdGVtVmFsdWUgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZSBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IEl0ZW1WYWx1ZSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXRFbGVtZW50LCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhcnRUeXBlczogc3RyaW5nW107XG4gIHByb3RlY3RlZCBjaGFydFR5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNoYXJ0Tm9kZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcm90ZWN0ZWQgc2V0Q2hhcnRUeXBlKGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGFydFR5cGVzLmluZGV4T2YoY2hhcnRUeXBlKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuY2hhcnRUeXBlICE9PSBjaGFydFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy5pbnZva2VPblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNoYXJ0KCkge31cblxuICBzZXRTZWxlY3Rpb24oaXRlbTogSXRlbVZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMub25EYXRhSXRlbVNlbGVjdGVkKChpdGVtICYmIGl0ZW0udmFsdWUpIHx8IHVuZGVmaW5lZCwgKGl0ZW0gJiYgaXRlbS50ZXh0KSB8fCBcIlwiKTtcbiAgfVxuICBnZXQgc2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIG9uRGF0YUl0ZW1TZWxlY3RlZDogKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRUZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGFydE5vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJJdGVtcyh0b29sYmFyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IFRvb2xiYXJIZWxwZXIuY3JlYXRlU2VsZWN0b3IodG9vbGJhcixcbiAgICAgICAgdGhpcy5jaGFydFR5cGVzLm1hcChjaGFydFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYXJ0VHlwZV9cIiArIGNoYXJ0VHlwZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLmNoYXJ0VHlwZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAoZTogYW55KSA9PiB0aGlzLnNldENoYXJ0VHlwZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICk7XG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgIH1cbiAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gIH1cblxuICB2YWx1ZXNTb3VyY2UoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gPFF1ZXN0aW9uU2VsZWN0QmFzZT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbltcImFjdGl2ZUNob2ljZXNcIl07XG4gIH1cblxuICBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgdmFsdWVzOiBBcnJheTxhbnk+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5xdWVzdGlvbi5oYXNPdGhlcikgdmFsdWVzLnVuc2hpZnQoXCJvdGhlclwiKTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy52YWx1ZXNTb3VyY2UoKS5tYXAoY2hvaWNlID0+XG4gICAgICBJdGVtVmFsdWUuZ2V0VGV4dE9ySHRtbEJ5VmFsdWUodGhpcy52YWx1ZXNTb3VyY2UoKSwgY2hvaWNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5xdWVzdGlvbi5oYXNPdGhlcikgbGFiZWxzLnVuc2hpZnQoXCJPdGhlclwiKTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSB2YWx1ZXMubWFwKHYgPT4gMCk7XG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIGlmICghIXJvd1ZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHJvd1ZhbHVlLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dWYWx1ZSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgc3RhdGlzdGljc1tpbmRleF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGlzdGljc107XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3RCYXNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUGxvdGx5XCIsXCJjb21tb25qczJcIjpcInBsb3RseS5qcy1kaXN0XCIsXCJjb21tb25qc1wiOlwicGxvdGx5LmpzLWRpc3RcIixcImFtZFwiOlwicGxvdGx5LmpzLWRpc3RcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwsIFF1ZXN0aW9uLCBFdmVudCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBDb2x1bW5WaXNpYmlsaXR5LCBRdWVzdGlvbkxvY2F0aW9uLCBDb2x1bW5EYXRhVHlwZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi9kYXRhdGFibGVzLnNjc3NcIjtcblxuaW50ZXJmYWNlIERhdGFUYWJsZXNPcHRpb25zIHtcbiAgYnV0dG9uczpcbiAgICB8IGJvb2xlYW5cbiAgICB8IHN0cmluZ1tdXG4gICAgfCBhbnlbXVxuICAgIHwgYW55O1xuXG4gIGRvbTogc3RyaW5nO1xuXG4gIG9yZGVyRml4ZWQ6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBBcnJheTxBcnJheTxudW1iZXIgfCBzdHJpbmc+PiB8IG9iamVjdDtcblxuICByb3dHcm91cDogYm9vbGVhbiB8IGFueTtcblxuICBoZWFkZXJDYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlcyB7XG4gIHByaXZhdGUgZGF0YXRhYmxlQXBpOiBhbnk7XG4gIHByaXZhdGUgdGFibGVEYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBpcyBmaXJlZCBjb2x1bW5zIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZC5cbiAgICogPGJyLz4gc2VuZGVyIHRoZSBkYXRhdGFibGVzIGFkYXB0ZXJcbiAgICogPGJyLz4gb3B0aW9ucy5zdXJ2ZXkgY3VycmVudCBzdXJ2ZXlcbiAgICogQHNlZSBnZXRDb2x1bW5zXG4gICAqL1xuICBwdWJsaWMgY29sdW1uc0NoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IERhdGFUYWJsZXMsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJpdmF0ZSBkYXRhOiBBcnJheTxPYmplY3Q+LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnMsXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdLFxuICAgIHByaXZhdGUgaXNUcnVzdGVkQWNjZXNzID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5oZWFkZXJCdXR0b25DcmVhdG9ycyA9IFsgdGhpcy5jcmVhdGVHcm91cGluZ0J1dHRvbiwgdGhpcy5jcmVhdGVIaWRlQnV0dG9uLCB0aGlzLmNyZWF0ZUFkZENvbHVtbkJ1dHRvbiwgdGhpcy5jcmVhdGVNb3ZlVG9EZXRhaWxCdXR0b24gXTtcbiAgICB0aGlzLmRldGFpbEJ1dHRvbkNyZWF0b3JzID0gWyB0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbiBdO1xuICAgIGlmKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFRhYmxlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgdmFyIGRhdGFJdGVtOiBhbnkgPSB7fTtcbiAgICAgIHRoaXMuc3VydmV5LmRhdGEgPSBpdGVtO1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIGlmKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9IHR5cGVvZiBkaXNwbGF5VmFsdWUgPT09IFwic3RyaW5nXCIgPyBkaXNwbGF5VmFsdWUgOiBKU09OLnN0cmluZ2lmeShkaXNwbGF5VmFsdWUpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNvbHVtbnNDaGFuZ2VkKCkge1xuICAgIHRoaXMuY29sdW1uc0NoYW5nZWQuZmlyZSh0aGlzLCB7IHN1cnZleTogdGhpcy5zdXJ2ZXkgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zKHN1cnZleTogU3VydmV5TW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkubWFwKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRhdGFUeXBlOiBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiID8gQ29sdW1uRGF0YVR5cGUuVGV4dCA6IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rLFxuICAgICAgICB2aXNpYmlsaXR5OiBxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwiZmlsZVwiID8gQ29sdW1uVmlzaWJpbGl0eS5WaXNpYmxlIDogQ29sdW1uVmlzaWJpbGl0eS5JbnZpc2libGUsXG4gICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzVmlzaWJsZSh2aXNpYmlsaXR5OiBDb2x1bW5WaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNUcnVzdGVkQWNjZXNzICYmIHZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlIHx8ICF0aGlzLmlzVHJ1c3RlZEFjY2VzcyAmJiB2aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LlZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYoaGFyZCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZURhdGEodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ3JvdXBCeTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy9pZighdGhpcy50YXJnZXROb2RlKSByZXR1cm47XG4gICAgY29uc3QgdGFibGVOb2RlID0gdGhpcy50YXJnZXROb2RlLmNoaWxkcmVuWzBdO1xuICAgIGlmICgoPGFueT4kLmZuKS5EYXRhVGFibGUuaXNEYXRhVGFibGUodGFibGVOb2RlKSApIHtcbiAgICAgICQodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYmxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIHZhciBjb2x1bW5zRGF0YTogYW55ID0gY29sdW1ucy5tYXAoKGM6IGFueSkgPT4gYy5kYXRhKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuICAgICAgYnV0dG9uczogW1wiY29weVwiLCBcImNzdlwiLCBcInByaW50XCJdLFxuICAgICAgZG9tOiBcIkJsZnJ0aXBcIixcbiAgICAgIGRhdGE6IHRoaXMudGFibGVEYXRhLFxuICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICBkZXRhaWxzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAvLyBvcmRlckZpeGVkOiBbWzEsIFwiYXNjXCJdXSxcbiAgICAgIHJvd0dyb3VwOiB7XG4gICAgICAgIGRhdGFTcmM6IGNvbHVtbnNEYXRhWzBdLFxuICAgICAgICBlbmRSZW5kZXI6IChyb3dzOiBhbnksIGdyb3VwOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gXCJDb3VudDogXCIgKyByb3dzLmRhdGEoKS5jb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0OiBcImFwaVwiLFxuICAgICAgaGVhZGVyQ2FsbGJhY2s6ICh0aGVhZDogYW55LCBkYXRhOiBhbnksIHN0YXJ0OiBhbnksIGVuZDogYW55LCBkaXNwbGF5OiBhbnkpID0+IHtcbiAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9ICQodGFibGVOb2RlKVxuICAgICAgICAgIC5kYXRhVGFibGUoKVxuICAgICAgICAgIC5hcGkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAkKHRoZWFkKVxuICAgICAgICAuY2hpbGRyZW4oXCJ0aFwiKVxuICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICAgdmFyICR0aE5vZGUgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICghIWNvbHVtbnNEYXRhW2luZGV4XSAmJiAkdGhOb2RlLmhhcyhcImJ1dHRvblwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlLWFjdGlvbi1jb250YWluZXJcIjtcbiAgICAgICAgICAgIHNlbGYuaGVhZGVyQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdG9yKGRhdGF0YWJsZUFwaSwgaW5kZXgsIGNvbHVtbnNEYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgIGlmKCEhZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkdGhOb2RlLnByZXBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgdmFyIGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBmaWx0ZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGUtZmlsdGVyLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgZmlsdGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nIC8+XCI7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gZGF0YXRhYmxlQXBpLmNvbHVtbihpbmRleCk7XG4gICAgICAgICAgICAkKCdpbnB1dCcsICQoZmlsdGVyQ29udGFpbmVyKSkub24oJ2NsaWNrJywgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICAgICAgICAgICQoJ2lucHV0JywgJChmaWx0ZXJDb250YWluZXIpKS5vbigna2V5dXAgY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcykudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uc2VhcmNoKCkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICR0aE5vZGUuYXBwZW5kKGZpbHRlckNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XG4gICAgdGFibGVOb2RlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgdGFibGVOb2RlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlIGRpc3BsYXkgcmVzcG9uc2l2ZSBkYXRhVGFibGVcIjtcblxuICAgIGNvbnN0IGRhdGF0YWJsZUFwaVJlZiA9IHRoaXMuZGF0YXRhYmxlQXBpID0gJCh0YWJsZU5vZGUpLkRhdGFUYWJsZShvcHRpb25zKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaVxuICAgICAgLnJvd0dyb3VwKClcbiAgICAgIC5lbmFibGUoZmFsc2UpXG4gICAgICAuZHJhdygpO1xuXG4gICAgLy8gdGhpcy5kYXRhdGFibGVBcGkub24oXCJyb3dncm91cC1kYXRhc3JjXCIsIChlLCBkdCwgdmFsKSA9PiB7XG4gICAgLy8gICB0aGlzLmRhdGF0YWJsZUFwaS5vcmRlci5maXhlZCh7IHByZTogW1tjb2x1bW5zRGF0YS5pbmRleE9mKHZhbCksIFwiYXNjXCJdXSB9KS5kcmF3KCk7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5kYXRhdGFibGVBcGkub24oJ2NvbHVtbi1yZW9yZGVyJywgKGU6IGFueSwgc2V0dGluZ3M6IGFueSwgZGV0YWlsczogYW55KSA9PiB7XG4gICAgICB2YXIgY29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGRldGFpbHMuZnJvbSwgMSk7XG4gICAgICB0aGlzLl9jb2x1bW5zLnNwbGljZShkZXRhaWxzLnRvLCAwLCBjb2x1bW5zWzBdKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5fY29sdW1ucyk7XG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9KTtcbiAgICAkKHRhYmxlTm9kZSkuZmluZCgndGJvZHknKS5vbignY2xpY2snLCAndGQuc2EtZGF0YXRhYmxlLWFjdGlvbi1jb2x1bW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdHIgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG4gICAgICB2YXIgcm93ID0gZGF0YXRhYmxlQXBpUmVmLnJvdyh0cik7XG5cbiAgICAgIGlmIChyb3cuY2hpbGQuaXNTaG93bigpKSB7XG4gICAgICAgICAgcm93LmNoaWxkLmhpZGUoKTtcbiAgICAgICAgICB0ci5yZW1vdmVDbGFzcygnc2EtZGF0YXRhYmxlLWRldGFpbC1yb3cnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvdy5jaGlsZChzZWxmLmNyZWF0ZURldGFpbE1hcmt1cChyb3cuZGF0YSgpKSkuc2hvdygpO1xuICAgICAgICAgIHRyLmFkZENsYXNzKCdzYS1kYXRhdGFibGUtZGV0YWlsLXJvdycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZURldGFpbE1hcmt1cChkYXRhOiBhbnkpIHtcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGFibGUuY2VsbFBhZGRpbmcgPSBcIjVcIjtcbiAgICB0YWJsZS5jZWxsU3BhY2luZyA9IFwiMFwiO1xuICAgIHRhYmxlLmJvcmRlciA9IFwiMFwiO1xuICAgIHRhYmxlLmNsYXNzTmFtZSA9IFwic2EtZGF0YXRhYmxlLWRldGFpbFwiO1xuXG4gICAgdGhpcy5jb2x1bW5zXG4gICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uUm93ICYmIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KSlcbiAgICAgIC5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHZhciB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQyLnRleHRDb250ZW50ID0gZGF0YVtjb2x1bW4ubmFtZV07XG4gICAgICAgIHZhciB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRoaXMuZGV0YWlsQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHRkMy5hcHBlbmRDaGlsZChjcmVhdG9yKGNvbHVtbi5uYW1lKSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuXG4gICAgaWYoISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5yZXNwb25zaXZlLmhhc0hpZGRlbigpKSB7XG4gICAgICB2YXIgY29sdW1uc1Zpc2liaWxpdHkgPSB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zKCkucmVzcG9uc2l2ZUhpZGRlbigpO1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmRhdGF0YWJsZUFwaS5zZXR0aW5ncygpLmluaXQoKS5jb2x1bW5zO1xuICAgICAgZm9yKHZhciBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1uc1Zpc2liaWxpdHkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmKCFjb2x1bW5zVmlzaWJpbGl0eVtpbmRleF0pIHtcbiAgICAgICAgICB2YXIgY29sdW1uID0gY29sdW1uc1tpbmRleF07XG4gICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICB2YXIgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIHRkMS50ZXh0Q29udGVudCA9IGNvbHVtbi5zVGl0bGU7XG4gICAgICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSBkYXRhW2NvbHVtbi5tRGF0YV07XG4gICAgICAgICAgdmFyIHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAvL3RoaXMuZGV0YWlsQnV0dG9uQ3JlYXRvcnMuZm9yRWFjaChjcmVhdG9yID0+IHRkMy5hcHBlbmRDaGlsZChjcmVhdG9yKGNvbHVtbi5tRGF0YSkpKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoISF0aGlzLnJlbmRlckRldGFpbEFjdGlvbnMpIHtcbiAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgdmFyIHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgdmFyIHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIHRoaXMucmVuZGVyRGV0YWlsQWN0aW9ucyh0ZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckRldGFpbEFjdGlvbnM6IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBkYXRhOiBhbnkpID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBoZWFkZXJCdXR0b25DcmVhdG9yczogQXJyYXk8KFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApID0+IEhUTUxFbGVtZW50PiA9IFtdO1xuXG4gIHB1YmxpYyBkZXRhaWxCdXR0b25DcmVhdG9yczogQXJyYXk8KFxuICAgIGNvbHVtbk5hbWU/OiBzdHJpbmdcbiAgKSA9PiBIVE1MRWxlbWVudD4gPSBbXTtcblxuICBjcmVhdGVTZWxlY3RCdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2VsZWN0QnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgKDxhbnk+ZGF0YXRhYmxlQXBpLmNvbHVtbnMoKSkuZGVzZWxlY3QoKTtcbiAgICAgICg8YW55PmRhdGF0YWJsZUFwaS5jb2x1bW4oY29sSWR4KSkuc2VsZWN0KCk7XG4gICAgICAhIXRoaXMub25Db2x1bW5TZWxlY3RlZCAmJiB0aGlzLm9uQ29sdW1uU2VsZWN0ZWQoY29sdW1uTmFtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNyZWF0ZUdyb3VwaW5nQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImdyb3VwQnV0dG9uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cEJ5LmluZGV4T2YoY29sdW1uTmFtZSk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBCeS5wdXNoKGNvbHVtbk5hbWUpO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInVuZ3JvdXBCdXR0b25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImdyb3VwQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmdyb3VwQnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgZGF0YXRhYmxlQXBpLnJvd0dyb3VwKCkuZW5hYmxlKHRoaXMuZ3JvdXBCeS5sZW5ndGggPiAwKTtcbiAgICAgIGlmICh0aGlzLmdyb3VwQnkubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhdGFibGVBcGkucm93R3JvdXAoKS5kYXRhU3JjKDxhbnk+dGhpcy5ncm91cEJ5KTtcbiAgICAgIH1cbiAgICAgIGRhdGF0YWJsZUFwaS5kcmF3KCk7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY3JlYXRlSGlkZUJ1dHRvbiA9IChcbiAgICBkYXRhdGFibGVBcGk6IGFueSxcbiAgICBjb2xJZHg6IG51bWJlcixcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmdcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQ29sdW1uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF0udmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlO1xuICAgICAgZGF0YXRhYmxlQXBpLmNvbHVtbnMoW2NvbElkeF0pLnZpc2libGUoZmFsc2UpO1xuXG4gICAgICAvLyBUT0RPOiBVc2UgZGF0YXRhYmxlcyB0byB1cGRhdGUgaGVhZGVycyAoc2hvdyBjb2x1bW5zIG9wdGlvbnMpXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVBZGRDb2x1bW5CdXR0b24gPSAoXG4gICAgZGF0YXRhYmxlQXBpOiBhbnksXG4gICAgY29sSWR4OiBudW1iZXIsXG4gICAgY29sdW1uTmFtZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0b3Iub25jbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi52aXNpYmlsaXR5ID09PSBDb2x1bW5WaXNpYmlsaXR5LkludmlzaWJsZSk7XG5cbiAgICBpZihoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIik7XG4gICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lO1xuICAgICAgICBpZih0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICAgICAgICBvcHRpb24udGl0bGUgPSBjb2x1bW4uZGlzcGxheU5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZWN0b3Iub25jaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYoISQodGhpcykudmFsKCkpIHJldHVybjtcblxuICAgICAgdmFyIGNvbHVtbiA9IHNlbGYuX2NvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gJCh0aGlzKS52YWwoKSlbMF07XG4gICAgICBjb2x1bW4udmlzaWJpbGl0eSA9IENvbHVtblZpc2liaWxpdHkuVmlzaWJsZTtcbiAgICAgIGRhdGF0YWJsZUFwaS5jb2x1bW5zKFtzZWxmLl9jb2x1bW5zLmluZGV4T2YoY29sdW1uKV0pLnZpc2libGUodHJ1ZSk7XG5cbiAgICAgIC8vIFRPRE86IFVzZSBkYXRhdGFibGVzIHRvIHVwZGF0ZSBoZWFkZXJzIChzaG93IGNvbHVtbnMgb3B0aW9ucylcbiAgICAgIHNlbGYudXBkYXRlKCk7XG5cbiAgICAgIHNlbGYub25Db2x1bW5zQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgY3JlYXRlTW92ZVRvRGV0YWlsQnV0dG9uID0gKFxuICAgIGRhdGF0YWJsZUFwaTogYW55LFxuICAgIGNvbElkeDogbnVtYmVyLFxuICAgIGNvbHVtbk5hbWU6IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1vdmVUb0RldGFpbFwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLmxvY2F0aW9uID0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3c7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoXG4gICAgY29sdW1uTmFtZT86IHN0cmluZ1xuICApOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IGNvbHVtbk5hbWUpWzBdLmxvY2F0aW9uID0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3c7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLm9uQ29sdW1uc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBnZXRDb2x1bW5zKCk6IEFycmF5PE9iamVjdD4ge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubG9jYXRpb24gPT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uICYmIHRoaXMuaXNWaXNpYmxlKGNvbHVtbi52aXNpYmlsaXR5KSk7XG4gICAgY29uc3QgY29sdW1uczogYW55ID0gYXZhaWxhYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxuICAgICAgICBzVGl0bGU6IHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnRpdGxlIHx8IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmlzaWJsZTogY29sdW1uLnZpc2liaWxpdHkgIT09IENvbHVtblZpc2liaWxpdHkuSW52aXNpYmxlLFxuICAgICAgICBtUmVuZGVyOiAoZGF0YTogb2JqZWN0LCB0eXBlOiBzdHJpbmcsIHJvdzogYW55KSA9PiByb3dbY29sdW1uLm5hbWVdXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFt7XG4gICAgICBcImNsYXNzTmFtZVwiOiAnc2EtZGF0YXRhYmxlLWFjdGlvbi1jb2x1bW4nLFxuICAgICAgXCJvcmRlcmFibGVcIjogZmFsc2UsXG4gICAgICBcImRhdGFcIjogbnVsbCxcbiAgICAgIFwiZGVmYXVsdENvbnRlbnRcIjogJycsXG4gICAgfV0uY29uY2F0KGNvbHVtbnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sdW1uU2VsZWN0ZWQ6IChkYXRhTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgISF0aGlzLmRhdGF0YWJsZUFwaSAmJiB0aGlzLmRhdGF0YWJsZUFwaS5jb2x1bW5zLmFkanVzdCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0QmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmF0aW5nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXRyaXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW5cIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvaW5kZXgudHMiLCJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xyXG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuL3Zpc3VhbGl6ZXJCYXNlXCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vdGV4dC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxyXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcclxuICAgIG9wdGlvbnM/OiBPYmplY3RcclxuICApIHtcclxuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnNDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3Qgcm93VmFsdWU6IGFueSA9IHJvd1t0aGlzLnF1ZXN0aW9uLm5hbWVdO1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd1ZhbHVlKSkge1xyXG4gICAgICAgICAgZGF0YVN0cmluZ3MuY29uY2F0KHJvd1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByb3dWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb3dWYWx1ZSkuZm9yRWFjaChrZXkgPT4gZGF0YVN0cmluZ3MucHVzaChyb3dWYWx1ZVtrZXldKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhU3RyaW5ncy5wdXNoKHJvd1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZGF0YVN0cmluZ3MpO1xyXG4gICAgICAgIGlmKGRhdGFTdHJpbmdzLmxlbmd0aCA+IGNvbHVtbnNDb3VudCkge1xyXG4gICAgICAgICAgICBjb2x1bW5zQ291bnQgPSBkYXRhU3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjb2x1bW5zQ291bnQsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRlbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb2x1bW5zQ291bnQsIGRhdGF9ICA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtcHR5VGV4dE5vZGUuaW5uZXJIVE1MID0gXCJUaGVyZSBhcmUgbm8gcmVzdWx0cyB5ZXRcIjtcclxuXHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS10ZXh0LXRhYmxlXCI7XHJcbiAgICB0YWJsZU5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29sdW1uc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NlbGxcIjtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSByb3dEYXRhW2ldO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNhLXRleHQtdGFibGVfX2NvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFRleHQpO1xyXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgVGV4dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LnRzIiwiaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB9IGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbER5bmFtaWNcIjtcblxuZXhwb3J0IGNsYXNzIFZpc3VhbGl6YXRpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgVmlzdWFsaXphdGlvblBhbmVsRHluYW1pYyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnN0IG1hdHJpeGR5bmFtaWM6IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICBjb25zdCB2aXNpYmxlUm93cyA9IG1hdHJpeGR5bmFtaWMudmlzaWJsZVJvd3M7XG5cbiAgICBpZiAodmlzaWJsZVJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gdmlzaWJsZVJvd3NbMF0uY2VsbHMubWFwKGMgPT4gYy5xdWVzdGlvbik7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFxuICBcIm1hdHJpeGR5bmFtaWNcIixcbiAgVmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcbik7XG5cblZpc3VhbGl6YXRpb25NYW5hZ2VyLnJlZ2lzdGVyVmlzdWFsaXplcihcbiAgXCJtYXRyaXhkcm9wZG93blwiLFxuICBWaXN1YWxpemF0aW9uTWF0cml4RHluYW1pY1xuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxpemF0aW9uTWF0cml4RHluYW1pYy50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgV29yZENsb3VkTGliIGZyb20gXCJ3b3JkY2xvdWRcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4uL3Zpc3VhbGl6ZXJCYXNlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgdGV4dEhlbHBlciB9IGZyb20gXCIuL3N0b3B3b3Jkcy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgV29yZENsb3VkIGV4dGVuZHMgVmlzdWFsaXplckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3b3JkY2xvdWRcIjtcbiAgfVxuXG4gIHByaXZhdGUgY2xvdWQ6IGFueTtcblxuICBnZXREYXRhKCkge1xuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgIGxldCBzdG9wV29yZHMgPSB0ZXh0SGVscGVyLmdldFN0b3BXb3JkcygpO1xuICAgIGxldCBzdG9wVGhlV29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzdG9wV29yZHMuaW5kZXhPZih3b3JkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9O1xuXG4gICAgbGV0IHByb2Nlc3NTdHJpbmcgPSAocm93OiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdyA9IFwiXCIgKyByb3c7XG4gICAgICBpZiAoISFyb3cpIHtcbiAgICAgICAgcm93LnNwbGl0KFwiIFwiKS5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIHdvcmQgPSBzdG9wVGhlV29yZCh3b3JkLnRvTG93ZXJDYXNlKCkgfHwgXCJcIik7XG4gICAgICAgICAgaWYgKCEhd29yZCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRbd29yZF0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3dvcmRdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFt3b3JkXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dWYWx1ZTogYW55ID0gcm93W3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFyb3dWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dWYWx1ZSkpIHtcbiAgICAgICAgICByb3dWYWx1ZS5mb3JFYWNoKHByb2Nlc3NTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygcm93VmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5mb3JFYWNoKGtleSA9PiBwcm9jZXNzU3RyaW5nKHJvd1ZhbHVlW2tleV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhyb3dWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCByZXN1bHRba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY2FudmFzTm9kZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1wdHlUZXh0Tm9kZS5pbm5lckhUTUwgPSBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhc05vZGUpO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbGlzdDogZGF0YSxcbiAgICAgIHdlaWdodEZhY3RvcjogMjAsXG4gICAgICBmb250RmFtaWx5OiBcIlNlZ29lIFVJIEJvbGQsIHNhbnMtc2VyaWZcIixcbiAgICAgIGNvbG9yOiAod29yZDogc3RyaW5nLCB3ZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgfSxcbiAgICAgIHJvdGF0ZVJhdGlvOiAwLjUsXG4gICAgICByb3RhdGlvblN0ZXBzOiAyLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGNsaWNrOiBmdW5jdGlvbihpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSArIFwiOiBcIiArIGl0ZW1bMV0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmNsb3VkID0gV29yZENsb3VkTGliKGNhbnZhc05vZGUsIGNvbmZpZyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICBpZiAoISF0aGlzLmNsb3VkKSB7XG4gICAgICB0aGlzLmNsb3VkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJ0ZXh0XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJjb21tZW50XCIsIFdvcmRDbG91ZCk7XG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJtdWx0aXBsZXRleHRcIiwgV29yZENsb3VkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JkY2xvdWQvd29yZGNsb3VkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXh0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlzdWFsaXphdGlvblBhbmVsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBNdXVyaSB2MC44LjBcbiogaHR0cHM6Ly9naXRodWIuY29tL2hhbHR1L211dXJpXG4qIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBIYWx0dSBPeVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiogaHR0cHM6Ly9naXRodWIuY29tL2hhbHR1L211dXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiogQGxpY2Vuc2UgTUlUXG4qXG4qIE11dXJpIFBhY2tlclxuKiBDb3B5cmlnaHQgKGMpIDIwMTYtcHJlc2VudCwgTmlrbGFzIFLDpG3DtiA8aW5yYW1vQGdtYWlsLmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qXG4qIE11dXJpIFRpY2tlciAvIE11dXJpIEVtaXR0ZXIgLyBNdXVyaSBRdWV1ZVxuKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgTmlrbGFzIFLDpG3DtiA8aW5yYW1vQGdtYWlsLmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLk11dXJpID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG5hbWVzcGFjZSA9ICdNdXVyaSc7XG4gIHZhciBncmlkSW5zdGFuY2VzID0ge307XG5cbiAgdmFyIGFjdGlvblN3YXAgPSAnc3dhcCc7XG4gIHZhciBhY3Rpb25Nb3ZlID0gJ21vdmUnO1xuXG4gIHZhciBldmVudFN5bmNocm9uaXplID0gJ3N5bmNocm9uaXplJztcbiAgdmFyIGV2ZW50TGF5b3V0U3RhcnQgPSAnbGF5b3V0U3RhcnQnO1xuICB2YXIgZXZlbnRMYXlvdXRFbmQgPSAnbGF5b3V0RW5kJztcbiAgdmFyIGV2ZW50QWRkID0gJ2FkZCc7XG4gIHZhciBldmVudFJlbW92ZSA9ICdyZW1vdmUnO1xuICB2YXIgZXZlbnRTaG93U3RhcnQgPSAnc2hvd1N0YXJ0JztcbiAgdmFyIGV2ZW50U2hvd0VuZCA9ICdzaG93RW5kJztcbiAgdmFyIGV2ZW50SGlkZVN0YXJ0ID0gJ2hpZGVTdGFydCc7XG4gIHZhciBldmVudEhpZGVFbmQgPSAnaGlkZUVuZCc7XG4gIHZhciBldmVudEZpbHRlciA9ICdmaWx0ZXInO1xuICB2YXIgZXZlbnRTb3J0ID0gJ3NvcnQnO1xuICB2YXIgZXZlbnRNb3ZlID0gJ21vdmUnO1xuICB2YXIgZXZlbnRTZW5kID0gJ3NlbmQnO1xuICB2YXIgZXZlbnRCZWZvcmVTZW5kID0gJ2JlZm9yZVNlbmQnO1xuICB2YXIgZXZlbnRSZWNlaXZlID0gJ3JlY2VpdmUnO1xuICB2YXIgZXZlbnRCZWZvcmVSZWNlaXZlID0gJ2JlZm9yZVJlY2VpdmUnO1xuICB2YXIgZXZlbnREcmFnSW5pdCA9ICdkcmFnSW5pdCc7XG4gIHZhciBldmVudERyYWdTdGFydCA9ICdkcmFnU3RhcnQnO1xuICB2YXIgZXZlbnREcmFnTW92ZSA9ICdkcmFnTW92ZSc7XG4gIHZhciBldmVudERyYWdTY3JvbGwgPSAnZHJhZ1Njcm9sbCc7XG4gIHZhciBldmVudERyYWdFbmQgPSAnZHJhZ0VuZCc7XG4gIHZhciBldmVudERyYWdSZWxlYXNlU3RhcnQgPSAnZHJhZ1JlbGVhc2VTdGFydCc7XG4gIHZhciBldmVudERyYWdSZWxlYXNlRW5kID0gJ2RyYWdSZWxlYXNlRW5kJztcbiAgdmFyIGV2ZW50RGVzdHJveSA9ICdkZXN0cm95JztcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlciBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBFbWl0dGVyKCkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fY291bnRlciA9IDA7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgbGlzdGVuZXJzIHF1ZXVlIGFuZCBjcmVhdGUgaXQgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMpIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXTtcblxuICAgIC8vIEFkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIHF1ZXVlLlxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGV2ZW50IGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoZSBwcm92aWRlZCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtsaXN0ZW5lcl1cbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gR2V0IGxpc3RlbmVycyBhbmQgcmV0dXJuIGltbWVkaWF0ZWx5IGlmIG5vbmUgaXMgZm91bmQuXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgbm8gc3BlY2lmaWMgbGlzdGVuZXIgaXMgcHJvdmlkZWQgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICB2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtaXQgYWxsIGxpc3RlbmVycyBpbiBhIHNwZWNpZmllZCBldmVudCB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0geyp9IFthcmcxXVxuICAgKiBAcGFyYW0geyp9IFthcmcyXVxuICAgKiBAcGFyYW0geyp9IFthcmczXVxuICAgKiBAcmV0dXJucyB7RW1pdHRlcn1cbiAgICovXG4gIEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBHZXQgZXZlbnQgbGlzdGVuZXJzIGFuZCBxdWl0IGVhcmx5IGlmIHRoZXJlJ3Mgbm8gbGlzdGVuZXJzLlxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBxTGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICAgIHZhciBhTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGk7XG5cbiAgICAvLyBBZGQgdGhlIGN1cnJlbnQgbGlzdGVuZXJzIHRvIHRoZSBjYWxsYmFjayBxdWV1ZSBiZWZvcmUgd2UgcHJvY2VzcyB0aGVtLlxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGd1YXJhbnRlZSB0aGF0IGFsbCBvZiB0aGUgbGlzdGVuZXJzIGFyZSBjYWxsZWQgaW5cbiAgICAvLyBjb3JyZWN0IG9yZGVyIGV2ZW4gaWYgbmV3IGV2ZW50IGxpc3RlbmVycyBhcmUgcmVtb3ZlZC9hZGRlZCBkdXJpbmdcbiAgICAvLyBwcm9jZXNzaW5nIGFuZC9vciBldmVudHMgYXJlIGVtaXR0ZWQgZHVyaW5nIHByb2Nlc3NpbmcuXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgcXVldWUucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIEluY3JlbWVudCBxdWV1ZSBjb3VudGVyLiBUaGlzIGlzIG5lZWRlZCBmb3IgdGhlIHNjZW5hcmlvcyB3aGVyZSBlbWl0IGlzXG4gICAgLy8gdHJpZ2dlcmVkIHdoaWxlIHRoZSBxdWV1ZSBpcyBhbHJlYWR5IHByb2Nlc3NpbmcuIFdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZlxuICAgIC8vIGhvdyBtYW55IFwicXVldWUgcHJvY2Vzc29yc1wiIHRoZXJlIGFyZSBhY3RpdmUgc28gdGhhdCB3ZSBjYW4gc2FmZWx5IHJlc2V0XG4gICAgLy8gdGhlIHF1ZXVlIGluIHRoZSBlbmQgd2hlbiB0aGUgbGFzdCBxdWV1ZSBwcm9jZXNzb3IgaXMgZmluaXNoZWQuXG4gICAgKyt0aGlzLl9jb3VudGVyO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgcXVldWUgKHRoZSBzcGVjaWZpYyBwYXJ0IG9mIGl0IGZvciB0aGlzIGVtaXQpLlxuICAgIGZvciAoaSA9IHFMZW5ndGgsIHFMZW5ndGggPSBxdWV1ZS5sZW5ndGg7IGkgPCBxTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgYUxlbmd0aCA9PT0gMCA/IHF1ZXVlW2ldKCkgOlxuICAgICAgYUxlbmd0aCA9PT0gMSA/IHF1ZXVlW2ldKGFyZzEpIDpcbiAgICAgIGFMZW5ndGggPT09IDIgPyBxdWV1ZVtpXShhcmcxLCBhcmcyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgcXVldWVbaV0oYXJnMSwgYXJnMiwgYXJnMyk7XG5cbiAgICAgIC8vIFN0b3AgcHJvY2Vzc2luZyBpZiB0aGUgZW1pdHRlciBpcyBkZXN0cm95ZWQuXG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERlY3JlbWVudCBxdWV1ZSBwcm9jZXNzIGNvdW50ZXIuXG4gICAgLS10aGlzLl9jb3VudGVyO1xuXG4gICAgLy8gUmVzZXQgdGhlIHF1ZXVlIGlmIHRoZXJlIGFyZSBubyBtb3JlIHF1ZXVlIHByb2Nlc3NlcyBydW5uaW5nLlxuICAgIGlmICghdGhpcy5fY291bnRlcikgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGVtaXR0ZXIgaW5zdGFuY2UuIEJhc2ljYWxseSBqdXN0IHJlbW92ZXMgYWxsIGJvdW5kIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0VtaXR0ZXJ9XG4gICAqL1xuICBFbWl0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgLy8gRmxhZyBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVzZXQgcXVldWUgKGlmIHF1ZXVlIGlzIGN1cnJlbnRseSBwcm9jZXNzaW5nIHRoaXMgd2lsbCBhbHNvIHN0b3AgdGhhdCkuXG4gICAgdGhpcy5fcXVldWUubGVuZ3RoID0gdGhpcy5fY291bnRlciA9IDA7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycy5cbiAgICBmb3IgKGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgaWYgKGV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50XS5sZW5ndGggPSAwO1xuICAgICAgICBldmVudHNbZXZlbnRdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIFNldCB1cCB0aGUgZGVmYXVsdCBleHBvcnQgdmFsdWVzLlxuICB2YXIgdHJhbnNmb3JtU3R5bGUgPSAndHJhbnNmb3JtJztcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSAndHJhbnNmb3JtJztcblxuICAvLyBGaW5kIHRoZSBzdXBwb3J0ZWQgdHJhbnNmb3JtIHByb3AgYW5kIHN0eWxlIG5hbWVzLlxuICB2YXIgZG9jRWxlbVN0eWxlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgdmFyIHN0eWxlID0gJ3RyYW5zZm9ybSc7XG4gIHZhciBzdHlsZUNhcCA9ICdUcmFuc2Zvcm0nO1xuICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgWycnLCAnV2Via2l0JywgJ01veicsICdPJywgJ21zJ10uZm9yRWFjaChmdW5jdGlvbihwcmVmaXgpIHtcbiAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcmVmaXggPyBwcmVmaXggKyBzdHlsZUNhcCA6IHN0eWxlO1xuICAgIGlmIChkb2NFbGVtU3R5bGVbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWZpeCA9IHByZWZpeC50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNmb3JtU3R5bGUgPSBwcmVmaXggPyAnLScgKyBwcmVmaXggKyAnLScgKyBzdHlsZSA6IHN0eWxlO1xuICAgICAgdHJhbnNmb3JtUHJvcCA9IHByb3BOYW1lO1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHN0eWxlc0NhY2hlID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBuZXcgV2Vha01hcCgpIDogbnVsbDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHN0eWxlIHByb3BlcnR5IGFzIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgICB2YXIgc3R5bGVzID0gc3R5bGVzQ2FjaGUgJiYgc3R5bGVzQ2FjaGUuZ2V0KGVsZW1lbnQpO1xuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgICAgIGlmIChzdHlsZXNDYWNoZSkgc3R5bGVzQ2FjaGUuc2V0KGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZSA9PT0gJ3RyYW5zZm9ybScgPyB0cmFuc2Zvcm1TdHlsZSA6IHN0eWxlKTtcbiAgfVxuXG4gIHZhciBzdHlsZU5hbWVSZWdFeCA9IC8oW0EtWl0pL2c7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgYSBjYW1lbCBjYXNlIHN0eWxlIHByb3BlcnR5IHRvIGtlYmFiIGNhc2Ugc3R5bGUgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uoc3R5bGVOYW1lUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdmFyIHN0ckZ1bmN0aW9uID0gJ2Z1bmN0aW9uJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IHN0ckZ1bmN0aW9uO1xuICB9XG5cbiAgdmFyIHRyYW5zZm9ybVN0eWxlJDEgPSAndHJhbnNmb3JtJztcblxuICAvKipcbiAgICogU2V0IGlubGluZSBzdHlsZXMgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXG4gICAqL1xuICBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcCA9PT0gdHJhbnNmb3JtU3R5bGUkMSA/IHRyYW5zZm9ybVByb3AgOiBwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlbSBhbmltYXRpb24gaGFuZGxlciBwb3dlcmVkIGJ5IFdlYiBBbmltYXRpb25zIEFQSS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1BbmltYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9wcm9wcyA9IFtdO1xuICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgIHRoaXMuX2tleWZyYW1lcyA9IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSB7fTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uRmluaXNoID0gdGhpcy5fb25GaW5pc2guYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCBpbnN0YW5jZSdzIGFuaW1hdGlvbi4gQXV0b21hdGljYWxseSBzdG9wcyBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpc1xuICAgKiBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzRnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNUb1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5lYXNpbmc9J2Vhc2UnXVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKHByb3BzRnJvbSwgcHJvcHNUbywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGlvbjtcbiAgICB2YXIgY3VycmVudFByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGNhbmNlbEFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBleGlzdGluZyBhbmltYXRpb24gcnVubmluZywgbGV0J3MgY2hlY2sgaWYgaXQgbmVlZHMgdG8gYmVcbiAgICAvLyBjYW5jZWxsZWQgb3IgaWYgaXQgY2FuIGNvbnRpbnVlIHJ1bm5pbmcuXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgdmFyIHByb3BDb3VudCA9IDA7XG4gICAgICB2YXIgcHJvcEluZGV4O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVxdWVzdGVkIGFuaW1hdGlvbiB0YXJnZXQgcHJvcHMgYW5kIHZhbHVlcyBtYXRjaCB3aXRoIHRoZVxuICAgICAgLy8gY3VycmVudCBwcm9wcyBhbmQgdmFsdWVzLlxuICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHNUbykge1xuICAgICAgICArK3Byb3BDb3VudDtcbiAgICAgICAgcHJvcEluZGV4ID0gY3VycmVudFByb3BzLmluZGV4T2YocHJvcE5hbWUpO1xuICAgICAgICBpZiAocHJvcEluZGV4ID09PSAtMSB8fCBwcm9wc1RvW3Byb3BOYW1lXSAhPT0gY3VycmVudFZhbHVlc1twcm9wSW5kZXhdKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0IHByb3BzIGNvdW50IG1hdGNoZXMgY3VycmVudCBwcm9wcyBjb3VudC4gVGhpcyBpc1xuICAgICAgLy8gbmVlZGVkIGZvciB0aGUgZWRnZSBjYXNlIHNjZW5hcmlvIHdoZXJlIHRhcmdldCBwcm9wcyBjb250YWluIHRoZSBzYW1lXG4gICAgICAvLyBzdHlsZXMgYXMgY3VycmVudCBwcm9wcywgYnV0IHRoZSBjdXJyZW50IHByb3BzIGhhdmUgc29tZSBhZGRpdGlvbmFsXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIGlmICghY2FuY2VsQW5pbWF0aW9uICYmIHByb3BDb3VudCAhPT0gY3VycmVudFByb3BzLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhbmNlbCBhbmltYXRpb24gKGlmIHJlcXVpcmVkKS5cbiAgICBpZiAoY2FuY2VsQW5pbWF0aW9uKSBhbmltYXRpb24uY2FuY2VsKCk7XG5cbiAgICAvLyBTdG9yZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9wdHMub25GaW5pc2gpID8gb3B0cy5vbkZpbmlzaCA6IG51bGw7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgcnVubmluZyBhbmltYXRpb24gdGhhdCBkb2VzIG5vdCBuZWVkIHRvIGJlIGNhbmNlbGxlZCwgbGV0J3NcbiAgICAvLyBjYWxsIGl0IGEgZGF5IGhlcmUgYW5kIGxldCBpdCBydW4uXG4gICAgaWYgKGFuaW1hdGlvbiAmJiAhY2FuY2VsQW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICAvLyBTdG9yZSB0YXJnZXQgcHJvcHMgYW5kIHZhbHVlcyB0byBpbnN0YW5jZS5cbiAgICBjdXJyZW50UHJvcHMubGVuZ3RoID0gY3VycmVudFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIGZvciAocHJvcE5hbWUgaW4gcHJvcHNUbykge1xuICAgICAgY3VycmVudFByb3BzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgY3VycmVudFZhbHVlcy5wdXNoKHByb3BzVG9bcHJvcE5hbWVdKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAga2V5ZnJhbWVzLlxuICAgIHZhciBhbmltS2V5ZnJhbWVzID0gdGhpcy5fa2V5ZnJhbWVzO1xuICAgIGFuaW1LZXlmcmFtZXNbMF0gPSBwcm9wc0Zyb207XG4gICAgYW5pbUtleWZyYW1lc1sxXSA9IHByb3BzVG87XG5cbiAgICAvLyBTZXQgdXAgb3B0aW9ucy5cbiAgICB2YXIgYW5pbU9wdGlvbnMgPSB0aGlzLl9vcHRpb25zO1xuICAgIGFuaW1PcHRpb25zLmR1cmF0aW9uID0gb3B0cy5kdXJhdGlvbiB8fCAzMDA7XG4gICAgYW5pbU9wdGlvbnMuZWFzaW5nID0gb3B0cy5lYXNpbmcgfHwgJ2Vhc2UnO1xuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoYW5pbUtleWZyYW1lcywgYW5pbU9wdGlvbnMpO1xuICAgIGFuaW1hdGlvbi5vbmZpbmlzaCA9IHRoaXMuX29uRmluaXNoO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblxuICAgIC8vIFNldCB0aGUgZW5kIHN0eWxlcy4gVGhpcyBtYWtlcyBzdXJlIHRoYXQgdGhlIGVsZW1lbnQgc3RheXMgYXQgdGhlIGVuZFxuICAgIC8vIHZhbHVlcyBhZnRlciBhbmltYXRpb24gaXMgZmluaXNoZWQuXG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHByb3BzVG8pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGluc3RhbmNlJ3MgY3VycmVudCBhbmltYXRpb24gaWYgcnVubmluZy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUFuaW1hdGUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3R5bGVzXVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbihzdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2FuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgcHJvcE5hbWU7XG4gICAgdmFyIHByb3BWYWx1ZTtcbiAgICB2YXIgaTtcblxuICAgIC8vIENhbGN1bGF0ZSAoaWYgbm90IHByb3ZpZGVkKSBhbmQgc2V0IHN0eWxlcy5cbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9wTmFtZSA9IGN1cnJlbnRQcm9wc1tpXTtcbiAgICAgICAgcHJvcFZhbHVlID0gZ2V0U3R5bGUoZWxlbWVudCwgZ2V0U3R5bGVOYW1lKHByb3BOYW1lKSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcE5hbWUgPT09ICd0cmFuc2Zvcm0nID8gdHJhbnNmb3JtUHJvcCA6IHByb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gIENhbmNlbCBhbmltYXRpb24uXG4gICAgdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblxuICAgIC8vIFJlc2V0IGN1cnJlbnQgcHJvcHMgYW5kIHZhbHVlcy5cbiAgICBjdXJyZW50UHJvcHMubGVuZ3RoID0gY3VycmVudFZhbHVlcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgaXRlbSBpcyBiZWluZyBhbmltYXRlZCBjdXJyZW50bHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1BbmltYXRlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbUFuaW1hdGUucHJvdG90eXBlLmlzQW5pbWF0aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fYW5pbWF0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX29wdGlvbnMgPSB0aGlzLl9rZXlmcmFtZXMgPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZW5kIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtQW5pbWF0ZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1BbmltYXRlLnByb3RvdHlwZS5fb25GaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLl9jYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5fcHJvcHMubGVuZ3RoID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgfTtcblxuICB2YXIgdmVuZG9yUHJlZml4ZXMgPSBbJycsICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nLCAnV2Via2l0JywgJ01veicsICdNUycsICdPJ107XG5cbiAgLyoqXG4gICAqIEdldCBwcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZSB3aGVuIGdpdmVuIGEgbm9uLXByZWZpeGVkIENTUyBwcm9wZXJ0eSBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbVN0eWxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZVxuICAgKiBAcmV0dXJucyB7IVN0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFByZWZpeGVkUHJvcE5hbWUoZWxlbVN0eWxlLCBwcm9wTmFtZSkge1xuICAgIHZhciBjYW1lbFByb3BOYW1lID0gcHJvcE5hbWVbMF0udG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcHJlZml4O1xuICAgIHZhciBwcmVmaXhlZFByb3BOYW1lO1xuXG4gICAgd2hpbGUgKGkgPCB2ZW5kb3JQcmVmaXhlcy5sZW5ndGgpIHtcbiAgICAgIHByZWZpeCA9IHZlbmRvclByZWZpeGVzW2ldO1xuICAgICAgcHJlZml4ZWRQcm9wTmFtZSA9IHByZWZpeCA/IHByZWZpeCArIGNhbWVsUHJvcE5hbWUgOiBwcm9wTmFtZTtcbiAgICAgIGlmIChwcmVmaXhlZFByb3BOYW1lIGluIGVsZW1TdHlsZSkgcmV0dXJuIHByZWZpeGVkUHJvcE5hbWU7XG4gICAgICArK2k7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZHQgPSAxMDAwIC8gNjA7XG5cbiAgdmFyIHJhZiA9IChcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2soZHQpO1xuICAgICAgfSwgZHQpO1xuICAgIH1cbiAgKS5iaW5kKHdpbmRvdyk7XG5cbiAgLy8gRGV0ZWN0IHN1cHBvcnQgZm9yIHBhc3NpdmUgZXZlbnRzOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZCNmZWF0dXJlLWRldGVjdGlvblxuICB2YXIgaXNQYXNzaXZlRXZlbnRzU3VwcG9ydGVkID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIHBhc3NpdmVPcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZU9wdHMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVPcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBEcmFnZ2VyIGV2ZW50cy5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3N0YXJ0JyxcbiAgICBtb3ZlOiAnbW92ZScsXG4gICAgZW5kOiAnZW5kJyxcbiAgICBjYW5jZWw6ICdjYW5jZWwnXG4gIH07XG5cbiAgdmFyIGhhc1RvdWNoRXZlbnRzID0gISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Ub3VjaEV2ZW50KTtcbiAgdmFyIGhhc1BvaW50ZXJFdmVudHMgPSAhIXdpbmRvdy5Qb2ludGVyRXZlbnQ7XG4gIHZhciBoYXNNc1BvaW50ZXJFdmVudHMgPSAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcbiAgdmFyIGlzQW5kcm9pZCA9IC8oYW5kcm9pZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIGxpc3RlbmVyT3B0aW9ucyA9IGlzUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIHRhUHJvcCA9ICd0b3VjaEFjdGlvbic7XG4gIHZhciB0YVByb3BQcmVmaXhlZCA9IGdldFByZWZpeGVkUHJvcE5hbWUod2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSwgdGFQcm9wKTtcbiAgdmFyIHRhRGVmYXVsdFZhbHVlID0gJ2F1dG8nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERyYWdnZXIgaW5zdGFuY2UgZm9yIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtjc3NQcm9wc11cbiAgICovXG4gIGZ1bmN0aW9uIERyYWdnZXIoZWxlbWVudCwgY3NzUHJvcHMpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nzc1Byb3BzID0ge307XG4gICAgdGhpcy5fdG91Y2hBY3Rpb24gPSAnJztcbiAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zdGFydFggPSAwO1xuICAgIHRoaXMuX3N0YXJ0WSA9IDA7XG4gICAgdGhpcy5fY3VycmVudFggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gMDtcblxuICAgIHRoaXMuX3ByZVN0YXJ0Q2hlY2sgPSB0aGlzLl9wcmVTdGFydENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlID0gdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TdGFydCA9IHRoaXMuX29uU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdmUgPSB0aGlzLl9vbk1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25FbmQgPSB0aGlzLl9vbkVuZC5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQXBwbHkgaW5pdGlhbCBjc3MgcHJvcHMuXG4gICAgdGhpcy5zZXRDc3NQcm9wcyhjc3NQcm9wcyk7XG5cbiAgICAvLyBJZiB0b3VjaCBhY3Rpb24gd2FzIG5vdCBwcm92aWRlZCB3aXRoIGluaXRpYWwgY3NzIHByb3BzIGxldCdzIGFzc3VtZSBpdCdzXG4gICAgLy8gYXV0by5cbiAgICBpZiAoIXRoaXMuX3RvdWNoQWN0aW9uKSB7XG4gICAgICB0aGlzLnNldFRvdWNoQWN0aW9uKHRhRGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IG5hdGl2ZSBsaW5rL2ltYWdlIGRyYWdnaW5nIGZvciB0aGUgaXRlbSBhbmQgaXQncyBhbmNlc3RvcnMuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuXG4gICAgLy8gTGlzdGVuIHRvIHN0YXJ0IGV2ZW50LlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9ldmVudHMuc3RhcnQsIHRoaXMuX3ByZVN0YXJ0Q2hlY2ssIGxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHRvdWNoIGV2ZW50cywgYnV0IG5vIHBvaW50ZXIgZXZlbnRzIHdlIG5lZWQgdG8gYWxzbyBsaXN0ZW4gZm9yXG4gICAgLy8gbW91c2UgZXZlbnRzIGluIGFkZGl0aW9uIHRvIHRvdWNoIGV2ZW50cyBmb3IgZGV2aWNlcyB3aGljaCBzdXBwb3J0IGJvdGhcbiAgICAvLyBtb3VzZSBhbmQgdG91Y2ggaW50ZXJhY3Rpb24uXG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzICYmICFoYXNQb2ludGVyRXZlbnRzICYmICFoYXNNc1BvaW50ZXJFdmVudHMpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9tb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvdGVjdGVkIHByb3BlcnRpZXNcbiAgICogKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgRHJhZ2dlci5fcG9pbnRlckV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3BvaW50ZXJkb3duJyxcbiAgICBtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgIGNhbmNlbDogJ3BvaW50ZXJjYW5jZWwnLFxuICAgIGVuZDogJ3BvaW50ZXJ1cCdcbiAgfTtcblxuICBEcmFnZ2VyLl9tc1BvaW50ZXJFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdNU1BvaW50ZXJEb3duJyxcbiAgICBtb3ZlOiAnTVNQb2ludGVyTW92ZScsXG4gICAgY2FuY2VsOiAnTVNQb2ludGVyQ2FuY2VsJyxcbiAgICBlbmQ6ICdNU1BvaW50ZXJVcCdcbiAgfTtcblxuICBEcmFnZ2VyLl90b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGNhbmNlbDogJ3RvdWNoY2FuY2VsJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfTtcblxuICBEcmFnZ2VyLl9tb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgY2FuY2VsOiAnJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9O1xuXG4gIERyYWdnZXIuX2V2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaGFzUG9pbnRlckV2ZW50cykgcmV0dXJuIERyYWdnZXIuX3BvaW50ZXJFdmVudHM7XG4gICAgaWYgKGhhc01zUG9pbnRlckV2ZW50cykgcmV0dXJuIERyYWdnZXIuX21zUG9pbnRlckV2ZW50cztcbiAgICBpZiAoaGFzVG91Y2hFdmVudHMpIHJldHVybiBEcmFnZ2VyLl90b3VjaEV2ZW50cztcbiAgICByZXR1cm4gRHJhZ2dlci5fbW91c2VFdmVudHM7XG4gIH0pKCk7XG5cbiAgRHJhZ2dlci5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBzdGF0aWMgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgRHJhZ2dlci5fcHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQgJiYgZS5jYW5jZWxhYmxlICE9PSBmYWxzZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIERyYWdnZXIuX2FjdGl2YXRlSW5zdGFuY2UgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkgcmV0dXJuO1xuXG4gICAgRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLm1vdmUsIGluc3RhbmNlLl9vbk1vdmUpO1xuICAgIERyYWdnZXIuX2VtaXR0ZXIub24oZXZlbnRzLmNhbmNlbCwgaW5zdGFuY2UuX29uQ2FuY2VsKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9uKGV2ZW50cy5lbmQsIGluc3RhbmNlLl9vbkVuZCk7XG5cbiAgICBpZiAoRHJhZ2dlci5fYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgRHJhZ2dlci5fYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBEcmFnZ2VyLl9kZWFjdGl2YXRlSW5zdGFuY2UgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IERyYWdnZXIuX2FjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICBEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMubW92ZSwgaW5zdGFuY2UuX29uTW92ZSk7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5vZmYoZXZlbnRzLmNhbmNlbCwgaW5zdGFuY2UuX29uQ2FuY2VsKTtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLm9mZihldmVudHMuZW5kLCBpbnN0YW5jZS5fb25FbmQpO1xuXG4gICAgaWYgKCFEcmFnZ2VyLl9hY3RpdmVJbnN0YW5jZXMubGVuZ3RoKSB7XG4gICAgICBEcmFnZ2VyLl91bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ2dlci5fYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmUsIERyYWdnZXIuX29uTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuZW5kLCBEcmFnZ2VyLl9vbkVuZCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBldmVudHMuY2FuY2VsICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5jYW5jZWwsIERyYWdnZXIuX29uQ2FuY2VsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICB9O1xuXG4gIERyYWdnZXIuX3VuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudHMgPSBEcmFnZ2VyLl9ldmVudHM7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmUsIERyYWdnZXIuX29uTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMuZW5kLCBEcmFnZ2VyLl9vbkVuZCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBldmVudHMuY2FuY2VsICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5jYW5jZWwsIERyYWdnZXIuX29uQ2FuY2VsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICB9O1xuXG4gIERyYWdnZXIuX2dldEV2ZW50UG9pbnRlcklkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIHBvaW50ZXIgaWQgYXZhaWxhYmxlIGxldCdzIHVzZSBpdC5cbiAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBldmVudC5wb2ludGVySWQ7XG4gICAgfVxuXG4gICAgLy8gRm9yIHRvdWNoIGV2ZW50cyBsZXQncyBnZXQgdGhlIGZpcnN0IGNoYW5nZWQgdG91Y2gncyBpZGVudGlmaWVyLlxuICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllciA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yIG1vdXNlL290aGVyIGV2ZW50cyBsZXQncyBwcm92aWRlIGEgc3RhdGljIGlkLlxuICAgIHJldHVybiAxO1xuICB9O1xuXG4gIERyYWdnZXIuX2dldFRvdWNoQnlJZCA9IGZ1bmN0aW9uKGV2ZW50LCBpZCkge1xuICAgIC8vIElmIHdlIGhhdmUgYSBwb2ludGVyIGV2ZW50IHJldHVybiB0aGUgd2hvbGUgZXZlbnQgaWYgdGhlcmUncyBhIG1hdGNoLCBhbmRcbiAgICAvLyBudWxsIG90aGVyd2lzZS5cbiAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBldmVudC5wb2ludGVySWQgPT09IGlkID8gZXZlbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciB0b3VjaCBldmVudHMgbGV0J3MgY2hlY2sgaWYgdGhlcmUncyBhIGNoYW5nZWQgdG91Y2ggb2JqZWN0IHRoYXQgbWF0Y2hlc1xuICAgIC8vIHRoZSBwb2ludGVySWQgaW4gd2hpY2ggY2FzZSByZXR1cm4gdGhlIHRvdWNoIG9iamVjdC5cbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbW91c2Uvb3RoZXIgZXZlbnRzIGxldCdzIGFzc3VtZSB0aGVyZSdzIG9ubHkgb25lIHBvaW50ZXIgYW5kIGp1c3RcbiAgICAvLyByZXR1cm4gdGhlIGV2ZW50LlxuICAgIHJldHVybiBldmVudDtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5tb3ZlLCBlKTtcbiAgfTtcblxuICBEcmFnZ2VyLl9vbkNhbmNlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBEcmFnZ2VyLl9lbWl0dGVyLmVtaXQoZXZlbnRzLmNhbmNlbCwgZSk7XG4gIH07XG5cbiAgRHJhZ2dlci5fb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgRHJhZ2dlci5fZW1pdHRlci5lbWl0KGV2ZW50cy5lbmQsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFJlc2V0IGN1cnJlbnQgZHJhZyBvcGVyYXRpb24gKGlmIGFueSkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB0aGlzLl9wb2ludGVySWQgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3RhcnRYID0gMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRYID0gMDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IDA7XG4gICAgdGhpcy5fc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgIHRoaXMuX2Fib3J0Tm9uQ2FuY2VsYWJsZSxcbiAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICk7XG5cbiAgICBEcmFnZ2VyLl9kZWFjdGl2YXRlSW5zdGFuY2UodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGN1c3RvbSBkcmFnZ2VyIGV2ZW50IGZyb20gYSByYXcgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKiBAcmV0dXJucyB7RHJhZ2dlckV2ZW50fVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX2NyZWF0ZUV2ZW50ID0gZnVuY3Rpb24odHlwZSwgZSkge1xuICAgIHZhciB0b3VjaCA9IHRoaXMuX2dldFRyYWNrZWRUb3VjaChlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gSGFtbWVyLmpzIGNvbXBhdGliaWxpdHkgaW50ZXJmYWNlLlxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHNyY0V2ZW50OiBlLFxuICAgICAgZGlzdGFuY2U6IHRoaXMuZ2V0RGlzdGFuY2UoKSxcbiAgICAgIGRlbHRhWDogdGhpcy5nZXREZWx0YVgoKSxcbiAgICAgIGRlbHRhWTogdGhpcy5nZXREZWx0YVkoKSxcbiAgICAgIGRlbHRhVGltZTogdHlwZSA9PT0gZXZlbnRzLnN0YXJ0ID8gMCA6IHRoaXMuZ2V0RGVsdGFUaW1lKCksXG4gICAgICBpc0ZpcnN0OiB0eXBlID09PSBldmVudHMuc3RhcnQsXG4gICAgICBpc0ZpbmFsOiB0eXBlID09PSBldmVudHMuZW5kIHx8IHR5cGUgPT09IGV2ZW50cy5jYW5jZWwsXG4gICAgICAvLyBQYXJ0aWFsIFRvdWNoIEFQSSBpbnRlcmZhY2UuXG4gICAgICBpZGVudGlmaWVyOiB0aGlzLl9wb2ludGVySWQsXG4gICAgICBzY3JlZW5YOiB0b3VjaC5zY3JlZW5YLFxuICAgICAgc2NyZWVuWTogdG91Y2guc2NyZWVuWSxcbiAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgcGFnZVg6IHRvdWNoLnBhZ2VYLFxuICAgICAgcGFnZVk6IHRvdWNoLnBhZ2VZLFxuICAgICAgdGFyZ2V0OiB0b3VjaC50YXJnZXRcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0IGEgcmF3IGV2ZW50IGFzIGRyYWdnZXIgZXZlbnQgaW50ZXJuYWxseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fZW1pdCA9IGZ1bmN0aW9uKHR5cGUsIGUpIHtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQodHlwZSwgdGhpcy5fY3JlYXRlRXZlbnQodHlwZSwgZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgaXMgYSBQb2ludGVyRXZlbnQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gaXQgaWYgaXQgaGFzXG4gICAqIHRoZSBzYW1lIHBvaW50ZXJJZCBhcyB0aGUgaW5zdGFuY2UuIElmIHRoZSBwcm92aWRlZCBldmVudCBpcyBhIFRvdWNoRXZlbnRcbiAgICogdGhpcyBtZXRob2Qgd2lsbCB0cnkgdG8gbG9vayBmb3IgYSBUb3VjaCBpbnN0YW5jZSBpbiB0aGUgY2hhbmdlZFRvdWNoZXMgdGhhdFxuICAgKiBoYXMgYW4gaWRlbnRpZmllciBtYXRjaGluZyB0aGlzIGluc3RhbmNlJ3MgcG9pbnRlcklkLiBJZiB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICogaXMgYSBNb3VzZUV2ZW50IChvciBqdXN0IGFueSBvdGhlciBldmVudCB0aGFuIFBvaW50ZXJFdmVudCBvciBUb3VjaEV2ZW50KVxuICAgKiBpdCB3aWxsIGJlIHJldHVybmVkIGltbWVkaWF0ZWx5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9XG4gICAqIEByZXR1cm5zIHs/KFRvdWNofFBvaW50ZXJFdmVudHxNb3VzZUV2ZW50KX1cbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9nZXRUcmFja2VkVG91Y2ggPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuX3BvaW50ZXJJZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEcmFnZ2VyLl9nZXRUb3VjaEJ5SWQoZSwgdGhpcy5fcG9pbnRlcklkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgcHJlLWhhbmRsZXIgZm9yIHN0YXJ0IGV2ZW50IHRoYXQgY2hlY2tzIGlmIHdlIGNhbiBzdGFydCBkcmFnZ2luZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fcHJlU3RhcnRDaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBub3QgYmVpbmcgZHJhZ2dlZCBjdXJyZW50bHkuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSByZXR1cm47XG5cbiAgICAvLyBTcGVjaWFsIGNhbmNlbGFibGUgY2hlY2sgZm9yIEFuZHJvaWQgdG8gcHJldmVudCBkcmFnIHByb2NlZHVyZSBmcm9tXG4gICAgLy8gc3RhcnRpbmcgaWYgbmF0aXZlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy4gUGFydCAxLlxuICAgIGlmIChpc0FuZHJvaWQgJiYgZS5jYW5jZWxhYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgLy8gTWFrZSBzdXJlIGxlZnQgYnV0dG9uIGlzIHByZXNzZWQgb24gbW91c2UuXG4gICAgaWYgKGUuYnV0dG9uKSByZXR1cm47XG5cbiAgICAvLyBHZXQgKGFuZCBzZXQpIHBvaW50ZXIgaWQuXG4gICAgdGhpcy5fcG9pbnRlcklkID0gRHJhZ2dlci5fZ2V0RXZlbnRQb2ludGVySWQoZSk7XG4gICAgaWYgKHRoaXMuX3BvaW50ZXJJZCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gU3RvcmUgdGhlIHN0YXJ0IGV2ZW50IGFuZCB0cmlnZ2VyIHN0YXJ0IChhc3luYyBvciBzeW5jKS4gUG9pbnRlciBldmVudHNcbiAgICAvLyBhcmUgZW1pdHRlZCBiZWZvcmUgdG91Y2ggZXZlbnRzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGJvdGggb2YgdGhlbS4gQW5kXG4gICAgLy8gaWYgeW91IHRyeSB0byBtb3ZlIGFuIGVsZW1lbnQgYmVmb3JlIGB0b3VjaHN0YXJ0YCBpcyBlbWl0dGVkIHRoZSBwb2ludGVyXG4gICAgLy8gZXZlbnRzIGZvciB0aGF0IGVsZW1lbnQgd2lsbCBiZSBjYW5jZWxlZC4gVGhlIGZpeCBpcyB0byBkZWxheSB0aGUgZW1pdHRlZFxuICAgIC8vIHBvaW50ZXIgZXZlbnRzIGluIHN1Y2ggYSBzY2VuYXJpbyBieSBvbmUgZnJhbWUgc28gdGhhdCBgdG91Y2hzdGFydGAgaGFzXG4gICAgLy8gdGltZSB0byBiZSBlbWl0dGVkIGJlZm9yZSB0aGUgZWxlbWVudCBpcyAocG90ZW50aWFsbHkpIG1vdmVkLlxuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBlO1xuICAgIGlmIChoYXNUb3VjaEV2ZW50cyAmJiAoaGFzUG9pbnRlckV2ZW50cyB8fCBoYXNNc1BvaW50ZXJFdmVudHMpKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhbmNlbGFibGUgY2hlY2sgZm9yIEFuZHJvaWQgdG8gcHJldmVudCBkcmFnIHByb2NlZHVyZSBmcm9tXG4gICAgICAvLyBzdGFydGluZyBpZiBuYXRpdmUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLiBQYXJ0IDIuXG4gICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCxcbiAgICAgICAgICB0aGlzLl9hYm9ydE5vbkNhbmNlbGFibGUsXG4gICAgICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByYWYodGhpcy5fb25TdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uU3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFib3J0IHN0YXJ0IGV2ZW50IGlmIGl0IHR1cm5zIG91dCB0byBiZSBub24tY2FuY2VsYWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7KFBvaW50ZXJFdmVudHxUb3VjaEV2ZW50fE1vdXNlRXZlbnQpfSBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fYWJvcnROb25DYW5jZWxhYmxlID0gZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LFxuICAgICAgdGhpcy5fYWJvcnROb25DYW5jZWxhYmxlLFxuICAgICAgbGlzdGVuZXJPcHRpb25zXG4gICAgKTtcblxuICAgIGlmICh0aGlzLl9zdGFydEV2ZW50ICYmIGUuY2FuY2VsYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3BvaW50ZXJJZCA9IG51bGw7XG4gICAgICB0aGlzLl9zdGFydEV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBkcmFnIHByb2NlZHVyZSBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5fb25TdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5fc3RhcnRFdmVudDtcbiAgICBpZiAoIWUpIHJldHVybjtcblxuICAgIHRoaXMuX3N0YXJ0RXZlbnQgPSBudWxsO1xuXG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIGlmICghdG91Y2gpIHJldHVybjtcblxuICAgIC8vIFNldCB1cCBpbml0IGRhdGEgYW5kIGVtaXQgc3RhcnQgZXZlbnQuXG4gICAgdGhpcy5fc3RhcnRYID0gdGhpcy5fY3VycmVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuX2N1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2VtaXQoZXZlbnRzLnN0YXJ0LCBlKTtcbiAgICBEcmFnZ2VyLl9hY3RpdmF0ZUluc3RhbmNlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBtb3ZlIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHRvdWNoID0gdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpO1xuICAgIGlmICghdG91Y2gpIHJldHVybjtcblxuICAgIHRoaXMuX2N1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5fZW1pdChldmVudHMubW92ZSwgZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIG1vdmUgY2FuY2VsIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoUG9pbnRlckV2ZW50fFRvdWNoRXZlbnR8TW91c2VFdmVudCl9IGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLl9vbkNhbmNlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuX2dldFRyYWNrZWRUb3VjaChlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZW1pdChldmVudHMuY2FuY2VsLCBlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBlbmQgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhQb2ludGVyRXZlbnR8VG91Y2hFdmVudHxNb3VzZUV2ZW50KX0gZVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuX29uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5fZ2V0VHJhY2tlZFRvdWNoKGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9lbWl0KGV2ZW50cy5lbmQsIGUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQgYXQgdGhlIG1vbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXJJZCAhPT0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IGVsZW1lbnQncyB0b3VjaC1hY3Rpb24gQ1NTIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLnNldFRvdWNoQWN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBTdG9yZSB1bm1vZGlmaWVkIHRvdWNoIGFjdGlvbiB2YWx1ZSAod2UgdHJ1c3QgdXNlciBpbnB1dCBoZXJlKS5cbiAgICB0aGlzLl90b3VjaEFjdGlvbiA9IHZhbHVlO1xuXG4gICAgLy8gU2V0IHRvdWNoLWFjdGlvbiBzdHlsZS5cbiAgICBpZiAodGFQcm9wUHJlZml4ZWQpIHtcbiAgICAgIHRoaXMuX2Nzc1Byb3BzW3RhUHJvcFByZWZpeGVkXSA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVt0YVByb3BQcmVmaXhlZF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIHVuc3VwcG9ydGVkIHRvdWNoLWFjdGlvbiB2YWx1ZSBsZXQncyBhZGQgYSBzcGVjaWFsIGxpc3RlbmVyXG4gICAgLy8gdGhhdCBwcmV2ZW50cyBkZWZhdWx0IGFjdGlvbiBvbiB0b3VjaCBzdGFydCBldmVudC4gQSBkaXJ0eSBoYWNrLCBidXQgYmVzdFxuICAgIC8vIHdlIGNhbiBkbyBmb3Igbm93LiBUaGUgb3RoZXIgb3B0aW9ucyB3b3VsZCBiZSB0byBzb21laG93IHBvbHlmaWxsIHRoZVxuICAgIC8vIHVuc3VwcG9ydGVkIHRvdWNoIGFjdGlvbiBiZWhhdmlvciB3aXRoIGN1c3RvbSBoZXVyaXN0aWNzIHdoaWNoIHNvdW5kcyBsaWtlXG4gICAgLy8gYSBjYW4gb2Ygd29ybXMuXG4gICAgaWYgKGhhc1RvdWNoRXZlbnRzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRHJhZ2dlci5fdG91Y2hFdmVudHMuc3RhcnQsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZVt0YVByb3BQcmVmaXhlZF0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl90b3VjaEV2ZW50cy5zdGFydCwgRHJhZ2dlci5fcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbGVtZW50J3MgQ1NTIHByb3BlcnRpZXMuIEFjY2VwdHMgYW4gb2JqZWN0IHdpdGggY2FtZWwgY2FzZWQgc3R5bGVcbiAgICogcHJvcHMgd2l0aCB2YWx1ZSBwYWlycyBhcyBpdCdzIGZpcnN0IGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW25ld1Byb3BzXVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuc2V0Q3NzUHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIGlmICghbmV3UHJvcHMpIHJldHVybjtcblxuICAgIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLl9jc3NQcm9wcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIHByb3A7XG4gICAgdmFyIHByZWZpeGVkUHJvcDtcblxuICAgIC8vIFJlc2V0IGN1cnJlbnQgcHJvcHMuXG4gICAgZm9yIChwcm9wIGluIGN1cnJlbnRQcm9wcykge1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IGN1cnJlbnRQcm9wc1twcm9wXTtcbiAgICAgIGRlbGV0ZSBjdXJyZW50UHJvcHNbcHJvcF07XG4gICAgfVxuXG4gICAgLy8gU2V0IG5ldyBwcm9wcy5cbiAgICBmb3IgKHByb3AgaW4gbmV3UHJvcHMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsdWUgZm9yIHRoZSBwcm9wLlxuICAgICAgaWYgKCFuZXdQcm9wc1twcm9wXSkgY29udGludWU7XG5cbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRvdWNoLWFjdGlvbi5cbiAgICAgIGlmIChwcm9wID09PSB0YVByb3ApIHtcbiAgICAgICAgdGhpcy5zZXRUb3VjaEFjdGlvbihuZXdQcm9wc1twcm9wXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgcHJlZml4ZWQgcHJvcCBhbmQgc2tpcCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgIHByZWZpeGVkUHJvcCA9IGdldFByZWZpeGVkUHJvcE5hbWUoZWxlbWVudC5zdHlsZSwgcHJvcCk7XG4gICAgICBpZiAoIXByZWZpeGVkUHJvcCkgY29udGludWU7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSBwcm9wIGFuZCBhZGQgdGhlIHN0eWxlLlxuICAgICAgY3VycmVudFByb3BzW3ByZWZpeGVkUHJvcF0gPSAnJztcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJlZml4ZWRQcm9wXSA9IG5ld1Byb3BzW3Byb3BdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHBvaW50ZXIgaGFzIG1vdmVkIG9uIHgtYXhpcyBmcm9tIHN0YXJ0IHBvc2l0aW9uLCBpbiBwaXhlbHMuXG4gICAqIFBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBtb3ZlbWVudCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREZWx0YVggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFggLSB0aGlzLl9zdGFydFg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBvbiB5LWF4aXMgZnJvbSBzdGFydCBwb3NpdGlvbiwgaW4gcGl4ZWxzLlxuICAgKiBQb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgbW92ZW1lbnQgZnJvbSB0b3AgdG8gYm90dG9tLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFZID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRZIC0gdGhpcy5fc3RhcnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIChpbiBwaXhlbHMpIGhhcyBwb2ludGVyIG1vdmVkIGZyb20gc3RhcnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIERyYWdnZXIucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBEcmFnZ2VyLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5nZXREZWx0YVgoKTtcbiAgICB2YXIgeSA9IHRoaXMuZ2V0RGVsdGFZKCk7XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfTtcblxuICAvKipcbiAgICogSG93IGxvbmcgaGFzIHBvaW50ZXIgYmVlbiBkcmFnZ2VkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUuZ2V0RGVsdGFUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSA/IERhdGUubm93KCkgLSB0aGlzLl9zdGFydFRpbWUgOiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqICAgLSAnc3RhcnQnLCAnbW92ZScsICdjYW5jZWwnIG9yICdlbmQnLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGRyYWcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBEcmFnZ2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqICAgLSAnc3RhcnQnLCAnbW92ZScsICdjYW5jZWwnIG9yICdlbmQnLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgKi9cbiAgRHJhZ2dlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnRzLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgdW5iaW5kIGFsbCBkcmFnIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgRHJhZ2dlci5wcm90b3R5cGVcbiAgICovXG4gIERyYWdnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZXZlbnRzID0gRHJhZ2dlci5fZXZlbnRzO1xuXG4gICAgLy8gUmVzZXQgZGF0YSBhbmQgZGVhY3RpdmF0ZSB0aGUgaW5zdGFuY2UuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIERlc3Ryb3kgZW1pdHRlci5cbiAgICB0aGlzLl9lbWl0dGVyLmRlc3Ryb3koKTtcblxuICAgIC8vIFVuYmluZCBldmVudCBoYW5kbGVycy5cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCB0aGlzLl9wcmVTdGFydENoZWNrLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihEcmFnZ2VyLl9tb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fcHJlU3RhcnRDaGVjaywgbGlzdGVuZXJPcHRpb25zKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIERyYWdnZXIuX3ByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERyYWdnZXIuX3RvdWNoRXZlbnRzLnN0YXJ0LCBEcmFnZ2VyLl9wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuXG4gICAgLy8gUmVzZXQgc3R5bGVzLlxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5fY3NzUHJvcHMpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSB0aGlzLl9jc3NQcm9wc1twcm9wXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jc3NQcm9wc1twcm9wXTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBkYXRhLlxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gTWFyayBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIHRpY2tlciBzeXN0ZW0gZm9yIGhhbmRsaW5nIERPTSByZWFkcyBhbmQgd3JpdGVzIGluIGFuIGVmZmljaWVudCB3YXkuXG4gICAqIENvbnRhaW5zIGEgcmVhZCBxdWV1ZSBhbmQgYSB3cml0ZSBxdWV1ZSB0aGF0IGFyZSBwcm9jZXNzZWQgb24gdGhlIG5leHRcbiAgICogYW5pbWF0aW9uIGZyYW1lIHdoZW4gbmVlZGVkLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFRpY2tlcigpIHtcbiAgICB0aGlzLl9uZXh0U3RlcCA9IG51bGw7XG5cbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX3JlYWRzID0ge307XG4gICAgdGhpcy5fd3JpdGVzID0ge307XG5cbiAgICB0aGlzLl9iYXRjaCA9IFtdO1xuICAgIHRoaXMuX2JhdGNoUmVhZHMgPSB7fTtcbiAgICB0aGlzLl9iYXRjaFdyaXRlcyA9IHt9O1xuXG4gICAgdGhpcy5fc3RlcCA9IHRoaXMuX3N0ZXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFRpY2tlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oaWQsIHJlYWRPcGVyYXRpb24sIHdyaXRlT3BlcmF0aW9uLCBpc1ByaW9yaXRpemVkKSB7XG4gICAgLy8gRmlyc3QsIGxldCdzIGNoZWNrIGlmIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHF1ZXVlcyB3aXRoIHRoZSBzYW1lIGlkXG4gICAgLy8gYW5kIGlmIHNvIC0+IHJlbW92ZSBpdC5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZihpZCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB0aGlzLl9xdWV1ZVtjdXJyZW50SW5kZXhdID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gQWRkIGVudHJ5LlxuICAgIGlzUHJpb3JpdGl6ZWQgPyB0aGlzLl9xdWV1ZS51bnNoaWZ0KGlkKSA6IHRoaXMuX3F1ZXVlLnB1c2goaWQpO1xuICAgIHRoaXMuX3JlYWRzW2lkXSA9IHJlYWRPcGVyYXRpb247XG4gICAgdGhpcy5fd3JpdGVzW2lkXSA9IHdyaXRlT3BlcmF0aW9uO1xuXG4gICAgLy8gRmluYWxseSwgbGV0J3Mga2ljay1zdGFydCB0aGUgbmV4dCB0aWNrIGlmIGl0IGlzIG5vdCBydW5uaW5nIHlldC5cbiAgICBpZiAoIXRoaXMuX25leHRTdGVwKSB0aGlzLl9uZXh0U3RlcCA9IHJhZih0aGlzLl9zdGVwKTtcbiAgfTtcblxuICBUaWNrZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YoaWQpO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fcXVldWVbY3VycmVudEluZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9yZWFkc1tpZF07XG4gICAgICBkZWxldGUgdGhpcy5fd3JpdGVzW2lkXTtcbiAgICB9XG4gIH07XG5cbiAgVGlja2VyLnByb3RvdHlwZS5fc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciByZWFkcyA9IHRoaXMuX3JlYWRzO1xuICAgIHZhciB3cml0ZXMgPSB0aGlzLl93cml0ZXM7XG4gICAgdmFyIGJhdGNoID0gdGhpcy5fYmF0Y2g7XG4gICAgdmFyIGJhdGNoUmVhZHMgPSB0aGlzLl9iYXRjaFJlYWRzO1xuICAgIHZhciBiYXRjaFdyaXRlcyA9IHRoaXMuX2JhdGNoV3JpdGVzO1xuICAgIHZhciBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gICAgdmFyIGlkO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVzZXQgdGlja2VyLlxuICAgIHRoaXMuX25leHRTdGVwID0gbnVsbDtcblxuICAgIC8vIFNldHVwIHF1ZXVlcyBhbmQgY2FsbGJhY2sgcGxhY2Vob2xkZXJzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWQgPSBxdWV1ZVtpXTtcbiAgICAgIGlmICghaWQpIGNvbnRpbnVlO1xuXG4gICAgICBiYXRjaC5wdXNoKGlkKTtcblxuICAgICAgYmF0Y2hSZWFkc1tpZF0gPSByZWFkc1tpZF07XG4gICAgICBkZWxldGUgcmVhZHNbaWRdO1xuXG4gICAgICBiYXRjaFdyaXRlc1tpZF0gPSB3cml0ZXNbaWRdO1xuICAgICAgZGVsZXRlIHdyaXRlc1tpZF07XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgcXVldWUuXG4gICAgcXVldWUubGVuZ3RoID0gMDtcblxuICAgIC8vIFByb2Nlc3MgcmVhZCBjYWxsYmFja3MuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZCA9IGJhdGNoW2ldO1xuICAgICAgaWYgKGJhdGNoUmVhZHNbaWRdKSB7XG4gICAgICAgIGJhdGNoUmVhZHNbaWRdKCk7XG4gICAgICAgIGRlbGV0ZSBiYXRjaFJlYWRzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIHdyaXRlIGNhbGxiYWNrcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkID0gYmF0Y2hbaV07XG4gICAgICBpZiAoYmF0Y2hXcml0ZXNbaWRdKSB7XG4gICAgICAgIGJhdGNoV3JpdGVzW2lkXSgpO1xuICAgICAgICBkZWxldGUgYmF0Y2hXcml0ZXNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGJhdGNoLlxuICAgIGJhdGNoLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aWNrZXIgaWYgbmVlZGVkLlxuICAgIGlmICghdGhpcy5fbmV4dFN0ZXAgJiYgcXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9uZXh0U3RlcCA9IHJhZih0aGlzLl9zdGVwKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRpY2tlciA9IG5ldyBUaWNrZXIoKTtcblxuICB2YXIgbGF5b3V0VGljayA9ICdsYXlvdXQnO1xuICB2YXIgdmlzaWJpbGl0eVRpY2sgPSAndmlzaWJpbGl0eSc7XG4gIHZhciBtb3ZlVGljayA9ICdtb3ZlJztcbiAgdmFyIHNjcm9sbFRpY2sgPSAnc2Nyb2xsJztcbiAgdmFyIHBsYWNlaG9sZGVyVGljayA9ICdwbGFjZWhvbGRlcic7XG5cbiAgZnVuY3Rpb24gYWRkTGF5b3V0VGljayhpdGVtSWQsIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaykge1xuICAgIHJldHVybiB0aWNrZXIuYWRkKGl0ZW1JZCArIGxheW91dFRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxMYXlvdXRUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIGxheW91dFRpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVmlzaWJpbGl0eVRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyB2aXNpYmlsaXR5VGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFZpc2liaWxpdHlUaWNrKGl0ZW1JZCkge1xuICAgIHJldHVybiB0aWNrZXIuY2FuY2VsKGl0ZW1JZCArIHZpc2liaWxpdHlUaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1vdmVUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgbW92ZVRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjaywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxNb3ZlVGljayhpdGVtSWQpIHtcbiAgICByZXR1cm4gdGlja2VyLmNhbmNlbChpdGVtSWQgKyBtb3ZlVGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTY3JvbGxUaWNrKGl0ZW1JZCwgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRpY2tlci5hZGQoaXRlbUlkICsgc2Nyb2xsVGljaywgcmVhZENhbGxiYWNrLCB3cml0ZUNhbGxiYWNrLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbFRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgc2Nyb2xsVGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQbGFjZWhvbGRlclRpY2soaXRlbUlkLCByZWFkQ2FsbGJhY2ssIHdyaXRlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGlja2VyLmFkZChpdGVtSWQgKyBwbGFjZWhvbGRlclRpY2ssIHJlYWRDYWxsYmFjaywgd3JpdGVDYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbUlkKSB7XG4gICAgcmV0dXJuIHRpY2tlci5jYW5jZWwoaXRlbUlkICsgcGxhY2Vob2xkZXJUaWNrKTtcbiAgfVxuXG4gIHZhciBFbFByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICB2YXIgbWF0Y2hlc0ZuID1cbiAgICBFbFByb3RvLm1hdGNoZXMgfHxcbiAgICBFbFByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsUHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbFByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxQcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgZWxlbWVudCBtYXRjaGVzIGEgQ1NTIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBtYXRjaGVzRm4uY2FsbChlbCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZWxlbWVudE1hdGNoZXMoZWxlbWVudCwgJy4nICsgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHRlbXBBcnJheSA9IFtdO1xuICB2YXIgbnVtYmVyVHlwZSA9ICdudW1iZXInO1xuXG4gIC8qKlxuICAgKiBJbnNlcnQgYW4gaXRlbSBvciBhbiBhcnJheSBvZiBpdGVtcyB0byBhcnJheSB0byBhIHNwZWNpZmllZCBpbmRleC4gTXV0YXRlc1xuICAgKiB0aGUgYXJyYXkuIFRoZSBpbmRleCBjYW4gYmUgbmVnYXRpdmUgaW4gd2hpY2ggY2FzZSB0aGUgaXRlbXMgd2lsbCBiZSBhZGRlZFxuICAgKiB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4PS0xXVxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlJbnNlcnQoYXJyYXksIGl0ZW1zLCBpbmRleCkge1xuICAgIHZhciBzdGFydEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSBudW1iZXJUeXBlID8gaW5kZXggOiAtMTtcbiAgICBpZiAoc3RhcnRJbmRleCA8IDApIHN0YXJ0SW5kZXggPSBhcnJheS5sZW5ndGggLSBzdGFydEluZGV4ICsgMTtcblxuICAgIGFycmF5LnNwbGljZS5hcHBseShhcnJheSwgdGVtcEFycmF5LmNvbmNhdChzdGFydEluZGV4LCAwLCBpdGVtcykpO1xuICAgIHRlbXBBcnJheS5sZW5ndGggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhcnJheSBpbmRleC4gQmFzaWNhbGx5IHRoaXMgZnVuY3Rpb24gbWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZFxuICAgKiBhcnJheSBpbmRleCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGFsc28gdHJhbnNmb3Jtc1xuICAgKiBuZWdhdGl2ZSBpbmRleCB0byB0aGUgbWF0Y2hpbmcgcG9zaXRpdmUgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzTWlncmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBpbmRleCwgaXNNaWdyYXRpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBtYXhJbmRleCA9IE1hdGgubWF4KDAsIGlzTWlncmF0aW9uID8gbGVuZ3RoIDogbGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGluZGV4ID4gbWF4SW5kZXggPyBtYXhJbmRleCA6IGluZGV4IDwgMCA/IE1hdGgubWF4KG1heEluZGV4ICsgaW5kZXggKyAxLCAwKSA6IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYXJyYXkgaXRlbSB0byBhbm90aGVyIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAqICAgLSBJbmRleCAocG9zaXRpdmUgb3IgbmVnYXRpdmUpIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBtb3ZlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgd2hlcmUgdGhlIGl0ZW0gc2hvdWxkIGJlIG1vdmVkIHRvLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlNb3ZlKGFycmF5LCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycmF5IGhhcyB0d28gb3IgbW9yZSBpdGVtcy5cbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgLy8gTm9ybWFsaXplIHRoZSBpbmRpY2VzLlxuICAgIHZhciBmcm9tID0gbm9ybWFsaXplQXJyYXlJbmRleChhcnJheSwgZnJvbUluZGV4KTtcbiAgICB2YXIgdG8gPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCB0b0luZGV4KTtcblxuICAgIC8vIEFkZCB0YXJnZXQgaXRlbSB0byB0aGUgbmV3IHBvc2l0aW9uLlxuICAgIGlmIChmcm9tICE9PSB0bykge1xuICAgICAgYXJyYXkuc3BsaWNlKHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2FwIGFycmF5IGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIHN3YXBwZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aXRoSW5kZXhcbiAgICogICAtIEluZGV4IChwb3NpdGl2ZSBvciBuZWdhdGl2ZSkgb2YgdGhlIG90aGVyIGl0ZW0gdGhhdCB3aWxsIGJlIHN3YXBwZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheVN3YXAoYXJyYXksIGluZGV4LCB3aXRoSW5kZXgpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycmF5IGhhcyB0d28gb3IgbW9yZSBpdGVtcy5cbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgLy8gTm9ybWFsaXplIHRoZSBpbmRpY2VzLlxuICAgIHZhciBpbmRleEEgPSBub3JtYWxpemVBcnJheUluZGV4KGFycmF5LCBpbmRleCk7XG4gICAgdmFyIGluZGV4QiA9IG5vcm1hbGl6ZUFycmF5SW5kZXgoYXJyYXksIHdpdGhJbmRleCk7XG4gICAgdmFyIHRlbXA7XG5cbiAgICAvLyBTd2FwIHRoZSBpdGVtcy5cbiAgICBpZiAoaW5kZXhBICE9PSBpbmRleEIpIHtcbiAgICAgIHRlbXAgPSBhcnJheVtpbmRleEFdO1xuICAgICAgYXJyYXlbaW5kZXhBXSA9IGFycmF5W2luZGV4Ql07XG4gICAgICBhcnJheVtpbmRleEJdID0gdGVtcDtcbiAgICB9XG4gIH1cblxuICB2YXIgYWN0aW9uQ2FuY2VsID0gJ2NhbmNlbCc7XG4gIHZhciBhY3Rpb25GaW5pc2ggPSAnZmluaXNoJztcbiAgdmFyIGRlYm91bmNlVGljayA9ICdkZWJvdW5jZSc7XG4gIHZhciBkZWJvdW5jZUlkID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAgKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gICAqIE4gbWlsbGlzZWNvbmRzLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gYWNjZXB0cyBvbmUgYXJndW1lbnQgd2hpY2gsIHdoZW5cbiAgICogYmVpbmcgXCJmaW5pc2hcIiwgY2FsbHMgdGhlIGRlYm91bmNlIGZ1bmN0aW9uIGltbWVkaWF0ZWx5IGlmIGl0IGlzIGN1cnJlbnRseVxuICAgKiB3YWl0aW5nIHRvIGJlIGNhbGxlZCwgYW5kIHdoZW4gYmVpbmcgXCJjYW5jZWxcIiBjYW5jZWxzIHRoZSBjdXJyZW50bHkgcXVldWVkXG4gICAqIGZ1bmN0aW9uIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0XG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZuLCB3YWl0KSB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgdmFyIHRpY2tlcklkID0gKytkZWJvdW5jZUlkICsgZGVib3VuY2VUaWNrO1xuXG4gICAgaWYgKHdhaXQgPiAwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aWNrZXIuY2FuY2VsKHRpY2tlcklkKTtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSBhY3Rpb25GaW5pc2gpIGZuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSBhY3Rpb25DYW5jZWwgJiYgYWN0aW9uICE9PSBhY3Rpb25GaW5pc2gpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGlja2VyLmFkZCh0aWNrZXJJZCwgZm4sIG51bGwsIHRydWUpO1xuICAgICAgICAgIH0sIHdhaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIGlmIChhY3Rpb24gIT09IGFjdGlvbkNhbmNlbCkgZm4oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIHRyYW5zZm9ybWVkLCBmYWxzZSBpZiBub3QuIEluIHByYWN0aWNlIHRoZVxuICAgKiBlbGVtZW50J3MgZGlzcGxheSB2YWx1ZSBtdXN0IGJlIGFueXRoaW5nIGVsc2UgdGhhbiBcIm5vbmVcIiBvciBcImlubGluZVwiIGFzXG4gICAqIHdlbGwgYXMgaGF2ZSBhIHZhbGlkIHRyYW5zZm9ybSB2YWx1ZSBhcHBsaWVkIGluIG9yZGVyIHRvIGJlIGNvdW50ZWQgYXMgYVxuICAgKiB0cmFuc2Zvcm1lZCBlbGVtZW50LlxuICAgKlxuICAgKiBCb3Jyb3dlZCBmcm9tIE1lenIgKHYwLjYuMSk6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXNyYW1vL21lenIvYmxvYi8wLjYuMS9tZXpyLmpzI0w2NjFcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoZWxlbWVudCkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBnZXRTdHlsZShlbGVtZW50LCAndHJhbnNmb3JtJyk7XG4gICAgaWYgKCF0cmFuc2Zvcm0gfHwgdHJhbnNmb3JtID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkaXNwbGF5ID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICBpZiAoZGlzcGxheSA9PT0gJ2lubGluZScgfHwgZGlzcGxheSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIHBvc2l0aW9uZWQgZWxlbWVudCdzIGNvbnRhaW5pbmcgYmxvY2ssIHdoaWNoIGlzXG4gICAqIGNvbnNpZGVyZWQgdG8gYmUgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgZWxlbWVudCB0aGF0IHRoZSB0YXJnZXQgZWxlbWVudCdzXG4gICAqIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvLiBEaXNjbGFpbWVyOiB0aGlzIG9ubHkgd29ya3MgYXMgaW50ZW5kZWQgZm9yXG4gICAqIGFic29sdXRlIHBvc2l0aW9uZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5jbHVkZVNlbGY9ZmFsc2VdXG4gICAqICAgLSBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlIGNvbnRhaW5pbmcgYmxvY2sgY2hlY2tpbmcgaXMgc3RhcnRlZCBmcm9tXG4gICAqICAgICB0aGUgcHJvdmlkZWQgZWxlbWVudC4gT3RoZXJ3aXNlIHRoZSBjaGVja2luZyBpcyBzdGFydGVkIGZyb20gdGhlXG4gICAqICAgICBwcm92aWRlZCBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHsoRG9jdW1lbnR8RWxlbWVudCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCwgaW5jbHVkZVNlbGYpIHtcbiAgICAvLyBBcyBsb25nIGFzIHRoZSBjb250YWluaW5nIGJsb2NrIGlzIGFuIGVsZW1lbnQsIHN0YXRpYyBhbmQgbm90XG4gICAgLy8gdHJhbnNmb3JtZWQsIHRyeSB0byBnZXQgdGhlIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudCBhbmQgZmFsbGJhY2sgdG9cbiAgICAvLyBkb2N1bWVudC4gaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3JhbW8vbWV6ci9ibG9iLzAuNi4xL21lenIuanMjTDMzOVxuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgcmV0ID0gKGluY2x1ZGVTZWxmID8gZWxlbWVudCA6IGVsZW1lbnQucGFyZW50RWxlbWVudCkgfHwgZG9jdW1lbnQ7XG4gICAgd2hpbGUgKHJldCAmJiByZXQgIT09IGRvY3VtZW50ICYmIGdldFN0eWxlKHJldCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnICYmICFpc1RyYW5zZm9ybWVkKHJldCkpIHtcbiAgICAgIHJldCA9IHJldC5wYXJlbnRFbGVtZW50IHx8IGRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eSB0cmFuc2Zvcm1lZCBpbnRvXG4gICAqIGEgZmxvYXQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGVBc0Zsb2F0KGVsLCBzdHlsZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGdldFN0eWxlKGVsLCBzdHlsZSkpIHx8IDA7XG4gIH1cblxuICB2YXIgb2Zmc2V0QSA9IHt9O1xuICB2YXIgb2Zmc2V0QiA9IHt9O1xuICB2YXIgb2Zmc2V0RGlmZiA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50J3MgZG9jdW1lbnQgb2Zmc2V0LCB3aGljaCBpbiBwcmFjdGljZSBtZWFucyB0aGUgdmVydGljYWxcbiAgICogYW5kIGhvcml6b250YWwgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZWxlbWVudCdzIG5vcnRod2VzdCBjb3JuZXIgYW5kIHRoZVxuICAgKiBkb2N1bWVudCdzIG5vcnRod2VzdCBjb3JuZXIuIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lXG4gICAqIG9iamVjdCBzbyBiZSBzdXJlIHRvIHJlYWQgdGhlIGRhdGEgZnJvbSBpdCBpbnN0ZWFkIHVzaW5nIGl0IGFzIGEgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAcGFyYW0geyhEb2N1bWVudHxFbGVtZW50fFdpbmRvdyl9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvZmZzZXREYXRhXVxuICAgKiAgIC0gT3B0aW9uYWwgZGF0YSBvYmplY3Qgd2hlcmUgdGhlIG9mZnNldCBkYXRhIHdpbGwgYmUgaW5zZXJ0ZWQgdG8uIElmIG5vdFxuICAgKiAgICAgcHJvdmlkZWQgYSBuZXcgb2JqZWN0IHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhlIHJldHVybiBkYXRhLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsZW1lbnQsIG9mZnNldERhdGEpIHtcbiAgICB2YXIgcmV0ID0gb2Zmc2V0RGF0YSB8fCB7fTtcbiAgICB2YXIgcmVjdDtcblxuICAgIC8vIFNldCB1cCByZXR1cm4gZGF0YS5cbiAgICByZXQubGVmdCA9IDA7XG4gICAgcmV0LnRvcCA9IDA7XG5cbiAgICAvLyBEb2N1bWVudCdzIG9mZnNldHMgYXJlIGFsd2F5cyAwLlxuICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudCkgcmV0dXJuIHJldDtcblxuICAgIC8vIEFkZCB2aWV3cG9ydCBzY3JvbGwgbGVmdC90b3AgdG8gdGhlIHJlc3BlY3RpdmUgb2Zmc2V0cy5cbiAgICByZXQubGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwO1xuICAgIHJldC50b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgMDtcblxuICAgIC8vIFdpbmRvdydzIG9mZnNldHMgYXJlIHRoZSB2aWV3cG9ydCBzY3JvbGwgbGVmdC90b3AgdmFsdWVzLlxuICAgIGlmIChlbGVtZW50LnNlbGYgPT09IHdpbmRvdy5zZWxmKSByZXR1cm4gcmV0O1xuXG4gICAgLy8gQWRkIGVsZW1lbnQncyBjbGllbnQgcmVjdHMgdG8gdGhlIG9mZnNldHMuXG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0LmxlZnQgKz0gcmVjdC5sZWZ0O1xuICAgIHJldC50b3AgKz0gcmVjdC50b3A7XG5cbiAgICAvLyBFeGNsdWRlIGVsZW1lbnQncyBib3JkZXJzIGZyb20gdGhlIG9mZnNldC5cbiAgICByZXQubGVmdCArPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgcmV0LnRvcCArPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci10b3Atd2lkdGgnKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZGlmZmVyZW5jZSB0d28gZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1BXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1CXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbXBhcmVDb250YWluaW5nQmxvY2tzPWZhbHNlXVxuICAgKiAgIC0gV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZSBjb250YWluaW5nIGJsb2NrcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudHNcbiAgICogICAgIHdpbGwgYmUgdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2UuIE90aGVyd2lzZSB0aGUgcHJvdmlkZWRcbiAgICogICAgIGVsZW1lbnRzIHdpbGwgYmUgY29tcGFyZWQgZGlyZWN0bHkuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXREaWZmKGVsZW1BLCBlbGVtQiwgY29tcGFyZUNvbnRhaW5pbmdCbG9ja3MpIHtcbiAgICBvZmZzZXREaWZmLmxlZnQgPSAwO1xuICAgIG9mZnNldERpZmYudG9wID0gMDtcblxuICAgIC8vIElmIGVsZW1lbnRzIGFyZSBzYW1lIGxldCdzIHJldHVybiBlYXJseS5cbiAgICBpZiAoZWxlbUEgPT09IGVsZW1CKSByZXR1cm4gb2Zmc2V0RGlmZjtcblxuICAgIC8vIENvbXBhcmUgY29udGFpbmluZyBibG9ja3MgaWYgbmVjZXNzYXJ5LlxuICAgIGlmIChjb21wYXJlQ29udGFpbmluZ0Jsb2Nrcykge1xuICAgICAgZWxlbUEgPSBnZXRDb250YWluaW5nQmxvY2soZWxlbUEsIHRydWUpO1xuICAgICAgZWxlbUIgPSBnZXRDb250YWluaW5nQmxvY2soZWxlbUIsIHRydWUpO1xuXG4gICAgICAvLyBJZiBjb250YWluaW5nIGJsb2NrcyBhcmUgaWRlbnRpY2FsLCBsZXQncyByZXR1cm4gZWFybHkuXG4gICAgICBpZiAoZWxlbUEgPT09IGVsZW1CKSByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5LCBsZXQncyBjYWxjdWxhdGUgdGhlIG9mZnNldCBkaWZmLlxuICAgIGdldE9mZnNldChlbGVtQSwgb2Zmc2V0QSk7XG4gICAgZ2V0T2Zmc2V0KGVsZW1CLCBvZmZzZXRCKTtcbiAgICBvZmZzZXREaWZmLmxlZnQgPSBvZmZzZXRCLmxlZnQgLSBvZmZzZXRBLmxlZnQ7XG4gICAgb2Zmc2V0RGlmZi50b3AgPSBvZmZzZXRCLnRvcCAtIG9mZnNldEEudG9wO1xuXG4gICAgcmV0dXJuIG9mZnNldERpZmY7XG4gIH1cblxuICB2YXIgc3R5bGVPdmVyZmxvdyA9ICdvdmVyZmxvdyc7XG4gIHZhciBzdHlsZU92ZXJmbG93WCA9ICdvdmVyZmxvdy14JztcbiAgdmFyIHN0eWxlT3ZlcmZsb3dZID0gJ292ZXJmbG93LXknO1xuICB2YXIgb3ZlcmZsb3dBdXRvID0gJ2F1dG8nO1xuICB2YXIgb3ZlcmZsb3dTY3JvbGwgPSAnc2Nyb2xsJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBzY3JvbGxhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsZW1lbnQpIHtcbiAgICB2YXIgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93KTtcbiAgICBpZiAob3ZlcmZsb3cgPT09IG92ZXJmbG93QXV0byB8fCBvdmVyZmxvdyA9PT0gb3ZlcmZsb3dTY3JvbGwpIHJldHVybiB0cnVlO1xuXG4gICAgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbGVtZW50LCBzdHlsZU92ZXJmbG93WCk7XG4gICAgaWYgKG92ZXJmbG93ID09PSBvdmVyZmxvd0F1dG8gfHwgb3ZlcmZsb3cgPT09IG92ZXJmbG93U2Nyb2xsKSByZXR1cm4gdHJ1ZTtcblxuICAgIG92ZXJmbG93ID0gZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVPdmVyZmxvd1kpO1xuICAgIGlmIChvdmVyZmxvdyA9PT0gb3ZlcmZsb3dBdXRvIHx8IG92ZXJmbG93ID09PSBvdmVyZmxvd1Njcm9sbCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBlbGVtZW50J3MgYW5jZXN0b3JzIHRoYXQgYXJlIHBvdGVudGlhbGx5IHNjcm9sbGFibGUgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5jbHVkZVNlbGY9ZmFsc2VdXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtkYXRhXVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGVsZW1lbnQsIGluY2x1ZGVTZWxmLCBkYXRhKSB7XG4gICAgdmFyIHJldCA9IGRhdGEgfHwgW107XG4gICAgdmFyIHBhcmVudCA9IGluY2x1ZGVTZWxmID8gZWxlbWVudCA6IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIC8vIEZpbmQgc2Nyb2xsIHBhcmVudHMuXG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAvLyBJZiBlbGVtZW50IGlzIGluc2lkZSBTaGFkb3dET00gbGV0J3MgZ2V0IGl0J3MgaG9zdCBub2RlIGZyb20gdGhlIHJlYWxcbiAgICAgIC8vIERPTSBhbmQgY29udGludWUgbG9vcGluZy5cbiAgICAgIGlmIChwYXJlbnQuZ2V0Um9vdE5vZGUgJiYgcGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgZWxlbWVudCBpcyBzY3JvbGxhYmxlIGxldCdzIGFkZCBpdCB0byB0aGUgc2Nyb2xsYWJsZSBsaXN0LlxuICAgICAgaWYgKGlzU2Nyb2xsYWJsZShwYXJlbnQpKSB7XG4gICAgICAgIHJldC5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBhZGQgd2luZG93IHRvIHRoZSByZXN1bHRzLlxuICAgIHJldC5wdXNoKHdpbmRvdyk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdmFyIHRyYW5zbGF0ZVZhbHVlID0ge307XG4gIHZhciB0cmFuc2Zvcm1TdHlsZSQyID0gJ3RyYW5zZm9ybSc7XG4gIHZhciB0cmFuc2Zvcm1Ob25lID0gJ25vbmUnO1xuICB2YXIgcnhNYXQzZCA9IC9ebWF0cml4M2QvO1xuICB2YXIgcnhNYXRUeCA9IC8oW14sXSosKXs0fS87XG4gIHZhciByeE1hdDNkVHggPSAvKFteLF0qLCl7MTJ9LztcbiAgdmFyIHJ4TmV4dEl0ZW0gPSAvW14sXSosLztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIGNvbXB1dGVkIHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWVzIGFzIGEgZmxvYXRzLlxuICAgKiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGFsd2F5cyB0aGUgc2FtZSBvYmplY3QgYW5kIHVwZGF0ZWQgZXZlcnkgdGltZSB0aGlzXG4gICAqIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpIHtcbiAgICB0cmFuc2xhdGVWYWx1ZS54ID0gMDtcbiAgICB0cmFuc2xhdGVWYWx1ZS55ID0gMDtcblxuICAgIHZhciB0cmFuc2Zvcm0gPSBnZXRTdHlsZShlbGVtZW50LCB0cmFuc2Zvcm1TdHlsZSQyKTtcbiAgICBpZiAoIXRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0gPT09IHRyYW5zZm9ybU5vbmUpIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGVWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gc3R5bGUgY2FuIGJlIGluIGVpdGhlciBtYXRyaXgzZCguLi4pIG9yIG1hdHJpeCguLi4pLlxuICAgIHZhciBpc01hdDNkID0gcnhNYXQzZC50ZXN0KHRyYW5zZm9ybSk7XG4gICAgdmFyIHRYID0gdHJhbnNmb3JtLnJlcGxhY2UoaXNNYXQzZCA/IHJ4TWF0M2RUeCA6IHJ4TWF0VHgsICcnKTtcbiAgICB2YXIgdFkgPSB0WC5yZXBsYWNlKHJ4TmV4dEl0ZW0sICcnKTtcblxuICAgIHRyYW5zbGF0ZVZhbHVlLnggPSBwYXJzZUZsb2F0KHRYKSB8fCAwO1xuICAgIHRyYW5zbGF0ZVZhbHVlLnkgPSBwYXJzZUZsb2F0KHRZKSB8fCAwO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZVZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIHZhbHVlIGludG8gQ1NTIHRyYW5zZm9ybSBzdHlsZVxuICAgKiBwcm9wZXJ0eSdzIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlU3RyaW5nKHgsIHkpIHtcbiAgICByZXR1cm4gJ3RyYW5zbGF0ZVgoJyArIHggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHkgKyAncHgpJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3MgZnJvbSBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50TWF0Y2hlcyhlbGVtZW50LCAnLicgKyBjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKVxuICAgICAgICAgIC5yZXBsYWNlKCcgJyArIGNsYXNzTmFtZSArICcgJywgJyAnKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRHJhZyBzdGFydCBwcmVkaWNhdGUgc3RhdGVzLlxuICB2YXIgc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZSA9IDA7XG4gIHZhciBzdGFydFByZWRpY2F0ZVBlbmRpbmcgPSAxO1xuICB2YXIgc3RhcnRQcmVkaWNhdGVSZXNvbHZlZCA9IDI7XG4gIHZhciBzdGFydFByZWRpY2F0ZVJlamVjdGVkID0gMztcblxuICAvKipcbiAgICogQmluZCB0b3VjaCBpbnRlcmFjdGlvbiB0byBhbiBpdGVtLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtRHJhZyhpdGVtKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9ncmlkSWQgPSBncmlkLl9pZDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzTWlncmF0aW5nID0gZmFsc2U7XG5cbiAgICAvLyBTdGFydCBwcmVkaWNhdGUgZGF0YS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZSA9IGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1N0YXJ0UHJlZGljYXRlKVxuICAgICAgPyBzZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGVcbiAgICAgIDogSXRlbURyYWcuZGVmYXVsdFN0YXJ0UHJlZGljYXRlO1xuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZUluYWN0aXZlO1xuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlUmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRGF0YSBmb3IgZHJhZyBzb3J0IHByZWRpY2F0ZSBoZXVyaXN0aWNzLlxuICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgIHRoaXMuX2hYMSA9IDA7XG4gICAgdGhpcy5faFgyID0gMDtcbiAgICB0aGlzLl9oWTEgPSAwO1xuICAgIHRoaXMuX2hZMiA9IDA7XG5cbiAgICAvLyBTZXR1cCBpdGVtJ3MgaW5pdGlhbCBkcmFnIGRhdGEuXG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIC8vIEJpbmQgdGhlIG1ldGhvZHMgdGhhdCBuZWVkcyBiaW5kaW5nLlxuICAgIHRoaXMuX3ByZVN0YXJ0Q2hlY2sgPSB0aGlzLl9wcmVTdGFydENoZWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlRW5kQ2hlY2sgPSB0aGlzLl9wcmVFbmRDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVwYXJlTW92ZSA9IHRoaXMuX3ByZXBhcmVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYXBwbHlNb3ZlID0gdGhpcy5fYXBwbHlNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcHJlcGFyZVNjcm9sbCA9IHRoaXMuX3ByZXBhcmVTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9hcHBseVNjcm9sbCA9IHRoaXMuX2FwcGx5U2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2hlY2tPdmVybGFwID0gdGhpcy5fY2hlY2tPdmVybGFwLmJpbmQodGhpcyk7XG5cbiAgICAvLyBDcmVhdGUgZGVib3VuY2Ugb3ZlcmxhcCBjaGVja2VyIGZ1bmN0aW9uLlxuICAgIHZhciBzb3J0SW50ZXJ2YWwgPSBzZXR0aW5ncy5kcmFnU29ydEhldXJpc3RpY3Muc29ydEludGVydmFsO1xuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlID0gZGVib3VuY2UodGhpcy5fY2hlY2tPdmVybGFwLCBzb3J0SW50ZXJ2YWwpO1xuXG4gICAgLy8gSW5pdCBkcmFnZ2VyLlxuICAgIHRoaXMuX2RyYWdnZXIgPSBuZXcgRHJhZ2dlcihlbGVtZW50LCBzZXR0aW5ncy5kcmFnQ3NzUHJvcHMpO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ3N0YXJ0JywgdGhpcy5fcHJlU3RhcnRDaGVjayk7XG4gICAgdGhpcy5fZHJhZ2dlci5vbignbW92ZScsIHRoaXMuX3ByZVN0YXJ0Q2hlY2spO1xuICAgIHRoaXMuX2RyYWdnZXIub24oJ2NhbmNlbCcsIHRoaXMuX3ByZUVuZENoZWNrKTtcbiAgICB0aGlzLl9kcmFnZ2VyLm9uKCdlbmQnLCB0aGlzLl9wcmVFbmRDaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHN0YXRpYyBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogRGVmYXVsdCBkcmFnIHN0YXJ0IHByZWRpY2F0ZSBoYW5kbGVyIHRoYXQgaGFuZGxlcyBhbmNob3IgZWxlbWVudHNcbiAgICogZ3JhY2VmdWxseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIGRlZmluZXMgaWYgdGhlIGRyYWcgaXNcbiAgICogc3RhcnRlZCwgcmVqZWN0ZWQgb3IgcGVuZGluZy4gV2hlbiB0cnVlIGlzIHJldHVybmVkIHRoZSBkcmFnZ2luZyBpcyBzdGFydGVkXG4gICAqIGFuZCB3aGVuIGZhbHNlIGlzIHJldHVybmVkIHRoZSBkcmFnZ2luZyBpcyByZWplY3RlZC4gSWYgbm90aGluZyBpcyByZXR1cm5lZFxuICAgKiB0aGUgcHJlZGljYXRlIHdpbGwgYmUgY2FsbGVkIGFnYWluIG9uIHRoZSBuZXh0IGRyYWcgbW92ZW1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiAgIC0gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgd2hpY2ggY2FuIGJlIHVzZWQgdG8gcGFzcyB0aGUgcHJlZGljYXRlXG4gICAqICAgICBpdCdzIG9wdGlvbnMgbWFudWFsbHkuIEJ5IGRlZmF1bHQgdGhlIHByZWRpY2F0ZSByZXRyaWV2ZXMgdGhlIG9wdGlvbnNcbiAgICogICAgIGZyb20gdGhlIGdyaWQncyBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtRHJhZy5kZWZhdWx0U3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihpdGVtLCBldmVudCwgb3B0aW9ucykge1xuICAgIHZhciBkcmFnID0gaXRlbS5fZHJhZztcbiAgICB2YXIgcHJlZGljYXRlID0gZHJhZy5fc3RhcnRQcmVkaWNhdGVEYXRhIHx8IGRyYWcuX3NldHVwU3RhcnRQcmVkaWNhdGUob3B0aW9ucyk7XG5cbiAgICAvLyBGaW5hbCBldmVudCBsb2dpYy4gQXQgdGhpcyBzdGFnZSByZXR1cm4gdmFsdWUgZG9lcyBub3QgbWF0dGVyIGFueW1vcmUsXG4gICAgLy8gdGhlIHByZWRpY2F0ZSBpcyBlaXRoZXIgcmVzb2x2ZWQgb3IgaXQncyBub3QgYW5kIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuICAgIC8vIGFib3V0IGl0LiBIZXJlIHdlIGp1c3QgcmVzZXQgZGF0YSBhbmQgaWYgdGhlIGl0ZW0gZWxlbWVudCBpcyBhIGxpbmtcbiAgICAvLyB3ZSBmb2xsb3cgaXQgKGlmIHRoZXJlIGhhcyBvbmx5IGJlZW4gc2xpZ2h0IG1vdmVtZW50KS5cbiAgICBpZiAoZXZlbnQuaXNGaW5hbCkge1xuICAgICAgZHJhZy5fZmluaXNoU3RhcnRQcmVkaWNhdGUoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmQgYW5kIHN0b3JlIHRoZSBoYW5kbGUgZWxlbWVudCBzbyB3ZSBjYW4gY2hlY2sgbGF0ZXIgb24gaWYgdGhlXG4gICAgLy8gY3Vyc29yIGlzIHdpdGhpbiB0aGUgaGFuZGxlLiBJZiB3ZSBoYXZlIGEgaGFuZGxlIHNlbGVjdG9yIGxldCdzIGZpbmRcbiAgICAvLyB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50LiBPdGhlcndpc2UgbGV0J3MgdXNlIHRoZSBpdGVtIGVsZW1lbnQgYXMgdGhlXG4gICAgLy8gaGFuZGxlLlxuICAgIGlmICghcHJlZGljYXRlLmhhbmRsZUVsZW1lbnQpIHtcbiAgICAgIHByZWRpY2F0ZS5oYW5kbGVFbGVtZW50ID0gZHJhZy5fZ2V0U3RhcnRQcmVkaWNhdGVIYW5kbGUoZXZlbnQpO1xuICAgICAgaWYgKCFwcmVkaWNhdGUuaGFuZGxlRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIGRlbGF5IGlzIGRlZmluZWQgbGV0J3Mga2VlcCB0cmFjayBvZiB0aGUgbGF0ZXN0IGV2ZW50IGFuZCBpbml0aWF0ZVxuICAgIC8vIGRlbGF5IGlmIGl0IGhhcyBub3QgYmVlbiBkb25lIHlldC5cbiAgICBpZiAocHJlZGljYXRlLmRlbGF5KSB7XG4gICAgICBwcmVkaWNhdGUuZXZlbnQgPSBldmVudDtcbiAgICAgIGlmICghcHJlZGljYXRlLmRlbGF5VGltZXIpIHtcbiAgICAgICAgcHJlZGljYXRlLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwcmVkaWNhdGUuZGVsYXkgPSAwO1xuICAgICAgICAgIGlmIChkcmFnLl9yZXNvbHZlU3RhcnRQcmVkaWNhdGUocHJlZGljYXRlLmV2ZW50KSkge1xuICAgICAgICAgICAgZHJhZy5fZm9yY2VSZXNvbHZlU3RhcnRQcmVkaWNhdGUocHJlZGljYXRlLmV2ZW50KTtcbiAgICAgICAgICAgIGRyYWcuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHByZWRpY2F0ZS5kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYWcuX3Jlc29sdmVTdGFydFByZWRpY2F0ZShldmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZHJhZyBzb3J0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZD01MF1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmFjdGlvbj0nbW92ZSddXG4gICAqIEByZXR1cm5zIHsoQm9vbGVhbnxEcmFnU29ydENvbW1hbmQpfVxuICAgKiAgIC0gUmV0dXJucyBmYWxzZSBpZiBubyB2YWxpZCBpbmRleCB3YXMgZm91bmQuIE90aGVyd2lzZSByZXR1cm5zIGRyYWcgc29ydFxuICAgKiAgICAgY29tbWFuZC5cbiAgICovXG4gIEl0ZW1EcmFnLmRlZmF1bHRTb3J0UHJlZGljYXRlID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtUmVjdCA9IHt9O1xuICAgIHZhciB0YXJnZXRSZWN0ID0ge307XG4gICAgdmFyIHJldHVybkRhdGEgPSB7fTtcbiAgICB2YXIgcm9vdEdyaWRBcnJheSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFyZ2V0R3JpZChpdGVtLCByb290R3JpZCwgdGhyZXNob2xkKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcbiAgICAgIHZhciBkcmFnU29ydCA9IHJvb3RHcmlkLl9zZXR0aW5ncy5kcmFnU29ydDtcbiAgICAgIHZhciBiZXN0U2NvcmUgPSAtMTtcbiAgICAgIHZhciBncmlkU2NvcmU7XG4gICAgICB2YXIgZ3JpZHM7XG4gICAgICB2YXIgZ3JpZDtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBHZXQgcG90ZW50aWFsIHRhcmdldCBncmlkcy5cbiAgICAgIGlmIChkcmFnU29ydCA9PT0gdHJ1ZSkge1xuICAgICAgICByb290R3JpZEFycmF5WzBdID0gcm9vdEdyaWQ7XG4gICAgICAgIGdyaWRzID0gcm9vdEdyaWRBcnJheTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRzID0gZHJhZ1NvcnQuY2FsbChyb290R3JpZCwgaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gZ3JpZHMuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZ3JpZHMpKSByZXR1cm4gdGFyZ2V0O1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGdyaWRzIGFuZCBnZXQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ3JpZCA9IGdyaWRzW2ldO1xuXG4gICAgICAgIC8vIEZpbHRlciBvdXQgYWxsIGRlc3Ryb3llZCBncmlkcy5cbiAgICAgICAgaWYgKGdyaWQuX2lzRGVzdHJveWVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZ3JpZCdzIG9mZnNldHMgYW5kIGRpbWVuc2lvbnMgc2luY2UgdGhleSBtaWdodFxuICAgICAgICAvLyBoYXZlIGNoYW5nZWQgKGUuZyBkdXJpbmcgc2Nyb2xsaW5nKS5cbiAgICAgICAgZ3JpZC5fdXBkYXRlQm91bmRpbmdSZWN0KCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaG93IG11Y2ggZHJhZ2dlZCBlbGVtZW50IG92ZXJsYXBzIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICAgICAgdGFyZ2V0UmVjdC53aWR0aCA9IGdyaWQuX3dpZHRoO1xuICAgICAgICB0YXJnZXRSZWN0LmhlaWdodCA9IGdyaWQuX2hlaWdodDtcbiAgICAgICAgdGFyZ2V0UmVjdC5sZWZ0ID0gZ3JpZC5fbGVmdDtcbiAgICAgICAgdGFyZ2V0UmVjdC50b3AgPSBncmlkLl90b3A7XG4gICAgICAgIGdyaWRTY29yZSA9IGdldFJlY3RPdmVybGFwU2NvcmUoaXRlbVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZ3JpZCBpcyB0aGUgYmVzdCBtYXRjaCBzbyBmYXIuXG4gICAgICAgIGlmIChncmlkU2NvcmUgPiB0aHJlc2hvbGQgJiYgZ3JpZFNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gZ3JpZFNjb3JlO1xuICAgICAgICAgIHRhcmdldCA9IGdyaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWx3YXlzIHJlc2V0IHJvb3QgZ3JpZCBhcnJheS5cbiAgICAgIHJvb3RHcmlkQXJyYXkubGVuZ3RoID0gMDtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgb3B0aW9ucykge1xuICAgICAgdmFyIGRyYWcgPSBpdGVtLl9kcmFnO1xuICAgICAgdmFyIHJvb3RHcmlkID0gZHJhZy5fZ2V0R3JpZCgpO1xuXG4gICAgICAvLyBHZXQgZHJhZyBzb3J0IHByZWRpY2F0ZSBzZXR0aW5ncy5cbiAgICAgIHZhciBzb3J0VGhyZXNob2xkID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy50aHJlc2hvbGQgPT09ICdudW1iZXInID8gb3B0aW9ucy50aHJlc2hvbGQgOiA1MDtcbiAgICAgIHZhciBzb3J0QWN0aW9uID0gb3B0aW9ucyAmJiBvcHRpb25zLmFjdGlvbiA9PT0gYWN0aW9uU3dhcCA/IGFjdGlvblN3YXAgOiBhY3Rpb25Nb3ZlO1xuXG4gICAgICAvLyBQb3B1bGF0ZSBpdGVtIHJlY3QgZGF0YS5cbiAgICAgIGl0ZW1SZWN0LndpZHRoID0gaXRlbS5fd2lkdGg7XG4gICAgICBpdGVtUmVjdC5oZWlnaHQgPSBpdGVtLl9oZWlnaHQ7XG4gICAgICBpdGVtUmVjdC5sZWZ0ID0gZHJhZy5fZWxlbWVudENsaWVudFg7XG4gICAgICBpdGVtUmVjdC50b3AgPSBkcmFnLl9lbGVtZW50Q2xpZW50WTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQgZ3JpZC5cbiAgICAgIHZhciBncmlkID0gZ2V0VGFyZ2V0R3JpZChpdGVtLCByb290R3JpZCwgc29ydFRocmVzaG9sZCk7XG5cbiAgICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSBmb3VuZCBubyBncmlkIGNvbnRhaW5lciBlbGVtZW50IHRoYXQgb3ZlcmxhcHMgdGhlXG4gICAgICAvLyBkcmFnZ2VkIGl0ZW0gZW5vdWdoLlxuICAgICAgaWYgKCFncmlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHZhciBncmlkT2Zmc2V0TGVmdCA9IDA7XG4gICAgICB2YXIgZ3JpZE9mZnNldFRvcCA9IDA7XG4gICAgICB2YXIgbWF0Y2hTY29yZSA9IC0xO1xuICAgICAgdmFyIG1hdGNoSW5kZXg7XG4gICAgICB2YXIgaGFzVmFsaWRUYXJnZXRzO1xuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIHZhciBzY29yZTtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBJZiBpdGVtIGlzIG1vdmVkIHdpdGhpbiBpdCdzIG9yaWdpbmF0aW5nIGdyaWQgYWRqdXN0IGl0ZW0ncyBsZWZ0IGFuZFxuICAgICAgLy8gdG9wIHByb3BzLiBPdGhlcndpc2UgaWYgaXRlbSBpcyBtb3ZlZCB0by93aXRoaW4gYW5vdGhlciBncmlkIGdldCB0aGVcbiAgICAgIC8vIGNvbnRhaW5lciBlbGVtZW50J3Mgb2Zmc2V0IChmcm9tIHRoZSBlbGVtZW50J3MgY29udGVudCBlZGdlKS5cbiAgICAgIGlmIChncmlkID09PSByb290R3JpZCkge1xuICAgICAgICBpdGVtUmVjdC5sZWZ0ID0gZHJhZy5fZ3JpZFggKyBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgICAgICBpdGVtUmVjdC50b3AgPSBkcmFnLl9ncmlkWSArIGl0ZW0uX21hcmdpblRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWQuX3VwZGF0ZUJvcmRlcnMoMSwgMCwgMSwgMCk7XG4gICAgICAgIGdyaWRPZmZzZXRMZWZ0ID0gZ3JpZC5fbGVmdCArIGdyaWQuX2JvcmRlckxlZnQ7XG4gICAgICAgIGdyaWRPZmZzZXRUb3AgPSBncmlkLl90b3AgKyBncmlkLl9ib3JkZXJUb3A7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgdGFyZ2V0IGdyaWQgaXRlbXMgYW5kIHRyeSB0byBmaW5kIHRoZSBiZXN0IG1hdGNoLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWQuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhcmdldCA9IGdyaWQuX2l0ZW1zW2ldO1xuXG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXRlbSBpcyBub3QgYWN0aXZlIG9yIHRoZSB0YXJnZXQgaXRlbSBpcyB0aGUgZHJhZ2dlZFxuICAgICAgICAvLyBpdGVtIGxldCdzIHNraXAgdG8gdGhlIG5leHQgaXRlbS5cbiAgICAgICAgaWYgKCF0YXJnZXQuX2lzQWN0aXZlIHx8IHRhcmdldCA9PT0gaXRlbSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFyayB0aGUgZ3JpZCBhcyBoYXZpbmcgdmFsaWQgdGFyZ2V0IGl0ZW1zLlxuICAgICAgICBoYXNWYWxpZFRhcmdldHMgPSB0cnVlO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0J3Mgb3ZlcmxhcCBzY29yZSB3aXRoIHRoZSBkcmFnZ2VkIGl0ZW0uXG4gICAgICAgIHRhcmdldFJlY3Qud2lkdGggPSB0YXJnZXQuX3dpZHRoO1xuICAgICAgICB0YXJnZXRSZWN0LmhlaWdodCA9IHRhcmdldC5faGVpZ2h0O1xuICAgICAgICB0YXJnZXRSZWN0LmxlZnQgPSB0YXJnZXQuX2xlZnQgKyB0YXJnZXQuX21hcmdpbkxlZnQgKyBncmlkT2Zmc2V0TGVmdDtcbiAgICAgICAgdGFyZ2V0UmVjdC50b3AgPSB0YXJnZXQuX3RvcCArIHRhcmdldC5fbWFyZ2luVG9wICsgZ3JpZE9mZnNldFRvcDtcbiAgICAgICAgc2NvcmUgPSBnZXRSZWN0T3ZlcmxhcFNjb3JlKGl0ZW1SZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgICAgICAvLyBVcGRhdGUgYmVzdCBtYXRjaCBpbmRleCBhbmQgc2NvcmUgaWYgdGhlIHRhcmdldCdzIG92ZXJsYXAgc2NvcmUgd2l0aFxuICAgICAgICAvLyB0aGUgZHJhZ2dlZCBpdGVtIGlzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IGJlc3QgbWF0Y2ggc2NvcmUuXG4gICAgICAgIGlmIChzY29yZSA+IG1hdGNoU2NvcmUpIHtcbiAgICAgICAgICBtYXRjaEluZGV4ID0gaTtcbiAgICAgICAgICBtYXRjaFNjb3JlID0gc2NvcmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gdmFsaWQgbWF0Y2ggYW5kIHRoZSBpdGVtIGlzIGJlaW5nIG1vdmVkIGludG8gYW5vdGhlclxuICAgICAgLy8gZ3JpZC5cbiAgICAgIGlmIChtYXRjaFNjb3JlIDwgc29ydFRocmVzaG9sZCAmJiBpdGVtLmdldEdyaWQoKSAhPT0gZ3JpZCkge1xuICAgICAgICBtYXRjaEluZGV4ID0gaGFzVmFsaWRUYXJnZXRzID8gLTEgOiAwO1xuICAgICAgICBtYXRjaFNjb3JlID0gSW5maW5pdHk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBiZXN0IG1hdGNoIG92ZXJsYXBzIGVub3VnaCB0byBqdXN0aWZ5IGEgcGxhY2VtZW50IHN3aXRjaC5cbiAgICAgIGlmIChtYXRjaFNjb3JlID49IHNvcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuRGF0YS5ncmlkID0gZ3JpZDtcbiAgICAgICAgcmV0dXJuRGF0YS5pbmRleCA9IG1hdGNoSW5kZXg7XG4gICAgICAgIHJldHVybkRhdGEuYWN0aW9uID0gc29ydEFjdGlvbjtcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBYm9ydCBkcmFnZ2luZyBhbmQgcmVzZXQgZHJhZyBkYXRhLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1EcmFnfVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuXG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBiZWluZyBkcm9wcGVkIGludG8gYW5vdGhlciBncmlkLCBmaW5pc2ggaXQgdXAgYW5kIHJldHVyblxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIGlmICh0aGlzLl9pc01pZ3JhdGluZykge1xuICAgICAgdGhpcy5fZmluaXNoTWlncmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIG1vdmUgYW5kIHNjcm9sbCB0aWNrcy5cbiAgICBjYW5jZWxNb3ZlVGljayhpdGVtLl9pZCk7XG4gICAgY2FuY2VsU2Nyb2xsVGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICB0aGlzLl91bmJpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIENhbmNlbCBvdmVybGFwIGNoZWNrLlxuICAgIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCdjYW5jZWwnKTtcblxuICAgIC8vIEFwcGVuZCBpdGVtIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lciBpZiBpdCdzIG5vdCBpdCdzIGNoaWxkLiBBbHNvIG1ha2VcbiAgICAvLyBzdXJlIHRoZSB0cmFuc2xhdGUgdmFsdWVzIGFyZSBhZGp1c3RlZCB0byBhY2NvdW50IGZvciB0aGUgRE9NIHNoaWZ0LlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGdyaWQuX2VsZW1lbnQpIHtcbiAgICAgIGdyaWQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2dyaWRYLCB0aGlzLl9ncmlkWSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGdyaWQuX3NldHRpbmdzLml0ZW1EcmFnZ2luZ0NsYXNzKTtcblxuICAgIC8vIFJlc2V0IGRyYWcgZGF0YS5cbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbURyYWd9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fZHJhZ2dlci5kZXN0cm95KCk7XG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHs/R3JpZH1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fZ2V0R3JpZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBncmlkSW5zdGFuY2VzW3RoaXMuX2dyaWRJZF0gfHwgbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAvcmVzZXQgZHJhZyBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSXMgaXRlbSBiZWluZyBkcmFnZ2VkP1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgZHJhZ2dlZCBpdGVtJ3MgY29udGFpbmVyIGVsZW1lbnQuXG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcblxuICAgIC8vIFRoZSBkcmFnZ2VkIGl0ZW0ncyBjb250YWluaW5nIGJsb2NrLlxuICAgIHRoaXMuX2NvbnRhaW5pbmdCbG9jayA9IG51bGw7XG5cbiAgICAvLyBEcmFnL3Njcm9sbCBldmVudCBkYXRhLlxuICAgIHRoaXMuX2RyYWdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fc2Nyb2xsRXZlbnQgPSBudWxsO1xuXG4gICAgLy8gQWxsIHRoZSBlbGVtZW50cyB3aGljaCBuZWVkIHRvIGJlIGxpc3RlbmVkIGZvciBzY3JvbGwgZXZlbnRzIGR1cmluZ1xuICAgIC8vIGRyYWdnaW5nLlxuICAgIHRoaXMuX3Njcm9sbGVycyA9IFtdO1xuXG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlWC90cmFuc2xhdGVZIHBvc2l0aW9uLlxuICAgIHRoaXMuX2xlZnQgPSAwO1xuICAgIHRoaXMuX3RvcCA9IDA7XG5cbiAgICAvLyBEcmFnZ2VkIGVsZW1lbnQncyBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiB0aGUgZ3JpZC5cbiAgICB0aGlzLl9ncmlkWCA9IDA7XG4gICAgdGhpcy5fZ3JpZFkgPSAwO1xuXG4gICAgLy8gRHJhZ2dlZCBlbGVtZW50J3MgY3VycmVudCBvZmZzZXQgZnJvbSB3aW5kb3cncyBub3J0aHdlc3QgY29ybmVyLiBEb2VzXG4gICAgLy8gbm90IGFjY291bnQgZm9yIGVsZW1lbnQncyBtYXJnaW5zLlxuICAgIHRoaXMuX2VsZW1lbnRDbGllbnRYID0gMDtcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSA9IDA7XG5cbiAgICAvLyBPZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQncyB0ZW1wb3JhcnkgZHJhZ1xuICAgIC8vIGNvbnRhaW5lciBhbmQgaXQncyBvcmlnaW5hbCBjb250YWluZXIuXG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBkcmFnIHNjcm9sbCBoYW5kbGVycyB0byBhbGwgc2Nyb2xsYWJsZSBhbmNlc3RvciBlbGVtZW50cyBvZiB0aGVcbiAgICogZHJhZ2dlZCBlbGVtZW50IGFuZCB0aGUgZHJhZyBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9iaW5kU2Nyb2xsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSB0aGlzLl9nZXRHcmlkKCkuX2VsZW1lbnQ7XG4gICAgdmFyIGRyYWdDb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XG4gICAgdmFyIHNjcm9sbGVycyA9IHRoaXMuX3Njcm9sbGVycztcbiAgICB2YXIgZ3JpZFNjcm9sbGVycztcbiAgICB2YXIgaTtcblxuICAgIC8vIEdldCBkcmFnZ2VkIGVsZW1lbnQncyBzY3JvbGxpbmcgcGFyZW50cy5cbiAgICBzY3JvbGxlcnMubGVuZ3RoID0gMDtcbiAgICBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKHRoaXMuX2l0ZW0uX2VsZW1lbnQsIGZhbHNlLCBzY3JvbGxlcnMpO1xuXG4gICAgLy8gSWYgZHJhZyBjb250YWluZXIgaXMgZGVmaW5lZCBhbmQgaXQncyBub3QgdGhlIHNhbWUgZWxlbWVudCBhcyBncmlkXG4gICAgLy8gY29udGFpbmVyIHRoZW4gd2UgbmVlZCB0byBhZGQgdGhlIGdyaWQgY29udGFpbmVyIGFuZCBpdCdzIHNjcm9sbCBwYXJlbnRzXG4gICAgLy8gdG8gdGhlIGVsZW1lbnRzIHdoaWNoIGFyZSBnb2luZyB0byBiZSBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50cy5cbiAgICBpZiAoZHJhZ0NvbnRhaW5lciAhPT0gZ3JpZENvbnRhaW5lcikge1xuICAgICAgZ3JpZFNjcm9sbGVycyA9IFtdO1xuICAgICAgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhncmlkQ29udGFpbmVyLCB0cnVlLCBncmlkU2Nyb2xsZXJzKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkU2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY3JvbGxlcnMuaW5kZXhPZihncmlkU2Nyb2xsZXJzW2ldKSA8IDApIHtcbiAgICAgICAgICBzY3JvbGxlcnMucHVzaChncmlkU2Nyb2xsZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJpbmQgc2Nyb2xsIGxpc3RlbmVycy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzY3JvbGxlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGN1cnJlbnRseSBib3VuZCBkcmFnIHNjcm9sbCBoYW5kbGVycyBmcm9tIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yXG4gICAqIGVsZW1lbnRzIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3VuYmluZFNjcm9sbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxlcnMgPSB0aGlzLl9zY3JvbGxlcnM7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzY3JvbGxlcnNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGwpO1xuICAgIH1cblxuICAgIHNjcm9sbGVycy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0IHN0YXJ0IHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3NldHVwU3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGNvbmZpZyA9IG9wdGlvbnMgfHwgdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncy5kcmFnU3RhcnRQcmVkaWNhdGUgfHwgMDtcbiAgICByZXR1cm4gKHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YSA9IHtcbiAgICAgIGRpc3RhbmNlOiBNYXRoLmFicyhjb25maWcuZGlzdGFuY2UpIHx8IDAsXG4gICAgICBkZWxheTogTWF0aC5tYXgoY29uZmlnLmRlbGF5LCAwKSB8fCAwLFxuICAgICAgaGFuZGxlOiB0eXBlb2YgY29uZmlnLmhhbmRsZSA9PT0gJ3N0cmluZycgPyBjb25maWcuaGFuZGxlIDogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdCBzdGFydCBwcmVkaWNhdGUgaGFuZGxlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9nZXRTdGFydFByZWRpY2F0ZUhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHByZWRpY2F0ZSA9IHRoaXMuX3N0YXJ0UHJlZGljYXRlRGF0YTtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2l0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGhhbmRsZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gTm8gaGFuZGxlLCBubyBoYXNzbGUgLT4gbGV0J3MgdXNlIHRoZSBpdGVtIGVsZW1lbnQgYXMgdGhlIGhhbmRsZS5cbiAgICBpZiAoIXByZWRpY2F0ZS5oYW5kbGUpIHJldHVybiBoYW5kbGVFbGVtZW50O1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzcGVjaWZpYyBwcmVkaWNhdGUgaGFuZGxlIGRlZmluZWQsIGxldCdzIHRyeSB0byBnZXQgaXQuXG4gICAgaGFuZGxlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICB3aGlsZSAoaGFuZGxlRWxlbWVudCAmJiAhZWxlbWVudE1hdGNoZXMoaGFuZGxlRWxlbWVudCwgcHJlZGljYXRlLmhhbmRsZSkpIHtcbiAgICAgIGhhbmRsZUVsZW1lbnQgPSBoYW5kbGVFbGVtZW50ICE9PSBlbGVtZW50ID8gaGFuZGxlRWxlbWVudC5wYXJlbnRFbGVtZW50IDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZUVsZW1lbnQgfHwgbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGN1cnJlbnRseSBib3VuZCBkcmFnIHNjcm9sbCBoYW5kbGVycyBmcm9tIGFsbCBzY3JvbGxhYmxlIGFuY2VzdG9yXG4gICAqIGVsZW1lbnRzIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYW5kIHRoZSBkcmFnIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzb2x2ZVN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuXG4gICAgLy8gSWYgdGhlIG1vdmVkIGRpc3RhbmNlIGlzIHNtYWxsZXIgdGhhbiB0aGUgdGhyZXNob2xkIGRpc3RhbmNlIG9yIHRoZXJlIGlzXG4gICAgLy8gc29tZSBkZWxheSBsZWZ0LCBpZ25vcmUgdGhpcyBwcmVkaWNhdGUgY3ljbGUuXG4gICAgaWYgKGV2ZW50LmRpc3RhbmNlIDwgcHJlZGljYXRlLmRpc3RhbmNlIHx8IHByZWRpY2F0ZS5kZWxheSkgcmV0dXJuO1xuXG4gICAgLy8gR2V0IGhhbmRsZSByZWN0IGRhdGEuXG4gICAgdmFyIGhhbmRsZVJlY3QgPSBwcmVkaWNhdGUuaGFuZGxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGFuZGxlTGVmdCA9IGhhbmRsZVJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgMCk7XG4gICAgdmFyIGhhbmRsZVRvcCA9IGhhbmRsZVJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwKTtcbiAgICB2YXIgaGFuZGxlV2lkdGggPSBoYW5kbGVSZWN0LndpZHRoO1xuICAgIHZhciBoYW5kbGVIZWlnaHQgPSBoYW5kbGVSZWN0LmhlaWdodDtcblxuICAgIC8vIFJlc2V0IHByZWRpY2F0ZSBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0U3RhcnRQcmVkaWNhdGUoKTtcblxuICAgIC8vIElmIHRoZSBjdXJzb3IgaXMgc3RpbGwgd2l0aGluIHRoZSBoYW5kbGUgbGV0J3Mgc3RhcnQgdGhlIGRyYWcuXG4gICAgcmV0dXJuIChcbiAgICAgIGhhbmRsZVdpZHRoICYmXG4gICAgICBoYW5kbGVIZWlnaHQgJiZcbiAgICAgIGV2ZW50LnBhZ2VYID49IGhhbmRsZUxlZnQgJiZcbiAgICAgIGV2ZW50LnBhZ2VYIDwgaGFuZGxlTGVmdCArIGhhbmRsZVdpZHRoICYmXG4gICAgICBldmVudC5wYWdlWSA+PSBoYW5kbGVUb3AgJiZcbiAgICAgIGV2ZW50LnBhZ2VZIDwgaGFuZGxlVG9wICsgaGFuZGxlSGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRm9yY2VmdWxseSByZXNvbHZlIGRyYWcgc3RhcnQgcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9mb3JjZVJlc29sdmVTdGFydFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0Rlc3Ryb3llZCAmJiB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuICAgICAgdGhpcy5fb25TdGFydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5hbGl6ZSBzdGFydCBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2ZpbmlzaFN0YXJ0UHJlZGljYXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2l0ZW0uX2VsZW1lbnQ7XG5cbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgY2xpY2sgKHZlcnkgc3ViamVjdGl2ZSBoZXVyaXN0aWNzKS5cbiAgICB2YXIgaXNDbGljayA9IE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPCAyICYmIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkgPCAyICYmIGV2ZW50LmRlbHRhVGltZSA8IDIwMDtcblxuICAgIC8vIFJlc2V0IHByZWRpY2F0ZS5cbiAgICB0aGlzLl9yZXNldFN0YXJ0UHJlZGljYXRlKCk7XG5cbiAgICAvLyBJZiB0aGUgZ2VzdHVyZSBjYW4gYmUgaW50ZXJwcmV0ZWQgYXMgY2xpY2sgbGV0J3MgdHJ5IHRvIG9wZW4gdGhlIGVsZW1lbnQnc1xuICAgIC8vIGhyZWYgdXJsIChpZiBpdCBpcyBhbiBhbmNob3IgZWxlbWVudCkuXG4gICAgaWYgKGlzQ2xpY2spIG9wZW5BbmNob3JIcmVmKGVsZW1lbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCBkcmFnIHNvcnQgaGV1cmlzdGljcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcmVzZXRIZXVyaXN0aWNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9oWDEgPSB0aGlzLl9oWDIgPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX2hZMSA9IHRoaXMuX2hZMiA9IGV2ZW50LmNsaWVudFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJ1biBoZXVyaXN0aWNzIGFuZCByZXR1cm4gdHJ1ZSBpZiBvdmVybGFwIGNoZWNrIGNhbiBiZSBwZXJmb3JtZWQsIGFuZCBmYWxzZVxuICAgKiBpZiBpdCBjYW4gbm90LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fY2hlY2tIZXVyaXN0aWNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLl9nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdTb3J0SGV1cmlzdGljcztcbiAgICB2YXIgbWluRGlzdCA9IHNldHRpbmdzLm1pbkRyYWdEaXN0YW5jZTtcblxuICAgIC8vIFNraXAgaGV1cmlzdGljcyBpZiBub3QgbmVlZGVkLlxuICAgIGlmIChtaW5EaXN0IDw9IDApIHtcbiAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHggPSBldmVudC5jbGllbnRYO1xuICAgIHZhciB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICB2YXIgZGlmZlggPSB4IC0gdGhpcy5faFgyO1xuICAgIHZhciBkaWZmWSA9IHkgLSB0aGlzLl9oWTI7XG5cbiAgICAvLyBJZiB3ZSBjYW4ndCBkbyBwcm9wZXIgYm91bmNlIGJhY2sgY2hlY2sgbWFrZSBzdXJlIHRoYXQgdGhlIGJsb2NrZWQgaW5kZXhcbiAgICAvLyBpcyBub3Qgc2V0LlxuICAgIHZhciBjYW5DaGVja0JvdW5jZUJhY2sgPSBtaW5EaXN0ID4gMyAmJiBzZXR0aW5ncy5taW5Cb3VuY2VCYWNrQW5nbGUgPiAwO1xuICAgIGlmICghY2FuQ2hlY2tCb3VuY2VCYWNrKSB7XG4gICAgICB0aGlzLl9oQmxvY2tlZEluZGV4ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gbWluRGlzdCB8fCBNYXRoLmFicyhkaWZmWSkgPiBtaW5EaXN0KSB7XG4gICAgICAvLyBSZXNldCBibG9ja2VkIGluZGV4IGlmIGFuZ2xlIGNoYW5nZWQgZW5vdWdoLiBUaGlzIGNoZWNrIHJlcXVpcmVzIGFcbiAgICAgIC8vIG1pbmltdW0gdmFsdWUgb2YgMyBmb3IgbWluRHJhZ0Rpc3RhbmNlIHRvIGZ1bmN0aW9uIHByb3Blcmx5LlxuICAgICAgaWYgKGNhbkNoZWNrQm91bmNlQmFjaykge1xuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGRpZmZYLCBkaWZmWSk7XG4gICAgICAgIHZhciBwcmV2QW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMuX2hYMiAtIHRoaXMuX2hYMSwgdGhpcy5faFkyIC0gdGhpcy5faFkxKTtcbiAgICAgICAgdmFyIGRlbHRhQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguc2luKGFuZ2xlIC0gcHJldkFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUgLSBwcmV2QW5nbGUpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhQW5nbGUpID4gc2V0dGluZ3MubWluQm91bmNlQmFja0FuZ2xlKSB7XG4gICAgICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHBvaW50cy5cbiAgICAgIHRoaXMuX2hYMSA9IHRoaXMuX2hYMjtcbiAgICAgIHRoaXMuX2hZMSA9IHRoaXMuX2hZMjtcbiAgICAgIHRoaXMuX2hYMiA9IHg7XG4gICAgICB0aGlzLl9oWTIgPSB5O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IGZvciBkZWZhdWx0IGRyYWcgc3RhcnQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX3Jlc2V0U3RhcnRQcmVkaWNhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJlZGljYXRlID0gdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhO1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuZGVsYXlUaW1lcikge1xuICAgICAgICBwcmVkaWNhdGUuZGVsYXlUaW1lciA9IHdpbmRvdy5jbGVhclRpbWVvdXQocHJlZGljYXRlLmRlbGF5VGltZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVEYXRhID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIChkdXJpbmcgZHJhZykgaWYgYW4gaXRlbSBpcyBvdmVybGFwcGluZyBvdGhlciBpdGVtcyBhbmQgYmFzZWQgb25cbiAgICogdGhlIGNvbmZpZ3VyYXRpb24gbGF5b3V0IHRoZSBpdGVtcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9jaGVja092ZXJsYXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5fZ2V0R3JpZCgpLl9zZXR0aW5ncztcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBjdXJyZW50R3JpZDtcbiAgICB2YXIgY3VycmVudEluZGV4O1xuICAgIHZhciB0YXJnZXRHcmlkO1xuICAgIHZhciB0YXJnZXRJbmRleDtcbiAgICB2YXIgc29ydEFjdGlvbjtcbiAgICB2YXIgaXNNaWdyYXRpb247XG5cbiAgICAvLyBHZXQgb3ZlcmxhcCBjaGVjayByZXN1bHQuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1NvcnRQcmVkaWNhdGUpKSB7XG4gICAgICByZXN1bHQgPSBzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZShpdGVtLCB0aGlzLl9kcmFnRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBJdGVtRHJhZy5kZWZhdWx0U29ydFByZWRpY2F0ZShpdGVtLCBzZXR0aW5ncy5kcmFnU29ydFByZWRpY2F0ZSk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHRoZSByZXN1bHQgb2JqZWN0IGhhcyBhIHZhbGlkIGluZGV4IGJlZm9yZSBnb2luZyBmdXJ0aGVyLlxuICAgIGlmICghcmVzdWx0IHx8IHR5cGVvZiByZXN1bHQuaW5kZXggIT09ICdudW1iZXInKSByZXR1cm47XG5cbiAgICBjdXJyZW50R3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHRhcmdldEdyaWQgPSByZXN1bHQuZ3JpZCB8fCBjdXJyZW50R3JpZDtcbiAgICBpc01pZ3JhdGlvbiA9IGN1cnJlbnRHcmlkICE9PSB0YXJnZXRHcmlkO1xuICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRHcmlkLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIHRhcmdldEluZGV4ID0gbm9ybWFsaXplQXJyYXlJbmRleCh0YXJnZXRHcmlkLl9pdGVtcywgcmVzdWx0LmluZGV4LCBpc01pZ3JhdGlvbik7XG4gICAgc29ydEFjdGlvbiA9IHJlc3VsdC5hY3Rpb24gPT09IGFjdGlvblN3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcblxuICAgIC8vIFByZXZlbnQgcG9zaXRpb24gYm91bmNlLlxuICAgIGlmICghaXNNaWdyYXRpb24gJiYgdGFyZ2V0SW5kZXggPT09IHRoaXMuX2hCbG9ja2VkSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSB3YXMgbW92ZWQgd2l0aGluIGl0J3MgY3VycmVudCBncmlkLlxuICAgIGlmICghaXNNaWdyYXRpb24pIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGluZGV4IGlzIG5vdCB0aGUgY3VycmVudCBpbmRleC5cbiAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICAgIHRoaXMuX2hCbG9ja2VkSW5kZXggPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgICAgLy8gRG8gdGhlIHNvcnQuXG4gICAgICAgIChzb3J0QWN0aW9uID09PSBhY3Rpb25Td2FwID8gYXJyYXlTd2FwIDogYXJyYXlNb3ZlKShcbiAgICAgICAgICBjdXJyZW50R3JpZC5faXRlbXMsXG4gICAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICAgIHRhcmdldEluZGV4XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRW1pdCBtb3ZlIGV2ZW50LlxuICAgICAgICBpZiAoY3VycmVudEdyaWQuX2hhc0xpc3RlbmVycyhldmVudE1vdmUpKSB7XG4gICAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleCxcbiAgICAgICAgICAgIGFjdGlvbjogc29ydEFjdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGF5b3V0IHRoZSBncmlkLlxuICAgICAgICBjdXJyZW50R3JpZC5sYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSB3YXMgbW92ZWQgdG8gYW5vdGhlciBncmlkLlxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faEJsb2NrZWRJbmRleCA9IG51bGw7XG5cbiAgICAgIC8vIEVtaXQgYmVmb3JlU2VuZCBldmVudC5cbiAgICAgIGlmIChjdXJyZW50R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlU2VuZCkpIHtcbiAgICAgICAgY3VycmVudEdyaWQuX2VtaXQoZXZlbnRCZWZvcmVTZW5kLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBmcm9tR3JpZDogY3VycmVudEdyaWQsXG4gICAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IGJlZm9yZVJlY2VpdmUgZXZlbnQuXG4gICAgICBpZiAodGFyZ2V0R3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50QmVmb3JlUmVjZWl2ZSkpIHtcbiAgICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudEJlZm9yZVJlY2VpdmUsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBpdGVtJ3MgZ3JpZCBpZCByZWZlcmVuY2UuXG4gICAgICBpdGVtLl9ncmlkSWQgPSB0YXJnZXRHcmlkLl9pZDtcblxuICAgICAgLy8gVXBkYXRlIGRyYWcgaW5zdGFuY2UncyBtaWdyYXRpbmcgaW5kaWNhdG9yLlxuICAgICAgdGhpcy5faXNNaWdyYXRpbmcgPSBpdGVtLl9ncmlkSWQgIT09IHRoaXMuX2dyaWRJZDtcblxuICAgICAgLy8gTW92ZSBpdGVtIGluc3RhbmNlIGZyb20gY3VycmVudCBncmlkIHRvIHRhcmdldCBncmlkLlxuICAgICAgY3VycmVudEdyaWQuX2l0ZW1zLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgICAgYXJyYXlJbnNlcnQodGFyZ2V0R3JpZC5faXRlbXMsIGl0ZW0sIHRhcmdldEluZGV4KTtcblxuICAgICAgLy8gU2V0IHNvcnQgZGF0YSBhcyBudWxsLCB3aGljaCBpcyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBpdGVtIGNvbXBhcmlzb25cbiAgICAgIC8vIGZ1bmN0aW9uIHRoYXQgdGhlIHNvcnQgZGF0YSBvZiB0aGlzIHNwZWNpZmljIGl0ZW0gc2hvdWxkIGJlIGZldGNoZWRcbiAgICAgIC8vIGxhemlseS5cbiAgICAgIGl0ZW0uX3NvcnREYXRhID0gbnVsbDtcblxuICAgICAgLy8gRW1pdCBzZW5kIGV2ZW50LlxuICAgICAgaWYgKGN1cnJlbnRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRTZW5kKSkge1xuICAgICAgICBjdXJyZW50R3JpZC5fZW1pdChldmVudFNlbmQsIHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGZyb21HcmlkOiBjdXJyZW50R3JpZCxcbiAgICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgcmVjZWl2ZSBldmVudC5cbiAgICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZWNlaXZlKSkge1xuICAgICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50UmVjZWl2ZSwge1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgZnJvbUdyaWQ6IGN1cnJlbnRHcmlkLFxuICAgICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTGF5b3V0IGJvdGggZ3JpZHMuXG4gICAgICBjdXJyZW50R3JpZC5sYXlvdXQoKTtcbiAgICAgIHRhcmdldEdyaWQubGF5b3V0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBpdGVtIGlzIGRyYWdnZWQgaW50byBhbm90aGVyIGdyaWQsIGZpbmlzaCB0aGUgbWlncmF0aW9uIHByb2Nlc3NcbiAgICogZ3JhY2VmdWxseS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9maW5pc2hNaWdyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgaXNBY3RpdmUgPSBpdGVtLl9pc0FjdGl2ZTtcbiAgICB2YXIgdGFyZ2V0R3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciB0YXJnZXRHcmlkRWxlbWVudCA9IHRhcmdldEdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRhcmdldFNldHRpbmdzID0gdGFyZ2V0R3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lciA9IHRhcmdldFNldHRpbmdzLmRyYWdDb250YWluZXIgfHwgdGFyZ2V0R3JpZEVsZW1lbnQ7XG4gICAgdmFyIGN1cnJlbnRTZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGN1cnJlbnRDb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgdmFyIHRyYW5zbGF0ZTtcbiAgICB2YXIgb2Zmc2V0RGlmZjtcblxuICAgIC8vIERlc3Ryb3kgY3VycmVudCBkcmFnLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBzZXQgdGhlIG1pZ3JhdGluZyBmbGFnIHRvXG4gICAgLy8gZmFsc2UgZmlyc3QsIGJlY2F1c2Ugb3RoZXJ3aXNlIHdlIGNyZWF0ZSBhbiBpbmZpbml0ZSBsb29wIGJldHdlZW4gdGhpc1xuICAgIC8vIGFuZCB0aGUgZHJhZy5zdG9wKCkgbWV0aG9kLlxuICAgIHRoaXMuX2lzTWlncmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAvLyBSZW1vdmUgY3VycmVudCBjbGFzc25hbWVzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGN1cnJlbnRTZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjdXJyZW50U2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIEFkZCBuZXcgY2xhc3NuYW1lcy5cbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0YXJnZXRTZXR0aW5ncy5pdGVtQ2xhc3MpO1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGlzQWN0aXZlID8gdGFyZ2V0U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHRhcmdldFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBNb3ZlIHRoZSBpdGVtIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lciBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZVxuICAgIC8vIGN1cnJlbnQgY29udGFpbmVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKGN1cnJlbnRDb250YWluZXIsIHRhcmdldENvbnRhaW5lciwgdHJ1ZSk7XG4gICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICB0cmFuc2xhdGUueCAtPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0cmFuc2xhdGUueSAtPSBvZmZzZXREaWZmLnRvcDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaXRlbSdzIGNhY2hlZCBkaW1lbnNpb25zIGFuZCBzb3J0IGRhdGEuXG4gICAgaXRlbS5fcmVmcmVzaERpbWVuc2lvbnMoKTtcbiAgICBpdGVtLl9yZWZyZXNoU29ydERhdGEoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGRpZmZlcmVuY2UgYmV0d2VlbiB0YXJnZXQncyBkcmFnIGNvbnRhaW5lciAoaWYgYW55KVxuICAgIC8vIGFuZCBhY3R1YWwgZ3JpZCBjb250YWluZXIgZWxlbWVudC4gV2Ugc2F2ZSBpdCBsYXRlciBmb3IgdGhlIHJlbGVhc2VcbiAgICAvLyBwcm9jZXNzLlxuICAgIG9mZnNldERpZmYgPSBnZXRPZmZzZXREaWZmKHRhcmdldENvbnRhaW5lciwgdGFyZ2V0R3JpZEVsZW1lbnQsIHRydWUpO1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYID0gb2Zmc2V0RGlmZi5sZWZ0O1xuICAgIHJlbGVhc2UuX2NvbnRhaW5lckRpZmZZID0gb2Zmc2V0RGlmZi50b3A7XG5cbiAgICAvLyBSZWNyZWF0ZSBpdGVtJ3MgZHJhZyBoYW5kbGVyLlxuICAgIGl0ZW0uX2RyYWcgPSB0YXJnZXRTZXR0aW5ncy5kcmFnRW5hYmxlZCA/IG5ldyBJdGVtRHJhZyhpdGVtKSA6IG51bGw7XG5cbiAgICAvLyBBZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGVsZW1lbnQgaWYgaXQgd2FzIG1vdmVkIGZyb20gYSBjb250YWluZXJcbiAgICAvLyB0byBhbm90aGVyLlxuICAgIGlmICh0YXJnZXRDb250YWluZXIgIT09IGN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlLngsIHRyYW5zbGF0ZS55KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpbGQgZWxlbWVudCdzIHN0eWxlcyB0byByZWZsZWN0IHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gICAgaXRlbS5fY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHNldFN0eWxlcyhpdGVtLl9jaGlsZCwgaXNBY3RpdmUgPyB0YXJnZXRTZXR0aW5ncy52aXNpYmxlU3R5bGVzIDogdGFyZ2V0U2V0dGluZ3MuaGlkZGVuU3R5bGVzKTtcblxuICAgIC8vIFN0YXJ0IHRoZSByZWxlYXNlLlxuICAgIHJlbGVhc2Uuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBwcmUtc3RhcnQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fcHJlU3RhcnRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gTGV0J3MgYWN0aXZhdGUgZHJhZyBzdGFydCBwcmVkaWNhdGUgc3RhdGUuXG4gICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlSW5hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPSBzdGFydFByZWRpY2F0ZVBlbmRpbmc7XG4gICAgfVxuXG4gICAgLy8gSWYgcHJlZGljYXRlIGlzIHBlbmRpbmcgdHJ5IHRvIHJlc29sdmUgaXQuXG4gICAgaWYgKHRoaXMuX3N0YXJ0UHJlZGljYXRlU3RhdGUgPT09IHN0YXJ0UHJlZGljYXRlUGVuZGluZykge1xuICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPSB0aGlzLl9zdGFydFByZWRpY2F0ZSh0aGlzLl9pdGVtLCBldmVudCk7XG4gICAgICBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVSZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVzb2x2ZWQ7XG4gICAgICAgIHRoaXMuX29uU3RhcnQoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydFByZWRpY2F0ZVJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9IHN0YXJ0UHJlZGljYXRlUmVqZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGlmIHByZWRpY2F0ZSBpcyByZXNvbHZlZCBhbmQgZHJhZyBpcyBhY3RpdmUsIG1vdmUgdGhlIGl0ZW0uXG4gICAgZWxzZSBpZiAodGhpcy5fc3RhcnRQcmVkaWNhdGVTdGF0ZSA9PT0gc3RhcnRQcmVkaWNhdGVSZXNvbHZlZCAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5fb25Nb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlLWVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RHJhZ2dlckV2ZW50fSBldmVudFxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVFbmRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHN0YXJ0IHByZWRpY2F0ZSB3YXMgcmVzb2x2ZWQgZHVyaW5nIGRyYWcuXG4gICAgdmFyIGlzUmVzb2x2ZWQgPSB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID09PSBzdGFydFByZWRpY2F0ZVJlc29sdmVkO1xuXG4gICAgLy8gRG8gZmluYWwgcHJlZGljYXRlIGNoZWNrIHRvIGFsbG93IHVzZXIgdG8gdW5iaW5kIHN0dWZmIGZvciB0aGUgY3VycmVudFxuICAgIC8vIGRyYWcgcHJvY2VkdXJlIHdpdGhpbiB0aGUgcHJlZGljYXRlIGNhbGxiYWNrLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXNcbiAgICAvLyBjaGVjayB3aWxsIGhhdmUgbm8gZWZmZWN0IHRvIHRoZSBzdGF0ZSBvZiB0aGUgcHJlZGljYXRlLlxuICAgIHRoaXMuX3N0YXJ0UHJlZGljYXRlKHRoaXMuX2l0ZW0sIGV2ZW50KTtcblxuICAgIC8vIFJlc2V0IHN0YXJ0IHByZWRpY2F0ZSBzdGF0ZS5cbiAgICB0aGlzLl9zdGFydFByZWRpY2F0ZVN0YXRlID0gc3RhcnRQcmVkaWNhdGVJbmFjdGl2ZTtcblxuICAgIC8vIElmIHByZWRpY2F0ZSBpcyByZXNvbHZlZCBhbmQgZHJhZ2dpbmcgaXMgYWN0aXZlLCBjYWxsIHRoZSBlbmQgaGFuZGxlci5cbiAgICBpZiAoaXNSZXNvbHZlZCAmJiB0aGlzLl9pc0FjdGl2ZSkgdGhpcy5fb25FbmQoZXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIElmIGl0ZW0gaXMgbm90IGFjdGl2ZSwgZG9uJ3Qgc3RhcnQgdGhlIGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciByZWxlYXNlID0gaXRlbS5fcmVsZWFzZTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciBkcmFnQ29udGFpbmVyID0gc2V0dGluZ3MuZHJhZ0NvbnRhaW5lciB8fCBncmlkQ29udGFpbmVyO1xuICAgIHZhciBjb250YWluaW5nQmxvY2sgPSBnZXRDb250YWluaW5nQmxvY2soZHJhZ0NvbnRhaW5lciwgdHJ1ZSk7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICB2YXIgY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB2YXIgY3VycmVudFRvcCA9IHRyYW5zbGF0ZS55O1xuICAgIHZhciBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhhc0RyYWdDb250YWluZXIgPSBkcmFnQ29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyO1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gUmVzZXQgaGV1cmlzdGljcyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0SGV1cmlzdGljcyhldmVudCk7XG5cbiAgICAvLyBJZiBncmlkIGNvbnRhaW5lciBpcyBub3QgdGhlIGRyYWcgY29udGFpbmVyLCB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGVcbiAgICAvLyBvZmZzZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIGdyaWQgY29udGFpbmVyIGFuZCBkcmFnIGNvbnRhaW5lcidzIGNvbnRhaW5pbmdcbiAgICAvLyBlbGVtZW50LlxuICAgIGlmIChoYXNEcmFnQ29udGFpbmVyKSB7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZihjb250YWluaW5nQmxvY2ssIGdyaWRDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCBwb3NpdGlvbmluZyBhbmltYXRpb24uXG4gICAgaWYgKGl0ZW0uaXNQb3NpdGlvbmluZygpKSB7XG4gICAgICBpdGVtLl9sYXlvdXQuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGN1cnJlbnQgbWlncmF0aW9uIGFuaW1hdGlvbi5cbiAgICBpZiAobWlncmF0ZS5faXNBY3RpdmUpIHtcbiAgICAgIGN1cnJlbnRMZWZ0IC09IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgY3VycmVudFRvcCAtPSBtaWdyYXRlLl9jb250YWluZXJEaWZmWTtcbiAgICAgIG1pZ3JhdGUuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKGN1cnJlbnRMZWZ0LCBjdXJyZW50VG9wKSB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIGJlaW5nIHJlbGVhc2VkIHJlc2V0IHJlbGVhc2UgZGF0YS5cbiAgICBpZiAoaXRlbS5pc1JlbGVhc2luZygpKSByZWxlYXNlLl9yZXNldCgpO1xuXG4gICAgLy8gU2V0dXAgZHJhZyBkYXRhLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBldmVudDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkcmFnQ29udGFpbmVyO1xuICAgIHRoaXMuX2NvbnRhaW5pbmdCbG9jayA9IGNvbnRhaW5pbmdCbG9jaztcbiAgICB0aGlzLl9lbGVtZW50Q2xpZW50WCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5fZWxlbWVudENsaWVudFkgPSBlbGVtZW50UmVjdC50b3A7XG4gICAgdGhpcy5fbGVmdCA9IHRoaXMuX2dyaWRYID0gY3VycmVudExlZnQ7XG4gICAgdGhpcy5fdG9wID0gdGhpcy5fZ3JpZFkgPSBjdXJyZW50VG9wO1xuXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIChpZiBuZWNlc3NhcnkpLlxuICAgIGlmIChzZXR0aW5ncy5kcmFnUGxhY2Vob2xkZXIuZW5hYmxlZCkge1xuICAgICAgaXRlbS5fZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgZHJhZ0luaXQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdJbml0LCBpdGVtLCBldmVudCk7XG5cbiAgICAvLyBJZiBhIHNwZWNpZmljIGRyYWcgY29udGFpbmVyIGlzIHNldCBhbmQgaXQgaXMgZGlmZmVyZW50IGZyb20gdGhlXG4gICAgLy8gZ3JpZCdzIGNvbnRhaW5lciBlbGVtZW50IHdlIG5lZWQgdG8gY2FzdCBzb21lIGV4dHJhIHNwZWxscy5cbiAgICBpZiAoaGFzRHJhZ0NvbnRhaW5lcikge1xuICAgICAgLy8gU3RvcmUgdGhlIGNvbnRhaW5lciBvZmZzZXQgZGlmZnMgdG8gZHJhZyBkYXRhLlxuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuXG4gICAgICAvLyBJZiB0aGUgZHJhZ2dlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGRyYWcgY29udGFpbmVyIGFsbCB3ZSBuZWVkIHRvXG4gICAgICAvLyBkbyBpcyBzZXR1cCB0aGUgcmVsYXRpdmUgZHJhZyBwb3NpdGlvbiBkYXRhLlxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PT0gZHJhZ0NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9ncmlkWCA9IGN1cnJlbnRMZWZ0IC0gdGhpcy5fY29udGFpbmVyRGlmZlg7XG4gICAgICAgIHRoaXMuX2dyaWRZID0gY3VycmVudFRvcCAtIHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBhcHBlbmQgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBjb3JyZWN0IGNvbnRhaW5lcixcbiAgICAgIC8vIHNldHVwIHRoZSBhY3R1YWwgZHJhZyBwb3NpdGlvbiBkYXRhIGFuZCBhZGp1c3QgdGhlIGVsZW1lbnQncyB0cmFuc2xhdGVcbiAgICAgIC8vIHZhbHVlcyB0byBhY2NvdW50IGZvciB0aGUgRE9NIHBvc2l0aW9uIHNoaWZ0LlxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2xlZnQgPSBjdXJyZW50TGVmdCArIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgICB0aGlzLl90b3AgPSBjdXJyZW50VG9wICsgdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgICAgIGRyYWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcodGhpcy5fbGVmdCwgdGhpcy5fdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgZHJhZyBjbGFzcyBhbmQgYmluZCBzY3JvbGxlcnMuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbURyYWdnaW5nQ2xhc3MpO1xuICAgIHRoaXMuX2JpbmRTY3JvbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEVtaXQgZHJhZ1N0YXJ0IGV2ZW50LlxuICAgIGdyaWQuX2VtaXQoZXZlbnREcmFnU3RhcnQsIGl0ZW0sIGV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBtb3ZlIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtEcmFnZ2VyRXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGF4aXMgPSBzZXR0aW5ncy5kcmFnQXhpcztcblxuICAgIC8vIFVwZGF0ZSBob3Jpem9udGFsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd5Jykge1xuICAgICAgdmFyIHhEaWZmID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RyYWdFdmVudC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGVmdCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRYICs9IHhEaWZmO1xuICAgICAgdGhpcy5fZWxlbWVudENsaWVudFggKz0geERpZmY7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd4Jykge1xuICAgICAgdmFyIHlEaWZmID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuX2RyYWdFdmVudC5jbGllbnRZO1xuICAgICAgdGhpcy5fdG9wICs9IHlEaWZmO1xuICAgICAgdGhpcy5fZ3JpZFkgKz0geURpZmY7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xpZW50WSArPSB5RGlmZjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXZlbnQgZGF0YS5cbiAgICB0aGlzLl9kcmFnRXZlbnQgPSBldmVudDtcblxuICAgIC8vIERvIG1vdmUgcHJlcGFyZS9hcHBseSBoYW5kbGluZyBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZE1vdmVUaWNrKGl0ZW0uX2lkLCB0aGlzLl9wcmVwYXJlTW92ZSwgdGhpcy5fYXBwbHlNb3ZlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBkcmFnZ2VkIGl0ZW0gZm9yIG1vdmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVwYXJlTW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgaXRlbSBpcyBub3QgYWN0aXZlLlxuICAgIGlmICghdGhpcy5faXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIElmIGRyYWcgc29ydCBpcyBlbmFibGVkIC0+IGNoZWNrIG92ZXJsYXAuXG4gICAgaWYgKHRoaXMuX2dldEdyaWQoKS5fc2V0dGluZ3MuZHJhZ1NvcnQpIHtcbiAgICAgIGlmICh0aGlzLl9jaGVja0hldXJpc3RpY3ModGhpcy5fZHJhZ0V2ZW50KSkge1xuICAgICAgICB0aGlzLl9jaGVja092ZXJsYXBEZWJvdW5jZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQXBwbHkgbW92ZW1lbnQgdG8gZHJhZ2dlZCBpdGVtLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX2FwcGx5TW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgaXRlbSBpcyBub3QgYWN0aXZlLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBlbGVtZW50J3MgdHJhbnNsYXRlWC9ZIHZhbHVlcy5cbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKHRoaXMuX2xlZnQsIHRoaXMuX3RvcCk7XG5cbiAgICAvLyBFbWl0IGRyYWdNb3ZlIGV2ZW50LlxuICAgIHRoaXMuX2dldEdyaWQoKS5fZW1pdChldmVudERyYWdNb3ZlLCBpdGVtLCB0aGlzLl9kcmFnRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIHNjcm9sbCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWcucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICBJdGVtRHJhZy5wcm90b3R5cGUuX29uU2Nyb2xsID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUsIHJlc2V0IGRyYWcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGxhc3Qgc2Nyb2xsIGV2ZW50LlxuICAgIHRoaXMuX3Njcm9sbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAvLyBEbyBzY3JvbGwgcHJlcGFyZS9hcHBseSBoYW5kbGluZyBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZFNjcm9sbFRpY2soaXRlbS5faWQsIHRoaXMuX3ByZXBhcmVTY3JvbGwsIHRoaXMuX2FwcGx5U2Nyb2xsKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSBkcmFnZ2VkIGl0ZW0gZm9yIHNjcm9sbGluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWcucHJvdG90eXBlLl9wcmVwYXJlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlIGRvIG5vdGhpbmcuXG4gICAgaWYgKCFpdGVtLl9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gdGhpcy5fZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBheGlzID0gc2V0dGluZ3MuZHJhZ0F4aXM7XG4gICAgdmFyIGdyaWRDb250YWluZXIgPSBncmlkLl9lbGVtZW50O1xuICAgIHZhciBvZmZzZXREaWZmO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGVsZW1lbnQncyByZWN0IGFuZCB4L3kgZGlmZi5cbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHhEaWZmID0gdGhpcy5fZWxlbWVudENsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgdmFyIHlEaWZmID0gdGhpcy5fZWxlbWVudENsaWVudFkgLSByZWN0LnRvcDtcblxuICAgIC8vIFVwZGF0ZSBjb250YWluZXIgZGlmZi5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBncmlkQ29udGFpbmVyKSB7XG4gICAgICBvZmZzZXREaWZmID0gZ2V0T2Zmc2V0RGlmZih0aGlzLl9jb250YWluaW5nQmxvY2ssIGdyaWRDb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBvZmZzZXREaWZmLmxlZnQ7XG4gICAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IG9mZnNldERpZmYudG9wO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBob3Jpem9udGFsIHBvc2l0aW9uIGRhdGEuXG4gICAgaWYgKGF4aXMgIT09ICd5Jykge1xuICAgICAgdGhpcy5fbGVmdCArPSB4RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRYID0gdGhpcy5fbGVmdCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB2ZXJ0aWNhbCBwb3NpdGlvbiBkYXRhLlxuICAgIGlmIChheGlzICE9PSAneCcpIHtcbiAgICAgIHRoaXMuX3RvcCArPSB5RGlmZjtcbiAgICAgIHRoaXMuX2dyaWRZID0gdGhpcy5fdG9wIC0gdGhpcy5fY29udGFpbmVyRGlmZlk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcmxhcCBoYW5kbGluZy5cbiAgICBpZiAoc2V0dGluZ3MuZHJhZ1NvcnQpIHRoaXMuX2NoZWNrT3ZlcmxhcERlYm91bmNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IHNjcm9sbCB0byBkcmFnZ2VkIGl0ZW0uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZy5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fYXBwbHlTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG5cbiAgICAvLyBJZiBpdGVtIGlzIG5vdCBhY3RpdmUgZG8gbm90aGluZy5cbiAgICBpZiAoIWl0ZW0uX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgZWxlbWVudCdzIHRyYW5zbGF0ZVgvWSB2YWx1ZXMuXG4gICAgaXRlbS5fZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9sZWZ0LCB0aGlzLl90b3ApO1xuXG4gICAgLy8gRW1pdCBkcmFnU2Nyb2xsIGV2ZW50LlxuICAgIHRoaXMuX2dldEdyaWQoKS5fZW1pdChldmVudERyYWdTY3JvbGwsIGl0ZW0sIHRoaXMuX3Njcm9sbEV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogRHJhZyBlbmQgaGFuZGxlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0RyYWdnZXJFdmVudH0gZXZlbnRcbiAgICovXG4gIEl0ZW1EcmFnLnByb3RvdHlwZS5fb25FbmQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLl9nZXRHcmlkKCk7XG4gICAgdmFyIHNldHRpbmdzID0gZ3JpZC5fc2V0dGluZ3M7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgLy8gSWYgaXRlbSBpcyBub3QgYWN0aXZlLCByZXNldCBkcmFnLlxuICAgIGlmICghaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBxdWV1ZWQgbW92ZSBhbmQgc2Nyb2xsIHRpY2tzLlxuICAgIGNhbmNlbE1vdmVUaWNrKGl0ZW0uX2lkKTtcbiAgICBjYW5jZWxTY3JvbGxUaWNrKGl0ZW0uX2lkKTtcblxuICAgIC8vIEZpbmlzaCBjdXJyZW50bHkgcXVldWVkIG92ZXJsYXAgY2hlY2suXG4gICAgc2V0dGluZ3MuZHJhZ1NvcnQgJiYgdGhpcy5fY2hlY2tPdmVybGFwRGVib3VuY2UoJ2ZpbmlzaCcpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBsaXN0ZW5lcnMuXG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBTZXR1cCByZWxlYXNlIGRhdGEuXG4gICAgcmVsZWFzZS5fY29udGFpbmVyRGlmZlggPSB0aGlzLl9jb250YWluZXJEaWZmWDtcbiAgICByZWxlYXNlLl9jb250YWluZXJEaWZmWSA9IHRoaXMuX2NvbnRhaW5lckRpZmZZO1xuXG4gICAgLy8gUmVzZXQgZHJhZyBkYXRhLlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBSZW1vdmUgZHJhZyBjbGFzcyBuYW1lIGZyb20gZWxlbWVudC5cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtRHJhZ2dpbmdDbGFzcyk7XG5cbiAgICAvLyBFbWl0IGRyYWdFbmQgZXZlbnQuXG4gICAgZ3JpZC5fZW1pdChldmVudERyYWdFbmQsIGl0ZW0sIGV2ZW50KTtcblxuICAgIC8vIEZpbmlzaCB1cCB0aGUgbWlncmF0aW9uIHByb2Nlc3Mgb3Igc3RhcnQgdGhlIHJlbGVhc2UgcHJvY2Vzcy5cbiAgICB0aGlzLl9pc01pZ3JhdGluZyA/IHRoaXMuX2ZpbmlzaE1pZ3JhdGlvbigpIDogcmVsZWFzZS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhlbHBlcnNcbiAgICogKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgaG93IG1hbnkgcGVyY2VudCB0aGUgaW50ZXJzZWN0aW9uIGFyZWEgb2YgdHdvIHJlY3RhbmdsZXMgaXMgZnJvbVxuICAgKiB0aGUgbWF4aW11bSBwb3RlbnRpYWwgaW50ZXJzZWN0aW9uIGFyZWEgYmV0d2VlbiB0aGUgcmVjdGFuZ2xlcy5cbiAgICpcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogICAtIEEgbnVtYmVyIGJldHdlZW4gMC0xMDAuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRSZWN0T3ZlcmxhcFNjb3JlKGEsIGIpIHtcbiAgICAvLyBSZXR1cm4gMCBpbW1lZGlhdGVseSBpZiB0aGUgcmVjdGFuZ2xlcyBkbyBub3Qgb3ZlcmxhcC5cbiAgICBpZiAoXG4gICAgICBhLmxlZnQgKyBhLndpZHRoIDw9IGIubGVmdCB8fFxuICAgICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgfHxcbiAgICAgIGIudG9wICsgYi5oZWlnaHQgPD0gYS50b3BcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gYXJlYSdzIHdpZHRoLCBoZWlnaHQsIG1heCBoZWlnaHQgYW5kIG1heCB3aWR0aC5cbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihhLmxlZnQgKyBhLndpZHRoLCBiLmxlZnQgKyBiLndpZHRoKSAtIE1hdGgubWF4KGEubGVmdCwgYi5sZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4oYS50b3AgKyBhLmhlaWdodCwgYi50b3AgKyBiLmhlaWdodCkgLSBNYXRoLm1heChhLnRvcCwgYi50b3ApO1xuICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWluKGEud2lkdGgsIGIud2lkdGgpO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1pbihhLmhlaWdodCwgYi5oZWlnaHQpO1xuXG4gICAgcmV0dXJuICgod2lkdGggKiBoZWlnaHQpIC8gKG1heFdpZHRoICogbWF4SGVpZ2h0KSkgKiAxMDA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhbiBhbmNob3IgZWxlbWVudCBhbmQgb3BlbiB0aGUgaHJlZiB1cmwgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIG9wZW5BbmNob3JIcmVmKGVsZW1lbnQpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgYW5jaG9yIGVsZW1lbnQuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYScpIHJldHVybjtcblxuICAgIC8vIEdldCBocmVmIGFuZCBtYWtlIHN1cmUgaXQgZXhpc3RzLlxuICAgIHZhciBocmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBpZiAoIWhyZWYpIHJldHVybjtcblxuICAgIC8vIEZpbmFsbHkgbGV0J3MgbmF2aWdhdGUgdG8gdGhlIGxpbmsgaHJlZi5cbiAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB7XG4gICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgcGxhY2Vob2xkZXIuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW1EcmFnUGxhY2Vob2xkZXIoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2FuaW1hdGUgPSBuZXcgSXRlbUFuaW1hdGUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAnJztcbiAgICB0aGlzLl9kaWRNaWdyYXRlID0gZmFsc2U7XG4gICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuICAgIHRoaXMuX2N1cnJlbnRMZWZ0ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gMDtcbiAgICB0aGlzLl9uZXh0TGVmdCA9IDA7XG4gICAgdGhpcy5fbmV4dFRvcCA9IDA7XG5cbiAgICAvLyBCaW5kIGFuaW1hdGlvbiBoYW5kbGVycy5cbiAgICB0aGlzLl9zZXR1cEFuaW1hdGlvbiA9IHRoaXMuX3NldHVwQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRBbmltYXRpb24gPSB0aGlzLl9zdGFydEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgLy8gQmluZCBldmVudCBoYW5kbGVycy5cbiAgICB0aGlzLl9vbkxheW91dFN0YXJ0ID0gdGhpcy5fb25MYXlvdXRTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTGF5b3V0RW5kID0gdGhpcy5fb25MYXlvdXRFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblJlbGVhc2VFbmQgPSB0aGlzLl9vblJlbGVhc2VFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1pZ3JhdGUgPSB0aGlzLl9vbk1pZ3JhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIE1vdmUgcGxhY2Vob2xkZXIgdG8gYSBuZXcgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uTGF5b3V0U3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcblxuICAgIC8vIEZpbmQgb3V0IHRoZSBpdGVtJ3MgbmV3ICh1bmFwcGxpZWQpIGxlZnQgYW5kIHRvcCBwb3NpdGlvbi5cbiAgICB2YXIgaXRlbUluZGV4ID0gZ3JpZC5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB2YXIgbmV4dExlZnQgPSBncmlkLl9sYXlvdXQuc2xvdHNbaXRlbUluZGV4ICogMl07XG4gICAgdmFyIG5leHRUb3AgPSBncmlkLl9sYXlvdXQuc2xvdHNbaXRlbUluZGV4ICogMiArIDFdO1xuXG4gICAgLy8gSWYgaXRlbSdzIHBvc2l0aW9uIGRpZCBub3QgY2hhbmdlIGFuZCB0aGUgaXRlbSBkaWQgbm90IG1pZ3JhdGUgd2UgY2FuXG4gICAgLy8gc2FmZWx5IHNraXAgbGF5b3V0LlxuICAgIGlmICghdGhpcy5fZGlkTWlncmF0ZSAmJiBpdGVtLl9sZWZ0ID09PSBuZXh0TGVmdCAmJiBpdGVtLl90b3AgPT09IG5leHRUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTbG90cyBkYXRhIGlzIGNhbGN1bGF0ZWQgd2l0aCBpdGVtIG1hcmdpbnMgYWRkZWQgdG8gdGhlbSBzbyB3ZSBuZWVkIHRvIGFkZFxuICAgIC8vIGl0ZW0ncyBsZWZ0IGFuZCB0b3AgbWFyZ2luIHRvIHRoZSBzbG90IGRhdGEgdG8gZ2V0IHRoZSBwbGFjZWhvbGRlcidzXG4gICAgLy8gbmV4dCBwb3NpdGlvbi5cbiAgICBuZXh0TGVmdCArPSBpdGVtLl9tYXJnaW5MZWZ0O1xuICAgIG5leHRUb3AgKz0gaXRlbS5fbWFyZ2luVG9wO1xuXG4gICAgLy8gSnVzdCBzbmFwIHRvIG5ldyBwb3NpdGlvbiB3aXRob3V0IGFueSBhbmltYXRpb25zIGlmIG5vIGFuaW1hdGlvbiBpc1xuICAgIC8vIHJlcXVpcmVkIG9yIGlmIHBsYWNlaG9sZGVyIG1vdmVzIGJldHdlZW4gZ3JpZHMuXG4gICAgdmFyIGFuaW1FbmFibGVkID0gZ3JpZC5fc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmR1cmF0aW9uID4gMDtcbiAgICBpZiAoIWFuaW1FbmFibGVkIHx8IHRoaXMuX2RpZE1pZ3JhdGUpIHtcbiAgICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgKHF1ZXVlZCkgbGF5b3V0IHRpY2suXG4gICAgICBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbS5faWQpO1xuXG4gICAgICAvLyBTbmFwIHBsYWNlaG9sZGVyIHRvIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICB2YXIgdGFyZ2V0U3R5bGVzID0geyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhuZXh0TGVmdCwgbmV4dFRvcCkgfTtcbiAgICAgIGlmICh0aGlzLl9hbmltYXRlLmlzQW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZS5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwgdGFyZ2V0U3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gTW92ZSBwbGFjZWhvbGRlciBpbnNpZGUgY29ycmVjdCBjb250YWluZXIgYWZ0ZXIgbWlncmF0aW9uLlxuICAgICAgaWYgKHRoaXMuX2RpZE1pZ3JhdGUpIHtcbiAgICAgICAgZ3JpZC5nZXRFbGVtZW50KCkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RpZE1pZ3JhdGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSBwbGFjZWhvbGRlcidzIGxheW91dCBhbmltYXRpb24gaW4gdGhlIG5leHQgdGljay4gV2UgZG8gdGhpcyB0b1xuICAgIC8vIGF2b2lkIGxheW91dCB0aHJhc2hpbmcuXG4gICAgdGhpcy5fbmV4dExlZnQgPSBuZXh0TGVmdDtcbiAgICB0aGlzLl9uZXh0VG9wID0gbmV4dFRvcDtcbiAgICBhZGRQbGFjZWhvbGRlclRpY2soaXRlbS5faWQsIHRoaXMuX3NldHVwQW5pbWF0aW9uLCB0aGlzLl9zdGFydEFuaW1hdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgcGxhY2Vob2xkZXIgZm9yIGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX3NldHVwQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUodGhpcy5fZWxlbWVudCk7XG4gICAgdGhpcy5fY3VycmVudExlZnQgPSB0cmFuc2xhdGUueDtcbiAgICB0aGlzLl9jdXJyZW50VG9wID0gdHJhbnNsYXRlLnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX3N0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuICAgIHZhciBjdXJyZW50TGVmdCA9IHRoaXMuX2N1cnJlbnRMZWZ0O1xuICAgIHZhciBjdXJyZW50VG9wID0gdGhpcy5fY3VycmVudFRvcDtcbiAgICB2YXIgbmV4dExlZnQgPSB0aGlzLl9uZXh0TGVmdDtcbiAgICB2YXIgbmV4dFRvcCA9IHRoaXMuX25leHRUb3A7XG4gICAgdmFyIHRhcmdldFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcobmV4dExlZnQsIG5leHRUb3ApIH07XG5cbiAgICAvLyBJZiBwbGFjZWhvbGRlciBpcyBhbHJlYWR5IGluIGNvcnJlY3QgcG9zaXRpb24gbGV0J3MganVzdCBzdG9wIGFuaW1hdGlvblxuICAgIC8vIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKGN1cnJlbnRMZWZ0ID09PSBuZXh0TGVmdCAmJiBjdXJyZW50VG9wID09PSBuZXh0VG9wKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uLmlzQW5pbWF0aW5nKCkpIGFuaW1hdGlvbi5zdG9wKHRhcmdldFN0eWxlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGxldCdzIHN0YXJ0IHRoZSBhbmltYXRpb24uXG4gICAgdmFyIHNldHRpbmdzID0gdGhpcy5faXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLmRyYWdQbGFjZWhvbGRlcjtcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcoY3VycmVudExlZnQsIGN1cnJlbnRUb3ApIH07XG4gICAgYW5pbWF0aW9uLnN0YXJ0KGN1cnJlbnRTdHlsZXMsIHRhcmdldFN0eWxlcywge1xuICAgICAgZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBzZXR0aW5ncy5lYXNpbmcsXG4gICAgICBvbkZpbmlzaDogdGhpcy5fb25MYXlvdXRFbmRcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogTGF5b3V0IGVuZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbkxheW91dEVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9yZXNldEFmdGVyTGF5b3V0KSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyLiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW4gZHJhZ1JlbGVhc2VFbmQgZXZlbnQgaXNcbiAgICogZW1pdHRlZCBhbmQgcmVjZWl2ZXMgdGhlIGV2ZW50IGRhdGEgYXMgaXQncyBhcmd1bWVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKi9cbiAgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGUuX29uUmVsZWFzZUVuZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5faWQgPT09IHRoaXMuX2l0ZW0uX2lkKSB7XG4gICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXMgbm90IGFuaW1hdGluZyBhbnltb3JlIHdlIGNhbiBzYWZlbHkgcmVzZXQgaXQuXG4gICAgICBpZiAoIXRoaXMuX2FuaW1hdGUuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIGl0ZW0gaXMgc3RpbGwgYW5pbWF0aW5nIGhlcmUsIGxldCdzIHdhaXQgZm9yIGl0IHRvXG4gICAgICAvLyBmaW5pc2ggaXQncyBhbmltYXRpb24uXG4gICAgICB0aGlzLl9yZXNldEFmdGVyTGF5b3V0ID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGlvbiBzdGFydCBoYW5kbGVyLiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW4gYmVmb3JlU2VuZCBldmVudCBpc1xuICAgKiBlbWl0dGVkIGFuZCByZWNlaXZlcyB0aGUgZXZlbnQgZGF0YSBhcyBpdCdzIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtJdGVtfSBkYXRhLml0ZW1cbiAgICogQHBhcmFtIHtHcmlkfSBkYXRhLmZyb21HcmlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmZyb21JbmRleFxuICAgKiBAcGFyYW0ge0dyaWR9IGRhdGEudG9HcmlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnRvSW5kZXhcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLl9vbk1pZ3JhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBtYXRjaGluZyBpdGVtLlxuICAgIGlmIChkYXRhLml0ZW0gIT09IHRoaXMuX2l0ZW0pIHJldHVybjtcblxuICAgIHZhciBncmlkID0gdGhpcy5faXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIG5leHRHcmlkID0gZGF0YS50b0dyaWQ7XG5cbiAgICAvLyBVbmJpbmQgbGlzdGVuZXJzIGZyb20gY3VycmVudCBncmlkLlxuICAgIGdyaWQub2ZmKGV2ZW50RHJhZ1JlbGVhc2VFbmQsIHRoaXMuX29uUmVsZWFzZUVuZCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRMYXlvdXRTdGFydCwgdGhpcy5fb25MYXlvdXRTdGFydCk7XG4gICAgZ3JpZC5vZmYoZXZlbnRCZWZvcmVTZW5kLCB0aGlzLl9vbk1pZ3JhdGUpO1xuXG4gICAgLy8gQmluZCBsaXN0ZW5lcnMgdG8gdGhlIG5leHQgZ3JpZC5cbiAgICBuZXh0R3JpZC5vbihldmVudERyYWdSZWxlYXNlRW5kLCB0aGlzLl9vblJlbGVhc2VFbmQpO1xuICAgIG5leHRHcmlkLm9uKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIG5leHRHcmlkLm9uKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIE1hcmsgdGhlIGl0ZW0gYXMgbWlncmF0ZWQuXG4gICAgdGhpcy5fZGlkTWlncmF0ZSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBwbGFjZWhvbGRlci4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIG9ubHkgd3JpdGVzIHRvIERPTSBhbmQgZG9lcyBub3RcbiAgICogcmVhZCBhbnl0aGluZyBmcm9tIERPTSBzbyBpdCBzaG91bGQgbm90IGNhdXNlIGFueSBhZGRpdGlvbmFsIGxheW91dFxuICAgKiB0aHJhc2hpbmcgd2hlbiBpdCdzIGNhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZSBkcmFnIHN0YXJ0IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSBwbGFjZWhvbGRlciBzZXQgdXAgd2UgY2FuIHNraXAgdGhlIGluaXRpYXRpb24gbG9naWMuXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRlO1xuXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50ID0gc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgLy8gVXBkYXRlIGVsZW1lbnQgdG8gYW5pbWF0aW9uIGluc3RhbmNlLlxuICAgIGFuaW1hdGlvbi5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBBZGQgcGxhY2Vob2xkZXIgY2xhc3MgdG8gdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gc2V0dGluZ3MuaXRlbVBsYWNlaG9sZGVyQ2xhc3MgfHwgJyc7XG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZSkge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgcGxhY2Vob2xkZXIgaXRlbSBjb3JyZWN0bHkuXG4gICAgdmFyIGxlZnQgPSBpdGVtLl9sZWZ0ICsgaXRlbS5fbWFyZ2luTGVmdDtcbiAgICB2YXIgdG9wID0gaXRlbS5fdG9wICsgaXRlbS5fbWFyZ2luVG9wO1xuICAgIHNldFN0eWxlcyhlbGVtZW50LCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIHdpZHRoOiBpdGVtLl93aWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IGl0ZW0uX2hlaWdodCArICdweCcsXG4gICAgICB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZVN0cmluZyhsZWZ0LCB0b3ApXG4gICAgfSk7XG5cbiAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBncmlkLm9uKGV2ZW50TGF5b3V0U3RhcnQsIHRoaXMuX29uTGF5b3V0U3RhcnQpO1xuICAgIGdyaWQub24oZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9uKGV2ZW50QmVmb3JlU2VuZCwgdGhpcy5fb25NaWdyYXRlKTtcblxuICAgIC8vIG9uQ3JlYXRlIGhvb2suXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlKSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uQ3JlYXRlKGl0ZW0sIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluc2VydCB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCB0byB0aGUgZ3JpZC5cbiAgICBncmlkLmdldEVsZW1lbnQoKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzZXQgcGxhY2Vob2xkZXIgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0ZTtcblxuICAgIC8vIFJlc2V0IGZsYWcuXG4gICAgdGhpcy5fcmVzZXRBZnRlckxheW91dCA9IGZhbHNlO1xuXG4gICAgLy8gQ2FuY2VsIHBvdGVudGlhbCAocXVldWVkKSBsYXlvdXQgdGljay5cbiAgICBjYW5jZWxQbGFjZWhvbGRlclRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gUmVzZXQgYW5pbWF0aW9uIGluc3RhbmNlLlxuICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgYW5pbWF0aW9uLl9lbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIFVuYmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZ3JpZC5vZmYoZXZlbnREcmFnUmVsZWFzZUVuZCwgdGhpcy5fb25SZWxlYXNlRW5kKTtcbiAgICBncmlkLm9mZihldmVudExheW91dFN0YXJ0LCB0aGlzLl9vbkxheW91dFN0YXJ0KTtcbiAgICBncmlkLm9mZihldmVudEJlZm9yZVNlbmQsIHRoaXMuX29uTWlncmF0ZSk7XG5cbiAgICAvLyBSZW1vdmUgcGxhY2Vob2xkZXIgY2xhc3MgZnJvbSB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCB0aGlzLl9jbGFzc05hbWUpO1xuICAgICAgdGhpcy5fY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQuXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gb25SZW1vdmUgaG9vay4gTm90ZSB0aGF0IGhlcmUgd2UgdXNlIHRoZSBjdXJyZW50IGdyaWQncyBvblJlbW92ZSBjYWxsYmFja1xuICAgIC8vIHNvIGlmIHRoZSBpdGVtIGhhcyBtaWdyYXRlZCBkdXJpbmcgZHJhZyB0aGUgb25SZW1vdmUgbWV0aG9kIHdpbGwgbm90IGJlXG4gICAgLy8gdGhlIG9yaWdpbmF0aW5nIGdyaWQncyBtZXRob2QuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlKSkge1xuICAgICAgc2V0dGluZ3MuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlKGl0ZW0sIGVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIHBsYWNlaG9sZGVyJ3MgZGltZW5zaW9ucy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7aGVpZ2h0fSBoZWlnaHRcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLnVwZGF0ZURpbWVuc2lvbnMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHtcbiAgICAgICAgd2lkdGg6IHdpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBsYWNlaG9sZGVyIGlzIGN1cnJlbnRseSBhY3RpdmUgKHZpc2libGUpLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtRHJhZ1BsYWNlaG9sZGVyLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fZWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBwbGFjZWhvbGRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbURyYWdQbGFjZWhvbGRlci5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1EcmFnUGxhY2Vob2xkZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5fYW5pbWF0ZS5kZXN0cm95KCk7XG4gICAgdGhpcy5faXRlbSA9IHRoaXMuX2FuaW1hdGUgPSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBRdWV1ZSBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBRdWV1ZSgpIHtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQWRkIGNhbGxiYWNrIHRvIHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgcXVldWUgY2FsbGJhY2tzIGFuZCByZXNldCB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIFF1ZXVlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyp9IGFyZzFcbiAgICogQHBhcmFtIHsqfSBhcmcyXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uKGFyZzEsIGFyZzIpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgaTtcblxuICAgIC8vIFF1aXQgZWFybHkgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5LlxuICAgIGlmICghbGVuZ3RoKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBzaW5nbGVDYWxsYmFjayA9IGxlbmd0aCA9PT0gMTtcbiAgICB2YXIgc25hcHNob3QgPSBzaW5nbGVDYWxsYmFjayA/IHF1ZXVlWzBdIDogcXVldWUuc2xpY2UoMCk7XG5cbiAgICAvLyBSZXNldCBxdWV1ZS5cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIGNhbGxiYWNrIGxldCdzIGp1c3QgY2FsbCBpdC5cbiAgICBpZiAoc2luZ2xlQ2FsbGJhY2spIHtcbiAgICAgIHNuYXBzaG90KGFyZzEsIGFyZzIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBtdWx0aXBsZSBjYWxsYmFja3MsIGxldCdzIHByb2Nlc3MgdGhlbS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNuYXBzaG90W2ldKGFyZzEsIGFyZzIpO1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBRdWV1ZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgUXVldWUucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtRdWV1ZX1cbiAgICovXG4gIFF1ZXVlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLl9xdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIExheW91dCBtYW5hZ2VyIGZvciBJdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtTGF5b3V0KGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5faXNJbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2N1cnJlbnRTdHlsZXMgPSB7fTtcbiAgICB0aGlzLl90YXJnZXRTdHlsZXMgPSB7fTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IDA7XG4gICAgdGhpcy5fY3VycmVudFRvcCA9IDA7XG4gICAgdGhpcy5fb2Zmc2V0TGVmdCA9IDA7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gMDtcbiAgICB0aGlzLl9za2lwTmV4dEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuX2FuaW1hdGVPcHRpb25zID0ge1xuICAgICAgb25GaW5pc2g6IHRoaXMuX2ZpbmlzaC5iaW5kKHRoaXMpXG4gICAgfTtcbiAgICB0aGlzLl9xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgLy8gQmluZCBhbmltYXRpb24gaGFuZGxlcnMgYW5kIGZpbmlzaCBtZXRob2QuXG4gICAgdGhpcy5fc2V0dXBBbmltYXRpb24gPSB0aGlzLl9zZXR1cEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uID0gdGhpcy5fc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCBpdGVtIGxheW91dCBiYXNlZCBvbiBpdCdzIGN1cnJlbnQgZGF0YS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbUxheW91dC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuICAgIHZhciBncmlkU2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIGlzUG9zaXRpb25pbmcgPSB0aGlzLl9pc0FjdGl2ZTtcbiAgICB2YXIgaXNKdXN0UmVsZWFzZWQgPSByZWxlYXNlLl9pc0FjdGl2ZSAmJiByZWxlYXNlLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9PT0gZmFsc2U7XG4gICAgdmFyIGFuaW1EdXJhdGlvbiA9IGlzSnVzdFJlbGVhc2VkXG4gICAgICA/IGdyaWRTZXR0aW5ncy5kcmFnUmVsZWFzZUR1cmF0aW9uXG4gICAgICA6IGdyaWRTZXR0aW5ncy5sYXlvdXREdXJhdGlvbjtcbiAgICB2YXIgYW5pbUVhc2luZyA9IGlzSnVzdFJlbGVhc2VkID8gZ3JpZFNldHRpbmdzLmRyYWdSZWxlYXNlRWFzaW5nIDogZ3JpZFNldHRpbmdzLmxheW91dEVhc2luZztcbiAgICB2YXIgYW5pbUVuYWJsZWQgPSAhaW5zdGFudCAmJiAhdGhpcy5fc2tpcE5leHRBbmltYXRpb24gJiYgYW5pbUR1cmF0aW9uID4gMDtcbiAgICB2YXIgaXNBbmltYXRpbmc7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBjdXJyZW50bHkgcG9zaXRpb25pbmcgcHJvY2VzcyBjdXJyZW50IGxheW91dCBjYWxsYmFja1xuICAgIC8vIHF1ZXVlIHdpdGggaW50ZXJydXB0ZWQgZmxhZyBvbi5cbiAgICBpZiAoaXNQb3NpdGlvbmluZykgdGhpcy5fcXVldWUuZmx1c2godHJ1ZSwgaXRlbSk7XG5cbiAgICAvLyBNYXJrIHJlbGVhc2UgcG9zaXRpb25pbmcgYXMgc3RhcnRlZC5cbiAgICBpZiAoaXNKdXN0UmVsZWFzZWQpIHJlbGVhc2UuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gdHJ1ZTtcblxuICAgIC8vIFB1c2ggdGhlIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBpZiAoaXNGdW5jdGlvbihvbkZpbmlzaCkpIHRoaXMuX3F1ZXVlLmFkZChvbkZpbmlzaCk7XG5cbiAgICAvLyBJZiBubyBhbmltYXRpb25zIGFyZSBuZWVkZWQsIGVhc3kgcGVhc3khXG4gICAgaWYgKCFhbmltRW5hYmxlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0cygpO1xuICAgICAgdGhpcy5fdXBkYXRlVGFyZ2V0U3R5bGVzKCk7XG4gICAgICBpc0FuaW1hdGluZyA9IGl0ZW0uX2FuaW1hdGUuaXNBbmltYXRpbmcoKTtcbiAgICAgIHRoaXMuc3RvcChmYWxzZSwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgICFpc0FuaW1hdGluZyAmJiBzZXRTdHlsZXMoZWxlbWVudCwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgIHRoaXMuX3NraXBOZXh0QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5fZmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGl0ZW0gYWN0aXZlIGFuZCBzdG9yZSBzb21lIGRhdGEgZm9yIHRoZSBhbmltYXRpb24gdGhhdCBpcyBhYm91dCB0byBiZVxuICAgIC8vIHRyaWdnZXJlZC5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYW5pbWF0ZU9wdGlvbnMuZWFzaW5nID0gYW5pbUVhc2luZztcbiAgICB0aGlzLl9hbmltYXRlT3B0aW9ucy5kdXJhdGlvbiA9IGFuaW1EdXJhdGlvbjtcbiAgICB0aGlzLl9pc0ludGVycnVwdGVkID0gaXNQb3NpdGlvbmluZztcblxuICAgIC8vIFN0YXJ0IHRoZSBpdGVtJ3MgbGF5b3V0IGFuaW1hdGlvbiBpbiB0aGUgbmV4dCB0aWNrLlxuICAgIGFkZExheW91dFRpY2soaXRlbS5faWQsIHRoaXMuX3NldHVwQW5pbWF0aW9uLCB0aGlzLl9zdGFydEFuaW1hdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBpdGVtJ3MgcG9zaXRpb24gYW5pbWF0aW9uIGlmIGl0IGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Byb2Nlc3NDYWxsYmFja1F1ZXVlPWZhbHNlXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldFN0eWxlc11cbiAgICogQHJldHVybnMge0l0ZW1MYXlvdXR9XG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24ocHJvY2Vzc0NhbGxiYWNrUXVldWUsIHRhcmdldFN0eWxlcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAhdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuXG4gICAgLy8gQ2FuY2VsIGFuaW1hdGlvbiBpbml0LlxuICAgIGNhbmNlbExheW91dFRpY2soaXRlbS5faWQpO1xuXG4gICAgLy8gU3RvcCBhbmltYXRpb24uXG4gICAgaXRlbS5fYW5pbWF0ZS5zdG9wKHRhcmdldFN0eWxlcyk7XG5cbiAgICAvLyBSZW1vdmUgcG9zaXRpb25pbmcgY2xhc3MuXG4gICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcblxuICAgIC8vIFJlc2V0IGFjdGl2ZSBzdGF0ZS5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gUHJvY2VzcyBjYWxsYmFjayBxdWV1ZSBpZiBuZWVkZWQuXG4gICAgaWYgKHByb2Nlc3NDYWxsYmFja1F1ZXVlKSB0aGlzLl9xdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbUxheW91dH1cbiAgICovXG4gIEl0ZW1MYXlvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlLCB7fSk7XG4gICAgdGhpcy5fcXVldWUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2l0ZW0gPSB0aGlzLl9jdXJyZW50U3R5bGVzID0gdGhpcy5fdGFyZ2V0U3R5bGVzID0gdGhpcy5fYW5pbWF0ZU9wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIHVwZGF0ZSBpdGVtJ3MgY3VycmVudCBsYXlvdXQgb2Zmc2V0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3VwZGF0ZU9mZnNldHMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgbWlncmF0ZSA9IGl0ZW0uX21pZ3JhdGU7XG4gICAgdmFyIHJlbGVhc2UgPSBpdGVtLl9yZWxlYXNlO1xuXG4gICAgdGhpcy5fb2Zmc2V0TGVmdCA9IHJlbGVhc2UuX2lzQWN0aXZlXG4gICAgICA/IHJlbGVhc2UuX2NvbnRhaW5lckRpZmZYXG4gICAgICA6IG1pZ3JhdGUuX2lzQWN0aXZlXG4gICAgICA/IG1pZ3JhdGUuX2NvbnRhaW5lckRpZmZYXG4gICAgICA6IDA7XG5cbiAgICB0aGlzLl9vZmZzZXRUb3AgPSByZWxlYXNlLl9pc0FjdGl2ZVxuICAgICAgPyByZWxlYXNlLl9jb250YWluZXJEaWZmWVxuICAgICAgOiBtaWdyYXRlLl9pc0FjdGl2ZVxuICAgICAgPyBtaWdyYXRlLl9jb250YWluZXJEaWZmWVxuICAgICAgOiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIHVwZGF0ZSBpdGVtJ3MgbGF5b3V0IHRhcmdldCBzdHlsZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3VwZGF0ZVRhcmdldFN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX3RhcmdldFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICB0aGlzLl9pdGVtLl9sZWZ0ICsgdGhpcy5fb2Zmc2V0TGVmdCxcbiAgICAgIHRoaXMuX2l0ZW0uX3RvcCArIHRoaXMuX29mZnNldFRvcFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBpdGVtIGxheW91dCBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBtaWdyYXRlID0gaXRlbS5fbWlncmF0ZTtcbiAgICB2YXIgcmVsZWFzZSA9IGl0ZW0uX3JlbGVhc2U7XG5cbiAgICAvLyBNYXJrIHRoZSBpdGVtIGFzIGluYWN0aXZlIGFuZCByZW1vdmUgcG9zaXRpb25pbmcgY2xhc3Nlcy5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICByZW1vdmVDbGFzcyhpdGVtLl9lbGVtZW50LCBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3MuaXRlbVBvc2l0aW9uaW5nQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEZpbmlzaCB1cCByZWxlYXNlIGFuZCBtaWdyYXRpb24uXG4gICAgaWYgKHJlbGVhc2UuX2lzQWN0aXZlKSByZWxlYXNlLnN0b3AoKTtcbiAgICBpZiAobWlncmF0ZS5faXNBY3RpdmUpIG1pZ3JhdGUuc3RvcCgpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIGl0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGl0ZW0gZm9yIGxheW91dCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtTGF5b3V0LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbUxheW91dC5wcm90b3R5cGUuX3NldHVwQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh0aGlzLl9pdGVtLl9lbGVtZW50KTtcbiAgICB0aGlzLl9jdXJyZW50TGVmdCA9IHRyYW5zbGF0ZS54O1xuICAgIHRoaXMuX2N1cnJlbnRUb3AgPSB0cmFuc2xhdGUueTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgbGF5b3V0IGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1MYXlvdXQucHJvdG90eXBlXG4gICAqL1xuICBJdGVtTGF5b3V0LnByb3RvdHlwZS5fc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIHNldHRpbmdzID0gaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzO1xuXG4gICAgLy8gTGV0J3MgdXBkYXRlIHRoZSBvZmZzZXQgZGF0YSBhbmQgdGFyZ2V0IHN0eWxlcy5cbiAgICB0aGlzLl91cGRhdGVPZmZzZXRzKCk7XG4gICAgdGhpcy5fdXBkYXRlVGFyZ2V0U3R5bGVzKCk7XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBhbHJlYWR5IGluIGNvcnJlY3QgcG9zaXRpb24gbGV0J3MgcXVpdCBlYXJseS5cbiAgICBpZiAoXG4gICAgICBpdGVtLl9sZWZ0ID09PSB0aGlzLl9jdXJyZW50TGVmdCAtIHRoaXMuX29mZnNldExlZnQgJiZcbiAgICAgIGl0ZW0uX3RvcCA9PT0gdGhpcy5fY3VycmVudFRvcCAtIHRoaXMuX29mZnNldFRvcFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX2lzSW50ZXJydXB0ZWQpIHRoaXMuc3RvcChmYWxzZSwgdGhpcy5fdGFyZ2V0U3R5bGVzKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9maW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgaXRlbSdzIHBvc2l0aW9uaW5nIGNsYXNzIGlmIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX2lzSW50ZXJydXB0ZWQpIHtcbiAgICAgIGFkZENsYXNzKGl0ZW0uX2VsZW1lbnQsIHNldHRpbmdzLml0ZW1Qb3NpdGlvbmluZ0NsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCBzdHlsZXMgZm9yIGFuaW1hdGlvbi5cbiAgICB0aGlzLl9jdXJyZW50U3R5bGVzLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVN0cmluZyh0aGlzLl9jdXJyZW50TGVmdCwgdGhpcy5fY3VycmVudFRvcCk7XG5cbiAgICAvLyBBbmltYXRlLlxuICAgIGl0ZW0uX2FuaW1hdGUuc3RhcnQodGhpcy5fY3VycmVudFN0eWxlcywgdGhpcy5fdGFyZ2V0U3R5bGVzLCB0aGlzLl9hbmltYXRlT3B0aW9ucyk7XG4gIH07XG5cbiAgdmFyIHRlbXBTdHlsZXMgPSB7fTtcblxuICAvKipcbiAgICogVGhlIG1pZ3JhdGUgcHJvY2VzcyBoYW5kbGVyIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtTWlncmF0ZShpdGVtKSB7XG4gICAgLy8gUHJpdmF0ZSBwcm9wcy5cbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgbWlncmF0ZSBwcm9jZXNzIG9mIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWR9IHRhcmdldEdyaWRcbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY29udGFpbmVyXVxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbih0YXJnZXRHcmlkLCBwb3NpdGlvbiwgY29udGFpbmVyKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIGlzVmlzaWJsZSA9IGl0ZW0uaXNWaXNpYmxlKCk7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0U2V0dGluZ3MgPSB0YXJnZXRHcmlkLl9zZXR0aW5ncztcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRhcmdldEl0ZW1zID0gdGFyZ2V0R3JpZC5faXRlbXM7XG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGdyaWQuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0SW5kZXg7XG4gICAgdmFyIHRhcmdldEl0ZW07XG4gICAgdmFyIGN1cnJlbnRDb250YWluZXI7XG4gICAgdmFyIG9mZnNldERpZmY7XG4gICAgdmFyIGNvbnRhaW5lckRpZmY7XG4gICAgdmFyIHRyYW5zbGF0ZTtcbiAgICB2YXIgdHJhbnNsYXRlWDtcbiAgICB2YXIgdHJhbnNsYXRlWTtcblxuICAgIC8vIEdldCB0YXJnZXQgaW5kZXguXG4gICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRhcmdldEluZGV4ID0gbm9ybWFsaXplQXJyYXlJbmRleCh0YXJnZXRJdGVtcywgcG9zaXRpb24sIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRJdGVtID0gdGFyZ2V0R3JpZC5fZ2V0SXRlbShwb3NpdGlvbik7XG4gICAgICAvKiogQHRvZG8gQ29uc2lkZXIgdGhyb3dpbmcgYW4gZXJyb3IgaGVyZSBpbnN0ZWFkIG9mIHNpbGVudGx5IGZhaWxpbmcuICovXG4gICAgICBpZiAoIXRhcmdldEl0ZW0pIHJldHVybiB0aGlzO1xuICAgICAgdGFyZ2V0SW5kZXggPSB0YXJnZXRJdGVtcy5pbmRleE9mKHRhcmdldEl0ZW0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgdmFsdWVzIGlmIG5lZWRlZC5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkgfHwgdGhpcy5faXNBY3RpdmUgfHwgaXRlbS5pc1JlbGVhc2luZygpKSB7XG4gICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlLng7XG4gICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCBwb3NpdGlvbmluZy5cbiAgICBpZiAoaXRlbS5pc1Bvc2l0aW9uaW5nKCkpIHtcbiAgICAgIGl0ZW0uX2xheW91dC5zdG9wKHRydWUsIHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGVTdHJpbmcodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkgfSk7XG4gICAgfVxuXG4gICAgLy8gQWJvcnQgY3VycmVudCBtaWdyYXRpb24uXG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0cmFuc2xhdGVYIC09IHRoaXMuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgdHJhbnNsYXRlWSAtPSB0aGlzLl9jb250YWluZXJEaWZmWTtcbiAgICAgIHRoaXMuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIEFib3J0IGN1cnJlbnQgcmVsZWFzZS5cbiAgICBpZiAoaXRlbS5pc1JlbGVhc2luZygpKSB7XG4gICAgICB0cmFuc2xhdGVYIC09IGl0ZW0uX3JlbGVhc2UuX2NvbnRhaW5lckRpZmZYO1xuICAgICAgdHJhbnNsYXRlWSAtPSBpdGVtLl9yZWxlYXNlLl9jb250YWluZXJEaWZmWTtcbiAgICAgIGl0ZW0uX3JlbGVhc2Uuc3RvcCh0cnVlLCB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlU3RyaW5nKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpIH0pO1xuICAgIH1cblxuICAgIC8vIFN0b3AgY3VycmVudCB2aXNpYmlsaXR5IGFuaW1hdGlvbnMuXG4gICAgaXRlbS5fdmlzaWJpbGl0eS5fc3RvcEFuaW1hdGlvbigpO1xuXG4gICAgLy8gRGVzdHJveSBjdXJyZW50IGRyYWcuXG4gICAgaWYgKGl0ZW0uX2RyYWcpIGl0ZW0uX2RyYWcuZGVzdHJveSgpO1xuXG4gICAgLy8gUHJvY2VzcyBjdXJyZW50IHZpc2liaWxpdHkgYW5pbWF0aW9uIHF1ZXVlLlxuICAgIGl0ZW0uX3Zpc2liaWxpdHkuX3F1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pO1xuXG4gICAgLy8gRW1pdCBiZWZvcmVTZW5kIGV2ZW50LlxuICAgIGlmIChncmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRCZWZvcmVTZW5kKSkge1xuICAgICAgZ3JpZC5fZW1pdChldmVudEJlZm9yZVNlbmQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGJlZm9yZVJlY2VpdmUgZXZlbnQuXG4gICAgaWYgKHRhcmdldEdyaWQuX2hhc0xpc3RlbmVycyhldmVudEJlZm9yZVJlY2VpdmUpKSB7XG4gICAgICB0YXJnZXRHcmlkLl9lbWl0KGV2ZW50QmVmb3JlUmVjZWl2ZSwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBmcm9tR3JpZDogZ3JpZCxcbiAgICAgICAgZnJvbUluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIHRvR3JpZDogdGFyZ2V0R3JpZCxcbiAgICAgICAgdG9JbmRleDogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBjdXJyZW50IGNsYXNzbmFtZXMuXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuaXRlbUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtSGlkZGVuQ2xhc3MpO1xuXG4gICAgLy8gQWRkIG5ldyBjbGFzc25hbWVzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHRhcmdldFNldHRpbmdzLml0ZW1DbGFzcyk7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNWaXNpYmxlID8gdGFyZ2V0U2V0dGluZ3MuaXRlbVZpc2libGVDbGFzcyA6IHRhcmdldFNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBNb3ZlIGl0ZW0gaW5zdGFuY2UgZnJvbSBjdXJyZW50IGdyaWQgdG8gdGFyZ2V0IGdyaWQuXG4gICAgZ3JpZC5faXRlbXMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgYXJyYXlJbnNlcnQodGFyZ2V0SXRlbXMsIGl0ZW0sIHRhcmdldEluZGV4KTtcblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgZ3JpZCBpZCByZWZlcmVuY2UuXG4gICAgaXRlbS5fZ3JpZElkID0gdGFyZ2V0R3JpZC5faWQ7XG5cbiAgICAvLyBHZXQgY3VycmVudCBjb250YWluZXIuXG4gICAgY3VycmVudENvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gaW5zaWRlIHRoZSB0YXJnZXQgY29udGFpbmVyIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gdGhlXG4gICAgLy8gY3VycmVudCBjb250YWluZXIuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lciAhPT0gY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgb2Zmc2V0RGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCBjdXJyZW50Q29udGFpbmVyLCB0cnVlKTtcbiAgICAgIGlmICghdHJhbnNsYXRlKSB7XG4gICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZS54O1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnk7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICB0cmFuc2xhdGVYICsgb2Zmc2V0RGlmZi5sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZICsgb2Zmc2V0RGlmZi50b3BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaWxkIGVsZW1lbnQncyBzdHlsZXMgdG8gcmVmbGVjdCB0aGUgY3VycmVudCB2aXNpYmlsaXR5IHN0YXRlLlxuICAgIGl0ZW0uX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBzZXRTdHlsZXMoaXRlbS5fY2hpbGQsIGlzVmlzaWJsZSA/IHRhcmdldFNldHRpbmdzLnZpc2libGVTdHlsZXMgOiB0YXJnZXRTZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuXG4gICAgLy8gVXBkYXRlIGRpc3BsYXkgc3R5bGUuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdoaWRkZW4nO1xuXG4gICAgLy8gR2V0IG9mZnNldCBkaWZmIGZvciB0aGUgbWlncmF0aW9uIGRhdGEuXG4gICAgY29udGFpbmVyRGlmZiA9IGdldE9mZnNldERpZmYodGFyZ2V0Q29udGFpbmVyLCB0YXJnZXRFbGVtZW50LCB0cnVlKTtcblxuICAgIC8vIFVwZGF0ZSBpdGVtJ3MgY2FjaGVkIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICBpdGVtLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIGl0ZW0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBkcmFnIGhhbmRsZXIuXG4gICAgaXRlbS5fZHJhZyA9IHRhcmdldFNldHRpbmdzLmRyYWdFbmFibGVkID8gbmV3IEl0ZW1EcmFnKGl0ZW0pIDogbnVsbDtcblxuICAgIC8vIFNldHVwIG1pZ3JhdGlvbiBkYXRhLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSB0YXJnZXRDb250YWluZXI7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSBjb250YWluZXJEaWZmLmxlZnQ7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSBjb250YWluZXJEaWZmLnRvcDtcblxuICAgIC8vIEVtaXQgc2VuZCBldmVudC5cbiAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGV2ZW50U2VuZCkpIHtcbiAgICAgIGdyaWQuX2VtaXQoZXZlbnRTZW5kLCB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGZyb21HcmlkOiBncmlkLFxuICAgICAgICBmcm9tSW5kZXg6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgdG9HcmlkOiB0YXJnZXRHcmlkLFxuICAgICAgICB0b0luZGV4OiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCByZWNlaXZlIGV2ZW50LlxuICAgIGlmICh0YXJnZXRHcmlkLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZWNlaXZlKSkge1xuICAgICAgdGFyZ2V0R3JpZC5fZW1pdChldmVudFJlY2VpdmUsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgZnJvbUdyaWQ6IGdyaWQsXG4gICAgICAgIGZyb21JbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICB0b0dyaWQ6IHRhcmdldEdyaWQsXG4gICAgICAgIHRvSW5kZXg6IHRhcmdldEluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHRoZSBtaWdyYXRlIHByb2Nlc3Mgb2YgYW4gaXRlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYWJvcnQgYW5cbiAgICogb25nb2luZyBtaWdyYXRlIHByb2Nlc3MgKGFuaW1hdGlvbikgb3IgZmluaXNoIHRoZSBtaWdyYXRlIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthYm9ydD1mYWxzZV1cbiAgICogIC0gU2hvdWxkIHRoZSBtaWdyYXRpb24gYmUgYWJvcnRlZD9cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjdXJyZW50U3R5bGVzXVxuICAgKiAgLSBPcHRpb25hbCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgc3R5bGVzLlxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKGFib3J0LCBjdXJyZW50U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIGdyaWRFbGVtZW50ID0gZ3JpZC5fZWxlbWVudDtcbiAgICB2YXIgdHJhbnNsYXRlO1xuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gZ3JpZEVsZW1lbnQpIHtcbiAgICAgIGlmICghY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgdGVtcFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICAgICB0cmFuc2xhdGUueCAtIHRoaXMuX2NvbnRhaW5lckRpZmZYLFxuICAgICAgICAgICAgdHJhbnNsYXRlLnkgLSB0aGlzLl9jb250YWluZXJEaWZmWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoaXRlbS5fbGVmdCwgaXRlbS5fdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U3R5bGVzID0gdGVtcFN0eWxlcztcbiAgICAgIH1cbiAgICAgIGdyaWRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIGN1cnJlbnRTdHlsZXMpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWCA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlkgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1NaWdyYXRlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbU1pZ3JhdGV9XG4gICAqL1xuICBJdGVtTWlncmF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIHRoaXMuX2l0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgdGVtcFN0eWxlcyQxID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSByZWxlYXNlIHByb2Nlc3MgaGFuZGxlciBjb25zdHJ1Y3Rvci4gQWx0aG91Z2ggdGhpcyBtaWdodCBzZWVtIGFzIHByb3BlclxuICAgKiBmaXQgZm9yIHRoZSBkcmFnIHByb2Nlc3MgdGhpcyBuZWVkcyB0byBiZSBzZXBhcmF0ZWQgaW50byBpdCdzIG93biBsb2dpY1xuICAgKiBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIGEgc2NlbmFyaW8gd2hlcmUgZHJhZyBpcyBkaXNhYmxlZCwgYnV0IHRoZSByZWxlYXNlXG4gICAqIHByb2Nlc3Mgc3RpbGwgbmVlZHMgdG8gYmUgaW1wbGVtZW50ZWQgKGRyYWdnaW5nIGZyb20gYSBncmlkIHRvIGFub3RoZXIpLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtUmVsZWFzZShpdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUG9zaXRpb25pbmdTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29udGFpbmVyRGlmZlggPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZZID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgcmVsZWFzZSBwcm9jZXNzIG9mIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1SZWxlYXNlLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXNBY3RpdmUpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG5cbiAgICAvLyBGbGFnIHJlbGVhc2UgYXMgYWN0aXZlLlxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcblxuICAgIC8vIEFkZCByZWxlYXNlIGNsYXNzIG5hbWUgdG8gdGhlIHJlbGVhc2VkIGVsZW1lbnQuXG4gICAgYWRkQ2xhc3MoaXRlbS5fZWxlbWVudCwgZ3JpZC5fc2V0dGluZ3MuaXRlbVJlbGVhc2luZ0NsYXNzKTtcblxuICAgIC8vIEVtaXQgZHJhZ1JlbGVhc2VTdGFydCBldmVudC5cbiAgICBncmlkLl9lbWl0KGV2ZW50RHJhZ1JlbGVhc2VTdGFydCwgaXRlbSk7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgcmVsZWFzZWQgaXRlbS5cbiAgICBpdGVtLl9sYXlvdXQuc3RhcnQoZmFsc2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgcmVsZWFzZSBwcm9jZXNzIG9mIGFuIGl0ZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFib3J0IGFuXG4gICAqIG9uZ29pbmcgcmVsZWFzZSBwcm9jZXNzIChhbmltYXRpb24pIG9yIGZpbmlzaCB0aGUgcmVsZWFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbYWJvcnQ9ZmFsc2VdXG4gICAqICAtIFNob3VsZCB0aGUgcmVsZWFzZSBiZSBhYm9ydGVkPyBXaGVuIHRydWUsIHRoZSByZWxlYXNlIGVuZCBldmVudCB3b24ndCBiZVxuICAgKiAgICBlbWl0dGVkLiBTZXQgdG8gdHJ1ZSBvbmx5IHdoZW4geW91IG5lZWQgdG8gYWJvcnQgdGhlIHJlbGVhc2UgcHJvY2Vzc1xuICAgKiAgICB3aGlsZSB0aGUgaXRlbSBpcyBhbmltYXRpbmcgdG8gaXQncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjdXJyZW50U3R5bGVzXVxuICAgKiAgLSBPcHRpb25hbCBjdXJyZW50IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgc3R5bGVzLlxuICAgKiBAcmV0dXJucyB7SXRlbVJlbGVhc2V9XG4gICAqL1xuICBJdGVtUmVsZWFzZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKGFib3J0LCBjdXJyZW50U3R5bGVzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLl9pc0FjdGl2ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBncmlkID0gaXRlbS5nZXRHcmlkKCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdyaWQuX2VsZW1lbnQ7XG4gICAgdmFyIHRyYW5zbGF0ZTtcblxuICAgIC8vIFJlc2V0IGRhdGEgYW5kIHJlbW92ZSByZWxlYXNpbmcgY2xhc3MgbmFtZSBmcm9tIHRoZSBlbGVtZW50LlxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAvLyBJZiB0aGUgcmVsZWFzZWQgZWxlbWVudCBpcyBvdXRzaWRlIHRoZSBncmlkJ3MgY29udGFpbmVyIGVsZW1lbnQgcHV0IGl0XG4gICAgLy8gYmFjayB0aGVyZSBhbmQgYWRqdXN0IHBvc2l0aW9uIGFjY29yZGluZ2x5LlxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgaWYgKCFjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChhYm9ydCkge1xuICAgICAgICAgIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB0ZW1wU3R5bGVzJDEudHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlU3RyaW5nKFxuICAgICAgICAgICAgdHJhbnNsYXRlLnggLSB0aGlzLl9jb250YWluZXJEaWZmWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZS55IC0gdGhpcy5fY29udGFpbmVyRGlmZllcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBTdHlsZXMkMS50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoaXRlbS5fbGVmdCwgaXRlbS5fdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U3R5bGVzID0gdGVtcFN0eWxlcyQxO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIGN1cnJlbnRTdHlsZXMpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgZHJhZ1JlbGVhc2VFbmQgZXZlbnQuXG4gICAgaWYgKCFhYm9ydCkgZ3JpZC5fZW1pdChldmVudERyYWdSZWxlYXNlRW5kLCBpdGVtKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1SZWxlYXNlfVxuICAgKi9cbiAgSXRlbVJlbGVhc2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogUmVzZXQgcHVibGljIGRhdGEgYW5kIHJlbW92ZSByZWxlYXNpbmcgY2xhc3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtUmVsZWFzZS5wcm90b3R5cGVcbiAgICovXG4gIEl0ZW1SZWxlYXNlLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Bvc2l0aW9uaW5nU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbnRhaW5lckRpZmZYID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJEaWZmWSA9IDA7XG4gICAgcmVtb3ZlQ2xhc3MoaXRlbS5fZWxlbWVudCwgaXRlbS5nZXRHcmlkKCkuX3NldHRpbmdzLml0ZW1SZWxlYXNpbmdDbGFzcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHZhbHVlcyBvZiB0aGUgcHJvdmlkZWQgc3R5bGVzIGRlZmluaXRpb24gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICB2YXIgY3VycmVudCA9IHt9O1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBjdXJyZW50W3Byb3BdID0gZ2V0U3R5bGUoZWxlbWVudCwgZ2V0U3R5bGVOYW1lKHByb3ApKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogVmlzaWJpbGl0eSBtYW5hZ2VyIGZvciBJdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqL1xuICBmdW5jdGlvbiBJdGVtVmlzaWJpbGl0eShpdGVtKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gaXRlbS5faXNBY3RpdmU7XG4gICAgdmFyIGVsZW1lbnQgPSBpdGVtLl9lbGVtZW50O1xuICAgIHZhciBzZXR0aW5ncyA9IGl0ZW0uZ2V0R3JpZCgpLl9zZXR0aW5ncztcblxuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdXAgdmlzaWJpbGl0eSBzdGF0ZXMuXG4gICAgdGhpcy5faXNIaWRkZW4gPSAhaXNBY3RpdmU7XG4gICAgdGhpcy5faXNIaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgIC8vIENhbGxiYWNrIHF1ZXVlLlxuICAgIHRoaXMuX3F1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgICAvLyBCaW5kIHNob3cvaGlkZSBmaW5pc2hlcnMuXG4gICAgdGhpcy5fZmluaXNoU2hvdyA9IHRoaXMuX2ZpbmlzaFNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9maW5pc2hIaWRlID0gdGhpcy5fZmluaXNoSGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgLy8gRm9yY2UgaXRlbSB0byBiZSBlaXRoZXIgdmlzaWJsZSBvciBoaWRkZW4gb24gaW5pdC5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0FjdGl2ZSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAvLyBTZXQgdmlzaWJsZS9oaWRkZW4gY2xhc3MuXG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgaXNBY3RpdmUgPyBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzIDogc2V0dGluZ3MuaXRlbUhpZGRlbkNsYXNzKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0eWxlcyBmb3IgdGhlIGNoaWxkIGVsZW1lbnQuXG4gICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCBpc0FjdGl2ZSA/IHNldHRpbmdzLnZpc2libGVTdHlsZXMgOiBzZXR0aW5ncy5oaWRkZW5TdHlsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIFNob3cgaXRlbS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zdGFudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GaW5pc2hdXG4gICAqIEByZXR1cm5zIHtJdGVtVmlzaWJpbGl0eX1cbiAgICovXG4gIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBpc0Z1bmN0aW9uKG9uRmluaXNoKSA/IG9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gSWYgaXRlbSBpcyB2aXNpYmxlIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBiZSBkb25lIHdpdGggaXQuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3dpbmcgJiYgIXRoaXMuX2lzSGlkZGVuKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIHNob3dpbmcgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgc2hvd24gaW5zdGFudGx5LCBsZXQncyBqdXN0XG4gICAgLy8gcHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5faXNTaG93aW5nICYmICFpbnN0YW50KSB7XG4gICAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGl0ZW0gaXMgaGlkaW5nIG9yIGhpZGRlbiBwcm9jZXNzIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgY2FsbGJhY2tcbiAgICAvLyBxdWV1ZSB3aXRoIHRoZSBpbnRlcnJ1cHRlZCBmbGFnIGFjdGl2ZSwgdXBkYXRlIGNsYXNzZXMgYW5kIHNldCBkaXNwbGF5XG4gICAgLy8gdG8gYmxvY2sgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5faXNTaG93aW5nKSB7XG4gICAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICAgIGlmICghdGhpcy5faXNIaWRpbmcpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUuXG4gICAgY2FsbGJhY2sgJiYgcXVldWUuYWRkKGNhbGxiYWNrKTtcblxuICAgIC8vIFVwZGF0ZSB2aXNpYmlsaXR5IHN0YXRlcy5cbiAgICBpdGVtLl9pc0FjdGl2ZSA9IHRoaXMuX2lzU2hvd2luZyA9IHRydWU7XG4gICAgdGhpcy5faXNIaWRpbmcgPSB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuXG4gICAgLy8gRmluYWxseSBsZXQncyBzdGFydCBzaG93IGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdGFydEFuaW1hdGlvbih0cnVlLCBpbnN0YW50LCB0aGlzLl9maW5pc2hTaG93KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIGl0ZW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc3RhbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKiBAcmV0dXJucyB7SXRlbVZpc2liaWxpdHl9XG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKGluc3RhbnQsIG9uRmluaXNoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0uX2VsZW1lbnQ7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihvbkZpbmlzaCkgPyBvbkZpbmlzaCA6IG51bGw7XG4gICAgdmFyIGdyaWQgPSBpdGVtLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIElmIGl0ZW0gaXMgYWxyZWFkeSBoaWRkZW4gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAoIXRoaXMuX2lzSGlkaW5nICYmIHRoaXMuX2lzSGlkZGVuKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBpdGVtIGlzIGhpZGluZyBhbmQgZG9lcyBub3QgbmVlZCB0byBiZSBoaWRkZW4gaW5zdGFudGx5LCBsZXQncyBqdXN0XG4gICAgLy8gcHVzaCBjYWxsYmFjayB0byB0aGUgY2FsbGJhY2sgcXVldWUgYW5kIGJlIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodGhpcy5faXNIaWRpbmcgJiYgIWluc3RhbnQpIHtcbiAgICAgIGNhbGxiYWNrICYmIHF1ZXVlLmFkZChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaXRlbSBpcyBzaG93aW5nIG9yIHZpc2libGUgcHJvY2VzcyB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGNhbGxiYWNrXG4gICAgLy8gcXVldWUgd2l0aCB0aGUgaW50ZXJydXB0ZWQgZmxhZyBhY3RpdmUsIHVwZGF0ZSBjbGFzc2VzIGFuZCBzZXQgZGlzcGxheVxuICAgIC8vIHRvIGJsb2NrIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICBxdWV1ZS5mbHVzaCh0cnVlLCBpdGVtKTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5pdGVtVmlzaWJsZUNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrIHRvIHRoZSBjYWxsYmFjayBxdWV1ZS5cbiAgICBjYWxsYmFjayAmJiBxdWV1ZS5hZGQoY2FsbGJhY2spO1xuXG4gICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgc3RhdGVzLlxuICAgIHRoaXMuX2lzSGlkZGVuID0gdGhpcy5faXNIaWRpbmcgPSB0cnVlO1xuICAgIGl0ZW0uX2lzQWN0aXZlID0gdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG5cbiAgICAvLyBGaW5hbGx5IGxldCdzIHN0YXJ0IGhpZGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKGZhbHNlLCBpbnN0YW50LCB0aGlzLl9maW5pc2hIaWRlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgc3RvcCBjdXJyZW50IGFuaW1hdGlvbiBpZiBpdCBpcyBydW5uaW5nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0l0ZW1WaXNpYmlsaXR5fVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl9pdGVtO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbS5fZWxlbWVudDtcbiAgICB2YXIgZ3JpZCA9IGl0ZW0uZ2V0R3JpZCgpO1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBzZXR0aW5ncyA9IGdyaWQuX3NldHRpbmdzO1xuXG4gICAgLy8gU3RvcCB2aXNpYmlsaXR5IGFuaW1hdGlvbi5cbiAgICB0aGlzLl9zdG9wQW5pbWF0aW9uKHt9KTtcblxuICAgIC8vIEZpcmUgYWxsIHVuY29tcGxldGVkIGNhbGxiYWNrcyB3aXRoIGludGVycnVwdGVkIGZsYWcgYW5kIGRlc3Ryb3kgdGhlIHF1ZXVlLlxuICAgIHF1ZXVlLmZsdXNoKHRydWUsIGl0ZW0pLmRlc3Ryb3koKTtcblxuICAgIC8vIFJlbW92ZSB2aXNpYmxlL2hpZGRlbiBjbGFzc2VzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1WaXNpYmxlQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1IaWRkZW5DbGFzcyk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZS5cbiAgICB0aGlzLl9pdGVtID0gbnVsbDtcbiAgICB0aGlzLl9pc0hpZGluZyA9IHRoaXMuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdGhpcy5faXNIaWRkZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogU3RhcnQgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b1Zpc2libGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zdGFudF1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmluaXNoXVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKHRvVmlzaWJsZSwgaW5zdGFudCwgb25GaW5pc2gpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcblxuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB2YXIgc2V0dGluZ3MgPSBpdGVtLmdldEdyaWQoKS5fc2V0dGluZ3M7XG4gICAgdmFyIHRhcmdldFN0eWxlcyA9IHRvVmlzaWJsZSA/IHNldHRpbmdzLnZpc2libGVTdHlsZXMgOiBzZXR0aW5ncy5oaWRkZW5TdHlsZXM7XG4gICAgdmFyIGR1cmF0aW9uID0gcGFyc2VJbnQodG9WaXNpYmxlID8gc2V0dGluZ3Muc2hvd0R1cmF0aW9uIDogc2V0dGluZ3MuaGlkZUR1cmF0aW9uKSB8fCAwO1xuICAgIHZhciBlYXNpbmcgPSAodG9WaXNpYmxlID8gc2V0dGluZ3Muc2hvd0Vhc2luZyA6IHNldHRpbmdzLmhpZGVFYXNpbmcpIHx8ICdlYXNlJztcbiAgICB2YXIgaXNJbnN0YW50ID0gaW5zdGFudCB8fCBkdXJhdGlvbiA8PSAwO1xuICAgIHZhciBjdXJyZW50U3R5bGVzO1xuXG4gICAgLy8gTm8gdGFyZ2V0IHN0eWxlcz8gTGV0J3MgcXVpdCBlYXJseS5cbiAgICBpZiAoIXRhcmdldFN0eWxlcykge1xuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgcXVldWVkIHZpc2liaWxpdHkgdGljay5cbiAgICBjYW5jZWxWaXNpYmlsaXR5VGljayhpdGVtLl9pZCk7XG5cbiAgICAvLyBJZiB3ZSBuZWVkIHRvIGFwcGx5IHRoZSBzdHlsZXMgaW5zdGFudGx5IHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgIGlmIChpc0luc3RhbnQpIHtcbiAgICAgIGlmIChpdGVtLl9hbmltYXRlQ2hpbGQuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICBpdGVtLl9hbmltYXRlQ2hpbGQuc3RvcCh0YXJnZXRTdHlsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3R5bGVzKGl0ZW0uX2NoaWxkLCB0YXJnZXRTdHlsZXMpO1xuICAgICAgfVxuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIGluIHRoZSBuZXh0IHRpY2sgKHRvIGF2b2lkIGxheW91dCB0aHJhc2hpbmcpLlxuICAgIGFkZFZpc2liaWxpdHlUaWNrKFxuICAgICAgaXRlbS5faWQsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudFN0eWxlcyA9IGdldEN1cnJlbnRTdHlsZXMoaXRlbS5fY2hpbGQsIHRhcmdldFN0eWxlcyk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdGFydChjdXJyZW50U3R5bGVzLCB0YXJnZXRTdHlsZXMsIHtcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgb25GaW5pc2g6IG9uRmluaXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgdmlzaWJpbGl0eSBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRTdHlsZXNdXG4gICAqL1xuICBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGUuX3N0b3BBbmltYXRpb24gPSBmdW5jdGlvbih0YXJnZXRTdHlsZXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX2l0ZW07XG4gICAgY2FuY2VsVmlzaWJpbGl0eVRpY2soaXRlbS5faWQpO1xuICAgIGl0ZW0uX2FuaW1hdGVDaGlsZC5zdG9wKHRhcmdldFN0eWxlcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmlzaCBzaG93IHByb2NlZHVyZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW1WaXNpYmlsaXR5LnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9maW5pc2hTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzSGlkZGVuKSByZXR1cm47XG4gICAgdGhpcy5faXNTaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIHRoaXMuX2l0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5pc2ggaGlkZSBwcm9jZWR1cmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtVmlzaWJpbGl0eS5wcm90b3R5cGVcbiAgICovXG4gIHZhciBmaW5pc2hTdHlsZXMgPSB7fTtcbiAgSXRlbVZpc2liaWxpdHkucHJvdG90eXBlLl9maW5pc2hIaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0hpZGRlbikgcmV0dXJuO1xuICAgIHZhciBpdGVtID0gdGhpcy5faXRlbTtcbiAgICB0aGlzLl9pc0hpZGluZyA9IGZhbHNlO1xuICAgIGZpbmlzaFN0eWxlcy50cmFuc2Zvcm0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoMCwgMCk7XG4gICAgaXRlbS5fbGF5b3V0LnN0b3AodHJ1ZSwgZmluaXNoU3R5bGVzKTtcbiAgICBpdGVtLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5fcXVldWUuZmx1c2goZmFsc2UsIGl0ZW0pO1xuICB9O1xuXG4gIHZhciBpZCA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB1bmlxdWUgbnVtZXJpYyBpZCAoaW5jcmVtZW50cyBhIGJhc2UgdmFsdWUgb24gZXZlcnkgY2FsbCkuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVVaWQoKSB7XG4gICAgcmV0dXJuICsraWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBJdGVtIGluc3RhbmNlIGZvciBhIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc0FjdGl2ZV1cbiAgICovXG4gIGZ1bmN0aW9uIEl0ZW0oZ3JpZCwgZWxlbWVudCwgaXNBY3RpdmUpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBpZC5cbiAgICB0aGlzLl9pZCA9IGNyZWF0ZVVpZCgpO1xuXG4gICAgLy8gUmVmZXJlbmNlIHRvIGNvbm5lY3RlZCBHcmlkIGluc3RhbmNlJ3MgaWQuXG4gICAgdGhpcy5fZ3JpZElkID0gZ3JpZC5faWQ7XG5cbiAgICAvLyBEZXN0cm95ZWQgZmxhZy5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgcG9zaXRpb25zLlxuICAgIHRoaXMuX2xlZnQgPSAwO1xuICAgIHRoaXMuX3RvcCA9IDA7XG5cbiAgICAvLyBUaGUgZWxlbWVudHMuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fY2hpbGQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuXG4gICAgLy8gSWYgdGhlIHByb3ZpZGVkIGl0ZW0gZWxlbWVudCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGdyaWQgY29udGFpbmVyXG4gICAgLy8gZWxlbWVudCwgYXBwZW5kIGl0IHRvIHRoZSBncmlkIGNvbnRhaW5lci5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBncmlkLl9lbGVtZW50KSB7XG4gICAgICBncmlkLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFNldCBpdGVtIGNsYXNzLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG5cbiAgICAvLyBJZiBpc0FjdGl2ZSBpcyBub3QgZGVmaW5lZCwgbGV0J3MgdHJ5IHRvIGF1dG8tZGV0ZWN0IGl0LlxuICAgIGlmICh0eXBlb2YgaXNBY3RpdmUgIT09ICdib29sZWFuJykge1xuICAgICAgaXNBY3RpdmUgPSBnZXRTdHlsZShlbGVtZW50LCAnZGlzcGxheScpICE9PSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGFjdGl2ZSBzdGF0ZSAoZGVmaW5lcyBpZiB0aGUgaXRlbSBpcyBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIGxheW91dFxuICAgIC8vIG9yIG5vdCkuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBpc0FjdGl2ZTtcblxuICAgIC8vIFNldCBlbGVtZW50J3MgaW5pdGlhbCBwb3NpdGlvbiBzdHlsZXMuXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBnZXRUcmFuc2xhdGVTdHJpbmcoMCwgMCk7XG5cbiAgICAvLyBJbml0aWF0ZSBpdGVtJ3MgYW5pbWF0aW9uIGNvbnRyb2xsZXJzLlxuICAgIHRoaXMuX2FuaW1hdGUgPSBuZXcgSXRlbUFuaW1hdGUoZWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0ZUNoaWxkID0gbmV3IEl0ZW1BbmltYXRlKHRoaXMuX2NoaWxkKTtcblxuICAgIC8vIFNldHVwIHZpc2liaWxpdHkgaGFuZGxlci5cbiAgICB0aGlzLl92aXNpYmlsaXR5ID0gbmV3IEl0ZW1WaXNpYmlsaXR5KHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGxheW91dCBoYW5kbGVyLlxuICAgIHRoaXMuX2xheW91dCA9IG5ldyBJdGVtTGF5b3V0KHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIG1pZ3JhdGlvbiBoYW5kbGVyIGRhdGEuXG4gICAgdGhpcy5fbWlncmF0ZSA9IG5ldyBJdGVtTWlncmF0ZSh0aGlzKTtcblxuICAgIC8vIFNldCB1cCByZWxlYXNlIGhhbmRsZXIuIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGlzIGZ1bGx5IGxpbmtlZCB0byBkcmFnZ2luZ1xuICAgIC8vIHRoaXMgc3RpbGwgbmVlZHMgdG8gYmUgYWx3YXlzIGluc3RhbnRpYXRlZCB0byBoYW5kbGUgbWlncmF0aW9uIHNjZW5hcmlvc1xuICAgIC8vIGNvcnJlY3RseS5cbiAgICB0aGlzLl9yZWxlYXNlID0gbmV3IEl0ZW1SZWxlYXNlKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGRyYWcgcGxhY2Vob2xkZXIgaGFuZGxlci4gTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgaXMgZnVsbHkgbGlua2VkIHRvXG4gICAgLy8gZHJhZ2dpbmcgdGhpcyBzdGlsbCBuZWVkcyB0byBiZSBhbHdheXMgaW5zdGFudGlhdGVkIHRvIGhhbmRsZSBtaWdyYXRpb25cbiAgICAvLyBzY2VuYXJpb3MgY29ycmVjdGx5LlxuICAgIHRoaXMuX2RyYWdQbGFjZWhvbGRlciA9IG5ldyBJdGVtRHJhZ1BsYWNlaG9sZGVyKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIGRyYWcgaGFuZGxlci5cbiAgICB0aGlzLl9kcmFnID0gc2V0dGluZ3MuZHJhZ0VuYWJsZWQgPyBuZXcgSXRlbURyYWcodGhpcykgOiBudWxsO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBpbml0aWFsIGRpbWVuc2lvbnMgYW5kIHNvcnQgZGF0YS5cbiAgICB0aGlzLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIHRoaXMuX3JlZnJlc2hTb3J0RGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2UgZ3JpZCByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0R3JpZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBncmlkSW5zdGFuY2VzW3RoaXMuX2dyaWRJZF07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2UgZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCB3aWR0aC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBoZWlnaHQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5zdGFuY2UgZWxlbWVudCdzIGNhY2hlZCBtYXJnaW5zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAgIC0gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyBsZWZ0LCByaWdodCwgdG9wIGFuZCBib3R0b20gcHJvcGVydGllc1xuICAgKiAgICAgd2hpY2ggaW5kaWNhdGUgdGhlIGl0ZW0gZWxlbWVudCdzIGNhY2hlZCBtYXJnaW5zLlxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0TWFyZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRoaXMuX21hcmdpbkxlZnQsXG4gICAgICByaWdodDogdGhpcy5fbWFyZ2luUmlnaHQsXG4gICAgICB0b3A6IHRoaXMuX21hcmdpblRvcCxcbiAgICAgIGJvdHRvbTogdGhpcy5fbWFyZ2luQm90dG9tXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlIGVsZW1lbnQncyBjYWNoZWQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqICAgLSBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIGxlZnQgYW5kIHRvcCBwcm9wZXJ0aWVzIHdoaWNoIGluZGljYXRlIHRoZVxuICAgKiAgICAgaXRlbSBlbGVtZW50J3MgY2FjaGVkIHBvc2l0aW9uIGluIHRoZSBncmlkLlxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5fbGVmdCxcbiAgICAgIHRvcDogdGhpcy5fdG9wXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYWN0aXZlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSB2aXNpYmxlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3Zpc2liaWxpdHkgJiYgIXRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkZGVuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgaXRlbSBiZWluZyBhbmltYXRlZCB0byB2aXNpYmxlP1xuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEl0ZW0ucHJvdG90eXBlLmlzU2hvd2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl92aXNpYmlsaXR5ICYmIHRoaXMuX3Zpc2liaWxpdHkuX2lzU2hvd2luZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGFuaW1hdGVkIHRvIGhpZGRlbj9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0hpZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl92aXNpYmlsaXR5ICYmIHRoaXMuX3Zpc2liaWxpdHkuX2lzSGlkaW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gcG9zaXRpb25pbmc/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNQb3NpdGlvbmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0Ll9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGJlaW5nIGRyYWdnZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhISh0aGlzLl9kcmFnICYmIHRoaXMuX2RyYWcuX2lzQWN0aXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhlIGl0ZW0gYmVpbmcgcmVsZWFzZWQ/XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuaXNSZWxlYXNpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEodGhpcy5fcmVsZWFzZSAmJiB0aGlzLl9yZWxlYXNlLl9pc0FjdGl2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoZSBpdGVtIGRlc3Ryb3llZD9cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgSXRlbS5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0Rlc3Ryb3llZDtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBwcm90b3R5cGUgbWV0aG9kc1xuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBpdGVtJ3MgZGltZW5zaW9ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEl0ZW0ucHJvdG90eXBlXG4gICAqL1xuICBJdGVtLnByb3RvdHlwZS5fcmVmcmVzaERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5fdmlzaWJpbGl0eS5faXNIaWRkZW4pIHJldHVybjtcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB2YXIgZHJhZ1BsYWNlaG9sZGVyID0gdGhpcy5fZHJhZ1BsYWNlaG9sZGVyO1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgIHRoaXMuX3dpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSByZWN0LmhlaWdodDtcblxuICAgIC8vIENhbGN1bGF0ZSBtYXJnaW5zIChpZ25vcmUgbmVnYXRpdmUgbWFyZ2lucykuXG4gICAgdGhpcy5fbWFyZ2luTGVmdCA9IE1hdGgubWF4KDAsIGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnbWFyZ2luLWxlZnQnKSk7XG4gICAgdGhpcy5fbWFyZ2luUmlnaHQgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi1yaWdodCcpKTtcbiAgICB0aGlzLl9tYXJnaW5Ub3AgPSBNYXRoLm1heCgwLCBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ21hcmdpbi10b3AnKSk7XG4gICAgdGhpcy5fbWFyZ2luQm90dG9tID0gTWF0aC5tYXgoMCwgZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdtYXJnaW4tYm90dG9tJykpO1xuXG4gICAgLy8gS2VlcCBkcmFnIHBsYWNlaG9sZGVyJ3MgZGltZW5zaW9ucyBzeW5jZWQgd2l0aCB0aGUgaXRlbSdzLlxuICAgIGlmIChkcmFnUGxhY2Vob2xkZXIpIHtcbiAgICAgIGRyYWdQbGFjZWhvbGRlci51cGRhdGVEaW1lbnNpb25zKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2ggYW5kIHN0b3JlIGl0ZW0ncyBzb3J0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX3JlZnJlc2hTb3J0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgdmFyIGRhdGEgPSAodGhpcy5fc29ydERhdGEgPSB7fSk7XG4gICAgdmFyIGdldHRlcnMgPSB0aGlzLmdldEdyaWQoKS5fc2V0dGluZ3Muc29ydERhdGE7XG4gICAgdmFyIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gZ2V0dGVycykge1xuICAgICAgZGF0YVtwcm9wXSA9IGdldHRlcnNbcHJvcF0odGhpcywgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGl0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBJdGVtLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVFbGVtZW50PWZhbHNlXVxuICAgKi9cbiAgSXRlbS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmVFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm47XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdldEdyaWQoKTtcbiAgICB2YXIgc2V0dGluZ3MgPSBncmlkLl9zZXR0aW5ncztcbiAgICB2YXIgaW5kZXggPSBncmlkLl9pdGVtcy5pbmRleE9mKHRoaXMpO1xuXG4gICAgLy8gRGVzdHJveSBoYW5kbGVycy5cbiAgICB0aGlzLl9yZWxlYXNlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9taWdyYXRlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9sYXlvdXQuZGVzdHJveSgpO1xuICAgIHRoaXMuX3Zpc2liaWxpdHkuZGVzdHJveSgpO1xuICAgIHRoaXMuX2FuaW1hdGUuZGVzdHJveSgpO1xuICAgIHRoaXMuX2FuaW1hdGVDaGlsZC5kZXN0cm95KCk7XG4gICAgdGhpcy5fZHJhZ1BsYWNlaG9sZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kcmFnICYmIHRoaXMuX2RyYWcuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBpbmxpbmUgc3R5bGVzLlxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIHRoaXMuX2NoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGNsYXNzLlxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLml0ZW1DbGFzcyk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIEdyaWQgaW5zdGFuY2UgaWYgaXQgc3RpbGwgZXhpc3RzIHRoZXJlLlxuICAgIGluZGV4ID4gLTEgJiYgZ3JpZC5faXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIFJlbW92ZSBlbGVtZW50IGZyb20gRE9NLlxuICAgIHJlbW92ZUVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXG4gICAgLy8gUmVzZXQgc3RhdGUuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgbGF5b3V0IGFsZ29yaXRobSBmb3IgTXV1cmkuIEJhc2VkIG9uIE1BWFJFQ1RTIGFwcHJvYWNoXG4gICAqIGFzIGRlc2NyaWJlZCBieSBKdWtrYSBKeWzDpG5raSBpbiBoaXMgc3VydmV5OiBcIkEgVGhvdXNhbmQgV2F5cyB0byBQYWNrIHRoZVxuICAgKiBCaW4gLSBBIFByYWN0aWNhbCBBcHByb2FjaCB0byBUd28tRGltZW5zaW9uYWwgUmVjdGFuZ2xlIEJpbiBQYWNraW5nLlwiLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFBhY2tlcigpIHtcbiAgICB0aGlzLl9zbG90cyA9IFtdO1xuICAgIHRoaXMuX3Nsb3RTaXplcyA9IFtdO1xuICAgIHRoaXMuX2ZyZWVTbG90cyA9IFtdO1xuICAgIHRoaXMuX25ld1Nsb3RzID0gW107XG4gICAgdGhpcy5fcmVjdEl0ZW0gPSB7fTtcbiAgICB0aGlzLl9yZWN0U3RvcmUgPSBbXTtcbiAgICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gICAgLy8gVGhlIGxheW91dCByZXR1cm4gZGF0YSwgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgaW4gZ2V0TGF5b3V0LlxuICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgIHNsb3RzOiBudWxsLFxuICAgICAgc2V0V2lkdGg6IGZhbHNlLFxuICAgICAgc2V0SGVpZ2h0OiBmYWxzZSxcbiAgICAgIHdpZHRoOiBmYWxzZSxcbiAgICAgIGhlaWdodDogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gQmluZCBzb3J0IGhhbmRsZXJzLlxuICAgIHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgPSB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc29ydFJlY3RzVG9wTGVmdCA9IHRoaXMuX3NvcnRSZWN0c1RvcExlZnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcGFyYW0ge051bWJlcltdfSBbc2xvdHNdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maWxsR2Fwcz1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ob3Jpem9udGFsPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduUmlnaHQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxpZ25Cb3R0b209ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtMYXlvdXREYXRhfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbihpdGVtcywgd2lkdGgsIGhlaWdodCwgc2xvdHMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgIHZhciBmaWxsR2FwcyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5maWxsR2Fwcyk7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3Jpem9udGFsKTtcbiAgICB2YXIgYWxpZ25SaWdodCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnblJpZ2h0KTtcbiAgICB2YXIgYWxpZ25Cb3R0b20gPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25Cb3R0b20pO1xuICAgIHZhciByb3VuZGluZyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5yb3VuZGluZyk7XG4gICAgdmFyIHNsb3RTaXplcyA9IHRoaXMuX3Nsb3RTaXplcztcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlc2V0IGxheW91dCBkYXRhLlxuICAgIGxheW91dC5zbG90cyA9IHNsb3RzID8gc2xvdHMgOiB0aGlzLl9zbG90cztcbiAgICBsYXlvdXQud2lkdGggPSBpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKHdpZHRoKSA6IHdpZHRoO1xuICAgIGxheW91dC5oZWlnaHQgPSAhaXNIb3Jpem9udGFsID8gMCA6IHJvdW5kaW5nID8gTWF0aC5yb3VuZChoZWlnaHQpIDogaGVpZ2h0O1xuICAgIGxheW91dC5zZXRXaWR0aCA9IGlzSG9yaXpvbnRhbDtcbiAgICBsYXlvdXQuc2V0SGVpZ2h0ID0gIWlzSG9yaXpvbnRhbDtcblxuICAgIC8vIE1ha2Ugc3VyZSBzbG90cyBhbmQgc2xvdCBzaXplIGFycmF5cyBhcmUgcmVzZXQuXG4gICAgbGF5b3V0LnNsb3RzLmxlbmd0aCA9IDA7XG4gICAgc2xvdFNpemVzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBObyBuZWVkIHRvIGdvIGZ1cnRoZXIgaWYgaXRlbXMgZG8gbm90IGV4aXN0LlxuICAgIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm4gbGF5b3V0O1xuXG4gICAgLy8gRmluZCBzbG90cyBmb3IgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9hZGRTbG90KGl0ZW1zW2ldLCBpc0hvcml6b250YWwsIGZpbGxHYXBzLCByb3VuZGluZywgYWxpZ25SaWdodCB8fCBhbGlnbkJvdHRvbSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGFsaWdubWVudCBpcyBzZXQgdG8gcmlnaHQgd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gICAgaWYgKGFsaWduUmlnaHQpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXlvdXQuc2xvdHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LndpZHRoIC0gKGxheW91dC5zbG90c1tpXSArIHNsb3RTaXplc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGFsaWdubWVudCBpcyBzZXQgdG8gYm90dG9tIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSByZXN1bHRzLlxuICAgIGlmIChhbGlnbkJvdHRvbSkge1xuICAgICAgZm9yIChpID0gMTsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICBsYXlvdXQuc2xvdHNbaV0gPSBsYXlvdXQuaGVpZ2h0IC0gKGxheW91dC5zbG90c1tpXSArIHNsb3RTaXplc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgc2xvdHMgYXJyYXlzIGFuZCByZWN0IGlkLlxuICAgIHNsb3RTaXplcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZyZWVTbG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX25ld1Nsb3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fcmVjdElkID0gMDtcblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwb3NpdGlvbiBmb3IgdGhlIGxheW91dCBpdGVtLiBSZXR1cm5zIHRoZSBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICogb2YgdGhlIGl0ZW0gaW4gcGl4ZWxzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtCb29sZWFufSBpc0hvcml6b250YWxcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaWxsR2Fwc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJvdW5kaW5nXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2FkZFNsb3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVwcyA9IDAuMDAxO1xuICAgIHZhciBpdGVtU2xvdCA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBpc0hvcml6b250YWwsIGZpbGxHYXBzLCByb3VuZGluZywgdHJhY2tTaXplKSB7XG4gICAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgICAgdmFyIGZyZWVTbG90cyA9IHRoaXMuX2ZyZWVTbG90cztcbiAgICAgIHZhciBuZXdTbG90cyA9IHRoaXMuX25ld1Nsb3RzO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICB2YXIgcmVjdElkO1xuICAgICAgdmFyIHBvdGVudGlhbFNsb3RzO1xuICAgICAgdmFyIGlnbm9yZUN1cnJlbnRTbG90cztcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGlpO1xuXG4gICAgICAvLyBSZXNldCBuZXcgc2xvdHMuXG4gICAgICBuZXdTbG90cy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBTZXQgaXRlbSBzbG90IGluaXRpYWwgZGF0YS5cbiAgICAgIGl0ZW1TbG90LmxlZnQgPSBudWxsO1xuICAgICAgaXRlbVNsb3QudG9wID0gbnVsbDtcbiAgICAgIGl0ZW1TbG90LndpZHRoID0gaXRlbS5fd2lkdGggKyBpdGVtLl9tYXJnaW5MZWZ0ICsgaXRlbS5fbWFyZ2luUmlnaHQ7XG4gICAgICBpdGVtU2xvdC5oZWlnaHQgPSBpdGVtLl9oZWlnaHQgKyBpdGVtLl9tYXJnaW5Ub3AgKyBpdGVtLl9tYXJnaW5Cb3R0b207XG5cbiAgICAgIC8vIFJvdW5kIGl0ZW0gc2xvdCB3aWR0aCBhbmQgaGVpZ2h0IGlmIG5lZWRlZC5cbiAgICAgIGlmIChyb3VuZGluZykge1xuICAgICAgICBpdGVtU2xvdC53aWR0aCA9IE1hdGgucm91bmQoaXRlbVNsb3Qud2lkdGgpO1xuICAgICAgICBpdGVtU2xvdC5oZWlnaHQgPSBNYXRoLnJvdW5kKGl0ZW1TbG90LmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byBmaW5kIGEgc2xvdCBmb3IgdGhlIGl0ZW0uXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgICAgaWYgKCFyZWN0SWQpIGNvbnRpbnVlO1xuICAgICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgICBpZiAoaXRlbVNsb3Qud2lkdGggPD0gcmVjdC53aWR0aCArIGVwcyAmJiBpdGVtU2xvdC5oZWlnaHQgPD0gcmVjdC5oZWlnaHQgKyBlcHMpIHtcbiAgICAgICAgICBpdGVtU2xvdC5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgICAgICAgIGl0ZW1TbG90LnRvcCA9IHJlY3QudG9wO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIHNsb3Qgd2FzIGZvdW5kIGZvciB0aGUgaXRlbS5cbiAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpdGVtIGluIHRvIHRoZSBib3R0b20gbGVmdCAodmVydGljYWwgbW9kZSkgb3IgdG9wIHJpZ2h0XG4gICAgICAgIC8vIChob3Jpem9udGFsIG1vZGUpIG9mIHRoZSBncmlkLlxuICAgICAgICBpdGVtU2xvdC5sZWZ0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiBsYXlvdXQud2lkdGg7XG4gICAgICAgIGl0ZW1TbG90LnRvcCA9ICFpc0hvcml6b250YWwgPyBsYXlvdXQuaGVpZ2h0IDogMDtcblxuICAgICAgICAvLyBJZiBnYXBzIGRvbid0IG5lZWQgZmlsbGluZyBkbyBub3QgYWRkIGFueSBjdXJyZW50IHNsb3RzIHRvIHRoZSBuZXdcbiAgICAgICAgLy8gc2xvdHMgYXJyYXkuXG4gICAgICAgIGlmICghZmlsbEdhcHMpIHtcbiAgICAgICAgICBpZ25vcmVDdXJyZW50U2xvdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEluIHZlcnRpY2FsIG1vZGUsIGlmIHRoZSBpdGVtJ3MgYm90dG9tIG92ZXJsYXBzIHRoZSBncmlkJ3MgYm90dG9tLlxuICAgICAgaWYgKCFpc0hvcml6b250YWwgJiYgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0ID4gbGF5b3V0LmhlaWdodCkge1xuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBsZWZ0IGVkZ2UsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QubGVmdCA+IDApIHtcbiAgICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QoMCwgbGF5b3V0LmhlaWdodCwgaXRlbVNsb3QubGVmdCwgSW5maW5pdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHJpZ2h0IGVkZ2UsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoIDwgbGF5b3V0LndpZHRoKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICAgIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICAgICAgbGF5b3V0LndpZHRoIC0gaXRlbVNsb3QubGVmdCAtIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgICBJbmZpbml0eVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ3JpZCBoZWlnaHQuXG4gICAgICAgIGxheW91dC5oZWlnaHQgPSBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIGhvcml6b250YWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyByaWdodCBvdmVybGFwcyB0aGUgZ3JpZCdzIHJpZ2h0IGVkZ2UuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsICYmIGl0ZW1TbG90LmxlZnQgKyBpdGVtU2xvdC53aWR0aCA+IGxheW91dC53aWR0aCkge1xuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSB0b3AsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgICBpZiAoaXRlbVNsb3QudG9wID4gMCkge1xuICAgICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdChsYXlvdXQud2lkdGgsIDAsIEluZmluaXR5LCBpdGVtU2xvdC50b3ApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGJvdHRvbSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICAgIGlmIChpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPCBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgICAgICAgaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0LFxuICAgICAgICAgICAgICBJbmZpbml0eSxcbiAgICAgICAgICAgICAgbGF5b3V0LmhlaWdodCAtIGl0ZW1TbG90LnRvcCAtIGl0ZW1TbG90LmhlaWdodFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ3JpZCB3aWR0aC5cbiAgICAgICAgbGF5b3V0LndpZHRoID0gaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cCB0aGUgY3VycmVudCBzbG90cyBtYWtpbmcgc3VyZSB0aGVyZSBhcmUgbm8gb2xkIHNsb3RzIHRoYXRcbiAgICAgIC8vIG92ZXJsYXAgd2l0aCB0aGUgaXRlbS4gSWYgYW4gb2xkIHNsb3Qgb3ZlcmxhcHMgd2l0aCB0aGUgaXRlbSwgc3BsaXQgaXRcbiAgICAgIC8vIGludG8gc21hbGxlciBzbG90cyBpZiBuZWNlc3NhcnkuXG4gICAgICBmb3IgKGkgPSBmaWxsR2FwcyA/IDAgOiBpZ25vcmVDdXJyZW50U2xvdHMgPyBmcmVlU2xvdHMubGVuZ3RoIDogaTsgaSA8IGZyZWVTbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgcG90ZW50aWFsU2xvdHMgPSB0aGlzLl9zcGxpdFJlY3QocmVjdCwgaXRlbVNsb3QpO1xuICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBwb3RlbnRpYWxTbG90cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICByZWN0SWQgPSBwb3RlbnRpYWxTbG90c1tpaV07XG4gICAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgICAvLyBMZXQncyBtYWtlIHN1cmUgaGVyZSB0aGF0IHdlIGhhdmUgYSBiaWcgZW5vdWdoIHNsb3RcbiAgICAgICAgICAvLyAod2lkdGgvaGVpZ2h0ID4gMC40OXB4KSBhbmQgYWxzbyBsZXQncyBtYWtlIHN1cmUgdGhhdCB0aGUgc2xvdCBpc1xuICAgICAgICAgIC8vIHdpdGhpbiB0aGUgYm91bmRhcmllcyBvZiB0aGUgZ3JpZC5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZWN0LndpZHRoID4gMC40OSAmJlxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgPiAwLjQ5ICYmXG4gICAgICAgICAgICAoKCFpc0hvcml6b250YWwgJiYgcmVjdC50b3AgPCBsYXlvdXQuaGVpZ2h0KSB8fFxuICAgICAgICAgICAgICAoaXNIb3Jpem9udGFsICYmIHJlY3QubGVmdCA8IGxheW91dC53aWR0aCkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBuZXdTbG90cy5wdXNoKHJlY3RJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNhbml0aXplIG5ldyBzbG90cy5cbiAgICAgIGlmIChuZXdTbG90cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcHVyZ2VSZWN0cyhuZXdTbG90cykuc29ydChcbiAgICAgICAgICBpc0hvcml6b250YWwgPyB0aGlzLl9zb3J0UmVjdHNMZWZ0VG9wIDogdGhpcy5fc29ydFJlY3RzVG9wTGVmdFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgbGF5b3V0IHdpZHRoL2hlaWdodC5cbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgbGF5b3V0LndpZHRoID0gTWF0aC5tYXgobGF5b3V0LndpZHRoLCBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IE1hdGgubWF4KGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBpdGVtIHNsb3QgZGF0YSB0byBsYXlvdXQgc2xvdHMgKGFuZCBzdG9yZSB0aGUgc2xvdCBzaXplIGZvciBsYXRlclxuICAgICAgLy8gdXNhZ2UgdG9vIGlmIG5lY2Vzc2FyeSkuXG4gICAgICBsYXlvdXQuc2xvdHMucHVzaChpdGVtU2xvdC5sZWZ0LCBpdGVtU2xvdC50b3ApO1xuICAgICAgaWYgKHRyYWNrU2l6ZSkgdGhpcy5fc2xvdFNpemVzLnB1c2goaXRlbVNsb3Qud2lkdGgsIGl0ZW1TbG90LmhlaWdodCk7XG5cbiAgICAgIC8vIEZyZWUvbmV3IHNsb3RzIHN3aXRjaGVyb28hXG4gICAgICB0aGlzLl9mcmVlU2xvdHMgPSBuZXdTbG90cztcbiAgICAgIHRoaXMuX25ld1Nsb3RzID0gZnJlZVNsb3RzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyByZWN0YW5nbGUgdG8gdGhlIHJlY3RhbmdsZSBzdG9yZS4gUmV0dXJucyB0aGUgaWQgb2YgdGhlIG5ld1xuICAgKiByZWN0YW5nbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3BcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHJldHVybnMge1JlY3RJZH1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX2FkZFJlY3QgPSBmdW5jdGlvbihsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgcmVjdElkID0gKyt0aGlzLl9yZWN0SWQ7XG4gICAgdmFyIHJlY3RTdG9yZSA9IHRoaXMuX3JlY3RTdG9yZTtcblxuICAgIHJlY3RTdG9yZVtyZWN0SWRdID0gbGVmdCB8fCAwO1xuICAgIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB0b3AgfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gd2lkdGggfHwgMDtcbiAgICByZWN0U3RvcmVbKyt0aGlzLl9yZWN0SWRdID0gaGVpZ2h0IHx8IDA7XG5cbiAgICByZXR1cm4gcmVjdElkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcmVjdGFuZ2xlIGRhdGEgZnJvbSB0aGUgcmVjdGFuZ2xlIHN0b3JlIGJ5IGlkLiBPcHRpb25hbGx5IHlvdSBjYW5cbiAgICogcHJvdmlkZSBhIHRhcmdldCBvYmplY3Qgd2hlcmUgdGhlIHJlY3RhbmdsZSBkYXRhIHdpbGwgYmUgd3JpdHRlbiBpbi4gQnlcbiAgICogZGVmYXVsdCBhbiBpbnRlcm5hbCBvYmplY3QgaXMgcmV1c2VkIGFzIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0XVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fZ2V0UmVjdCA9IGZ1bmN0aW9uKGlkLCB0YXJnZXQpIHtcbiAgICB2YXIgcmVjdEl0ZW0gPSB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLl9yZWN0SXRlbTtcbiAgICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gICAgcmVjdEl0ZW0ubGVmdCA9IHJlY3RTdG9yZVtpZF0gfHwgMDtcbiAgICByZWN0SXRlbS50b3AgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcbiAgICByZWN0SXRlbS53aWR0aCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICAgIHJlY3RJdGVtLmhlaWdodCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuXG4gICAgcmV0dXJuIHJlY3RJdGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdW5jaCBhIGhvbGUgaW50byBhIHJlY3RhbmdsZSBhbmQgc3BsaXQgdGhlIHJlbWFpbmluZyBhcmVhIGludG8gc21hbGxlclxuICAgKiByZWN0YW5nbGVzICg0IGF0IG1heCkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSByZWN0XG4gICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBob2xlXG4gICAqIEByZXR1cm5zIHtSZWN0SWRbXX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3NwbGl0UmVjdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbihyZWN0LCBob2xlKSB7XG4gICAgICAvLyBSZXNldCBvbGQgcmVzdWx0cy5cbiAgICAgIHJlc3VsdHMubGVuZ3RoID0gMDtcblxuICAgICAgLy8gSWYgdGhlIHJlY3QgZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIHRoZSBob2xlIGFkZCByZWN0IHRvIHRoZSByZXR1cm4gZGF0YVxuICAgICAgLy8gYXMgaXMuXG4gICAgICBpZiAoIXRoaXMuX2RvUmVjdHNPdmVybGFwKHJlY3QsIGhvbGUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9hZGRSZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuXG4gICAgICAvLyBMZWZ0IHNwbGl0LlxuICAgICAgaWYgKHJlY3QubGVmdCA8IGhvbGUubGVmdCkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCBob2xlLmxlZnQgLSByZWN0LmxlZnQsIHJlY3QuaGVpZ2h0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJpZ2h0IHNwbGl0LlxuICAgICAgaWYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggPiBob2xlLmxlZnQgKyBob2xlLndpZHRoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCxcbiAgICAgICAgICAgIHJlY3QudG9wLFxuICAgICAgICAgICAgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAtIChob2xlLmxlZnQgKyBob2xlLndpZHRoKSxcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBUb3Agc3BsaXQuXG4gICAgICBpZiAocmVjdC50b3AgPCBob2xlLnRvcCkge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCBob2xlLnRvcCAtIHJlY3QudG9wKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdHRvbSBzcGxpdC5cbiAgICAgIGlmIChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0ID4gaG9sZS50b3AgKyBob2xlLmhlaWdodCkge1xuICAgICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgICAgdGhpcy5fYWRkUmVjdChcbiAgICAgICAgICAgIHJlY3QubGVmdCxcbiAgICAgICAgICAgIGhvbGUudG9wICsgaG9sZS5oZWlnaHQsXG4gICAgICAgICAgICByZWN0LndpZHRoLFxuICAgICAgICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAtIChob2xlLnRvcCArIGhvbGUuaGVpZ2h0KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHJlY3RhbmdsZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9kb1JlY3RzT3ZlcmxhcCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgICBiLmxlZnQgKyBiLndpZHRoIDw9IGEubGVmdCB8fFxuICAgICAgYS50b3AgKyBhLmhlaWdodCA8PSBiLnRvcCB8fFxuICAgICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgcmVjdGFuZ2xlIGlzIGZ1bGx5IHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9pc1JlY3RXaXRoaW5SZWN0ID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiAoXG4gICAgICBhLmxlZnQgPj0gYi5sZWZ0ICYmXG4gICAgICBhLnRvcCA+PSBiLnRvcCAmJlxuICAgICAgYS5sZWZ0ICsgYS53aWR0aCA8PSBiLmxlZnQgKyBiLndpZHRoICYmXG4gICAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wICsgYi5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb29wcyB0aHJvdWdoIGFuIGFycmF5IG9mIHJlY3RhbmdsZSBpZHMgYW5kIHJlc2V0cyBhbGwgdGhhdCBhcmUgZnVsbHlcbiAgICogd2l0aGluIGFub3RoZXIgcmVjdGFuZ2xlIGluIHRoZSBhcnJheS4gUmVzZXR0aW5nIGluIHRoaXMgY2FzZSBtZWFucyB0aGF0XG4gICAqIHRoZSByZWN0YW5nbGUgaWQgdmFsdWUgaXMgcmVwbGFjZWQgd2l0aCB6ZXJvLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1JlY3RJZFtdfSByZWN0SWRzXG4gICAqIEByZXR1cm5zIHtSZWN0SWRbXX1cbiAgICovXG4gIFBhY2tlci5wcm90b3R5cGUuX3B1cmdlUmVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY3RBID0ge307XG4gICAgdmFyIHJlY3RCID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RJZHMpIHtcbiAgICAgIHZhciBpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICB2YXIgaWk7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWkgPSByZWN0SWRzLmxlbmd0aDtcbiAgICAgICAgaWYgKCFyZWN0SWRzW2ldKSBjb250aW51ZTtcbiAgICAgICAgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2ldLCByZWN0QSk7XG4gICAgICAgIHdoaWxlIChpaS0tKSB7XG4gICAgICAgICAgaWYgKCFyZWN0SWRzW2lpXSB8fCBpID09PSBpaSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzUmVjdFdpdGhpblJlY3QocmVjdEEsIHRoaXMuX2dldFJlY3QocmVjdElkc1tpaV0sIHJlY3RCKSkpIHtcbiAgICAgICAgICAgIHJlY3RJZHNbaV0gPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWN0SWRzO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIFNvcnQgcmVjdGFuZ2xlcyB3aXRoIHRvcC1sZWZ0IGdyYXZpdHkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7UmVjdElkfSBhSWRcbiAgICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cbiAgUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzVG9wTGVmdCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjdEEgPSB7fTtcbiAgICB2YXIgcmVjdEIgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICAgIHRoaXMuX2dldFJlY3QoYUlkLCByZWN0QSk7XG4gICAgICB0aGlzLl9nZXRSZWN0KGJJZCwgcmVjdEIpO1xuICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICByZXR1cm4gcmVjdEEudG9wIDwgcmVjdEIudG9wID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICAgIHJlY3RBLmxlZnQgPiByZWN0Qi5sZWZ0ID8gMSA6IDA7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogU29ydCByZWN0YW5nbGVzIHdpdGggbGVmdC10b3AgZ3Jhdml0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICAgKiBAcGFyYW0ge1JlY3RJZH0gYklkXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBQYWNrZXIucHJvdG90eXBlLl9zb3J0UmVjdHNMZWZ0VG9wID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWN0QSA9IHt9O1xuICAgIHZhciByZWN0QiA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbihhSWQsIGJJZCkge1xuICAgICAgdGhpcy5fZ2V0UmVjdChhSWQsIHJlY3RBKTtcbiAgICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHJldHVybiByZWN0QS5sZWZ0IDwgcmVjdEIubGVmdCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOlxuICAgICAgICAgICAgIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgICByZWN0QS50b3AgPiByZWN0Qi50b3AgPyAxIDogMDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHZhciBodG1sQ29sbGVjdGlvblR5cGUgPSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nO1xuICB2YXIgbm9kZUxpc3RUeXBlID0gJ1tvYmplY3QgTm9kZUxpc3RdJztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG5vZGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICByZXR1cm4gdHlwZSA9PT0gaHRtbENvbGxlY3Rpb25UeXBlIHx8IHR5cGUgPT09IG5vZGVMaXN0VHlwZTtcbiAgfVxuXG4gIHZhciBvYmplY3RUeXBlID0gJ29iamVjdCc7XG4gIHZhciBvYmplY3RUb1N0cmluZ1R5cGUgPSAnW29iamVjdCBPYmplY3RdJztcbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBvYmplY3RUeXBlICYmIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gb2JqZWN0VG9TdHJpbmdUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYW4gYXJyYXkgb3IgY2xvbmVzIGFuIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBpc05vZGVMaXN0KHRhcmdldCkgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpIDogQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQpO1xuICB9XG5cbiAgdmFyIHBhY2tlciA9IG5ldyBQYWNrZXIoKTtcbiAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHZhciBudW1iZXJUeXBlJDEgPSAnbnVtYmVyJztcbiAgdmFyIHN0cmluZ1R5cGUgPSAnc3RyaW5nJztcbiAgdmFyIGluc3RhbnRMYXlvdXQgPSAnaW5zdGFudCc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR3JpZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFN0cmluZyl9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0gez8oSFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxTdHJpbmcpfSBbb3B0aW9ucy5pdGVtc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNob3dEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zaG93RWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMudmlzaWJsZVN0eWxlc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmhpZGVEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5oaWRlRWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGlkZGVuU3R5bGVzXVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBbb3B0aW9ucy5sYXlvdXRdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0LmZpbGxHYXBzPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5ob3Jpem9udGFsPWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5hbGlnblJpZ2h0PWZhbHNlXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxheW91dC5hbGlnbkJvdHRvbT1mYWxzZV1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sYXlvdXQucm91bmRpbmc9dHJ1ZV1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxOdW1iZXIpfSBbb3B0aW9ucy5sYXlvdXRPblJlc2l6ZT0xMDBdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubGF5b3V0T25Jbml0PXRydWVdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5sYXlvdXREdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sYXlvdXRFYXNpbmc9XCJlYXNlXCJdXG4gICAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnMuc29ydERhdGE9bnVsbF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kcmFnRW5hYmxlZD1mYWxzZV1cbiAgICogQHBhcmFtIHs/SHRtbEVsZW1lbnR9IFtvcHRpb25zLmRyYWdDb250YWluZXI9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTdGFydFByZWRpY2F0ZS5kaXN0YW5jZT0wXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmRlbGF5PTBdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58U3RyaW5nKX0gW29wdGlvbnMuZHJhZ1N0YXJ0UHJlZGljYXRlLmhhbmRsZT1mYWxzZV1cbiAgICogQHBhcmFtIHs/U3RyaW5nfSBbb3B0aW9ucy5kcmFnQXhpc11cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxGdW5jdGlvbil9IFtvcHRpb25zLmRyYWdTb3J0PXRydWVdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3NdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3Muc29ydEludGVydmFsPTEwMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdTb3J0SGV1cmlzdGljcy5taW5EcmFnRGlzdGFuY2U9MTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kcmFnU29ydEhldXJpc3RpY3MubWluQm91bmNlQmFja0FuZ2xlPTFdXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IFtvcHRpb25zLmRyYWdTb3J0UHJlZGljYXRlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGUudGhyZXNob2xkPTUwXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZHJhZ1NvcnRQcmVkaWNhdGUuYWN0aW9uPVwibW92ZVwiXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZHJhZ1JlbGVhc2VEdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnUmVsZWFzZUVhc2luZz1cImVhc2VcIl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdDc3NQcm9wc11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlcl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZW5hYmxlZD1mYWxzZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5kdXJhdGlvbj0zMDBdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kcmFnUGxhY2Vob2xkZXIuZWFzaW5nPVwiZWFzZVwiXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLmNyZWF0ZUVsZW1lbnQ9bnVsbF1cbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IFtvcHRpb25zLmRyYWdQbGFjZWhvbGRlci5vbkNyZWF0ZT1udWxsXVxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gW29wdGlvbnMuZHJhZ1BsYWNlaG9sZGVyLm9uUmVtb3ZlPW51bGxdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jb250YWluZXJDbGFzcz1cIm11dXJpXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtQ2xhc3M9XCJtdXVyaS1pdGVtXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtVmlzaWJsZUNsYXNzPVwibXV1cmktaXRlbS12aXNpYmxlXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtSGlkZGVuQ2xhc3M9XCJtdXVyaS1pdGVtLWhpZGRlblwiXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaXRlbVBvc2l0aW9uaW5nQ2xhc3M9XCJtdXVyaS1pdGVtLXBvc2l0aW9uaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtRHJhZ2dpbmdDbGFzcz1cIm11dXJpLWl0ZW0tZHJhZ2dpbmdcIl1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLml0ZW1SZWxlYXNpbmdDbGFzcz1cIm11dXJpLWl0ZW0tcmVsZWFzaW5nXCJdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pdGVtUGxhY2Vob2xkZXJDbGFzcz1cIm11dXJpLWl0ZW0tcGxhY2Vob2xkZXJcIl1cbiAgICovXG5cbiAgZnVuY3Rpb24gR3JpZChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGluc3QgPSB0aGlzO1xuICAgIHZhciBzZXR0aW5ncztcbiAgICB2YXIgaXRlbXM7XG4gICAgdmFyIGxheW91dE9uUmVzaXplO1xuXG4gICAgLy8gQWxsb3cgcGFzc2luZyBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZy4gU3RvcmUgZWxlbWVudCBmb3IgaW5zdGFuY2UuXG4gICAgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQgPVxuICAgICAgdHlwZW9mIGVsZW1lbnQgPT09IHN0cmluZ1R5cGUgPyB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgaXMgbm90IGJvZHkgZWxlbWVudCBvciBkb2VzIG5vdFxuICAgIC8vIGV4aXN0IHdpdGhpbiB0aGUgYm9keSBlbGVtZW50LlxuICAgIHZhciBpc0VsZW1lbnRJbkRvbSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGVcbiAgICAgID8gZWxlbWVudC5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID09PSBkb2N1bWVudFxuICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyhlbGVtZW50KTtcbiAgICBpZiAoIWlzRWxlbWVudEluRG9tIHx8IGVsZW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhbiBleGlzdGluZyBET00gZWxlbWVudCcpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBzZXR0aW5ncyBieSBtZXJnaW5nIHRoZSBvcHRpb25zIHdpdGggZGVmYXVsdCBvcHRpb25zLlxuICAgIHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MgPSBtZXJnZVNldHRpbmdzKEdyaWQuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgLy8gU2FuaXRpemUgZHJhZ1NvcnQgc2V0dGluZy5cbiAgICBpZiAoIWlzRnVuY3Rpb24oc2V0dGluZ3MuZHJhZ1NvcnQpKSB7XG4gICAgICBzZXR0aW5ncy5kcmFnU29ydCA9ICEhc2V0dGluZ3MuZHJhZ1NvcnQ7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIGlkIGFuZCBzdG9yZSBpdCB0byB0aGUgZ3JpZCBpbnN0YW5jZXMgY29sbGVjdGlvbi5cbiAgICB0aGlzLl9pZCA9IGNyZWF0ZVVpZCgpO1xuICAgIGdyaWRJbnN0YW5jZXNbdGhpcy5faWRdID0gaW5zdDtcblxuICAgIC8vIERlc3Ryb3llZCBmbGFnLlxuICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgbGF5b3V0IG9iamVjdCAobXV0YXRlZCBvbiBldmVyeSBsYXlvdXQpLlxuICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgc2xvdHM6IFtdLFxuICAgICAgc2V0V2lkdGg6IGZhbHNlLFxuICAgICAgc2V0SGVpZ2h0OiBmYWxzZSxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBwcml2YXRlIEVtaXR0ZXIgaW5zdGFuY2UuXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgICAvLyBBZGQgY29udGFpbmVyIGVsZW1lbnQncyBjbGFzcyBuYW1lLlxuICAgIGFkZENsYXNzKGVsZW1lbnQsIHNldHRpbmdzLmNvbnRhaW5lckNsYXNzKTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGl0ZW1zLlxuICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgaXRlbXMgPSBzZXR0aW5ncy5pdGVtcztcbiAgICBpZiAodHlwZW9mIGl0ZW1zID09PSBzdHJpbmdUeXBlKSB7XG4gICAgICB0b0FycmF5KGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24oaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGl0ZW1zID09PSAnKicgfHwgZWxlbWVudE1hdGNoZXMoaXRlbUVsZW1lbnQsIGl0ZW1zKSkge1xuICAgICAgICAgIGluc3QuX2l0ZW1zLnB1c2gobmV3IEl0ZW0oaW5zdCwgaXRlbUVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSB8fCBpc05vZGVMaXN0KGl0ZW1zKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0b0FycmF5KGl0ZW1zKS5tYXAoZnVuY3Rpb24oaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVtKGluc3QsIGl0ZW1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dE9uUmVzaXplIG9wdGlvbiBpcyBhIHZhbGlkIG51bWJlciBzYW5pdGl6ZSBpdCBhbmQgYmluZCB0aGUgcmVzaXplXG4gICAgLy8gaGFuZGxlci5cbiAgICBsYXlvdXRPblJlc2l6ZSA9IHNldHRpbmdzLmxheW91dE9uUmVzaXplO1xuICAgIGlmICh0eXBlb2YgbGF5b3V0T25SZXNpemUgIT09IG51bWJlclR5cGUkMSkge1xuICAgICAgbGF5b3V0T25SZXNpemUgPSBsYXlvdXRPblJlc2l6ZSA9PT0gdHJ1ZSA/IDAgOiAtMTtcbiAgICB9XG4gICAgaWYgKGxheW91dE9uUmVzaXplID49IDApIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgKGluc3QuX3Jlc2l6ZUhhbmRsZXIgPSBkZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBpbnN0LnJlZnJlc2hJdGVtcygpLmxheW91dCgpO1xuICAgICAgICB9LCBsYXlvdXRPblJlc2l6ZSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIExheW91dCBvbiBpbml0IGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoc2V0dGluZ3MubGF5b3V0T25Jbml0KSB7XG4gICAgICB0aGlzLmxheW91dCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIHByb3BlcnRpZXNcbiAgICogKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVxuICAgKi9cbiAgR3JpZC5JdGVtID0gSXRlbTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtTGF5b3V0XG4gICAqL1xuICBHcmlkLkl0ZW1MYXlvdXQgPSBJdGVtTGF5b3V0O1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1WaXNpYmlsaXR5XG4gICAqL1xuICBHcmlkLkl0ZW1WaXNpYmlsaXR5ID0gSXRlbVZpc2liaWxpdHk7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbU1pZ3JhdGVcbiAgICovXG4gIEdyaWQuSXRlbU1pZ3JhdGUgPSBJdGVtTWlncmF0ZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtQW5pbWF0ZVxuICAgKi9cbiAgR3JpZC5JdGVtQW5pbWF0ZSA9IEl0ZW1BbmltYXRlO1xuXG4gIC8qKlxuICAgKiBAc2VlIEl0ZW1EcmFnXG4gICAqL1xuICBHcmlkLkl0ZW1EcmFnID0gSXRlbURyYWc7XG5cbiAgLyoqXG4gICAqIEBzZWUgSXRlbVJlbGVhc2VcbiAgICovXG4gIEdyaWQuSXRlbVJlbGVhc2UgPSBJdGVtUmVsZWFzZTtcblxuICAvKipcbiAgICogQHNlZSBJdGVtRHJhZ1BsYWNlaG9sZGVyXG4gICAqL1xuICBHcmlkLkl0ZW1EcmFnUGxhY2Vob2xkZXIgPSBJdGVtRHJhZ1BsYWNlaG9sZGVyO1xuXG4gIC8qKlxuICAgKiBAc2VlIEVtaXR0ZXJcbiAgICovXG4gIEdyaWQuRW1pdHRlciA9IEVtaXR0ZXI7XG5cbiAgLyoqXG4gICAqIEBzZWUgRHJhZ2dlclxuICAgKi9cbiAgR3JpZC5EcmFnZ2VyID0gRHJhZ2dlcjtcblxuICAvKipcbiAgICogQHNlZSBQYWNrZXJcbiAgICovXG4gIEdyaWQuUGFja2VyID0gUGFja2VyO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIEdyaWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWRcbiAgICovXG4gIEdyaWQuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gSXRlbSBlbGVtZW50c1xuICAgIGl0ZW1zOiAnKicsXG5cbiAgICAvLyBEZWZhdWx0IHNob3cgYW5pbWF0aW9uXG4gICAgc2hvd0R1cmF0aW9uOiAzMDAsXG4gICAgc2hvd0Vhc2luZzogJ2Vhc2UnLFxuXG4gICAgLy8gRGVmYXVsdCBoaWRlIGFuaW1hdGlvblxuICAgIGhpZGVEdXJhdGlvbjogMzAwLFxuICAgIGhpZGVFYXNpbmc6ICdlYXNlJyxcblxuICAgIC8vIEl0ZW0ncyB2aXNpYmxlL2hpZGRlbiBzdGF0ZSBzdHlsZXNcbiAgICB2aXNpYmxlU3R5bGVzOiB7XG4gICAgICBvcGFjaXR5OiAnMScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9LFxuICAgIGhpZGRlblN0eWxlczoge1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KSdcbiAgICB9LFxuXG4gICAgLy8gTGF5b3V0XG4gICAgbGF5b3V0OiB7XG4gICAgICBmaWxsR2FwczogZmFsc2UsXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIGFsaWduUmlnaHQ6IGZhbHNlLFxuICAgICAgYWxpZ25Cb3R0b206IGZhbHNlLFxuICAgICAgcm91bmRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxheW91dE9uUmVzaXplOiAxMDAsXG4gICAgbGF5b3V0T25Jbml0OiB0cnVlLFxuICAgIGxheW91dER1cmF0aW9uOiAzMDAsXG4gICAgbGF5b3V0RWFzaW5nOiAnZWFzZScsXG5cbiAgICAvLyBTb3J0aW5nXG4gICAgc29ydERhdGE6IG51bGwsXG5cbiAgICAvLyBEcmFnICYgRHJvcFxuICAgIGRyYWdFbmFibGVkOiBmYWxzZSxcbiAgICBkcmFnQ29udGFpbmVyOiBudWxsLFxuICAgIGRyYWdTdGFydFByZWRpY2F0ZToge1xuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBkZWxheTogMCxcbiAgICAgIGhhbmRsZTogZmFsc2VcbiAgICB9LFxuICAgIGRyYWdBeGlzOiBudWxsLFxuICAgIGRyYWdTb3J0OiB0cnVlLFxuICAgIGRyYWdTb3J0SGV1cmlzdGljczoge1xuICAgICAgc29ydEludGVydmFsOiAxMDAsXG4gICAgICBtaW5EcmFnRGlzdGFuY2U6IDEwLFxuICAgICAgbWluQm91bmNlQmFja0FuZ2xlOiAxXG4gICAgfSxcbiAgICBkcmFnU29ydFByZWRpY2F0ZToge1xuICAgICAgdGhyZXNob2xkOiA1MCxcbiAgICAgIGFjdGlvbjogYWN0aW9uTW92ZVxuICAgIH0sXG4gICAgZHJhZ1JlbGVhc2VEdXJhdGlvbjogMzAwLFxuICAgIGRyYWdSZWxlYXNlRWFzaW5nOiAnZWFzZScsXG4gICAgZHJhZ0Nzc1Byb3BzOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdXNlckRyYWc6ICdub25lJyxcbiAgICAgIHRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICB0b3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICAgIGNvbnRlbnRab29taW5nOiAnbm9uZSdcbiAgICB9LFxuICAgIGRyYWdQbGFjZWhvbGRlcjoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnZWFzZScsXG4gICAgICBjcmVhdGVFbGVtZW50OiBudWxsLFxuICAgICAgb25DcmVhdGU6IG51bGwsXG4gICAgICBvblJlbW92ZTogbnVsbFxuICAgIH0sXG5cbiAgICAvLyBDbGFzc25hbWVzXG4gICAgY29udGFpbmVyQ2xhc3M6ICdtdXVyaScsXG4gICAgaXRlbUNsYXNzOiAnbXV1cmktaXRlbScsXG4gICAgaXRlbVZpc2libGVDbGFzczogJ211dXJpLWl0ZW0tc2hvd24nLFxuICAgIGl0ZW1IaWRkZW5DbGFzczogJ211dXJpLWl0ZW0taGlkZGVuJyxcbiAgICBpdGVtUG9zaXRpb25pbmdDbGFzczogJ211dXJpLWl0ZW0tcG9zaXRpb25pbmcnLFxuICAgIGl0ZW1EcmFnZ2luZ0NsYXNzOiAnbXV1cmktaXRlbS1kcmFnZ2luZycsXG4gICAgaXRlbVJlbGVhc2luZ0NsYXNzOiAnbXV1cmktaXRlbS1yZWxlYXNpbmcnLFxuICAgIGl0ZW1QbGFjZWhvbGRlckNsYXNzOiAnbXV1cmktaXRlbS1wbGFjZWhvbGRlcidcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHByb3RvdHlwZSBtZXRob2RzXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogQmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGl0ZW1zLiBPcHRpb25hbGx5IHlvdSBjYW4gcHJvdmlkZSBzcGVjaWZpYyB0YXJnZXRzIChlbGVtZW50cyBhbmRcbiAgICogaW5kaWNlcykuIE5vdGUgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgaXMgbm90IHRoZSBzYW1lIG9iamVjdCB1c2VkIGJ5IHRoZVxuICAgKiBpbnN0YW5jZSBzbyBtb2RpZnlpbmcgaXQgd2lsbCBub3QgYWZmZWN0IGluc3RhbmNlJ3MgaXRlbXMuIEFsbCBpdGVtcyB0aGF0XG4gICAqIGFyZSBub3QgZm91bmQgYXJlIG9taXR0ZWQgZnJvbSB0aGUgcmV0dXJuZWQgYXJyYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbdGFyZ2V0c11cbiAgICogQHJldHVybnMge0l0ZW1bXX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIC8vIFJldHVybiBhbGwgaXRlbXMgaW1tZWRpYXRlbHkgaWYgbm8gdGFyZ2V0cyB3ZXJlIHByb3ZpZGVkIG9yIGlmIHRoZVxuICAgIC8vIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgKCF0YXJnZXRzICYmIHRhcmdldHMgIT09IDApKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRvQXJyYXkodGFyZ2V0cyk7XG4gICAgdmFyIGl0ZW07XG4gICAgdmFyIGk7XG5cbiAgICAvLyBJZiB0YXJnZXQgaXRlbXMgYXJlIGRlZmluZWQgcmV0dXJuIGZpbHRlcmVkIHJlc3VsdHMuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gdGhpcy5fZ2V0SXRlbSh0YXJnZXRJdGVtc1tpXSk7XG4gICAgICBpdGVtICYmIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY2FjaGVkIGRpbWVuc2lvbnMgb2YgdGhlIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBbaXRlbXNdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVmcmVzaEl0ZW1zID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRhcmdldHMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXRzW2ldLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHNvcnQgZGF0YSBvZiB0aGUgaW5zdGFuY2UncyBpdGVtcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtHcmlkTXVsdGlJdGVtUXVlcnl9IFtpdGVtc11cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5yZWZyZXNoU29ydERhdGEgPSBmdW5jdGlvbihpdGVtcykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0SXRlbXNbaV0uX3JlZnJlc2hTb3J0RGF0YSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZSB0aGUgaXRlbSBlbGVtZW50cyB0byBtYXRjaCB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBET00uXG4gICAqIFRoaXMgY29tZXMgaGFuZHkgaWYgeW91IG5lZWQgdG8ga2VlcCB0aGUgRE9NIHN0cnVjdHVyZSBtYXRjaGVkIHdpdGggdGhlXG4gICAqIG9yZGVyIG9mIHRoZSBpdGVtcy4gTm90ZSB0aGF0IGlmIGFuIGl0ZW0ncyBlbGVtZW50IGlzIG5vdCBjdXJyZW50bHkgYSBjaGlsZFxuICAgKiBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgKGlmIGl0IGlzIGRyYWdnZWQgZm9yIGV4YW1wbGUpIGl0IGlzIGlnbm9yZWQgYW5kXG4gICAqIGxlZnQgdW50b3VjaGVkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLnN5bmNocm9uaXplID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBmcmFnbWVudDtcbiAgICB2YXIgZWxlbWVudDtcbiAgICB2YXIgaTtcblxuICAgIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgaW4gb3JkZXIgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50ID0gaXRlbXNbaV0uX2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lcikge1xuICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQgfHwgd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhZ21lbnQpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzeW5jaHJvbml6ZSBldmVudC5cbiAgICB0aGlzLl9lbWl0KGV2ZW50U3luY2hyb25pemUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgYXBwbHkgaXRlbSBwb3NpdGlvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TGF5b3V0Q2FsbGJhY2t9IFtvbkZpbmlzaF1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbihpbnN0YW50LCBvbkZpbmlzaCkge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaW5zdCA9IHRoaXM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLl91cGRhdGVMYXlvdXQoKTtcbiAgICB2YXIgbGF5b3V0SWQgPSBsYXlvdXQuaWQ7XG4gICAgdmFyIGl0ZW1zTGVuZ3RoID0gbGF5b3V0Lml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY291bnRlciA9IGl0ZW1zTGVuZ3RoO1xuICAgIHZhciBpc0JvcmRlckJveDtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgaTtcblxuICAgIC8vIFRoZSBmaW5pc2ggZnVuY3Rpb24sIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgY2hlY2tpbmcgaWYgYWxsIHRoZSBpdGVtc1xuICAgIC8vIGhhdmUgbGFpZCBvdXQgeWV0LiBBZnRlciBhbGwgaXRlbXMgaGF2ZSBmaW5pc2hlZCB0aGVpciBhbmltYXRpb25zIGNhbGxcbiAgICAvLyBjYWxsYmFjayBhbmQgZW1pdCBsYXlvdXRFbmQgZXZlbnQuIE9ubHkgZW1pdCBsYXlvdXRFbmQgZXZlbnQgaWYgdGhlcmVcbiAgICAvLyBoYXNuJ3QgYmVlbiBhIG5ldyBsYXlvdXQgY2FsbCBkdXJpbmcgdGhpcyBsYXlvdXQuXG4gICAgZnVuY3Rpb24gdHJ5RmluaXNoKCkge1xuICAgICAgaWYgKC0tY291bnRlciA+IDApIHJldHVybjtcblxuICAgICAgdmFyIGhhc0xheW91dENoYW5nZWQgPSBpbnN0Ll9sYXlvdXQuaWQgIT09IGxheW91dElkO1xuICAgICAgdmFyIGNhbGxiYWNrID0gaXNGdW5jdGlvbihpbnN0YW50KSA/IGluc3RhbnQgOiBvbkZpbmlzaDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKGhhc0xheW91dENoYW5nZWQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzTGF5b3V0Q2hhbmdlZCAmJiBpbnN0Ll9oYXNMaXN0ZW5lcnMoZXZlbnRMYXlvdXRFbmQpKSB7XG4gICAgICAgIGluc3QuX2VtaXQoZXZlbnRMYXlvdXRFbmQsIGxheW91dC5pdGVtcy5zbGljZSgwKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZ3JpZCdzIHdpZHRoIG9yIGhlaWdodCB3YXMgbW9kaWZpZWQsIHdlIG5lZWQgdG8gdXBkYXRlIGl0J3MgY2FjaGVkXG4gICAgLy8gZGltZW5zaW9ucy4gQWxzbyBrZWVwIGluIG1pbmQgdGhhdCBncmlkJ3MgY2FjaGVkIHdpZHRoL2hlaWdodCBzaG91bGRcbiAgICAvLyBhbHdheXMgZXF1YWwgdG8gd2hhdCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHdvdWxkIHJldHVybiwgc29cbiAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCB0byBhZGQgdGhlIGdyaWQgZWxlbWVudCdzIGJvcmRlcnMgdG8gdGhlIGRpbWVuc2lvbnMgaWZcbiAgICAvLyBpdCdzIGJveC1zaXppbmcgaXMgYm9yZGVyLWJveC4gTm90ZSB0aGF0IHdlIHN1cHBvcnQgcHJvdmlkaW5nIHRoZVxuICAgIC8vIGRpbWVuc2lvbnMgYXMgYSBzdHJpbmcgaGVyZSB0b28gc28gdGhhdCBvbmUgY2FuIGRlZmluZSB0aGUgdW5pdCBvZiB0aGVcbiAgICAvLyBkaW1lbnNpb25zLCBpbiB3aGljaCBjYXNlIHdlIGRvbid0IGRvIHRoZSBib3JkZXItYm94IGNoZWNrLlxuICAgIGlmIChcbiAgICAgIChsYXlvdXQuc2V0SGVpZ2h0ICYmIHR5cGVvZiBsYXlvdXQuaGVpZ2h0ID09PSBudW1iZXJUeXBlJDEpIHx8XG4gICAgICAobGF5b3V0LnNldFdpZHRoICYmIHR5cGVvZiBsYXlvdXQud2lkdGggPT09IG51bWJlclR5cGUkMSlcbiAgICApIHtcbiAgICAgIGlzQm9yZGVyQm94ID0gZ2V0U3R5bGUoZWxlbWVudCwgJ2JveC1zaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIH1cbiAgICBpZiAobGF5b3V0LnNldEhlaWdodCkge1xuICAgICAgaWYgKHR5cGVvZiBsYXlvdXQuaGVpZ2h0ID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPVxuICAgICAgICAgIChpc0JvcmRlckJveCA/IGxheW91dC5oZWlnaHQgKyB0aGlzLl9ib3JkZXJUb3AgKyB0aGlzLl9ib3JkZXJCb3R0b20gOiBsYXlvdXQuaGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGxheW91dC5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXlvdXQuc2V0V2lkdGgpIHtcbiAgICAgIGlmICh0eXBlb2YgbGF5b3V0LndpZHRoID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgKGlzQm9yZGVyQm94ID8gbGF5b3V0LndpZHRoICsgdGhpcy5fYm9yZGVyTGVmdCArIHRoaXMuX2JvcmRlclJpZ2h0IDogbGF5b3V0LndpZHRoKSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gbGF5b3V0LndpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVtaXQgbGF5b3V0U3RhcnQgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGlzIGludGVudGlvbmFsbHkgZW1pdHRlZCBhZnRlciB0aGVcbiAgICAvLyBjb250YWluZXIgZWxlbWVudCdzIGRpbWVuc2lvbnMgYXJlIHNldCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUgd291bGQgYmVcbiAgICAvLyBubyBob29rIGZvciByZWFjdGluZyB0byBjb250YWluZXIgZGltZW5zaW9uIGNoYW5nZXMuXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudExheW91dFN0YXJ0KSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudExheW91dFN0YXJ0LCBsYXlvdXQuaXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpdGVtcyBsZXQncyBmaW5pc2ggcXVpY2tseS5cbiAgICBpZiAoIWl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0cnlGaW5pc2goKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBpdGVtcyBsZXQncyBwb3NpdGlvbiB0aGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gbGF5b3V0Lml0ZW1zW2ldO1xuICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcblxuICAgICAgLy8gVXBkYXRlIGl0ZW0ncyBwb3NpdGlvbi5cbiAgICAgIGl0ZW0uX2xlZnQgPSBsYXlvdXQuc2xvdHNbaSAqIDJdO1xuICAgICAgaXRlbS5fdG9wID0gbGF5b3V0LnNsb3RzW2kgKiAyICsgMV07XG5cbiAgICAgIC8vIExheW91dCBpdGVtIGlmIGl0IGlzIG5vdCBkcmFnZ2VkLlxuICAgICAgaXRlbS5pc0RyYWdnaW5nKCkgPyB0cnlGaW5pc2goKSA6IGl0ZW0uX2xheW91dC5zdGFydChpbnN0YW50ID09PSB0cnVlLCB0cnlGaW5pc2gpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGl0ZW1zIGJ5IHByb3ZpZGluZyB0aGUgZWxlbWVudHMgeW91IHdpc2ggdG8gYWRkIHRvIHRoZSBpbnN0YW5jZSBhbmRcbiAgICogb3B0aW9uYWxseSBwcm92aWRlIHRoZSBpbmRleCB3aGVyZSB5b3Ugd2FudCB0aGUgaXRlbXMgdG8gYmUgaW5zZXJ0ZWQgaW50by5cbiAgICogQWxsIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBhbHJlYWR5IGNoaWxkcmVuIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCB3aWxsIGJlXG4gICAqIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50LiBJZiBhbiBlbGVtZW50IGhhcyBpdCdzIENTU1xuICAgKiBkaXNwbGF5IHByb3BlcnR5IHNldCB0byBcIm5vbmVcIiBpdCB3aWxsIGJlIG1hcmtlZCBhcyBpbmFjdGl2ZSBkdXJpbmcgdGhlXG4gICAqIGluaXRpYXRpb24gcHJvY2Vzcy4gQXMgbG9uZyBhcyB0aGUgaXRlbSBpcyBpbmFjdGl2ZSBpdCB3aWxsIG5vdCBiZSBwYXJ0IG9mXG4gICAqIHRoZSBsYXlvdXQsIGJ1dCBpdCB3aWxsIHJldGFpbiBpdCdzIGluZGV4LiBZb3UgY2FuIGFjdGl2YXRlIGl0ZW1zIGF0IGFueVxuICAgKiBwb2ludCB3aXRoIGdyaWQuc2hvdygpIG1ldGhvZC4gVGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGxcbiAgICogZ3JpZC5sYXlvdXQoKSBpZiBvbmUgb3IgbW9yZSBvZiB0aGUgYWRkZWQgZWxlbWVudHMgYXJlIHZpc2libGUuIElmIG9ubHlcbiAgICogaGlkZGVuIGl0ZW1zIGFyZSBhZGRlZCBubyBsYXlvdXQgd2lsbCBiZSBjYWxsZWQuIEFsbCB0aGUgbmV3IHZpc2libGUgaXRlbXNcbiAgICogYXJlIHBvc2l0aW9uZWQgd2l0aG91dCBhbmltYXRpb24gZHVyaW5nIHRoZWlyIGZpcnN0IGxheW91dC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8SFRNTEVsZW1lbnRbXSl9IGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmluZGV4PS0xXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmlzQWN0aXZlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZWxlbWVudHMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIWVsZW1lbnRzKSByZXR1cm4gW107XG5cbiAgICB2YXIgbmV3SXRlbXMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICBpZiAoIW5ld0l0ZW1zLmxlbmd0aCkgcmV0dXJuIG5ld0l0ZW1zO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gTWFwIHByb3ZpZGVkIGVsZW1lbnRzIGludG8gbmV3IGdyaWQgaXRlbXMuXG4gICAgZm9yIChpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmV3SXRlbXNbaV0sIG9wdHMuaXNBY3RpdmUpO1xuICAgICAgbmV3SXRlbXNbaV0gPSBpdGVtO1xuXG4gICAgICAvLyBJZiB0aGUgaXRlbSB0byBiZSBhZGRlZCBpcyBhY3RpdmUsIHdlIG5lZWQgdG8gZG8gYSBsYXlvdXQuIEFsc28sIHdlXG4gICAgICAvLyBuZWVkIHRvIG1hcmsgdGhlIGl0ZW0gd2l0aCB0aGUgc2tpcE5leHRBbmltYXRpb24gZmxhZyB0byBtYWtlIGl0XG4gICAgICAvLyBwb3NpdGlvbiBpbnN0YW50bHkgKHdpdGhvdXQgYW5pbWF0aW9uKSBkdXJpbmcgdGhlIG5leHQgbGF5b3V0LiBXaXRob3V0XG4gICAgICAvLyB0aGUgaGFjayB0aGUgaXRlbSB3b3VsZCBhbmltYXRlIHRvIGl0J3MgbmV3IHBvc2l0aW9uIGZyb20gdGhlIG5vcnRod2VzdFxuICAgICAgLy8gY29ybmVyIG9mIHRoZSBncmlkLCB3aGljaCBmZWVscyBhIGJpdCBidWdneSAoaW1obykuXG4gICAgICBpZiAoaXRlbS5faXNBY3RpdmUpIHtcbiAgICAgICAgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgICBpdGVtLl9sYXlvdXQuX3NraXBOZXh0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG5ldyBpdGVtcyB0byB0aGUgaXRlbXMgY29sbGVjdGlvbiB0byBjb3JyZWN0IGluZGV4LlxuICAgIGFycmF5SW5zZXJ0KGl0ZW1zLCBuZXdJdGVtcywgb3B0cy5pbmRleCk7XG5cbiAgICAvLyBFbWl0IGFkZCBldmVudC5cbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzKGV2ZW50QWRkKSkge1xuICAgICAgdGhpcy5fZW1pdChldmVudEFkZCwgbmV3SXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgaWYgKG5lZWRzTGF5b3V0ICYmIGxheW91dCkge1xuICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdJdGVtcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGl0ZW1zIGZyb20gdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJlbW92ZUVsZW1lbnRzPWZhbHNlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7SXRlbVtdfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBhbGxJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB2YXIgdGFyZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKGl0ZW1zKTtcbiAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IHRhcmdldEl0ZW1zW2ldO1xuICAgICAgaW5kaWNlcy5wdXNoKGFsbEl0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgICAgaWYgKGl0ZW0uX2lzQWN0aXZlKSBuZWVkc0xheW91dCA9IHRydWU7XG4gICAgICBpdGVtLl9kZXN0cm95KG9wdHMucmVtb3ZlRWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgcmVtb3ZlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRSZW1vdmUpKSB7XG4gICAgICB0aGlzLl9lbWl0KGV2ZW50UmVtb3ZlLCB0YXJnZXRJdGVtcy5zbGljZSgwKSwgaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICBpZiAobmVlZHNMYXlvdXQgJiYgbGF5b3V0KSB7XG4gICAgICB0aGlzLmxheW91dChsYXlvdXQgPT09IGluc3RhbnRMYXlvdXQsIGlzRnVuY3Rpb24obGF5b3V0KSA/IGxheW91dCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEl0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IGluc3RhbmNlIGl0ZW1zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7U2hvd0NhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX3NldEl0ZW1zVmlzaWJpbGl0eShpdGVtcywgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgaW5zdGFuY2UgaXRlbXMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZE11bHRpSXRlbVF1ZXJ5fSBpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5zdGFudD1mYWxzZV1cbiAgICogQHBhcmFtIHtIaWRlQ2FsbGJhY2t9IFtvcHRpb25zLm9uRmluaXNoXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dD10cnVlXVxuICAgKiBAcmV0dXJucyB7R3JpZH1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fc2V0SXRlbXNWaXNpYmlsaXR5KGl0ZW1zLCBmYWxzZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbHRlciBpdGVtcy4gRXhwZWN0cyBhdCBsZWFzdCBvbmUgYXJndW1lbnQsIGEgcHJlZGljYXRlLCB3aGljaCBzaG91bGQgYmVcbiAgICogZWl0aGVyIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmcuIFRoZSBwcmVkaWNhdGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQgZm9yIGV2ZXJ5XG4gICAqIGl0ZW0gaW4gdGhlIGluc3RhbmNlLiBJZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmVkaWNhdGUgaXMgdHJ1dGh5IHRoZVxuICAgKiBpdGVtIGluIHF1ZXN0aW9uIHdpbGwgYmUgc2hvd24gYW5kIG90aGVyd2lzZSBoaWRkZW4uIFRoZSBwcmVkaWNhdGUgY2FsbGJhY2tcbiAgICogcmVjZWl2ZXMgdGhlIGl0ZW0gaW5zdGFuY2UgYXMgaXQncyBhcmd1bWVudC4gSWYgdGhlIHByZWRpY2F0ZSBpcyBhIHN0cmluZ1xuICAgKiBpdCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgc2VsZWN0b3IgYW5kIGl0IGlzIGNoZWNrZWQgYWdhaW5zdCBldmVyeSBpdGVtXG4gICAqIGVsZW1lbnQgaW4gdGhlIGluc3RhbmNlIHdpdGggdGhlIG5hdGl2ZSBlbGVtZW50Lm1hdGNoZXMoKSBtZXRob2QuIEFsbCB0aGVcbiAgICogbWF0Y2hpbmcgaXRlbXMgd2lsbCBiZSBzaG93biBhbmQgb3RoZXJzIGhpZGRlbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258U3RyaW5nKX0gcHJlZGljYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbnN0YW50PWZhbHNlXVxuICAgKiBAcGFyYW0ge0ZpbHRlckNhbGxiYWNrfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIXRoaXMuX2l0ZW1zLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbXNUb1Nob3cgPSBbXTtcbiAgICB2YXIgaXRlbXNUb0hpZGUgPSBbXTtcbiAgICB2YXIgaXNQcmVkaWNhdGVTdHJpbmcgPSB0eXBlb2YgcHJlZGljYXRlID09PSBzdHJpbmdUeXBlO1xuICAgIHZhciBpc1ByZWRpY2F0ZUZuID0gaXNGdW5jdGlvbihwcmVkaWNhdGUpO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBpc0luc3RhbnQgPSBvcHRzLmluc3RhbnQgPT09IHRydWU7XG4gICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0ID8gb3B0cy5sYXlvdXQgOiBvcHRzLmxheW91dCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBvbkZpbmlzaCA9IGlzRnVuY3Rpb24ob3B0cy5vbkZpbmlzaCkgPyBvcHRzLm9uRmluaXNoIDogbnVsbDtcbiAgICB2YXIgdHJ5RmluaXNoQ291bnRlciA9IC0xO1xuICAgIHZhciB0cnlGaW5pc2ggPSBub29wO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBvbkZpbmlzaCBjYWxsYmFjaywgbGV0J3MgY3JlYXRlIHByb3BlciB0cnlGaW5pc2ggY2FsbGJhY2suXG4gICAgaWYgKG9uRmluaXNoKSB7XG4gICAgICB0cnlGaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgKyt0cnlGaW5pc2hDb3VudGVyICYmIG9uRmluaXNoKGl0ZW1zVG9TaG93LnNsaWNlKDApLCBpdGVtc1RvSGlkZS5zbGljZSgwKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIENoZWNrIHdoaWNoIGl0ZW1zIG5lZWQgdG8gYmUgc2hvd24gYW5kIHdoaWNoIGhpZGRlbi5cbiAgICBpZiAoaXNQcmVkaWNhdGVGbiB8fCBpc1ByZWRpY2F0ZVN0cmluZykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSB0aGlzLl9pdGVtc1tpXTtcbiAgICAgICAgaWYgKGlzUHJlZGljYXRlRm4gPyBwcmVkaWNhdGUoaXRlbSkgOiBlbGVtZW50TWF0Y2hlcyhpdGVtLl9lbGVtZW50LCBwcmVkaWNhdGUpKSB7XG4gICAgICAgICAgaXRlbXNUb1Nob3cucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtc1RvSGlkZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyBpdGVtcyB0aGF0IG5lZWQgdG8gYmUgc2hvd24uXG4gICAgaWYgKGl0ZW1zVG9TaG93Lmxlbmd0aCkge1xuICAgICAgdGhpcy5zaG93KGl0ZW1zVG9TaG93LCB7XG4gICAgICAgIGluc3RhbnQ6IGlzSW5zdGFudCxcbiAgICAgICAgb25GaW5pc2g6IHRyeUZpbmlzaCxcbiAgICAgICAgbGF5b3V0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeUZpbmlzaCgpO1xuICAgIH1cblxuICAgIC8vIEhpZGUgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIGhpZGRlbi5cbiAgICBpZiAoaXRlbXNUb0hpZGUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpZGUoaXRlbXNUb0hpZGUsIHtcbiAgICAgICAgaW5zdGFudDogaXNJbnN0YW50LFxuICAgICAgICBvbkZpbmlzaDogdHJ5RmluaXNoLFxuICAgICAgICBsYXlvdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5RmluaXNoKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBpdGVtcyB0byBmaWx0ZXIuXG4gICAgaWYgKGl0ZW1zVG9TaG93Lmxlbmd0aCB8fCBpdGVtc1RvSGlkZS5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZmlsdGVyIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudEZpbHRlcikpIHtcbiAgICAgICAgdGhpcy5fZW1pdChldmVudEZpbHRlciwgaXRlbXNUb1Nob3cuc2xpY2UoMCksIGl0ZW1zVG9IaWRlLnNsaWNlKDApKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTb3J0IGl0ZW1zLiBUaGVyZSBhcmUgdGhyZWUgd2F5cyB0byBzb3J0IHRoZSBpdGVtcy4gVGhlIGZpcnN0IGlzIHNpbXBseSBieVxuICAgKiBwcm92aWRpbmcgYSBmdW5jdGlvbiBhcyB0aGUgY29tcGFyZXIgd2hpY2ggd29ya3MgaWRlbnRpY2FsbHkgdG8gbmF0aXZlXG4gICAqIGFycmF5IHNvcnQuIEFsdGVybmF0aXZlbHkgeW91IGNhbiBzb3J0IGJ5IHRoZSBzb3J0IGRhdGEgeW91IGhhdmUgcHJvdmlkZWRcbiAgICogaW4gdGhlIGluc3RhbmNlJ3Mgb3B0aW9ucy4gSnVzdCBwcm92aWRlIHRoZSBzb3J0IGRhdGEga2V5KHMpIGFzIGEgc3RyaW5nXG4gICAqIChzZXBhcmF0ZWQgYnkgc3BhY2UpIGFuZCB0aGUgaXRlbXMgd2lsbCBiZSBzb3J0ZWQgYmFzZWQgb24gdGhlIHByb3ZpZGVkXG4gICAqIHNvcnQgZGF0YSBrZXlzLiBMYXN0bHkgeW91IGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHByb3ZpZGUgYSBwcmVzb3J0ZWRcbiAgICogYXJyYXkgb2YgaXRlbXMgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHN5bmMgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5IGluIHRoZVxuICAgKiBzYW1lIG9yZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxJdGVtW118U3RyaW5nfFN0cmluZ1tdKX0gY29tcGFyZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRlc2NlbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TGF5b3V0Q2FsbGJhY2t8U3RyaW5nKX0gW29wdGlvbnMubGF5b3V0PXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc29ydCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgc29ydENvbXBhcmVyO1xuICAgIHZhciBpc0Rlc2NlbmRpbmc7XG4gICAgdmFyIG9yaWdJdGVtcztcbiAgICB2YXIgaW5kZXhNYXA7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUNyaXRlcmlhKGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLnNwbGl0KCc6Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEluZGV4TWFwKGl0ZW1zKSB7XG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldFtpdGVtc1tpXS5faWRdID0gaTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGFyZUluZGljZXMoaXRlbUEsIGl0ZW1CKSB7XG4gICAgICB2YXIgaW5kZXhBID0gaW5kZXhNYXBbaXRlbUEuX2lkXTtcbiAgICAgIHZhciBpbmRleEIgPSBpbmRleE1hcFtpdGVtQi5faWRdO1xuICAgICAgcmV0dXJuIGlzRGVzY2VuZGluZyA/IGluZGV4QiAtIGluZGV4QSA6IGluZGV4QSAtIGluZGV4QjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoYSwgYikge1xuICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICB2YXIgY3JpdGVyaWFOYW1lO1xuICAgICAgdmFyIGNyaXRlcmlhT3JkZXI7XG4gICAgICB2YXIgdmFsQTtcbiAgICAgIHZhciB2YWxCO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGxpc3Qgb2Ygc29ydCBjcml0ZXJpYS5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydENvbXBhcmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgY3JpdGVyaWEgbmFtZSwgd2hpY2ggc2hvdWxkIG1hdGNoIGFuIGl0ZW0ncyBzb3J0IGRhdGEga2V5LlxuICAgICAgICBjcml0ZXJpYU5hbWUgPSBzb3J0Q29tcGFyZXJbaV1bMF07XG4gICAgICAgIGNyaXRlcmlhT3JkZXIgPSBzb3J0Q29tcGFyZXJbaV1bMV07XG5cbiAgICAgICAgLy8gR2V0IGl0ZW1zJyBjYWNoZWQgc29ydCB2YWx1ZXMgZm9yIHRoZSBjcml0ZXJpYS4gSWYgdGhlIGl0ZW0gaGFzIG5vIHNvcnRcbiAgICAgICAgLy8gZGF0YSBsZXQncyB1cGRhdGUgdGhlIGl0ZW1zIHNvcnQgZGF0YSAodGhpcyBpcyBhIGxhenkgbG9hZCBtZWNoYW5pc20pLlxuICAgICAgICB2YWxBID0gKGEuX3NvcnREYXRhID8gYSA6IGEuX3JlZnJlc2hTb3J0RGF0YSgpKS5fc29ydERhdGFbY3JpdGVyaWFOYW1lXTtcbiAgICAgICAgdmFsQiA9IChiLl9zb3J0RGF0YSA/IGIgOiBiLl9yZWZyZXNoU29ydERhdGEoKSkuX3NvcnREYXRhW2NyaXRlcmlhTmFtZV07XG5cbiAgICAgICAgLy8gU29ydCB0aGUgaXRlbXMgaW4gZGVzY2VuZGluZyBvcmRlciBpZiBkZWZpbmVkIHNvIGV4cGxpY2l0bHkuIE90aGVyd2lzZVxuICAgICAgICAvLyBzb3J0IGl0ZW1zIGluIGFzY2VuZGluZyBvcmRlci5cbiAgICAgICAgaWYgKGNyaXRlcmlhT3JkZXIgPT09ICdkZXNjJyB8fCAoIWNyaXRlcmlhT3JkZXIgJiYgaXNEZXNjZW5kaW5nKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbEIgPCB2YWxBID8gLTEgOiB2YWxCID4gdmFsQSA/IDEgOiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbEEgPCB2YWxCID8gLTEgOiB2YWxBID4gdmFsQiA/IDEgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSAtMSBvciAxIGFzIHRoZSByZXR1cm4gdmFsdWUsIGxldCdzIHJldHVybiBpdCBpbW1lZGlhdGVseS5cbiAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdmFsdWVzIGFyZSBlcXVhbCBsZXQncyBjb21wYXJlIHRoZSBpdGVtIGluZGljZXMgdG8gbWFrZSBzdXJlIHdlXG4gICAgICAvLyBoYXZlIGEgc3RhYmxlIHNvcnQuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBpZiAoIWluZGV4TWFwKSBpbmRleE1hcCA9IGdldEluZGV4TWFwKG9yaWdJdGVtcyk7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmVJbmRpY2VzKGEsIGIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXN0b21Db21wYXJlcihhLCBiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gc29ydENvbXBhcmVyKGEsIGIpO1xuICAgICAgLy8gSWYgZGVzY2VuZGluZyBsZXQncyBpbnZlcnQgdGhlIHJlc3VsdCB2YWx1ZS5cbiAgICAgIGlmIChpc0Rlc2NlbmRpbmcgJiYgcmVzdWx0KSByZXN1bHQgPSAtcmVzdWx0O1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIHJlc3VsdCAobm90IHplcm8pIGxldCdzIHJldHVybiBpdCByaWdodCBhd2F5LlxuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vIElmIHJlc3VsdCBpcyB6ZXJvIGxldCdzIGNvbXBhcmUgdGhlIGl0ZW0gaW5kaWNlcyB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhXG4gICAgICAvLyBzdGFibGUgc29ydC5cbiAgICAgIGlmICghaW5kZXhNYXApIGluZGV4TWFwID0gZ2V0SW5kZXhNYXAob3JpZ0l0ZW1zKTtcbiAgICAgIHJldHVybiBjb21wYXJlSW5kaWNlcyhhLCBiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29tcGFyZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSByZXR1cm4gdGhpcztcblxuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICAgIHZhciBsYXlvdXQgPSBvcHRzLmxheW91dCA/IG9wdHMubGF5b3V0IDogb3B0cy5sYXlvdXQgPT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpO1xuXG4gICAgICAvLyBTZXR1cCBwYXJlbnQgc2NvcGUgZGF0YS5cbiAgICAgIHNvcnRDb21wYXJlciA9IGNvbXBhcmVyO1xuICAgICAgaXNEZXNjZW5kaW5nID0gISFvcHRzLmRlc2NlbmRpbmc7XG4gICAgICBvcmlnSXRlbXMgPSBpdGVtcy5zbGljZSgwKTtcbiAgICAgIGluZGV4TWFwID0gbnVsbDtcblxuICAgICAgLy8gSWYgZnVuY3Rpb24gaXMgcHJvdmlkZWQgZG8gYSBuYXRpdmUgYXJyYXkgc29ydC5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNvcnRDb21wYXJlcikpIHtcbiAgICAgICAgaXRlbXMuc29ydChjdXN0b21Db21wYXJlcik7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgaWYgd2UgZ290IGEgc3RyaW5nLCBsZXQncyBzb3J0IGJ5IHRoZSBzb3J0IGRhdGEgYXMgcHJvdmlkZWQgaW5cbiAgICAgIC8vIHRoZSBpbnN0YW5jZSdzIG9wdGlvbnMuXG4gICAgICBlbHNlIGlmICh0eXBlb2Ygc29ydENvbXBhcmVyID09PSBzdHJpbmdUeXBlKSB7XG4gICAgICAgIHNvcnRDb21wYXJlciA9IHBhcnNlQ3JpdGVyaWEoY29tcGFyZXIpO1xuICAgICAgICBpdGVtcy5zb3J0KGRlZmF1bHRDb21wYXJlcik7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgaWYgd2UgZ290IGFuIGFycmF5LCBsZXQncyBhc3N1bWUgaXQncyBhIHByZXNvcnRlZCBhcnJheSBvZiB0aGVcbiAgICAgIC8vIGl0ZW1zIGFuZCBvcmRlciB0aGUgaXRlbXMgYmFzZWQgb24gaXQuXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvcnRDb21wYXJlcikpIHtcbiAgICAgICAgaWYgKHNvcnRDb21wYXJlci5sZW5ndGggIT09IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyBuYW1lc3BhY2UgKyAnXSBzb3J0IHJlZmVyZW5jZSBpdGVtcyBkbyBub3QgbWF0Y2ggd2l0aCBncmlkIGl0ZW1zLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzb3J0Q29tcGFyZXIuaW5kZXhPZihpdGVtc1tpXSkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1snICsgbmFtZXNwYWNlICsgJ10gc29ydCByZWZlcmVuY2UgaXRlbXMgZG8gbm90IG1hdGNoIHdpdGggZ3JpZCBpdGVtcy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXNbaV0gPSBzb3J0Q29tcGFyZXJbaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVzY2VuZGluZykgaXRlbXMucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGxldCdzIGp1c3Qgc2tpcCBpdCwgbm90aGluZyB3ZSBjYW4gZG8gaGVyZS5cbiAgICAgIGVsc2Uge1xuICAgICAgICAvKiogQHRvZG8gTWF5YmUgdGhyb3cgYW4gZXJyb3IgaGVyZT8gKi9cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgc29ydCBldmVudC5cbiAgICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoZXZlbnRTb3J0KSkge1xuICAgICAgICB0aGlzLl9lbWl0KGV2ZW50U29ydCwgaXRlbXMuc2xpY2UoMCksIG9yaWdJdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGxheW91dCBpcyBuZWVkZWQuXG4gICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogTW92ZSBpdGVtIHRvIGFub3RoZXIgaW5kZXggb3IgaW4gcGxhY2Ugb2YgYW5vdGhlciBpdGVtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IGl0ZW1cbiAgICogQHBhcmFtIHtHcmlkU2luZ2xlSXRlbVF1ZXJ5fSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5hY3Rpb249XCJtb3ZlXCJdXG4gICAqICAgLSBBY2NlcHRzIGVpdGhlciBcIm1vdmVcIiBvciBcInN3YXBcIi5cbiAgICogICAtIFwibW92ZVwiIG1vdmVzIHRoZSBpdGVtIGluIHBsYWNlIG9mIHRoZSBvdGhlciBpdGVtLlxuICAgKiAgIC0gXCJzd2FwXCIgc3dhcHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtcy5cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICogQHJldHVybnMge0dyaWR9XG4gICAqL1xuICBHcmlkLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oaXRlbSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXRlbXMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwgMDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGlzU3dhcCA9IG9wdHMuYWN0aW9uID09PSBhY3Rpb25Td2FwO1xuICAgIHZhciBhY3Rpb24gPSBpc1N3YXAgPyBhY3Rpb25Td2FwIDogYWN0aW9uTW92ZTtcbiAgICB2YXIgZnJvbUl0ZW0gPSB0aGlzLl9nZXRJdGVtKGl0ZW0pO1xuICAgIHZhciB0b0l0ZW0gPSB0aGlzLl9nZXRJdGVtKHBvc2l0aW9uKTtcbiAgICB2YXIgZnJvbUluZGV4O1xuICAgIHZhciB0b0luZGV4O1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBpdGVtcyBleGlzdCBhbmQgYXJlIG5vdCB0aGUgc2FtZS5cbiAgICBpZiAoZnJvbUl0ZW0gJiYgdG9JdGVtICYmIGZyb21JdGVtICE9PSB0b0l0ZW0pIHtcbiAgICAgIC8vIEdldCB0aGUgaW5kaWNlcyBvZiB0aGUgaXRlbXMuXG4gICAgICBmcm9tSW5kZXggPSBpdGVtcy5pbmRleE9mKGZyb21JdGVtKTtcbiAgICAgIHRvSW5kZXggPSBpdGVtcy5pbmRleE9mKHRvSXRlbSk7XG5cbiAgICAgIC8vIERvIHRoZSBtb3ZlL3N3YXAuXG4gICAgICBpZiAoaXNTd2FwKSB7XG4gICAgICAgIGFycmF5U3dhcChpdGVtcywgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5TW92ZShpdGVtcywgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBtb3ZlIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVycyhldmVudE1vdmUpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgaXRlbTogZnJvbUl0ZW0sXG4gICAgICAgICAgZnJvbUluZGV4OiBmcm9tSW5kZXgsXG4gICAgICAgICAgdG9JbmRleDogdG9JbmRleCxcbiAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5b3V0IGlzIG5lZWRlZC5cbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQobGF5b3V0ID09PSBpbnN0YW50TGF5b3V0LCBpc0Z1bmN0aW9uKGxheW91dCkgPyBsYXlvdXQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kIGl0ZW0gdG8gYW5vdGhlciBHcmlkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRTaW5nbGVJdGVtUXVlcnl9IGl0ZW1cbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gcG9zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy5hcHBlbmRUbz1kb2N1bWVudC5ib2R5XVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dFNlbmRlcj10cnVlXVxuICAgKiBAcGFyYW0geyhCb29sZWFufExheW91dENhbGxiYWNrfFN0cmluZyl9IFtvcHRpb25zLmxheW91dFJlY2VpdmVyPXRydWVdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGl0ZW0sIGdyaWQsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8IGdyaWQuX2lzRGVzdHJveWVkIHx8IHRoaXMgPT09IGdyaWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWxpZCB0YXJnZXQgaXRlbS5cbiAgICBpdGVtID0gdGhpcy5fZ2V0SXRlbShpdGVtKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IDA7XG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdHMuYXBwZW5kVG8gfHwgd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGxheW91dFNlbmRlciA9IG9wdHMubGF5b3V0U2VuZGVyID8gb3B0cy5sYXlvdXRTZW5kZXIgOiBvcHRzLmxheW91dFNlbmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBsYXlvdXRSZWNlaXZlciA9IG9wdHMubGF5b3V0UmVjZWl2ZXJcbiAgICAgID8gb3B0cy5sYXlvdXRSZWNlaXZlclxuICAgICAgOiBvcHRzLmxheW91dFJlY2VpdmVyID09PSB1bmRlZmluZWQ7XG5cbiAgICAvLyBTdGFydCB0aGUgbWlncmF0aW9uIHByb2Nlc3MuXG4gICAgaXRlbS5fbWlncmF0ZS5zdGFydChncmlkLCBwb3NpdGlvbiwgY29udGFpbmVyKTtcblxuICAgIC8vIElmIG1pZ3JhdGlvbiB3YXMgc3RhcnRlZCBzdWNjZXNzZnVsbHkgYW5kIHRoZSBpdGVtIGlzIGFjdGl2ZSwgbGV0J3MgbGF5b3V0XG4gICAgLy8gdGhlIGdyaWRzLlxuICAgIGlmIChpdGVtLl9taWdyYXRlLl9pc0FjdGl2ZSAmJiBpdGVtLl9pc0FjdGl2ZSkge1xuICAgICAgaWYgKGxheW91dFNlbmRlcikge1xuICAgICAgICB0aGlzLmxheW91dChcbiAgICAgICAgICBsYXlvdXRTZW5kZXIgPT09IGluc3RhbnRMYXlvdXQsXG4gICAgICAgICAgaXNGdW5jdGlvbihsYXlvdXRTZW5kZXIpID8gbGF5b3V0U2VuZGVyIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAobGF5b3V0UmVjZWl2ZXIpIHtcbiAgICAgICAgZ3JpZC5sYXlvdXQoXG4gICAgICAgICAgbGF5b3V0UmVjZWl2ZXIgPT09IGluc3RhbnRMYXlvdXQsXG4gICAgICAgICAgaXNGdW5jdGlvbihsYXlvdXRSZWNlaXZlcikgPyBsYXlvdXRSZWNlaXZlciA6IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlRWxlbWVudHM9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtHcmlkfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50O1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1zLnNsaWNlKDApO1xuICAgIHZhciBpO1xuXG4gICAgLy8gVW5iaW5kIHdpbmRvdyByZXNpemUgZXZlbnQgbGlzdGVuZXIuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IGl0ZW1zLlxuICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXNbaV0uX2Rlc3Ryb3kocmVtb3ZlRWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgY29udGFpbmVyLlxuICAgIHJlbW92ZUNsYXNzKGNvbnRhaW5lciwgdGhpcy5fc2V0dGluZ3MuY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnJztcblxuICAgIC8vIEVtaXQgZGVzdHJveSBldmVudCBhbmQgdW5iaW5kIGFsbCBldmVudHMuXG4gICAgdGhpcy5fZW1pdChldmVudERlc3Ryb3kpO1xuICAgIHRoaXMuX2VtaXR0ZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHJlZmVyZW5jZSBmcm9tIHRoZSBncmlkIGluc3RhbmNlcyBjb2xsZWN0aW9uLlxuICAgIGdyaWRJbnN0YW5jZXNbdGhpcy5faWRdID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmxhZyBpbnN0YW5jZSBhcyBkZXN0cm95ZWQuXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgcHJvdG90eXBlIG1ldGhvZHNcbiAgICogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlJ3MgaXRlbSBieSBlbGVtZW50IG9yIGJ5IGluZGV4LiBUYXJnZXQgY2FuIGFsc28gYmUgYW4gSXRlbVxuICAgKiBpbnN0YW5jZSBpbiB3aGljaCBjYXNlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSBpdGVtIGlmIGl0IGV4aXN0cyB3aXRoaW5cbiAgICogcmVsYXRlZCBHcmlkIGluc3RhbmNlLiBJZiBub3RoaW5nIGlzIGZvdW5kIHdpdGggdGhlIHByb3ZpZGVkIHRhcmdldCwgbnVsbFxuICAgKiBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7R3JpZFNpbmdsZUl0ZW1RdWVyeX0gW3RhcmdldF1cbiAgICogQHJldHVybnMgez9JdGVtfVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2dldEl0ZW0gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAvLyBJZiBubyB0YXJnZXQgaXMgc3BlY2lmaWVkIG9yIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQsIHJldHVybiBudWxsLlxuICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCAoIXRhcmdldCAmJiB0YXJnZXQgIT09IDApKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0YXJnZXQgaXMgbnVtYmVyIHJldHVybiB0aGUgaXRlbSBpbiB0aGF0IGluZGV4LiBJZiB0aGUgbnVtYmVyIGlzIGxvd2VyXG4gICAgLy8gdGhhbiB6ZXJvIGxvb2sgZm9yIHRoZSBpdGVtIHN0YXJ0aW5nIGZyb20gdGhlIGVuZCBvZiB0aGUgaXRlbXMgYXJyYXkuIEZvclxuICAgIC8vIGV4YW1wbGUgLTEgZm9yIHRoZSBsYXN0IGl0ZW0sIC0yIGZvciB0aGUgc2Vjb25kIGxhc3QgaXRlbSwgZXRjLlxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBudW1iZXJUeXBlJDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0YXJnZXQgPiAtMSA/IHRhcmdldCA6IHRoaXMuX2l0ZW1zLmxlbmd0aCArIHRhcmdldF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGFuIGluc3RhbmNlIG9mIEl0ZW0gcmV0dXJuIGl0IGlmIGl0IGlzIGF0dGFjaGVkIHRvIHRoaXNcbiAgICAvLyBHcmlkIGluc3RhbmNlLCBvdGhlcndpc2UgcmV0dXJuIG51bGwuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgIHJldHVybiB0YXJnZXQuX2dyaWRJZCA9PT0gdGhpcy5faWQgPyB0YXJnZXQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIEluIG90aGVyIGNhc2VzIGxldCdzIGFzc3VtZSB0aGF0IHRoZSB0YXJnZXQgaXMgYW4gZWxlbWVudCwgc28gbGV0J3MgdHJ5XG4gICAgLy8gdG8gZmluZCBhbiBpdGVtIHRoYXQgbWF0Y2hlcyB0aGUgZWxlbWVudCBhbmQgcmV0dXJuIGl0LiBJZiBpdGVtIGlzIG5vdFxuICAgIC8vIGZvdW5kIHJldHVybiBudWxsLlxuICAgIC8qKiBAdG9kbyBUaGlzIGNvdWxkIGJlIG1hZGUgYSBsb3QgZmFzdGVyIGJ5IHVzaW5nIE1hcC9XZWFrTWFwIG9mIGVsZW1lbnRzLiAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtc1tpXS5fZWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIGFuZCB1cGRhdGVzIGluc3RhbmNlJ3MgbGF5b3V0IGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcmV0dXJucyB7TGF5b3V0RGF0YX1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5fbGF5b3V0O1xuICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzLmxheW91dDtcbiAgICB2YXIgd2lkdGg7XG4gICAgdmFyIGhlaWdodDtcbiAgICB2YXIgbmV3TGF5b3V0O1xuICAgIHZhciBpO1xuXG4gICAgLy8gTGV0J3MgaW5jcmVtZW50IGxheW91dCBpZC5cbiAgICArK2xheW91dC5pZDtcblxuICAgIC8vIExldCdzIHVwZGF0ZSBsYXlvdXQgaXRlbXNcbiAgICBsYXlvdXQuaXRlbXMubGVuZ3RoID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtc1tpXS5faXNBY3RpdmUpIGxheW91dC5pdGVtcy5wdXNoKHRoaXMuX2l0ZW1zW2ldKTtcbiAgICB9XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgd2UgaGF2ZSB0aGUgY29ycmVjdCBjb250YWluZXIgZGltZW5zaW9ucy5cbiAgICB0aGlzLl9yZWZyZXNoRGltZW5zaW9ucygpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGNvbnRhaW5lciB3aWR0aCBhbmQgaGVpZ2h0ICh3aXRob3V0IGJvcmRlcnMpLlxuICAgIHdpZHRoID0gdGhpcy5fd2lkdGggLSB0aGlzLl9ib3JkZXJMZWZ0IC0gdGhpcy5fYm9yZGVyUmlnaHQ7XG4gICAgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IC0gdGhpcy5fYm9yZGVyVG9wIC0gdGhpcy5fYm9yZGVyQm90dG9tO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBsYXlvdXQuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0dGluZ3MpKSB7XG4gICAgICBuZXdMYXlvdXQgPSBzZXR0aW5ncyhsYXlvdXQuaXRlbXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXlvdXQgPSBwYWNrZXIuZ2V0TGF5b3V0KGxheW91dC5pdGVtcywgd2lkdGgsIGhlaWdodCwgbGF5b3V0LnNsb3RzLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgdXBkYXRlIHRoZSBncmlkJ3MgbGF5b3V0LlxuICAgIGxheW91dC5zbG90cyA9IG5ld0xheW91dC5zbG90cztcbiAgICBsYXlvdXQuc2V0V2lkdGggPSBCb29sZWFuKG5ld0xheW91dC5zZXRXaWR0aCk7XG4gICAgbGF5b3V0LnNldEhlaWdodCA9IEJvb2xlYW4obmV3TGF5b3V0LnNldEhlaWdodCk7XG4gICAgbGF5b3V0LndpZHRoID0gbmV3TGF5b3V0LndpZHRoO1xuICAgIGxheW91dC5oZWlnaHQgPSBuZXdMYXlvdXQuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIGxheW91dDtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdCBhIGdyaWQgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsuLi4qfSBbYXJnXVxuICAgKi9cbiAgR3JpZC5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVybjtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQuYXBwbHkodGhpcy5fZW1pdHRlciwgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBldmVudHMgbGlzdGVuZXJzIGZvciBhbiBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEdyaWQucHJvdG90eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9lbWl0dGVyLl9ldmVudHNbZXZlbnRdO1xuICAgIHJldHVybiAhIShsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb250YWluZXIncyB3aWR0aCwgaGVpZ2h0IGFuZCBvZmZzZXRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX3dpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICB0aGlzLl9sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIHRoaXMuX3RvcCA9IHJlY3QudG9wO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyJ3MgYm9yZGVyIHNpemVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBsZWZ0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmlnaHRcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b3BcbiAgICogQHBhcmFtIHtCb29sZWFufSBib3R0b21cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl91cGRhdGVCb3JkZXJzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIGlmIChsZWZ0KSB0aGlzLl9ib3JkZXJMZWZ0ID0gZ2V0U3R5bGVBc0Zsb2F0KGVsZW1lbnQsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgIGlmIChyaWdodCkgdGhpcy5fYm9yZGVyUmlnaHQgPSBnZXRTdHlsZUFzRmxvYXQoZWxlbWVudCwgJ2JvcmRlci1yaWdodC13aWR0aCcpO1xuICAgIGlmICh0b3ApIHRoaXMuX2JvcmRlclRvcCA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgIGlmIChib3R0b20pIHRoaXMuX2JvcmRlckJvdHRvbSA9IGdldFN0eWxlQXNGbG9hdChlbGVtZW50LCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGFsbCBvZiBjb250YWluZXIncyBpbnRlcm5hbCBkaW1lbnNpb25zIGFuZCBvZmZzZXRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgR3JpZC5wcm90b3R5cGVcbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9yZWZyZXNoRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuX3VwZGF0ZUJvcmRlcnMoMSwgMSwgMSwgMSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgb3IgaGlkZSBHcmlkIGluc3RhbmNlJ3MgaXRlbXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBHcmlkLnByb3RvdHlwZVxuICAgKiBAcGFyYW0ge0dyaWRNdWx0aUl0ZW1RdWVyeX0gaXRlbXNcbiAgICogQHBhcmFtIHtCb29sZWFufSB0b1Zpc2libGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluc3RhbnQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7KFNob3dDYWxsYmFja3xIaWRlQ2FsbGJhY2spfSBbb3B0aW9ucy5vbkZpbmlzaF1cbiAgICogQHBhcmFtIHsoQm9vbGVhbnxMYXlvdXRDYWxsYmFja3xTdHJpbmcpfSBbb3B0aW9ucy5sYXlvdXQ9dHJ1ZV1cbiAgICovXG4gIEdyaWQucHJvdG90eXBlLl9zZXRJdGVtc1Zpc2liaWxpdHkgPSBmdW5jdGlvbihpdGVtcywgdG9WaXNpYmxlLCBvcHRpb25zKSB7XG4gICAgdmFyIGdyaWQgPSB0aGlzO1xuICAgIHZhciB0YXJnZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoaXRlbXMpO1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCAwO1xuICAgIHZhciBpc0luc3RhbnQgPSBvcHRzLmluc3RhbnQgPT09IHRydWU7XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0cy5vbkZpbmlzaDtcbiAgICB2YXIgbGF5b3V0ID0gb3B0cy5sYXlvdXQgPyBvcHRzLmxheW91dCA6IG9wdHMubGF5b3V0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGNvdW50ZXIgPSB0YXJnZXRJdGVtcy5sZW5ndGg7XG4gICAgdmFyIHN0YXJ0RXZlbnQgPSB0b1Zpc2libGUgPyBldmVudFNob3dTdGFydCA6IGV2ZW50SGlkZVN0YXJ0O1xuICAgIHZhciBlbmRFdmVudCA9IHRvVmlzaWJsZSA/IGV2ZW50U2hvd0VuZCA6IGV2ZW50SGlkZUVuZDtcbiAgICB2YXIgbWV0aG9kID0gdG9WaXNpYmxlID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIHZhciBuZWVkc0xheW91dCA9IGZhbHNlO1xuICAgIHZhciBjb21wbGV0ZWRJdGVtcyA9IFtdO1xuICAgIHZhciBoaWRkZW5JdGVtcyA9IFtdO1xuICAgIHZhciBpdGVtO1xuICAgIHZhciBpO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIGNhbGwgdGhlIGNhbGxiYWNrLCBidXQgZG9uJ3QgZW1pdCBhbnkgZXZlbnRzLlxuICAgIGlmICghY291bnRlcikge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSBjYWxsYmFjayh0YXJnZXRJdGVtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzaG93U3RhcnQvaGlkZVN0YXJ0IGV2ZW50LlxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnMoc3RhcnRFdmVudCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoc3RhcnRFdmVudCwgdGFyZ2V0SXRlbXMuc2xpY2UoMCkpO1xuICAgIH1cblxuICAgIC8vIFNob3cvaGlkZSBpdGVtcy5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSB0YXJnZXRJdGVtc1tpXTtcblxuICAgICAgLy8gSWYgaW5hY3RpdmUgaXRlbSBpcyBzaG93biBvciBhY3RpdmUgaXRlbSBpcyBoaWRkZW4gd2UgbmVlZCB0byBkb1xuICAgICAgLy8gbGF5b3V0LlxuICAgICAgaWYgKCh0b1Zpc2libGUgJiYgIWl0ZW0uX2lzQWN0aXZlKSB8fCAoIXRvVmlzaWJsZSAmJiBpdGVtLl9pc0FjdGl2ZSkpIHtcbiAgICAgICAgbmVlZHNMYXlvdXQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpbmFjdGl2ZSBpdGVtIGlzIHNob3duIHdlIGFsc28gbmVlZCB0byBkbyBhIGxpdHRsZSBoYWNrIHRvIG1ha2UgdGhlXG4gICAgICAvLyBpdGVtIG5vdCBhbmltYXRlIGl0J3MgbmV4dCBwb3NpdGlvbmluZyAobGF5b3V0KS5cbiAgICAgIGlmICh0b1Zpc2libGUgJiYgIWl0ZW0uX2lzQWN0aXZlKSB7XG4gICAgICAgIGl0ZW0uX2xheW91dC5fc2tpcE5leHRBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhIGhpZGRlbiBpdGVtIGlzIGJlaW5nIHNob3duIHdlIG5lZWQgdG8gcmVmcmVzaCB0aGUgaXRlbSdzXG4gICAgICAvLyBkaW1lbnNpb25zLlxuICAgICAgaWYgKHRvVmlzaWJsZSAmJiBpdGVtLl92aXNpYmlsaXR5Ll9pc0hpZGRlbikge1xuICAgICAgICBoaWRkZW5JdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93L2hpZGUgdGhlIGl0ZW0uXG4gICAgICBpdGVtLl92aXNpYmlsaXR5W21ldGhvZF0oaXNJbnN0YW50LCBmdW5jdGlvbihpbnRlcnJ1cHRlZCwgaXRlbSkge1xuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBpdGVtJ3MgYW5pbWF0aW9uIHdhcyBub3QgaW50ZXJydXB0ZWQgYWRkIGl0IHRvIHRoZVxuICAgICAgICAvLyBjb21wbGV0ZWRJdGVtcyBhcnJheS5cbiAgICAgICAgaWYgKCFpbnRlcnJ1cHRlZCkgY29tcGxldGVkSXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICAvLyBJZiBhbGwgaXRlbXMgaGF2ZSBmaW5pc2hlZCB0aGVpciBhbmltYXRpb25zIGNhbGwgdGhlIGNhbGxiYWNrXG4gICAgICAgIC8vIGFuZCBlbWl0IHNob3dFbmQvaGlkZUVuZCBldmVudC5cbiAgICAgICAgaWYgKC0tY291bnRlciA8IDEpIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIGNhbGxiYWNrKGNvbXBsZXRlZEl0ZW1zLnNsaWNlKDApKTtcbiAgICAgICAgICBpZiAoZ3JpZC5faGFzTGlzdGVuZXJzKGVuZEV2ZW50KSkgZ3JpZC5fZW1pdChlbmRFdmVudCwgY29tcGxldGVkSXRlbXMuc2xpY2UoMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZWZyZXNoIGhpZGRlbiBpdGVtcy5cbiAgICBpZiAoaGlkZGVuSXRlbXMubGVuZ3RoKSB0aGlzLnJlZnJlc2hJdGVtcyhoaWRkZW5JdGVtcyk7XG5cbiAgICAvLyBMYXlvdXQgaWYgbmVlZGVkLlxuICAgIGlmIChuZWVkc0xheW91dCAmJiBsYXlvdXQpIHtcbiAgICAgIHRoaXMubGF5b3V0KGxheW91dCA9PT0gaW5zdGFudExheW91dCwgaXNGdW5jdGlvbihsYXlvdXQpID8gbGF5b3V0IDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgaGVscGVyc1xuICAgKiAqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgLyoqXG4gICAqIE1lcmdlIGRlZmF1bHQgc2V0dGluZ3Mgd2l0aCB1c2VyIHNldHRpbmdzLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGEgbmV3XG4gICAqIG9iamVjdCB3aXRoIG1lcmdlZCB2YWx1ZXMuIFRoZSBtZXJnaW5nIGlzIGEgZGVlcCBtZXJnZSBtZWFuaW5nIHRoYXQgYWxsXG4gICAqIG9iamVjdHMgYW5kIGFycmF5cyB3aXRoaW4gdGhlIHByb3ZpZGVkIHNldHRpbmdzIG9iamVjdHMgd2lsbCBiZSBhbHNvIG1lcmdlZFxuICAgKiBzbyB0aGF0IG1vZGlmeWluZyB0aGUgdmFsdWVzIG9mIHRoZSBzZXR0aW5ncyBvYmplY3Qgd2lsbCBoYXZlIG5vIGVmZmVjdCBvblxuICAgKiB0aGUgcmV0dXJuZWQgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFNldHRpbmdzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbdXNlclNldHRpbmdzXVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlU2V0dGluZ3MoZGVmYXVsdFNldHRpbmdzLCB1c2VyU2V0dGluZ3MpIHtcbiAgICAvLyBDcmVhdGUgYSBmcmVzaCBjb3B5IG9mIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgdmFyIHJldCA9IG1lcmdlT2JqZWN0cyh7fSwgZGVmYXVsdFNldHRpbmdzKTtcblxuICAgIC8vIE1lcmdlIHVzZXIgc2V0dGluZ3MgdG8gZGVmYXVsdCBzZXR0aW5ncy5cbiAgICBpZiAodXNlclNldHRpbmdzKSB7XG4gICAgICByZXQgPSBtZXJnZU9iamVjdHMocmV0LCB1c2VyU2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB2aXNpYmxlL2hpZGRlbiBzdHlsZXMgbWFudWFsbHkgc28gdGhhdCB0aGUgd2hvbGUgb2JqZWN0IGlzXG4gICAgLy8gb3ZlcnJpZGRlbiBpbnN0ZWFkIG9mIHRoZSBwcm9wcy5cbiAgICByZXQudmlzaWJsZVN0eWxlcyA9ICh1c2VyU2V0dGluZ3MgfHwgMCkudmlzaWJsZVN0eWxlcyB8fCAoZGVmYXVsdFNldHRpbmdzIHx8IDApLnZpc2libGVTdHlsZXM7XG4gICAgcmV0LmhpZGRlblN0eWxlcyA9ICh1c2VyU2V0dGluZ3MgfHwgMCkuaGlkZGVuU3R5bGVzIHx8IChkZWZhdWx0U2V0dGluZ3MgfHwgMCkuaGlkZGVuU3R5bGVzO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0d28gb2JqZWN0cyByZWN1cnNpdmVseSAoZGVlcCBtZXJnZSkuIFRoZSBzb3VyY2Ugb2JqZWN0J3MgcHJvcGVydGllc1xuICAgKiBhcmUgbWVyZ2VkIHRvIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAqICAgLSBUaGUgdGFyZ2V0IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgKiAgIC0gVGhlIHNvdXJjZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHRhcmdldCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZU9iamVjdHModGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGxlbmd0aCA9IHNvdXJjZUtleXMubGVuZ3RoO1xuICAgIHZhciBpc1NvdXJjZU9iamVjdDtcbiAgICB2YXIgcHJvcE5hbWU7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb3BOYW1lID0gc291cmNlS2V5c1tpXTtcbiAgICAgIGlzU291cmNlT2JqZWN0ID0gaXNQbGFpbk9iamVjdChzb3VyY2VbcHJvcE5hbWVdKTtcblxuICAgICAgLy8gSWYgdGFyZ2V0IGFuZCBzb3VyY2UgdmFsdWVzIGFyZSBib3RoIG9iamVjdHMsIG1lcmdlIHRoZSBvYmplY3RzIGFuZFxuICAgICAgLy8gYXNzaWduIHRoZSBtZXJnZWQgdmFsdWUgdG8gdGhlIHRhcmdldCBwcm9wZXJ0eS5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHRhcmdldFtwcm9wTmFtZV0pICYmIGlzU291cmNlT2JqZWN0KSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBtZXJnZU9iamVjdHMobWVyZ2VPYmplY3RzKHt9LCB0YXJnZXRbcHJvcE5hbWVdKSwgc291cmNlW3Byb3BOYW1lXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBzb3VyY2UncyB2YWx1ZSBpcyBvYmplY3QgYW5kIHRhcmdldCdzIGlzIG5vdCBsZXQncyBjbG9uZSB0aGUgb2JqZWN0IGFzXG4gICAgICAvLyB0aGUgdGFyZ2V0J3MgdmFsdWUuXG4gICAgICBpZiAoaXNTb3VyY2VPYmplY3QpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IG1lcmdlT2JqZWN0cyh7fSwgc291cmNlW3Byb3BOYW1lXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBzb3VyY2UncyB2YWx1ZSBpcyBhbiBhcnJheSBsZXQncyBjbG9uZSB0aGUgYXJyYXkgYXMgdGhlIHRhcmdldCdzXG4gICAgICAvLyB2YWx1ZS5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdLnNsaWNlKDApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gYWxsIG90aGVyIGNhc2VzIGxldCdzIGp1c3QgZGlyZWN0bHkgYXNzaWduIHRoZSBzb3VyY2UncyB2YWx1ZSBhcyB0aGVcbiAgICAgIC8vIHRhcmdldCdzIHZhbHVlLlxuICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBHcmlkO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXV1cmkvZGlzdC9tdXVyaS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IFZpc3VhbGl6ZXJCYXNlIH0gZnJvbSBcIi4vdmlzdWFsaXplckJhc2VcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRvb2xiYXJIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgQWx0ZXJuYXRpdmVWaXN1YWxpemVyc1dyYXBwZXIgZXh0ZW5kcyBWaXN1YWxpemVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlzdWFsaXplcnM6IEFycmF5PFZpc3VhbGl6ZXJCYXNlPixcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGF0YTogQXJyYXk8eyBbaW5kZXg6IHN0cmluZ106IGFueSB9PixcbiAgICBvcHRpb25zPzogT2JqZWN0XG4gICkge1xuICAgIHN1cGVyKHRhcmdldEVsZW1lbnQsIHF1ZXN0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICBpZighdmlzdWFsaXplcnMgfHwgdmlzdWFsaXplcnMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmlzdWFsaXplckFycmF5V3JhcHBlciB3b3JrcyB3aXRoIHZpc3VhbGl6ZXJzIGNvbGxlY3Rpb24gb25seS5cIik7XG4gICAgfVxuICAgIHRoaXMudmlzdWFsaXplciA9IHZpc3VhbGl6ZXJzWzBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZpc3VhbGl6ZXJDb250YWluZXI6IEhUTUxFbGVtZW50XG4gIHByaXZhdGUgdmlzdWFsaXplcjogVmlzdWFsaXplckJhc2U7XG5cbiAgcHJpdmF0ZSBzZXRWaXN1YWxpemVyKG5hbWU6IHN0cmluZykge1xuICAgIGlmKCEhdGhpcy52aXN1YWxpemVyKSB7XG4gICAgICB0aGlzLnZpc3VhbGl6ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB0aGlzLnZpc3VhbGl6ZXJzLmZpbHRlcih2ID0+IHYubmFtZSA9PT0gbmFtZSlbMF07XG4gICAgdGhpcy52aXN1YWxpemVyLnJlbmRlcih0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIpO1xuICAgIHRoaXMuaW52b2tlT25VcGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+KSB7XG4gICAgdGhpcy52aXN1YWxpemVyLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy52aXN1YWxpemVyLmRlc3Ryb3koKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXIodGhpcy52aXN1YWxpemVyQ29udGFpbmVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVUb29sYmFySXRlbXModG9vbGJhcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gVG9vbGJhckhlbHBlci5jcmVhdGVTZWxlY3Rvcih0b29sYmFyLFxuICAgICAgdGhpcy52aXN1YWxpemVycy5tYXAodmlzdWFsaXplciA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZpc3VhbGl6ZXIubmFtZSxcbiAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidmlzdWFsaXplcl9cIiArIHZpc3VhbGl6ZXIubmFtZSlcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgKG9wdGlvbjogYW55KSA9PiB0aGlzLnZpc3VhbGl6ZXIubmFtZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgKGU6IGFueSkgPT4gdGhpcy5zZXRWaXN1YWxpemVyKGUudGFyZ2V0LnZhbHVlKVxuICAgICk7XG4gICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWxlY3RXcmFwcGVyKTtcbiAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbHRlcm5hdGl2ZVZpenVhbGl6ZXJzV3JhcHBlci50cyIsImV4cG9ydCBlbnVtIEVsZW1lbnRWaXNpYmlsaXR5IHsgVmlzaWJsZSA9IFwiVmlzaWJsZVwiLCBJbnZpc2libGUgPSBcIkludmlzaWJsZVwiLCBQdWJsaWNJbnZpc2libGUgPSBcIlB1YmxpY0ludmlzaWJsZVwiIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZpc3VhbGl6ZXJQYW5lbEVsZW1lbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIHZpc2liaWxpdHk6IEVsZW1lbnRWaXNpYmlsaXR5O1xyXG4gICAgdHlwZT86IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwiZXhwb3J0IGVudW0gQ29sdW1uVmlzaWJpbGl0eSB7IFZpc2libGUgPSBcIlZpc2libGVcIiwgSW52aXNpYmxlID0gXCJJbnZpc2libGVcIiwgUHVibGljSW52aXNpYmxlID0gXCJQdWJsaWNJbnZpc2libGVcIiB9XHJcbmV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24geyBDb2x1bW4gPSBcIkNvbHVtblwiLCBSb3cgPSBcIlJvd1wiIH1cclxuZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBUZXh0ID0gXCJUZXh0XCIsIEZpbGVMaW5rID0gXCJGaWxlTGlua1wiLCBJbWFnZSA9IFwiSW1hZ2VcIiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xyXG4gICAgdmlzaWJpbGl0eTogQ29sdW1uVmlzaWJpbGl0eTtcclxuICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uO1xyXG59XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbnMge1xyXG4vLyAgICAgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPjtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YXRhYmxlcy9jb25maWcudHMiLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXG4vL2ltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIlxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsImltcG9ydCB7IFF1ZXN0aW9uLCBRdWVzdGlvbkJvb2xlYW5Nb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgSXRlbVZhbHVlIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTWFuYWdlciB9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgU2VsZWN0QmFzZVBsb3RseSB9IGZyb20gXCIuL3NlbGVjdEJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlUGxvdGx5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRUeXBlcyA9IEJvb2xlYW5QbG90bHkudHlwZXM7XG4gICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmNoYXJ0VHlwZXNbMF07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvb2xlYW5RdWVzdGlvbigpIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uQm9vbGVhbk1vZGVsPnRoaXMucXVlc3Rpb247XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHR5cGVzID0gW1wicGllXCIsIFwiYmFyXCJdO1xuXG4gIHByb3RlY3RlZCBnZXRTZWxlY3RlZEl0ZW1CeVRleHQoaXRlbVRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgSXRlbVZhbHVlKGl0ZW1UZXh0KTtcbiAgfVxuXG4gIGdldFZhbHVlcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gWyB0aGlzLmJvb2xlYW5RdWVzdGlvbi52YWx1ZVRydWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlVHJ1ZSA6IHRydWUsIHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2UgIT09IHVuZGVmaW5lZCA/IHRoaXMuYm9vbGVhblF1ZXN0aW9uLnZhbHVlRmFsc2UgOiBmYWxzZV07XG4gIH1cblxuICBnZXRMYWJlbHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKCk7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3MgPSB2YWx1ZXMubWFwKHYgPT4gMCk7XG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd1ZhbHVlOiBhbnkgPSByb3dbdGhpcy5xdWVzdGlvbi5uYW1lXTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocm93VmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgIHN0YXRpc3RpY3NbaW5kZXhdKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGlzdGljc107XG4gIH1cblxufVxuXG5WaXN1YWxpemF0aW9uTWFuYWdlci5yZWdpc3RlclZpc3VhbGl6ZXIoXCJib29sZWFuXCIsIEJvb2xlYW5QbG90bHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Bsb3RseS9ib29sZWFuLnRzIiwiaW1wb3J0IHsgSXRlbVZhbHVlLCBRdWVzdGlvbk1hdHJpeE1vZGVsLCBRdWVzdGlvbiB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFNlbGVjdEJhc2VQbG90bHkgfSBmcm9tIFwiLi9zZWxlY3RCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhQbG90bHkgZXh0ZW5kcyBTZWxlY3RCYXNlUGxvdGx5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4sXG4gICAgb3B0aW9ucz86IE9iamVjdFxuICApIHtcbiAgICBzdXBlcih0YXJnZXROb2RlLCBxdWVzdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICB2YWx1ZXNTb3VyY2UoKTogYW55W10ge1xuICAgIGNvbnN0IHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeE1vZGVsID0gPGFueT50aGlzLnF1ZXN0aW9uO1xuICAgIHJldHVybiBxdWVzdGlvbi5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCk6IGFueVtdIHtcbiAgICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbCA9IDxhbnk+dGhpcy5xdWVzdGlvbjtcbiAgICByZXR1cm4gcXVlc3Rpb24ucm93cy5tYXAoKHJvdzogYW55KSA9PlxuICAgICAgSXRlbVZhbHVlLmdldFRleHRPckh0bWxCeVZhbHVlKHF1ZXN0aW9uLnJvd3MsIHJvdy52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4TW9kZWwgPSA8YW55PnRoaXMucXVlc3Rpb247XG4gICAgY29uc3QgZGF0YXNldHM6IEFycmF5PGFueT4gPSB0aGlzLnZhbHVlc1NvdXJjZSgpLm1hcChjaG9pY2UgPT4ge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLnJvd3MubWFwKCh2OiBhbnkpID0+IDApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvblZhbHVlOiBhbnkgPSByb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICBpZiAoISFxdWVzdGlvblZhbHVlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnJvd3MuZm9yRWFjaCgocm93OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmdldFZhbHVlcygpLmZvckVhY2goKHZhbDogYW55LCBkc0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvblZhbHVlW3Jvdy52YWx1ZV0gPT0gdmFsKSB7XG4gICAgICAgICAgICAgIGRhdGFzZXRzW2RzSW5kZXhdW2luZGV4XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YXNldHM7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwibWF0cml4XCIsIE1hdHJpeFBsb3RseSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxvdGx5L21hdHJpeC50cyIsImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG52YXIgUGxvdGx5ID0gPGFueT5yZXF1aXJlKFwicGxvdGx5LmpzLWRpc3RcIik7XG5pbXBvcnQgeyBWaXN1YWxpemVyQmFzZSB9IGZyb20gXCIuLi92aXN1YWxpemVyQmFzZVwiO1xuaW1wb3J0IHsgVmlzdWFsaXphdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb29sYmFySGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBHYXVnZVBsb3RseSBleHRlbmRzIFZpc3VhbGl6ZXJCYXNlIHtcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XG4gIHByaXZhdGUgY2hhcnQ6IFByb21pc2U8UGxvdGx5LlBsb3RseUhUTUxFbGVtZW50PjtcblxuICBwdWJsaWMgc3RhdGljIHN0ZXBzQ291bnQgPSA1O1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlVGV4dHNDYWxsYmFjazogKFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBtYXhWYWx1ZTogbnVtYmVyLFxuICAgIG1pblZhbHVlOiBudW1iZXIsXG4gICAgc3RlcHNDb3VudDogbnVtYmVyLFxuICAgIHRleHRzOiBzdHJpbmdbXVxuICApID0+IHN0cmluZ1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFR5cGVzID0gW1wiZ2F1Z2VcIiwgXCJidWxsZXRcIl07XG4gIGNoYXJ0VHlwZSA9IFwiZ2F1Z2VcIjtcbiAgY2hhcnROb2RlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbixcbiAgICBkYXRhOiBBcnJheTx7IFtpbmRleDogc3RyaW5nXTogYW55IH0+LFxuICAgIG9wdGlvbnM/OiBPYmplY3RcbiAgKSB7XG4gICAgc3VwZXIodGFyZ2V0RWxlbWVudCwgcXVlc3Rpb24sIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKGRhdGE6IEFycmF5PHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfT4pIHtcbiAgICBpZihkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGRhdGEpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY3JlYXRlQ2hhcnQoKTtcbiAgICB0aGlzLmludm9rZU9uVXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHRvb2xiYXJDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLmNoYXJ0VHlwZSAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckl0ZW1zKHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuY2hhcnRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gVG9vbGJhckhlbHBlci5jcmVhdGVTZWxlY3Rvcih0b29sYmFyLFxuICAgICAgICB0aGlzLmNoYXJ0VHlwZXMubWFwKGNoYXJ0VHlwZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiY2hhcnRUeXBlX1wiICsgY2hhcnRUeXBlKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICAob3B0aW9uOiBhbnkpID0+IHRoaXMuY2hhcnRUeXBlID09PSBvcHRpb24udmFsdWUsXG4gICAgICAgIHRoaXMudG9vbGJhckNoYW5nZUhhbmRsZXJcbiAgICAgICk7XG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHNlbGVjdFdyYXBwZXIpO1xuICAgIH1cbiAgICBzdXBlci5jcmVhdGVUb29sYmFySXRlbXModG9vbGJhcik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFBsb3RseS5wdXJnZSh0aGlzLmNoYXJ0Tm9kZSk7XG4gICAgdGhpcy5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2VuZXJhdGVUZXh0KG1heFZhbHVlOiBudW1iZXIsIG1pblZhbHVlOiBudW1iZXIsIHN0ZXBzQ291bnQ6IG51bWJlcikge1xuICAgIGxldCB0ZXh0czogYW55ID0gW107XG5cbiAgICBpZiAoc3RlcHNDb3VudCA9PT0gNSkge1xuICAgICAgdGV4dHMgPSBbXG4gICAgICAgIFwidmVyeSBoaWdoIChcIiArIG1heFZhbHVlICsgXCIpXCIsXG4gICAgICAgIFwiaGlnaFwiLFxuICAgICAgICBcIm1lZGl1bVwiLFxuICAgICAgICBcImxvd1wiLFxuICAgICAgICBcInZlcnkgbG93IChcIiArIG1pblZhbHVlICsgXCIpXCJcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRzLnB1c2gobWF4VmFsdWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwc0NvdW50IC0gMjsgaSsrKSB7XG4gICAgICAgIHRleHRzLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgICB0ZXh0cy5wdXNoKG1pblZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoISFHYXVnZVBsb3RseS5nZW5lcmF0ZVRleHRzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBHYXVnZVBsb3RseS5nZW5lcmF0ZVRleHRzQ2FsbGJhY2soXG4gICAgICAgIHRoaXMucXVlc3Rpb24sXG4gICAgICAgIG1heFZhbHVlLFxuICAgICAgICBtaW5WYWx1ZSxcbiAgICAgICAgc3RlcHNDb3VudCxcbiAgICAgICAgdGV4dHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRzO1xuICB9XG5cbiAgZ2VuZXJhdGVWYWx1ZXMobWF4VmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2gobWF4VmFsdWUgLyBzdGVwc0NvdW50KTtcbiAgICB9XG5cbiAgICB2YWx1ZXMucHVzaChtYXhWYWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb2xvcnMobWF4VmFsdWU6IG51bWJlciwgbWluVmFsdWU6IG51bWJlciwgc3RlcHNDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMuZ2V0Q29sb3JzKCk7XG4gICAgY29uc3QgY29sb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzQ291bnQ7IGkrKykge1xuICAgICAgY29sb3JzLnB1c2gocGFsZXR0ZVtpXSk7XG4gICAgfVxuXG4gICAgY29sb3JzLnB1c2goXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIpO1xuXG4gICAgcmV0dXJuIGNvbG9ycztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2hhcnQoKSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uO1xuXG4gICAgY29uc3QgcmF0ZVZhbHVlcyA9IHF1ZXN0aW9uLnZpc2libGVSYXRlVmFsdWVzO1xuICAgIGNvbnN0IG1heFZhbHVlID0gcmF0ZVZhbHVlc1tyYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlO1xuICAgIGNvbnN0IG1pblZhbHVlID0gcmF0ZVZhbHVlc1swXS52YWx1ZTtcblxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2VuZXJhdGVDb2xvcnMoXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgR2F1Z2VQbG90bHkuc3RlcHNDb3VudFxuICAgICk7XG5cbiAgICB2YXIgbGV2ZWwgPSB0aGlzLnJlc3VsdDtcblxuICAgIHZhciBkYXRhOiBhbnkgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5kaWNhdG9yXCIsXG4gICAgICAgIG1vZGU6IFwiZ2F1Z2UrbnVtYmVyXCIsXG4gICAgICAgIGdhdWdlOiB7XG4gICAgICAgICAgYXhpczogeyByYW5nZTogW21pblZhbHVlLCBtYXhWYWx1ZV0gfSxcbiAgICAgICAgICBzaGFwZTogdGhpcy5jaGFydFR5cGUsXG4gICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGJhcjogeyBjb2xvcjogY29sb3JzWzBdIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGxldmVsLFxuICAgICAgICB0ZXh0OiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkb21haW46IHsgeDogWzAsIDFdLCB5OiBbMCwgMV0gfVxuICAgICAgfVxuICAgIF07XG5cbiAgICB2YXIgbGF5b3V0ID0ge1xuICAgICAgd2lkdGg6IDYwMCxcbiAgICAgIGhlaWdodDogNDAwLFxuICAgICAgcGxvdF9iZ2NvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBhcGVyX2JnY29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcbiAgICAgIHN0YXRpY1Bsb3Q6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFydCA9IFBsb3RseS5uZXdQbG90KHRoaXMuY2hhcnROb2RlLCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29udGVudChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoYXJ0Tm9kZSk7XG4gIH1cblxuICBnZXQgcmVzdWx0KCkge1xuICAgIGlmICh0aGlzLl9yZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcXVlc3Rpb25WYWx1ZXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93RGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVmFsdWU6IGFueSA9ICtyb3dEYXRhW3RoaXMucXVlc3Rpb24ubmFtZV07XG4gICAgICAgIGlmICghIXF1ZXN0aW9uVmFsdWUpIHtcbiAgICAgICAgICBxdWVzdGlvblZhbHVlcy5wdXNoKHF1ZXN0aW9uVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcmVzdWx0ID0gcXVlc3Rpb25WYWx1ZXMgJiYgKHF1ZXN0aW9uVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gcXVlc3Rpb25WYWx1ZXMubGVuZ3RoKSB8fCAwO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gTWF0aC5jZWlsKHRoaXMuX3Jlc3VsdCAqIDEwMCkgLyAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XG4gIH1cbn1cblxuVmlzdWFsaXphdGlvbk1hbmFnZXIucmVnaXN0ZXJWaXN1YWxpemVyKFwicmF0aW5nXCIsIEdhdWdlUGxvdGx5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbG90bHkvcmF0aW5nLnRzIiwiZXhwb3J0IHZhciBzdG9wV29yZHMgPSBuZXcgQXJyYXkoXG4gIFwiYVwiLFxuICBcImFib3V0XCIsXG4gIFwiYWJvdmVcIixcbiAgXCJhY3Jvc3NcIixcbiAgXCJhZnRlclwiLFxuICBcImFnYWluXCIsXG4gIFwiYWdhaW5zdFwiLFxuICBcImFsbFwiLFxuICBcImFsbW9zdFwiLFxuICBcImFsb25lXCIsXG4gIFwiYWxvbmdcIixcbiAgXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFxuICBcImFsdGhvdWdoXCIsXG4gIFwiYWx3YXlzXCIsXG4gIFwiYW1vbmdcIixcbiAgXCJhblwiLFxuICBcImFuZFwiLFxuICBcImFub3RoZXJcIixcbiAgXCJhbnlcIixcbiAgXCJhbnlib2R5XCIsXG4gIFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcbiAgXCJhbnl3aGVyZVwiLFxuICBcImFyZVwiLFxuICBcImFyZWFcIixcbiAgXCJhcmVhc1wiLFxuICBcImFyb3VuZFwiLFxuICBcImFzXCIsXG4gIFwiYXNrXCIsXG4gIFwiYXNrZWRcIixcbiAgXCJhc2tpbmdcIixcbiAgXCJhc2tzXCIsXG4gIFwiYXRcIixcbiAgXCJhd2F5XCIsXG4gIFwiYlwiLFxuICBcImJhY2tcIixcbiAgXCJiYWNrZWRcIixcbiAgXCJiYWNraW5nXCIsXG4gIFwiYmFja3NcIixcbiAgXCJiZVwiLFxuICBcImJlY2FtZVwiLFxuICBcImJlY2F1c2VcIixcbiAgXCJiZWNvbWVcIixcbiAgXCJiZWNvbWVzXCIsXG4gIFwiYmVlblwiLFxuICBcImJlZm9yZVwiLFxuICBcImJlZ2FuXCIsXG4gIFwiYmVoaW5kXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJiZWluZ3NcIixcbiAgXCJiZXN0XCIsXG4gIFwiYmV0dGVyXCIsXG4gIFwiYmV0d2VlblwiLFxuICBcImJpZ1wiLFxuICBcImJvdGhcIixcbiAgXCJidXRcIixcbiAgXCJieVwiLFxuICBcImNcIixcbiAgXCJjYW1lXCIsXG4gIFwiY2FuXCIsXG4gIFwiY2Fubm90XCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VzXCIsXG4gIFwiY2VydGFpblwiLFxuICBcImNlcnRhaW5seVwiLFxuICBcImNsZWFyXCIsXG4gIFwiY2xlYXJseVwiLFxuICBcImNvbWVcIixcbiAgXCJjb3VsZFwiLFxuICBcImRcIixcbiAgXCJkaWRcIixcbiAgXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbnRcIixcbiAgXCJkaWZmZXJlbnRseVwiLFxuICBcImRvXCIsXG4gIFwiZG9lc1wiLFxuICBcImRvbmVcIixcbiAgXCJkb3duXCIsXG4gIFwiZG93blwiLFxuICBcImRvd25lZFwiLFxuICBcImRvd25pbmdcIixcbiAgXCJkb3duc1wiLFxuICBcImR1cmluZ1wiLFxuICBcImVcIixcbiAgXCJlYWNoXCIsXG4gIFwiZWFybHlcIixcbiAgXCJlaXRoZXJcIixcbiAgXCJlbmRcIixcbiAgXCJlbmRlZFwiLFxuICBcImVuZGluZ1wiLFxuICBcImVuZHNcIixcbiAgXCJlbm91Z2hcIixcbiAgXCJldmVuXCIsXG4gIFwiZXZlbmx5XCIsXG4gIFwiZXZlclwiLFxuICBcImV2ZXJ5XCIsXG4gIFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcbiAgXCJldmVyeXRoaW5nXCIsXG4gIFwiZXZlcnl3aGVyZVwiLFxuICBcImZcIixcbiAgXCJmYWNlXCIsXG4gIFwiZmFjZXNcIixcbiAgXCJmYWN0XCIsXG4gIFwiZmFjdHNcIixcbiAgXCJmYXJcIixcbiAgXCJmZWx0XCIsXG4gIFwiZmV3XCIsXG4gIFwiZmluZFwiLFxuICBcImZpbmRzXCIsXG4gIFwiZmlyc3RcIixcbiAgXCJmb3JcIixcbiAgXCJmb3VyXCIsXG4gIFwiZnJvbVwiLFxuICBcImZ1bGxcIixcbiAgXCJmdWxseVwiLFxuICBcImZ1cnRoZXJcIixcbiAgXCJmdXJ0aGVyZWRcIixcbiAgXCJmdXJ0aGVyaW5nXCIsXG4gIFwiZnVydGhlcnNcIixcbiAgXCJnXCIsXG4gIFwiZ2F2ZVwiLFxuICBcImdlbmVyYWxcIixcbiAgXCJnZW5lcmFsbHlcIixcbiAgXCJnZXRcIixcbiAgXCJnZXRzXCIsXG4gIFwiZ2l2ZVwiLFxuICBcImdpdmVuXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnb1wiLFxuICBcImdvaW5nXCIsXG4gIFwiZ29vZFwiLFxuICBcImdvb2RzXCIsXG4gIFwiZ290XCIsXG4gIFwiZ3JlYXRcIixcbiAgXCJncmVhdGVyXCIsXG4gIFwiZ3JlYXRlc3RcIixcbiAgXCJncm91cFwiLFxuICBcImdyb3VwZWRcIixcbiAgXCJncm91cGluZ1wiLFxuICBcImdyb3Vwc1wiLFxuICBcImhcIixcbiAgXCJoYWRcIixcbiAgXCJoYXNcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiaGVcIixcbiAgXCJoZXJcIixcbiAgXCJoZXJlXCIsXG4gIFwiaGVyc2VsZlwiLFxuICBcImhpZ2hcIixcbiAgXCJoaWdoXCIsXG4gIFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFxuICBcImhpZ2hlc3RcIixcbiAgXCJoaW1cIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwiaGlzXCIsXG4gIFwiaG93XCIsXG4gIFwiaG93ZXZlclwiLFxuICBcImlcIixcbiAgXCJpZlwiLFxuICBcImltcG9ydGFudFwiLFxuICBcImluXCIsXG4gIFwiaW50ZXJlc3RcIixcbiAgXCJpbnRlcmVzdGVkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIixcbiAgXCJpbnRlcmVzdHNcIixcbiAgXCJpbnRvXCIsXG4gIFwiaXNcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcImpcIixcbiAgXCJqdXN0XCIsXG4gIFwia1wiLFxuICBcImtlZXBcIixcbiAgXCJrZWVwc1wiLFxuICBcImtpbmRcIixcbiAgXCJrbmV3XCIsXG4gIFwia25vd1wiLFxuICBcImtub3duXCIsXG4gIFwia25vd3NcIixcbiAgXCJsXCIsXG4gIFwibGFyZ2VcIixcbiAgXCJsYXJnZWx5XCIsXG4gIFwibGFzdFwiLFxuICBcImxhdGVyXCIsXG4gIFwibGF0ZXN0XCIsXG4gIFwibGVhc3RcIixcbiAgXCJsZXNzXCIsXG4gIFwibGV0XCIsXG4gIFwibGV0c1wiLFxuICBcImxpa2VcIixcbiAgXCJsaWtlbHlcIixcbiAgXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXG4gIFwibG9uZ2VzdFwiLFxuICBcIm1cIixcbiAgXCJtYWRlXCIsXG4gIFwibWFrZVwiLFxuICBcIm1ha2luZ1wiLFxuICBcIm1hblwiLFxuICBcIm1hbnlcIixcbiAgXCJtYXlcIixcbiAgXCJtZVwiLFxuICBcIm1lbWJlclwiLFxuICBcIm1lbWJlcnNcIixcbiAgXCJtZW5cIixcbiAgXCJtaWdodFwiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwibW9zdGx5XCIsXG4gIFwibXJcIixcbiAgXCJtcnNcIixcbiAgXCJtdWNoXCIsXG4gIFwibXVzdFwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwiblwiLFxuICBcIm5lY2Vzc2FyeVwiLFxuICBcIm5lZWRcIixcbiAgXCJuZWVkZWRcIixcbiAgXCJuZWVkaW5nXCIsXG4gIFwibmVlZHNcIixcbiAgXCJuZXZlclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld1wiLFxuICBcIm5ld2VyXCIsXG4gIFwibmV3ZXN0XCIsXG4gIFwibmV4dFwiLFxuICBcIm5vXCIsXG4gIFwibm9ib2R5XCIsXG4gIFwibm9uXCIsXG4gIFwibm9vbmVcIixcbiAgXCJub3RcIixcbiAgXCJub3RoaW5nXCIsXG4gIFwibm93XCIsXG4gIFwibm93aGVyZVwiLFxuICBcIm51bWJlclwiLFxuICBcIm51bWJlcnNcIixcbiAgXCJvXCIsXG4gIFwib2ZcIixcbiAgXCJvZmZcIixcbiAgXCJvZnRlblwiLFxuICBcIm9sZFwiLFxuICBcIm9sZGVyXCIsXG4gIFwib2xkZXN0XCIsXG4gIFwib25cIixcbiAgXCJvbmNlXCIsXG4gIFwib25lXCIsXG4gIFwib25seVwiLFxuICBcIm9wZW5cIixcbiAgXCJvcGVuZWRcIixcbiAgXCJvcGVuaW5nXCIsXG4gIFwib3BlbnNcIixcbiAgXCJvclwiLFxuICBcIm9yZGVyXCIsXG4gIFwib3JkZXJlZFwiLFxuICBcIm9yZGVyaW5nXCIsXG4gIFwib3JkZXJzXCIsXG4gIFwib3RoZXJcIixcbiAgXCJvdGhlcnNcIixcbiAgXCJvdXJcIixcbiAgXCJvdXRcIixcbiAgXCJvdmVyXCIsXG4gIFwicFwiLFxuICBcInBhcnRcIixcbiAgXCJwYXJ0ZWRcIixcbiAgXCJwYXJ0aW5nXCIsXG4gIFwicGFydHNcIixcbiAgXCJwZXJcIixcbiAgXCJwZXJoYXBzXCIsXG4gIFwicGxhY2VcIixcbiAgXCJwbGFjZXNcIixcbiAgXCJwb2ludFwiLFxuICBcInBvaW50ZWRcIixcbiAgXCJwb2ludGluZ1wiLFxuICBcInBvaW50c1wiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwicHJlc2VudFwiLFxuICBcInByZXNlbnRlZFwiLFxuICBcInByZXNlbnRpbmdcIixcbiAgXCJwcmVzZW50c1wiLFxuICBcInByb2JsZW1cIixcbiAgXCJwcm9ibGVtc1wiLFxuICBcInB1dFwiLFxuICBcInB1dHNcIixcbiAgXCJxXCIsXG4gIFwicXVpdGVcIixcbiAgXCJyXCIsXG4gIFwicmF0aGVyXCIsXG4gIFwicmVhbGx5XCIsXG4gIFwicmlnaHRcIixcbiAgXCJyaWdodFwiLFxuICBcInJvb21cIixcbiAgXCJyb29tc1wiLFxuICBcInNcIixcbiAgXCJzYWlkXCIsXG4gIFwic2FtZVwiLFxuICBcInNhd1wiLFxuICBcInNheVwiLFxuICBcInNheXNcIixcbiAgXCJzZWNvbmRcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwic2VlXCIsXG4gIFwic2VlbVwiLFxuICBcInNlZW1lZFwiLFxuICBcInNlZW1pbmdcIixcbiAgXCJzZWVtc1wiLFxuICBcInNlZXNcIixcbiAgXCJzZXZlcmFsXCIsXG4gIFwic2hhbGxcIixcbiAgXCJzaGVcIixcbiAgXCJzaG91bGRcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd2VkXCIsXG4gIFwic2hvd2luZ1wiLFxuICBcInNob3dzXCIsXG4gIFwic2lkZVwiLFxuICBcInNpZGVzXCIsXG4gIFwic2luY2VcIixcbiAgXCJzbWFsbFwiLFxuICBcInNtYWxsZXJcIixcbiAgXCJzbWFsbGVzdFwiLFxuICBcInNvXCIsXG4gIFwic29tZVwiLFxuICBcInNvbWVib2R5XCIsXG4gIFwic29tZW9uZVwiLFxuICBcInNvbWV0aGluZ1wiLFxuICBcInNvbWV3aGVyZVwiLFxuICBcInN0YXRlXCIsXG4gIFwic3RhdGVzXCIsXG4gIFwic3RpbGxcIixcbiAgXCJzdGlsbFwiLFxuICBcInN1Y2hcIixcbiAgXCJzdXJlXCIsXG4gIFwidFwiLFxuICBcInRha2VcIixcbiAgXCJ0YWtlblwiLFxuICBcInRoYW5cIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlblwiLFxuICBcInRoZXJlXCIsXG4gIFwidGhlcmVmb3JlXCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aGV5XCIsXG4gIFwidGhpbmdcIixcbiAgXCJ0aGluZ3NcIixcbiAgXCJ0aGlua1wiLFxuICBcInRoaW5rc1wiLFxuICBcInRoaXNcIixcbiAgXCJ0aG9zZVwiLFxuICBcInRob3VnaFwiLFxuICBcInRob3VnaHRcIixcbiAgXCJ0aG91Z2h0c1wiLFxuICBcInRocmVlXCIsXG4gIFwidGhyb3VnaFwiLFxuICBcInRodXNcIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9nZXRoZXJcIixcbiAgXCJ0b29cIixcbiAgXCJ0b29rXCIsXG4gIFwidG93YXJkXCIsXG4gIFwidHVyblwiLFxuICBcInR1cm5lZFwiLFxuICBcInR1cm5pbmdcIixcbiAgXCJ0dXJuc1wiLFxuICBcInR3b1wiLFxuICBcInVcIixcbiAgXCJ1bmRlclwiLFxuICBcInVudGlsXCIsXG4gIFwidXBcIixcbiAgXCJ1cG9uXCIsXG4gIFwidXNcIixcbiAgXCJ1c2VcIixcbiAgXCJ1c2VkXCIsXG4gIFwidXNlc1wiLFxuICBcInZcIixcbiAgXCJ2ZXJ5XCIsXG4gIFwid1wiLFxuICBcIndhbnRcIixcbiAgXCJ3YW50ZWRcIixcbiAgXCJ3YW50aW5nXCIsXG4gIFwid2FudHNcIixcbiAgXCJ3YXNcIixcbiAgXCJ3YXlcIixcbiAgXCJ3YXlzXCIsXG4gIFwid2VcIixcbiAgXCJ3ZWxsXCIsXG4gIFwid2VsbHNcIixcbiAgXCJ3ZW50XCIsXG4gIFwid2VyZVwiLFxuICBcIndoYXRcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aGV0aGVyXCIsXG4gIFwid2hpY2hcIixcbiAgXCJ3aGlsZVwiLFxuICBcIndob1wiLFxuICBcIndob2xlXCIsXG4gIFwid2hvc2VcIixcbiAgXCJ3aHlcIixcbiAgXCJ3aWxsXCIsXG4gIFwid2l0aFwiLFxuICBcIndpdGhpblwiLFxuICBcIndpdGhvdXRcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya2VkXCIsXG4gIFwid29ya2luZ1wiLFxuICBcIndvcmtzXCIsXG4gIFwid291bGRcIixcbiAgXCJ4XCIsXG4gIFwieVwiLFxuICBcInllYXJcIixcbiAgXCJ5ZWFyc1wiLFxuICBcInlldFwiLFxuICBcInlvdVwiLFxuICBcInlvdW5nXCIsXG4gIFwieW91bmdlclwiLFxuICBcInlvdW5nZXN0XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwielwiXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmRjbG91ZC9zdG9wd29yZHMvZW5nbGlzaC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldvcmRDbG91ZFwiLFwiY29tbW9uanMyXCI6XCJ3b3JkY2xvdWRcIixcImNvbW1vbmpzXCI6XCJ3b3JkY2xvdWRcIixcImFtZFwiOlwid29yZGNsb3VkXCJ9XG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi92aXN1YWxpemVyQmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hbmFnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGl6YXRpb25QYW5lbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvblBhbmVsRHluYW1pY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlzdWFsaXphdGlvbk1hdHJpeER5bmFtaWNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vZGF0YXRhYmxlcy9kYXRhdGFibGVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wbG90bHkvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dvcmRjbG91ZC93b3JkY2xvdWRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dvcmRjbG91ZC9zdG9wd29yZHMvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyJdLCJzb3VyY2VSb290IjoiIn0=