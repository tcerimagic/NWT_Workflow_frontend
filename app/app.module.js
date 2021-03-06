"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var shared_module_1 = require("./shared/shared.module");
var competition_module_1 = require("./competitions/competition.module");
var applicant_module_1 = require("./applicants/applicant.module");
var login_component_1 = require("./login/login.component");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./common/menu.component");
var global_events_manager_1 = require("./common/global-events-manager");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            app_routing_module_1.AppRoutingModule,
            competition_module_1.CompetitionModule,
            applicant_module_1.ApplicantModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            menu_component_1.MenuComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [global_events_manager_1.GlobalEventsManager]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map