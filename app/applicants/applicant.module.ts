import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ApplicantProgressDetailComponent } from './applicant-progress-detail.component';
import { ApplicantApplyComponent } from './applicant-apply.component';
import { ApplicantProgressSaveComponent } from './applicant-progress-save.component';



@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ApplicantApplyComponent,
    ApplicantProgressDetailComponent,
    ApplicantProgressSaveComponent
  ],
})
export class ApplicantModule { }