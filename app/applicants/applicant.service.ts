import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IApplicant } from './applicant';

@Injectable()
export class ApplicantService {

private _applicantUrl = 'api/applicants/applicants.json';

constructor(private _http: Http) {}

getApplicants(): Observable<IApplicant[]> {
return this._http.get(this._applicantUrl)
                 .map((response: Response) => <IApplicant[]>response.json())
                 .catch(this.handleError);    
}

getApplicant(id: number):  Observable<IApplicant> {
        return this.getApplicants().map((applicants: IApplicant[])=> applicants.find(a => a.applicantId === id));
    }

getApplicantsByCompetition(id: number):  Observable<IApplicant[]> {
        return this.getApplicants().map((applicants: IApplicant[])=> applicants.filter(a => a.competitionId === id));
    }
    
private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}