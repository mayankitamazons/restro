(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-manager-staff-manager-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/confirm-delete/confirm-delete.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/confirm-delete/confirm-delete.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Confirm Delete</h4>\n    <button class=\"close\" (click)=\"cancel()\" type=\"button\">x</button>\n\n</div>\n<div class=\"modal-body\">\n    <div class=\"form-group\">\n        <div class=\"alert alert-danger\">\n            Are you sure you want to delete {{staff.name}}?\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-lg-offset-2 col-lg-10\">\n\n            <button class=\"btn btn-outline-danger\" (click)=\"cancel()\">Cancel</button>\n            <button class=\"btn btn-danger ml-3\" type=\"submit\" (click)=\"delete()\">Delete</button>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/create/user-create.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/create/user-create.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12\">\n    <div class=\"card\">\n        <div class=\"card-title\">\n            <h4>Add a staff</h4>\n\n        </div>\n        <div class=\"card-body\">\n            <app-user-form [operation]=\"'CREATE'\" [staff]=\"staff\"></app-user-form>\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/detail/user-detail.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/detail/user-detail.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <section id=\"main-content\"> -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"user-profile\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-lg-4\">\n                                <div class=\"user-photo m-b-30\">\n                                    <img class=\"img-fluid\" src=\"assets/images/user-profile.jpg\" alt=\"\" />\n                                </div> -->\n                                <!-- <div class=\"user-work\">\n                                    <h4>work</h4>\n                                    <div class=\"work-content\">\n                                        <h3>It Solution </h3>\n                                        <p>123, South Mugda</p>\n                                        <p>New York, 1214</p>\n                                    </div>\n                                    <div class=\"work-content\">\n                                        <h3>Unix</h3>\n                                        <p>123, South Mugda</p>\n                                        <p>New York, 1214</p>\n                                    </div>\n                                </div>\n                                <div class=\"user-skill\">\n                                    <h4>Skill</h4>\n                                    <ul>\n                                        <li><a href=\"#\">Branding</a></li>\n                                        <li><a href=\"#\">UI/UX</a></li>\n                                        <li><a href=\"#\">Web Design</a></li>\n                                        <li><a href=\"#\">Wordpress</a></li>\n                                        <li><a href=\"#\">Magento</a></li>\n                                    </ul>\n                                </div> -->\n                            <!-- </div> -->\n                            <div class=\"col-lg-8\">\n                                <div class=\"user-profile-name\">{{ staff && staff.name }}</div>\n                                <div class=\"user-Location\"><i class=\"ti-location-pin\"></i> {{ staff && staff.city }}</div>\n                                <div class=\"user-job-title\">{{ staff && staff.status }}</div>\n                                <!-- <div class=\"ratings\">\n                                    <h4>Ratings</h4>\n                                    <div class=\"rating-star\">\n                                        <span>8.9</span>\n                                        <i class=\"ti-star color-primary\"></i>\n                                        <i class=\"ti-star color-primary\"></i>\n                                        <i class=\"ti-star color-primary\"></i>\n                                        <i class=\"ti-star color-primary\"></i>\n                                        <i class=\"ti-star\"></i>\n                                    </div>\n                                </div> -->\n                                <div class=\"user-send-message\"><button class=\"btn btn-primary btn-addon\"\n                                        type=\"button\"><i class=\"ti-email\"></i>Send Message</button></div>\n                                <div class=\"custom-tab user-profile-tab\">\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                        <li role=\"presentation\" class=\"active\"><a href=\"#1\" aria-controls=\"1\" role=\"tab\"\n                                                data-toggle=\"tab\">About</a></li>\n                                    </ul>\n                                    <div class=\"tab-content\">\n                                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"1\">\n                                            <div class=\"contact-information\">\n                                                <h4>staff information</h4>\n                                                <div class=\"phone-content\">\n                                                    <span class=\"contact-title\">Phone:</span>\n                                                    <span class=\"phone-number\">{{staff && staff.mobile}}</span>\n                                                </div>\n                                                <div class=\"address-content\">\n                                                    <span class=\"contact-title\">Address:</span>\n                                                    <span class=\"mail-address\">{{staff && staff.address}}</span>\n                                                </div>\n                                                <div class=\"email-content\">\n                                                    <span class=\"contact-title\">Email:</span>\n                                                    <span class=\"contact-email\">{{staff && staff.email}}</span>\n                                                </div>\n                                                <div class=\"address-content\">\n                                                    <span class=\"contact-title\">City:</span>\n                                                    <span class=\"contact-email\">{{staff && staff.city}}</span>\n                                                </div>\n                                                <div class=\"email-content\">\n                                                    <span class=\"contact-title\">Status:</span>\n                                                    <span class=\"contact-email\">{{staff && staff.status}}</span>\n                                                </div>\n                                            </div>\n                                            <!-- <div class=\"basic-information\">\n                                                <h4>Basic information</h4>\n                                                <div class=\"birthday-content\">\n                                                    <span class=\"contact-title\">Birthday:</span>\n                                                    <span class=\"birth-date\">January 31, 1990 </span>\n                                                </div>\n                                                <div class=\"gender-content\">\n                                                    <span class=\"contact-title\">Gender:</span>\n                                                    <span class=\"gender\">Male</span>\n                                                </div>\n                                            </div> -->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n<!-- </section> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/edit-user/edit-user.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/edit-user/edit-user.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12\">\n    <div class=\"card\">\n        <div class=\"card-title\">\n            <h4>Add a staff</h4>\n\n        </div>\n        <div class=\"card-body\">\n            <app-user-form [operation]=\"'UPDATE'\" [staff]=\"staff\"></app-user-form>\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/staff-manager.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/staff-manager.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-form/user-form.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-form/user-form.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"horizontal-form-elements\">\n\n    <form class=\"form-horizontal\" [formGroup]=\"staffForm\" (ngSubmit)=\"submit()\">\n        <div class=\"row\">\n            <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-4 control-label\">Manager Name</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" formControlName=\"name\" required class=\"form-control\"\n                        placeholder=\"Enter restaurant name\">\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-2 control-label\">Email</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"email\" formControlName=\"email\" required class=\"form-control\" placeholder=\"Email\">\n                    <small class=\"text-danger\"\n                        *ngIf=\"staffForm.get('email').dirty && staffForm.get('email').errors && staffForm.get('email').errors['pattern']\">\n                        Please enter a valid email\n                    </small>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-4 control-label\">Mobile number</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"tel\" formControlName=\"mobile\" required class=\"form-control\"\n                        placeholder=\"Enter mobile number\">\n                    <small class=\"text-danger\"\n                        *ngIf=\"staffForm.get('mobile').dirty && staffForm.get('mobile').errors && staffForm.get('mobile').errors['pattern']\">\n                        Please enter a valid mobile number\n                    </small>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-2 control-label\">City</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" formControlName=\"city\" required class=\"form-control\"\n                        placeholder=\"Enter city name\">\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\" *ngIf=\"operation != 'UPDATE'\">\n                <label class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" formControlName=\"password\" required type=\"password\"\n                        placeholder=\"Enter password\">\n                    <div *ngIf=\"staffForm.get('password').dirty && staffForm.get('password').invalid\">\n                        <small class=\"text-danger\"\n                            *ngIf=\"staffForm.get('password').errors && staffForm.get('password').errors['minlength']\">\n                            Password must be atleast 6 characters.\n                        </small>\n                        <small class=\"text-danger\"\n                            *ngIf=\"staffForm.get('password').errors && staffForm.get('password').errors['pattern']\">\n                            Password should contain atleast 1 uppercase, 1 lowercase and 1 number.\n                        </small>\n                        <!-- <small class=\"text-danger\"> Password do not match</small> -->\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\" *ngIf=\"operation != 'UPDATE'\">\n                <label class=\"col-sm-4 control-label\">Confirm Password</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" formControlName=\"confirmPassword\" required type=\"password\"\n                        placeholder=\"Confirm password\">\n                    <small class=\"text-danger\"\n                        *ngIf=\"staffForm.get('confirmPassword').dirty && staffForm.get('confirmPassword').value != staffForm.get('password').value\">\n                        Password do not match</small>\n                </div>\n            </div>\n\n            <!-- /# column -->\n            <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-2 control-label\">Status</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" formControlName=\"status\" required>\n                        <option value=\"Active\">Active</option>\n                        <option value=\"Inactive\">Inactive</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6\" *ngIf=\"operation != 'UPDATE'\">\n                <label class=\"col-sm-2 control-label\">Restaurant</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" formControlName=\"vendor_id\" required>\n                        <option value=\"\" selected hidden > <i>Select Restaurant</i></option>\n                        <option [value]=\"vendor._id\"  *ngFor=\"let vendor of vendorList$ | async; let i = index\">{{ vendor.name }}</option>\n                        <!-- <option value=\"Inactive\">Inactive</option> -->\n                    </select>\n                </div>\n            </div>\n            <!-- <div class=\"form-group col-lg-6\">\n                <label class=\"col-sm-2 control-label\">Address</label>\n                <div class=\"col-sm-10\">\n                    <textarea formControlName=\"address\" required rows=\"5\" cols=\"100\"\n                        placeholder=\"Enter address\"></textarea>\n                </div>\n            </div> -->\n        </div>\n        <!-- /# column -->\n        <div class=\"form-group text-center\">\n            <button [disabled]=\"progressing\" routerLink=\"../\" class=\"btn btn-outline-primary\">\n                Cancel\n            </button>\n            <button *ngIf=\" operation != 'UPDATE'\"\n                [disabled]=\"staffForm.invalid || progressing || (staffForm.get('confirmPassword').value != staffForm.get('password').value)\"\n                type=\"submit\" class=\"btn btn-primary ml-3\">\n                <span *ngIf=\"progressing\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                    aria-hidden=\"true\"></span>\n                Create\n            </button>\n            <button *ngIf=\" operation == 'UPDATE'\" [disabled]=\"staffForm.invalid || progressing\" type=\"submit\"\n                class=\"btn btn-primary ml-3\">\n                <span *ngIf=\"progressing\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                    aria-hidden=\"true\"></span>\n                Update\n            </button>\n        </div>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-list/user-list.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-list/user-list.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"height: 100%;\">\n    <div class=\"card-title\">\n        <h4>Managers </h4>\n        <button class=\"btn btn-primary pull-right\" routerLink=\"../create\">Add a new manager</button>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-responsive \">\n            <table class=\"table table-striped mr-5\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Name</th>\n                        <th>Mobile</th>\n                        <th>City</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let staff of staffList$ | async; let i = index\">\n                        <th scope=\"row\">{{i+1}}</th>\n                        <td>{{staff['name']}}</td>\n                        <td> {{staff['mobile']}} </td>\n                        <td>{{staff['city']}}</td>\n                        <td>{{staff['status']}}</td>\n                        <td>\n                            <a [routerLink]=\"['/manager/detail', staff['_id']]\">View</a> |\n                            <a [routerLink]=\"['/manager/edit', staff['_id']]\">Edit</a> |\n                            <a class=\"text-danger\" href=\"javascript:void(0)\" (click)=deletestaff(staff)>Delete</a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/staff-manager/confirm-delete/confirm-delete.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/staff-manager/confirm-delete/confirm-delete.component.ts ***!
          \**************************************************************************/
        /*! exports provided: ConfirmDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function () { return ConfirmDeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _staff_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staff-manager.service */ "./src/app/staff-manager/staff-manager.service.ts");
            var ConfirmDeleteComponent = /** @class */ (function () {
                function ConfirmDeleteComponent(activeModal, staffManagerService) {
                    this.activeModal = activeModal;
                    this.staffManagerService = staffManagerService;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                ConfirmDeleteComponent.prototype.ngOnInit = function () {
                };
                ConfirmDeleteComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                ConfirmDeleteComponent.prototype.delete = function () {
                    var _this = this;
                    this.staffManagerService.deleteStaff(this.staff._id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubcribe))
                        .subscribe(function (data) {
                        _this.activeModal.close(true);
                        console.log('data: ', data.staff);
                    });
                };
                ConfirmDeleteComponent.prototype.cancel = function () {
                    this.activeModal.close(false);
                };
                return ConfirmDeleteComponent;
            }());
            ConfirmDeleteComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
                { type: _staff_manager_service__WEBPACK_IMPORTED_MODULE_5__["StaffManagerService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDeleteComponent.prototype, "staff", void 0);
            ConfirmDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-confirm-delete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/confirm-delete/confirm-delete.component.html")).default
                })
            ], ConfirmDeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/create/user-create.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/staff-manager/create/user-create.component.ts ***!
          \***************************************************************/
        /*! exports provided: CreateUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function () { return CreateUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var CreateUserComponent = /** @class */ (function () {
                function CreateUserComponent() {
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    // staffForm: FormGroup;
                    // creating = false;
                    // error: string;
                    this.staff = {
                        name: '',
                        email: '',
                        address: '',
                        city: '',
                        mobile: '',
                        status: 'Active'
                    };
                }
                CreateUserComponent.prototype.ngOnInit = function () { };
                CreateUserComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                return CreateUserComponent;
            }());
            CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/create/user-create.component.html")).default
                })
            ], CreateUserComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/detail/staff-detail-resolver.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/staff-manager/detail/staff-detail-resolver.service.ts ***!
          \***********************************************************************/
        /*! exports provided: StaffDetailResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDetailResolver", function () { return StaffDetailResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _staff_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff-manager.service */ "./src/app/staff-manager/staff-manager.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var StaffDetailResolver = /** @class */ (function () {
                function StaffDetailResolver(staffManagerService) {
                    this.staffManagerService = staffManagerService;
                }
                StaffDetailResolver.prototype.resolve = function (route, _state) {
                    console.log('router', route.params);
                    return this.staffManagerService.getStaff(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
                    }));
                };
                return StaffDetailResolver;
            }());
            StaffDetailResolver.ctorParameters = function () { return [
                { type: _staff_manager_service__WEBPACK_IMPORTED_MODULE_2__["StaffManagerService"] }
            ]; };
            StaffDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], StaffDetailResolver);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/detail/user-detail.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/staff-manager/detail/user-detail.component.ts ***!
          \***************************************************************/
        /*! exports provided: UserDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () { return UserDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UserDetailComponent = /** @class */ (function () {
                function UserDetailComponent(activatedRoute) {
                    this.activatedRoute = activatedRoute;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                UserDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.data
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubcribe))
                        .subscribe(function (data) {
                        _this.staff = data.staff;
                        console.log('data: ', data.staff);
                    });
                };
                UserDetailComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                return UserDetailComponent;
            }());
            UserDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/detail/user-detail.component.html")).default
                })
            ], UserDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/edit-user/edit-user.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/staff-manager/edit-user/edit-user.component.ts ***!
          \****************************************************************/
        /*! exports provided: EditUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () { return EditUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var EditUserComponent = /** @class */ (function () {
                function EditUserComponent(activatedRoute) {
                    this.activatedRoute = activatedRoute;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                EditUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.data
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubcribe))
                        .subscribe(function (data) {
                        _this.staff = data.staff;
                        console.log('data: ', data.staff);
                    });
                };
                EditUserComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                return EditUserComponent;
            }());
            EditUserComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/edit-user/edit-user.component.html")).default
                })
            ], EditUserComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/staff-manager-routing.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/staff-manager/staff-manager-routing.module.ts ***!
          \***************************************************************/
        /*! exports provided: StaffManagerRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerRoutingModule", function () { return StaffManagerRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _staff_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-manager.component */ "./src/app/staff-manager/staff-manager.component.ts");
            /* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/staff-manager/user-list/user-list.component.ts");
            /* harmony import */ var _create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/user-create.component */ "./src/app/staff-manager/create/user-create.component.ts");
            /* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/staff-manager/edit-user/edit-user.component.ts");
            /* harmony import */ var _detail_staff_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/staff-detail-resolver.service */ "./src/app/staff-manager/detail/staff-detail-resolver.service.ts");
            /* harmony import */ var _detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/user-detail.component */ "./src/app/staff-manager/detail/user-detail.component.ts");
            var routes = [
                {
                    path: '',
                    component: _staff_manager_component__WEBPACK_IMPORTED_MODULE_3__["StaffManagerComponent"],
                    children: [
                        { path: '', redirectTo: 'list', pathMatch: 'full' },
                        {
                            path: 'list',
                            component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
                        },
                        {
                            path: 'create',
                            component: _create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"]
                        },
                        {
                            path: 'edit/:id',
                            component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"],
                            resolve: { staff: _detail_staff_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["StaffDetailResolver"] }
                        },
                        {
                            path: 'detail/:id',
                            component: _detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"],
                            resolve: { staff: _detail_staff_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["StaffDetailResolver"] }
                        },
                        { path: '**', redirectTo: 'list' }
                    ]
                }
            ];
            var StaffManagerRoutingModule = /** @class */ (function () {
                function StaffManagerRoutingModule() {
                }
                return StaffManagerRoutingModule;
            }());
            StaffManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    providers: [_detail_staff_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["StaffDetailResolver"]]
                })
            ], StaffManagerRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/staff-manager.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/staff-manager/staff-manager.component.ts ***!
          \**********************************************************/
        /*! exports provided: StaffManagerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerComponent", function () { return StaffManagerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StaffManagerComponent = /** @class */ (function () {
                function StaffManagerComponent() {
                }
                StaffManagerComponent.prototype.ngOnInit = function () { };
                return StaffManagerComponent;
            }());
            StaffManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-staff-manager',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staff-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/staff-manager.component.html")).default
                })
            ], StaffManagerComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/staff-manager.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/staff-manager/staff-manager.module.ts ***!
          \*******************************************************/
        /*! exports provided: StaffManagerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerModule", function () { return StaffManagerModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-manager-routing.module */ "./src/app/staff-manager/staff-manager-routing.module.ts");
            /* harmony import */ var _staff_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-manager.component */ "./src/app/staff-manager/staff-manager.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _staff_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-manager.service */ "./src/app/staff-manager/staff-manager.service.ts");
            /* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/staff-manager/user-list/user-list.component.ts");
            /* harmony import */ var _create_user_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create/user-create.component */ "./src/app/staff-manager/create/user-create.component.ts");
            /* harmony import */ var _detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/user-detail.component */ "./src/app/staff-manager/detail/user-detail.component.ts");
            /* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/staff-manager/user-form/user-form.component.ts");
            /* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/staff-manager/edit-user/edit-user.component.ts");
            /* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/staff-manager/confirm-delete/confirm-delete.component.ts");
            var StaffManagerModule = /** @class */ (function () {
                function StaffManagerModule() {
                }
                return StaffManagerModule;
            }());
            StaffManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_staff_manager_component__WEBPACK_IMPORTED_MODULE_4__["StaffManagerComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"], _create_user_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"], _detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmDeleteComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffManagerRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"]
                    ],
                    providers: [_staff_manager_service__WEBPACK_IMPORTED_MODULE_7__["StaffManagerService"]],
                    entryComponents: [_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmDeleteComponent"]]
                })
            ], StaffManagerModule);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/staff-manager.service.ts": 
        /*!********************************************************!*\
          !*** ./src/app/staff-manager/staff-manager.service.ts ***!
          \********************************************************/
        /*! exports provided: StaffManagerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerService", function () { return StaffManagerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _core_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/staff.service */ "./src/app/core/staff.service.ts");
            /* harmony import */ var _core_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/vendor.service */ "./src/app/core/vendor.service.ts");
            var StaffManagerService = /** @class */ (function () {
                function StaffManagerService(staffService, vendorService) {
                    this.staffService = staffService;
                    this.vendorService = vendorService;
                    this._staffList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
                    this._vendorList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
                    this.getVendorList();
                }
                Object.defineProperty(StaffManagerService.prototype, "staffList$", {
                    get: function () {
                        return this._staffList$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StaffManagerService.prototype, "vendorList$", {
                    get: function () {
                        return this._vendorList$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                StaffManagerService.prototype.createStaff = function (user) {
                    var staff = {
                        name: user['name'],
                        email: user['email'],
                        password: user['password'],
                        city: user['city'],
                        mobile: user['mobile'],
                        status: user['status']
                    };
                    return this.staffService.createStaff(staff);
                };
                StaffManagerService.prototype.updateStaff = function (user) {
                    var staff = {
                        _id: user['_id'],
                        name: user['name'],
                        email: user['email'],
                        city: user['city'],
                        mobile: user['mobile'],
                        status: user['status']
                    };
                    return this.staffService.updateStaff(staff);
                };
                StaffManagerService.prototype.deleteStaff = function (id) {
                    return this.staffService.deleteStaff(id);
                };
                StaffManagerService.prototype.getStaff = function (id) {
                    return this.staffService.getStaff(id);
                };
                StaffManagerService.prototype.getStaffList = function () {
                    var _this = this;
                    this.staffService.getStaffList()
                        .subscribe(function (data) {
                        console.log('Got Staffs for you: ', data);
                        _this._staffList$.next(data);
                    });
                };
                StaffManagerService.prototype.getVendorList = function () {
                    var _this = this;
                    this.vendorService.getVendorList()
                        .subscribe(function (data) {
                        console.log('Got Vendors for you: ', data);
                        _this._vendorList$.next(data);
                    });
                };
                return StaffManagerService;
            }());
            StaffManagerService.ctorParameters = function () { return [
                { type: _core_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
                { type: _core_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"] }
            ]; };
            StaffManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], StaffManagerService);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/user-form/user-form.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/staff-manager/user-form/user-form.component.ts ***!
          \****************************************************************/
        /*! exports provided: UserFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () { return UserFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _staff_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staff-manager.service */ "./src/app/staff-manager/staff-manager.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UserFormComponent = /** @class */ (function () {
                function UserFormComponent(router, formBuilder, staffService) {
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.staffService = staffService;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.progressing = false;
                    this.operation = "CREATE";
                    this.vendorList$ = this.staffService.vendorList$;
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    console.log('staff: ', this.staff);
                    if (this.operation === 'UPDATE') {
                        this.staffForm = this.formBuilder.group({
                            _id: this.staff._id,
                            name: [this.staff['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            email: [this.staff['email'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                            city: [this.staff['city'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            mobile: [this.staff['mobile'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)]],
                            status: [this.staff['status'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            vendor_id: this.staff.vendor_id,
                        });
                    }
                    else {
                        this.staffForm = this.formBuilder.group({
                            name: [this.staff['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            email: [this.staff['email'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]],
                            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            city: [this.staff['city'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            mobile: [this.staff['mobile'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)]],
                            status: [this.staff['status'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            vendor_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                        });
                    }
                };
                UserFormComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                UserFormComponent.prototype.submit = function () {
                    var _this = this;
                    this.progressing = true;
                    console.log('staff Form Values: ', this.staffForm.value);
                    if (this.operation == 'UPDATE') {
                        this.staffService.updateStaff(this.staffForm.value)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubcribe))
                            .subscribe({
                            next: function (data) {
                                _this.progressing = false;
                                console.log('data: ', data);
                                _this.router.navigate(['/manager/detail', _this.staff['_id']]);
                            },
                            error: function (data) {
                                console.log('data: ', data);
                                _this.progressing = false;
                            }
                        });
                    }
                    else {
                        this.staffService.createStaff(this.staffForm.value)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubcribe))
                            .subscribe({
                            next: function (data) {
                                _this.progressing = false;
                                console.log('data: ', data);
                                _this.router.navigate(['/manager']);
                            },
                            error: function (data) {
                                console.log('data: ', data);
                                _this.progressing = false;
                            }
                        });
                    }
                };
                return UserFormComponent;
            }());
            UserFormComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _staff_manager_service__WEBPACK_IMPORTED_MODULE_5__["StaffManagerService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserFormComponent.prototype, "operation", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserFormComponent.prototype, "staff", void 0);
            UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-form/user-form.component.html")).default
                })
            ], UserFormComponent);
            /***/ 
        }),
        /***/ "./src/app/staff-manager/user-list/user-list.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/staff-manager/user-list/user-list.component.ts ***!
          \****************************************************************/
        /*! exports provided: UserListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function () { return UserListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-delete/confirm-delete.component */ "./src/app/staff-manager/confirm-delete/confirm-delete.component.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _staff_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../staff-manager.service */ "./src/app/staff-manager/staff-manager.service.ts");
            var UserListComponent = /** @class */ (function () {
                function UserListComponent(staffManagerService, ModalService) {
                    this.staffManagerService = staffManagerService;
                    this.ModalService = ModalService;
                    this.ngUnsubcribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.staffList$ = this.staffManagerService.staffList$;
                }
                UserListComponent.prototype.ngOnInit = function () {
                    this.staffManagerService.getStaffList();
                };
                UserListComponent.prototype.ngOnDestroy = function () {
                    this.ngUnsubcribe.next();
                    this.ngUnsubcribe.complete();
                };
                UserListComponent.prototype.deletestaff = function (staff) {
                    var _this = this;
                    var modalRef = this.ModalService.open(_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDeleteComponent"], {
                        size: 'lg',
                        backdrop: 'static'
                    });
                    modalRef.componentInstance.staff = staff;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(modalRef.result)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubcribe))
                        .subscribe(function () { return _this.staffManagerService.getStaffList(); });
                };
                return UserListComponent;
            }());
            UserListComponent.ctorParameters = function () { return [
                { type: _staff_manager_service__WEBPACK_IMPORTED_MODULE_6__["StaffManagerService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
            ]; };
            UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-manager/user-list/user-list.component.html")).default
                })
            ], UserListComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=staff-manager-staff-manager-module-es2015.js.map
//# sourceMappingURL=staff-manager-staff-manager-module-es5.js.map
//# sourceMappingURL=staff-manager-staff-manager-module-es5.js.map