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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var applicant_service_1 = require("./applicant.service");
var ApplicantProgressDetailComponent = (function () {
    function ApplicantProgressDetailComponent(_applicantService) {
        this._applicantService = _applicantService;
        this.isActive = false;
    }
    ApplicantProgressDetailComponent.prototype.searchByKey = function () {
        var _this = this;
        this._applicantService.getApplicantByKey(this.inputKey).subscribe(function (appllicant) { return _this.applicant = appllicant; }, function (error) { return _this.errorMessage = error; });
    };
    return ApplicantProgressDetailComponent;
}());
ApplicantProgressDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/applicants/applicant-progress-detail.component.html',
        styleUrls: ['app/applicants/applicant-progress-detail.component.css']
    }),
    __metadata("design:paramtypes", [applicant_service_1.ApplicantService])
], ApplicantProgressDetailComponent);
exports.ApplicantProgressDetailComponent = ApplicantProgressDetailComponent;
//# sourceMappingURL=applicant-progress-detail.component.js.map