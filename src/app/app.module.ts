import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerListComponent } from './answers/answers.component';
import { from } from 'rxjs';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { FormsModule } from '@angular/forms';
import { SaveAnswerComponent } from './save-answer/save-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerListComponent,
    CreateSurveyComponent,
    SaveAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
