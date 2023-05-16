import {NgModule} from "@angular/core";
import {UserActionsComponent} from "./user-actions.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [UserActionsComponent],
  exports: [UserActionsComponent],
  imports: [CommonModule]
})
export class UserActionsModule {
  constructor() {
  }
  static forRoot(){

  }
}
