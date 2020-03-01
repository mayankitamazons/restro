(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"header\" [ngClass]=\"(sidebarOpen$ | async)? 'margin250' : 'margin60'\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"float-left\">\n                    <div class=\"hamburger sidebar-toggle\" (click)=\"toggleSidebar()\"\n                        [ngClass]=\"{'is-active':!(sidebarOpen$ | async)}\">\n                        <span class=\"line\"></span>\n                        <span class=\"line\"></span>\n                        <span class=\"line\"></span>\n                    </div>\n                </div>\n                <div class=\"float-right\">\n                    <ul>\n\n                        <!-- <li class=\"header-icon dib\"><i class=\"ti-bell\"></i>\n                            <div class=\"drop-down\">\n                                <div class=\"dropdown-content-heading\">\n                                    <span class=\"text-left\">Recent Notifications</span>\n                                </div>\n                                <div class=\"dropdown-content-body\">\n                                    <ul>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/3.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Mr. John</div>\n                                                    <div class=\"notification-text\">5 members joined today </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/3.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Mariam</div>\n                                                    <div class=\"notification-text\">likes a photo of you</div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/3.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Tasnim</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/3.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Mr. John</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li class=\"text-center\">\n                                            <a href=\"#\" class=\"more-link\">See All</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"header-icon dib\"><i class=\"ti-email\"></i>\n                            <div class=\"drop-down\">\n                                <div class=\"dropdown-content-heading\">\n                                    <span class=\"text-left\">2 New Messages</span>\n                                    <a href=\"email.html\"><i class=\"ti-pencil-alt pull-right\"></i></a>\n                                </div>\n                                <div class=\"dropdown-content-body\">\n                                    <ul>\n                                        <li class=\"notification-unread\">\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/1.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Michael Qin</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li class=\"notification-unread\">\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/2.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Mr. John</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/3.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Michael Qin</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\">\n                                                <img class=\"pull-left m-r-10 avatar-img\"\n                                                    src=\"assets/images/avatar/2.jpg\" alt=\"\" />\n                                                <div class=\"notification-content\">\n                                                    <small class=\"notification-timestamp pull-right\">02:34\n                                                        PM</small>\n                                                    <div class=\"notification-heading\">Mr. John</div>\n                                                    <div class=\"notification-text\">Hi Teddy, Just wanted to let you\n                                                        ...\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </li>\n                                        <li class=\"text-center\">\n                                            <a href=\"#\" class=\"more-link\">See All</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </li> -->\n                        <li  class=\"header-icon dib\" [ngClass]=\"{'active':profileDropDown}\" (click)=\"profileDropDown = !profileDropDown\"><span class=\"user-avatar\">{{user && (user.first_name || user.name)}} <i\n                                    class=\"ti-angle-down f-s-10\"></i></span>\n                            <div class=\"drop-down dropdown-profile\">\n                                <!-- <div class=\"dropdown-content-heading\">\n                                    <span class=\"text-left\">Upgrade Now</span>\n                                    <p class=\"trial-day\">30 Days Trail</p>\n                                </div> -->\n                                <div class=\"dropdown-content-body\">\n                                    <ul>\n                                        <li><a href=\"javascript:void(0)\" (click)=\"goToProfile()\"><i class=\"ti-user\"></i> <span>Profile</span></a></li>\n\n                                        <!-- <li><a href=\"#\"><i class=\"ti-email\"></i> <span>Inbox</span></a></li>\n                                        <li><a href=\"#\"><i class=\"ti-settings\"></i> <span>Setting</span></a></li>\n\n                                        <li><a href=\"#\"><i class=\"ti-lock\"></i> <span>Lock Screen</span></a></li> -->\n                                        <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-power-off\"></i> <span>Logout</span></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n\n<!-- /# sidebar -->\n<app-header></app-header>\n<div class=\"content-wrap\" [ngClass]=\"(sidebarOpen$ | async)? 'margin250' : 'margin60'\" style=\"height: 100%;\">\n    <section id=\"main-content\">\n        <router-outlet></router-outlet>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section [ngClass]=\"{'sidebar-hide':!(sidebarOpen$ | async)}\">\n    <div class=\"sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures\">\n        <div class=\"nano\">\n            <div class=\"nano-content\">\n                <div class=\"logo\"><a href=\"index.html\">\n                        <!-- <img src=\"assets/images/logo.png\" alt=\"\" /> --><span>Food Order</span></a></div>\n                <ul>\n                    <!-- <li class=\"label\"><a routerLink=\"/dashboard\">Dashboard</a></li> -->\n                    <!-- <li class=\"label\"><a routerLink=\"/vendor\">Vendors</a></li>\n                    <li class=\"label\"><a routerLink=\"/user\">Users</a></li>\n                    <li class=\"label\"><a routerLink=\"/user\">Chef</a></li>\n\n                    <li class=\"label\"><a routerLink=\"/user\">Waiter</a></li>\n\n                    <li class=\"label\"><a routerLink=\"/user\">Manager</a></li>\n                    <li class=\"label\"><a routerLink=\"/user\">Category</a></li> -->\n                    <!-- <li class=\"label\">Main</li> -->\n                    <li class=\"active open\"><a class=\"sidebar-sub-toggle\" routerLink=\"/dashboard\">\n                        <i class=\"ti-home\"></i> Dashboard\n                        <!-- <li class=\"label\"><a routerLink=\"/vendor\">Vendors</a></li> -->\n\n                            <!-- <span class=\"badge badge-primary\">2</span>\n                            <span class=\"sidebar-collapse-icon ti-angle-down\"></span> -->\n                        </a>\n                        <!-- <ul>\n                            <li><a href=\"index.html\">Dashboard 1</a></li>\n                            <li><a href=\"index1.html\">Dashboard 2</a></li>\n\n                        </ul> -->\n                    </li>\n                    <li class=\"active open\" *ngIf=\"user && user.role == 'Admin'\"><a class=\"sidebar-sub-toggle\">\n                        <i class=\"ti-user\"></i> Vendors\n                        <!-- <li class=\"label\"><a routerLink=\"/vendor\">Vendors</a></li> -->\n\n                            <span class=\"badge badge-primary\">2</span>\n                            <span class=\"sidebar-collapse-icon ti-angle-down\"></span>\n                        </a>\n                        <ul>\n                            <li><a  routerLink=\"/vendor\">All Vendors</a></li>\n                            <li><a routerLink=\"/vendor/create\">Add Vendor</a></li>\n\n                        </ul>\n                    </li>\n                    <li class=\"active open\" *ngIf=\"user && user.role == 'Admin' ||  user.role == 'Vendor'\"><a class=\"sidebar-sub-toggle\">\n                        <i class=\"ti-user\"></i> Managers\n                        <!-- <li class=\"label\"><a routerLink=\"/vendor\">Vendors</a></li> -->\n\n                            <span class=\"badge badge-primary\">2</span>\n                            <span class=\"sidebar-collapse-icon ti-angle-down\"></span>\n                        </a>\n                        <ul>\n                            <li><a  routerLink=\"/manager\">All Managers</a></li>\n                            <li><a routerLink=\"/manager/create\">Add Manager</a></li>\n\n                        </ul>\n                    </li>\n                    <li class=\"active open\"><a class=\"sidebar-sub-toggle\" routerLink=\"/user\">\n                        <i class=\"ti-user\"></i> User\n                        <!-- <li class=\"label\"><a routerLink=\"/vendor\">Vendors</a></li> -->\n<!-- \n                            <span class=\"badge badge-primary\">2</span>\n                            <span class=\"sidebar-collapse-icon ti-angle-down\"></span> -->\n                        </a>\n                        <!-- <ul>\n                            <li><a  routerLink=\"/vendor\">All Vendors</a></li>\n                            <li><a routerLink=\"/vendor/create\">Add Vendor</a></li>\n\n                        </ul> -->\n                    </li>\n                    <!-- <li class=\"label\">Apps</li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-bar-chart-alt\"></i> Charts <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"chart-flot.html\">Flot</a></li>\n                            <li><a href=\"chart-morris.html\">Morris</a></li>\n                            <li><a href=\"chartjs.html\">Chartjs</a></li>\n                            <li><a href=\"chartist.html\">Chartist</a></li>\n                            <li><a href=\"chart-peity.html\">Peity</a></li>\n                            <li><a href=\"chart-sparkline.html\">Sparkle</a></li>\n                            <li><a href=\"chart-knob.html\">Knob</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"app-event-calender.html\"><i class=\"ti-calendar\"></i> Calender </a></li>\n                    <li><a href=\"app-email.html\"><i class=\"ti-email\"></i> Email</a></li>\n                    <li><a href=\"app-profile.html\"><i class=\"ti-user\"></i> Profile</a></li>\n                    <li><a href=\"app-widget-card.html\"><i class=\"ti-layout-grid2-alt\"></i> Widget</a></li>\n                    <li class=\"label\">Features</li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-layout\"></i> UI Elements <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"ui-typography.html\">Typography</a></li>\n                            <li><a href=\"ui-alerts.html\">Alerts</a></li>\n\n                            <li><a href=\"ui-button.html\">Button</a></li>\n                            <li><a href=\"ui-dropdown.html\">Dropdown</a></li>\n\n                            <li><a href=\"ui-list-group.html\">List Group</a></li>\n\n                            <li><a href=\"ui-progressbar.html\">Progressbar</a></li>\n                            <li><a href=\"ui-tab.html\">Tab</a></li>\n\n                        </ul>\n                    </li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-panel\"></i> Components <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"uc-calendar.html\">Calendar</a></li>\n                            <li><a href=\"uc-carousel.html\">Carousel</a></li>\n                            <li><a href=\"uc-weather.html\">Weather</a></li>\n                            <li><a href=\"uc-datamap.html\">Datamap</a></li>\n                            <li><a href=\"uc-todo-list.html\">To do</a></li>\n                            <li><a href=\"uc-scrollable.html\">Scrollable</a></li>\n                            <li><a href=\"uc-sweetalert.html\">Sweet Alert</a></li>\n                            <li><a href=\"uc-toastr.html\">Toastr</a></li>\n                            <li><a href=\"uc-range-slider-basic.html\">Basic Range Slider</a></li>\n                            <li><a href=\"uc-range-slider-advance.html\">Advance Range Slider</a></li>\n                            <li><a href=\"uc-nestable.html\">Nestable</a></li>\n\n                            <li><a href=\"uc-rating-bar-rating.html\">Bar Rating</a></li>\n                            <li><a href=\"uc-rating-jRate.html\">jRate</a></li>\n                        </ul>\n                    </li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-layout-grid4-alt\"></i> Table <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"table-basic.html\">Basic</a></li>\n\n                            <li><a href=\"table-export.html\">Datatable Export</a></li>\n                            <li><a href=\"table-row-select.html\">Datatable Row Select</a></li>\n                            <li><a href=\"table-jsgrid.html\">Editable </a></li>\n                        </ul>\n                    </li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-heart\"></i> Icons <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"font-themify.html\">Themify</a></li>\n                        </ul>\n                    </li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-map\"></i> Maps <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"gmaps.html\">Basic</a></li>\n                            <li><a href=\"vector-map.html\">Vector Map</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"label\">Form</li>\n                    <li><a href=\"form-basic.html\"><i class=\"ti-view-list-alt\"></i> Basic Form </a></li>\n                    <li class=\"label\">Extra</li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-files\"></i> Invoice <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"invoice.html\">Basic</a></li>\n                            <li><a href=\"invoice-editable.html\">Editable</a></li>\n                        </ul>\n                    </li>\n                    <li><a class=\"sidebar-sub-toggle\"><i class=\"ti-target\"></i> Pages <span\n                                class=\"sidebar-collapse-icon ti-angle-down\"></span></a>\n                        <ul>\n                            <li><a href=\"page-login.html\">Login</a></li>\n                            <li><a href=\"page-register.html\">Register</a></li>\n                            <li><a href=\"page-reset-password.html\">Forgot password</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"../documentation/index.html\"><i class=\"ti-file\"></i> Documentation</a></li>\n                    <li><a><i class=\"ti-close\"></i> Logout</a></li> -->\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./src/app/home/header/header.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/home/header/header.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/header/header.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/home/header/header.component.ts ***!
          \*************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth-user.service */ "./src/app/core/auth-user.service.ts");
            /* harmony import */ var src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/menu.service */ "./src/app/core/menu.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authUserService, menuService, router) {
                    this.authUserService = authUserService;
                    this.menuService = menuService;
                    this.router = router;
                    this.sidebarOpen$ = this.menuService.sidebarOpen$;
                    this.profileDropDown = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    console.log('Loaded header');
                    this.user = this.authUserService.user;
                };
                HeaderComponent.prototype.toggleSidebar = function () {
                    var currentValue = this.menuService.sidebarOpen$.getValue();
                    this.menuService.sidebarOpen$.next(!currentValue);
                };
                HeaderComponent.prototype.logout = function () {
                    console.log('Logging out');
                    this.authUserService.logout();
                };
                HeaderComponent.prototype.goToProfile = function () {
                    if (this.user && this.user.role == 'Vendor') {
                        this.router.navigate(['vendor', 'detail', this.user._id]);
                    }
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
                { type: src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/home/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            var routes = [
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    children: [
                        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                        {
                            path: 'dashboard',
                            // canLoad: [AuthGuard],
                            loadChildren: '../dashboard/dashboard.module#DashboardModule'
                        },
                        {
                            path: 'user',
                            // canLoad: [AuthGuard],
                            loadChildren: '../user-manager/user-manager.module#UserManagerModule'
                        },
                        {
                            path: 'vendor',
                            // canLoad: [AuthGuard],
                            loadChildren: '../vendor-manager/vendor-manager.module#VendorManagerModule'
                        },
                        {
                            path: 'manager',
                            // canLoad: [AuthGuard],
                            loadChildren: '../staff-manager/staff-manager.module#StaffManagerModule'
                        },
                    ]
                }
            ];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/menu.service */ "./src/app/core/menu.service.ts");
            /* harmony import */ var _core_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth-user.service */ "./src/app/core/auth-user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(menuService, authService, router) {
                    this.menuService = menuService;
                    this.authService = authService;
                    this.router = router;
                    this.sidebarOpen$ = this.menuService.sidebarOpen$;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    if (!this.authService.user) {
                        console.log('Auth User not found');
                        this.router.navigate(['/auth/login']);
                    }
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
                { type: _core_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/header/header.component.ts");
            /* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/home/sidebar/sidebar.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                    ]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/home/sidebar/sidebar.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/home/sidebar/sidebar.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/sidebar/sidebar.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/home/sidebar/sidebar.component.ts ***!
          \***************************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth-user.service */ "./src/app/core/auth-user.service.ts");
            /* harmony import */ var src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/menu.service */ "./src/app/core/menu.service.ts");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent(authUserService, menuService) {
                    this.authUserService = authUserService;
                    this.menuService = menuService;
                    this.sidebarOpen$ = this.menuService.sidebarOpen$;
                }
                SidebarComponent.prototype.ngOnInit = function () {
                    this.user = this.authUserService.user;
                };
                return SidebarComponent;
            }());
            SidebarComponent.ctorParameters = function () { return [
                { type: src_app_core_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
                { type: src_app_core_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
            ]; };
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/home/sidebar/sidebar.component.scss")).default]
                })
            ], SidebarComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map