import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";
import {delay, Observable, of} from "rxjs";

export const UID_VALIDATORS = [
  Validators.required,
  Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]*$'),
  Validators.maxLength(8),
  Validators.minLength(6),
]


// todo make it work!
export function someAsyncValidators(control: AbstractControl):
  Observable<ValidationErrors | null> | null {

  const email: string = control.value;
  const res = EMAILS.find(e => e.indexOf(email) > -1) ? {'error': 'email is taken'} : null;
  console.log(res);
  return of(res).pipe(delay(4000))
}


const EMAILS = [
  'amir',
  'tom',
  'yuval'
]
