import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from "../../../infra/src/lib/layout/layout.module";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "../../../infra/src/lib/button/button.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        LayoutModule,
        RouterModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
