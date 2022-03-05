import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  @Input() question: string = "";
  @Input() first: boolean = false
  @Input() last: boolean = false
  stepFormGroup!: FormGroup;

  ngOnInit(): void {
    this.stepFormGroup= this._formBuilder.group({
      formCount: 1,
      stepData: this._formBuilder.array([
        this._formBuilder.group({
          name: ["", Validators.required]
        })
      ])
    });
  }

}
