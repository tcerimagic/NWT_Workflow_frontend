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
var CompetitionListComponent = (function () {
    function CompetitionListComponent(_competitionService, _route, _router) {
        this._competitionService = _competitionService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Competition List';
    }
    CompetitionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._competitionService.getCompetitions().subscribe(function (competitions) { return _this.competitions = competitions; }, function (error) { return _this.errorMessage = error; });
    };
    CompetitionListComponent.prototype.apply = function (id) {
        this._router.navigate(['/competition', id]);
    };
    return CompetitionListComponent;
}());
CompetitionListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/competitions/competition-list.component.html',
        styleUrls: ['app/competitions/competition-list.component.css']
    }),
    __metadata("design:paramtypes", [competition_service_1.CompetitionService,
        router_1.ActivatedRoute,
        router_1.Router])
], CompetitionListComponent);
exports.CompetitionListComponent = CompetitionListComponent;
//# sourceMappingURL=competition-list.component.js.map