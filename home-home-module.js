(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/events.ts":
/*!***************************!*\
  !*** ./src/app/events.ts ***!
  \***************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
var events = [
    {
        name: '34th Annual IAHE Home Educators’ Convention',
        url: 'https://iahe.net/2019-convention/',
        startDate: '2019-03-22T00:00:00-0400',
        endDate: '2019-03-23T00:00:00-0400',
        type: 'Convention',
        location: {
            city: 'Indianapolis',
            state: 'IN'
        }
    },
    {
        name: '2019 TPA Convention',
        url: 'https://www.teachingparents.org/a04a9985-ea94-4db2-a9cb-b7d4c1caa54b',
        startDate: '2019-04-12T00:00:00-0400',
        endDate: '2019-04-13T00:00:00-0400',
        type: 'Convention',
        location: {
            city: 'Wichita',
            state: 'KS'
        }
    },
    {
        name: 'INCH 2019',
        url: 'https://www.inch.org/conference/',
        startDate: '2019-05-17T00:00:00-0400',
        endDate: '2019-05-18T00:00:00-0400',
        type: 'Convention',
        location: {
            city: 'Lansing',
            state: 'MI'
        }
    },
    {
        name: '2019 HEAV Convention',
        url: 'https://heav.org/convention/',
        startDate: '2019-06-06T00:00:00-0400',
        endDate: '2019-06-06T00:00:00-0400',
        type: 'Convention',
        location: {
            city: 'Richmond',
            state: 'VA'
        }
    },
    {
        name: '2019 CHAP Convention',
        url: 'https://conv.chaponline.com/',
        startDate: '2019-06-14T00:00:00-0400',
        endDate: '2019-06-15T00:00:00-0400',
        type: 'Convention',
        location: {
            city: 'Lancaster',
            state: 'PA'
        }
    }
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <p class=\"mt-2\"></p>\n    <div class=\"jumbotron text-center\">\n      <h1 class=\"display-4\">homeschool.events</h1>\n      <p class=\"lead\">A database of homeschool events.</p>\n\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"search\"\n          placeholder=\"Search...\"\n          [formControl]=\"filter\"\n        />\n      </div>\n    </div>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Type</th>\n          <th scope=\"col\">Start Date</th>\n          <th scope=\"col\">End Date</th>\n          <th scope=\"col\">City</th>\n          <th scope=\"col\">State</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let event of (events$ | async); index as i\">\n          <th scope=\"row\">\n            <a [href]=\"event.url\">\n              <ngb-highlight [result]=\"event.name\" [term]=\"filter.value\">\n              </ngb-highlight>\n            </a>\n          </th>\n          <td>\n            {{ event.type }}\n          </td>\n          <td>{{ event.startDate | date: 'longDate' }}</td>\n          <td>{{ event.endDate | date: 'longDate' }}</td>\n          <td>\n            <ngb-highlight [result]=\"event.location.city\" [term]=\"filter.value\">\n            </ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight\n              [result]=\"event.location.state\"\n              [term]=\"filter.value\"\n            >\n            </ngb-highlight>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/app/events.ts");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "./src/app/states.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.nowDate = new Date();
        this.nowDate.setHours(0, 0, 0, 0);
        // filter out past events
        this.events = _events__WEBPACK_IMPORTED_MODULE_2__["events"].filter(function (event) {
            var endDate = new Date(event.endDate);
            endDate.setHours(0, 0, 0, 0);
            return _this.nowDate.getTime() <= endDate.getTime();
        });
        // sort by start date
        this.events = this.events.sort(function (a, b) {
            var bStart = new Date(parseFloat(a.startDate));
            var aStart = new Date(parseFloat(b.startDate));
            return aStart - bStart;
        });
        this.events$ = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (text) { return _this.search(text); }));
    }
    HomeComponent.prototype.includes = function (text, term) {
        if (text) {
            return text.toLowerCase().includes(term.toLowerCase());
        }
        return false;
    };
    HomeComponent.prototype.search = function (term) {
        var _this = this;
        return this.events.filter(function (event) {
            var state = _states__WEBPACK_IMPORTED_MODULE_3__["states"].find(function (st) { return st.abbreviation === event.location.state; });
            return (_this.includes(event.name, term) ||
                _this.includes(event.location.city, term) ||
                _this.includes(state.abbreviation, term) ||
                _this.includes(state.name, term));
        });
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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