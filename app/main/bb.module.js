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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var bb_component_1 = require('./bb.component');
var bb_router_1 = require('../routes/bb.router');
var mainNav_component_1 = require('../globals/components/main-nav/mainNav.component');
var mainFooter_component_1 = require('../globals/components/main-footer/mainFooter.component');
var home_component_1 = require('../home/home.component');
var page_component_1 = require('../page/page.component');
var BBModule = (function () {
    function BBModule() {
    }
    BBModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, bb_router_1.BBRouterModule, http_1.HttpModule],
            declarations: [bb_component_1.BBComponent, mainNav_component_1.MainNavComponent, mainFooter_component_1.MainFooterComponent, home_component_1.HomeComponent, page_component_1.PageComponent],
            bootstrap: [bb_component_1.BBComponent],
            providers: [platform_browser_1.Title]
        }), 
        __metadata('design:paramtypes', [])
    ], BBModule);
    return BBModule;
}());
exports.BBModule = BBModule;
//# sourceMappingURL=bb.module.js.map