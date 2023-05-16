import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenericFormControl} from "@infra";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent {
  formGroup: FormGroup;
  @Input() title = 'Forms';
  inputs: GenericFormControl[] = [
    {
      type: 'text',
      label: 'Name',
      formControlName:'name'
    },{
      type: 'text',
      label: 'Friend',
      formControlName:'friendName'
    },
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.getForm();
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
