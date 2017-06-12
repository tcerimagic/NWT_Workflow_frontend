import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CompetitionDetailComponent } from './competition-detail.component';
import { CompetitionListComponent } from './competition-list.component';
import { CompetitionSaveComponent } from './competition-save.component';



@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    CompetitionDetailComponent,
    CompetitionListComponent,
    CompetitionSaveComponent
  ],
  exports: [
    CompetitionDetailComponent,
    CompetitionListComponent,
    CompetitionSaveComponent
  ]
})
export class CompetitionModule { }