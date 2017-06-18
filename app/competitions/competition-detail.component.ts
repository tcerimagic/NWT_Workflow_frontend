import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ICompetition } from './competition';
import { CompetitionService } from './competition.service';

import { IApplicant } from '../applicants/applicant';
import { ApplicantService } from '../applicants/applicant.service';

@Component({
    templateUrl: 'app/competitions/competition-detail.component.html'
})
export class CompetitionDetailComponent implements OnInit, OnDestroy{

    pageTitle: string = 'Competition Detail';
    competition: ICompetition;
    errorMessage: string;
    private sub: Subscription;
    applicants: IApplicant[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _competitionService: CompetitionService,
                private _applicantService: ApplicantService) {
    }


    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getCompetition(id);
                this.getApplicantsByCompetition(id);
        });
    }


     getCompetition(id: number) {
        this._competitionService.getCompetition(id).subscribe(
            competition => this.competition = competition,
            error => this.errorMessage = <any>error);
    }
    
    getApplicantsByCompetition(id: number) {
         this._applicantService.getApplicantsByCompetition(id).subscribe(applicants => this.applicants = applicants)
    }

     ngOnDestroy() {
        this.sub.unsubscribe();
    }

   

    onBack(): void {
        this._router.navigate(['/competitions']);
    }

     edit(id: number) {
        this._router.navigate(['/applicantprogresssave', id]);
    }


}
