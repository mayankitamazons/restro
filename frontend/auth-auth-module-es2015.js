(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\" style=\"margin-top: 20vh;\">\n    <div class=\"row m-auto justify-content-md-center\">\n        <div class=\"card col-sm-12 col-md-12 col-lg-5 col-xs-5 p-0\">\n            <div class=\"card-header mb-4\">Login</div>\n            <div class=\"card-body\">\n                <div class=\"basic-form\">\n                    <ngb-alert *ngIf=\"error\" type=\"danger\" (close)=\"error = ''\">{{ error }}</ngb-alert>\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-xs-2 col-lg-2 col-md-2 col-sm-12\" for=\"email\">Email:</label>\n                            <div class=\"mr-3 col-xs-9 col-lg-9 col-md-10 col-sm-12\">\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\" required id=\"email\">\n                                <small class=\"text-danger\"\n                                    *ngIf=\"loginForm.get('email').dirty && loginForm.get('email').errors && loginForm.get('email').errors['pattern']\">\n                                    Please enter a valid email\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xs-2 col-lg-2 col-md-2 col-sm-12\" for=\"password\">Password:</label>\n\n                            <div class=\"mr-3 col-xs-9 col-lg-9 col-md-10 col-sm-12\">\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\" required\n                                    id=\"password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <button [disabled]=\"loginForm.invalid || logginIn\" type=\"submit\" class=\"btn btn-primary\">\n                                <span *ngIf=\"logginIn\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                                Login\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-manager.service.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-manager.service.ts ***!
  \**********************************************/
/*! exports provided: AuthManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManagerService", function() { return AuthManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthManagerService = class AuthManagerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(email, password) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["SERVER_ENDPOINT"] + '/auth/login';
        const body = {
            email,
            password
            // password: HmacSHA256(email, password).toString()
        };
        return this.httpClient.post(url, body).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            console.log('data: ', data);
        }));
    }
};
AuthManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthManagerService);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");





const routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }]
    },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/auth/auth-manager.service.ts");
/* harmony import */ var _core_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth-user.service */ "./src/app/core/auth-user.service.ts");




let AuthComponent = class AuthComponent {
    constructor(authUserService) {
        this.authUserService = authUserService;
        this.authUserService.loadUser();
    }
    ngOnInit() {
        // if (!this.authUserService.user) {
        //   this.authUserService.loadUser();
        // }
    }
};
AuthComponent.ctorParameters = () => [
    { type: _core_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        providers: [_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"]]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-manager.service */ "./src/app/auth/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auth-user.service */ "./src/app/core/auth-user.service.ts");




// import { NavbarService } from 'src/app/core/navbar/navbar.service';




let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, authManagerService, route, authUserService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authManagerService = authManagerService;
        this.route = route;
        this.authUserService = authUserService;
        this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.logginIn = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnDestroy() {
        this.ngUnsubcribe.next();
        this.ngUnsubcribe.complete();
    }
    login() {
        if (this.loginForm.valid) {
            this.logginIn = true;
            this.authManagerService.login(this.loginForm.get('email').value.trim(), this.loginForm.get('password').value.trim())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubcribe))
                .subscribe({ next: (user) => {
                    console.log('Logged User: ', user);
                    this.authUserService.login(user);
                    this.logginIn = false;
                },
                error: (error) => {
                    this.error = error['error']['error'];
                    this.logginIn = false;
                } });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__["AuthManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map