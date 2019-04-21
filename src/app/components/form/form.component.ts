import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as reducer from '../../store/reducers';
import {EnterNumber} from '../../store/actions/math.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public title = 'Hello, this is my little test';
  public inputData;

  public yourNumber: FormGroup = new FormGroup({
    number: new FormControl(this.inputData, [
      Validators.minLength(1),
      Validators.maxLength(4)
    ]),
  });

  constructor(private store: Store<reducer.State>) { }

  public getInputData(inputData) {
    this.store.dispatch(new EnterNumber(inputData));
  }

  ngOnInit() {
    this.inputData = this.store.select('currentNumber');
  }

}
