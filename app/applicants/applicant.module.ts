import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ApplicantProgressComponent } from './applicant-progress.component';
import { ApplicantApplyComponent } from './applicant-apply.component';



@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ApplicantApplyComponent,
    ApplicantProgressComponent
  ],
})
export class ApplicantModule { }