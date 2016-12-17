System.register(['@angular/core', '@angular/platform-browser', './bb.component', '../routes/bb.router', '../home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, platform_browser_1, bb_component_1, bb_router_1, home_component_1;
    var BBModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (bb_component_1_1) {
                bb_component_1 = bb_component_1_1;
            },
            function (bb_router_1_1) {
                bb_router_1 = bb_router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            BBModule = (function () {
                function BBModule() {
                }
                BBModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, bb_router_1.BBRouterModule],
                        declarations: [bb_component_1.BBComponent, home_component_1.HomeComponent],
                        bootstrap: [bb_component_1.BBComponent],
                        providers: [platform_browser_1.Title]
                    })
                ], BBModule);
                return BBModule;
            }());
            exports_1("BBModule", BBModule);
        }
    }
});
