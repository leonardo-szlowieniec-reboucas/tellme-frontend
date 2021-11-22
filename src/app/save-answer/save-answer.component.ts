import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../answer';
import { Survey } from '../survey';
import { Respondent } from '../respondent';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-save-answer',
  templateUrl: './save-answer.component.html',
  styleUrls: ['./save-answer.component.css']
})

export class SaveAnswerComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;
  respondent: Respondent = new Respondent();
  answer: Answer = new Answer();
  survey: Survey = new Survey();

  constructor(private route: ActivatedRoute,
          private surveyService: SurveyService) { }
  
  ngOnInit(): void {
    this.findSurveyById();
  }
  
  private findSurveyById() {
    this.surveyService.findById(this.surveyId).subscribe(data => {this.survey = data;});
  }

  onSubmit(answerForm:NgForm) {
    if (answerForm.valid)
      this.saveAnswer();
  }

  saveAnswer() {
    this.error = false;
    this.success = false;
    this.surveyService.saveAnswer(this.surveyId, this.respondentId, this.answer).subscribe( data => {
      this.success = true;
      this.answer.description = ' ';
      console.log(data);
    },
    error => {
      this.error = true;
      console.log(error)
    });
  }

  get respondentId(): number {
    return this.route.snapshot.params['respondentId'];
  }

  get surveyId(): number {
    return this.route.snapshot.params['surveyId'];
  }
}