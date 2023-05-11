import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {OButtonModule} from 'o-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
