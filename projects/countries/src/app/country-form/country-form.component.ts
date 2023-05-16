import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent {
  formGroup: FormGroup;
  @Input() title = 'Forms';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.getForm();
  }

  private getForm(): FormGroup {

    return this.fb.group({
      name: ['',Validators.required],
      startDate: [],
      endDate: [],
      notes: [],
    })
  }

  onSubmit() {

    console.log('submit',this.formGroup.value);

  }
}
