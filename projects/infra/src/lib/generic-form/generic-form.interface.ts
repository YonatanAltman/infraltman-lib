import {ValidatorFn} from "@angular/forms";

export interface GenericFormControl {
  label?: string;
  formControlName: string;
  type: 'text' | 'number' | 'textarea' | 'date',
  validators?: ValidatorFn[]
}
