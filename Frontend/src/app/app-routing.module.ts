import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdoptionpageComponent } from './adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './adoptionform/adoptionform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AdoptionrequestComponent } from './adoptionrequest/adoptionrequest.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/adoptionpage', pathMatch: 'full' },
  { path: 'adoptionpage', component: AdoptionpageComponent },
  { path: '', redirectTo: '/adoptionform', pathMatch: 'full' },
  { path: 'adoptionform', component: AdoptionformComponent },
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', redirectTo: '/loginform', pathMatch: 'full' },
  { path: 'loginform', component: LoginformComponent },
  { path: '', redirectTo: '/adoptionrequest', pathMatch: 'full' },
  { path: 'adoptionrequest', component: AdoptionrequestComponent },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

