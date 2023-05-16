import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { UserActionsComponent } from '../user-actions/user-actions.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavBarComponent,
    UserActionsComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
