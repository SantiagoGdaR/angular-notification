webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header\" style='text-align:center'>\n  <h1>\n    angular-notification Module\n  </h1>\n  <img width='38' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo='>\n</div>\n<div class='content'>\n  <h2>Usage examples!</h2>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Simple Notification (in this case with type 'success' (remember you can also use 'info', 'warning' and 'error'))</h3>\n      <p>\n        <a (click)='toggleFirstNotification()'>Toggle Simple Success Notification</a>\n      </p>\n    </div>\n    <app-notification [type]=\"'success'\"\n      [text]='longText'\n      [show]='showFirstNotification'\n      (closeCallback)='closeFirstNotification($event)'>\n    </app-notification>\n  </div>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Ok Button Notification (in this case with type 'info' (remember you can also use 'success', 'warning' and 'error'))</h3>\n      <p>\n        <a (click)='toggleSecondNotification()'>Toggle Info Notification with Ok Button</a>\n      </p>\n    </div>\n    <app-notification [type]=\"'info'\"\n      [text]='longText'\n      [show]='showSecondNotification'\n      [showOk]='true'\n      (okCallback)='closeSecondNotification($event)'>\n    </app-notification>\n  </div>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Ok and Cancel Button Notification With Square Style (in this case with type 'warning' (remember you can also use 'success', 'info' and 'error'))</h3>\n      <p>\n        <a (click)='toggleThirdNotification()'>Toggle warning Notification with Ok and Cancel Button</a>\n      </p>\n    </div>\n    <app-notification [type]=\"'warning'\"\n      [style]=\"'square'\"\n      [text]='shortText'\n      [show]='showThirdNotification'\n      [showOk]='true'\n      (okCallback)='closeThirdNotification($event)'\n      [showCancel]='true'\n      (cancelCallback)='closeThirdNotification($event)'>\n    </app-notification>\n  </div>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Simple Notification with Header and HTML in text (in this case with type 'error' (remember you can also use 'success', 'info' and 'warning'))</h3>\n      <p>\n        <a (click)='toggleFourthNotification()'>Toggle Simple Error Notification with Header</a>\n      </p>\n    </div>\n    <app-notification  [type]=\"'error'\"\n      [title]=\"'Error Example'\" \n      [text]='htmlText'\n      [show]='showFourthNotification'\n      (closeCallback)='closeFourthNotification($event)'>\n    </app-notification>\n  </div>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Notification with Header and Ok Button (in this case with type 'success' and custom text (remember you can also use 'info', 'warning' and 'error'))</h3>\n      <p>\n        <a (click)='toggleFifthNotification()'>Toggle Success Notification with Header and Ok Button</a>\n      </p>\n    </div>\n    <app-notification [type]=\"'success'\"\n      [title]=\"'Success Example'\"\n      [text]='shortText'\n      [show]='showFifthNotification'\n      [showOk]='true'\n      [okText]=\"'custom ok text'\"\n      (closeCallback)='closeFifthNotification($event)'>\n    </app-notification>\n  </div>\n  <hr />\n  <div style='text-align:center'>\n    <div>\n      <h3>Notification with Header, Ok and Cancel Button Square Style (in this case with type 'warning' and custom text (remember you can also use 'success', 'info' and 'error'))</h3>\n      <p>\n        <a (click)='toggleSixthNotification()'>Toggle Warning Notification with Header and Ok Button</a>\n      </p>\n    </div>\n    <app-notification [type]=\"'warning'\"\n      [style]=\"'square'\"\n      [title]=\"'Warning Example'\"\n      [text]='shortText'\n      [show]='showSixthNotification'\n      [showOk]='true'\n      [okText]=\"'custom ok text'\"\n      [showCancel]='true'\n      [cancelText]=\"'custom cancel text'\"\n      (okCallback)='closeSixthNotification($event)'\n      (cancelCallback)='closeSixthNotification($event)'>\n    </app-notification>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 50px;\n  background: #ce93d8;\n  padding: 0 25px; }\n  .header h1 {\n    display: inline-block;\n    font-size: 18px;\n    float: right; }\n  .header img {\n    float: left;\n    margin: 4px 0; }\n\n.content {\n  margin: 0 25px; }\n  .content div {\n    margin-bottom: 25px; }\n  .content p {\n    margin: 30px; }\n  .content a {\n    cursor: pointer;\n    color: #9c64a6;\n    padding: 15px;\n    border: 1px #ffc4ff solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.showFirstNotification = false;
        this.showSecondNotification = false;
        this.showThirdNotification = false;
        this.showFourthNotification = false;
        this.showFifthNotification = false;
        this.showSixthNotification = false;
        this.shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,\n    sollicitudin ultrices est imperdiet id.";
        this.longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,\n    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,\n    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.";
        this.htmlText = "<strong>ERROR! </strong>\n    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.";
        this.closeFirstNotification = function () {
            _this.showFirstNotification = false;
        };
        this.closeSecondNotification = function () {
            _this.showSecondNotification = false;
        };
        this.closeThirdNotification = function () {
            _this.showThirdNotification = false;
        };
        this.closeFourthNotification = function () {
            _this.showFourthNotification = false;
        };
        this.closeFifthNotification = function () {
            _this.showFifthNotification = false;
        };
        this.closeSixthNotification = function () {
            _this.showSixthNotification = false;
        };
        this.toggleFirstNotification = function () {
            _this.showFirstNotification = !_this.showFirstNotification;
        };
        this.toggleSecondNotification = function () {
            _this.showSecondNotification = !_this.showSecondNotification;
        };
        this.toggleThirdNotification = function () {
            _this.showThirdNotification = !_this.showThirdNotification;
        };
        this.toggleFourthNotification = function () {
            _this.showFourthNotification = !_this.showFourthNotification;
        };
        this.toggleFifthNotification = function () {
            _this.showFifthNotification = !_this.showFifthNotification;
        };
        this.toggleSixthNotification = function () {
            _this.showSixthNotification = !_this.showSixthNotification;
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification_module__ = __webpack_require__("../../../../../src/app/notification/notification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__notification_notification_module__["a" /* NotificationModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-notification {\r\n    text-align: left; }\r\n    .app-notification.ntf-radius {\r\n      border-radius: 5px; }\r\n    .app-notification.show {\r\n      display: block; }\r\n    .app-notification.ntf-border {\r\n      border: 1px #bec5b7 solid; }\r\n    .app-notification.ok {\r\n      background: #6abf69;\r\n      color: #003300; }\r\n      .app-notification.ok   .ntf-footer   span.ok {\r\n        background: #003300; }\r\n    .app-notification.info {\r\n      background: #64b5f6;\r\n      color: #003c8f; }\r\n      .app-notification.info   .ntf-footer   span.ok {\r\n        background: #003c8f; }\r\n    .app-notification.warning {\r\n      background: #fff263;\r\n      color: #c49000; }\r\n      .app-notification.warning   .ntf-footer   span.ok {\r\n        background: #c49000; }\r\n    .app-notification.error {\r\n      background: #f05545;\r\n      color: #870000; }\r\n      .app-notification.error   .ntf-footer   span.ok {\r\n        background: #870000; }\r\n    .app-notification   .ntf-header {\r\n      padding: 5px 15px;\r\n      color: #FFF;\r\n      background: #bec5b7;\r\n      position: relative; }\r\n    .app-notification   .ntf-container {\r\n      padding: 15px;\r\n      position: relative; }\r\n    .app-notification   .ntf-footer {\r\n      margin-top: 15px;\r\n      text-align: center; }\r\n      .app-notification   .ntf-footer   span {\r\n        color: #FFF;\r\n        padding: 5px 15px;\r\n        cursor: pointer;\r\n        margin: 0 10px; }\r\n        .app-notification   .ntf-footer   span.ntf-radius {\r\n          border-radius: 5px; }\r\n        .app-notification   .ntf-footer   span.cancel {\r\n          background: #bec5b7; }\r\n        .app-notification   .ntf-footer   span:hover {\r\n          opacity: 0.8; }\r\n    .app-notification   .ntf-wrapper {\r\n      width: 95%;\r\n      display: inline-block; }\r\n    .app-notification   .close {\r\n      position: absolute;\r\n      right: 15px;\r\n      width: 18px;\r\n      height: 18px;\r\n      opacity: 0.3;\r\n      cursor: pointer;\r\n      top: 50%;\r\n      -webkit-transform: translateY(-50%);\r\n              transform: translateY(-50%); }\r\n      .app-notification   .close:hover {\r\n        opacity: 1; }\r\n      .app-notification   .close:before, .app-notification   .close:after {\r\n        position: absolute;\r\n        left: 15px;\r\n        content: ' ';\r\n        height: 18px;\r\n        width: 2px;\r\n        background-color: #000a12; }\r\n      .app-notification   .close:before {\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg); }\r\n      .app-notification   .close:after {\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg); }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='app-notification'\n    [class.ok]='isOkNotification()'\n    [class.info]='isInfoNotification()'\n    [class.warning]='isWarningNotification()'\n    [class.error]='isErrorNotification()'\n    [class.ntf-border]='showHeader()'\n    [class.ntf-radius]='isRoundedNotification()'\n    [@animation]=\"animationState\">\n  <div class='ntf-header'\n    *ngIf='showHeader()'>\n    <div [class.ntf-wrapper]='applyWrapper()'>\n      {{ title }}\n    </div>\n      <span class='close'\n        *ngIf='showHeaderCloseBtn()'\n        (click)='onCloseClick()'></span>\n  </div>\n  <div class='ntf-container'>\n    <div class='ntf-text'>\n      <div [class.ntf-wrapper]='applyWrapper()'\n        [innerHTML]='text'>\n      </div>\n      <span class='close'\n        *ngIf='showContainerCloseBtn()'\n        (click)='onCloseClick()'></span>\n    </div>    \n    <div class='ntf-footer'\n      *ngIf='showFooter()'>\n      <span class='ok'\n        [class.ntf-radius]='isRoundedNotification()'\n        *ngIf='showOk'\n        (click)='onOkClick()'>{{ okText }}</span>\n      <span class='cancel'\n        [class.ntf-radius]='isRoundedNotification()'\n        *ngIf='showCancel'\n        (click)='onCancelClick()'>{{ cancelText }}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
        var _this = this;
        this.title = '';
        this.showCancel = false;
        this.showOk = false;
        this.cancelText = 'Cancel';
        this.okText = 'Ok';
        this.type = 'success';
        this.style = 'rounded';
        this.okCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.closeCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.cancelCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.isOkNotification = function () {
            return _this.type.toLowerCase() === 'success';
        };
        this.isInfoNotification = function () {
            return _this.type.toLowerCase() === 'info';
        };
        this.isWarningNotification = function () {
            return _this.type.toLowerCase() === 'warning';
        };
        this.isErrorNotification = function () {
            return _this.type.toLowerCase() === 'error';
        };
        this.isRoundedNotification = function () {
            return _this.style.toLowerCase() === 'rounded';
        };
        this.showHeader = function () {
            return _this.title !== '';
        };
        this.showFooter = function () {
            return _this.showOk || _this.showCancel;
        };
        this.showContainerCloseBtn = function () {
            return !_this.showHeader() && !(_this.showOk || _this.showCancel);
        };
        this.showHeaderCloseBtn = function () {
            return !(_this.showOk || _this.showCancel);
        };
        this.applyWrapper = function () {
            return !_this.showHeader() && !(_this.showOk || _this.showCancel);
        };
    }
    NotificationComponent.prototype.ngOnChanges = function (changes) {
        var show = changes['show'];
        if (show.currentValue !== show.previousValue) {
            this.animationState = show.currentValue ? 'visible' : 'hidden';
        }
    };
    NotificationComponent.prototype.onOkClick = function () {
        this.okCallback.emit();
    };
    NotificationComponent.prototype.onCloseClick = function () {
        this.closeCallback.emit();
    };
    NotificationComponent.prototype.onCancelClick = function () {
        this.cancelCallback.emit();
    };
    return NotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "showCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "showOk", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "cancelText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "okText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "show", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "okCallback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "closeCallback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "cancelCallback", void 0);
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* trigger */])('animation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                    display: 'none'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                    display: 'block'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('hidden => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('visible => hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification_component__["a" /* NotificationComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notification_component__["a" /* NotificationComponent */]
        ]
    })
], NotificationModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map