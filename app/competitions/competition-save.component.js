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
var CompetitionSaveComponent = (function () {
    function CompetitionSaveComponent(_route, _router, _competitionService) {
        this._route = _route;
        this._router = _router;
        this._competitionService = _competitionService;
        this.competition = {
            "competitionId": null,
            "competitionTitle": "",
            "codeBlockId": null,
            "published": "",
            "deadline": "",
            "maxNumberApplicants": null,
            "description": "",
            "imageUrl": ""
        };
        this.enableButton = false;
        this.competitionPositionMessage = "Competition position must be provided!";
    }
    CompetitionSaveComponent.prototype.ngOnInit = function () { };
    CompetitionSaveComponent.prototype.onBack = function () {
        this._router.navigate(['/competitions']);
    };
    CompetitionSaveComponent.prototype.setMinDate = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementById("startDate").setAttribute("min", today);
        document.getElementById("dueDate").setAttribute("min", today);
        if (this.competition.published != null) {
            document.getElementById("dueDate").setAttribute("min", this.competition.published);
        }
        else if (this.competition.deadline != null) {
            document.getElementById("startDate").setAttribute("max", this.competition.deadline);
        }
        else
            document.getElementById("dueDate").setAttribute("min", today);
    };
    CompetitionSaveComponent.prototype.saveCompetition = function () {
    };
    return CompetitionSaveComponent;
}());
CompetitionSaveComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/competitions/competition-save.component.html',
        styleUrls: ['app/competitions/competition-save.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        competition_service_1.CompetitionService])
], CompetitionSaveComponent);
exports.CompetitionSaveComponent = CompetitionSaveComponent;
//# sourceMappingURL=competition-save.component.js.map