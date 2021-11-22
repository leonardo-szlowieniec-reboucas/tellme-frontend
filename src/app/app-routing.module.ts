import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerListComponent } from './answers/answers.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { SaveAnswerComponent } from './save-answer/save-answer.component';

const routes: Routes = [
  {path: 'create-survey', component: CreateSurveyComponent},
  {path: 'to-answer/:surveyId/:respondentId', component: SaveAnswerComponent},
  {path: 'answers/:surveyId', component: AnswerListComponent},
  {path: '', redirectTo: 'create-survey', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
