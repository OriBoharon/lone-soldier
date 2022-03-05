import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionsQuestionComponent } from './card-options-question.component';

describe('CardOptionsQuestionComponent', () => {
  let component: CardOptionsQuestionComponent;
  let fixture: ComponentFixture<CardOptionsQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOptionsQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOptionsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
