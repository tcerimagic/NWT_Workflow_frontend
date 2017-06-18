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
var router_1 = require("@angular/router");
var applicant_service_1 = require("./applicant.service");
var ApplicantProgressSaveComponent = (function () {
    function ApplicantProgressSaveComponent(_route, _router, _applicantService) {
        this._route = _route;
        this._router = _router;
        this._applicantService = _applicantService;
    }
    ApplicantProgressSaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) {
            _this.applicantId = +params['id'];
            _this.getApplicant();
        });
    };
    ApplicantProgressSaveComponent.prototype.updateStageList = function (stageIndex) {
        for (var i = 0; i <= stageIndex; i++) {
            this.applicant.stage[i] = true;
        }
        for (i = stageIndex + 1; i < 4; i++) {
            this.applicant.stage[i] = false;
        }
    };
    ApplicantProgressSaveComponent.prototype.getApplicant = function () {
        var _this = this;
        this._applicantService.getApplicant(this.applicantId).subscribe(function (appllicant) { return _this.applicant = appllicant; }, function (error) { return _this.errorMessage = error; });
    };
    return ApplicantProgressSaveComponent;
}());
ApplicantProgressSaveComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/applicants/applicant-progress-save.component.html',
        styleUrls: ['app/applicants/applicant-progress-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        applicant_service_1.ApplicantService])
], ApplicantProgressSaveComponent);
exports.ApplicantProgressSaveComponent = ApplicantProgressSaveComponent;
//# sourceMappingURL=applicant-progress-save.component.js.map