import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';

// Admin Pages
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminadoptionrequestComponent } from './admin/adminadoptionrequest/adminadoptionrequest.component';
import { AdminanimallistComponent } from './admin/adminanimallist/adminanimallist.component';
import { AdminimportComponent } from './admin/adminimport/adminimport.component';

// User Pages
import { AdoptionpageComponent } from './user/adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './user/adoptionform/adoptionform.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DogInfoComponent } from './user/dog-info/dog-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCountriesComponent,
    ShowCountryComponent,
    HomepageComponent,
    AdoptionpageComponent,
    AdoptionformComponent,
    AboutusComponent,
    AdminloginComponent,
    AdminadoptionrequestComponent,
    AdminanimallistComponent,
    AdminimportComponent,
    NavbarComponent,
    FooterComponent,
    DogInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
