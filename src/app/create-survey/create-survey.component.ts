import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { Respondent } from '../respondent';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})

export class CreateSurveyComponent implements OnInit {
  submmited: boolean = false;
  clickedRespondent: boolean = false;
  success: boolean = false;
  error: boolean = false;
  processing: boolean = false;
  survey: Survey = new Survey();
  respondent: Respondent = new Respondent();
  newRespondent : string = '';

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {}

  addRespondent(respondentForm:NgForm) {
    this.clickedRespondent = true;
    if (respondentForm.valid) {
      this.respondent = new Respondent;
      this.respondent.email = this.newRespondent;
      this.survey.respondents.push(this.respondent);
      this.newRespondent = '';
      this.clickedRespondent = false;
    }
  }

  onSubmit(surveyForm:NgForm) {
    this.submmited = true;
    this.error = false;
    this.success = false;
    this.processing = false;
    if (surveyForm.valid && !this.invalrespondentIdsSize)
      this.saveSurvey();
  }

  saveSurvey() {
    this.surveyService.createSurvey(this.survey).subscribe( data => {
      
      this.processing = false;
      this.submmited = false;
      this.newRespondent = '';
      this.survey = new Survey();
      
      this.success = true;
      
      console.log(data);
    },
    error => {
      this.processing = false;
      this.submmited = false;
      this.error = true;
      console.log(error);
    });
    this.processing = true;
    //this.submmited = false;
    // this.newRespondent = '';
    // this.survey = new Survey();
  }

  get invalrespondentIdsSize(): boolean {
    return this.survey.respondents.length < 2 || this.survey.respondents.length > 12;
  }
}