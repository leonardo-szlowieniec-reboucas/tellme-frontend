import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../answer';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})

export class AnswerListComponent implements OnInit {
  answers!: Answer[];
  answer!: Answer;
  survey: Survey = new Survey();

  constructor(private route: ActivatedRoute,
            private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.findSurveyById();
    this.findAllByIdSurvey();
  }

  private findAllByIdSurvey() {
    this.surveyService.findAnswerByIdSurvey(this.surveyId).subscribe(data => {
      this.answers = data;
      console.log(data);
    });
  }

  private findSurveyById() {
    this.surveyService.findById(this.surveyId).subscribe(data => {this.survey = data});
  }

  get surveyId(): number {
    return this.route.snapshot.params['surveyId'];
  }
}