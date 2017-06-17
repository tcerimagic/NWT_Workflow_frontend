import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ICompetition } from './competition';
import { CompetitionService } from './competition.service';

@Component({
    templateUrl: 'app/competitions/competition-detail.component.html'
})
export class CompetitionDetailComponent implements OnInit, OnDestroy{

    pageTitle: string = 'Competition Detail';
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
