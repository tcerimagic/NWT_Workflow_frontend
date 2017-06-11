import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CompetitionModule } from './competitions/competition.module';
import { ApplicantModule } from './applicants/applicant.module';



import { LoginComponent } from './login/login.component';
import { AppComponent }  from './app.component';
import { MenuComponent } from './common/menu.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CompetitionModule,
    ApplicantModule,
    HttpModule
          ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    MenuComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
