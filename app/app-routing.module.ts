import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { ApplicantProgressDetailComponent } from './applicants/applicant-progress-detail.component';
import { ApplicantApplyComponent } from './applicants/applicant-apply.component';
import { ApplicantProgressSaveComponent } from './applicants/applicant-progress-save.component';

import { CompetitionDetailComponent } from './competitions/competition-detail.component';
import { CompetitionListComponent } from './competitions/competition-list.component';
import { CompetitionSaveComponent } from './competitions/competition-save.component';

import { LoginComponent } from './login/login.component';
import { AppComponent }  from './app.component';
import { MenuComponent } from './common/menu.component';

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot([ 
      { path: 'applicantapply', component: ApplicantApplyComponent },
      { path: 'applicantprogressdetail', component: ApplicantProgressDetailComponent },
      { path: 'applicantprogresssave', component: ApplicantProgressSaveComponent },
      { path: 'competitionlist', component: CompetitionListComponent },
      { path: 'competitiondetail', component: CompetitionDetailComponent },
      { path: 'competitionsave', component: CompetitionSaveComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'competitionlist', pathMatch: 'full' },
      { path: '**', redirectTo: 'competitionlist', pathMatch: 'full' }
    ]),
    ],
  
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }