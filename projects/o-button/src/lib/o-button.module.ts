import { NgModule } from '@angular/core';
import { OButtonComponent } from './o-button.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    OButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OButtonComponent
  ]
})
export class OButtonModule { }
