import { PipeTransform, Pipe } from '@angular/core';
import { ICompetition } from './competition';


@Pipe({
    name: 'competitionFilter'
})

export class CompetitionFilterPipe implements PipeTransform {

    transform (value: ICompetition[], filterBy: string): ICompetition[]{ filterBy = filterBy? filterBy.toLocaleLowerCase(): null; return filterBy ? value.filter((competition: ICompetition) => competition.competitionTitle.toLocaleLowerCase().indexOf(filterBy) !== -1): value;}
}

