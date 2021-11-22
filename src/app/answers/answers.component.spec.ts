import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerListComponent } from './answers.component';

describe('AnswerListComponent', () => {
  let component: AnswerListComponent;
  let fixture: ComponentFixture<AnswerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});