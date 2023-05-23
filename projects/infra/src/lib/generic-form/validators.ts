import {AbstractControl, ValidationErrors} from "@angular/forms";
import {delay, Observable, of} from "rxjs";


// todo make it work!
export function someAsyncValidators(control: AbstractControl):
  Observable<ValidationErrors|null> | null {

  const email: string = control.value;
  const res = EMAILS.find(e => e.indexOf(email)) ? {'error': 'email is taken'} : null;
  console.log(res);
  return of(res).pipe(delay(2000))
}


const EMAILS = [
  'amir',
  'tom',
  'yuval'
]
