import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Routing} from "@enums/routing.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.Login,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
