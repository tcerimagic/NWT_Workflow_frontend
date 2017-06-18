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
var applicant_progress_detail_component_1 = require("./applicant-progress-detail.component");
var applicant_apply_component_1 = require("./applicant-apply.component");
var applicant_progress_save_component_1 = require("./applicant-progress-save.component");
var applicant_service_1 = require("./applicant.service");
var ApplicantModule = (function () {
    function ApplicantModule() {
    }
    return ApplicantModule;
}());
ApplicantModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            applicant_apply_component_1.ApplicantApplyComponent,
            applicant_progress_detail_component_1.ApplicantProgressDetailComponent,
            applicant_progress_save_component_1.ApplicantProgressSaveComponent
        ],
        providers: [
            applicant_service_1.ApplicantService
        ]
    })
], ApplicantModule);
exports.ApplicantModule = ApplicantModule;
//# sourceMappingURL=applicant.module.js.map