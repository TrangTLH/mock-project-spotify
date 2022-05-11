import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import {HomeRoutingModule} from "./components/home/home-routing.module";
import { CardComponent } from './commons/card/card.component';
import { MainComponent } from './commons/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
