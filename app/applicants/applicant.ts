export interface IApplicant {
    applicantId: number;
    firstName: string;
    lastName: string;
    homeAddress: string;
    email: string;
    educationLevel: string;
    curriculumVitae: string;
    competitionId: number;
    password: string;
    stage: boolean[];

}