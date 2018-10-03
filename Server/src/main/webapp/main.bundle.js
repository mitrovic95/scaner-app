webpackJsonp([1,4],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : '';
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().role.indexOf('SuperAdmin') >= 0;
        }
        return false;
    };
    // isAdmin() {
    //   if (this.getCurrentUser()) {
    //     return this.getCurrentUser().role.indexOf('SuperAdmin') >= 0;
    //   }
    //   return false;
    // }
    // isSuperAdmin() {
    //   if (this. getCurrentUser()) {
    //     return this.getCurrentUser().role.indexOf('SuperAdmin') >= 0;
    //   }
    //   return false;
    // }
    AuthenticationService.prototype.isCompanyAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().role.indexOf('CompanyAdmin') >= 0;
        }
        return false;
    };
    AuthenticationService.prototype.getUserRoles = function () {
        if (this.getCurrentUser() && this.getCurrentUser().role) {
            return this.getCurrentUser().role;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication-service.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BarcodeComponent = (function () {
    function BarcodeComponent() {
    }
    return BarcodeComponent;
}());
BarcodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-barcode',
        template: "\n    <mat-card class=\"text-center\">\n      <h3 class=\"text-center\">Barcode Scanner</h3>\n      <p>User Instant Search or Alternatively you can upload your barcode or scan via webcam/camera</p>\n      <button mat-fab [routerLink]=\"['field']\">\n        <mat-icon>file_upload</mat-icon>\n      </button>\n      <button mat-fab [routerLink]=\"['media']\">\n        <mat-icon>camera</mat-icon>\n      </button>\n    </mat-card>\n\n    <mat-card>\n      <router-outlet></router-outlet>\n    </mat-card>\n  ",
        styles: [__webpack_require__(509)],
    })
], BarcodeComponent);

//# sourceMappingURL=barcode.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_barcode_decoder_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_barcode_validator_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaStreamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MediaStreamComponent = (function () {
    function MediaStreamComponent(decoderService, barcodeValidator) {
        this.decoderService = decoderService;
        this.barcodeValidator = barcodeValidator;
        this.code$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ;
    MediaStreamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.decoderService.onLiveStreamInit();
        this.decoderService.onDecodeProcessed();
        this.decoderService
            .onDecodeDetected()
            .then(function (code) {
            _this.lastResult = code;
            _this.decoderService.onPlaySound();
            _this.code$.next(code);
        })
            .catch(function (err) { return _this.error = "Something Wrong: " + err; });
        this.barcodeValidator
            .doSearchbyCode(this.code$)
            .subscribe(function (res) { return _this.message = res; }, function (err) {
            _this.message = "An Error! " + err.json().error;
        });
    };
    MediaStreamComponent.prototype.ngAfterContentInit = function () {
        this.interactive.nativeElement.children[0].style.position = 'absolute';
    };
    MediaStreamComponent.prototype.ngOnDestroy = function () {
        this.decoderService.onDecodeStop();
    };
    return MediaStreamComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('interactive'),
    __metadata("design:type", Object)
], MediaStreamComponent.prototype, "interactive", void 0);
MediaStreamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-media-stream-barcode',
        template: __webpack_require__(587),
        styles: [__webpack_require__(510)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_barcode_decoder_service__["a" /* BarcodeDecoderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_barcode_decoder_service__["a" /* BarcodeDecoderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_barcode_validator_service__["a" /* BarcodeValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_barcode_validator_service__["a" /* BarcodeValidatorService */]) === "function" && _b || Object])
], MediaStreamComponent);

var _a, _b;
//# sourceMappingURL=media-stream.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// modules
var SHARED_COMPONENTS = [];
var SHARED_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
    __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatCommonModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
];
var PROVIDERS = [];
/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: SHARED_MODULES.slice(),
        declarations: SHARED_COMPONENTS.slice(),
        exports: SHARED_MODULES.concat(SHARED_COMPONENTS),
        providers: PROVIDERS.slice(),
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    return ExcelService;
}());
ExcelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ExcelService);

//# sourceMappingURL=excel.service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quagga__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quagga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quagga__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeDecoderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarcodeDecoderService = (function () {
    function BarcodeDecoderService() {
        this.sound = new Audio('assets/barcode.wav');
    }
    BarcodeDecoderService.prototype.onDecodeSingle = function (src) {
        __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["a" /* DECODER_CONFIG */].src = src;
        // Promisify DecodeSingle method from Quagga
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_quagga__["decodeSingle"](__WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["a" /* DECODER_CONFIG */], function (result) {
                if (!result || typeof result.codeResult === 'undefined') {
                    reject('File Cannot be Decode, Please Try a Valid Barcode;');
                }
                resolve(result.codeResult.code);
            });
        });
    };
    BarcodeDecoderService.prototype.setLiveStreamConfig = function () {
        __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["b" /* DECODER_LIVE_CONFIG */].inputStream = {
            type: 'LiveStream',
            constraints: {
                width: { min: 640 },
                height: { min: 480 },
                facingMode: 'environment',
                aspectRatio: {
                    min: 1,
                    max: 2,
                },
            },
        };
        return __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["b" /* DECODER_LIVE_CONFIG */];
    };
    BarcodeDecoderService.prototype.onLiveStreamInit = function () {
        var state = this.setLiveStreamConfig();
        __WEBPACK_IMPORTED_MODULE_2_quagga__["init"](state, function (err) {
            if (err) {
                return console.error(err);
            }
            __WEBPACK_IMPORTED_MODULE_2_quagga__["start"]();
        });
    };
    BarcodeDecoderService.prototype.onProcessed = function (result) {
        // tslint:disable-next-line:prefer-const
        var drawingCtx = __WEBPACK_IMPORTED_MODULE_2_quagga__["canvas"].ctx.overlay, 
        // tslint:disable-next-line:prefer-const
        drawingCanvas = __WEBPACK_IMPORTED_MODULE_2_quagga__["canvas"].dom.overlay;
        if (result) {
            if (result.boxes) {
                // tslint:disable-next-line:radix
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    __WEBPACK_IMPORTED_MODULE_2_quagga__["ImageDebug"].drawPath(box, {
                        x: 0,
                        y: 1,
                    }, drawingCtx, {
                        color: 'green',
                        lineWidth: 2,
                    });
                });
            }
            if (result.box) {
                __WEBPACK_IMPORTED_MODULE_2_quagga__["ImageDebug"].drawPath(result.box, {
                    x: 0,
                    y: 1,
                }, drawingCtx, {
                    color: '#00F',
                    lineWidth: 2,
                });
            }
            if (result.codeResult && result.codeResult.code) {
                __WEBPACK_IMPORTED_MODULE_2_quagga__["ImageDebug"].drawPath(result.line, {
                    x: 'x',
                    y: 'y',
                }, drawingCtx, {
                    color: 'red',
                    lineWidth: 3,
                });
            }
        }
    };
    BarcodeDecoderService.prototype.onDecodeProcessed = function () {
        __WEBPACK_IMPORTED_MODULE_2_quagga__["onProcessed"](this.onProcessed);
    };
    BarcodeDecoderService.prototype.onDecodeDetected = function () {
        // Promisify OnDetected method from Quagga
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_quagga__["onDetected"](function (result) {
                if (!result || typeof result.codeResult === 'undefined') {
                    reject('Cannot be Detected, Please Try again!');
                }
                resolve(result.codeResult.code);
            });
        });
    };
    BarcodeDecoderService.prototype.onDecodeStop = function () {
        __WEBPACK_IMPORTED_MODULE_2_quagga__["stop"]();
        // tslint:disable-next-line:no-console
        console.info('Camera Stopped Working!');
    };
    BarcodeDecoderService.prototype.onPlaySound = function () {
        this.sound.play();
    };
    return BarcodeDecoderService;
}());
BarcodeDecoderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BarcodeDecoderService);

//# sourceMappingURL=barcode-decoder.service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeValidatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodeValidatorService = (function () {
    function BarcodeValidatorService(_http) {
        this._http = _http;
        // tslint:disable-next-line:member-ordering
        this.endpoints = {
            // tslint:disable-next-line:whitespace
            search: 'https://exmpale-barcode-service.com',
        };
    }
    BarcodeValidatorService.prototype.doSearchbyCode = function (codes, debounceMs) {
        var _this = this;
        if (debounceMs === void 0) { debounceMs = 400; }
        return codes
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["debounceTime"])(debounceMs), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["distinctUntilChanged"])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (code) { return _this.rawSearchByCode(code); }));
    };
    BarcodeValidatorService.prototype.rawSearchByCode = function (code) {
        /** Uncomment if you have you want to active your barcode service to be validated from a URL
         return this._http
         .get(`${this.endpoints.search}${code}`)
         .pipe(
         catchError(this.handleError),
         )
         */
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])('Your Barcode Service Provider Sample Message');
    };
    BarcodeValidatorService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return BarcodeValidatorService;
}());
BarcodeValidatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], BarcodeValidatorService);

var _a;
//# sourceMappingURL=barcode-validator.service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtUtilsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    return JwtUtilsService;
}());
JwtUtilsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], JwtUtilsService);

//# sourceMappingURL=jwt-utils.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(415);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.logIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent.prototype.toggleLogIn = function () {
        this.logIn = !this.logIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(586),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_page_item_page_item_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_main_page_main_page_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meni_component_meni_component_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_service_jwt_utils_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_service_can_activate_auth_guard__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_service_token_interceptor_service__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_login_login_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_page_page_not_found_page_not_found_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_user_page_user_page_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_item_page_item_page_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__page_company_page_company_page_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_user_page_new_update_user_new_update_user_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_item_page_new_update_item_new_update_item_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__page_company_page_new_update_company_new_update_company_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__page_item_page_item_item_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forms_form_form_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_user_page_user_user_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__page_company_page_company_company_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_page_company_page_company_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__page_company_page_new_company_new_company_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_page_item_page_excel_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__page_item_page_new_item_new_item_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__page_user_page_new_user_new_user_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_toastr_ng2_toastr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__toastr_ToastrCustomOptions__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_src_toast_options__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_src_toast_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_toastr_src_toast_options__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_toastr_src_toast_manager__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_toastr_src_toast_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng2_toastr_src_toast_manager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_validation__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_app_shared_toolbar_toolbar_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_app_shared_sidenav_sidenav_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_shared_fab_menu_fab_menu_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_app_barcode_barcode_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_modules_core_module__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_app_barcode_media_stream_media_stream_component__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14_app_login_login_component__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__page_main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'user-page', component: __WEBPACK_IMPORTED_MODULE_16__page_user_page_user_page_component__["a" /* UserPageComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_24__page_user_page_user_user_component__["a" /* UserComponent */] },
    { path: 'new-user', component: __WEBPACK_IMPORTED_MODULE_30__page_user_page_new_user_new_user_component__["a" /* NewUserComponent */] },
    { path: 'item-page', component: __WEBPACK_IMPORTED_MODULE_17__page_item_page_item_page_component__["a" /* ItemPageComponent */] },
    { path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_22__page_item_page_item_item_component__["a" /* ItemComponent */] },
    { path: 'new-item', component: __WEBPACK_IMPORTED_MODULE_29__page_item_page_new_item_new_item_component__["a" /* NewItemComponent */] },
    { path: 'company-page', component: __WEBPACK_IMPORTED_MODULE_18__page_company_page_company_page_component__["a" /* CompanyPageComponent */] },
    { path: 'company/:id', component: __WEBPACK_IMPORTED_MODULE_25__page_company_page_company_company_component__["a" /* CompanyComponent */] },
    { path: 'new-company', component: __WEBPACK_IMPORTED_MODULE_27__page_company_page_new_company_new_company_component__["a" /* NewCompanyComponent */] },
    { path: 'media-stream-barcode', component: __WEBPACK_IMPORTED_MODULE_42_app_barcode_media_stream_media_stream_component__["a" /* MediaStreamComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15_app_page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_2__page_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_37_app_shared_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_38_app_shared_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_39_app_shared_fab_menu_fab_menu_component__["a" /* FabMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__meni_component_meni_component_component__["a" /* MeniComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__page_user_page_user_page_component__["a" /* UserPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__page_item_page_item_page_component__["a" /* ItemPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__page_company_page_company_page_component__["a" /* CompanyPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__page_user_page_new_update_user_new_update_user_component__["a" /* NewUpdateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__page_item_page_new_update_item_new_update_item_component__["a" /* NewUpdateItemComponent */],
            __WEBPACK_IMPORTED_MODULE_21__page_company_page_new_update_company_new_update_company_component__["a" /* NewUpdateCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__page_item_page_item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__forms_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_24__page_user_page_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_25__page_company_page_company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__page_company_page_new_company_new_company_component__["a" /* NewCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_29__page_item_page_new_item_new_item_component__["a" /* NewItemComponent */],
            __WEBPACK_IMPORTED_MODULE_30__page_user_page_new_user_new_user_component__["a" /* NewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_42_app_barcode_media_stream_media_stream_component__["a" /* MediaStreamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_31_ng2_toastr_ng2_toastr__["ToastModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_36_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_40_app_barcode_barcode_module__["a" /* BarcodeModule */],
            __WEBPACK_IMPORTED_MODULE_41_app_modules_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                enableTracing: false
            })
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_11_app_service_token_interceptor_service__["a" /* TokenInterceptorService */],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_10_app_service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0_app_page_item_page_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_26_app_page_company_page_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_28_app_page_item_page_excel_service__["a" /* ExcelService */],
            __WEBPACK_IMPORTED_MODULE_9_app_service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8_app_service_jwt_utils_service__["a" /* JwtUtilsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_src_toast_options__["ToastOptions"],
                useClass: __WEBPACK_IMPORTED_MODULE_32__toastr_ToastrCustomOptions__["a" /* ToastrCustomOptions */],
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_34_ng2_toastr_src_toast_manager__["ToastsManager"],
                useClass: __WEBPACK_IMPORTED_MODULE_34_ng2_toastr_src_toast_manager__["ToastsManager"]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode_route__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__barcode_component__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { InstantSearchComponent } from './instant-search/instant-search.component';
// import { InputFieldComponent } from './input-field/input-field.component';
// import { MediaStreamComponent } from './media-stream/media-stream.component';
var BarcodeModule = (function () {
    function BarcodeModule() {
    }
    return BarcodeModule;
}());
BarcodeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__barcode_route__["a" /* BarcodeRouteModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__barcode_component__["a" /* BarcodeComponent */],
        ],
    })
], BarcodeModule);

//# sourceMappingURL=barcode.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_stream_media_stream_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__barcode_component__ = __webpack_require__(180);
/* unused harmony export BARCODE_ROUTE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeRouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { InputFieldComponent } from './input-field/input-field.component';
// import { InstantSearchComponent } from './instant-search/instant-search.component';

var BARCODE_ROUTE = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__barcode_component__["a" /* BarcodeComponent */],
        children: [
            {
                path: '',
                redirectTo: '/barcode/upload',
                pathMatch: 'full',
            },
            // {
            //   path: 'upload',
            //   component: InstantSearchComponent,
            //   pathMatch: 'full',
            // },
            {
                path: 'media',
                component: __WEBPACK_IMPORTED_MODULE_2__media_stream_media_stream_component__["a" /* MediaStreamComponent */],
                pathMatch: 'full',
            },
        ],
    },
];
var BarcodeRouteModule = (function () {
    function BarcodeRouteModule() {
    }
    return BarcodeRouteModule;
}());
BarcodeRouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(BARCODE_ROUTE),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */],
        ],
    })
], BarcodeRouteModule);

//# sourceMappingURL=barcode.route.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECODER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECODER_LIVE_CONFIG; });
var DECODER_CONFIG;
DECODER_CONFIG = {
    inputStream: {
        size: 800,
    },
    locator: {
        patchSize: 'medium',
        halfSample: false,
    },
    numOfWorkers: 1,
    decoder: {
        // readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
        //   'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
        readers: ['ean_reader'],
    },
    locate: true,
    src: null,
};
var DECODER_LIVE_CONFIG;
DECODER_LIVE_CONFIG = {
    locator: {
        patchSize: 'medium',
        halfSample: false,
    },
    numOfWorkers: 1,
    decoder: {
        // readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
        //   'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
        readers: ['ean_reader'],
    },
    locate: true,
};
//# sourceMappingURL=decoder-config.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Vest } from './../../model/vest';
// import { KategorijaService } from './../../services/kategorija.service';
// import { Kategorija } from './../../model/kategorija';

var FormComponent = (function () {
    // @Output()
    // saveVest: EventEmitter<Vest> = new EventEmitter();
    // public kategorije: Kategorija[];
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
        //  this.load();
        //   this.kategorijaService.getKategorije()
        //   .subscribe(
        //     (data) => { this.kategorije = data} );
    };
    FormComponent.prototype.load = function () {
        // this.vest = {
        //   naslov: null,
        //   tekst: null,
        //   sadrzaj: null,
        //   kategorija:{
        //     name: null
        //   }
        // }
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])()
    // vest: Vest;
    ,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "izmena", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(588),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [])
], FormComponent);

//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.logIn = false;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    LoginComponent.prototype.compareMedia = function () {
        if (window.matchMedia('(max-width: 700px)').matches) {
            this.router.navigate(['media-stream-barcode']);
        }
    };
    LoginComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    // loginRoute(): void {
    //   this.authenticationService.isLoggedIn();
    //   this.router.navigate(['/main']);
    // }
    LoginComponent.prototype.toggleLogIn = function () {
        this.logIn = !this.logIn;
    };
    LoginComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // if (window.matchMedia('(max-width: 700px)').matches) {
        //   this.router.navigate(['company-page']);
        // }
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(589),
        styles: [__webpack_require__(512)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeniComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { kategorijaService } from './kategorija.service';
// import { meniItemService } from './meniItem.service';
// import { meniItem } from './../model/meniItem';
// import { Kategorija } from 'app/model/kategorija';



var MeniComponentComponent = (function () {
    function MeniComponentComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    MeniComponentComponent.prototype.ngOnInit = function () {
        throw new Error('Method not implemented.');
    };
    MeniComponentComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    MeniComponentComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    return MeniComponentComponent;
}());
MeniComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-meni-component',
        template: __webpack_require__(590),
        styles: [__webpack_require__(513)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MeniComponentComponent);

var _a, _b;
//       kategorija:Kategorija[];
//       page:Page<meniItem>;
//       currentPageNumber:number;
//       meniItem:meniItem;
//       forEdit:meniItem;
//       forSearch:meniItem;
//       nameItem: string;
//       constructor(private meniItemService:meniItemService,
//       private kategorijaService:kategorijaService,
//       private authenticationService:AuthenticationService
//       ) {}
//       ngOnInit() {
//         this.currentPageNumber = 0;
//         this.loadData();
//         //load shopping cart
//         this.meniItemService.get().subscribe(
//           (meniItem) => {
//             this.meniItem = meniItem;
//           }
//         );
//         this.kategorijaService.get().subscribe(
//           (kategorija) => {
//             this.kategorija = kategorija;
//           }
//         );
//         this.forEdit = {
//           name:'',
//           kategorija:null,
//           price:0
//         };        
//       }
//       loadData() {   
//         this.meniItemService.getmeniItemComponents(this.currentPageNumber).subscribe(data => {
//           this.page = data;
//           console.log(data);      
//         })
//       }
//     ngOnChanges() {  
//     }
//       findByName(nameItem: string){ 
//        this.meniItemService.filterByName(this.nameItem).subscribe(
//        (data) => {
//         this.page = data;
//         console.log(data);
//         console.log(this.meniItem);
//         }
//        )
//       }
//       changePage(i:number){
//         this.currentPageNumber+=i;
//         this.loadData();
//       }
// isAdmin():boolean{
//   return this.authenticationService.isAdmin();
// }
//       addComponent(meniItem:meniItem){
//         this.meniItemService.savemeniItemComponent(meniItem).subscribe(
//           (savedComp) => {
//             this.loadData();
//           }
//         )
//       }
//       delete(meniItem:meniItem){
//         this.meniItemService.deletemeniItemComponent(meniItem).subscribe(
//           (response) => {
//             this.loadData();
//           },
//           (error) => {
//             console.log('This is not good!', 'Oops!');
//           }
//         );    
//       }
//       edit(meniItem:meniItem){
//         //kopija objekta comp
//         this.forEdit = meniItem;
//       }
// }
//# sourceMappingURL=meni-component.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
var ITEMS = [
    {
        id: 1,
        name: 'String',
        description: 'String',
        orderNumber: 2,
        value: 3,
        barcode: 4212312314,
        category: {
            id: 1,
            name: 'String'
        }
    },
    {
        id: 2,
        name: 'String',
        description: 'String',
        orderNumber: 2,
        value: 3,
        barcode: 44,
        category: {
            id: 2,
            name: 'String'
        }
    }
];
//# sourceMappingURL=item.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_barcode_decoder_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_barcode_validator_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__service_barcode_validator_service__["a" /* BarcodeValidatorService */],
            __WEBPACK_IMPORTED_MODULE_1__service_barcode_decoder_service__["a" /* BarcodeDecoderService */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
        ],
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_page_company_page_company_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyPageComponent = (function () {
    function CompanyPageComponent(companyService, authenticationService, router, route) {
        this.companyService = companyService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    CompanyPageComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    CompanyPageComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    CompanyPageComponent.prototype.ngOnInit = function () {
        this.name = '';
        this.change = false;
        this.ukljuciPretrazivac = false;
        this.loadData();
        this.companyForChange = {
            name: null,
            address: null,
            validLicenceTill: null
        };
    };
    CompanyPageComponent.prototype.reset = function () {
        this.loadData();
        this.change = false;
    };
    CompanyPageComponent.prototype.edit = function (company) {
        this.companyForChange = company;
        this.change = true;
        console.log(this.companyForChange);
    };
    CompanyPageComponent.prototype.delete = function (company) {
        var _this = this;
        console.log('KLIK', company);
        this.companyService.deleteCompany(company)
            .subscribe(function (data) {
            _this.loadData();
        }, function (error) {
            _this.loadData();
        });
    };
    CompanyPageComponent.prototype.loadData = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (data) {
            _this.companies = data;
        });
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
        });
        this.companyService.getCompany(this.id)
            .subscribe(function (data) {
            _this.company = data;
            _this.isDataAvailable = true;
        });
    };
    ;
    CompanyPageComponent.prototype.save = function (company) {
        var _this = this;
        this.companyService.saveCompany(company)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    CompanyPageComponent.prototype.findByName = function (name) {
        var _this = this;
        this.companyService.getCompanyByName(this.name).subscribe(function (data) {
            _this.companies = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    CompanyPageComponent.prototype.resetFilter = function () {
        var _this = this;
        this.companyService.getCompanyByName('').subscribe(function (data) {
            _this.companies = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    return CompanyPageComponent;
}());
CompanyPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-company-page',
        template: __webpack_require__(591),
        styles: [__webpack_require__(514)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_page_company_page_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_page_company_page_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CompanyPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company-page.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = (function () {
    function CompanyComponent(companyService, authenticationService, router, route) {
        this.companyService = companyService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.change = false;
        this.loadData();
    };
    CompanyComponent.prototype.loadData = function () {
    };
    CompanyComponent.prototype.isLogin = function () {
        return this.authenticationService.getCurrentUser();
    };
    CompanyComponent.prototype.edit = function (company) {
        this.change = true;
    };
    CompanyComponent.prototype.delete = function (company) {
        var _this = this;
        this.companyService.deleteCompany(company)
            .subscribe(function () { _this.loadData(); });
        this.loadData();
    };
    CompanyComponent.prototype.save = function (company) {
        var _this = this;
        this.companyService.saveCompany(company)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-company',
        template: __webpack_require__(592),
        styles: [__webpack_require__(515)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CompanyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_page_company_page_company_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCompanyComponent = (function () {
    function NewCompanyComponent(companyService, router, route, authenticationService) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.postCompany = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewCompanyComponent.prototype.ngOnInit = function () {
        this.load();
        this.loadData();
        this.forEdit = {
            id: null,
            name: null,
            address: null,
            validLicenceTill: null
        };
    };
    NewCompanyComponent.prototype.load = function () {
        this.company = {
            name: null,
            address: null,
            validLicenceTill: null
        };
    };
    NewCompanyComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewCompanyComponent.prototype.send = function () {
        this.postCompany.next(this.company);
    };
    NewCompanyComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewCompanyComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewCompanyComponent.prototype.loadData = function () {
    };
    NewCompanyComponent.prototype.save = function (company) {
        var _this = this;
        this.companyService.saveCompany(company)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    return NewCompanyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewCompanyComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewCompanyComponent.prototype, "postCompany", void 0);
NewCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-company',
        template: __webpack_require__(593),
        styles: [__webpack_require__(516)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_page_company_page_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_page_company_page_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], NewCompanyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-company.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUpdateCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUpdateCompanyComponent = (function () {
    function NewUpdateCompanyComponent(companyService, router, route, authenticationService) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.postCompany = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewUpdateCompanyComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.forEdit = {
            id: null,
            name: null,
            address: null,
            validLicenceTill: null
        };
    };
    NewUpdateCompanyComponent.prototype.load = function () {
        this.company = {
            name: null,
            address: null,
            validLicenceTill: null
        };
    };
    NewUpdateCompanyComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewUpdateCompanyComponent.prototype.send = function () {
        this.postCompany.next(this.company);
    };
    NewUpdateCompanyComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewUpdateCompanyComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewUpdateCompanyComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
            console.log('ID', _this.id);
        });
        this.companyService.getCompany(this.id)
            .subscribe(function (data) {
            console.log('DATA', data);
            _this.company = data;
            _this.isDataAvailable = true;
        });
    };
    ;
    NewUpdateCompanyComponent.prototype.save = function (company) {
        var _this = this;
        this.companyService.saveCompany(company)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    NewUpdateCompanyComponent.prototype.edit = function (companies) {
        this.forEdit = companies;
        this.change = true;
    };
    return NewUpdateCompanyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewUpdateCompanyComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewUpdateCompanyComponent.prototype, "postCompany", void 0);
NewUpdateCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-update-company',
        template: __webpack_require__(594),
        styles: [__webpack_require__(517)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_company_page_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], NewUpdateCompanyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-update-company.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_item__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_page_item_page_item_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_page_item_page_excel_service__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemPageComponent = (function () {
    function ItemPageComponent(itemService, excelService, authenticationService, router, route) {
        this.itemService = itemService;
        this.excelService = excelService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.excelService = excelService;
        this.items = __WEBPACK_IMPORTED_MODULE_3_app_model_item__["a" /* ITEMS */];
    }
    ItemPageComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    ItemPageComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    ItemPageComponent.prototype.ngOnInit = function () {
        this.name = '';
        this.change = false;
        this.ukljuciPretrazivac = false;
        this.loadData();
        this.itemForChange = {
            id: null,
            name: null,
            description: null,
            orderNumber: null,
            value: null,
            barcode: null,
            category: {
                id: null,
                name: null
            }
        };
    };
    ItemPageComponent.prototype.reset = function () {
        this.loadData();
        this.change = false;
    };
    ItemPageComponent.prototype.edit = function (item) {
        this.itemForChange = item;
        this.change = true;
        console.log(this.itemForChange);
    };
    ItemPageComponent.prototype.delete = function (items) {
        var _this = this;
        this.itemService.deleteItem(items)
            .subscribe(function (data) {
            _this.loadData();
        });
        this.loadData();
    };
    ItemPageComponent.prototype.loadData = function () {
        var _this = this;
        this.itemService.getItems()
            .subscribe(function (data) {
            _this.items = data;
        });
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
        });
        this.itemService.getItem(this.id)
            .subscribe(function (data) {
            _this.item = data;
            _this.isDataAvailable = true;
        });
    };
    ;
    ItemPageComponent.prototype.save = function (item) {
        var _this = this;
        this.itemService.saveItem(item)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    ItemPageComponent.prototype.findByName = function (name) {
        var _this = this;
        this.itemService.getItemByName(this.name).subscribe(function (data) {
            _this.items = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    ItemPageComponent.prototype.resetFilter = function () {
        var _this = this;
        this.itemService.getItemByName('').subscribe(function (data) {
            _this.items = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    ItemPageComponent.prototype.exportToExcel = function (event) {
        this.excelService.exportAsExcelFile(__WEBPACK_IMPORTED_MODULE_3_app_model_item__["a" /* ITEMS */], 'items');
    };
    return ItemPageComponent;
}());
ItemPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-page',
        template: __webpack_require__(595),
        styles: [__webpack_require__(518)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_page_item_page_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_page_item_page_item_service__["a" /* ItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_page_item_page_excel_service__["a" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_page_item_page_excel_service__["a" /* ExcelService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], ItemPageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=item-page.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = (function () {
    function ItemComponent(itemService, authenticationService, router, route) {
        this.itemService = itemService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.change = false;
        this.loadData();
    };
    ItemComponent.prototype.loadData = function () {
    };
    ItemComponent.prototype.isLogin = function () {
        return this.authenticationService.getCurrentUser();
    };
    ItemComponent.prototype.edit = function (item) {
        this.change = true;
    };
    ItemComponent.prototype.delete = function (item) {
        var _this = this;
        this.itemService.deleteItem(item)
            .subscribe(function () { _this.loadData(); });
        this.loadData();
    };
    ItemComponent.prototype.save = function (item) {
        var _this = this;
        this.itemService.saveItem(item)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__(596),
        styles: [__webpack_require__(519)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], ItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewItemComponent = (function () {
    function NewItemComponent(itemService, router, route, authenticationService) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.postItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewItemComponent.prototype.ngOnInit = function () {
        this.load();
        this.loadData();
        this.forEdit = {
            id: null,
            name: null,
            description: null,
            orderNumber: null,
            value: null,
            barcode: null,
            category: {
                id: null,
                name: null
            }
        };
    };
    NewItemComponent.prototype.load = function () {
        this.item = {
            name: null,
            description: null,
            orderNumber: null,
            value: null,
            barcode: null,
            category: {
                id: null,
                name: null
            }
        };
    };
    NewItemComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewItemComponent.prototype.send = function () {
        this.postItem.next(this.item);
    };
    NewItemComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewItemComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewItemComponent.prototype.loadData = function () {
    };
    NewItemComponent.prototype.save = function (item) {
        var _this = this;
        this.itemService.saveItem(item)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    return NewItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewItemComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewItemComponent.prototype, "postItem", void 0);
NewItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-item',
        template: __webpack_require__(597),
        styles: [__webpack_require__(520)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], NewItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-item.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUpdateItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUpdateItemComponent = (function () {
    function NewUpdateItemComponent(itemService, router, route, authenticationService) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.postItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewUpdateItemComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.forEdit = {
            name: null,
            description: null,
            orderNumber: null,
            value: null,
            barcode: null,
            category: {
                id: null,
                name: null
            }
        };
    };
    NewUpdateItemComponent.prototype.load = function () {
        this.item = {
            id: null,
            name: null,
            description: null,
            orderNumber: null,
            value: null,
            barcode: null,
            category: {
                id: null,
                name: null
            }
        };
    };
    NewUpdateItemComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewUpdateItemComponent.prototype.send = function () {
        this.postItem.next(this.item);
    };
    NewUpdateItemComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewUpdateItemComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewUpdateItemComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
            console.log('ID', _this.id);
        });
        this.itemService.getItem(this.id)
            .subscribe(function (data) {
            console.log('DATA', data);
            _this.item = data;
            _this.isDataAvailable = true;
        });
    };
    ;
    NewUpdateItemComponent.prototype.save = function (item) {
        var _this = this;
        this.itemService.saveItem(item)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    NewUpdateItemComponent.prototype.edit = function (items) {
        //kopija objekta comp
        this.forEdit = items;
        this.change = true;
    };
    return NewUpdateItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewUpdateItemComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewUpdateItemComponent.prototype, "postItem", void 0);
NewUpdateItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-update-item',
        template: __webpack_require__(598),
        styles: [__webpack_require__(521)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_item_page_item_service__["a" /* ItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], NewUpdateItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-update-item.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-spacing



var MainPageComponent = (function () {
    function MainPageComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.logIn = false;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    MainPageComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    // loginRoute(): void {
    //   this.authenticationService.isLoggedIn();
    //   this.router.navigate(['/main']);
    // }
    MainPageComponent.prototype.toggleLogIn = function () {
        this.logIn = !this.logIn;
    };
    MainPageComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    MainPageComponent.prototype.isCompanyAdmin = function () {
        return this.authenticationService.isCompanyAdmin();
    };
    MainPageComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
            }
        });
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-page',
        template: __webpack_require__(599),
        styles: [__webpack_require__(522)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainPageComponent);

var _a, _b;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(600),
        styles: [__webpack_require__(523)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUpdateUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewUpdateUserComponent = (function () {
    function NewUpdateUserComponent(userService, router, route, authenticationService, toastr, vcr) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.postUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    NewUpdateUserComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.forEdit = {
            username: null,
            role: null,
            firstName: null,
            lastName: null
        };
    };
    NewUpdateUserComponent.prototype.load = function () {
        this.user = {
            username: null,
            role: null,
            firstName: null,
            lastName: null
        };
    };
    NewUpdateUserComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewUpdateUserComponent.prototype.send = function () {
        this.postUser.next(this.user);
    };
    NewUpdateUserComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewUpdateUserComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewUpdateUserComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
            console.log('ID', _this.id);
        });
        this.userService.getUser(this.id)
            .subscribe(function (data) {
            console.log('DATA', data);
            _this.user = data;
            _this.isDataAvailable = true;
        });
    };
    ;
    NewUpdateUserComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.saveUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
        this.toastr.success('You successfully updated user', null, { toastLife: 2000 });
    };
    NewUpdateUserComponent.prototype.edit = function (users) {
        this.forEdit = users;
        this.change = true;
    };
    return NewUpdateUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewUpdateUserComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewUpdateUserComponent.prototype, "postUser", void 0);
NewUpdateUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-update-user',
        template: __webpack_require__(601),
        styles: [__webpack_require__(524)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], NewUpdateUserComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-update-user.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewUserComponent = (function () {
    function NewUserComponent(userService, router, route, authenticationService, toastr, vcr) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.postUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.load();
        this.loadData();
        this.forEdit = {
            username: null,
            role: null,
            firstName: null,
            lastName: null
        };
    };
    NewUserComponent.prototype.load = function () {
        this.user = {
            username: null,
            role: null,
            firstName: null,
            lastName: null
        };
    };
    NewUserComponent.prototype.reset = function () {
        this.load();
        this.change = false;
    };
    NewUserComponent.prototype.send = function () {
        this.postUser.next(this.user);
    };
    NewUserComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewUserComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NewUserComponent.prototype.loadData = function () {
    };
    NewUserComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.saveUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
        this.toastr.success('You successfully created new user', null, { toastLife: 2000 });
    };
    return NewUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NewUserComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewUserComponent.prototype, "postUser", void 0);
NewUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-user',
        template: __webpack_require__(602),
        styles: [__webpack_require__(525)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], NewUserComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-user.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_page_user_page_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPageComponent = (function () {
    function UserPageComponent(userService, authenticationService, router, route, toastr, vcr) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserPageComponent.prototype.showSuccess = function () {
        this.toastr.success('You successfully created new user');
    };
    UserPageComponent.prototype.showError = function () {
        this.toastr.error('This is not good!', 'Oops!');
    };
    UserPageComponent.prototype.showWarning = function () {
        this.toastr.warning('You are being warned.', 'Alert!');
    };
    UserPageComponent.prototype.showInfo = function () {
        this.toastr.info('Just some information for you.');
    };
    UserPageComponent.prototype.showCustom = function () {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    };
    UserPageComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    UserPageComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    UserPageComponent.prototype.ngOnInit = function () {
        this.username = '';
        this.change = false;
        this.ukljuciPretrazivac = false;
        this.loadData();
        this.userForChange = {
            username: null,
            role: null,
            firstName: null,
            lastName: null
        };
    };
    UserPageComponent.prototype.reset = function () {
        this.loadData();
        this.change = false;
    };
    UserPageComponent.prototype.edit = function (user) {
        this.userForChange = user;
        this.change = true;
        console.log(this.userForChange);
    };
    UserPageComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService.deleteUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
        this.toastr.custom('<span style="color: red">You removed user.</span>', null, { enableHTML: true });
        this.loadData();
    };
    UserPageComponent.prototype.loadData = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
            // console.log('ID', this.id);
        });
        this.userService.getUser(this.id)
            .subscribe(function (data) {
            // console.log('DATA', data);
            _this.user = data;
            _this.isDataAvailable = true;
        });
    };
    UserPageComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.saveUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    UserPageComponent.prototype.findByUsername = function (username) {
        var _this = this;
        this.userService.getUsersByUsername(this.username).subscribe(function (data) {
            _this.users = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    UserPageComponent.prototype.resetFilter = function () {
        var _this = this;
        this.userService.getUsersByUsername('').subscribe(function (data) {
            _this.users = data;
            _this.ukljuciPretrazivac = true;
        });
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-page',
        template: __webpack_require__(603),
        styles: [__webpack_require__(526)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_page_user_page_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_page_user_page_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], UserPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-page.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, authenticationService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.change = false;
        this.loadData();
    };
    UserComponent.prototype.loadData = function () {
    };
    UserComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    UserComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    UserComponent.prototype.isLogin = function () {
        return this.authenticationService.getCurrentUser();
    };
    UserComponent.prototype.edit = function (user) {
        this.change = true;
    };
    UserComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService.deleteUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
        this.loadData();
    };
    UserComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.saveUser(user)
            .subscribe(function (data) {
            _this.loadData();
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(604),
        styles: [__webpack_require__(527)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_page_user_page_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return CanActivateAuthGuard;
}());
CanActivateAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateAuthGuard);

var _a, _b;
//# sourceMappingURL=can-activate-auth.guard.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    return TokenInterceptorService;
}());
TokenInterceptorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], TokenInterceptorService);

var _a;
//# sourceMappingURL=token-interceptor.service.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FabMenuComponent = (function () {
    function FabMenuComponent() {
        this.active = false;
        this.state = 'in';
    }
    FabMenuComponent.prototype.onClick = function () {
        this.active = !this.active;
    };
    return FabMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FabMenuComponent.prototype, "isDarkTheme", void 0);
FabMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fab-menu',
        template: __webpack_require__(605),
        styles: [],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('list1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    opacity: 1,
                    transform: 'translateY(0px)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(400, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0,
                            transform: 'translateY(-100px)',
                            offset: 0,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0.5,
                            transform: 'translateY(-50px)',
                            offset: 0.3,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(-20px)',
                            offset: 0.8,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(0px)',
                            offset: 1,
                        }),
                    ]))]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('list2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    opacity: 1,
                    transform: 'translateY(0px)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(700, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0,
                            transform: 'translateY(-100px)',
                            offset: 0,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0.5,
                            transform: 'translateY(-50px)',
                            offset: 0.3,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(-20px)',
                            offset: 0.8,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(0px)',
                            offset: 1,
                        }),
                    ]))]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(400), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0.5,
                            transform: 'translateX(50px)',
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(500), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0,
                            transform: 'translateX(100px)',
                        }),
                    ])
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('list3', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    opacity: 1,
                    transform: 'translateY(0px)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0,
                            transform: 'translateY(-100px)',
                            offset: 0,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0.5,
                            transform: 'translateY(-50px)',
                            offset: 0.3,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(-20px)',
                            offset: 0.8,
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 1,
                            transform: 'translateY(0px)',
                            offset: 1,
                        }),
                    ]))]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(600), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0.5,
                            transform: 'translateX(50px)',
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])(700), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                            opacity: 0,
                            transform: 'translateX(100px)',
                        }),
                    ])
                ]),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [])
], FabMenuComponent);

//# sourceMappingURL=fab-menu.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(606),
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ToolbarComponent.prototype, "title", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(607),
        styles: [],
    })
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrCustomOptions; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToastrCustomOptions = (function (_super) {
    __extends(ToastrCustomOptions, _super);
    function ToastrCustomOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toastLife = 2500;
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-bottom-center';
        _this.maxShown = 10;
        return _this;
    }
    return ToastrCustomOptions;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=ToastrCustomOptions.js.map

/***/ }),

/***/ 415:
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

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/* #interactive {\n  max-width: 50rem;\n}\n\n.link {\n  display: block;\n  padding: 33px 0 0 0;\n  color: #313131;\n  text-decoration: none;\n  cursor: pointer;\n} */\n\n/*  ================================================\n            TICKET STYLING & COUPON EFFECT\n    ================================================  */\n/* .ticket {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 228px;\n  margin: 50px auto 0 auto;\n  padding-bottom: 57px;\n  background: #F4F4F4;\n  text-align: center;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 54.5%;\n    left: 0;\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-left: 20px solid #a52958;\n  }\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 54.5%;\n    right: 0;\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-right: 20px solid #185661;\n  }\n}\n\n.ribbon {\n  position: absolute;\n  display: block;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n  .label {\n    position: relative;\n    display: block;\n    left: -10px;\n    top: 23px;\n    width: 158px;\n    padding: 10px 0;\n    font-size: 15px;\n    text-align: center;\n    color: #fff;\n    background-color: #e85e68;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    transform: rotate(45deg) translate3d(0, 0, 0);\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      bottom: -4px;\n      border-top: 4px solid #a71c26;\n      border-left: 4px solid transparent;\n      border-right: 4px solid transparent;\n    }\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n  }\n}\n\nspan {\n  display: block;\n  font-size: 29px;\n  color: #540c5d;\n}\n\nstrong {\n  display: block;\n  font-size: 45px;\n  color: #a52958;\n  margin: 0 0 10px 0;\n}\n\nem {\n  display: block;\n  font-size: 29px;\n  font-style: normal;\n  color: #86db78;\n  border-top: 2px dashed rgba(0, 0, 0, .1);\n  padding: 10px 0;\n}\n\n.button {\n  display: block;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 57px;\n  padding: 0;\n  line-height: 58px;\n  text-align: center;\n  border-radius: 0;\n  background-color: #86db78;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: calc(50% - 20px);\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-bottom: 10px solid #86db78;\n  }\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "table {\r\n    margin: 0 0 5px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\r\n    display: table;\r\n}\r\n\r\n tr{\r\n    vertical-align: middle;\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n }\r\n\r\n tr:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n}\r\n  \r\nthead {\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #2980b9;\r\n}\r\ninput {\r\n    text-align: right;\r\n}\r\n\r\n.search { \r\n    margin:30px 40px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;  \r\n    -ms-flex-pack: center;  \r\n        justify-content: center;\r\n    background-color: #f6f6f6; \r\n    min-height: 80px; \r\n}\r\n    .engine {\r\n      display: -ms-flexbox;\r\n      display: flex; \r\n      -ms-flex-pack: center; \r\n          justify-content: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n      background-color: #e9e9e9; \r\n      min-height: 50px;\r\n      width: 90%; \r\n      margin-right: 18px;\r\n      margin-left: 35px;\r\n    }\r\n\r\n    #sidebar {\r\n        overflow: hidden;\r\n        z-index: 3;\r\n    }\r\n    #sidebar .list-group {\r\n        min-width: 200px;\r\n        background-color: #333;\r\n        min-height: 100vh;\r\n    }\r\n    #sidebar i {\r\n        margin-right: 6px;\r\n    }\r\n    \r\n    #sidebar .list-group-item {\r\n        border-radius: 0;\r\n        background-color: #333;\r\n        color: #ccc;\r\n        border-left: 0;\r\n        border-right: 0;\r\n        border-color: #2c2c2c;\r\n    }\r\n\r\n    .navbar{\r\n     \r\n        border-radius: 0;\r\n    }\r\n   \r\n    .list-group.panel {\r\n   \r\n       border-radius: 0;\r\n       margin-bottom: 0;\r\n    }\r\n\r\n    button#new{\r\n        border-radius: 100%;\r\n        position: inherit;\r\n        float: right;\r\n        margin-right: 6px;\r\n        border: 0;\r\n        color:#ffffff;\r\n        background-color: #2980b9;\r\n    }\r\n\r\n    button#new:hover {\r\n        color: rgba(255, 255, 255, 0.85);\r\n        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;\r\n    }\r\n\r\n    button#delete{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #ed3330;\r\n        padding: 6px;\r\n        border-radius: 5px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#delete:hover{\r\n        background: #434343;\r\n        letter-spacing: 1px;\r\n        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    button#update{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #f6b93b;\r\n        padding: 6px;\r\n        border-radius: 50px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#update:hover{\r\n        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\r\n        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    \r\n    button{ \r\n        margin: 2px 2px;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n    width: 60%;\r\n    float: right;\r\n    margin-top: 25px;\r\n    margin-right: 45px;\r\n    border-color: black;\r\n   }\r\n   \r\n   label {\r\n       margin-top: 25px;\r\n       margin-left: 45px;\r\n   }\r\n   button#save {\r\n       margin-left: 45px;\r\n   }\r\n   button#reset {\r\n       margin-right: 45px;\r\n       float: right;\r\n   } \r\n\r\n   button#goBack  {\r\n    margin-right: 45px;\r\n    float: right;\r\n\tbox-shadow: 3px 4px 0px 0px #899599;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:15px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4b5254;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:2px 5px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n    width: 60%;\r\n    float: right;\r\n    margin-top: 25px;\r\n    margin-right: 45px;\r\n    border-color: black;\r\n   }\r\n\r\nlabel {\r\n    margin-top: 25px;\r\n    margin-left: 45px;\r\n}\r\nbutton#save {\r\n    margin-left: 45px;\r\n}\r\nbutton#reset {\r\n    margin-right: 45px;\r\n    float: right;\r\n} \r\n\r\nbutton#goBack  {\r\n    margin-right: 45px;\r\n    float: right;\r\n\tbox-shadow: 3px 4px 0px 0px #899599;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:15px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4b5254;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:2px 5px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/* table {\r\n    width: 100%;\r\n    height: 25%;\r\n    text-align: left;\r\n    color: rgb(56, 50, 50);\r\n    background-color: rgb(205, 250, 252);\r\n    display: inline-table;\r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid rgb(59, 98, 114);\r\n}\r\n\r\nth{\r\n    text-align: center;\r\n}\r\ntd{\r\n    display: table-cell;\r\n    \r\n    color: rgb(19, 73, 55);\r\n} */\r\ntable {\r\n    margin: 0 0 5px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\r\n    display: table;\r\n}\r\n\r\n tr{\r\n    vertical-align: middle;\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n }\r\n\r\n tr:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n}\r\n  \r\nthead {\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #2980b9;\r\n}\r\ninput {\r\n    text-align: right;\r\n}\r\n\r\n.search { \r\n    margin:30px 40px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;  \r\n    -ms-flex-pack: center;  \r\n        justify-content: center;\r\n    background-color: #f6f6f6; \r\n    min-height: 80px; \r\n}\r\n    .engine {\r\n      display: -ms-flexbox;\r\n      display: flex; \r\n      -ms-flex-pack: center; \r\n          justify-content: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n      background-color: #e9e9e9; \r\n      min-height: 50px;\r\n      width: 90%; \r\n      margin-right: 18px;\r\n      margin-left: 35px;\r\n    }\r\n\r\n    #sidebar {\r\n        overflow: hidden;\r\n        z-index: 3;\r\n    }\r\n    #sidebar .list-group {\r\n        min-width: 200px;\r\n        background-color: #333;\r\n        min-height: 100vh;\r\n    }\r\n    #sidebar i {\r\n        margin-right: 6px;\r\n    }\r\n    \r\n    #sidebar .list-group-item {\r\n        border-radius: 0;\r\n        background-color: #333;\r\n        color: #ccc;\r\n        border-left: 0;\r\n        border-right: 0;\r\n        border-color: #2c2c2c;\r\n    }\r\n\r\n    .navbar{\r\n     \r\n        border-radius: 0;\r\n    }\r\n   \r\n    .list-group.panel {\r\n   \r\n       border-radius: 0;\r\n       margin-bottom: 0;\r\n    }\r\n\r\n    button#new{\r\n        border-radius: 100%;\r\n        position: inherit;\r\n        float: right;\r\n        margin-right: 6px;\r\n        border: 0;\r\n        color:#ffffff;\r\n        background-color: #2980b9;\r\n    }\r\n\r\n    button#new:hover {\r\n        color: rgba(255, 255, 255, 0.85);\r\n        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;\r\n    }\r\n\r\n    button#delete{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #ed3330;\r\n        padding: 6px;\r\n        border-radius: 5px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#delete:hover{\r\n        background: #434343;\r\n        letter-spacing: 1px;\r\n        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    button#update{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #f6b93b;\r\n        padding: 6px;\r\n        border-radius: 50px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#update:hover{\r\n        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\r\n        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    \r\n    button{ \r\n        margin: 2px 2px;\r\n    }\r\n\r\n   \r\n\r\n       ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n/* button#new{\r\n    background-color: rgb(219, 148, 120);\r\n    border-radius: 100%;\r\n    border: 0px;\r\n}\r\nbutton{\r\n    background-color:rgb(219, 148, 120);\r\n    border: 2px;\r\n    border-color: rgb(219, 148, 120);\r\n} */\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n    width: 60%;\r\n    float: right;\r\n    margin-top: 25px;\r\n    margin-right: 45px;\r\n    border-color: black;\r\n   }\r\n   \r\n   label {\r\n       margin-top: 25px;\r\n       margin-left: 45px;\r\n   }\r\n   button#save {\r\n       margin-left: 45px;\r\n   }\r\n   button#reset {\r\n       margin-right: 45px;\r\n       float: right;\r\n   } \r\n\r\n   button#goBack  {\r\n    margin-right: 45px;\r\n    float: right;\r\n\tbox-shadow: 3px 4px 0px 0px #899599;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:15px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4b5254;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:2px 5px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n/* button#new{\r\n    background-color: rgb(219, 148, 120);\r\n    border-radius: 100%;\r\n    border: 0px;\r\n}\r\nbutton{\r\n    background-color:rgb(219, 148, 120);\r\n    border: 2px;\r\n    border-color: rgb(219, 148, 120);\r\n} */\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n width: 60%;\r\n float: right;\r\n margin-top: 25px;\r\n margin-right: 45px;\r\n border-color: black;\r\n}\r\n\r\nlabel {\r\n    margin-top: 25px;\r\n    margin-left: 45px;\r\n}\r\nbutton#save {\r\n    margin-left: 45px;\r\n}\r\nbutton#reset {\r\n    margin-right: 45px;\r\n    float: right;\r\n} \r\na#goBack {\r\n    margin-right: 45px;\r\n    float: right;  \r\n}\r\n\r\nbutton#goBack  {\r\nmargin-right: 45px;\r\nfloat: right;\r\n box-shadow: 3px 4px 0px 0px #899599;\r\n background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n background-color:#ededed;\r\n border-radius:15px;\r\n border:1px solid #d6bcd6;\r\n display:inline-block;\r\n cursor:pointer;\r\n color:#4b5254;\r\n font-family:Arial;\r\n font-size:17px;\r\n padding:2px 5px;\r\n text-decoration:none;\r\n text-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n background-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n position:relative;\r\n top:1px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "div#sidebar{\r\n    margin: 0px;\r\n    pading-left: 0px !important;\r\n}\r\n\r\n#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n.navbar{\r\n     \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n    width: 60%;\r\n    float: right;\r\n    margin-top: 25px;\r\n    margin-right: 45px;\r\n    border-color: black;\r\n   }\r\n\r\nlabel {\r\n    margin-top: 25px;\r\n    margin-left: 45px;\r\n}\r\nbutton#save {\r\n    margin-left: 45px;\r\n}\r\nbutton#reset {\r\n    margin-right: 45px;\r\n    float: right;\r\n} \r\nbutton#goBack  {\r\n    margin-right: 45px;\r\n    float: right;\r\n\tbox-shadow: 3px 4px 0px 0px #899599;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:15px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4b5254;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:2px 5px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "#sidebar {\r\n    overflow: hidden;\r\n    z-index: 3;\r\n}\r\n#sidebar .list-group {\r\n    min-width: 200px;\r\n    background-color: #333;\r\n    min-height: 100vh;\r\n}\r\n#sidebar i {\r\n    margin-right: 6px;\r\n}\r\n\r\n#sidebar .list-group-item {\r\n    border-radius: 0;\r\n    background-color: #333;\r\n    color: #ccc;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-color: #2c2c2c;\r\n}\r\n\r\n.navbar{\r\n \r\n    border-radius: 0;\r\n}\r\n\r\n.list-group.panel {\r\n\r\n   border-radius: 0;\r\n   margin-bottom: 0;\r\n\r\n}\r\n\r\ninput {\r\n    width: 60%;\r\n    float: right;\r\n    margin-top: 25px;\r\n    margin-right: 45px;\r\n    border-color: black;\r\n   }\r\n   \r\n   label {\r\n       margin-top: 25px;\r\n       margin-left: 45px;\r\n   }\r\n   button#save {\r\n       margin-left: 45px;\r\n   }\r\n   button#reset {\r\n       margin-right: 45px;\r\n       float: right;\r\n   } \r\n\r\n   button#goBack  {\r\n    margin-right: 45px;\r\n    float: right;\r\n\tbox-shadow: 3px 4px 0px 0px #899599;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#bab1ba',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:15px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4b5254;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:2px 5px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #e1e2ed;\r\n}\r\nbutton#goBack:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bab1ba', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton#goBack:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "table {\r\n    margin: 0 0 5px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\r\n    display: table;\r\n}\r\n\r\n tr{\r\n    vertical-align: middle;\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n }\r\n\r\n tr:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n}\r\n  \r\nthead {\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #2980b9;\r\n}\r\ninput {\r\n    text-align: right;\r\n}\r\n\r\n.search { \r\n    margin:30px 40px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;  \r\n    -ms-flex-pack: center;  \r\n        justify-content: center;\r\n    background-color: #f6f6f6; \r\n    min-height: 80px; \r\n}\r\n    .engine {\r\n      display: -ms-flexbox;\r\n      display: flex; \r\n      -ms-flex-pack: center; \r\n          justify-content: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n      background-color: #e9e9e9; \r\n      min-height: 50px;\r\n      width: 90%; \r\n      margin-right: 18px;\r\n      margin-left: 35px;\r\n    }\r\n\r\n    #sidebar {\r\n        overflow: hidden;\r\n        z-index: 3;\r\n    }\r\n    #sidebar .list-group {\r\n        min-width: 200px;\r\n        background-color: #333;\r\n        min-height: 100vh;\r\n    }\r\n    #sidebar i {\r\n        margin-right: 6px;\r\n    }\r\n    \r\n    #sidebar .list-group-item {\r\n        border-radius: 0;\r\n        background-color: #333;\r\n        color: #ccc;\r\n        border-left: 0;\r\n        border-right: 0;\r\n        border-color: #2c2c2c;\r\n    }\r\n\r\n    .navbar{\r\n     \r\n        border-radius: 0;\r\n    }\r\n   \r\n    .list-group.panel {\r\n   \r\n       border-radius: 0;\r\n       margin-bottom: 0;\r\n    }\r\n\r\n    button#new{\r\n        border-radius: 100%;\r\n        position: inherit;\r\n        float: right;\r\n        margin-right: 6px;\r\n        border: 0;\r\n        color:#ffffff;\r\n        background-color: #2980b9;\r\n    }\r\n\r\n    button#new:hover {\r\n        color: rgba(255, 255, 255, 0.85);\r\n        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;\r\n    }\r\n\r\n    button#delete{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #ed3330;\r\n        padding: 6px;\r\n        border-radius: 5px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#delete:hover{\r\n        background: #434343;\r\n        letter-spacing: 1px;\r\n        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    button#update{\r\n        color: #fff !important;\r\n        text-transform: uppercase;\r\n        background: #f6b93b;\r\n        padding: 6px;\r\n        border-radius: 50px;\r\n        display: inline-block;\r\n        border: none;   \r\n    }\r\n\r\n    button#update:hover{\r\n        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\r\n        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n    \r\n    button{ \r\n        margin: 2px 2px;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-input-section hidden__sm\" *ngIf=\"lastResult\">\n  <div class=\"ticket\">\n    <div class=\"datas\">\n      <a class=\"link\">\n        <div class=\"ribbon\">\n          <div class=\"label\">LIMITED</div>\n        </div>\n        <span>Your Code is</span>\n        <strong>{{ lastResult }}'</strong>\n        <em *ngIf=\"!message\">Searching...</em>\n        <em *ngIf=\"message\">{{message}}</em>\n      </a>\n    </div>\n  </div>\n</mat-card>\n\n<mat-card>\n  <p>Notice: You must allow to use your webcam. This Option only works on IE11+ and may not work with Android browser\n    older version. Alternatively use upload file option.</p>\n\n  <div class=\"show__sm\" *ngIf=\"lastResult\">\n    <p>Your Code is</p>\n    <p>{{ lastResult }}'</p>\n    <p *ngIf=\"!message\">Searching...</p>\n    <p *ngIf=\"message\">{{message}}</p>\n  </div>\n\n  <div id=\"interactive\" class=\"viewport\" #interactive></div>\n</mat-card>\n\n\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<form>\n<!-- <form  class=\"form\" *ngIf=\"item\" (ngSubmit)=\"send()\" > -->\n  <h5 *ngIf=\"!izmena\"> Nova vest</h5>\n  <div class=\"form-group\">\n    <label>Naslov vesti</label>\n    <!-- <input type=\"text\" name=\"naslov\" class=\"form-control\" [(ngModel)]=\"vest.naslov\"/> -->\n  </div>\n  <div class=\"form-group\">\n    <label>Opis</label>\n    <!-- <input type=\"text\" name=\"sadrzaj\" class=\"form-control\" [(ngModel)]=\"vest.sadrzaj\"/> -->\n  </div>\n  <div class=\"form-group\">\n      <label>Sadrzaj</label>\n      <!-- <input type=\"text\" name=\"tekst\" class=\"form-control\" [(ngModel)]=\"vest.tekst\"/> -->\n  </div>\n  <div class=\"form-group\">\n    <label *ngIf=\"!izmena\">Kategorija</label>\n    <!-- <label *ngIf=\"izmena\">Izaberite novu kategoriju (trenutna kategorija: {{vest.kategorija.name}})</label>\n    <select name=\"kategorija\" class=\"form-control\"  [(ngModel)]=\"vest.kategorija\">\n       <option *ngFor=\"let kategorija of kategorije\" [ngValue]=\"vest.kategorija\">{{kategorija.name}}</option>   -->\n    <!-- </select>  -->\n  </div>\n  <button *ngIf=\"!izmena\" type=\"submit\" [disabled]=\"\">Sacuvaj</button>\n  <button *ngIf=\"izmena\" type=\"submit\" [disabled]=\"\">Izmeni</button>\n  <!-- <button type=\"button\" (click)=\"reset()\">Reset</button> -->\n</form> \n\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"login\">Login</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <!-- <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"studenti\">Students</a></li>\n        <li><a href=\"about\">About</a></li>\n        <li><a href=\"contact\">Contact</a></li>\n      </ul> -->\n      <ul class=\"nav navbar-nav pull-right\">\n          <!-- <li *ngIf=\"!isLoggedIn()\"><a (click)=\"toggleLogIn()\">LogIn</a></li> -->\n            <!-- <li  *ngIf=\"!isLoggedIn()\" (click)=\"toggleLogIn()\" routerLink=\"login\"><a>LogIn</a></li> -->\n\t\t\t\t<li *ngIf=\"isLoggedIn()\" [routerLink]=\"['../main']\"><a (click)=\"logout()\">Logout</a></li>\n\t\t\t</ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\n          required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" [range]=\"[1, 5]\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\n          required>\n        <button class=\"btn btn-primary btn-block\" (click) = \"compareMedia()\" type=\"submit\">Sign in</button>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Wrong username or password.\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"main\">DASH.</a>\n    </div>\n  </div>\n\n  <ul class=\"nav navbar-nav pull-right\">\n  <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n</ul>\n</nav>\n\n\n<!-- <div class=\"container\" *ngIf=\"page\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"button-group pull-right\">\n        <button class=\"btn btn-sm btn-primary\" [disabled]=\"currentPageNumber<1\" (click)=\"changePage(-1)\">\n          <span class=\"glyphicon glyphicon-backward\"></span>\n        </button>\n        <button class=\"btn btn-sm btn-primary\" [disabled]=\"currentPageNumber>=page.totalPages-1\" (click)=\"changePage(1)\">\n          <span class=\"glyphicon glyphicon-forward\"></span>\n        </button>\n      </div>\n      <b>name</b> <input  type=\"text\"  [(ngModel)]=\"nameItem\"><button (click)=\"findByName(nameItem)\">filter</button>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>name</th>\n            <th>kategorija</th>\n            <th>price</th>\n            <th  *ngIf=\"isAdmin()\" >action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let meniItem of page.content\">\n            <td>{{meniItem.name}}</td>\n            <td>{{meniItem.kategorija.name}}</td>\n            <td>{{meniItem.price}}</td>\n            <td>\n              <button class=\"btn btn-danger\" *ngIf=\"isAdmin()\" (click)=\"delete(meniItem)\">delete</button>\n              <button class=\"btn btn-warning\" *ngIf=\"isAdmin()\" (click)=\"edit(meniItem)\">edit</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-md-4\">\n      <app-dodaj-meni-item \n      *ngIf=\"isAdmin()\"\n      [kategorija]=\"kategorija\"\n      [meniItem]=\"forEdit\"\n      (addComponentEmitter)=\"addComponent($event)\">\n      </app-dodaj-meni-item>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"company-page\">Companies</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\">\n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n  \n      \n        <div class=\"search\"> \n            <div class=\"engine\"> \n                <input placeholder=\"searchByName\" type=\"text\"  [(ngModel)]=\"name\"><button  class=\"btn btn-primary\" (click)=\"findByName()\" id=\"filter\">filter</button><button  class=\"btn btn-primary\" (click)=\"resetFilter()\" id=\"resetFilter\">reset filter</button>\n            </div> \n            <button id=\"new\" class=\"btn icon-plus\" (click)=\"save(company)\" [routerLink]=\"['/new-company']\">+</button>\n          </div> \n    <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n      <table >\n        <thead>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Address</th>\n          <th>Valid Licence Till</th>\n          <th>Update company</th>\n          <th>Delete company</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let company of companies; let i = index\">\n            <td>{{company.id}}</td>\n            <td>{{company.name}}</td>\n            <td>{{company.address}}</td>\n            <td>{{company.validLicenceTill}}</td>\n            <td><button [routerLink]=\"['/company',company.id]\" (click)=\"save(company)\" id=\"update\">update company</button></td>\n            <td><button (click)=\"delete(company)\" id=\"delete\">delete company</button></td>\n          </tr>\n        </tbody>\n      </table>\n  </main>\n  </div>\n  "

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n      <div *ngIf=\"isLogin()\" >\n          <app-new-update-company [change]=\"change\" (saveCompany)=\"save($event)\"></app-new-update-company>\n      </div>\n  </div>  \n  <a [routerLink]=\"['/company-page']\">Go back</a>\n</div>"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"company-page\">New copmany</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n  <form  class=\"form\" *ngIf=\"company\" >\n    <div class=\"form-group\">\n      <label>Name</label>\n      <!-- {{ company | json }} -->\n      <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"company.name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" name=\"address\" class=\"form-control\" [(ngModel)]=\"company.address\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Valid Licence Till</label>\n        <input type=\"text\" name=\"validLicenceTill\" class=\"form-control\" [(ngModel)]=\"company.validLicenceTill\"/>\n    </div>\n    <div class=\"form-group\">\n    </div>\n    <button id=\"save\" type=\"submit\" [disabled]=\" \"(click)=\"save(company)\" class=\"btn btn-warning\">Save</button>\n    <button id=\"reset\"type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n  </form> \n  <br/>\n  <button id=\"goBack\"[routerLink]=\"['/company-page']\">Go back</button>\n  </main>\n</div>\n  \n  "

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"company-page\">Update copmany</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n  <form  class=\"form\" *ngIf=\"company\" (ngSubmit)=\"send()\" >\n    <div class=\"form-group\">\n      <label>Name</label>\n      <!-- {{ company | json }} -->\n      <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"company.name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" name=\"address\" class=\"form-control\" [(ngModel)]=\"company.address\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Valid Licence Till</label>\n        <input type=\"text\" name=\"validLicenceTill\" class=\"form-control\" [(ngModel)]=\"company.validLicenceTill\"/>\n    </div>\n    <div class=\"form-group\">\n    </div>\n    <button id=\"save\" type=\"submit\" [disabled]=\"\"(click)=\"save(company)\" class=\"btn btn-warning\">Update</button>\n    <button id=\"reset\" type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n  </form>\n  <br/>\n  <button id=\"goBack\"[routerLink]=\"['/company-page']\">Go back</button>\n  </main>\n</div>\n  \n  "

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"item-page\">Items</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\">\n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n  \n        \n        <div class=\"search\"> \n          <div class=\"engine\">             \n            <input placeholder=\"searchByName\" type=\"text\"  [(ngModel)]=\"name\"><button  class=\"btn btn-primary\" (click)=\"findByName()\" id=\"filter\">filter</button><button  class=\"btn btn-primary\" (click)=\"resetFilter()\" id=\"resetFilter\">reset filter</button>      \n          </div> \n          <button id=\"new\" class=\"btn icon-plus\" (click)=\"save(item)\" [routerLink]=\"['/new-item']\">+</button>\n        </div> \n        <br>\n    <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n      <table >\n      <thead>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Order Number</th>\n        <th>Value</th>\n        <th>Barcode</th>\n        <th>Category</th>\n        <th>Update item</th>\n        <th>Delete item</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of items; let i = index\">\n          <td>{{item.id}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.description}}</td>\n          <td>{{item.orderNumber}}</td>\n          <td>{{item.value}}</td>\n          <td>{{item.barcode}}</td>\n          <td>{{item.category.name}}</td>\n          <td><button [routerLink]=\"['/item',item.id]\" id=\"update\">update item</button></td>\n          <td><button (click)=\"delete(item)\" id=\"delete\">delete item</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </main>\n  <br>\n    <button (click)=\"exportToExcel()\" class=\"btn btn-primary\">Export</button>\n  </div>\n  "

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <div *ngIf=\"isLogin()\" >\n            <app-new-update-item [change]=\"change\" (saveItem)=\"save($event)\"></app-new-update-item>\n        </div>\n    </div>  \n    <a [routerLink]=\"['/item-page']\">>Go back</a>\n  </div>"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"item-page\">New item</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n  <form  class=\"form\" *ngIf=\"item\" >\n    <div class=\"form-group\">\n      <label>Name</label>\n      <!-- {{ item | json }} -->\n      <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"item.name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input type=\"text\" name=\"description\" class=\"form-control\" [(ngModel)]=\"item.description\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Order Number</label>\n        <input type=\"text\" name=\"orderNumber\" class=\"form-control\" [(ngModel)]=\"item.orderNumber\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Value</label>\n        <input type=\"text\" name=\"value\" class=\"form-control\" [(ngModel)]=\"item.value\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Barcode</label>\n        <input type=\"text\" name=\"barcode\" class=\"form-control\" [(ngModel)]=\"item.barcode\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Category id</label>\n        <input type=\"text\" name=\"id\" class=\"form-control\" [(ngModel)]=\"item.category.id\"/>\n    </div>\n    <!-- <div class=\"form-group\">\n        <label>Category name</label>\n        <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"item.category.name\"/>\n    </div> -->\n    <div class=\"form-group\">\n    </div>\n    <button id=\"save\" type=\"submit\" [disabled]=\" \"(click)=\"save(item)\" class=\"btn btn-warning\">Save</button>\n    <button id=\"reset\" type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n  </form> \n  <br/>\n  <button id=\"goBack\" [routerLink]=\"['/item-page']\" id=\"goBack\">Go back</button>\n  </main>\n</div>\n  \n  "

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"item-page\">Update item</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n            <form  class=\"form\" *ngIf=\"item\" >\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"item.name\"/>\n                </div>\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <input type=\"text\" name=\"description\" class=\"form-control\" [(ngModel)]=\"item.description\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label>Order Number</label>\n                    <input type=\"text\" name=\"orderNumber\" class=\"form-control\" [(ngModel)]=\"item.orderNumber\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label>Value</label>\n                    <input type=\"text\" name=\"value\" class=\"form-control\" [(ngModel)]=\"item.value\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label>Barcode</label>\n                    <input type=\"text\" name=\"barcode\" class=\"form-control\" [(ngModel)]=\"item.barcode\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label>Category id</label>\n                    <input type=\"text\" name=\"category.id\" class=\"form-control\" [(ngModel)]=\"item.category.id\"/>\n                </div>\n                <div class=\"form-group\">\n                </div>\n                <button id=\"save\" type=\"submit\" [disabled]=\" \"(click)=\"save(item)\" class=\"btn btn-warning\">Update</button>\n                <button id=\"reset\" type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n              </form> \n              <br/>\n              <button id=\"goBack\"[routerLink]=\"['/item-page']\">Go back</button>\n  </main>\n</div> \n  \n   "

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"main\">DASH.</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\r\n        <!-- <li *ngIf=\"isCompanyAdmin()\"><a (click)=\"logout()\">LogoutCADMN</a></li> -->\r\n      </ul>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n    <!-- <div class=\"row\"></div> -->\r\n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\r\n            <div class=\"list-group panel\">\r\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\r\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\r\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\r\n            </div>\r\n        </div>\r\n        <main class=\"col-md-9 col-xs-11 p-l-2 p-t-2\">\r\n            <a href=\"#sidebar\" data-toggle=\"collapse\"><i class=\"fa fa-navicon fa-lg\"></i></a>\r\n            <hr>\r\n            <div class=\"page-header\">\r\n                <h1>Wellcome</h1>\r\n            </div>\r\n            <p class=\"lead\">This is scanner app.</p>\r\n        </main>\r\n    <!-- </div> -->\r\n</div>\r\n  "

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<h1>\n  Wrong page buddy :)\n</h1>\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"user-page\">Update user</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n  <form  class=\"form\" *ngIf=\"user\" (ngSubmit)=\"send()\" >\n    <div class=\"form-group\">\n        <label>First name</label>\n        <input type=\"text\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"user.firstName\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Last name</label>\n        <input type=\"text\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"user.lastName\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <!-- {{ user | json }} -->\n      <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Role</label>\n      <input type=\"text\" name=\"role\" class=\"form-control\" [(ngModel)]=\"user.role\"/>\n    </div>\n    <div class=\"form-group\">\n    </div>\n    <button id=\"save\" type=\"submit\" [disabled]=\"\"(click)=\"save(user)\" class=\"btn btn-warning\">Update</button>\n    <button id=\"reset\" type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n  </form>\n  <br/>\n  <button id=\"goBack\"[routerLink]=\"['/user-page']\">Go back</button>\n  </main>\n</div>"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"user-page\">New user</a>\n        <a class=\"navbar-brand\" href=\"main\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav pull-right\">\n       <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container-fluid\"> \n   \n        <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n                <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n                <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n  <form  class=\"form\" *ngIf=\"user\" (ngSubmit)=\"send()\" >\n    <div class=\"form-group\">\n        <label>First name</label>\n        <input type=\"text\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"user.firstName\"/>\n    </div>\n    <div class=\"form-group\">\n        <label>Last name</label>\n        <input type=\"text\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"user.lastName\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <!-- {{ company | json }} -->\n      <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Role</label>\n      <input type=\"text\" name=\"role\" class=\"form-control\" [(ngModel)]=\"user.role\"/>\n    </div>\n    <div class=\"form-group\">\n    </div>\n    <button id=\"save\" type=\"submit\" [disabled]=\"\"(click)=\"save(user)\" class=\"btn btn-warning\">Save</button>\n    <button id=\"reset\" type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n  </form>\n  <br/>\n  <button id=\"goBack\"[routerLink]=\"['/user-page']\">Go back</button>\n</main>\n</div>\n\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"user-page\">Users</a>\n      <a class=\"navbar-brand\" href=\"main\">Home</a>\n    </div>\n    <ul class=\"nav navbar-nav pull-right\">\n     <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n \n      <div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n          <div class=\"list-group panel\">\n              <a [routerLink]=\"['/user-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Users</span></a>\n              <a [routerLink]=\"['/item-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Items</span></a>\n              <a [routerLink]=\"['/company-page']\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Companies</span></a>\n          </div>\n      </div>\n\n\n      <div class=\"search\"> \n          <div class=\"engine\"> \n              <input placeholder=\"searchByUsername\" type=\"text\"  [(ngModel)]=\"username\"><button  class=\"btn btn-primary\" (click)=\"findByUsername()\" id=\"filter\">filter</button><button  class=\"btn btn-primary\" (click)=\"resetFilter()\" id=\"resetFilter\">reset filter</button>\n            </div> \n          <button id=\"new\"  class=\"btn icon-plus\" (click)=\"save(user)\" [routerLink]=\"['/new-user']\"> +</button>\n        </div> \n  <main class=\"col-md-10 col-xs-14 p-l-2 p-t-2\">\n    <table >\n      <thead >\n        <th>Id</th>\n        <th>FirstName</th>\n        <th>LastName</th>\n        <th>Username</th>\n        <th>Role</th>\n        <th>Update user</th>\n        <th>Delete user</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users; let i = index\">\n          <td>{{user.id}}</td>\n          <td>{{user.firstName}}</td>\n          <td>{{user.lastName}}</td>\n          <td>{{user.username}}</td>\n          <td>{{user.role}}</td>\n          <td><button [routerLink]=\"['/user',user.id]\" (click)=\"save(user)\" id=\"update\">update user</button></td>\n          <td><button (click)=\"delete(user)\" id=\"delete\">delete user</button></td>\n        </tr>\n      </tbody>\n    </table>\n</main>\n</div>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <div *ngIf=\"isLogin()\" >\n            <app-new-update-user [change]=\"change\" (saveUser)=\"save($event)\"></app-new-update-user>\n        </div>\n    </div>  \n    <a [routerLink]=\"['/user-page']\">Go back</a>\n  </div>"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n   <div class=\"flex-container\" fxLayout=\"column\">\n     <div class=\"flex-item\" [@list1] *ngIf=\"active\" [routerLink]=\"['barcode']\"><button mat-fab><mat-icon>home</mat-icon></button></div>\n     <div class=\"flex-item\" [@list2] *ngIf=\"active\" [routerLink]=\"['barcode/field']\"><button mat-fab><mat-icon>file_upload</mat-icon></button></div>\n     <div class=\"flex-item\" [@list3] *ngIf=\"active\" [routerLink]=\"['barcode/media']\"><button mat-fab><mat-icon>camera</mat-icon></button></div>\n     <div class=\"flex-item\"><button mat-fab (click)=\"onClick()\"><mat-icon>menu</mat-icon></button></div>\n   </div>\n</span>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<mat-sidenav #sidenav mode=\"side\">\n  <div class=\"flex-container\"\n       fxLayout=\"column\">\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode']\">Homepage\n    </button>\n    <div class=\"flex-item\">\n      <hr>\n    </div>\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode/media']\">Media Stream\n    </button>\n    <div class=\"flex-item\">\n      <hr>\n    </div>\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode/field']\">Input File\n    </button>\n  </div>\n</mat-sidenav>\n\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.path = 'api/company';
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.path);
    };
    CompanyService.prototype.getCompany = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id);
    };
    CompanyService.prototype.deleteCompany = function (company) {
        return this.http.delete(this.path + "/" + company.id);
    };
    CompanyService.prototype.saveCompany = function (company) {
        if (company.id === undefined) {
            return this.http.post(this.path, company, { headers: this.header });
        }
        else {
            return this.http.put(this.path + "/" + company.id, company, { headers: this.header });
        }
    };
    CompanyService.prototype.getCompanyByName = function (name) {
        return this.http.get(this.path + '?name=' + name);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.path = 'api/item';
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.path);
    };
    ItemService.prototype.getItem = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id);
    };
    ItemService.prototype.deleteItem = function (item) {
        return this.http.delete(this.path + '/' + item.id);
    };
    ItemService.prototype.saveItem = function (item) {
        if (item.id === undefined) {
            return this.http.post(this.path, item, { headers: this.header });
        }
        else {
            return this.http.put(this.path + "/" + item.id, item, { headers: this.header });
        }
    };
    ItemService.prototype.getItemByName = function (name) {
        return this.http.get(this.path + '?name=' + name);
    };
    return ItemService;
}());
ItemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.path = 'api/user';
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.path);
    };
    UserService.prototype.getUser = function (id) {
        // console.log('JEDAN USER ID', id);
        return this.http.get(this.path + "/" + id);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete(this.path + "/" + user.id);
    };
    UserService.prototype.saveUser = function (user) {
        if (user.id === undefined) {
            return this.http.post(this.path, user, { headers: this.header });
        }
        else {
            return this.http.put(this.path + "/" + user.id, user, { headers: this.header });
        }
    };
    UserService.prototype.getUsersByUsername = function (username) {
        // var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.path + '?username=' + username);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ })

},[890]);
//# sourceMappingURL=main.bundle.js.map