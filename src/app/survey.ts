import { Respondent } from "./respondent";

export class Survey {
    id!: number;
    name!: string;
    description!: string;
    email!: string;
    respondents : Respondent[] = [];
}
