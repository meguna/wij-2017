"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SplashComponent = (function () {
    function SplashComponent() {
    }
    SplashComponent = __decorate([
        core_1.Component({
            selector: 'splash',
            template: "\n    <h1>WELCOME TO</h1>\n    <h1 class=\"main-title\">WOMEN IN JAPAN 2017</h1>\n    <a class=\"splash-button\" routerLink=\"/index\">Enter Site</a>\n  ",
            styles: ["\n      .splash-button {\n        text-transform:uppercase;\n        padding:5px;\n        background-color:rgba(255, 255, 255, 0.3);\n        color:#343434;\n        font-size:2em;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], SplashComponent);
    return SplashComponent;
}());
exports.SplashComponent = SplashComponent;
//# sourceMappingURL=splash.component.js.map