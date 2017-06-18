import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CompetitionDetailComponent } from './competition-detail.component';
import { CompetitionListComponent } from './competition-list.component';
import { CompetitionSaveComponent } from './competition-save.component';

import { CompetitionFilterPipe } from './competition-filter.pipe';
import { ApplicantFilterPipe } from '../applicants/applicant-filter.pipe';


import { CompetitionService } from './competition.service';


@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    CompetitionDetailComponent,
    CompetitionListComponent,
    CompetitionSaveComponent,
    CompetitionFilterPipe,
    ApplicantFilterPipe
  ],
  exports: [
    CompetitionDetailComponent,
    CompetitionListComponent,
    CompetitionSaveComponent
  ],
  providers: [
    CompetitionService
  ]
})
export class CompetitionModule { }