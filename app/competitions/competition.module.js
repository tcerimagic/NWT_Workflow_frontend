"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routing_module_1 = require("../app-routing.module");
var shared_module_1 = require("../shared/shared.module");
var competition_detail_component_1 = require("./competition-detail.component");
var competition_list_component_1 = require("./competition-list.component");
var competition_save_component_1 = require("./competition-save.component");
var competition_filter_pipe_1 = require("./competition-filter.pipe");
var applicant_filter_pipe_1 = require("../applicants/applicant-filter.pipe");
var competition_service_1 = require("./competition.service");
var CompetitionModule = (function () {
    function CompetitionModule() {
    }
    return CompetitionModule;
}());
CompetitionModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            competition_detail_component_1.CompetitionDetailComponent,
            competition_list_component_1.CompetitionListComponent,
            competition_save_component_1.CompetitionSaveComponent,
            competition_filter_pipe_1.CompetitionFilterPipe,
            applicant_filter_pipe_1.ApplicantFilterPipe
        ],
        exports: [
            competition_detail_component_1.CompetitionDetailComponent,
            competition_list_component_1.CompetitionListComponent,
            competition_save_component_1.CompetitionSaveComponent
        ],
        providers: [
            competition_service_1.CompetitionService
        ]
    })
], CompetitionModule);
exports.CompetitionModule = CompetitionModule;
//# sourceMappingURL=competition.module.js.map