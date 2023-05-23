import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenericFormControl, isProjectExistAsyncValidators, someAsyncValidators, UID_VALIDATORS} from "@infra";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent {
  projects$ = new ReplaySubject<string[]>(1);
  formGroup: FormGroup;
  @Input() title = 'Forms';
  inputs: GenericFormControl[] = [
    {
      type: 'text',
      label: 'User id',
      formControlName: 'uid',
      validators: [
        ...UID_VALIDATORS,
        someAsyncValidators
      ]
    }, {
      type: 'text',
      label: 'Project name',
      formControlName: 'name',
      asyncValidators: [isProjectExistAsyncValidators(this.projects$.asObservable())]
    }, {
      type: 'text',
      label: 'Friend',
      formControlName: 'friendName'
    }, {
      type: 'date',
      label: 'Birthday',
      formControlName: 'birthday'
    },
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.getForm();

    setTimeout(() => {
      console.log('setTimeout');
      this.projects$.next(['pr1', 'pr2']);
    }, 1000 * 3)
  }

  private getForm(): FormGroup {

    return this.fb.group({
      name: ['', Validators.required],
      startDate: [],
      endDate: [],
      notes: [],
    })
  }

  onSubmit(value?: any) {

    console.log('submit', value);

  }
}
