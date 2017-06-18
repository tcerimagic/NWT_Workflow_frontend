import { Component } from '@angular/core';

import { IApplicant } from './applicant';
import { ApplicantService } from './applicant.service';

@Component({
    templateUrl: 'app/applicants/applicant-progress-detail.component.html',
    styleUrls: ['app/applicants/applicant-progress-detail.component.css']
})
export class ApplicantProgressDetailComponent {
    inputKey: string;
    errorMessage: string;

    isActive: boolean = false;

    applicant: IApplicant;

       
    constructor(private _applicantService: ApplicantService) {
    }

    searchByKey(): void {        
        this._applicantService.getApplicantByKey(this.inputKey).subscribe(appllicant => this.applicant = appllicant, error => this.errorMessage = <any>error);
    }
}