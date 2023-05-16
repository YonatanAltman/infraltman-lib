import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {INFRA_ENVIRONMENT_TOKEN} from "@infra";
import {HttpClientModule} from "@angular/common/http";
import {CountryFormModule} from "./country-form/country-form.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountryFormModule
  ],
  providers: [
    {
      provide: INFRA_ENVIRONMENT_TOKEN,
      useValue: {api: 'https://restcountries.com/v3.1/', isProd: true}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
