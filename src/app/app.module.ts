import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {FeedComponent} from './feed/feed.component';
import {ButtonModule, INFRA_ENVIRONMENT_TOKEN, LayoutModule} from "@infra";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'feed', component: FeedComponent},
      {path: 'home', component: HomeComponent},
      {path: '*', component: FeedComponent,},


    ]),
    LayoutModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    {provide:INFRA_ENVIRONMENT_TOKEN,useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
