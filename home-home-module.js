(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"row mt-3\">\n    <div class=\"col\">\n      <h1 class=\"display-4\">homeschool.events</h1>\n      <p class=\"lead\">A database of homeschool events</p>\n\n      <a [routerLink]=\"['/submit']\" class=\"btn btn-primary btn-raised\">\n        Submit an event\n      </a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <input\n        type=\"text\"\n        class=\"form-control mt-3\"\n        id=\"search\"\n        placeholder=\"Search...\"\n        [formControl]=\"filter\"\n      />\n    </div>\n  </div>\n</header>\n\n<div class=\"row mb-5\">\n  <div\n    class=\"col-md-4 col-sm-6 col-xs-12 mb-4\"\n    *ngFor=\"let event of events$ | async; index as i\"\n  >\n    <div class=\"card h-100 text-center event-card\">\n      <a\n        [href]=\"event.url\"\n        class=\"card-body p-4 event-link h-100 d-flex flex-column justify-content-between align-items-center\"\n      >\n        <img\n          [src]=\"event.logo\"\n          [alt]=\"event.name + ' logo'\"\n          class=\"event-logo\"\n          (error)=\"img.src = defaultImg\"\n          #img\n        />\n\n        <h5 class=\"card-title\">\n          {{ event.name }}\n        </h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">\n          {{ event.startDate | date: 'MMM d' }} -\n          {{ event.endDate | date: 'mediumDate' }}\n          - <b>{{ event.type }}</b>\n        </h6>\n\n        <p class=\"card-text\">\n          {{ event.location.city }},\n          {{ event.location.state }}\n        </p>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-link {\n  color: #212529;\n  text-decoration: none; }\n\n.event-link:hover {\n  color: #212529;\n  text-decoration: none; }\n\n.event-card {\n  transition: all 0.25s ease-out 0s;\n  box-shadow: rgba(192, 192, 192, 0.557) 0px 8px 30px;\n  border-radius: 8px; }\n\n.event-card:hover {\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px); }\n\n.event-logo {\n  max-height: 45px;\n  border-radius: 4px; }\n\nheader {\n  padding-top: 150px;\n  padding-bottom: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ldmVudE9uZUhRL2hvbWVzY2hvb2wuZXZlbnRzL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQ0FBaUM7RUFDakMsbURBQW1EO0VBQ25ELGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWxpbmsge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmV2ZW50LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmV2ZW50LWNhcmQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLW91dCAwcztcclxuICBib3gtc2hhZG93OiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNTU3KSAwcHggOHB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZXZlbnQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG59XHJcblxyXG4uZXZlbnQtbG9nbyB7XHJcbiAgbWF4LWhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states */ "./src/app/states.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        this.api = api;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.nowDate = new Date();
        this.defaultImg = 'assets/blank.svg';
    }
    HomeComponent.prototype.includes = function (text, term) {
        if (text) {
            return text.toLowerCase().includes(term.toLowerCase());
        }
        return false;
    };
    HomeComponent.prototype.search = function (term) {
        var _this = this;
        if (!this.events) {
            return;
        }
        return this.events.filter(function (event) {
            var state = _states__WEBPACK_IMPORTED_MODULE_2__["states"].find(function (st) { return st.abbreviation === event.location.state; });
            return (_this.includes(event.name, term) ||
                _this.includes(event.location.city, term) ||
                _this.includes(state.abbreviation, term) ||
                _this.includes(state.name, term));
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.nowDate.setHours(0, 0, 0, 0);
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.api.getEvents().subscribe(function (events) {
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_1 = events_1[_i];
                var domain = new URL(event_1.url).hostname;
                event_1.logo = "https://logo.clearbit.com/" + domain;
            }
            // filter out past events
            _this.events = events.filter(function (event) {
                var endDate = new Date(event.endDate);
                endDate.setHours(0, 0, 0, 0);
                return _this.nowDate.getTime() <= endDate.getTime();
            });
            // sort by start date
            _this.events = _this.events.sort(function (a, b) {
                return (new Date(parseFloat(b.startDate)) -
                    new Date(parseFloat(a.startDate)));
            });
            _this.events$ = _this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) { return _this.search(text); }));
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map