import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { JoinComponent } from './components/home-page/join/join.component';
import { PartnersComponent } from './components/home-page/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';
import { StrategyProvidersComponent } from './components/strategy-providers/strategy-providers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    JoinComponent,
    PartnersComponent,
    FooterComponent,
    StrategyProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
