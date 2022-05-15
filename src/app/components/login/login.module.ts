import {NgModule} from '@angular/core';
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [],
  imports: [
    LoginRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    LoginComponent
  ]
})
export class LoginModule {
}
