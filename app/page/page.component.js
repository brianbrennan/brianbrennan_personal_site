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
var common_1 = require('@angular/common');
var page_service_1 = require('../globals/services/page.service');
var page_model_1 = require('../globals/models/page.model');
var marked = require('marked');
var PageComponent = (function () {
    function PageComponent(location, pageService) {
        var _this = this;
        this.location = location;
        this.pageService = pageService;
        this.page = new page_model_1.Page();
        this.pageService.getPage(location.path().replace('/', ''))
            .then(function (data) {
            _this.page = data;
            _this.page.content = marked(_this.page.content);
        });
    }
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page',
            templateUrl: './app/page/page.html',
            providers: [page_service_1.PageService]
        }), 
        __metadata('design:paramtypes', [common_1.Location, page_service_1.PageService])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map