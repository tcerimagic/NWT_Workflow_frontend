import { PipeTransform, Pipe } from '@angular/core';
import { IApplicant } from './applicant';


@Pipe({
    name: 'applicantFilter'
})

export class ApplicantFilterPipe implements PipeTransform {

    transform (value: IApplicant[], filterBy: string): IApplicant[]{ filterBy = filterBy? filterBy.toLocaleLowerCase(): null; return filterBy ? value.filter((applicant: IApplicant) => applicant.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;}
}

