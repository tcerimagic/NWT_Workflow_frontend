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
var competition_service_1 = require("./competition.service");
var applicant_service_1 = require("../applicants/applicant.service");
var CompetitionDetailComponent = (function () {
    function CompetitionDetailComponent(_route, _router, _competitionService, _applicantService) {
        this._route = _route;
        this._router = _router;
        this._competitionService = _competitionService;
        this._applicantService = _applicantService;
        this.pageTitle = 'Competition Detail';
    }
    CompetitionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getCompetition(id);
            _this.getApplicantsByCompetition(id);
        });
    };
    CompetitionDetailComponent.prototype.getCompetition = function (id) {
        var _this = this;
        this._competitionService.getCompetition(id).subscribe(function (competition) { return _this.competition = competition; }, function (error) { return _this.errorMessage = error; });
    };
    CompetitionDetailComponent.prototype.getApplicantsByCompetition = function (id) {
        var _this = this;
        this._applicantService.getApplicantsByCompetition(id).subscribe(function (applicants) { return _this.applicants = applicants; });
    };
    CompetitionDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CompetitionDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/competitions']);
    };
    CompetitionDetailComponent.prototype.edit = function (id) {
        this._router.navigate(['/applicantprogresssave', id]);
    };
    return CompetitionDetailComponent;
}());
CompetitionDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/competitions/competition-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        competition_service_1.CompetitionService,
        applicant_service_1.ApplicantService])
], CompetitionDetailComponent);
exports.CompetitionDetailComponent = CompetitionDetailComponent;
//# sourceMappingURL=competition-detail.component.js.map