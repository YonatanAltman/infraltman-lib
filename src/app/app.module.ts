import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {FeedComponent} from './feed/feed.component';
import {LayoutModule} from "../layout/layout.module";
import {ButtonModule} from "../layout/button/button.module";

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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
