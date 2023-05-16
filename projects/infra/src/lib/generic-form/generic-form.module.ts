import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from './generic-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GenericFormComponent
  ],exports: [
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class GenericFormModule { }
