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
var competition_service_1 = require("../competitions/competition.service");
var ApplicantApplyComponent = (function () {
    function ApplicantApplyComponent(_route, _router, _competitionService) {
        this._route = _route;
        this._router = _router;
        this._competitionService = _competitionService;
        this.pageTitle = 'Application Form';
    }
    ApplicantApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getCompetition(id);
        });
    };
    ApplicantApplyComponent.prototype.getCompetition = function (id) {
        var _this = this;
        this._competitionService.getCompetition(id).subscribe(function (competition) { return _this.competition = competition; }, function (error) { return _this.errorMessage = error; });
    };
    ApplicantApplyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ApplicantApplyComponent.prototype.onBack = function () {
        this._router.navigate(['/competitions']);
    };
    return ApplicantApplyComponent;
}());
ApplicantApplyComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/applicants/applicant-apply.component.html',
        styleUrls: ['app/applicants/applicant-apply.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        competition_service_1.CompetitionService])
], ApplicantApplyComponent);
exports.ApplicantApplyComponent = ApplicantApplyComponent;
//# sourceMappingURL=applicant-apply.component.js.map