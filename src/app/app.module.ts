import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './commons/home-container/header/header.component';
import {FooterComponent} from './commons/home-container/footer/footer.component';
import {SidebarComponent} from './commons/home-container/sidebar/sidebar.component';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from "./components/home/home-routing.module";
import {CardComponent} from './commons/home-container/card/card.component';
import {MainComponent} from './commons/home-container/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderLoginComponent} from "./commons/login-container/header-login/header-login.component";
import {FooterLoginComponent} from "./commons/login-container/footer-login/footer-login.component";
import {MainLoginComponent} from "./commons/login-container/main-login/main-login.component";
import {LoginRoutingModule} from "./components/login/login-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CardComponent,
    MainComponent,
    LoginComponent,
    HeaderLoginComponent,
    FooterLoginComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
