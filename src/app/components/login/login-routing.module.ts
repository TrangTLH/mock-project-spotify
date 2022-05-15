import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Routing} from "@enums/routing.enum";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path: Routing.Login,
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
