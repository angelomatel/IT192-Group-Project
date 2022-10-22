import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { AdoptionpageComponent } from './adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './adoptionform/adoptionform.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AdoptionrequestComponent } from './adoptionrequest/adoptionrequest.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowCountriesComponent,
    ShowCountryComponent,
    HomepageComponent,
    AdoptionpageComponent,
    AdoptionformComponent,
    AboutusComponent,
    LoginformComponent,
    AdoptionrequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSliderModule
  ],
  exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
