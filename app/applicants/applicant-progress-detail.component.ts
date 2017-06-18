import { Component } from '@angular/core';

import { IApplicant } from './applicant';

@Component({
    templateUrl: 'app/applicants/applicant-progress-detail.component.html',
    styleUrls: ['app/applicants/applicant-progress-detail.component.css']
})
export class ApplicantProgressDetailComponent {
    showUserInfo: boolean = true;
    applicant: IApplicant;

    
}