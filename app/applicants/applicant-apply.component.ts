import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';


import { ICompetition } from '../competitions/competition';
import { CompetitionService } from '../competitions/competition.service';

@Component({
    templateUrl: 'app/applicants/applicant-apply.component.html',
    styleUrls: ['app/applicants/applicant-apply.component.css']
})
export class ApplicantApplyComponent {

 pageTitle: string = 'Application Form';
    competition: ICompetition;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _competitionService: CompetitionService) {
    }


    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getCompetition(id);
        });
    }


     getCompetition(id: number) {
        this._competitionService.getCompetition(id).subscribe(
            competition => this.competition = competition,
            error => this.errorMessage = <any>error);
    }

     ngOnDestroy() {
        this.sub.unsubscribe();
    }

   

    onBack(): void {
        this._router.navigate(['/competitions']);
    }
}