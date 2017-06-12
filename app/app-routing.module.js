"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var applicant_progress_detail_component_1 = require("./applicants/applicant-progress-detail.component");
var applicant_apply_component_1 = require("./applicants/applicant-apply.component");
var applicant_progress_save_component_1 = require("./applicants/applicant-progress-save.component");
var competition_detail_component_1 = require("./competitions/competition-detail.component");
var competition_list_component_1 = require("./competitions/competition-list.component");
var competition_save_component_1 = require("./competitions/competition-save.component");
var login_component_1 = require("./login/login.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'applicantapply', component: applicant_apply_component_1.ApplicantApplyComponent },
                { path: 'applicantprogressdetail', component: applicant_progress_detail_component_1.ApplicantProgressDetailComponent },
                { path: 'applicantprogresssave', component: applicant_progress_save_component_1.ApplicantProgressSaveComponent },
                { path: 'competitionlist', component: competition_list_component_1.CompetitionListComponent },
                { path: 'competitiondetail', component: competition_detail_component_1.CompetitionDetailComponent },
                { path: 'competitionsave', component: competition_save_component_1.CompetitionSaveComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: '', redirectTo: 'competitionlist', pathMatch: 'full' },
                { path: '**', redirectTo: 'competitionlist', pathMatch: 'full' }
            ]),
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map