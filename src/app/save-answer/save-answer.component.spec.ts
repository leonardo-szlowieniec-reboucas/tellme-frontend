import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAnswerComponent } from './save-answer.component';

describe('SaveAnswerComponent', () => {
  let component: SaveAnswerComponent;
  let fixture: ComponentFixture<SaveAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
