import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {
}
