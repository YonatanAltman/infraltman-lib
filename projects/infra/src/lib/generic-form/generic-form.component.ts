import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GenericFormControl} from "./generic-form.interface";

@Component({
  selector: 'infra-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() inputs!: GenericFormControl[];
  @Output() onSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    // const form = this.fb.group({});
    this.inputs.forEach(input => {
      input.isRequired = input.validators?.includes(Validators.required);
      this.formGroup.addControl(input.formControlName,
        this.fb.control('', [...input?.validators || []]))
    })
  }

  onFormSubmit() {
    // todo
    const value = this.formGroup.getRawValue();


    // success
    this.onSubmit.emit(value);
  }
}
