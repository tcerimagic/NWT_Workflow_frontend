import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/competitionlist']">Home</a></li>
                    <li><a [routerLink]="['/applicantprogressdetail']">Applicant Progress Detail</a></li>
                    <li><a [routerLink]="['/applicantprogresssave']">Applicant Progress Save</a></li>
                    <li><a [routerLink]="['/applicantapply']">Applicant Apply</a></li>
                    <li><a [routerLink]="['/competitiondetail']">Competition Detail</a></li>
                    <li><a [routerLink]="['/competitionsave']">Competition Save</a></li>
                    <li><a [routerLink]="['/login']">Login</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent 
{
    pageTitle: string = 'Workflow';
}

