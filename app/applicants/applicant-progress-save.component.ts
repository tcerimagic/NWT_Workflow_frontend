import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { IApplicant } from './applicant';
import { ApplicantService } from './applicant.service';

@Component({
    templateUrl: 'app/applicants/applicant-progress-save.component.html',
    styleUrls: ['app/applicants/applicant-progress-detail.component.css']
})
export class ApplicantProgressSaveComponent {
    errorMessage: string;
    applicantId: number;
    subscription: Subscription;
    applicant: IApplicant;
  
constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _applicantService: ApplicantService) {
    }

    ngOnInit(): void {
        this.subscription = this._route.params.subscribe(
            params => {
                this.applicantId = +params['id'];
                this.getApplicant();
        });
    }

    updateStageList(stageIndex: number): void {
        for (var i = 0; i <= stageIndex; i++) { 
            this.applicant.stage[i] = true;
        }

        for (i = stageIndex + 1; i < 4; i++) { 
            this.applicant.stage[i] = false;
        }
    }

    getApplicant(): void {        
        this._applicantService.getApplicant(this.applicantId).subscribe(appllicant => this.applicant = appllicant, error => this.errorMessage = <any>error);
    }
}