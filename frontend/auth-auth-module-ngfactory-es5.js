(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module-ngfactory"], {
        /***/ "./src/app/auth/auth-manager.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/auth/auth-manager.service.ts ***!
          \**********************************************/
        /*! exports provided: AuthManagerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManagerService", function () { return AuthManagerService; });
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthManagerService = /** @class */ (function () {
                function AuthManagerService(httpClient) {
                    this.httpClient = httpClient;
                }
                AuthManagerService.prototype.login = function (email, password) {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["SERVER_ENDPOINT"] + '/auth/login';
                    var body = {
                        email: email,
                        password: password
                        // password: HmacSHA256(email, password).toString()
                    };
                    return this.httpClient.post(url, body).
                        pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
                        console.log('data: ', data);
                    }));
                };
                return AuthManagerService;
            }());
            /***/ 
        }),
        /***/ "./src/app/auth/auth-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/auth/auth-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: AuthRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () { return AuthRoutingModule; });
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
            var routes = [{
                    path: '',
                    component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
                    children: [{
                            path: 'login',
                            component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
                        }]
                },
                { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
                { path: '', redirectTo: '/login', pathMatch: 'full' },
            ];
            var AuthRoutingModule = /** @class */ (function () {
                function AuthRoutingModule() {
                }
                return AuthRoutingModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.ngfactory.js": 
        /*!**************************************************!*\
          !*** ./src/app/auth/auth.component.ngfactory.js ***!
          \**************************************************/
        /*! exports provided: RenderType_AuthComponent, View_AuthComponent_0, View_AuthComponent_Host_0, AuthComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthComponent", function () { return RenderType_AuthComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthComponent_0", function () { return View_AuthComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthComponent_Host_0", function () { return View_AuthComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponentNgFactory", function () { return AuthComponentNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/auth/auth-manager.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _core_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth-user.service */ "./src/app/core/auth-user.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_AuthComponent = [];
            var RenderType_AuthComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AuthComponent, data: {} });
            function View_AuthComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_AuthComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "app-auth", [], null, null, null, View_AuthComponent_0, RenderType_AuthComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"], _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], [_core_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
            var AuthComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-auth", _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], View_AuthComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/auth/auth.component.ts ***!
          \****************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent(authUserService) {
                    this.authUserService = authUserService;
                    this.authUserService.loadUser();
                }
                AuthComponent.prototype.ngOnInit = function () {
                    // if (!this.authUserService.user) {
                    //   this.authUserService.loadUser();
                    // }
                };
                return AuthComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ngfactory.js": 
        /*!***********************************************!*\
          !*** ./src/app/auth/auth.module.ngfactory.js ***!
          \***********************************************/
        /*! exports provided: AuthModuleNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModuleNgFactory", function () { return AuthModuleNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "./src/app/auth/auth.module.ts");
            /* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
            /* harmony import */ var _auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component.ngfactory */ "./src/app/auth/auth.component.ngfactory.js");
            /* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component.ngfactory */ "./src/app/auth/login/login.component.ngfactory.js");
            /* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var AuthModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AuthComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], children: [{ path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] }] }, { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] }, { path: "", redirectTo: "/login", pathMatch: "full" }]]; }, [])]); });
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth/auth.module.ts ***!
          \*************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ngfactory.js": 
        /*!*********************************************************!*\
          !*** ./src/app/auth/login/login.component.ngfactory.js ***!
          \*********************************************************/
        /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () { return RenderType_LoginComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () { return View_LoginComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () { return View_LoginComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () { return LoginComponentNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth-manager.service */ "./src/app/auth/auth-manager.service.ts");
            /* harmony import */ var _core_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/auth-user.service */ "./src/app/core/auth-user.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_LoginComponent = [];
            var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LoginComponent, data: {} });
            function View_LoginComponent_1(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ngb-alert", [["class", "alert"], ["role", "alert"], ["type", "danger"]], [[2, "alert-dismissible", null]], [[null, "close"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("close" === en)) {
                            var pd_0 = ((_co.error = "") !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbAlert_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { type: [0, "type"] }, { close: "close" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_1 = "danger"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).dismissible; _ck(_v, 0, 0, currVal_0); var currVal_2 = _co.error; _ck(_v, 2, 0, currVal_2); });
            }
            function View_LoginComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Please enter a valid email "]))], null, null); }
            function View_LoginComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "spinner-border spinner-border-sm"], ["role", "status"]], null, null, null, null, null))], null, null); }
            function View_LoginComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 44, "div", [["class", "container-fluid p-0"], ["style", "margin-top: 20vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 43, "div", [["class", "row m-auto justify-content-md-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 42, "div", [["class", "card col-sm-12 col-md-12 col-lg-5 col-xs-5 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "card-header mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 39, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 38, "div", [["class", "basic-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 35, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("submit" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onSubmit($event) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("reset" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onReset() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("ngSubmit" === en)) {
                            var pd_2 = (_co.login() !== false);
                            ad = (pd_2 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 13, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "label", [["class", "col-xs-2 col-lg-2 col-md-2 col-sm-12"], ["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Email:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 10, "div", [["class", "mr-3 col-xs-9 col-lg-9 col-md-10 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "email"], ["id", "email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 11, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "label", [["class", "col-xs-2 col-lg-2 col-md-2 col-sm-12"], ["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 8, "div", [["class", "mr-3 col-xs-9 col-lg-9 col-md-10 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "password"], ["id", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 4, "div", [["class", "form-group text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 8, 0, currVal_0); var currVal_8 = _co.loginForm; _ck(_v, 11, 0, currVal_8); var currVal_17 = ""; _ck(_v, 20, 0, currVal_17); var currVal_18 = "email"; _ck(_v, 23, 0, currVal_18); var currVal_19 = ((_co.loginForm.get("email").dirty && _co.loginForm.get("email").errors) && _co.loginForm.get("email").errors["pattern"]); _ck(_v, 27, 0, currVal_19); var currVal_28 = ""; _ck(_v, 34, 0, currVal_28); var currVal_29 = "password"; _ck(_v, 37, 0, currVal_29); var currVal_31 = _co.logginIn; _ck(_v, 43, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).required ? "" : null); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).required ? "" : null); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassUntouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassTouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPristine; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassDirty; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassValid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassInvalid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPending; _ck(_v, 32, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_30 = (_co.loginForm.invalid || _co.logginIn); _ck(_v, 41, 0, currVal_30); });
            }
            function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _auth_manager_service__WEBPACK_IMPORTED_MODULE_7__["AuthManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _core_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, formBuilder, authManagerService, route, authUserService) {
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.authManagerService = authManagerService;
                    this.route = route;
                    this.authUserService = authUserService;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.logginIn = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                    });
                };
                LoginComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    if (this.loginForm.valid) {
                        this.logginIn = true;
                        this.authManagerService.login(this.loginForm.get('email').value.trim(), this.loginForm.get('password').value.trim())
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubcribe))
                            .subscribe({ next: function (user) {
                                console.log('Logged User: ', user);
                                _this.authUserService.login(user);
                                _this.logginIn = false;
                            },
                            error: function (error) {
                                _this.error = error['error']['error'];
                                _this.logginIn = false;
                            } });
                    }
                };
                return LoginComponent;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=auth-auth-module-ngfactory-es2015.js.map
//# sourceMappingURL=auth-auth-module-ngfactory-es5.js.map
//# sourceMappingURL=auth-auth-module-ngfactory-es5.js.map