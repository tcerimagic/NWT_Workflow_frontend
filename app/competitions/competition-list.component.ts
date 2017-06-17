import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICompetition } from './competition';
import { CompetitionService } from './competition.service';



@Component({
    templateUrl: 'app/competitions/competition-list.component.html',
    styleUrls: ['app/competitions/competition-list.component.css']
})


export class CompetitionListComponent implements OnInit {

pageTitle: string= 'Competition List';
listFilter: string;
errorMessage: string;

competitions: ICompetition[];

constructor(
    private _competitionService: CompetitionService, 
    private _route: ActivatedRoute,
    private _router: Router
            ) {

}
ngOnInit(): void {
    this._competitionService.getCompetitions().subscribe(competitions => this.competitions = competitions, error => this.errorMessage = <any>error);
}

apply(id: number) {
this._router.navigate(['/applicantapply', id]);
}
}