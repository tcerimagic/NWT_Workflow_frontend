import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ICompetition } from './competition';
import { CompetitionService } from './competition.service';

@Component({
    templateUrl: 'app/competitions/competition-save.component.html',
    styleUrls: ['app/competitions/competition-save.component.css']
})
export class CompetitionSaveComponent implements OnInit {

    competition: ICompetition = {
        "competitionId": null,
        "competitionTitle" :"",
        "codeBlockId": null,
        "published": "",
        "deadline": "",
        "maxNumberApplicants": null,
        "description" : "",
        "imageUrl": ""
    };
   
    private enableButton: boolean = false;
    private competitionPositionMessage: string = "Competition position must be provided!";
    
     constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _competitionService: CompetitionService,) {
    }

      ngOnInit(): void {}

     onBack(): void {
        this._router.navigate(['/competitions']);
    }

    setMinDate() {
        var today: string = new Date().toISOString().split('T')[0];
        document.getElementById("startDate").setAttribute("min", today);
        document.getElementById("dueDate").setAttribute("min", today);

        if (this.competition.published != null) {
            document.getElementById("dueDate").setAttribute("min", this.competition.published);
        }
        else if (this.competition.deadline != null) {
            document.getElementById("startDate").setAttribute("max", this.competition.deadline);
        }
        else
            document.getElementById("dueDate").setAttribute("min", today);
    }

    saveCompetition(): void {

    }
}