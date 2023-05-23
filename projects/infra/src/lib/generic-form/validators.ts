import {AbstractControl, AsyncValidatorFn, ValidationErrors, Validators} from "@angular/forms";
import {delay, map, Observable, of, take} from "rxjs";

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


export const isProjectExistAsyncValidators = (projects$: Observable<string[]>): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return projects$.pipe(map(projects => {
        const {value} = control;
        if (!value) {
          return null
        }
        const project = projects.find(pr => pr === value);
        return project ? {'projectAlreadyExists': true} : null;
      }),
      take(1) // because the observable mast be complete like http
    )
  }
}


const EMAILS = [
  'amir',
  'tom',
  'yuval'
]


