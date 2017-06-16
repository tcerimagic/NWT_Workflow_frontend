import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICompetition } from './competition';

@Injectable()
export class CompetitionService {

private _competitionUrl = 'api/competitions/competitions.json';

constructor(private _http: Http) {}

getCompetitions(): Observable<ICompetition[]> {
return this._http.get(this._competitionUrl).map((response: Response) => <ICompetition[]>response.json()).do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);    
}

getCompetition(id: number):  Observable<ICompetition> {
        return this.getCompetitions().map((competitions: ICompetition[])=> competitions.find(c => c.competitionId === id));
    }

private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}