import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from './survey';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseURL = "http://localhost:8080/api/v1/surveys";

  constructor(private httpClient: HttpClient) {  }

  createSurvey(survey: Survey): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, survey);
  }

  findById(surveyId: number): Observable<Survey> {
    return this.httpClient.get<Survey>(`${this.baseURL}/${surveyId}`);
  }

  findAnswerByIdSurvey(surveyId: number): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(`${this.baseURL}/${surveyId}/answers`);
  }

  saveAnswer(surveyId: number, respondentId: number, answer: Answer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${surveyId}/respondents/${respondentId}/answers`, answer);
  }
}
