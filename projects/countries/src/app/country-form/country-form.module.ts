import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryFormComponent} from './country-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CountryFormComponent
  ], exports: [
    CountryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CountryFormModule {
}
